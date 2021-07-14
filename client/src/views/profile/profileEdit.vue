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
          <router-link to="/profile-edit"><p>Profiel pictogram wijzigen</p></router-link>
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
                <!-- <input type="text" :value="data.firstName" id="firstName" v-model="firstName" /> -->
              </li>
              <li>
                <!-- <input type="text" :value="data.surName" id="surName" v-model="surName" /> -->
              </li>
              <li>
                <input type="date" :value="data.birthDate" />
              </li>
              <li>
                <input type="text" :value="data.gender" />
              </li>
              <li>
                <input type="email" :value="data.emailAddress" />
              </li>
              <li>
                <input type="text" :value="data.about" />
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
                <!-- make dropdown and check the selected which is selected from the db -->
                <input type="text" :value="data.typeIllness[0]" />

                <select name="" id="">
                  <option
                    v-for="(item, index) in typeChoices"
                    :key="index"
                    :value="item"
                    :id="item"
                  >
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
        firstName: this.firstName,
        surName: this.surName,
        emailAddress: this.emailAddress.toLowerCase(),
        birthDate: this.birthDate,
        town: this.town,
        gender: this.gender,
        typeIllness: this.typeIllness,
        profileAvatar: this.profileAvatar,
        about: this.about,
      };

      axios
        .post("/api/profile-update", data, {
          headers: { "Content-type": "application/json" },
        })
        .then((response) => {
          if (response.status === 200) {
            let userData = response.data;

            // Clean store
            this.$store.state.user = "";

            // Set all data to store
            this.$store.state.user = userData;

            // redirect to profile
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

    // logout handler
    logout() {
      // clear LS

      // !clear Vuex Store --> does not work because vuex is filled by LS ^
      this.$store.state.user = null;
      console.log("store after clearing: ", this.$store.state.user);

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
