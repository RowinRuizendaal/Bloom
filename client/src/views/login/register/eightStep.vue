<template>
  <label for="emailAddress"
    ><h2>Wat is je emailadres?</h2>
    <p>
      Dan kunnen we je informatie sturen en dit heb je nodig bij het inloggen bij deze applicatie.
    </p>

    <input type="email" id="emailAddress" name="emailAddress" v-model="emailAddress" />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";

export default {
  data() {
    return {
      emailAddress: "",
    };
  },
};
</script>

<style lang="scss"></style>
