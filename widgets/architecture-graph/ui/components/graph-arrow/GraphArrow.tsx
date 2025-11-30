import { ArrowRight } from 'lucide-react'

export const GraphArrow: React.FC<{
	label?: string
	dashed?: boolean
	vertical?: boolean
}> = ({ label, dashed, vertical }) => (
	<div
		className={`flex items-center justify-center gap-2 ${
			vertical ? 'flex-col h-12' : 'w-16'
		}`}
	>
		<div
			className={`${vertical ? 'h-full w-px' : 'w-full h-px'} ${
				dashed ? 'border-dashed border-zinc-600' : 'bg-zinc-700'
			} relative border-t-0 border-l-0 border-r-0 border-b-px`}
		>
			{label && (
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#09090b] px-1 text-[9px] text-zinc-500 font-mono whitespace-nowrap border border-zinc-800 rounded z-10'>
					{label}
				</div>
			)}
		</div>
		{!vertical && <ArrowRight size={14} className='text-zinc-100 -ml-3' />}
	</div>
)
