<template>
  <label for="about"
    ><h2>Vertel iets over jezelf</h2>
    <p>Is er nog iets wat je zou willen delen? Dat kun je kwijt in je biografie.</p>
    <textarea id="about" name="about" v-model="about" placeholder="Vertel iets over jezelf" />
    <p>{{ about }}</p>
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";
import Textarea from "../../../components/textarea/textarea";
import { mapState } from "vuex";

export default {
  components: {
    // Textarea,
  },

  computed: {
    ...mapState({
      about: (state) => state.user.about,
    }),
  },
  methods: {
    updateAbout(e) {
      console.log("clicked: ", e);
      console.log(this.about);
      this.$store.commit("updateStateAbout", e.target.value);
    },
    data() {
      return {
        about: "",
      };
    },
  },
};
</script>

<style lang="scss"></style>
