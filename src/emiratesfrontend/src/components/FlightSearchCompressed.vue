<template>
  <v-container class="d-flex flex-column">
    <!-- round trip / one way selection buttons -->
    <v-row>
      <v-col>
        <v-btn-toggle
          @change="getTripType"
          v-model="usersearch.trip"
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
        <v-autocomplete
          v-model="usersearch.source"
          :items="airports"
          outlined
          rounded
          prepend-inner-icon="mdi-map-marker"
          label="Leaving From"
        ></v-autocomplete>
      </v-col>
      <!-- arrow icon -->
      <v-icon class="icon-class"> mdi-arrow-left-right </v-icon>

      <!-- dest airport text input -->
      <v-col>
        <v-autocomplete
          v-model="usersearch.dest"
          :items="airports"
          outlined
          rounded
          prepend-inner-icon="mdi-map-marker"
          label="Going to"
        ></v-autocomplete>
      </v-col>
      <!-- depart date picker -->
      <v-col>
        <DatePickerMenu pickerLabel="Departing" bindingDict="departdate" />
      </v-col>
      <!-- return date picker -->
      <v-col v-if="usersearch.trip === 'roundtrip'">
        <DatePickerMenu pickerLabel="Returning" bindingDict="returndate" />
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
      usersearch: this.$store.state.user_search,
      airports: this.$store.state.airports,
      values: null,
    };
  },
  components: {
    DatePickerMenu,
  },
  methods: {
    getTripType() {
      this.$store.state.user_search.trip = this.usersearch.trip;
    },
  },
};
</script>
  
  <style scoped>
.icon-class {
  margin-bottom: 1.3em;
}
</style>
  