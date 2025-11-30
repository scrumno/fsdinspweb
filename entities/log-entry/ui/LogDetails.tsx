import { Activity, Code, Cpu, Layout, Server, Zap } from 'lucide-react'
import { FlowArrow } from 'shared/ui/flow/FlowArrow'
import { FlowStep } from 'shared/ui/flow/FlowStep'
import type { MockEntry } from '../model/types'

export const LogDetails = ({ entry }: { entry: MockEntry }) => {
	return (
		<div className='absolute top-4 right-4 w-72 pointer-events-none animate-[fadeIn_0.2s_ease-out] hidden md:block'>
			<div className='bg-[#09090b] border border-zinc-700 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden'>
				<div className='bg-[#18181b] px-3 py-2 border-b border-zinc-800 flex justify-between items-center'>
					<span className='text-[10px] font-bold text-zinc-400 uppercase tracking-wider'>
						Detail Trace
					</span>
					<span className='text-[9px] font-mono text-zinc-600'>
						{entry.traceId}
					</span>
				</div>

				<div className='p-4 space-y-4'>
					{entry.type === 'fetch' && (
						<>
							<FlowStep
								icon={Code}
								title='App Call'
								sub='fetch()'
								status='done'
							/>
							<FlowArrow />
							<FlowStep
								icon={Zap}
								title='Interceptor'
								sub='Trap & Clone'
								status='active'
							/>
							<FlowArrow />
							<FlowStep
								icon={Server}
								title='Network'
								sub={`${entry.data.status} OK`}
								status='done'
							/>
							<div className='mt-3 pt-3 border-t border-zinc-800'>
								<div className='text-[10px] text-zinc-500 mb-1'>
									Response Body Preview:
								</div>
								<div className='text-[10px] font-mono text-green-400 bg-zinc-900 p-2 rounded'>
									{'{ "data": [...] }'}
								</div>
							</div>
						</>
					)}

					{entry.type === 'render' && (
						<>
							<FlowStep
								icon={Activity}
								title='Trigger'
								sub={entry.data.reason}
								status='done'
							/>
							<FlowArrow />
							<FlowStep
								icon={Cpu}
								title='Render'
								sub={`${entry.data.renderTime}`}
								status='warning'
							/>
							<FlowArrow />
							<FlowStep
								icon={Layout}
								title='Commit'
								sub='DOM Updated'
								status='done'
							/>
						</>
					)}

					{entry.type === 'value' && (
						<div className='space-y-2'>
							<div className='text-[10px] text-zinc-500 uppercase'>
								State Diff
							</div>
							<div className='font-mono text-[10px]'>
								<div className='text-red-400 line-through opacity-70'>
									{JSON.stringify(entry.data.prevValue)}
								</div>
								<div className='flex justify-center my-1 text-zinc-600'>↓</div>
								<div className='text-green-400 bg-green-900/10 p-2 rounded border border-green-500/20'>
									{JSON.stringify(entry.data.value)}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
