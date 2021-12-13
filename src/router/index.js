
// import Home from '@/views/Home/index.vue'
// import News from '@/views/News/index.vue'
// import Notice from '@/views/Notice/index.vue'
// import Problem from '@/views/Problem/index.vue'
// import Product from '@/views/Product/index.vue'
// import Solution from '@/views/Solution/index.vue'
// import Support from '@/views/Support/index.vue'
// import Details from '@/views/Details/index.vue'
// import Login from '@/views/Login/index.vue'
// import suptDetail from '@/views/Support_details/index.vue'

export default [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/notice',
    component: () => import('@/views/Notice/index.vue'),
  },
  {
    path: '/news',
    component: () => import('@/views/News/index.vue'),
  },
  {
    path: '/solution',
    component: () => import('@/views/Solution/index.vue'),
  },
  {
    path: '/test',
    component: () => import('@/views/Home/test.vue'),
  },
  // {
  //   path: '/problem',
  //   component:Problem
  // },
  {
    path: '/product',
    component: () => import('@/views/ProductDetail/index.vue')
  },
  {
    path: '/support',
    component:() => import('@/views/Support/index.vue')
  },
  // {
  //   path: '/notice',
  //   component:Notice
  // },
  // {
  //   path: '/solution',
  //   component:Solution
  // },
  {
    path: '/productlist',
    component: () => import('@/views/Product/index.vue')
  },
  {
    path: '/supportdetail',
    component: () => import('@/views/SupportDetail/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  }
]

