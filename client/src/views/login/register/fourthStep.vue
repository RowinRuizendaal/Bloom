<template>
  <div class="four">
    <h2>Wat is je woonplaats?</h2>
    <p>
      Dan kunnen we je suggesties geven voor hulpaanbieders bij jou in de buurt. Dit is niet
      zichtbaar voor andere gebruikers.
    </p>

    <input type="text" placeholder="Den Haag" @input="searchCitiesByValue()" id="searchCity" />

    <ul v-if="this.found != null">
      <li v-for="(item, index) in this.found" :key="index">
        <input type="radio" name="town" :value="item" :id="item" @input="updateTown" />
        <label :for="item">{{ item }}</label>
      </li>
    </ul>

    <div v-else class="error">
      <p>Helaas geen woonplaats gevonden. Probeer een stad die dichtbij u in de buurt ligt.</p>
    </div>

    <!-- The dropdown way below -->
    <!-- <div v-if="this.found != null">
      <select name="town" id="town">
        <option :value="item" v-for="(item, index) in this.found" :key="index">
          {{ item }}
        </option>
      </select>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import cities from "../../../cities.js";

export default {
  computed: {
    ...mapState({
      town: (state) => state.user.town,
    }),
  },
  data() {
    return {
      data: cities,
      found: null,
    };
  },
  methods: {
    updateTown(e) {
      this.$store.commit("updateStateTown", e.target.value);
    },

    // Find city by input value
    searchCitiesByValue() {
      const inputValue = document.querySelector("#searchCity").value;
      const citiesData = this.data;

      // 1. Search in all objects
      // for (let i = 0; i < citiesData.length; i++) {
      //   let object = citiesData[i];
      // }

      // 2. the ones who are equal to (begin with the inputValue) --> render them
      this.found = updateResult(inputValue, citiesData);

      function updateResult(query, arr) {
        let found = [];
        arr.map(function (algo) {
          query.split(" ").map(function (word) {
            let city = algo.city;

            if (city.toLowerCase().indexOf(word) != -1) {
              found.push(city);
            }
            return found;
          });
        });
        return found;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/components/register/register.scss";
</style>
