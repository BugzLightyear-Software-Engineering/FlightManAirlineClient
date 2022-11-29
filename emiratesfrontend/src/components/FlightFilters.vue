<template>
  <v-card class="mx-auto my-7" elevation="0" color="#fafafa">
    <v-card-title> Filter by </v-card-title>
    <v-card-text
      ><Strong>Airlines</Strong>
      <br />
      <div v-for="airline in airlines" :key="airline">
        <v-checkbox
          hide-details
          v-model="selected"
          :label="airline"
          value="John"
        ></v-checkbox>
      </div>
    </v-card-text>
    <v-card-text> </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "FlightFilters",
  data() {
    return {
      selected: ["John"],
      airlines: this.$store.state.airlines,
    };
  },
};
</script>
<style>
</style>