import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/login.vue";
import RegisterIndex from "../views/login/register/index.vue";
import ForgotPassword from "../views/login/forgotPassword.vue";

import Profile from "../views/profile/profile.vue";

import Buddies from "../views/buddies/buddies.vue";
import BuddyDetail from "../views/buddies/buddyDetail.vue";

import ChatOverview from "../views/chat/chatOverview.vue";
import ChatDetail from "../views/chat/chatDetail.vue";
import ChatRequest from "../views/chat/chatRequest.vue";

import Home from "../views/home.vue";
import Onboarding from "../views/onboarding.vue";
import Theme from "../views/themes/theme.vue";
import ThemeSlug from "../views/themes/slug.vue";
import store from "../store";

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
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
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
  {
    path: "/themes",
    name: "themes",
    component: Theme,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/article/:id",
    component: ThemeSlug,
    name: "article",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/buddies",
    name: "Buddies",
    component: Buddies,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/buddies/:id",
    name: "BuddieDetail",
    component: BuddyDetail,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chats",
    name: "ChatOverview",
    component: ChatOverview,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat/:id",
    name: "ChatDetail",
    component: ChatDetail,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chats/requests",
    name: "ChatRequest",
    component: ChatRequest,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.loggedIn) {
      next({
        name: "Login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
