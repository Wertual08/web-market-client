import { createApp } from 'vue'
import App from './App.vue'
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"


var app = createApp(App);
app.component('Footer', Footer)
app.component('Header',Header)
app.mount('#app')
