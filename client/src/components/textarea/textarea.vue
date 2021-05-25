<template>
  <input type="textarea" :placeholder="placeholderText" />
</template>

<script>
export default {
  props: {
    placeholderText: {
      type: String,
      default: "Type something",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./textarea.scss";
</style>
