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
import CategoriesList from "@/views/categories/CategoriesList.vue";
import EditEvent from "@/views/events/EditEvent.vue";
import EditCategory from "@/views/categories/EditCategory.vue";
import AdminDashboard from "@/views/admin/AdminDashboard.vue";

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
    path: "/edit-event",
    name: "editEvent",
    component: EditEvent,
  },
  {
    path: "/admin-dashboard",
    name: "adminDashboard",
    component: AdminDashboard,
    children: [
      {
        path: "/news/allNews",
        name: "AllNews",
        component: AllNews,
      },
      {
        path: "/create/news",
        name: "createNews",
        component: CreateNews,
      },
      {
        path: "/create/category",
        name: "category",
        component: CreateCategory,
      },

      {
        path: "/categories",
        name: "Categories",
        component: CategoriesList,
      },
      {
        path: "/create/events",
        name: "createEvents",
        component: CreateEvents,
      },
      {
        path: "/events",
        name: "events",
        component: Events,
      },
      {
        path: "/edit-news",
        name: "editNews",
        component: EditNews,
      },
      {
        path: "/edit-category",
        name: "editCategory",
        component: EditCategory,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
