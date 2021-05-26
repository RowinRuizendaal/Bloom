<template>
  <!-- <label for="typeIllness"
    ><h4>Wat is je geboortedatum?</h4>
    <p>Dan weten...</p>

    <input type="date" id="typeIllness" name="typeIllness" v-model="typeIllness" />
  </label> -->

  <div class="checkChips">
    <h2>Welk type kanker heb je gehad?</h2>

    <ul>
      <li v-for="(item, index) in choices" :key="index">
        <div class="checkChip">
          <input
            type="checkbox"
            :id="item"
            name="typeIllness"
            :value="item"
            @input="updateTypeIllness"
          />
          <label :for="item">{{ item }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import DataService from "../../services/DataService.js";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      typeIllness: (state) => state.user.typeIllness,
    }),
  },
  methods: {
    updateTypeIllness(e) {
      this.$store.commit("updateStateTypeIllness", e.target.value);
    },
  },
  data() {
    return {
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
        "Mannelijke geslachtsorganen",
        "Endocriene klieren",
        "Centraal zenuwstelsel",
        "Overig",
        "Zeg ik liever niet",
      ],
    };
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80vw;

  li {
    display: inline;
    margin: 1rem;

    .checkChips {
      display: flex;
      flex-direction: row;

      & > * {
        margin-right: 1rem;
      }
    }

    .checkChip {
      label {
        font-size: 0.875rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 500;

        padding: 0.625rem 0.75rem;

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
