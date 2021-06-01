<template>
  <div class="stepSix">
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
.stepSix {
  ul.chips {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    li {
      display: inline-block;
      margin: 0.7em;
      flex-shrink: 1;

      label {
        font-size: 0.73em;
        font-family: $font-family-primary;
        font-weight: 600;

        padding: 0.7em;

        // transparent border to prevent weird jumping
        border: solid 2px transparent;
        border-radius: 25rem;
        background-color: $lightYellow;
        color: $gray;

        transition: all 0.1s ease;
      }

      input {
        width: 0;
        height: 0;
        display: none;

        // selected state
        &:checked + label {
          border: solid 2px $orange;
          background-color: $lightOrange;
        }
      }
    }
  }
}
</style>
