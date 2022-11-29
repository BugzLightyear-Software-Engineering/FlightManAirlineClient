<template>
  <v-container>
    <v-spacer />
    <FlightSearch />
  </v-container>
</template>
<script>
import FlightSearch from "../components/FlightSearch";
export default {
  name: "HomeView",
  components: {
    FlightSearch,
  },
};
</script>
<style>
</style>