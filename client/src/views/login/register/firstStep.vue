<template>
  <div class="first">
    <h2>Welkom</h2>
    <label for="emailAddress">
      <input
        type="email"
        class="loginInput"
        id="emailAddress"
        name="emailAddress"
        :value="emailAddress"
        @input="updateEmailAddress"
        placeholder="E-mailadres"
    /></label>

    <label for="password">
      <input
        type="password"
        class="loginInput"
        id="password"
        name="password"
        :value="password"
        @input="updatePassword"
        placeholder="Wachtwoord"
    /></label>

    <router-link to="/register" active-class="hulpaanbieder-register"
      >Ik ben een hulpaanbieder</router-link
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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

<style lang="scss">
div.first {
  width: 86vw;

  a {
    font-weight: bold;
    color: $gray;
    font-size: 0.7rem;
    text-align: center;
    display: block;
  }

  label {
    display: block;
    margin: 1em 0em;
    text-align: left;
    width: 100%;
  }
}
</style>
