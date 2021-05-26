<template>
  <div class="checkChips">
    <!-- <label for="gender"> -->
    <h2>Wat is je gender?</h2>

    <ul>
      <li>
        <div>
          <input type="radio" id="men" value="Man" name="gender" v-model="gender" />
          <label for="men">M</label>
          <p>man</p>
        </div>
      </li>

      <li>
        <div>
          <input type="radio" id="woman" value="Vrouw" name="gender" v-model="gender" />
          <label for="woman">V</label>
          <p>Vrouw</p>
        </div>
      </li>

      <li>
        <div>
          <input type="radio" id="neutral" value="Vrouw" name="gender" v-model="gender" />
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

export default {
  data() {
    return {
      gender: "",
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
