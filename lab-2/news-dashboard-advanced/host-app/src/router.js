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

const isTokenValid = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token));
    const now = Math.floor(Date.now() / 1000);
    return Boolean(payload.exp && payload.exp > now);
  } catch (error) {
    localStorage.removeItem('token');
    return false;
  }
};

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isTokenValid()) {
    localStorage.removeItem('token');
    next('/');
    return;
  }

  next();
});

export default router;
