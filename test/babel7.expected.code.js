const router = {
  component1: () => import(
  /*webpackChunkName: "a_js"*/
  './a.js'),
  component2: () => import(
  /*webpackChunkName: "dir_b_vue"*/
  '../dir/b.vue'),
  component3: () => import(
  /*webpackChunkName: "@_views_c_jsx"*/
  '@/views/c.jsx'),
  component5: () => import(
  /* webpackChunkName: "about" */
  '@/views/about.vue')
};