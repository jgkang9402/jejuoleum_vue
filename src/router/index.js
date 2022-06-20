import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import ListItem from "../views/ListItem.vue";
import VisitWrite from "../views/VisitWrite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListView,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/ListView.vue"),
    children: [
      {
        path: ":item",
        name: "listitem",
        component: ListItem,
      },
    ],
  },
  {
    path: "/map",
    name: "map",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MapView.vue"),
  },
  {
    path: "/like",
    name: "like",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LikeView.vue"),
  },
  {
    path: "/detail/:id/",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailView.vue"),
    children: [
      {
        path: "write",
        name: "visitwrite",
        component: VisitWrite,
      },
    ],
  },
  // {
  //   path: "/detail/:id/write",
  //   name: "visitwrite",
  //   component: VisitWrite,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
