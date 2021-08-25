import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import components from "@/components/UI"

import authRepository from './repositories/authRepository'

const app = createApp(App) 
 
components.forEach(component => {
    app.component(component.name, component)
})

app
  .use(router)
  .mount('#app')
