import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import User from '../views/User.vue';
import About from '../views/About.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/post',
      name:'post',
      component:Post
    },
    {
      path:'/user',
      name:'user',
      component:User
    },
    {
      path:'/user',
      name:"user",
      redirect: to => ({path:'/about'})
    },
    {
      path:'/about',
      name:'about',
      component:About,
    }
  ]
})

export default router;