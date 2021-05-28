<template>
  <div class="checkChips">
    <!-- <label for="gender"> -->
    <h2>Wat is je gender?</h2>

    <ul class="gender">
      <li>
        <div>
          <input type="radio" id="men" name="gender" :value="Man" @input="updateGender" />
          <label for="men">M</label>
          <p>man</p>
        </div>
      </li>

      <li>
        <div>
          <input type="radio" id="woman" name="gender" :value="Vrouw" @input="updateGender" />
          <label for="woman">V</label>
          <p>Vrouw</p>
        </div>
      </li>

      <li>
        <div>
          <input type="radio" id="neutral" name="gender" :value="gender" @input="updateGender" />
          <label for="neutral">X</label>
          <p>Neutraal</p>
        </div>
      </li>
    </ul>
    <!-- </label> -->
  </div>
</template>

<script>
// import DataService from "../../services/DataService.js";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      gender: (state) => state.user.gender,
    }),
  },
  methods: {
    updateGender(e) {
      console.log(e.target);
      this.$store.commit("updateStateGender", e.target.value);
    },
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
