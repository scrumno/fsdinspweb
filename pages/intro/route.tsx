import type { Route } from '.react-router/types/app/+types/root'
import type { JSX } from 'react'
import { IntroPage } from './ui/IntroPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Как начать | d-insp-react' },
		{
			name: 'description',
			content: 'Стартовая страница',
		},
		{ property: 'og:title', content: 'Как начать | d-insp-react' },
	]
}

export default function IntroRoute(): JSX.Element {
	return <IntroPage />
}
