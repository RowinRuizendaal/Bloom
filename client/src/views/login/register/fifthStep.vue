<template>
  <div class="five">
    <h2>Wat is je gender?</h2>

    <ul class="gender">
      <li v-for="(item, index) in choices" :key="index">
        <input
          type="radio"
          :id="item.type"
          name="gender"
          :value="item.type"
          @input="updateGender"
        />
        <label :for="item.type" :class="item.color"> {{ item.type.charAt(0).toUpperCase() }}</label>
        <p>{{ item.type }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      gender: (state) => state.user.gender,
    }),
  },
  methods: {
    updateGender(e) {
      this.$store.commit("updateStateGender", e.target.value);
    },
  },
  data() {
    return {
      choices: [{ type: "Man" }, { type: "Vrouw" }, { type: "Neutraal" }],
    };
  },
};
</script>

<style lang="scss">
@import "@/components/register/register.scss";
</style>
