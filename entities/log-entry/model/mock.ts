import type { EntryType, MockEntry } from './types'

export const generateMockEntry = (): MockEntry => {
	const randomType =
		Math.random() > 0.7 ? 'fetch' : Math.random() > 0.5 ? 'value' : 'render'

	return {
		id: Math.random().toString(36).substr(2, 9),
		traceId: `tr_${Math.floor(Math.random() * 10000)}`,
		type: randomType,
		timestamp: Date.now(),
		data: generateMockData(randomType),
	}
}

const generateMockData = (type: EntryType) => {
	if (type === 'fetch') {
		const eps = [
			'/api/user/me',
			'/api/settings',
			'/api/auth/refresh',
			'/api/products?limit=10',
		]
		const methods = ['GET', 'POST', 'PUT']
		const status = Math.random() > 0.9 ? 500 : Math.random() > 0.8 ? 404 : 200
		return {
			method: methods[Math.floor(Math.random() * methods.length)],
			url: eps[Math.floor(Math.random() * eps.length)],
			status,
			duration: Math.floor(Math.random() * 200) + 20,
			size: Math.floor(Math.random() * 5000) + 100 + 'b',
		}
	}
	if (type === 'render') {
		const comps = ['Header', 'UserProfile', 'ProductList', 'CartItem']
		return {
			component: comps[Math.floor(Math.random() * comps.length)],
			count: Math.floor(Math.random() * 5) + 1,
			reason: Math.random() > 0.5 ? 'props changed' : 'parent update',
			renderTime: (Math.random() * 2).toFixed(2) + 'ms',
		}
	}
	if (type === 'value') {
		return {
			key: Math.random() > 0.5 ? 'userState' : 'themeConfig',
			value: { active: true, theme: 'dark', id: 124 },
			prevValue: { active: false },
		}
	}
}
