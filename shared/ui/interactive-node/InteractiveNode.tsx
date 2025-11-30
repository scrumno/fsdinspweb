import { useState } from 'react'

export const InteractiveNode = ({
	icon: Icon,
	title,
	sub,
	color,
	details,
}: {
	icon: any
	title: string
	sub: string
	color: 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'zinc'
	details: string
}) => {
	const [isHovered, setIsHovered] = useState(false)

	const colors = {
		blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/50',
		purple:
			'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/50',
		green:
			'bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/50',
		yellow:
			'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/50',
		red: 'bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/50',
		zinc: 'bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:border-zinc-500',
	}

	return (
		<div
			className='relative group'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`flex items-center gap-3 p-3 rounded-xl border ${colors[color]} bg-[#0e0e10] bg-opacity-80 backdrop-blur-sm min-w-[180px] shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${color}-500/10 cursor-help z-10 relative`}
			>
				<div className={`p-2 rounded-lg bg-white/5`}>
					<Icon size={18} />
				</div>
				<div className='flex flex-col'>
					<span className='text-xs font-bold text-zinc-200'>{title}</span>
					<span className='text-[10px] opacity-70 uppercase tracking-wider font-medium'>
						{sub}
					</span>
				</div>
			</div>

			{/* Hover Card */}
			<div
				className={`
            absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] w-64 p-4 
            bg-[#18181b] border border-zinc-700 rounded-xl shadow-2xl z-50
            transition-all duration-200 pointer-events-none
            ${
							isHovered
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-2'
						}
          `}
			>
				<div className='absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#18181b] border-b border-r border-zinc-700 rotate-45'></div>
				<div className='flex items-center gap-2 mb-2 pb-2 border-b border-zinc-800'>
					<Icon
						size={14}
						className={color === 'zinc' ? 'text-zinc-400' : `text-${color}-400`}
					/>
					<span className='text-xs font-bold text-zinc-200'>Детали</span>
				</div>
				<p className='text-xs text-zinc-400 leading-relaxed'>{details}</p>
			</div>
		</div>
	)
}
