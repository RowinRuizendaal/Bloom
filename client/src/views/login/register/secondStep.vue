<template>
  <label for="birthDate"
    ><h2>Wat is je geboortedatum?</h2>
    <p>
      Dan weten kunnen we je koppelen aan leeftijdsgenoten. Je bent niet verplicht om je leeftijd te
      delen!
    </p>

    <input type="date" id="birthDate" name="birthDate" v-model="birthDate" />
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";

export default {
  data() {
    return {
      birthDate: "",
    };
  },
};
</script>

<style lang="scss"></style>
