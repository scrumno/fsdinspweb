import type { Route } from '.react-router/types/app/+types/root'
import ContributingPage from './ui/ContributingPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Помощь в разработке | d-insp-react' },
		{
			name: 'description',
			content: 'Помощь в разработке от всех желающих',
		},
		{ property: 'og:title', content: 'Помощь в разработке | d-insp-react' },
	]
}

export default function ContributingRoute() {
	return <ContributingPage />
}
