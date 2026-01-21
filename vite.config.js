import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  // ⚠️ 注意：前後都要有斜線 '/'，填入您的 GitHub 專案名稱
  base: '/squash_action_analyze/', 
})
