<template>
  <div>
    <h2>Wat is je volledige naam?</h2>
    <p>Dan weten gebruikers hoe ze je kunnen aanspreken. Het mag ook een verzonnen naam zijn.</p>

    <label for="firstName" class="textLabel">
      <input
        type="text"
        class="loginInput"
        id="firstName"
        name="firstName"
        :value="firstName"
        @input="updateFirstName"
        placeholder="Voornaam"
        required
      />
    </label>

    <label for="surName" class="textLabel">
      <input
        type="text"
        class="loginInput"
        id="surName"
        name="surName"
        :value="surName"
        @input="updateSurName"
        placeholder="Achternaam"
        required
      />
    </label>
  </div>
</template>

<script>
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
@import "@/components/register/register.scss";
</style>
