<template>
  <section class="login">
    <h1>Bloom</h1>
    <h2>Welkom</h2>
    <form v-if="!submitted" action="/" method="POST" enctype="application/x-www-form-urlencoded">
      <fieldset>
        <legend>
          <label for="emailAddress">
            <input
              type="text"
              placeholder="E-mailadres"
              id="emailAddress"
              v-model="user.emailAddress"
              name="emailAddress"
            />
          </label>

          <label for="password">
            <input
              type="password"
              placeholder="Wachtwoord"
              id="password"
              v-model="user.password"
              name="password"
            />
          </label>
          <button @click="login">Inloggen</button>
          <router-link to="/forgot-password" active-class="forgot-password"
            >Wachtwoord vergeten</router-link
          >
          <router-link to="/register" active-class="register">Ik heb nog geen account</router-link>
        </legend>
      </fieldset>
    </form>
  </section>
</template>

<script>
import DataService from "../../services/DataService.js";

export default {
  name: "Login",
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
    login() {
      let data = {
        emailAddress: this.user.emailAddress,
        password: this.user.password,
      };

      DataService.loginUser(data)
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
    // },
  },
};
</script>

<style lang="scss">
.login {
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

  h1 {
    color: $orange;
    font-size: 48px;
    margin-bottom: 5rem;
  }
  form {
    width: 90vw;
    height: 40vh;
    display: block;

    fieldset,
    legend {
      width: inherit;
      height: inherit;
      border: none;
    }

    label {
      display: block;
      margin: 1em auto;

      text-align: center;
    }

    input {
      width: 20em;
      padding: 0.6em 1em;
      /* font-size: 10px; */
      border-radius: 20px;
      border: none;
      border: 1px solid $gray;
    }

    a {
      font-weight: bold;
      color: rgb(114, 109, 97);
    }
  }
}
</style>
