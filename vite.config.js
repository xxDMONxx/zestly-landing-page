import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/zestly-landing-page/',
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    // Simple mock API for dev only
    middlewareMode: false,
  },
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/lead' && req.method === 'POST') {
        let body = ''
        req.on('data', (chunk) => (body += chunk))
        req.on('end', () => {
          res.setHeader('Content-Type', 'application/json')
          try {
            const data = body ? JSON.parse(body) : {}
            // Basic validation
            if (!data.email || typeof data.email !== 'string') {
              res.statusCode = 400
              res.end(JSON.stringify({ ok: false, error: 'Invalid email' }))
              return
            }
            // Simulate network delay
            setTimeout(() => {
              res.end(JSON.stringify({ ok: true, id: Date.now() }))
            }, 600)
          } catch (e) {
            res.statusCode = 400
            res.end(JSON.stringify({ ok: false, error: 'Bad JSON' }))
          }
        })
        return
      }
      next()
    })
  },
})
