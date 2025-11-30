import type { Route } from '.react-router/types/app/+types/root'
import { CorePage } from './ui/CorePage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Core | d-insp-react' },
		{
			name: 'description',
			content: 'Описание, основные функции, возможности',
		},
		{ property: 'og:title', content: 'Core | d-insp-react' },
	]
}

export default CorePage
