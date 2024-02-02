import { type App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import setupRouterGuard from './guard';

const { VITE_BASE_URL } = import.meta.env;

export default async function (app: App) {

  const router = createRouter({
    history: createWebHistory(VITE_BASE_URL),
    routes: routes,
  });

  app.use(router);

  await setupRouterGuard(router);

  // await router.isReady();

  return app;
}
