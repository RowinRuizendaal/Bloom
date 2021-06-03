<template>
  <div>
    <h2>Kies een profiel pictogram</h2>
    <p>
      Je kunt kiezen voor je
      <span class="span">memoji</span>
      of initialen.
    </p>

    <div class="msg">
      <p>
        Memoji is een vorm van het weergeven van een karakter, wat erg persoonlijk is, maar niet
        privacygevoelig als bij een foto.
      </p>
    </div>

    <ul class="six">
      <li v-for="(item, index) in avatars" :key="index">
        <input
          type="radio"
          :id="item.color"
          name="profileAvatar"
          :value="item.color"
          @input="updateProfileAvatar"
        />
        <label :for="item.color" :class="item.color">
          <p>{{ item.initials }}</p>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      profileAvatar: (state) => state.user.profileAvatar,
    }),
  },
  methods: {
    updateProfileAvatar(e) {
      this.$store.commit("updateStateProfileAvatar", e.target.value);
    },
    createInitials(fullName) {
      // Logic for getting the name initials - source: https://stackoverflow.com/a/33076482
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...fullName.matchAll(rgx)] || [];
      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
      return initials;
    },
  },
  data() {
    let firstName = this.$store.state.user.firstName;
    let surName = this.$store.state.user.surName;
    let fullName = `${firstName} ${surName}`;
    let initials = this.createInitials(fullName);

    return {
      avatars: [
        { initials: initials, color: "yellow" },
        { initials: initials, color: "orange" },
        { initials: initials, color: "pink" },
        { initials: initials, color: "green" },
        { initials: initials, color: "blue" },
        { initials: initials, color: "purple" },
        { initials: initials, color: "gray" },
        { initials: initials, color: "pinkTwo" },
        { initials: initials, color: "yellowTwo" },
      ],
    };
  },
};
</script>

<style lang="scss">
.six {
  display: grid;
  grid-template-columns: 6em 6em 6em;
  grid-template-rows: 6em 6em 6em;
  list-style: none;
  justify-items: center;

  li {
    width: 5em;
    height: 5em;
    /* border: 1px solid red; */

    input {
      display: none;
      width: 9px;

      &:checked {
        ~ {
          label {
            border: 2px solid $lighterOrange;
          }
        }
      }
    }

    label {
      width: 100%;
      height: 100%;
      background: red;
      display: inherit;
      /* font-size: 0.875rem;
        font-size: 1.5rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 500; */
      font-size: 1.5rem;
      padding: 0.625rem 0.75rem;
      /* padding: 1em; */

      box-shadow: 0 3px 8px $gray;
      border: solid 2px transparent; // transparent border to prevent weird jumping
      border-radius: 5px;
      color: $gray;

      transition: all 0.1s ease;

      p {
        font-weight: 700;
        color: #726d61;
        font-size: 2rem;
      }
    }

    label.yellow {
      background: rgb(254, 232, 158);
    }
    label.orange {
      background: rgb(254, 215, 160);
    }
    label.pink {
      background: rgb(254, 180, 176);
    }
    label.green {
      background: rgb(186, 240, 195);
    }
    label.blue {
      background: rgb(194, 234, 251);
    }
    label.purple {
      background: rgb(218, 208, 251);
    }
    label.gray {
      background: rgb(214, 214, 214);
    }
    label.pinkTwo {
      background: rgb(254, 197, 212);
    }
    label.yellowTwo {
      background: rgb(254, 232, 158);
    }
  }
}

.span {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

div.msg {
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: 0.5em;
  min-width: 330px;
  padding: 0.51em;
  text-shadow: none;
  border-radius: 5px;
  background-color: #797979;
  font-size: 0.7rem;

  p {
    color: white !important;
  }
}
</style>
