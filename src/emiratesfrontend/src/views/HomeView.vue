<template>
  <v-app>
    <NavBar />
    <br /><br />
    <v-main>
      <v-container>
        <v-spacer />
        <FlightSearch />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import NavBar from "../components/NavBar";
import FlightSearch from "../views/FlightSearch";
export default {
  name: "HomeView",
  components: {
    NavBar,
    FlightSearch,
  },
};
</script>
<style>
</style>