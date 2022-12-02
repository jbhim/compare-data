import './style.css'
import typescriptLogo from './typescript.svg'
import data from '../lib/index'
import router from './router'

console.log(Vue, VueRouter)
const app = Vue.createApp(Vue.defineComponent({
    name: 'App',
    template: `
        <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo"/>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${ typescriptLogo }" class="logo vanilla" alt="TypeScript logo"/>
        </a>
        <h1>Vite + TypeScript</h1>
        <div class="card">
            <button ref="counterRef" id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
            Click on the Vite and TypeScript logos to learn more
        </p>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            |
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <RouterView></RouterView>
    `,
    setup: () => {
        const counterRef = Vue.ref()
        let { setupCounter } = data
        Vue.onMounted(() => {
            setupCounter(counterRef.value)
        })
        return {
            counterRef
        }
    }
}))
app.use(window.redcatui)
app.use(router)

app.mount('#app')
