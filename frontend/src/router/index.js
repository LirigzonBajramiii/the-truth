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
import Shendetesi from "@/views/news/Shendetesi.vue";
import Sport from "@/views/news/Sport.vue";
import Ekonomi from "@/views/news/Ekonomi.vue";
import Teknologji from "@/views/news/Teknologji.vue";
import AllNews from "@/views/news/AllNews.vue";
import EditNews from "@/views/news/EditNews.vue";

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
    path: "/edit-news",
    name: "editNews",
    component: EditNews,
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
  {
    path: "/news/shendetesi",
    name: "shendetesi",
    component: Shendetesi,
  },
  {
    path: "/news/sport",
    name: "sport",
    component: Sport,
  },
  {
    path: "/news/ekonomi",
    name: "ekonomi",
    component: Ekonomi,
  },
  {
    path: "/news/teknologji",
    name: "teknologji",
    component: Teknologji,
  },
  {
    path: "/news/allNews",
    name: "AllNews",
    component: AllNews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
