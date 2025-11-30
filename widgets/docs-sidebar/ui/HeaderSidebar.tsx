import { BugIcon, Menu, X } from 'lucide-react'

export const MobileToggle = ({
	isOpen,
	onToggle,
}: {
	isOpen: boolean
	onToggle: () => void
}) => (
	<div className='md:hidden fixed top-0 w-full z-50 bg-bg-panel/95 backdrop-blur border-b border-border-highlight px-4 py-3 flex items-center justify-between'>
		<div className='font-mono font-bold text-brand-purple'>d-insp-react</div>
		<button onClick={onToggle}>{isOpen ? <X /> : <Menu />}</button>
	</div>
)

export const SidebarLogo = () => (
	<div className='flex items-center gap-2 mb-8'>
		<div className='w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-purple'>
			<BugIcon />
		</div>
		<div>
			<h1 className='font-mono font-bold text-sm text-zinc-100'>
				d-insp-react
			</h1>
			<p className='text-[10px] text-zinc-500'>Документация v1.0.0</p>
		</div>
	</div>
)
