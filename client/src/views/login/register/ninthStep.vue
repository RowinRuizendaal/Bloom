<template>
  <label for="password"
    ><h2>Kies een wachtwoord</h2>
    <p>Verzin een wachtwoord die je niet snel vergeet.</p>

    <input
      type="password"
      id="password"
      name="password"
      :value="password"
      @input="updatePassword"
    />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      password: (state) => state.user.password,
    }),
  },
  methods: {
    updatePassword(e) {
      this.$store.commit("updateStatePassword", e.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
