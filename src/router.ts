import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/products/all",
    redirect: "/products/all/All",
  },
  {
    path: "/products",
    name: "Products",
    redirect: "/products/all",
    component: () => import("./views/Products.vue"),
    children: [
      {
        path: "All",
        redirect: "/products/All/all",
      },
      {
        path: "mine",
        redirect: "/products/mine/all",
      },
      {
        path: "All/:type",
        component: () => import("./views/Products/All.vue"),
      },
      {
        path: "mine/:type",
        component: () => import("./views/Products/Self.vue"),
      },
    ],
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("./views/Mine.vue"),
  },
  {
    path: "/oauth2",
    name: "OAuth",
    component: () => import("./views/Login/Oauth.vue"),
  },
  {
    path: "/editinfo",
    component: () => import("./views/Mine/EditInfo.vue"),
  },
  {
    path: "/myfav",
    component: () => import("./views/Mine/MyFavourite.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
