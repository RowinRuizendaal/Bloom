<template>
  <label for="emailAddress"
    ><h2>Wat is je emailadres?</h2>
    <p>
      Dan kunnen we je informatie sturen en dit heb je nodig bij het inloggen bij deze applicatie.
    </p>

    <input
      type="email"
      id="emailAddress"
      name="emailAddress"
      :value="emailAddress"
      @input="updateEmailAddress"
    />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      emailAddress: (state) => state.user.emailAddress,
    }),
  },
  methods: {
    updateEmailAddress(e) {
      this.$store.commit("updateStateEmailAddress", e.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
