<template>
  <label for="profileAvatar"
    ><h2>Kies een profel pictogram</h2>
    <p>Dan weten...</p>

    <input
      type="radio"
      id="profileAvatar"
      name="profileAvatar"
      v-model="profileAvatar"
      value="pic-1"
    />
    Pic1
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
  data() {
    return {
      avatars: [1, 2, 3],
    };
  },
};
</script>

<style lang="scss"></style>
