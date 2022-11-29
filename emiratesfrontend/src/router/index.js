import HomeView from "@/views/HomeView.vue";
import FlightSearchResult from "@/views/FlightSearchResult.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/search",
      name: "FlightSearchResult",
      component: FlightSearchResult,
    },
  ],
});

export default router;
