<script>
import HomeView from "./views/HomeView";
export default {
  components: { HomeView },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<template>
  <router-view>
    <HomeView />
  </router-view>
</template>


