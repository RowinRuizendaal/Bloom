<template>
  <label for="town"
    ><h2>Wat is je woonplaats?</h2>
    <p>
      Dan kunnen we je suggesties geven voor hulpaanbieders bij jou in de buurt. Dit is niet
      zichtbaar voor andere gebruikers.
    </p>

    <label for="town">Selecteer jouw woonplaats</label>

    <select id="town" name="town" v-model="town">
      <option value="Amsterdam">Amsterdam</option>
      <option value="Den Haag">Den Haag</option>
      <option value="Rotterdam">Rotterdam</option>
      <option value="Leeuwarden">Leeuwarden</option>
    </select>
  </label>
</template>

<script>
// import DataService from "../../services/DataService.js";

export default {
  data() {
    return {
      town: "",
      names: ["adam", "rotterdam"],
    };
  },
};
</script>

<style lang="scss"></style>
