<template>
  <div class="debug">
    <v-card light class="flightdrawer-container">
      <v-card-text>
        <v-row align="center">
          <v-btn class="ml-2" icon @click="closeTrigger()">
            <v-icon> mdi-close </v-icon></v-btn
          >
          <v-card-title>Select fare to Newark</v-card-title>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title class="pl-8">10:30am - 12:24pm (Nonstop)</v-card-title>
      <v-card class="mx-8" outlined>
        <v-card-title>$100</v-card-title>
        <v-card-text>
          <v-icon class="mx-2"> mdi-airplane-takeoff </v-icon>
          <Strong>Basic Economy</Strong>
          <br />
          <v-icon class="mx-2"> mdi-airplane-landing</v-icon>Cabin:Economy
        </v-card-text>
        <v-card-text>
          <strong>Seat</strong>
          <br />Cabin:Economy
        </v-card-text>
        <v-card-text>
          <v-btn block rounded color="primary"> Select </v-btn>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "FlightBookingDrawer",
  props: {
    trigger: String,
  },
  methods: {
    closeTrigger() {
      this.$store.state[this.trigger] = false;
    },
  },
};
</script>
<style>
.debug {
  height: 100vh;
  width: 30vw;
  min-width: 300px;
}
.flightdrawer-container {
  height: 100%;
  color: blue;
}
</style>