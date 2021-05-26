<template>
  <!-- <label for="firstName"> -->
  <div>
    <h2>Wat is je volledige naam?</h2>
    <p>Dan weten gebruikers hoe ze je kunnen aanspreken. Het mag ook een verzonnen naam zijn.</p>

    <input
      type="text"
      id="firstName"
      name="firstName"
      :value="firstName"
      @input="updateFirstName"
      placeholder="John"
    />
    <input
      type="text"
      id="surName"
      name="surName"
      :value="surName"
      @input="updateSurName"
      placeholder="Doe"
    />
  </div>
  <!-- </label> -->
</template>

<script>
// import DataService from "../../services/DataService.js";
// console.log("state: ", this.$store.state.firstName);
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      firstName: (state) => state.user.firstName,
      surName: (state) => state.user.surName,
    }),
  },
  methods: {
    updateFirstName(e) {
      this.$store.commit("updateStateFirstName", e.target.value);
    },
    updateSurName(e) {
      this.$store.commit("updateStateSurName", e.target.value);
    },
  },
};
</script>

<style lang="scss">
/* form {
  width: 20em;

  label {
    display: block;
    margin: 0.3em 0em;
  }

  input {
    color: red;
  }
}

h1 {
  color: $orange;
  font-size: 48px;
  margin-bottom: 5rem;
} */
</style>
