import Loading from '@/components/AppLoading/index.vue';

type SetupApp = () => Promise<void>;

/** 先挂载 loading 组件，在挂载 App */
export default async function (selector: HTMLElement | string, setupApp: SetupApp) {
  const loading = createApp(Loading);
  loading.mount(selector);
  await setupApp();
  loading.unmount();
}
