<template >
  <div class="flight-result-container">
    <div class="flight-result-header">
      <FlightSearchCompressed />
    </div>
    <v-divider></v-divider>
    <div class="flight-result-body">
      <v-container>
        <v-row>
          <v-col cols="3">
            <FlightFilters />
          </v-col>
          <v-col cols="9">
            <!-- <FlightCard @click.native="openDrawer()" /> -->
            <FlightCard
              v-for="flight in flightlist"
              :key="flight.flightId"
              @click.native="openDrawer()"
              :flight_object="flight"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-overlay :value="overlay">
        <div class="overlaycont">
          <div class="closediv" @click="closeDrawer()"></div>
          <!-- this is really bad but fuck it -->
          <FlightBookingDrawer trigger="flight_drawer" />
        </div>
      </v-overlay>
    </div>
  </div>
</template>
<script>
import FlightCard from "@/components/FlightCard.vue";
import FlightFilters from "@/components/FlightFilters.vue";
import FlightSearchCompressed from "@/components/FlightSearchCompressed.vue";
import FlightBookingDrawer from "@/components/FlightBookingDrawer.vue";
export default {
  name: "FlightSearchResult",
  components: {
    FlightSearchCompressed,
    FlightCard,
    FlightFilters,
    FlightBookingDrawer,
  },
  computed: {
    overlay() {
      return this.$store.state.flight_drawer;
    },
    flightlist() {
      return this.$store.state.user_search_flights;
    },
  },
  methods: {
    openDrawer() {
      this.$store.state.flight_drawer = true;
    },
    closeDrawer() {
      this.$store.state.flight_drawer = false;
    },
  },
};
</script>
<style scoped>
.overlaycont {
  display: flex;
  position: relative;
  justify-content: flex-end;
  width: 100vw;
  /* border: solid 2px pink; */
}
.closediv {
  /* border: solid 2px pink; */
  flex: 1 1 auto;
}
.flight-result-container {
  display: flex;
  flex-flow: column;
  height: 100%;
  padding-top: 1em;
}
.flight-result-header {
  flex: 0 1 auto;
}
.flight-result-body {
  background: #fafafa;
  flex: 1 1 auto;
}
</style>