import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/MyHome.vue';
import User from '../views/MyUser.vue';
import Main from '../views/MyMain.vue';



Vue.use(VueRouter);


const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/home',  //重定向，当路径为/时重定向到/home
      children:[
        {
            path: 'home',
            name: 'Home',
            component: Home
        },
        {
            path: 'user',
            name: 'User',
            component: User,
        },
    
      ]
    }
]

const router = new VueRouter({ routes })
  
export default router