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
              <EightStep />
            </div>

            <div v-else-if="stepState === 2">
              <FirstStep />
            </div>

            <div v-else-if="stepState === 3">
              <SecondStep />
            </div>

            <div v-else-if="stepState === 4">
              <ThirdStep />
            </div>

            <div v-else-if="stepState === 5">
              <FourthStep />
            </div>

            <div v-else-if="stepState === 6">
              <FifthStep />
            </div>

            <div v-else-if="stepState === 7">
              <SixthStep />
            </div>

            <div v-else-if="stepState === 8">
              <SeventhStep />
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
    //store in Vuex and return the whole data store and post to server
    // getData(index)
    // Bullet points state --> change background

    setState(sort) {
      if (sort === "next") {
        return (this.stepState += 1);
      } else if (sort === "prev") {
        return (this.stepState -= 1);
      }
      // if (this.stepState == 9) {
      // }
      return;
    },
    // if this.stepState == 9 {
    // change the onsubmit to real post submit
    // change button text = "starten"
    // vorige button remove
    // }

    onSubmit(e) {
      e.preventDefault();

      if (this.stepState === 9) {
        // get data from vuex store
        console.log("user data: ", this.$store.state.user);
      }

      if (this.stepState == 1) {
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
