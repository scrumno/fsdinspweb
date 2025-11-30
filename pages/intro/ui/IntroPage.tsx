import { VersionBadge } from 'entities/package'
import { Box, Play, ShieldCheck, Zap } from 'lucide-react'
import React from 'react'
import { FeatureCard } from 'shared/ui/feature-card/FeatureCard'
import { CodeBlock } from 'widgets/code-block/ui/CodeBlock'

export const IntroPage: React.FC = () => {
	return (
		<div className='w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16 animate-[fadeIn_0.5s_ease-out]'>
			{/* Header Section */}
			<div className='space-y-6 sm:space-y-8'>
				<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
					<VersionBadge />
					<div className='hidden sm:flex items-center text-sm text-zinc-400'>
						Инструмент для разработки и отладки
					</div>
				</div>

				<h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-tight break-words'>
					<span className='text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400'>
						@scrumno/d-insp-react
					</span>
				</h1>

				<p className='text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl leading-relaxed'>
					<span className='text-zinc-200 font-medium'>
						@scrumno/d-insp-react
					</span>{' '}
					— это инструмент "все-в-одном" для отладки. Он перехватывает сетевые
					запросы и следит за рендерами, не попадая в конечную сборку
					приложений.
				</p>
			</div>

			{/* Features */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
				<FeatureCard
					icon={Box}
					color='purple'
					title='Исчезает в продакшене'
					desc='Благодаря tree-shaking и заглушкам, код исключается из финального бандла. Вес в production — 0 байт.'
				/>
				<FeatureCard
					icon={ShieldCheck}
					color='blue'
					title='Перехват сети'
					desc='Мы аккуратно оборачиваем window.fetch и XHR, чтобы видеть заголовки и тела запросов в удобной панели.'
				/>
				<FeatureCard
					icon={Zap}
					color='green'
					title='Zero-Config'
					desc='Никаких сложных настроек. Просто оберните приложение в провайдер, и пакет начнет собирать метрики.'
				/>
			</div>

			{/* Quick Start Section */}
			<div className='space-y-6 sm:space-y-8 pt-8 sm:pt-10 border-t border-zinc-800'>
				<div className='flex items-center gap-3'>
					<div className='p-2 bg-zinc-800 rounded-lg shrink-0'>
						<Play size={20} className='text-zinc-100' />
					</div>
					<h3 className='text-xl sm:text-2xl font-bold text-zinc-100'>
						Быстрый старт
					</h3>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='space-y-3 min-w-0'>
						<div className='flex items-center justify-between text-sm text-zinc-400 px-1'>
							<span>1. Установка пакета</span>
							<span className='text-xs font-mono opacity-50'>BASH</span>
						</div>
						<div className='w-full overflow-hidden rounded-md'>
							<CodeBlock code={'npm install @scrumno/d-insp-react'} />
						</div>
					</div>

					<div className='space-y-3 min-w-0'>
						<div className='flex items-center justify-between text-sm text-zinc-400 px-1'>
							<span>2. Подключение провайдера</span>
							<span className='text-xs font-mono opacity-50'>SRC/APP.TSX</span>
						</div>
						<p className='text-sm text-zinc-500'>
							Инспектор активируется только если{' '}
							<code className='bg-zinc-800/50 px-1 py-0.5 rounded'>
								process.env.NODE_ENV === 'development'
							</code>
							.
						</p>
						<div className='w-full overflow-hidden rounded-md'>
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
		</div>
	)
}
