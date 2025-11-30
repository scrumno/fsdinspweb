export const FeatureCard = ({
	icon: Icon,
	title,
	desc,
	color,
}: {
	icon: any
	title: string
	desc: string
	color: 'purple' | 'blue' | 'green'
}) => {
	const colors = {
		purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
		blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
		green: 'bg-green-500/10 text-green-400 border-green-500/20',
	}

	return (
		<article
			role='article'
			aria-label={title}
			className='p-4 sm:p-6 rounded-xl bg-[#0e0e10] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-700'
		>
			<div
				className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-5 border ${colors[color]} group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
			>
				<Icon size={20} />
			</div>

			<h3 className='text-base sm:text-lg font-bold text-zinc-100 mb-2 sm:mb-3'>
				{title}
			</h3>
			<p className='text-sm sm:text-sm text-zinc-400 leading-relaxed mt-auto'>
				{desc}
			</p>
		</article>
	)
}
