<template>
  <div>
    <br />
    <v-card elevation="1" class="pa-0" outlined rounded="lg">
      <v-img
        height="250"
        src="https://www.gstatic.com/travel-frontend/animation/hero/flights_3.svg"
      ></v-img>
      <v-card-title> Search for Flights </v-card-title>
      <v-divider />
      <v-card-text>
        <v-container>
          <!-- round trip / one way selection buttons -->
          <v-row class="d-flex align-top">
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
          <v-row class="d-flex align-top">
            <v-col cols="4">
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
            <v-col cols="4">
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
              <DatePickerMenu
                pickerLabel="Departing"
                bindingDict="departdate"
              />
            </v-col>
            <!-- return date picker -->
            <v-col v-if="usersearch.trip === 'roundtrip'">
              <DatePickerMenu
                pickerLabel="Returning"
                bindingDict="returndate"
              />
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <!-- search button -->
            <router-link to="/search">
              <v-btn
                x-large
                depressed
                color="primary"
                min-width="300"
                min-height="60"
                rounded
                class="mb-4"
                @click="runSearch()"
              >
                Search
                <v-icon right dark> mdi-magnify </v-icon>
              </v-btn>
            </router-link>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import DatePickerMenu from "../components/DatePickerMenu";

export default {
  name: "FlightSearch",
  data() {
    return {
      tripSelection: "roundtrip",
      airports: this.$store.state.airports,
      usersearch: this.$store.state.user_search,
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
    runSearch() {
      const url =
        this.$store.state.baseurl +
        "/flights?Source Abbreviation=" +
        this.usersearch.source +
        "&Destination Abbreviation=" +
        this.usersearch.dest;
      this.axios
        .get(
          url,
          {},
          {
            auth: {
              username: this.$store.state.username,
              password: this.$store.state.password,
            },
          }
        )
        .then((response) => {
          this.$store.state.user_search_flights = response.data;
          console.log(this.$store.state.user_search_flights);
        });
    },
  },
};
</script>

<style scoped>
.icon-class {
  margin-bottom: 1.3em;
}
</style>
