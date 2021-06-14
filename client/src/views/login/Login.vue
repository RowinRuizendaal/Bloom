<template>
  <section class="login">
    <header>
      <h1>bloom</h1>
    </header>

    <main>
      <h2>Welkom terug</h2>
      <form v-on:submit="onSubmit" method="POST" enctype="application/x-www-form-urlencoded">
        <fieldset>
          <legend>
            <label for="emailAddress">
              <input
                type="email"
                class="loginInput"
                placeholder="E-mailadres"
                id="emailAddress"
                v-model="emailAddress"
                name="emailAddress"
                required
              />
            </label>

            <label for="password">
              <input
                type="password"
                class="loginInput"
                placeholder="Wachtwoord"
                id="password"
                v-model="password"
                name="password"
                required
              />
            </label>
            <router-link to="/login" active-class="forgot-password"
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
      <ul v-if="errors.length" class="error-list">
        <Error :message="errors[0]" />
      </ul>
    </main>
  </section>
</template>

<script>
import Button from "../../components/button/button.vue";
import Error from "../../components/error/error.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Button,
    Error,
  },
  data() {
    return {
      emailAddress: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async login(e) {
      let data = {
        emailAddress: this.emailAddress.toLowerCase(),
        password: this.password,
      };

      axios
        .post("/api/login", data, { headers: { "Content-type": "application/json" } })
        .then((response) => {
          if (response.status === 200) {
            this.$store.commit("updateUser", response.data);
            this.$store.state.loggedIn = true;
            return this.$router.push("/themes");
          }
        })
        .catch((err) => {
          if (this.errors.length >= 1) {
            return;
          }
          this.errors.push("Er is helaas geen account gevonden");
        });
    },
    onSubmit(e) {
      e.preventDefault();
      this.login();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/login/login.scss";
</style>
