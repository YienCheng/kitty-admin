import App from './App.vue';
import withLoading from '@/libs/with-loading';
import setupRouter from '@/router';
import '@/libs/assets';

async function setupApp() {
  // 创建 app 实例
  const app = createApp(App);

  // 构建路由
  await setupRouter(app);

  // 挂载 app
  app.mount('#app');
}

// 页面加载时loading功能
withLoading('#app-loading', setupApp);
