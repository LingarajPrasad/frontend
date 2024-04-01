import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    host: true,
    // strictPort: true,
    port: 3000,
    //get rid of CORS error
    proxy:{
      "/api":{
        target:'http://127.0.0.1:3001',
        // target:'http://13.200.79.249:3001',
        // changeOrigin:true,
        // secure:true
      }
    }
  }
})
