<template>
  <label for="about"
    ><h2>Vertel iets over jezelf</h2>
    <p>Is er nog iets wat je zou willen delen? Dat kun je kwijt in je biografie.</p>
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
  data() {
    return {
      about: "",
    };
  },
};
</script>

<style lang="scss"></style>
