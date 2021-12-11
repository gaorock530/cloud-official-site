
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
  // {
  //   path: '/news',
  //   component:News
  // },
  // {
  //   path: '/problem',
  //   component:Problem
  // },
  // {
  //   path: '/product',
  //   component:Product
  // },
  // {
  //   path: '/support',
  //   component:Support
  // },
  // {
  //   path: '/notice',
  //   component:Notice
  // },
  // {
  //   path: '/solution',
  //   component:Solution
  // },
  // {
  //   path: '/details',
  //   component:Details
  // },
  // {
  //   path: '/suppdetail',
  //   component:suptDetail
  // },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  }
]

