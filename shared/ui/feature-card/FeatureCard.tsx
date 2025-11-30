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
		<div className='p-6 rounded-xl bg-[#0e0e10] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group'>
			<div
				className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 border ${colors[color]} group-hover:scale-105 transition-transform duration-300`}
			>
				<Icon size={24} />
			</div>
			<h3 className='text-lg font-bold text-zinc-100 mb-3'>{title}</h3>
			<p className='text-sm text-zinc-400 leading-relaxed'>{desc}</p>
		</div>
	)
}
