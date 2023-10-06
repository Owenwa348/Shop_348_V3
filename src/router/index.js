import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemCart from '../components/ItemsCart.vue'
import OrderHistory from '../components/OrderHistory.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: ItemCart
    },
    {
      path: '/OrderHistory',
      name: 'OrderHistory',
      component: OrderHistory
    },
  ]
})

export default router
