<template>
  <label for="emailAddress"
    ><h2>Wat is je emailadres?</h2>
    <p>Dan weten...</p>

    <input type="email" id="emailAddress" name="emailAddress" v-model="emailAddress" />
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
