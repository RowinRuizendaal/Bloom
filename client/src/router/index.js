import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/Login.vue";
import RegisterIndex from "../views/login/register/index.vue";
import ForgotPassword from "../views/login/ForgotPassword.vue";

import Home from "../views/Home.vue";
import Onboarding from "../views/Onboarding.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
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
    path: "/onboarding",
    name: "Onboarding",
    component: Onboarding,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
