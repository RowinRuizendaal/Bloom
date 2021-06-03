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
@import "@/components/register/register.scss";
</style>
