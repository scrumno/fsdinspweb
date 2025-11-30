import { VersionBadge } from 'entities/package'
import { Box, Play, ShieldCheck, Zap } from 'lucide-react'
import { FeatureCard } from 'shared/ui/feature-card/FeatureCard'
import { CodeBlock } from 'widgets/code-block/ui/CodeBlock'

export const IntroPage: React.FC = () => {
	return (
		<div className='max-w-5xl mx-auto space-y-16 animate-[fadeIn_0.5s_ease-out]'>
			{/* Header Section */}
			<div className='space-y-6'>
				<VersionBadge />

				<h1 className='text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-tight'>
					Инспектор, который <br />
					<span className='text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400'>
						не мешает разработке
					</span>
				</h1>

				<p className='text-xl text-zinc-400 max-w-2xl leading-relaxed'>
					<span className='text-zinc-200 font-medium'>
						@scrumno/d-insp-react
					</span>{' '}
					— это инструмент "все-в-одном" для отладки. Он перехватывает сетевые
					запросы и следит за рендерами, не попадая в конечную сборку
					приложений.
				</p>
			</div>

			<div className='grid md:grid-cols-3 gap-6'>
				<FeatureCard
					icon={Box}
					color='purple'
					title='Исчезает в продакшене'
					desc='Благодаря tree-shaking и заглушкам (mock), код полностью исключается из финального бандла. Вес в production — 0 байт.'
				/>
				<FeatureCard
					icon={ShieldCheck}
					color='blue'
					title='Перехват сети'
					desc='Мы аккуратно оборачиваем window.fetch и XHR, чтобы видеть заголовки, тела запросов и ошибки в удобной панели.'
				/>
				<FeatureCard
					icon={Zap}
					color='green'
					title='Zero-Config'
					desc='Никаких сложных настроек. Просто оберните приложение в провайдер, и пакет автоматически начнет собирать метрики.'
				/>
			</div>

			{/* Quick Start Section */}
			<div className='space-y-8 pt-8 border-t border-zinc-800'>
				<div className='flex items-center gap-3'>
					<div className='p-2 bg-zinc-800 rounded-lg'>
						<Play size={20} className='text-zinc-100' />
					</div>
					<h3 className='text-2xl font-bold text-zinc-100'>Быстрый старт</h3>
				</div>

				<div className='grid gap-8'>
					<div className='space-y-3'>
						<div className='flex items-center justify-between text-sm text-zinc-400 px-1'>
							<span>1. Установка пакета</span>
							<span className='text-xs font-mono opacity-50'>BASH</span>
						</div>
						<CodeBlock code='npm install @scrumno/d-insp-react' />
					</div>

					<div className='space-y-3'>
						<div className='flex items-center justify-between text-sm text-zinc-400 px-1'>
							<span>2. Подключение провайдера</span>
							<span className='text-xs font-mono opacity-50'>SRC/APP.TSX</span>
						</div>
						<p className='text-sm text-zinc-500'>
							Оберните корневой компонент вашего приложения. Инспектор
							активируется только если{' '}
							<code>process.env.NODE_ENV === 'development'</code>.
						</p>
						<CodeBlock
							fileName='src/App.tsx'
							highlightLines={[1, 5, 7]}
							code={`import { DebugProvider } from '@scrumno/d-insp-react';
import { Router } from './router';

export const App = () => (
  <DebugProvider>
    <Router />
  </DebugProvider>
);`}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
