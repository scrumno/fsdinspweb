import type { Route } from '.react-router/types/app/+types/root'
import { NotFoundPage } from './ui/NotFoundPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: '404 | d-insp-react' },
		{
			name: 'description',
			content: '404',
		},
		{ property: 'og:title', content: '404 | d-insp-react' },
	]
}

export default function NotFoundRoute() {
	return <NotFoundPage />
}
