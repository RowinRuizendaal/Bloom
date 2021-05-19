<template>
  <section class="register">
    <h2>Register</h2>
    <form
      action="/register"
      method="POST"
      enctype="application/x-www-form-urlencoded"
      v-on:submit="onSubmit"
    >
      <fieldset>
        <legend>
          <label for="firstName"
            >Voornaam
            <input type="text" id="firstName" name="firstName" />
          </label>
          <label for="surName"
            >Achternaam
            <input type="text" id="surName" name="surName" />
          </label>

          <label for="emailAddress"
            >E-mailadres
            <input type="text" id="emailAddress" name="emailAddress" />
          </label>

          <label for="password"
            >Wachtwoord
            <input type="password" id="password" name="password" />
          </label>

          <label for="birthDate"
            >Geboortedatum
            <input type="date" id="birthDate" name="birthDate" />
          </label>

          <label for="town"
            >Woonplaats
            <input type="text" id="town" name="town" />
          </label>

          <h3>gender</h3>

          <input type="radio" id="men" value="Man" name="gender" />
          <label for="men">Man</label>

          <input type="radio" id="woman" value="Vrouw" name="gender" />
          <label for="woman">Vrouw</label>

          <input type="radio" id="neutral" value="Vrouw" name="gender" />
          <label for="neutral">Neutraal</label>

          <label for="typeIllness"
            >Type kanker
            <input type="text" id="typeIllness" name="typeIllness" />
          </label>

          <label for="profileAvatar"
            >Profiel avatar (radio btns met created avatars) (render in template)
            <input type="text" id="profileAvatar" name="profileAvatar" />
          </label>

          <label for="about"
            >Vertel iets over jezelf
            <input type="textarea" id="about" name="about" />
          </label>

          <button type="Submit">Aanmaken</button>
        </legend>
      </fieldset>
    </form>
  </section>
</template>

<script>
export default {
  name: "Register",
  methods: {
    submit: function onSubmit() {
      e.preventDefault();
      console.log("submitted");
      // 1. send to server
      // 2. Search user
      // 3. Give message if no user found
    },
  },
};

// var store = { vital: "" };
// vm = new Vue({
//   el: "#vueRoot",
//   data: { store: store },
//   methods: {
//     submit: function onSubmit() {
//       e.preventDefault();
//       console.log("submitted");
//       // 1. send to server
//       // 2. Search user
//       // 3. Give message if no user found
//     },
//   },
// });
</script>

<style lang="scss">
.register {
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
    width: 30em;

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

  /* .start {
    color: $orange;
    font-size: 21px;
    font-weight: bold;
  } */
}
</style>
