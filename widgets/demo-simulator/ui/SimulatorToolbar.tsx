import { Pause, Play, Search, Trash2, X } from 'lucide-react'

interface SimulatorToolbarProps {
	isPaused: boolean
	onTogglePause: () => void
	onClear: () => void
	onClose: () => void
}

export const SimulatorToolbar = ({
	isPaused,
	onTogglePause,
	onClear,
	onClose,
}: SimulatorToolbarProps) => {
	return (
		<div className='h-14 border-b border-zinc-800 bg-[#121214] flex items-center justify-between px-4'>
			<div className='flex items-center gap-4'>
				<div className='flex gap-1.5'>
					<div className='w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50'></div>
					<div className='w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50'></div>
				</div>
				<div className='h-4 w-px bg-zinc-800'></div>
				<div className='flex gap-1'>
					<button
						onClick={onTogglePause}
						className='p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors'
					>
						{isPaused ? <Play size={14} /> : <Pause size={14} />}
					</button>
					<button
						onClick={onClear}
						className='p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-red-400 transition-colors'
					>
						<Trash2 size={14} />
					</button>
				</div>
				<div className='relative'>
					<Search
						size={14}
						className='absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-600'
					/>
					<input
						type='text'
						placeholder='Filter...'
						className='bg-zinc-900 border border-zinc-800 rounded-md pl-8 pr-3 py-1 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700 w-48'
					/>
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<button onClick={onClose}>
					<X size={18} className='text-zinc-500 hover:text-zinc-200' />
				</button>
			</div>
		</div>
	)
}
