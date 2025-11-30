import { Activity } from 'lucide-react'

export const SimulatorBackground = () => (
	<div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
		{/* Background Grid Pattern */}
		<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px]'></div>
		<div className='absolute inset-0 bg-linear-to-t from-[#0e0e10] to-transparent'></div>

		<div className='z-10 text-center space-y-4'>
			<div className='relative inline-block'>
				<div className='absolute inset-0 bg-brand-purple/20 blur-xl rounded-full animate-pulse'></div>
				<Activity className='relative text-zinc-600' size={64} />
			</div>
			<h3 className='text-xl font-bold text-zinc-300 tracking-tight'>
				Фоновая симуляция
			</h3>
			<div className='flex items-center gap-2 justify-center text-xs text-zinc-500 font-mono'>
				<span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
				Генерация событий: Active
			</div>
		</div>
	</div>
)
