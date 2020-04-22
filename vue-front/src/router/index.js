import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Program from "../views/pages/Program.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/what-we-do",
    name: "What",
    component: () => import("../views/pages/What.vue")
  },
  {
    path: "/who-we-are",
    name: "Who",
    component: () => import("../views/pages/Who.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/pages/Events.vue")
  },
  {
    path: "/program",
    name: "Program",
    component: Program,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
