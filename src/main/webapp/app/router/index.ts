import { createRouter as createVueRouter, createWebHistory } from 'vue-router';

import AppLayout from '@/layout/AppLayout.vue';
const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';
import prime from '@/router/prime';

export const createRouter = () =>
  createVueRouter({
    history: createWebHistory(),
    routes: [
      // {
      //   path: '/',
      //   name: 'Home',
      //   redirect: '/home',
      //   // component: Home,
      // },
      { 
        path: '/',
        name: 'Home',
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
          ]
      },
      {
        path: '/forbidden',
        name: 'Forbidden',
        component: Error,
        meta: { error403: true },
      },
      {
        path: '/not-found',
        name: 'NotFound',
        component: Error,
        meta: { error404: true },
      },
      ...prime,
      ...admin,
      entities,
      ...pages,
    ],
        scrollBehavior() {
        return { left: 0, top: 0 };
    }
  });

const router = createRouter();

router.beforeResolve(async (to, from, next) => {
  if (!to.matched.length) {
    next({ path: '/not-found' });
    return;
  }
  next();
});

export default router;
