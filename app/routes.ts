import { type RouteConfig, route } from '@react-router/dev/routes'

export default [
	route('', '../pages/intro/route.tsx'),
	route('/types', '../pages/types/route.tsx'),
	route('/contributing', '../pages/contributing/route.tsx'),
	route('/core', '../pages/core/route.tsx'),
	route('/demo', '../pages/demo/route.tsx'),
	route('*', '../pages/not-found/route.tsx'),
] satisfies RouteConfig
