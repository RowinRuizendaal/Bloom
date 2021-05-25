<template>
  <label for="password"
    ><h2>Kies een wachtwoord</h2>
    <p>Dan weten...</p>

    <input type="password" id="password" name="password" v-model="password" />
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
