<template>
  <section class="register">
    <h2>Registreren</h2>
    <form
      action="/register"
      method="POST"
      enctype="application/x-www-form-urlencoded"
      v-if="!submitted"
    >
      <fieldset>
        <legend>
          <label for="firstName"
            >Voornaam
            <input type="text" id="firstName" name="firstName" v-model="user.firstName" />
          </label>
          <label for="surName"
            >Achternaam
            <input type="text" id="surName" name="surName" v-model="user.surName" />
          </label>

          <label for="emailAddress"
            >E-mailadres
            <input type="text" id="emailAddress" name="emailAddress" v-model="user.emailAddress" />
          </label>

          <label for="password"
            >Wachtwoord
            <input type="password" id="password" name="password" v-model="user.password" />
          </label>

          <label for="birthDate"
            >Geboortedatum
            <input type="date" id="birthDate" name="birthDate" v-model="user.birthDate" />
          </label>

          <label for="town"
            >Woonplaats
            <input type="text" id="town" name="town" v-model="user.town" />
          </label>

          <h3>gender</h3>

          <input type="radio" id="men" value="Man" name="gender" v-model="user.gender" />
          <label for="men">Man</label>

          <input type="radio" id="woman" value="Vrouw" name="gender" v-model="user.gender" />
          <label for="woman">Vrouw</label>

          <input type="radio" id="neutral" value="Vrouw" name="gender" v-model="user.gender" />
          <label for="neutral">Neutraal</label>

          <label for="typeIllness"
            >Type kanker
            <input type="text" id="typeIllness" name="typeIllness" v-model="user.typeIllness" />
          </label>

          <label for="profileAvatar"
            >Profiel avatar (radio btns met created avatars) (render in template)
            <input
              type="text"
              id="profileAvatar"
              name="profileAvatar"
              v-model="user.profileAvatar"
            />
          </label>

          <label for="about"
            >Vertel iets over jezelf
            <input type="textarea" id="about" name="about" v-model="user.about" />
          </label>

          <Textarea placeholderText="Vul hier iets over jezelf in" />

          <button @click="saveUser">Aanmaken</button>
        </legend>
      </fieldset>
    </form>
  </section>
</template>

<script>
import DataService from "../../services/DataService.js";
import Textarea from "../../components/textarea/textarea";

export default {
  components: {
    Textarea,
  },

  name: "Register",
  data() {
    return {
      user: {
        // remove?
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveUser() {
      let data = {
        // remove user, only this.firstName
        firstName: this.user.firstName,
        surName: this.user.surName,
        emailAddress: this.user.emailAddress,
        password: this.user.password,
        birthDate: this.user.birthDate,
        town: this.user.town,
        gender: this.user.gender,
        typeIllness: this.user.typeIllness,
        profileAvatar: this.user.profileAvatar,
        about: this.user.about,
      };

      DataService.createUser(data)
        .then((response) => {
          console.log(response);
          // this.tutorial.id = response.data.id;
          // console.log(response.data);
          // this.submitted = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // newTutorial() {
    //   this.submitted = false;
    //   this.tutorial = {};
    //   console.log(this.tutorial);
    // },
  },
};
</script>

<style lang="scss">
/* .register {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/svg/achtergrond.svg");
  background-position: center;
  background-size: cover 100% 100%;
  background-repeat: no-repeat;
  @include q-lg-min {
    background-size: cover;
  }

  form {

    label {
      display: block;
      margin: 0.3em 0em;
    }
  }

  h1 {
    color: $orange;
    font-size: 48px;
    margin-bottom: 5rem;
  }

  // import button component
  button {
    color: red;
  }
} */
</style>
