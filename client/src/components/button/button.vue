<template>
  <a v-if="isSlider" class="nextButton" @click="nextSlide()">
    {{ message }}
    <span>
      <!-- arrow icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
        <path
          fill="#f07904"
          d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
        />
      </svg>
    </span>
  </a>

  <button v-else-if="isSubmit" class="nextButton test" type="submit">
    {{ message }}
    <span>
      <!-- arrow icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
        <path
          fill="#f07904"
          d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
        />
      </svg>
    </span>
  </button>

  <a v-else-if="slug" :href="slug" class="nextButton" target="_blank">
    {{ message }}
    <span>
      <!-- arrow icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
        <path
          fill="#f07904"
          d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
        />
      </svg>
    </span>
  </a>

  <router-link v-else-if="internLink" :to="internLink" class="nextButton">
    {{ message }}
    <span>
      <!-- arrow icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
        <path
          fill="#f07904"
          d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
        />
      </svg>
    </span>
  </router-link>

  <a v-else class="nextButton" target="_blank">
    {{ message }}
    <span>
      <!-- arrow icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
        <path
          fill="#f07904"
          d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
        />
      </svg>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Volgende",
    },
    isSlider: {
      type: Boolean,
      default: true,
    },
    slug: {
      type: null,
      default: "/",
    },
    isSubmit: {
      type: Boolean,
      default: true,
    },
    internLink: {
      type: null,
      default: "/",
    },
  },

  methods: {
    nextSlide() {
      return this.$store.commit("nextSlide");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/button/button.scss";
</style>
