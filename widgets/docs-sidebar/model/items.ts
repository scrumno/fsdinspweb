import { Box, Cpu, FileJson, GitPullRequest, Terminal } from 'lucide-react'
import type { SidebarLinkItem } from 'shared/ui/sidebar-link/SidebarLink'

export const NAV_ITEMS: SidebarLinkItem[] = [
	{ path: '/', label: 'Введение', icon: Terminal },
	{ path: '/core', label: 'Core', icon: Cpu },
	{ path: '/types', label: 'Types', icon: FileJson },
	{ path: '/contributing', label: 'Разработка', icon: GitPullRequest },
	{ path: '/demo', label: 'Демонстрация', icon: Box },
]
