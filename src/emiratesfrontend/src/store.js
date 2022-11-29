import Vue from "vue";
import Vuex from "vuex";
import { airports, airlines } from "./constants/airports";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user_id: "6ec95abc-2d4d-46ec-9174-bd595d380ed8",
    password: "securedpasswordofsrishti", // wouldn't store this here obviously.. will fix later scout's honor [X]
    baseurl: "http://localhost:8080/api",
    flight_drawer: false,
    airports: airports,
    airlines: airlines,
    //used to make queries for flights api
    // make sure to filter by user bookings
    users: [],
    user_search: {
      trip: "roundtrip",
      source: "NYC",
      dest: null,
      departdate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10), // used to filter locally; not supported by flightman
      returndate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10), // used to filter locally; not supported by flightman
    },
    user_search_flights: [], // array of {FlightObject: see flightman api}
    user_selected_flights: [], // array of {userid: String, flightId String}; used in booking api call
    user_bookings: [], // list of user bookings can be deleted
  },
});
