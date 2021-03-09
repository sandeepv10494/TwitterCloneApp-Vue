import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../components/Explore.vue";
import Notifications from "../components/Notifications.vue";
import Messages from "../components/Messages.vue";
import Profile from "../components/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    iconClass: "fas fa-home",
    mainMenu: true,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
    iconClass: "fas fa-search",
    mainMenu: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    iconClass: "fas fa-bell",
    mainMenu: true,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
    iconClass: "fas fa-envelope",
    mainMenu: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
