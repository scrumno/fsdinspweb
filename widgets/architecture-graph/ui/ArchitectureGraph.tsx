import {
	ArrowRight,
	Code,
	Database,
	FileJson,
	Globe,
	Layers,
	Layout,
	Monitor,
	Play,
	Server,
	Share2,
	Zap,
} from 'lucide-react'
import { useState } from 'react'
import { InteractiveNode } from 'shared/ui/interactive-node/InteractiveNode'
import { SectionLabel } from 'shared/ui/section-label/SectionLabel'
import { GraphArrow } from 'widgets/architecture-graph/ui/components/graph-arrow/GraphArrow'
import type { GraphMode } from '../model/graph.types'
import ArchitectureGraphToolbar from './ArchitectureGraphToolbar'

export const ArchitectureGraph: React.FC = () => {
	const [mode, setMode] = useState<GraphMode>('overview')

	return (
		<div className='w-full bg-[#0e0e10] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col mb-12'>
			<ArchitectureGraphToolbar mode={mode} setMode={setMode} />

			{/* Canvas */}
			<div className='relative w-full overflow-x-auto bg-[#09090b] scrollbar-thin scrollbar-thumb-zinc-800'>
				<div className='w-fit min-w-[1400px] min-h-[500px] px-16 py-16 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] flex items-center justify-center'>
					{/* --- 1. OVERVIEW MODE --- */}
					{mode === 'overview' && (
						<div className='flex items-center gap-8 animate-[fadeIn_0.5s_ease-out]'>
							{/* App Layer */}
							<div className='flex flex-col gap-4'>
								<SectionLabel>Application Layer</SectionLabel>
								<div className='p-6 border border-dashed border-blue-500/20 rounded-2xl bg-blue-500/5 flex flex-col gap-6'>
									<InteractiveNode
										icon={Globe}
										title='User Action'
										color='blue'
										sub='UI Interaction'
										details='Пользователь нажимает кнопку или компонент монтируется, инициируя запрос данных.'
									/>
									<InteractiveNode
										icon={Code}
										title='Browser API'
										color='zinc'
										sub='fetch / xhr'
										details='Вызов стандартного API браузера (window.fetch или XMLHttpRequest).'
									/>
								</div>
							</div>

							<GraphArrow label='Intercept' />

							{/* Middleware Layer */}
							<div className='flex flex-col gap-4'>
								<SectionLabel color='text-purple-400'>Proxy Layer</SectionLabel>
								<div className='p-6 border border-purple-500/20 bg-purple-500/5 rounded-2xl flex flex-col items-center gap-6 shadow-[0_0_60px_-15px_rgba(192,132,252,0.1)]'>
									<div className='flex items-center gap-4'>
										<InteractiveNode
											icon={Zap}
											title='Monkey Patch'
											color='purple'
											sub='Trap'
											details='Подмененная функция fetch перехватывает вызов до того, как он уйдет в сеть.'
										/>
										<div className='h-px w-8 bg-purple-500/30'></div>
										<InteractiveNode
											icon={Share2}
											title='Clone Stream'
											color='purple'
											sub='.clone()'
											details='Создание копии потока (stream) ответа. Оригинал уходит приложению, копия — в парсер.'
										/>
									</div>
								</div>
							</div>

							<GraphArrow label='Async' dashed />

							{/* Store Layer */}
							<div className='flex flex-col gap-4'>
								<SectionLabel>State Manager</SectionLabel>
								<div className='p-6 border border-dashed border-green-500/20 rounded-2xl bg-green-500/5 flex flex-col gap-6'>
									<InteractiveNode
										icon={Layers}
										title='Batcher'
										color='yellow'
										sub='Buffer'
										details='Очередь событий. Накапливает логи, чтобы не обновлять UI слишком часто.'
									/>
									<InteractiveNode
										icon={Database}
										title='Zustand Store'
										color='green'
										sub='Memory'
										details='Глобальное хранилище состояния. Хранит массив всех логов (requests, renders).'
									/>
								</div>
							</div>

							<GraphArrow label='Subscribe' />

							{/* UI Layer */}
							<div className='flex flex-col gap-4'>
								<SectionLabel>Visualizer</SectionLabel>
								<div className='p-6 border border-zinc-800 rounded-2xl bg-[#121214] shadow-xl'>
									<InteractiveNode
										icon={Layout}
										title='DevTools UI'
										color='zinc'
										sub='Overlay'
										details='React-компоненты инспектора, которые рендерят данные из Zustand стора.'
									/>
								</div>
							</div>
						</div>
					)}

					{/* --- 2. INTERCEPTOR MODE --- */}
					{mode === 'interceptor' && (
						<div className='flex flex-row items-center gap-10 min-w-[1200px] animate-[fadeIn_0.5s_ease-out]'>
							{/* Step 1: Init */}
							<div className='flex flex-col items-center gap-2'>
								<div className='text-xs font-mono text-zinc-500 mb-2'>
									STEP 1
								</div>
								<InteractiveNode
									icon={Globe}
									title='window.fetch()'
									color='blue'
									sub='Invocation'
									details='Приложение вызывает fetch("/api/user")'
								/>
							</div>

							<GraphArrow label='Args' />

							{/* Step 2: The Trap */}
							<div className='p-8 border-2 border-purple-500/20 bg-[#0e0e10] rounded-2xl relative w-[500px] shadow-[0_0_60px_-15px_rgba(168,85,247,0.1)]'>
								<div className='absolute -top-3 left-6 bg-purple-600 text-white px-3 py-1 text-[10px] font-bold rounded shadow-lg tracking-wider'>
									INSIDE PROXY
								</div>

								<div className='flex flex-col gap-8'>
									{/* Top: Original Request */}
									<div className='flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800'>
										<div className='flex items-center gap-3'>
											<div className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></div>
											<span className='text-xs text-zinc-300 font-mono'>
												await originalFetch()
											</span>
										</div>
										<ArrowRight size={14} className='text-zinc-600' />
										<InteractiveNode
											icon={Server}
											title='Network'
											color='zinc'
											sub='Server'
											details='Реальный HTTP запрос уходит на сервер и возвращает Response.'
										/>
									</div>

									{/* Split Point */}
									<div className='relative flex items-center justify-center py-2'>
										<div
											className='absolute inset-0 flex items-center'
											aria-hidden='true'
										>
											<div className='w-full border-t border-dashed border-zinc-700'></div>
										</div>
										<div className='relative flex justify-center'>
											<span className='bg-[#0e0e10] px-3 text-[10px] text-zinc-500 font-mono uppercase border border-zinc-800 rounded-full'>
												Stream Split
											</span>
										</div>
									</div>

									{/* Bottom: Dual Processing */}
									<div className='flex items-center gap-6'>
										{/* Path A */}
										<div className='flex-1 flex flex-col items-center gap-2 border-r border-zinc-800 pr-6'>
											<span className='text-[10px] text-green-400 font-bold'>
												THREAD A (FAST)
											</span>
											<div className='p-3 bg-green-500/10 border border-green-500/20 rounded-lg w-full text-center'>
												<span className='text-xs text-green-400'>
													Return Original
												</span>
											</div>
											<span className='text-[10px] text-zinc-500 text-center leading-tight'>
												App gets response instantly
											</span>
										</div>

										{/* Path B */}
										<div className='flex-1 flex flex-col items-center gap-2'>
											<span className='text-[10px] text-purple-400 font-bold'>
												THREAD B (ASYNC)
											</span>
											<div className='p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg w-full text-center'>
												<span className='text-xs text-purple-400'>
													Response.clone()
												</span>
											</div>
											<span className='text-[10px] text-zinc-500 text-center leading-tight'>
												Reading body stream...
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className='flex flex-col gap-4'>
								<div className='flex items-center'>
									<GraphArrow />
									<InteractiveNode
										icon={Play}
										title='App logic'
										color='blue'
										sub='Resolve'
										details='Приложение получает управление и данные, не замечая перехвата.'
									/>
								</div>
								<div className='flex items-center'>
									<GraphArrow dashed />
									<InteractiveNode
										icon={FileJson}
										title='Parse JSON'
										color='purple'
										sub='Internal'
										details='Теневой процесс парсит тело ответа в JSON для логов.'
									/>
								</div>
							</div>
						</div>
					)}

					{/* --- 3. STORE MODE --- */}
					{mode === 'store' && (
						<div className='flex items-center gap-12 min-w-[1200px] animate-[fadeIn_0.5s_ease-out]'>
							{/* Inputs */}
							<div className='flex flex-col gap-8'>
								<div className='flex items-center gap-4'>
									<InteractiveNode
										icon={Monitor}
										title='High Freq Event'
										color='red'
										sub='React Render'
										details='Событие рендера компонента. Может происходить сотни раз в секунду.'
									/>
									<div className='flex flex-col gap-0.5'>
										<div className='w-1.5 h-1.5 rounded-full bg-red-500'></div>
										<div className='w-1.5 h-1.5 rounded-full bg-red-500 opacity-60'></div>
										<div className='w-1.5 h-1.5 rounded-full bg-red-500 opacity-30'></div>
									</div>
								</div>
								<div className='flex items-center gap-4'>
									<InteractiveNode
										icon={Zap}
										title='Low Freq Event'
										color='blue'
										sub='Console Log'
										details='Одиночное событие (например, console.log). Обрабатывается без задержек.'
									/>
								</div>
							</div>

							<GraphArrow label='Push' />

							{/* The Batcher Machine */}
							<div className='relative'>
								<div className='absolute -inset-4 bg-linear-to-r from-yellow-500/10 to-transparent blur-xl rounded-full opacity-20'></div>
								<div className='w-[400px] p-8 border border-yellow-500/30 rounded-2xl bg-[#0e0e10] relative shadow-[0_0_40px_-10px_rgba(234,179,8,0.1)]'>
									<div className='flex items-center justify-between mb-6'>
										<SectionLabel color='text-yellow-500'>
											Batch Controller
										</SectionLabel>
										<div className='flex gap-2 items-center'>
											<div className='w-2 h-2 rounded-full bg-yellow-500 animate-pulse'></div>
											<span className='text-[10px] text-yellow-500 font-mono'>
												ACTIVE
											</span>
										</div>
									</div>

									{/* Logic Flow inside Batcher */}
									<div className='space-y-6 relative'>
										{/* Queue */}
										<div className='bg-zinc-900/80 p-3 rounded-lg border border-zinc-800 flex items-center justify-between'>
											<span className='text-xs text-zinc-400'>Queue Array</span>
											<div className='flex gap-1'>
												{[1, 1, 1, 1, 1].map((_, i) => (
													<div
														key={i}
														className='w-4 h-6 bg-yellow-500/20 border border-yellow-500/40 rounded-sm'
													></div>
												))}
												<div className='w-4 h-6 border border-zinc-700 border-dashed rounded-sm'></div>
											</div>
										</div>

										{/* Arrow Down */}
										<div className='flex justify-center'>
											<ArrowRight
												className='rotate-90 text-zinc-600'
												size={16}
											/>
										</div>

										{/* Conditions */}
										<div className='grid grid-cols-2 gap-4'>
											<div className='p-3 border border-zinc-800 rounded-lg text-center bg-zinc-900/50'>
												<div className='text-[10px] text-zinc-500 mb-1'>
													SIZE LIMIT
												</div>
												<div className='text-xs text-zinc-300 font-mono'>
													{' '}
													50 items
												</div>
											</div>
											<div className='p-3 border border-zinc-800 rounded-lg text-center bg-zinc-900/50'>
												<div className='text-[10px] text-zinc-500 mb-1'>
													TIME LIMIT
												</div>
												<div className='text-xs text-zinc-300 font-mono'>
													Debounce 50ms
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='flex items-center gap-2'>
								<div className='w-12 h-0.5 bg-zinc-700'></div>
								<ArrowRight size={16} className='text-zinc-500' />
							</div>

							<div className='flex flex-col gap-6'>
								<SectionLabel>Commit Phase</SectionLabel>
								<InteractiveNode
									icon={Database}
									title='Zustand Set'
									color='green'
									sub='Single Update'
									details='Вместо 50 обновлений происходит одно. Это значительно снижает нагрузку на React.'
								/>
								<InteractiveNode
									icon={Layout}
									title='Re-render UI'
									color='zinc'
									sub='Virtual DOM'
									details='Интерфейс инспектора перерисовывается один раз с новой пачкой данных.'
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
