import { clsx } from 'clsx'
import type { LucideIcon } from 'lucide-react'

type FeatureColor = 'purple' | 'yellow' | 'blue' | 'green'

interface FeatureCardProps {
	title: string
	desc: string
	icon: LucideIcon
	color?: FeatureColor
	className?: string
}

const stylesMap: Record<
	FeatureColor,
	{ border: string; line: string; icon: string }
> = {
	purple: {
		border: 'hover:border-purple-500/30',
		line: 'via-purple-500/50',
		icon: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
	},
	yellow: {
		border: 'hover:border-yellow-500/30',
		line: 'via-yellow-500/50',
		icon: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
	},
	blue: {
		border: 'hover:border-blue-500/30',
		line: 'via-blue-500/50',
		icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
	},
	green: {
		border: 'hover:border-green-500/30',
		line: 'via-green-500/50',
		icon: 'bg-green-500/10 border-green-500/20 text-green-400',
	},
}

export const FeatureCardSimulator = ({
	title,
	desc,
	icon: Icon,
	color = 'purple',
	className,
}: FeatureCardProps) => {
	const styles = stylesMap[color]

	return (
		<div
			className={clsx(
				'group relative p-5 bg-[#0e0e10] border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300',
				styles.border,
				className
			)}
		>
			{/* Top Highlight Line */}
			<div
				className={clsx(
					'absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity',
					styles.line
				)}
			/>

			<div className='flex items-center gap-3 mb-3'>
				<div
					className={clsx(
						'w-8 h-8 rounded-lg flex items-center justify-center border',
						styles.icon
					)}
				>
					<Icon size={16} />
				</div>
				<div className='text-sm font-bold text-zinc-200'>{title}</div>
			</div>

			<p className='text-xs text-zinc-500 leading-relaxed pl-1'>{desc}</p>
		</div>
	)
}
