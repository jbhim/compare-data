import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@src': resolve(__dirname, 'src'),
            '@lib': resolve(__dirname, 'lib'),
        }
    }
})
