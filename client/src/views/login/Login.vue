<template>
  <section class="login">
    <header>
      <h1>bloom</h1>
    </header>

    <main>
      <h2>Welkom terug</h2>
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
    </main>
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

<style lang="scss" scoped>
@import "@/components/login/login.scss";
</style>
