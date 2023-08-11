import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/MyHome.vue';
import User from '../views/MyUser.vue';
import Main from '../views/MyMain.vue';
import Page1 from '../views/MyPage1.vue';
import Page2 from '../views/MyPage2.vue';
import Mall from '../views/MyMall.vue';


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
        {
            path: 'mall',
            name: 'Mall',
            component: Mall,
        },
        {
            path: 'page1',
            name: 'Page1',
            component: Page1
        },
        {
            path: 'page2',
            name: 'Page2',
            component: Page2
        }
    
      ]
    }
]

const router = new VueRouter({ routes })
  
export default router