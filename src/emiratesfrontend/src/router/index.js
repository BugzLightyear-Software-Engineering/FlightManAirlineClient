import HomeView from "@/views/HomeView.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
  ],
});

export default router;
