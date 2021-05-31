<template>
  <div class="checkChips">
    <!-- <label for="gender"> -->
    <h2>Wat is je gender?</h2>

    <ul class="gender">
      <li v-for="(item, index) in choices" :key="index">
        <div>
          <input
            type="radio"
            :id="item.type"
            name="gender"
            :value="item.type"
            @input="updateGender"
          />
          <label :for="item.type" :class="item.color">
            {{ item.type.charAt(0).toUpperCase() }}</label
          >
          <p>{{ item.type }}</p>
        </div>
      </li>
    </ul>
    <!-- </label> -->
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
ul.gender {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80vw;

  li {
    display: inline;
    /* margin: 1rem; */

    &:hover {
      cursor: pointer;
    }

    .checkChips {
      display: flex;
      flex-direction: row;

      & > * {
        margin-right: 1rem;
      }
    }

    div {
      label {
        font-size: 0.875rem;
        font-size: 1.5rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 500;

        padding: 0.625rem 0.75rem;
        padding: 1em;
        // transparent border to prevent weird jumping
        border: solid 2px transparent;
        border-radius: 5px;
        background-color: $lightYellow;
        color: $gray;

        transition: all 0.1s ease;
      }

      input {
        width: 0;
        height: 0;
        display: none;

        &:hover {
          cursor: pointer;
        }

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
