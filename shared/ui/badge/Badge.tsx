export const Badge: React.FC<{
	color: 'yellow' | 'blue'
	children: React.ReactNode
}> = ({ color, children }) => {
	const styles =
		color === 'yellow'
			? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
			: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
	return (
		<span
			className={`text-[10px] px-2 py-0.5 rounded border font-mono font-medium ${styles}`}
		>
			{children}
		</span>
	)
}
