import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/login.vue";
import RegisterIndex from "../views/login/register/index.vue";
import ForgotPassword from "../views/login/forgotPassword.vue";

import Profile from "../views/profile/profile.vue";
import ProfileEdit from "../views/profile/profileEdit.vue";

import Buddies from "../views/buddies/buddies.vue";
import BuddyDetail from "../views/buddies/buddyDetail.vue";

import ChatOverview from "../views/chat/chatOverview.vue";
import ChatDetail from "../views/chat/chatDetail.vue";
import ChatRequest from "../views/chat/chatRequest.vue";

import Home from "../views/home.vue";
import Onboarding from "../views/onboarding.vue";

import Theme from "../views/themes/theme.vue";
import Themeslug from "../views/themes/slug.vue";

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
  },
  {
    path: "/profile-edit",
    name: "ProfileEdit",
    component: ProfileEdit,
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
  },
  {
    path: "/article/:id",
    component: Themeslug,
    name: "article",
  },
  {
    path: "/buddies",
    name: "Buddies",
    component: Buddies,
  },
  {
    path: "/buddies/:id",
    name: "BuddieDetail",
    component: BuddyDetail,
  },
  {
    path: "/chats",
    name: "ChatOverview",
    component: ChatOverview,
  },
  {
    path: "/chat/1",
    name: "ChatDetail",
    component: ChatDetail,
  },
  {
    path: "/chat-requests",
    name: "ChatRequest",
    component: ChatRequest,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
