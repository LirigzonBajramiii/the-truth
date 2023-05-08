import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import Events from "@/views/events/Events.vue";
import News from "@/views/news/News.vue";
import About from "@/views/about/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/events",
    name: "events",
    component: Events,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
