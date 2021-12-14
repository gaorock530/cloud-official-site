import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/index'
import App from '@/App.vue'
import '@/style/index.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(router)
app.mount('#app')
