<template>
  <label for="firstName"
    ><h2>Wat is je volledige naam?</h2>
    <p>Dan weten...</p>

    <input type="text" id="firstName" name="firstName" v-model="firstName" />
  </label>
  <!-- <label for="surName"
            >Achternaam
            <input type="text" id="surName" name="surName" v-model="user.surName" />
          </label> -->
</template>

<script>
// import DataService from "../../services/DataService.js";
// console.log("state: ", this.$store.state.firstName);

export default {
  methods: {
    nextSlide() {
      return this.$store.commit("nextSlide");
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
