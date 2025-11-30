import { Badge, Layers, Layout, Share2, Terminal } from 'lucide-react'
import { SectionHeader } from 'shared/ui/section-header/SectionHeader'
import { ArchitectureGraph } from 'widgets/architecture-graph'
import { CodeBlock } from 'widgets/code-block/ui/CodeBlock'

export const CorePage = () => {
	return (
		<div className='space-y-12 animate-[fadeIn_0.5s_ease-out]'>
			<SectionHeader title='Core' subtitle='Визуализация работы пакета' />

			<ArchitectureGraph />

			<div className='grid gap-16'>
				{/* Section 1: Inspector Service */}
				<section className='relative group'>
					<div className='absolute -left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
					<div className='space-y-4'>
						<h3 className='text-xl font-bold text-blue-400 flex items-center gap-3'>
							<div className='p-1.5 rounded-lg border border-blue-500/20'>
								<Terminal size={18} />
							</div>
							Инициализация (interceptor.ts)
						</h3>
						<p className='text-zinc-400 text-sm leading-relaxed max-w-3xl'>
							Точка входа патчит глобальные объекты только в режиме разработки.
							Для продакшена используются легковесные заглушки (noop), чтобы не
							увеличивать бандл и исключить побочные эффекты.
						</p>
						<CodeBlock
							fileName='src/core/interceptor.ts'
							highlightLines={[12, 18, 26]}
							code={`export const inspectorService = {
  initialize: () => {
    // Защита от повторной инициализации и SSR
    if (typeof window === 'undefined' || initialized) return

    // В продакшене ставим "пустышки" (tree-shaking friendly)
    if (!isDev) {
      const win = window as any
      if (!win.d) win.d = <T>(v: T) => v
      initialized = true
      return
    }

    try {
      // Применяем манки-патчинг
      patchD()
      // @ts-ignore
      window.useDebugRender = useDebugRender
      patchFetch()
      patchXHR()
    } catch (e) {
      console.error('Ошибка инициализации инспектора', e)
    }

    initialized = true
  },
}`}
						/>
					</div>
				</section>

				{/* Section 2: Fetch Patching */}
				<section className='relative group'>
					<div className='absolute -left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
					<div className='space-y-4'>
						<div className='flex items-center justify-between'>
							<h3 className='text-xl font-bold text-purple-400 flex items-center gap-3'>
								<div className='p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20'>
									<Share2 size={18} />
								</div>
								Перехват Fetch
							</h3>
							<Badge color='blue'>Dual Stream Strategy</Badge>
						</div>
						<p className='text-zinc-400 text-sm leading-relaxed max-w-3xl'>
							Fetch API возвращает поток (Stream), который можно прочитать
							только один раз. Чтобы прочитать тело ответа и не сломать
							приложение, мы используем <code>response.clone()</code>.
							Оригинальный поток возвращается приложению мгновенно, а клон
							обрабатывается асинхронно.
						</p>
						<CodeBlock
							fileName='src/core/interceptor.ts (patchFetch)'
							highlightLines={[18, 47, 49]}
							code={`function patchFetch() {
  const originalFetch = window.fetch

  window.fetch = async (...args) => {
    const trace = getStackTrace() // Сохраняем стек вызовов

    try {
      // 1. Вызываем оригинальный fetch
      response = await originalFetch(...args)
    } catch (err) {
      useInspectorStore.getState().add({ ... })
      throw err
    }

    // 2. Если контент JSON/Text и размер допустим
    if (isJsonOrText && !isTooBig) {
      try {
        const clone = response.clone() // ВАЖНО: Клонирование потока
        clone.text().then(text => {
            // 3. Асинхронное чтение без блокировки UI
            useInspectorStore.getState().add({
              type: 'fetch',
              response: { body: safeParseBody(text), ... }
            })
          })
      } catch (e) {}
    } 
    
    return response // 4. Возврат оригинала
  }
}`}
						/>
					</div>
				</section>

				{/* Section 3: XHR Patching */}
				<section className='relative group'>
					<div className='absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
					<div className='space-y-4'>
						<h3 className='text-xl font-bold text-yellow-400 flex items-center gap-3'>
							<div className='p-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20'>
								<Layers size={18} />
							</div>
							Перехват XMLHttpRequest
						</h3>
						<p className='text-zinc-400 text-sm leading-relaxed max-w-3xl'>
							Необходим для поддержки <code>axios</code> и старого кода. Мы
							расширяем прототип XHR, добавляя свойство <code>_debug</code> для
							передачи контекста между методами <code>open()</code> (где
							известен URL) и <code>send()</code> (где известно тело запроса).
						</p>
						<CodeBlock
							fileName='src/core/interceptor.ts (patchXHR)'
							highlightLines={[12, 23]}
							code={`function patchXHR() {
  const originalOpen = XMLHttpRequest.prototype.open
  const originalSend = XMLHttpRequest.prototype.send

  // Перехват OPEN: сохраняем URL и метод
  XMLHttpRequest.prototype.open = function (method, url, ...args) {
    this._debug = {
      method,
      url: url.toString(),
      startTime: Date.now(),
      trace: getStackTrace(),
    }
    return originalOpen.call(this, method, url, ...args)
  }

  // Перехват SEND: получаем body и вешаем слушатели
  XMLHttpRequest.prototype.send = function (body?: any) {
    const onFinish = (isError: boolean) => {
        // Читаем responseText по событию load
        useInspectorStore.getState().add({ ... })
    }

    this.addEventListener('load', () => onFinish(false), { once: true })
    this.addEventListener('error', () => onFinish(true), { once: true })
    
    return originalSend.call(this, body)
  }
}`}
						/>
					</div>
				</section>

				{/* Section 4: Store & Batching */}
				<section className='relative group'>
					<div className='absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
					<div className='space-y-4'>
						<div className='flex items-center justify-between'>
							<h3 className='text-xl font-bold text-green-400 flex items-center gap-3'>
								<div className='p-1.5 rounded-lg bg-green-500/10 border border-green-500/20'>
									<Layout size={18} />
								</div>
								Store и Batching
							</h3>
							<Badge color='yellow'>Perfomance Optimization</Badge>
						</div>
						<p className='text-zinc-400 text-sm leading-relaxed max-w-3xl'>
							Частые события (например, ре-рендеры React компонентов) могут
							"зафлудить" инспектор, вызвав падение производительности. Механизм
							Batching накапливает события и обновляет Zustand Store пакетами
							раз в 50-100мс.
						</p>
						<CodeBlock
							fileName='src/core/store.ts'
							highlightLines={[32, 43]}
							code={`export const useInspectorStore = create<InspectorState>((set, get) => ({
  items: [],
  
  add: entry => {
    // Оптимизация для частых событий
    if (entry.type === 'render') {
      renderBatch.push(entry)

      // Сброс по переполнению буфера
      if (renderBatch.length >= MAX_BATCH_SIZE) {
        flushBatch(set)
        return
      }

      // Debounce: сброс по таймеру
      if (!batchTimeout) {
        batchTimeout = setTimeout(() => {
          flushBatch(set)
        }, BATCH_DELAY)
      }
      return
    }

    // Критические события (ошибки, fetch) пишем сразу
    set(state => ({
      items: appendWithLimit(state.items, [entry]),
    }))
  },
}))`}
						/>
					</div>
				</section>
			</div>
		</div>
	)
}
