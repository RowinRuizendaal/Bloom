<template>
  <section class="login">
    <header>
      <h1>bloom</h1>
    </header>
    <article>
      <h2>Welkom</h2>
      <form
        v-on:submit="login"
        action="/api/login"
        method="POST"
        enctype="application/x-www-form-urlencoded"
      >
        <fieldset>
          <legend>
            <label for="emailAddress">
              <Input
                type="text"
                placeholder="E-mailadres"
                id="emailAddress"
                v-model="user.emailAddress"
                name="emailAddress"
              />
            </label>

            <label for="password">
              <Input
                type="password"
                placeholder="Wachtwoord"
                id="password"
                v-model="user.password"
                name="password"
              />
            </label>
            <router-link to="/forgot-password" active-class="forgot-password"
              >Wachtwoord vergeten</router-link
            >

            <div>
              <router-link to="/register" active-class="register"
                >Ik heb nog geen account</router-link
              >

              <Button message="inloggen" v-bind:isSlider="false" />
            </div>
          </legend>
        </fieldset>
      </form>
    </article>
  </section>
</template>

<script>
import DataService from "../../services/DataService.js";
import Button from "../../components/button/button.vue";
import Input from "../../components/input/input.vue";

export default {
  name: "Login",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      user: {
        emailAddress: "",
        password: "",
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
          console.log("Logged In", response.data);
          // router.push("/themes");

          // this.tutorial.id = response.data.id;
          // console.log(response.data);
          // this.submitted = true;
        })
        .catch((err) => {
          console.log("Cannot login - ERROR: ", err);
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
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  background-image: url("../../assets/svg/signup-background.svg");
  background-position: center;
  background-size: cover 100% 100%;
  background-repeat: no-repeat;
  @include q-lg-min {
    background-size: cover;
  }

  h1 {
    color: $orange;
    font-size: 2rem;
    margin-bottom: 5rem;
    text-align: center;
  }

  article {
    width: 86%;
    background: rgba(129, 107, 107, 0.327);
    border: 1px solid red;
    margin: 0 auto;
    position: relative;

    form {
      /* width: 90vw; */
      height: 40vh;
      display: block;
      text-align: center;

      fieldset,
      legend {
        width: inherit;
        height: inherit;
        border: none;
      }

      label {
        display: block;
        margin: 1em 0em;
        text-align: left;
        width: 100%;
      }

      div {
        position: absolute;
        bottom: 0;
        border: 1px solid blue;

        a {
          font-weight: bold;
          color: rgb(114, 109, 97);
          font-size: 0.7rem;
          &:nth-of-type(1) {
            left: 0;
            background-color: red;
          }
        }
      }

      a {
        font-weight: bold;
        color: rgb(114, 109, 97);
        font-size: 0.7rem;
      }

      button {
        font-weight: bold;
        font-family: Silka, Helvetica, sans-serif;
        /* position: absolute;
        bottom: 0;
        right: 0; */
      }
    }
  }
}
</style>
