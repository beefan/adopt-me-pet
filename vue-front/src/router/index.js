import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () =>
      import("../views/pages/What.vue")
  },
  {
  path: "/who-we-are",
  name: "Who",
  component: () =>
    import("../views/pages/Who.vue")
  },
{
path: "/events",
name: "Events",
component: () =>
  import("../views/pages/Events.vue")
},
{
  path: "/program/:name",
  name: "Program",
  component: () => 
    import("../views/pages/Program.vue")
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
