<template>
  <div class="four">
    <h2>Wat is je woonplaats?</h2>
    <p>
      Dan kunnen we je suggesties geven voor hulpaanbieders bij jou in de buurt. Dit is niet
      zichtbaar voor andere gebruikers.
    </p>

    <select id="town" name="town" :value="town" @input="updateTown" required>
      <option value="" disabled selected>Selecteer jouw woonplaats</option>
      <option value="Amsterdam">Amsterdam</option>
      <option value="Den Haag">Den Haag</option>
      <option value="Rotterdam">Rotterdam</option>
      <option value="Leeuwarden">Leeuwarden</option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      town: (state) => state.user.town,
    }),
  },
  methods: {
    updateTown(e) {
      this.$store.commit("updateStateTown", e.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "@/components/register/register.scss";
</style>
