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
@import "@/components/register/register.scss";
</style>
