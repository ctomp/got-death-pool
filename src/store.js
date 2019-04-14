import Vue from "vue";
import Vuex from "vuex";

import { characters } from "@/Characters.js";
import { players } from "@/Players.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters,
    players,
    week: 1
  },
  mutations: {},
  actions: {}
});
