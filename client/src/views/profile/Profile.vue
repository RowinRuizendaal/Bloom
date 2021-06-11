<template>
  <section class="profile">
    <header>
      <h2>Profiel</h2>
      <router-link to="/profile"
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
            {{ calcAge(data.birthDate) }}
          </p>
          <p>
            <svg
              id="Folder"
              xmlns="http://www.w3.org/2000/svg"
              width="10.001"
              height="10"
              viewBox="0 0 10.001 10"
            >
              <path
                id="Folder_2"
                data-name="Folder 2"
                d="M7.442,1.557H5.971a1.215,1.215,0,0,1-.947-.444L4.539.444A1.184,1.184,0,0,0,3.6,0H2.556C.689,0,0,1.1,0,2.959V4.974a75.348,75.348,0,0,0,10,0V4.388C10.007,2.525,9.336,1.557,7.442,1.557Z"
                transform="translate(0 0)"
                fill="#f07904"
                opacity="0.4"
              />
              <path
                id="Folder-2"
                data-name="Folder"
                d="M7.183,8.451h0c-.051,0-.1,0-.155,0H2.966c-.051,0-.1,0-.153,0A3.009,3.009,0,0,1,.778,7.661a2.244,2.244,0,0,1-.333-.444A2.9,2.9,0,0,1,.054,6.126,4.074,4.074,0,0,1,0,5.465V2.839a6.072,6.072,0,0,1,.036-.657c.005-.038.013-.075.02-.112A.947.947,0,0,0,.08,1.885a2.809,2.809,0,0,1,.244-.759A2.18,2.18,0,0,1,2.547.008h4.89C7.5,0,7.572,0,7.639,0A2.621,2.621,0,0,1,9.252.558a1.39,1.39,0,0,1,.165.164,1.967,1.967,0,0,1,.365.635A4.255,4.255,0,0,1,10,2.839V5.465a4.721,4.721,0,0,1-.049.661,2.981,2.981,0,0,1-.4,1.092,2.223,2.223,0,0,1-.338.444A2.992,2.992,0,0,1,7.183,8.451ZM2.485,4.4a.413.413,0,1,0,0,.825h5.06a.413.413,0,0,0,.413-.4.371.371,0,0,0-.089-.266.394.394,0,0,0-.311-.16Z"
                transform="translate(0 1.55)"
                fill="#f07904"
              />
            </svg>
            {{ data.typeIllness[0] }}
          </p>
        </div>
      </article>

      <article>
        <h3>Biografie</h3>
        <p>{{ data.about }}</p>
      </article>

      <article>
        <h3>Oncospecifiek</h3>
        <div>
          <ul>
            <li>
              <p>Type kanker</p>
            </li>
            <li>
              <p>Fase</p>
            </li>
            <li>
              <p>Ziekenhuis</p>
            </li>
            <li>
              <p>Diagnosejaar</p>
            </li>
          </ul>

          <ul>
            <li>
              <p>{{ data.typeIllness[0] }}</p>
            </li>
            <li>
              <p>lorem</p>
            </li>
            <li>
              <p>lorem</p>
            </li>
            <li>
              <p>lorem</p>
            </li>
          </ul>
        </div>
      </article>

      <article>
        <h3>Profielvragen</h3>
        <div :class="data.profileAvatar">
          <h4>Wat is de vraag?</h4>
          <p>Dit is het antwoord.</p>
        </div>

        <div :class="data.profileAvatar">
          <h4>Wat is de vraag?</h4>
          <p>Dit is het antwoord.</p>
        </div>

        <div :class="data.profileAvatar">
          <h4>Wat is de vraag?</h4>
          <p>Dit is het antwoord.</p>
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

    calcAge(dateString) {
      const birthday = +new Date(dateString);
      return ~~((Date.now() - birthday) / 31557600000) + " jaar";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/profile/profile.scss";
</style>
