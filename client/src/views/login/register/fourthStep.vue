<template>
  <label for="gender"
    ><h2>Wat is je gender?</h2>

    <input type="radio" id="men" value="Man" name="gender" v-model="gender" />
    <label for="men">Man</label>

    <input type="radio" id="woman" value="Vrouw" name="gender" v-model="gender" />
    <label for="woman">Vrouw</label>

    <input type="radio" id="neutral" value="Vrouw" name="gender" v-model="gender" />
    <label for="neutral">Neutraal</label>
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
