<template>
  <div class="eight">
    <h2>Vertel iets over jezelf</h2>
    <p>Is er nog iets wat je zou willen delen? Dat kun je kwijt in je biografie.</p>

    <input
      type="text"
      :value="about"
      @input="updateAbout"
      placeholder="Vertel iets over jezelf"
      required
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      about: (state) => state.user.about,
    }),
  },
  methods: {
    updateAbout(e) {
      this.$store.commit("updateStateAbout", e.target.value);
    },
  },
};
</script>

<style lang="scss">
.eight {
  input[type="text"] {
    font-size: 0.875rem;
    font-family: $font-family-primary;
    font-weight: $font-weight-light;

    /* padding: 0.625rem 1.125rem; */
    padding: 0 0 6em 0.5em;
    resize: none;
    width: 100%;
    height: 20vh;

    border: solid 1px $lightgray;
    border-radius: 1.25rem;
  }
}
</style>
