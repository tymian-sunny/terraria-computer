import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

const app = createApp(App)

app.use(Viewer, {
    defaultOptions: {
      toolbar: true, // 显示工具栏
      zoomable: true, // 允许缩放
      rotatable: true, // 允许旋转
      scalable: true, // 允许缩放比例
    },
  });
app.use(ElementPlus)
app.mount('#app')