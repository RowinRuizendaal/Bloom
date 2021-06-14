<template>
  <div class="six">
    <h2>Welk type kanker heb je gehad?</h2>

    <ul class="chips">
      <li v-for="(item, index) in choices" :key="index">
        <input
          type="checkbox"
          :id="item"
          name="typeIllness"
          :value="item"
          @change="updateTypeIllness"
          v-model="checked"
        />
        <label :for="item">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      typeIllness: (state) => state.user.typeIllness,
    }),
  },
  methods: {
    updateTypeIllness() {
      // Commit array to the Vuex store
      this.$store.commit("updateStateTypeIllness", this.checked);
    },
  },
  data() {
    return {
      checked: [],
      choices: [
        "Hoofd-halskanker",
        "Spijsverteringsorganen",
        "Huidkanker",
        "Luchtwegen",
        "Borstkanker",
        "Urinewegen",
        "Bot, kraakbeen en weke delen",
        "Vrouwelijke geslachtsorganen",
        "Oogkanker",
        "Hematologische maligniteiten",
        "Endocriene klieren",
        "Mannelijke geslachtsorganen",
        "Centraal zenuwstelsel",
        "Overig",
        "Zeg ik liever niet",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/components/register/register.scss";
</style>
