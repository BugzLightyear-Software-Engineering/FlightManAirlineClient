<script>
import NavBar from "@/components/NavBar";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>


