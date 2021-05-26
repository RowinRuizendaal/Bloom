<template>
  <main>
    <header>
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
      <form
        enctype="application/x-www-form-urlencoded"
        v-on:submit.prevent="onSubmit"
        method="POST"
      >
        <fieldset>
          <legend>
            <div v-if="state === 1">
              <FirstStep />
            </div>

            <div v-else-if="state === 2">
              <SecondStep />
            </div>

            <div v-else-if="state === 3">
              <ThirdStep />
            </div>

            <div v-else-if="state === 4">
              <FourthStep />
            </div>

            <div v-else-if="state === 5">
              <FifthStep />
            </div>

            <div v-else-if="state === 6">
              <SixthStep />
            </div>

            <div v-else-if="state === 7">
              <SeventhStep />
            </div>

            <div v-else-if="state === 8">
              <EightStep />
            </div>

            <div v-else-if="state === 9">
              <NinthStep />
            </div>

            <div v-else-if="state === 10">
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
import NinthStep from "./ninthStep.vue";
import Ready from "./readyStep.vue";

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
    NinthStep,
    Ready,
  },
  methods: {
    //store in Vuex and return the whole data store and post to server
    // getData(index)

    setState(sort) {
      if (sort === "next") {
        return (this.state += 1);
      } else if (sort === "prev") {
        return (this.state -= 1);
      }
      return;
    },
    // if this.state == 10 {
    // change the onsubmit to real post submit
    // }

    onSubmit(e) {
      e.preventDefault();
    },
  },
  data() {
    return {
      maxslides: 9,
      state: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/register/register.scss";
</style>
