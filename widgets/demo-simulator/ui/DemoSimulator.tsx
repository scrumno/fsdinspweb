import { Search } from 'lucide-react'
import { useState } from 'react'

import { LogDetails } from 'entities/log-entry/ui/LogDetails'
import { LogEntryRow } from 'entities/log-entry/ui/LogEntryRow'

import type { EntryType, MockEntry } from 'entities/log-entry/model/types'
import { useSimulation } from '../model/useSimulation'
import { SimulatorBackground } from './SimulatorBackground'
import { SimulatorToolbar } from './SimulatorToolbar'
import { SimulatorTrigger } from './SimulatorTrigger'

export const DemoSimulator = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeTab, setActiveTab] = useState<'all' | EntryType>('all')
	const [hoveredEntry, setHoveredEntry] = useState<MockEntry | null>(null)

	const { entries, isPaused, setIsPaused, clearEntries } = useSimulation()

	const filteredEntries = entries.filter(
		e => activeTab === 'all' || e.type === activeTab
	)

	return (
		<div className='relative w-full h-[600px] border border-zinc-800 bg-[#0e0e10] rounded-xl overflow-hidden shadow-2xl flex flex-col'>
			<SimulatorBackground />

			<SimulatorTrigger
				count={entries.length}
				onClick={() => setIsOpen(true)}
			/>

			{isOpen && (
				<div className='absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]'>
					<div
						className='w-full max-w-4xl h-full bg-[#09090b] border border-zinc-800 rounded-xl flex flex-col shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out]'
						onClick={e => e.stopPropagation()}
					>
						<SimulatorToolbar
							isPaused={isPaused}
							onTogglePause={() => setIsPaused(!isPaused)}
							onClear={clearEntries}
							onClose={() => setIsOpen(false)}
						/>

						{/* Tabs */}
						<div className='h-10 border-b border-zinc-800 bg-[#0e0e10] flex items-center px-2 gap-1'>
							{(['all', 'fetch', 'render', 'value'] as const).map(tab => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`
                      px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize
                      ${
												activeTab === tab
													? 'bg-zinc-800 text-zinc-100'
													: 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
											}
                    `}
								>
									{tab}
								</button>
							))}
						</div>

						{/* Main Content Area */}
						<div className='flex-1 relative overflow-hidden flex'>
							{/* List Column */}
							<div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800'>
								{filteredEntries.map(entry => (
									<LogEntryRow
										key={entry.id}
										entry={entry}
										onHover={setHoveredEntry}
									/>
								))}

								{filteredEntries.length === 0 && (
									<div className='h-full flex flex-col items-center justify-center text-zinc-600 p-8'>
										<Search size={32} className='mb-2 opacity-20' />
										<p className='text-xs'>Ожидание событий...</p>
									</div>
								)}
							</div>

							{/* Detail Overlay */}
							{hoveredEntry && <LogDetails entry={hoveredEntry} />}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
