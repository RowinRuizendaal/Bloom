<template>
  <label for="birthDate"
    ><h2>Wat is je geboortedatum?</h2>
    <p>Dan weten...</p>

    <input type="date" id="birthDate" name="birthDate" v-model="birthDate" />
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
