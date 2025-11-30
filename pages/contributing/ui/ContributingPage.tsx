import type { JSX } from 'react'
import { SectionHeader } from 'shared/ui/section-header/SectionHeader'
import { CodeBlock } from 'widgets/code-block/ui/CodeBlock'

export default function ContributingPage(): JSX.Element {
	return (
		<div className='space-y-10 animate-[fadeIn_0.5s_ease-out]'>
			<SectionHeader
				title='Разработка (Contributing)'
				subtitle='Как развернуть проект и добавить новый функционал.'
			/>

			<div className='space-y-6'>
				<div className='bg-bg-panel border border-border-highlight p-6 rounded-xl'>
					<h3 className='text-lg font-bold text-zinc-100 mb-4'>
						1. Клонирование и установка
					</h3>
					<CodeBlock
						language='bash'
						code={`git clone https://github.com/scrumno/d-insp-react.git
cd d-insp-react
npm install`}
					/>
				</div>

				<div className='bg-bg-panel border border-border-highlight p-6 rounded-xl'>
					<h3 className='text-lg font-bold text-zinc-100 mb-4'>
						2. Структура проекта
					</h3>
					<ul className='space-y-2 text-zinc-400 text-sm font-mono'>
						<li>
							<span className='text-brand-blue'>src/domains/Inspector</span> -
							UI компоненты инспектора
						</li>
						<li>
							<span className='text-brand-purple'>src/model</span> - Zustand
							Store (store.ts)
						</li>
						<li>
							<span className='text-brand-yellow'>src/shared/lib</span> -
							Утилиты и Interceptor (interceptor.ts)
						</li>
						<li>
							<span className='text-brand-green'>src/index.ts</span> - Public
							API (экспорты)
						</li>
					</ul>
				</div>

				<div className='bg-bg-panel border border-border-highlight p-6 rounded-xl'>
					<h3 className='text-lg font-bold text-zinc-100 mb-4'>
						3. Как добавить новый тип событий?
					</h3>
					<ol className='list-decimal list-inside space-y-3 text-zinc-400 text-sm'>
						<li>
							Добавьте интерфейс в <code>types.ts</code> (например,{' '}
							<code>DebugWebsocketEntry</code>).
						</li>
						<li>
							Расширьте Union type <code>DebugEntry</code>.
						</li>
						<li>
							В <code>interceptor.ts</code> создайте функцию патчинга (например,{' '}
							<code>patchWebSocket</code>).
						</li>
						<li>
							В <code>inspectorService.initialize</code> вызовите вашу функцию
							патчинга.
						</li>
						<li>
							Обновите UI компонент списка, чтобы он умел рендерить новый тип{' '}
							<code>type: 'websocket'</code>.
						</li>
					</ol>
				</div>
			</div>
		</div>
	)
}
