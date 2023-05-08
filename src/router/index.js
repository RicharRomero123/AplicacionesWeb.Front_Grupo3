  import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import usersPage from "@/components/users-page.vue";
import user  from "@/components/user.vue"
import postscomponent from "@/components/posts-container.vue"
import postsList from "@/components/PostsList.vue";
import logincomponent from "@/components/logincomponent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/userspage',
      name: 'userspage',
      component: usersPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {path:'/user/:id',component:user,name:'user'},
    {path:'/user/:id/posts',component:postsList,name:'user'},
    {path:'/login',component:logincomponent,name:'Login'}
  ]
})

export default router
