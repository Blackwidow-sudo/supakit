import type { Route } from '../types/app'

export const routes: Route[] = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Register',
		href: '/register'
	},
	{
		name: 'Login',
		href: '/login'
	}
]

export const openRoutes = ['/login', '/register', '/']
