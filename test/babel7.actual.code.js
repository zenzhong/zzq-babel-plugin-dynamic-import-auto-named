const router = {
  component1: () => import('./a.js'),
  component2: () => import('../dir/b.vue'),
  component3: () => import('@/views/c.jsx'),
  component5: () => import(/* webpackChunkName: "about" */ '@/views/about.vue'),
};