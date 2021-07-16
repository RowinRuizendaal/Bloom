<template>
  <div class="four">
    <h2>Wat is je woonplaats?</h2>
    <p>
      Dan kunnen we je suggesties geven voor hulpaanbieders bij jou in de buurt. Dit is niet
      zichtbaar voor andere gebruikers.
    </p>

    <input type="text" placeholder="Den H" />

    <ul>
      <li>
        <p>Den Haag</p>
      </li>
    </ul>

    <!-- <select id="town" name="town" :value="town" @input="updateTown" required>
      <option value="" disabled selected>Selecteer jouw woonplaats</option>
      <option value="Amsterdam">Amsterdam</option>
      <option value="Den Haag">Den Haag</option>
      <option value="Rotterdam">Rotterdam</option>
      <option value="Leeuwarden">Leeuwarden</option>
    </select> -->
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      town: (state) => state.user.town,
    }),
  },
  mounted() {
    this.getCities();
  },
  methods: {
    updateTown(e) {
      this.$store.commit("updateStateTown", e.target.value);
    },

    // Get all cities data
    getCities() {
      const url =
        "https://gist.githubusercontent.com/ralfz123/91a16e5e30ae82bfe628c73254ea2888/raw/494015540fbb7a0a4e0685a252f8baa029ebb0bd/thenetherlands-cities";

      // better in a local file!

      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));

      // fetch data on the server?
      // axios
      //   .get("/api/register", this.$store.state.user, {
      //     headers: { "Content-type": "application/json" },
      //   })
      //   .then((response) => {
      //     if (response.status === 200) {
      //       let userData = response.data;

      //       // Clean store
      //       this.$store.state.user = "";

      //       // Set all data to store
      //       this.$store.state.user = userData;

      //       // Set states to true
      //       this.registered = true;
      //       this.$store.state.loggedIn = true;
      //     }
      //   })

      //   .catch((err) => {
      //     // if (this.errors.length >= 1) {
      //     //   return;
      //     // }
      //     // this.errors.push("Niet gelukt om acc in db te zetten");
      //   });
    },
  },
};
</script>

<style lang="scss">
@import "@/components/register/register.scss";
</style>
