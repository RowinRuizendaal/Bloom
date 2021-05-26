import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login.vue";
import Register from "../views/login/Register.vue";
import ForgotPassword from "../views/login/ForgotPassword.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Onboarding from "../views/onboarding.vue";
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
  {
    path: "/onboarding",
    name: "onboarding",
    component: Onboarding,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
