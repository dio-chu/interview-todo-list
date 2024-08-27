// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/HomePage.vue";
import ComponentTest from "../pages/ComponentTest.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/test",
    name: "ComponentTest",
    component: ComponentTest,
    children: [
      {
        path: ":componentName",
        name: "TestComponent",
        component: ComponentTest,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
