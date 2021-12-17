
export default [
  {
    // 首页
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    // 公告
    path: '/notice',
    component: () => import('@/views/Notice/index.vue'),
  },
  {
    // 新闻动态
    path: '/news',
    component: () => import('@/views/News/index.vue'),
  },
  {
    // 解决方案
    path: '/solution',
    component: () => import('@/views/Solution/index.vue'),
  },
  {
    // 关于我们
    path: '/about',
    component: () => import('@/views/About/index.vue'),
  },
  {
    // 产品
    path: '/product',
    component: () => import('@/views/ProductDetail/index.vue')
  },
  {
    // 产品详情
    path: '/productlist',
    component: () => import('@/views/Product/index.vue')
  },
  {
    // 文档中心
    path: '/support',
    component:() => import('@/views/Support/index.vue')
  },
  {
    // 文档详情
    path: '/supportdetail',
    component: () => import('@/views/SupportDetail/index.vue')
  },
  {
    // 登录页面
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    // 文档详情iframe
    path: '/docs/:cate/:sub',
    component: () => import('@/views/Documents/index.vue')
  }
]

