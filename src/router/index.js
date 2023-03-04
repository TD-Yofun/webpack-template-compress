import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/me",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/me/index.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
