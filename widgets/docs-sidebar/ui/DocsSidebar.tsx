import { clsx } from 'clsx'
import { useState } from 'react'
import { SidebarLink } from 'shared/ui/sidebar-link/SidebarLink'
import { NAV_ITEMS } from '../model/items'
import Footer from './FooterSidebar'
import { MobileToggle, SidebarLogo } from './HeaderSidebar'

export const DocsSidebar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<>
			<MobileToggle
				isOpen={isMobileMenuOpen}
				onToggle={() => setIsMobileMenuOpen(prev => !prev)}
			/>

			<aside
				className={clsx(
					'fixed inset-y-0 left-0 z-40 w-64 bg-bg-panel border-r border-border-highlight',
					'transform transition-transform duration-200 ease-in-out',
					isMobileMenuOpen ? 'translate-x-0 top-10' : '-translate-x-full',
					'md:translate-x-0 md:sticky md:top-0 md:h-screen overflow-y-auto'
				)}
			>
				<div className='p-6'>
					<SidebarLogo />

					<nav className='space-y-1'>
						{NAV_ITEMS.map(item => (
							<SidebarLink
								key={item.path}
								item={item}
								onClick={closeMobileMenu}
							/>
						))}
					</nav>

					<div className='mt-8 pt-8 border-t border-border-highlight'>
						<Footer />
					</div>
				</div>
			</aside>
		</>
	)
}
