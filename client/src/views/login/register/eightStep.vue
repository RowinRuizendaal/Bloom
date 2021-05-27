<template>
  <label for="emailAddress"
    ><h2>Welkom</h2>

    <input
      type="email"
      id="emailAddress"
      name="emailAddress"
      :value="emailAddress"
      @input="updateEmailAddress"
      placeholder="Emailadres"
    />

    <input
      type="password"
      id="password"
      name="password"
      :value="password"
      @input="updatePassword"
      placeholder="Wachtwoord"
    />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";
import Input from "../../../components/input/input.vue";
import { mapState } from "vuex";

export default {
  components: {
    // Input,
  },
  computed: {
    ...mapState({
      emailAddress: (state) => state.user.emailAddress,
      password: (state) => state.user.password,
    }),
  },
  methods: {
    updateEmailAddress(e) {
      this.$store.commit("updateStateEmailAddress", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("updateStatePassword", e.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
