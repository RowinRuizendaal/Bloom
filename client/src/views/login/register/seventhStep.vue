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

<style lang="scss">
textarea {
  font-size: 0.875rem;
  font-family: $font-family-primary;
  font-weight: $font-weight-light;

  padding: 0.625rem 1.125rem;
  resize: none;
  width: 100%;
  height: 20vh;

  border: solid 1px $lightgray;
  border-radius: 1.25rem;

  &:focus {
    outline: none;
  }
}
</style>
