import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import Events from "@/views/events/Events.vue";
import News from "@/views/news/News.vue";
import CreateNews from "@/views/news/CreateNews.vue";
import CreateCategory from "@/views/categories/CreateCategory.vue";
import About from "@/views/about/About.vue";
import Login from "@/views/users/LoginView.vue";
import Register from "@/views/users/RegisterView.vue";
import SingleNews from "@/views/news/SingleNews.vue";
import CreateEvents from "@/views/events/CreateEvents.vue";
import Event from "@/views/events/Event.vue";

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
    path: "/create/events",
    name: "createEvents",
    component: CreateEvents,
  },
  {
    path: "/event/:id",
    name: "event",
    component: Event,
    props: true,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/single-news/:id",
    name: "singleNews",
    component: SingleNews,
    props: true,
  },
  {
    path: "/create/news",
    name: "createNews",
    component: CreateNews,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/create/category",
    name: "category",
    component: CreateCategory,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
