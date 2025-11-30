import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { DocsSidebar } from 'widgets/docs-sidebar'
import type { Route } from './+types/root'
import appStyles from './app.css?url'

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: appStyles },
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap',
	},
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
				/>
				<Meta />
				<Links />
			</head>
			<body className='bg-zinc-950 text-zinc-200'>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<div className='min-h-screen flex flex-col md:flex-row font-sans selection:bg-purple-500/30 selection:text-white'>
			{/* Sidebar: Fixed width on Desktop, Auto on Mobile */}
			<header className='w-full md:w-64 lg:w-72 md:h-screen md:sticky md:top-0 shrink-0 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950 z-50'>
				<DocsSidebar />
			</header>

			{/* Main Content Area */}
			<div className='flex-1 flex flex-col min-w-0 max-md:mt-12'>
				<main className='flex-1 w-full max-w-7xl mx-auto'>
					{/* Content Wrapper */}
					<div className='w-full px-0 sm:px-6 md:px-8 py-6 md:py-12'>
						<Outlet />
					</div>
				</main>

				<footer className='border-t border-zinc-800 mx-6 md:mx-12 py-8 mt-auto text-center text-zinc-500 text-sm'>
					<a
						href='https://t.me/scrumno'
						target='_blank'
						rel='noreferrer'
						className='hover:text-purple-400 transition-colors'
					>
						tg: @scrumno
					</a>
					<p className='mt-2 font-mono text-xs opacity-60'>
						MIT License © 2025
					</p>
				</footer>
			</div>
		</div>
	)
}
