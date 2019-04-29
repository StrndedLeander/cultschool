import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      // meta: {
      //   requiresAuth:true
      // }
    },
    {
      path: '/authentication',
      name: 'authentication',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Authentication.vue'),
      // meta: {
      //   requiresGuest: true
      // }
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     let user = await Store.dispatch("user/getCurrentUser");
//     if (user == null || user == {}) {
//       next({
//         path: "/sign",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some(record => record.meta.requiresGuest)) {
//     let user = await Store.dispatch("user/getCurrentUser");
//     if (user == null || user == {}) {
//       next();
//     } else {
//       next({
//         path: "/",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router