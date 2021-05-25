<template>
  <label for="about"
    ><h2>Vertel iets over jezelf</h2>
    <p>Is er...</p>
    <Textarea id="about" name="about" v-model="about" placeholder="Vertel iets over jezelf" />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";
import Textarea from "../../../components/textarea/textarea";

export default {
  components: {
    Textarea,
  },
  methods: {
    nextSlide() {
      return this.$store.commit("nextSlide");
    },
  },
};
</script>

<style lang="scss"></style>
