<template>
  <section class="register">
    <header>
      <!-- <div>{{ myValue }}</div> -->
      <nav>
        <button @click="setState('prev')"></button>
        <li class="logo"><h2>bloom</h2></li>
        <li>
          <!-- <router-link
            to="/register-index"
            class="skip"
            v-bind:isSlider="true"
            @click="nextSlide(index)"
          >
            &larr; naar vorige question
          </router-link> -->
        </li>
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
              <button @click="setState('next')">Volgende</button>
            </div>
          </legend>
        </fieldset>
      </form>
    </main>
    <!-- <Button message="terug" v-bind:isSlider="true" /> -->
    <!-- <Button message="starten" v-bind:isSlider="false" /> -->
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

import { mapState } from "vuex";
import axios from "axios";

export default {
  components: {
    // Button,
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
    SixthStep,
    SeventhStep,
    EightStep,
    Ready,
  },
  // computed: {
  //   myValue() {
  //     return this.$store.state.user;
  //     // return this.$store.state.myValue;
  //   },
  // },
  methods: {
    setState(sort) {
      if (sort === "next") {
        return (this.stepState += 1);
      } else if (sort === "prev") {
        return (this.stepState -= 1);
      }
      return;
    },

    onSubmit(e) {
      e.preventDefault();

      if (this.stepState === 9) {
        // get data from vuex store
        console.log("user data, ", this.$store.state.user);

        // POst submit to server
        axios.post("/api/register", this.$store.state.user, {
          headers: { "Content-type": "application/json" },
        });
      }

      // redirect themes
      if (this.stepState === 10) {
        this.$router.push("/themes");
      }

      if (this.stepState == 1 || this.stepState == 9) {
        // button text = "starten"
        // vorige button remove
      }
    },
  },
  data() {
    return {
      maxslides: 9,
      stepState: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/register/register.scss";
</style>
