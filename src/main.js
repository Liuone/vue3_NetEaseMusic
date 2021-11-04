import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-ui组件
import ElementPlus from 'element-plus'
// 导入element-ui样式
import 'element-plus/dist/index.css'
// 导入基本样式
import '@/assets/css/rest.css'
createApp(App).use(router).use(ElementPlus).mount('#app')
