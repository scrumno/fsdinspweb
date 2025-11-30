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
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<div className='min-h-screen flex font-sans selection:bg-brand-purple/30 selection:text-white'>
			<header>
				<DocsSidebar />
			</header>
			<div className='flex flex-col mx-auto'>
				<main className='flex-1 min-w-0 md:pt-0 pt-16'>
					<div className='max-w-4xl mx-auto px-6 pt-6 md:pt-14'>
						<Outlet />
					</div>
				</main>
				<footer className='border-t border-border-highlight mt-20 py-12 text-center text-zinc-600 text-sm'>
					<a href='https://t.me/scrumno' target='_blank'>
						tg: @scrumno
					</a>
					<p className='mt-2 font-mono text-xs'>MIT License © 2025</p>
				</footer>
			</div>
		</div>
	)
}
