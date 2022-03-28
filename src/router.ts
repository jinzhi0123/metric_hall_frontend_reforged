import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/products",
    redirect: "/products/All",
  },
  {
    path: "/products/:type",
    name: "Products",
    component: () => import("./views/Products.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("./views/Mine.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
