import type { MockEntry } from '../model/types'
import { TypeIcon } from './TypeIcon'

interface LogEntryRowProps {
	entry: MockEntry
	onHover: (entry: MockEntry) => void
}

export const LogEntryRow = ({ entry, onHover }: LogEntryRowProps) => {
	return (
		<div
			onMouseEnter={() => onHover(entry)}
			className='group border-b border-zinc-800/50 p-2 hover:bg-[#18181b] cursor-default transition-colors flex items-center gap-3 relative'
		>
			{/* Highlight Bar */}
			<div
				className={`absolute left-0 top-0 bottom-0 w-0.5 ${
					entry.type === 'fetch'
						? 'bg-blue-500'
						: entry.type === 'render'
							? 'bg-purple-500'
							: 'bg-yellow-500'
				} opacity-0 group-hover:opacity-100 transition-opacity`}
			></div>

			{/* Icon Box */}
			<div
				className={`
            w-8 h-8 rounded-md flex items-center justify-center shrink-0 border
            ${
							entry.type === 'fetch'
								? 'bg-blue-500/5 border-blue-500/10 text-blue-400'
								: entry.type === 'render'
									? 'bg-purple-500/5 border-purple-500/10 text-purple-400'
									: 'bg-yellow-500/5 border-yellow-500/10 text-yellow-400'
						}
          `}
			>
				<TypeIcon type={entry.type} />
			</div>

			{/* Content */}
			<div className='flex-1 min-w-0 grid grid-cols-[1fr_auto] gap-4 items-center'>
				<div className='flex flex-col'>
					<div className='flex items-center gap-2'>
						<span className='text-xs font-bold text-zinc-200 truncate'>
							{entry.type === 'fetch'
								? entry.data.method
								: entry.type === 'render'
									? entry.data.component
									: entry.data.key}
						</span>
						{entry.type === 'fetch' && (
							<span
								className={`text-[10px] px-1.5 rounded ${
									entry.data.status === 200
										? 'text-green-400 bg-green-500/10'
										: 'text-red-400 bg-red-500/10'
								}`}
							>
								{entry.data.status}
							</span>
						)}
					</div>
					<span className='text-[10px] text-zinc-500 truncate font-mono'>
						{entry.type === 'fetch'
							? entry.data.url
							: entry.type === 'render'
								? `Re-renders: ${entry.data.count} • ${entry.data.reason}`
								: JSON.stringify(entry.data.value)}
					</span>
				</div>

				<div className='text-right'>
					<span className='text-[10px] text-zinc-600 block'>
						{new Date(entry.timestamp).toLocaleTimeString([], {
							hour12: false,
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit',
						})}
					</span>
					<span className='text-[10px] text-zinc-700 font-mono'>
						{entry.type === 'fetch'
							? entry.data.duration + 'ms'
							: entry.type === 'render'
								? entry.data.renderTime
								: 'diff'}
					</span>
				</div>
			</div>
		</div>
	)
}
