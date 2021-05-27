<template>
  <main>
    <header>
      <!-- <div>{{ myValue }}</div> -->
      <nav>
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

    <section class="register">
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
            <button @click="setState('prev')">Vorige</button>
            <button @click="setState('next')">Volgende</button>
          </legend>
        </fieldset>
      </form>
      <!-- <Button message="terug" v-bind:isSlider="true" />
      <Button message="volgende" v-bind:isSlider="true" /> -->
    </section>

    <!-- <article
      v-for="(item, index) in steps"
      :key="index"
      class="artikel"
      :class="{ 'card-slider-inactive': index !== $store.state.activeIndex }"
    >
      <div class="container">
        <div class="text">
          <h2>{{ item.heading }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </article> -->
    <!-- <div class="buttons">
    
      <div class="circles">
        <span
          v-for="index in maxslides"
          :key="index"
          :class="{ 'fill-active': index - 1 === $store.state.activeIndex }"
          @click="nextSlide(index)"
        ></span>
      </div>
    </div> -->
  </main>
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
