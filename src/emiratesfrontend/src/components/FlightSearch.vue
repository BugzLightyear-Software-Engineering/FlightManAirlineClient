<template>
  <v-card elevation="1" class="pa-2" outlined rounded="lg">
    <v-card-title> Search for Flights </v-card-title>
    <v-divider />
    <v-card-text>
      <v-container>
        <!-- round trip / one way selection buttons -->
        <v-row class="d-flex align-top">
          <v-col>
            <v-btn-toggle
              @change="getTripType"
              v-model="tripSelection"
              group
              rounded
              color="blue"
            >
              <v-btn value="roundtrip" outlined> Roundtrip </v-btn>
              <v-btn value="oneway"> Oneway </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <!-- source airport text input -->
        <v-row class="d-flex align-top">
          <v-col cols="4">
            <v-text-field
              label="Leaving From"
              outlined
              rounded
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
          <!-- arrow icon -->
          <v-icon class="icon-class"> mdi-arrow-left-right </v-icon>

          <!-- dest airport text input -->
          <v-col cols="4">
            <v-text-field
              label="Going to"
              outlined
              rounded
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
          <!-- depart date picker -->
          <v-col>
            <DatePickerMenu pickerLabel="Departing" />
          </v-col>
          <!-- return date picker -->
          <v-col v-if="tripSelection === 'roundtrip'">
            <DatePickerMenu pickerLabel="Returning" />
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <!-- search button -->
          <v-btn
            x-large
            depressed
            color="primary"
            min-width="300"
            min-height="60"
            rounded
          >
            Search
            <v-icon right dark> mdi-magnify </v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import DatePickerMenu from "../components/DatePickerMenu";

export default {
  name: "FlightSearch",
  data() {
    return {
      tripSelection: null,
    };
  },
  components: {
    DatePickerMenu,
  },
  methods: {
    getTripType() {
      //   console.log(this.tripSelection);
    },
  },
};
</script>

<style scoped>
.icon-class {
  margin-bottom: 1.3em;
}
</style>
