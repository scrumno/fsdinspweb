import type { LucideIcon } from 'lucide-react'

interface FlowStepProps {
	icon: LucideIcon
	title: string
	sub: string
	status: 'done' | 'active' | 'warning'
}

export const FlowStep = ({ icon: Icon, title, sub, status }: FlowStepProps) => {
	const styles = {
		done: 'text-zinc-500 bg-zinc-900 border-zinc-800 shadow-sm',
		active:
			'text-white bg-gradient-to-br from-blue-500/20 to-blue-600/5 border-blue-500/30 shadow-[0_0_15px_-3px_rgba(59,130,246,0.2)]',
		warning:
			'text-purple-300 bg-gradient-to-br from-purple-500/20 to-purple-600/5 border-purple-500/30 shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]',
	}

	return (
		<div className='relative z-10 flex items-center gap-3'>
			<div
				className={`
            w-9 h-9 rounded-lg border flex items-center justify-center 
            transition-all duration-300 ${styles[status]}
        `}
			>
				<Icon size={16} />
			</div>
			<div className='flex flex-col'>
				<div
					className={`text-[11px] font-bold tracking-wide ${
						status === 'done' ? 'text-zinc-500' : 'text-zinc-200'
					}`}
				>
					{title}
				</div>
				<div className='text-[9px] font-mono text-zinc-600'>{sub}</div>
			</div>
		</div>
	)
}
