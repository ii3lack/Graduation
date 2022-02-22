import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function reslove(dir) {
	return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': `${reslove('./src/')}`,
			'@assets': `${reslove('./src/assets/')}`,
			'@components': `${reslove('./src/components/')}`,
			'@interfaces': `${reslove('./src/interfaces/')}`,
			// '@modules': `${reslove('./src/modules/')}`,
			'@pages': `${reslove('./src/pages/')}`,
			'@router': `${reslove('./src/router/')}`,
			'@services': `${reslove('./src/services/')}`,
			'@store': `${reslove('./src/store')}`,
			'@utils': `${reslove('./src/utils/')}`
		}
	},
	server: {
		proxy: {
			'^/api': {
				target: 'http://127.0.0.1:8080',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
