export default function SidebarFooter() {
	return (
		<>
			<div className='text-xs font-semibold text-zinc-500 mb-4 uppercase tracking-wider'>
				Ссылки
			</div>
			<a
				href='https://github.com/scrumno/d-insp-react'
				target='_blank'
				rel='noreferrer'
				className='flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-2 transition-colors'
			>
				<span className='w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[10px]'>
					GH
				</span>
				GitHub
			</a>
			<a
				href='#'
				className='flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors'
			>
				<span className='w-4 h-4 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center text-[10px]'>
					N
				</span>
				NPM
			</a>
		</>
	)
}
