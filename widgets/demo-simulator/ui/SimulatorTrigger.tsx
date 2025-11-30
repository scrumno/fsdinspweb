import { Bug } from 'lucide-react'

interface SimulatorTriggerProps {
	count: number
	onClick: () => void
}

export const SimulatorTrigger = ({ count, onClick }: SimulatorTriggerProps) => (
	<button onClick={onClick} className='absolute bottom-8 right-8 group z-20'>
		<div className='absolute inset-0 bg-brand-purple/20 rounded-full blur-md group-hover:bg-brand-purple/40 transition-all'></div>
		<div className='relative w-16 h-16 bg-[#18181b] border border-zinc-700 text-purple-400 rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:-translate-y-1 transition-transform'>
			<Bug size={28} />
			<span className='text-[10px] font-bold mt-1 font-mono'>{count}</span>
			{/* Badge notification */}
			<span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#18181b] animate-bounce'></span>
		</div>
	</button>
)
