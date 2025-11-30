import { Link } from 'react-router'

export const NotFoundPage = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-dvh/2 text-center'>
			<h1 className='text-9xl font-bold'>404</h1>
			<p className='mt-4 text-xl text-zinc-400'>Страница не найдена</p>
			<Link
				to='/'
				className='mt-8 px-6 py-3 rounded-md text-white hover:bg-brand-purple/90 transition'
			>
				Вернуться на главную
			</Link>
		</div>
	)
}
