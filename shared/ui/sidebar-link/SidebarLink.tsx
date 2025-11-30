import { clsx } from 'clsx'
import type { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router'

export interface SidebarLinkItem {
	path: string
	label: string
	icon: LucideIcon
}

interface SidebarLinkProps {
	item: SidebarLinkItem
	onClick?: () => void
}

export const SidebarLink = ({ item, onClick }: SidebarLinkProps) => {
	const Icon = item.icon

	return (
		<NavLink
			to={item.path}
			onClick={onClick}
			className={({ isActive }) =>
				clsx(
					'relative w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm border transition-all duration-200 group',
					isActive
						? 'bg-brand-purple/10 text-brand-purple font-medium border-brand-purple/20'
						: 'bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border-transparent'
				)
			}
		>
			{({ isActive }) => (
				<>
					<Icon
						size={16}
						className={clsx(
							'transition-colors duration-200',
							isActive
								? 'text-brand-purple'
								: 'text-zinc-500 group-hover:text-zinc-300'
						)}
					/>

					<span>{item.label}</span>

					<div
						className={clsx(
							'ml-auto w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(199,146,234,0.6)] transition-opacity duration-300',
							isActive ? 'opacity-100' : 'opacity-0'
						)}
					/>
				</>
			)}
		</NavLink>
	)
}
