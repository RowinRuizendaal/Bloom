<template>
  <label for="birthDate"
    ><h2>Wat is je geboortedatum?</h2>
    <p>
      Dan weten kunnen we je koppelen aan leeftijdsgenoten. Je bent niet verplicht om je leeftijd te
      delen!
    </p>

    <input
      type="date"
      class="loginInput"
      id="birthDate"
      name="birthDate"
      :value="birthDate"
      @input="updateBirthDate"
    />
  </label>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      birthDate: (state) => state.user.birthDate,
    }),
  },
  methods: {
    updateBirthDate(e) {
      this.$store.commit("updateStateBirthDate", e.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
