import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mint from '../views/Mint.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import YourNFTS from '../views/YourNFTS.vue'
import Verify from '../views/Verify.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mint',
      name: 'mint',
      component: Mint
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/yournfts',
      name: 'yournfts',
      component: YourNFTS
    },
    {
      path: '/about',
      name: 'about',
      component: About

    }
  ]
})

export default router
