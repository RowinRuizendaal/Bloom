<template>
  <section class="login">
    <header>
      <h1>bloom</h1>
    </header>

    <main>
      <h2>Welkom terug</h2>
      <ul v-if="errors.length">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
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
import Button from "../../components/button/button.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Button,
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
            return this.$router.push("/profile");
          }
        })
        .catch((err) => {
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
