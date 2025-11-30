import { Cpu, Database, Globe } from 'lucide-react'
import { FeatureCardSimulator } from 'shared/ui/feature-card-simulator/FeatureCardSimulator'
import { SectionHeader } from 'shared/ui/section-header/SectionHeader'
import { DemoSimulator } from 'widgets/demo-simulator'

export default function DemoPage() {
	return (
		<div className='space-y-8 animate-[fadeIn_0.5s_ease-out]'>
			<SectionHeader
				title='Демонстрация'
				subtitle='Интерактивный симулятор работы инспектора.'
			/>
			<DemoSimulator />
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
				<div className='group relative p-5 bg-[#0e0e10] border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'>
					<div className='absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
					<div className='flex items-center gap-3 mb-3'>
						<div className='w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400'>
							<Globe size={16} />
						</div>
						<div className='text-sm font-bold text-zinc-200'>Network</div>
					</div>
					<p className='text-xs text-zinc-500 leading-relaxed pl-1'>
						Авто-детект JSON тел запросов, заголовков и HTTP статусов в реальном
						времени.
					</p>
				</div>

				<FeatureCardSimulator
					color='purple'
					icon={Cpu}
					title='Renders'
					desc='Трекинг жизненного цикла компонентов (Mount/Update) с указанием причин рендера.'
				/>

				<FeatureCardSimulator
					color='yellow'
					icon={Database}
					title='Values'
					desc='Логирование произвольных объектов и стейта без разрыва ссылок и circular dependency.'
				/>
			</div>
		</div>
	)
}
