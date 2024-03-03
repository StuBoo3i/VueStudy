import { createApp } from 'vue'
import App from './App.vue'
import Header from "@/pages/Header.vue";

const app = createApp(App)


//在中间写组件
app.component("Header", Header)

app.mount('#app')


