<template>
  <label for="town"
    ><h2>Wat is je woonplaats?</h2>
    <p>Dan kunnen we...</p>

    <input type="text " id="town" name="town" v-model="town" placeholder="dropdown hier" />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";

export default {
  methods: {
    nextSlide() {
      return this.$store.commit("nextSlide");
    },
  },
};
</script>

<style lang="scss"></style>
