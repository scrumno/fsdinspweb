export const SectionHeader = ({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) => (
	<div className='mb-8 border-b border-border-highlight pb-8'>
		<h2 className='text-3xl font-bold text-zinc-100 mb-2'>{title}</h2>
		<p className='text-zinc-500 font-mono text-sm'>{subtitle}</p>
	</div>
)
