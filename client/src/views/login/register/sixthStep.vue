<template>
  <div class="checkChips">
    <h2>Welk type kanker heb je gehad?</h2>

    <ul class="chips">
      <li v-for="(item, index) in choices" :key="index">
        <input
          type="checkbox"
          :id="item"
          name="typeIllness"
          :value="item"
          @input="updateTypeIllness"
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
    updateTypeIllness(e) {
      let checkedArray = this.checked;
      console.log(checkedArray);
      // get all from data state

      // push selected value to array
      // checkedArray.push(e.target.value);

      // Check when checkbox isn't checked --> update state

      // Commit array to the Vuex store
      this.$store.commit("updateStateTypeIllness", checkedArray);
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
.checkChips {
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
      /* padding: 1em; */

      label {
        font-size: 0.73em;
        /* font-family: "Open Sans", sans-serif; */
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

        &:checked + label {
          // selected state

          border: solid 2px $orange;
          background-color: $lightOrange;
        }
      }
    }
  }
}
</style>
