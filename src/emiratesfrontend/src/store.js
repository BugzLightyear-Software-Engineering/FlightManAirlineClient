import Vue from "vue";
import Vuex from "vuex";
import { airports } from "./constants/airports";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    flight_drawer: false,
    airports: airports,
  },
});
