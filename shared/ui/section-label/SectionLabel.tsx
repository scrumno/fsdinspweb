export const SectionLabel: React.FC<{
	children: React.ReactNode
	color?: string
}> = ({ children, color = 'text-zinc-500' }) => (
	<div
		className={`text-[10px] font-bold uppercase tracking-widest mb-2 text-center ${color}`}
	>
		{children}
	</div>
)
