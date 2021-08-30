<template>
  <section class="profile-edit">
    <header>
      <h2>Profiel</h2>
      <button type="submit" @click="updateValues()">opslaan</button>
    </header>

    <main>
      <form v-on:submit="onSubmit" method="POST" enctype="application/x-www-form-urlencoded">
        <article>
          <div class="profile-img" :class="data.profileAvatar">
            <p>
              {{ createInitials(data.firstName, data.surName) }}
            </p>
          </div>
          <router-link to="/profile-edit"
            ><p>Profiel pictogram wijzigen</p>

            <select id="profileAvatar">
              <option
                v-for="(item, index) in pictogramChoices"
                :key="index"
                :value="item.name"
                :id="item.hex"
              >
                <p v-if="data.profileAvatar == item.name">INGESTELD:</p>
                {{ item.name }}
              </option>
            </select></router-link
          >
        </article>

        <article>
          <h3>Persoonlijke gegevens</h3>
          <div>
            <ul>
              <li>
                <p>Voornaam</p>
              </li>
              <li>
                <p>Achternaam</p>
              </li>
              <li>
                <p>Geboortedatum</p>
              </li>
              <li>
                <p>Woonplaats</p>
              </li>
              <li>
                <p>Geslacht</p>
              </li>
              <li>
                <p>Emailadres</p>
              </li>
              <li>
                <p>Biografie</p>
              </li>
            </ul>

            <ul>
              <li>
                <input type="text" id="firstName" :value="data.firstName" />
              </li>
              <li>
                <input type="text" id="surName" :value="data.surName" />
              </li>
              <li>
                <input type="date" id="birthDate" :value="data.birthDate" />
              </li>
              <li>
                <input type="text" id="town" :value="data.town" />
              </li>
              <li>
                <input type="text" id="gender" :value="data.gender" />
              </li>
              <li>
                <input type="email" id="emailAddress" :value="data.emailAddress" />
              </li>
              <li>
                <input type="text" id="about" :value="data.about" />
              </li>
            </ul>
          </div>
        </article>

        <article>
          <h3>Oncospecifiek</h3>
          <div>
            <ul>
              <li>
                <p>Type kanker</p>
              </li>
              <li>
                <p>Fase</p>
              </li>
              <li>
                <p>Ziekenhuis</p>
              </li>
              <li>
                <p>Diagnosejaar</p>
              </li>
            </ul>

            <ul>
              <li>
                <select id="typeIllness">
                  <option
                    v-for="(item, index) in typeChoices"
                    :key="index"
                    :value="item"
                    :id="item"
                  >
                    <p v-if="data.typeIllness == item">INGESTELD:</p>
                    {{ item }}
                  </option>
                </select>
              </li>

              <li>
                <input type="text" value="lorem" />
              </li>
              <li>
                <input type="text" value="lorem" />
              </li>
              <li>
                <input type="text" value="lorem" />
              </li>
            </ul>
          </div>
        </article>

        <article>
          <h3>Profielvragen</h3>
          <div :class="data.profileAvatar">
            <h4>Wat is de vraag?</h4>
            <p>Dit is het antwoord.</p>
          </div>
        </article>

        <article>
          <h3>Interactie</h3>
          <input type="checkbox" /> Ontdekking
          <p>
            Als je ontdekking uitschakelt, kunnen andere gebruikers jouw profiel niet zien. Je
            bestaande chats blijven wel actief.
          </p>
        </article>

        <button @click="logout()" class="logoutButton" to="/login">Uitloggen</button>
      </form>
    </main>
    <Nav active="profile" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    Nav,
  },
  data() {
    let dataUser = this.$store.state.user;

    return {
      data: dataUser,
      typeChoices: [
        "Hoofd-halskanker",
        "Spijsverteringsorganen",
        "Huidkanker",
        "Luchtwegen",
        "Borstkanker",
        "Urinewegen",
        "Bot, kraakbeen en weke delen",
        "Vrouwelijke geslachtsorganen",
        "Oogkanker",
        "Hematologische maligniteiten",
        "Endocriene klieren",
        "Mannelijke geslachtsorganen",
        "Centraal zenuwstelsel",
        "Overig",
        "Zeg ik liever niet",
      ],
      pictogramChoices: [
        { hex: "#fee89e", name: "yellow" },
        { hex: "#fed7a0", name: "orange" },
        { hex: "#feb4b0", name: "pink" },
        { hex: "#baf0c5", name: "green" },
        { hex: "#c2eafb", name: "blue" },
        { hex: "#dad0fb", name: "purple" },
        { hex: "#d3d3d3", name: "gray" },
        { hex: "#fec5d4", name: "pinkTwo" },
        { hex: "#fef1c5", name: "yellowTwo" },
      ],
    };
  },

  methods: {
    // Creates the initals of the fullname
    createInitials(firstName, surName) {
      let fullName = `${firstName} ${surName}`;

      // Logic for getting the name initials
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...fullName.matchAll(rgx)] || [];
      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
      return initials;
    },

    // Calculates the age from birthday to string
    calcAge(dateString) {
      const birthday = +new Date(dateString);
      return ~~((Date.now() - birthday) / 31557600000) + " jaar";
    },

    onSubmit(e) {
      e.preventDefault();
      this.updateValues();
    },

    // Updates the values in the database
    updateValues() {
      let data = {
        firstName: this.$el.querySelector("#firstName").value,
        surName: this.$el.querySelector("#surName").value,
        emailAddress: this.$el.querySelector("#emailAddress").value,
        birthDate: this.$el.querySelector("#birthDate").value,
        town: this.$el.querySelector("#town").value,
        gender: this.$el.querySelector("#gender").value,
        typeIllness: this.$el.querySelector("#typeIllness").value,
        profileAvatar: this.$el.querySelector("#profileAvatar").value,
        about: this.$el.querySelector("#about").value,
      };

      const url = `/api/profile-update/${this.$store.state.user._id}`;

      axios
        .post(url, data, {
          headers: { "Content-type": "application/json" },
        })
        .then((response) => {
          if (response.status === 200) {
            let userData = response.data;

            // Clean store
            this.$store.state.user = "";

            // Set all data to LS AND VUEX
            this.$store.commit("updateUser", userData);

            // Redirect to profile
            this.$router.push("/profile");
          }
        })

        .catch((err) => {
          // if (this.errors.length >= 1) {
          //   return;
          // }
          // this.errors.push("Niet gelukt om acc in db te zetten");
        });
    },

    // Checks which values are selected from the multiple choice questions
    valueCheckerType(profileAvatar) {
      // 1. check the one who is equal to the parameter value
      // if profileAvatar
      // else if typeIllness
    },

    // logout handler
    logout() {
      // clear LS

      // !clear Vuex Store --> does not work because vuex is filled by LS ^
      this.$store.state.user = null;
      console.log("store after clearing: ", this.$store.state.user);
      this.$store.commit("logoutUser");

      // set login to false
      this.$store.state.loggedIn = false;

      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/profile/profileEdit.scss";
</style>
