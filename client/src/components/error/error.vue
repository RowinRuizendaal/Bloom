<template>
  <li class="error">
    {{ message }}
  </li>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "error",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "error.scss";
</style>
