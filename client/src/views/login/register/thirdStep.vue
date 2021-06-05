<template>
  <div class="three">
    <h2>Wat is je geboortedatum?</h2>
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
      required
    />
  </div>
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
      let birthDate = e.target.value;
      let age = `${getAge(birthDate)} jaar`;

      // get age - source: https://stackoverflow.com/a/7091965
      function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }

      this.$store.commit("updateStateBirthDate", age);
    },
  },
};
</script>

<style lang="scss"></style>
