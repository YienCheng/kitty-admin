import nprogress from '@/libs/nprogress';

export default function setupNprogress(router: Router) {
  router.beforeEach((_to, _from, next) => {
    nprogress.start();
    next();
  });
  router.afterEach((_to) => {
    nprogress.done();
  });
}
