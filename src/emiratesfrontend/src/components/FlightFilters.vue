<template>
  <v-card class="mx-auto my-7" elevation="0" color="#fafafa">
    <v-card-title> Filter by </v-card-title>
    <v-card-text
      ><Strong>Airlines</Strong><br /><v-checkbox
        hide-details
        v-model="selected"
        label="John"
        value="John"
      ></v-checkbox>
      <v-checkbox
        hide-details
        v-model="selected"
        label="Jacob"
        value="Jacob"
      ></v-checkbox
    ></v-card-text>
    <v-card-text> </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "FlightFilters",
  data() {
    return {
      selected: ["John"],
    };
  },
};
</script>
<style>
</style>