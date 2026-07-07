import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

const routes = [
  { path: '/', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    alert('Accès non autorisé. Veuillez vous connecter.');
    next('/');
  } else {
    next();
  }
});

export default router;