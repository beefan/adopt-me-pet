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
      import("../views/What.vue")
  },
  {
  path: "/who-we-are",
  name: "Who",
  component: () =>
    import("../views/Who.vue")
  },
{
path: "/events",
name: "Events",
component: () =>
  import("../views/Events.vue")
},
{
  path: "/program/:name",
  name: "Program",
  component: () => 
    import("../views/Program.vue")
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
