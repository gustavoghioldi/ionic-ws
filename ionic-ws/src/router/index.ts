import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CatalogPage from '../views/CatalogPage.vue';
import AdecashPage from '../views/AdecashPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage
  },
  {
    path: '/adecash',
    name: 'Adecash',
    component: AdecashPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
