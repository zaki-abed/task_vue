import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import TaskPage from '../views/TaskPage.vue'


const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage, 
  },
  {
    path: '/tasks',
    name: 'TaskPage',
    component: TaskPage, 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
