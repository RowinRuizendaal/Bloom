<template>
  <section class="register">
    <header>
      <nav>
        <button v-if="stepState !== 1 && stepState !== 9" @click="setState('prev')"></button>
        <h1>bloom</h1>
      </nav>
    </header>

    <main>
      <form enctype="application/x-www-form-urlencoded" @submit.prevent="onSubmit" method="POST">
        <fieldset>
          <legend>
            <div v-if="stepState === 1">
              <FirstStep />
            </div>

            <div v-else-if="stepState === 2">
              <SecondStep />
            </div>

            <div v-else-if="stepState === 3">
              <ThirdStep />
            </div>

            <div v-else-if="stepState === 4">
              <FourthStep />
            </div>

            <div v-else-if="stepState === 5">
              <FifthStep />
            </div>

            <div v-else-if="stepState === 6">
              <SixthStep />
            </div>

            <div v-else-if="stepState === 7">
              <SeventhStep />
            </div>

            <div v-else-if="stepState === 8">
              <EightStep />
            </div>

            <div v-else-if="stepState === 9">
              <Ready />
            </div>
            <div class="footer">
              <router-link v-if="stepState === 1" to="/login" class="login"
                >Ik heb al een account</router-link
              >
              <div class="buttons" v-if="stepState !== 1 && stepState !== 9">
                <Button
                  v-if="stepState !== 1 && stepState !== 9"
                  @click.native="setState('next')"
                  message="Volgende"
                >
                  ></Button
                >
              </div>

              <Button
                v-else
                @click.native="setState('next')"
                message="Starten"
                :isSubmit="true"
              ></Button>
            </div>
          </legend>
        </fieldset>
      </form>
      <div v-if="errors.length" class="error">
        <ul class="error-list" v-for="(item, index) in errors" :key="index">
          <Error :message="errors[index]" />
        </ul>
      </div>
    </main>
  </section>
</template>

<script>
import Button from "@/components/button/button";
import FirstStep from "./firstStep.vue";
import SecondStep from "./secondStep.vue";
import ThirdStep from "./thirdStep.vue";
import FourthStep from "./fourthStep.vue";
import FifthStep from "./fifthStep.vue";
import SixthStep from "./sixthStep.vue";
import SeventhStep from "./seventhStep.vue";
import EightStep from "./eightStep.vue";
import Ready from "./readyStep.vue";
import Error from "../../../components/error/error.vue";

import axios from "axios";

export default {
  components: {
    Button,
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
    SixthStep,
    SeventhStep,
    EightStep,
    Ready,
    Error,
  },

  methods: {
    setState(sort) {
      const validate = [
        {
          id: 1,
          Emailadres: this.$store.state.user.emailAddress,
          Wachtwoord: this.$store.state.user.password,
        },
        {
          id: 2,
          Voornaam: this.$store.state.user.firstName,
          Achternaam: this.$store.state.user.surName,
        },
      ];

      validate.filter((element) => {
        if (element.id === this.stepState) {
          Object.keys(element).filter((k) => {
            if (element[k] === "" || element[k] === undefined || element[k] === null) {
              this.errors.push(`${[k]} is niet opgegeven`);
              return (this.validate = false);
            } else {
              this.errors = [];
              this.validate = true;
            }
          });
        }
      });
      if (sort === "next" && this.validate) {
        return (this.stepState += 1);
      } else if (sort === "prev" && this.validate) {
        return (this.stepState -= 1);
      }

      return;
    },

    onSubmit() {
      if (this.stepState === 9) {
        // Post submit to server
        axios.post("/api/register", this.$store.state.user, {
          headers: { "Content-type": "application/json" },
        });
      }
      // need to check if status code is 200 here
      // set registered true if
      this.$store.state.loggedIn = true;
      this.registered = true;
    },
  },
  data() {
    return {
      maxslides: 9,
      stepState: 1,
      registered: false,
      validate: false,
      errors: [],
    };
  },
  updated() {
    if (this.stepState === 9) {
      this.onSubmit();
    }
    // Redirect to /themes
    if (this.stepState === 10 && this.registered) {
      this.$router.push("/themes");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/register/register.scss";
</style>
