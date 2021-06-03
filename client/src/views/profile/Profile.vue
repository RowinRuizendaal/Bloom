<template>
  <section class="profile">
    <header>
      <h2>Profiel</h2>
      <router-link to="/profile-edit"
        ><svg
          id="Setting"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
        >
          <path
            id="Path"
            d="M2.9,5.65A2.853,2.853,0,0,1,0,2.83,2.861,2.861,0,0,1,2.9,0a2.825,2.825,0,1,1,0,5.65"
            transform="translate(6.61 7.18)"
            fill="#f07904"
          />
          <path
            id="Path-2"
            data-name="Path"
            d="M18.73,12.37a2.3,2.3,0,0,0-.828-.79,1.547,1.547,0,0,1-.634-.64,1.822,1.822,0,0,1,.654-2.5,2.027,2.027,0,0,0,.756-2.83l-.685-1.18a2.112,2.112,0,0,0-2.872-.76,1.973,1.973,0,0,1-2.575-.69,1.546,1.546,0,0,1-.235-.88,1.778,1.778,0,0,0-.276-1.06A2.152,2.152,0,0,0,10.217,0H8.776A2.195,2.195,0,0,0,6.967,1.04,1.785,1.785,0,0,0,6.681,2.1a1.546,1.546,0,0,1-.235.88,1.963,1.963,0,0,1-2.565.69A2.124,2.124,0,0,0,1,4.43L.314,5.61a2.044,2.044,0,0,0,.756,2.83,1.834,1.834,0,0,1,.664,2.5,1.634,1.634,0,0,1-.644.64,2.118,2.118,0,0,0-.818.79,2,2,0,0,0,.02,2.05L1,15.62a2.134,2.134,0,0,0,1.819,1.04,2.161,2.161,0,0,0,1.083-.3,1.586,1.586,0,0,1,.9-.23,1.892,1.892,0,0,1,1.88,1.82A2.07,2.07,0,0,0,8.807,20H10.2a2.068,2.068,0,0,0,2.115-2.05A1.908,1.908,0,0,1,14.2,16.13a1.63,1.63,0,0,1,.9.23,2.1,2.1,0,0,0,2.892-.74l.715-1.2a2.018,2.018,0,0,0,.02-2.05"
            fill="#f07904"
            opacity="0.4"
          />
        </svg>
      </router-link>
    </header>

    <main>
      <article>
        <div class="profile-img" :class="data.profileAvatar">
          <p>
            {{ createInitials(data.firstName, data.surName) }}
          </p>
        </div>
        <div class="profile-headInfo">
          <h2>{{ data.firstName }} {{ data.surName }}</h2>
          <p>
            <span
              ><svg
                id="Calendar"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="10"
                viewBox="0 0 9 10"
              >
                <path
                  id="Fill_1"
                  data-name="Fill 1"
                  d="M2.564,6.372A2.388,2.388,0,0,1,0,3.807V0H9V3.837A2.366,2.366,0,0,1,6.431,6.372Z"
                  transform="translate(0 3.629)"
                  fill="#f07904"
                />
                <path
                  id="Fill_4"
                  data-name="Fill 4"
                  d="M0,2.884A7.928,7.928,0,0,1,.078,1.82,2.3,2.3,0,0,1,2.271,0H6.726A2.32,2.32,0,0,1,8.919,1.82,7.946,7.946,0,0,1,9,2.884Z"
                  transform="translate(0.002 0.745)"
                  fill="#f07904"
                  opacity="0.4"
                />
                <path
                  id="Fill_6"
                  data-name="Fill 6"
                  d="M.38,2.3a.373.373,0,0,0,.38-.385V.386A.374.374,0,0,0,.38,0,.374.374,0,0,0,0,.386V1.91A.373.373,0,0,0,.38,2.3"
                  transform="translate(2.272 0)"
                  fill="#f07904"
                />
                <path
                  id="Fill_9"
                  data-name="Fill 9"
                  d="M.38,2.3a.376.376,0,0,0,.38-.385V.386A.377.377,0,0,0,.38,0,.374.374,0,0,0,0,.386V1.91A.373.373,0,0,0,.38,2.3"
                  transform="translate(5.967 0)"
                  fill="#f07904"
                /></svg
            ></span>
            {{ data.birthDate }}
          </p>
          <p><span>icon</span> {{ data.typeIllness[0] }}</p>
        </div>
      </article>

      <article>
        <h3>Biografie</h3>
        <p>{{ data.about }}</p>
      </article>

      <article>
        <h3>Oncospecifiek - data pas invullen wnr user op profiel komt</h3>
        <ul>
          <li>
            <p>Type kanker</p>
            <p>{{ data.typeIllness[0] }}</p>
          </li>
          <li>
            <p>Fase</p>
            <p></p>
          </li>
          <li>
            <p>Ziekenhuis</p>
            <p></p>
          </li>
          <li>
            <p>Diagnosejaar</p>
            <p></p>
          </li>
        </ul>
      </article>

      <article>
        <h3>Profielvragen</h3>
        <div :class="data.profileAvatar">
          <h4>vraag</h4>
          <p>antwoord</p>
        </div>
      </article>
    </main>
    <Nav active="profile" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";

export default {
  name: "Profile",
  components: {
    Nav,
  },
  data() {
    let dataUser = this.$store.state.user;

    return {
      data: dataUser,
    };
  },

  methods: {
    createInitials(firstName, surName) {
      let fullName = `${firstName} ${surName}`;
      // Logic for getting the name initials
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...fullName.matchAll(rgx)] || [];
      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
      return initials;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/profile/profile.scss";
</style>
