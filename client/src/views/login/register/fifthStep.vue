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
.five {
  ul.gender {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80vw;

    li {
      width: 5em;
      height: 5em;

      &:hover {
        cursor: pointer;
      }

      label {
        border: solid 2px transparent;
        border-radius: 5px;
        background-color: #fee89e;
        display: block;
        width: inherit;
        height: inherit;
        color: #726d61;
        transition: all 0.1s ease;

        font-size: 2.5rem;
        font-weight: 700;
        padding: 0.625rem 0.75rem;
        text-align: center;
        font-family: $font-family-primary;
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

      p {
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
</style>
