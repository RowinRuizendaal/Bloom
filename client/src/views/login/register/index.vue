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
      <form action="/register" method="POST" enctype="application/x-www-form-urlencoded">
        <fieldset>
          <legend>
            <FirstStep />
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

export default {
  components: {
    // Button,
    FirstStep,
    // SecondStep,
    // ThirdStep,
    // FourthStep,
    // FifthStep,
    // SixthStep,
    // SeventhStep,
    // EightStep,
    // NinthStep,
  },
  methods: {
    nextSlide(index) {
      return this.$store.commit("nextSlide", index);
    },
  },
  data() {
    return {
      maxslides: 7,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/register/register.scss";
</style>
