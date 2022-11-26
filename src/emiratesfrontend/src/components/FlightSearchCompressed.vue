<template>
  <v-container class="d-flex flex-column">
    <!-- round trip / one way selection buttons -->
    <v-row>
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
    <v-row>
      <v-col>
        <v-text-field
          label="Leaving From"
          outlined
          height="20"
          rounded
          prepend-inner-icon="mdi-map-marker"
        ></v-text-field>
      </v-col>
      <!-- arrow icon -->
      <v-icon class="icon-class"> mdi-arrow-left-right </v-icon>

      <!-- dest airport text input -->
      <v-col>
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
      <v-col class="d-flex flex-column">
        <v-btn large depressed color="primary" rounded>
          Search
          <v-icon right dark> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import DatePickerMenu from "../components/DatePickerMenu";

export default {
  name: "FlightSearch",
  data() {
    return {
      tripSelection: "roundtrip",
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
  