export const GraphButton: React.FC<{
	active: boolean
	onClick: () => void
	children: React.ReactNode
}> = ({ active, onClick, children }) => (
	<button
		onClick={onClick}
		className={`
            relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 border
            ${
							active
								? 'bg-zinc-800 text-white shadow-sm border-zinc-700'
								: 'bg-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border-transparent'
						}
        `}
	>
		{children}
	</button>
)
