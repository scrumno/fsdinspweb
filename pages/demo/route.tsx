import type { Route } from '.react-router/types/app/+types/root'
import DemoPage from './ui/DemoPage'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Демонстрация | d-insp-react' },
		{
			name: 'description',
			content: 'Примерный дизайн интерфейса и симулятор работы пакета',
		},
		{ property: 'og:title', content: 'DEMO' },
	]
}

export default DemoPage
