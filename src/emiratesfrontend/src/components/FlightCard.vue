<template>
  <v-card hover class="mx-auto my-7">
    <v-container class="d-flex flex-row">
      <v-col>
        <v-card-title>{{
          flight_object.departureTime.slice(0, 5) +
          " pm - " +
          flight_object.estArrivalTime.slice(0, 5) +
          " am"
        }}</v-card-title>
        <v-card-text>
          <div>
            {{
              "(" +
              flight_object.sourceAirport.airportAbvName +
              ")" +
              " - " +
              "(" +
              flight_object.destAirport.airportAbvName +
              ")"
            }}
          </div>
          <div>
            {{ flight_object.flightModel.flightManufacturerName.toUpperCase() }}
          </div>
        </v-card-text>
      </v-col>
      <v-col> <v-card-text align="middle">2h 0m (Nonstop)</v-card-text> </v-col>
      <v-col>
        <v-card-text align="end">
          <div>2 left</div>
          <div class="ticketprice">{{ "$" + flight_object.cost }}</div>
          <div>Roundtrip per traveler</div>
        </v-card-text>
      </v-col>
    </v-container>
    <v-divider class="mx-4"></v-divider>

    <v-card-text> Carry-on included </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "FlightCard",
  props: {
    flight_object: Object,
  },
};
</script>
<style>
.ticketprice {
  font-weight: bold;
  font-size: x-large;
}
</style>