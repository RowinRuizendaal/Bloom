import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login.vue";
import Register from "../views/login/Register.vue";
import RegisterIndex from "../views/login/register/index.vue";

import ForgotPassword from "../views/login/ForgotPassword.vue";
import Home from "../views/Home.vue";
import Intro from "../views/Intro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/register-index",
    name: "RegisterIndex",
    component: RegisterIndex,
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: ForgotPassword,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
