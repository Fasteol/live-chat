import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginPage.vue";
import MainView from "../views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
