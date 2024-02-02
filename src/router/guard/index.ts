import setupNprogress from './nprogress';

/**
 * 构建路由相关的规则
 * @param router
 */
export default async function setupRouterGuard(router: Router): Promise<void> {
  // 路由进度条
  setupNprogress(router);
}
