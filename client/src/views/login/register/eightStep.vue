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

    <router-link to="/register" active-class="hulpaanbieder-register"
      >Ik ben een hulpaanbieder</router-link
    >
    <router-link to="/login" active-class="login">Ik heb al een account</router-link>
  </label>
</template>

<script>
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

<style lang="scss">
label {
  input {
  }
  a {
    font-weight: bold;
    color: rgb(114, 109, 97);
    font-size: 0.7rem;
  }
}
</style>
