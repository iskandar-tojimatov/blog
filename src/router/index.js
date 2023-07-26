import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import CreateArticle from '@/views/CreateArticle.vue'
import EditArticle from '@/views/EditArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article/:slug',
      name: 'article-detail',
      component:AboutView
    
    },
    {
      path: '/register',
      name: 'register',
      component:RegisterView
    
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    
    },
    {
      path: '/create-article',
      name: 'create-article',
      component:CreateArticle
    
    },
    {
      path: '/edit-article/:slug',
      name: 'edit-article',
      component:EditArticle
    
    }
  ]
})

export default router
