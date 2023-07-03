import Vue, { Component } from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/views/DashBoard";
import GridSystem from "@/views/GridSystem";
import GridListPage from "@/views/GridListPage";
import BreakPoints from "@/views/BreakPoints";

Vue.use(VueRouter);

interface routeInfo {
  path: string;
  name: string;
  component: Component;
}

const routes: routeInfo[] = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
  {
    path: "/grid-list-page",
    name: "GridListPage",
    component: GridListPage,
  },
  {
    path: "/breakpoints",
    name: "BreakPoints",
    component: BreakPoints,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
