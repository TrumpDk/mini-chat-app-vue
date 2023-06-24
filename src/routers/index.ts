// import { defineAsyncComponent } from "vue";
import * as VueRouter from "vue-router";
// better not to use defineAsyncComponent, but don't know reason
// const Login = defineAsyncComponent(() => import("../layout/Login.vue"));
const Login = () => import('../layout/Login.vue');
const Callback = () => import('../layout/SignInCallback.vue');

const routes: VueRouter.RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/Callback", component: Callback}
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
