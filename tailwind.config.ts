import type { Config } from 'tailwindcss'

export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				bg: {
					DEFAULT: '#09090b',
					surface: '#18181b',
					panel: '#101012',
				},
				border: {
					DEFAULT: '#27272a',
					highlight: '#3f3f46',
				},
				brand: {
					purple: '#c084fc',
					blue: '#38bdf8',
					green: '#4ade80',
					red: '#f87171',
					yellow: '#fbbf24',
					gray: '#a1a1aa',
				},
			},
			boxShadow: {
				glow: '0 0 20px -5px rgba(192, 132, 252, 0.15)',
				card: '0 0 0 1px rgba(39, 39, 42, 1), 0 4px 6px -1px rgba(0, 0, 0, 0.3)',
			},
			animation: {
				shimmer: 'shimmer 2s linear infinite',
				dash: 'dash 15s linear infinite',
				fadeIn: 'fadeIn 0.3s ease-out forwards',
			},
			keyframes: {
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				dash: {
					to: { strokeDashoffset: '-1000' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
} satisfies Config
