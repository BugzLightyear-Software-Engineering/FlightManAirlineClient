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
            <v-btn color="success" class="mt-12" @click="overlay = !overlay">
              Show Overlay
            </v-btn>
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
          </v-col>
        </v-row>
      </v-container>
      <v-overlay :value="overlay">
        <div class="overlaycont" @click="overlay = false">
          <FlightBookingDrawer />
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
  data() {
    return {
      overlay: false,
    };
  },
};
</script>
<style scoped>
.overlaycont {
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  /* border: solid 2px pink; */
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