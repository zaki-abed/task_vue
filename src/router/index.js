import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import TaskPage from '../views/TaskPage.vue'


const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage, 
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskPage,
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem('userLoggedIn') === 'true') {
    //     next();  
    //   } else {
    //     next({ name: 'LoginPage' }); 
    //   }
    // }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
