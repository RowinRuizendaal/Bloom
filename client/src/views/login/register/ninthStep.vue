<template>
  <label for="password"
    ><h2>Kies een wachtwoord</h2>
    <p>Verzin een wachtwoord die je niet snel vergeet.</p>

    <input type="password" id="password" name="password" v-model="password" />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";

export default {
  data() {
    return {
      password: "",
    };
  },
};
</script>

<style lang="scss"></style>
