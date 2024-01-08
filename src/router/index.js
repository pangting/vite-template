import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

// 路由加载前
router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = import.meta.env.VITE_APP_TITLE
  if (to.matched && to.matched.length === 0) {
    next('/404')
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

