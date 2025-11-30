import type { Route } from '.react-router/types/app/+types/root'
import type { JSX } from 'react'
import TypesPage from './ui/TypesPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Типы | d-insp-react' },
		{
			name: 'description',
			content: 'Типы, которые используются в пакете',
		},
		{ property: 'og:title', content: 'Типы | d-insp-react' },
	]
}

export default function TypesRoute(): JSX.Element {
	return <TypesPage />
}
