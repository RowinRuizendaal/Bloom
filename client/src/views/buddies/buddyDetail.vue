<template>
  <section class="profile">
    <header>
      <router-link to="/buddies"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="7.246"
          height="11.941"
          viewBox="0 0 7.246 11.941"
          style="display: block; transform: scale(-1, 1)"
        >
          <path
            id="Path_13"
            data-name="Path 13"
            d="M3.431-4.786a.656.656,0,0,0,0-.928l-5.314-5.314a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L.779-5.25-3.432-1.019a.656.656,0,0,0,0,.927l.62.62a.656.656,0,0,0,.928,0Z"
            transform="translate(3.623 11.22)"
            fill="#f07904"
          />
        </svg>
      </router-link>
    </header>

    <main>
      <article v-if="this.data[0]">
        <div class="profile-img" :class="this.data[0].profileAvatar">
          <p>
            {{ createInitials(this.data[0].firstName, this.data[0].surName) }}
          </p>
        </div>
        <div class="profile-headInfo">
          <h2>{{ this.data[0].firstName }} {{ this.data[0].surName }}</h2>
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
            {{ calcAge(this.data[0].birthDate) }}
          </p>
          <p>
            <span
              ><svg
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
            </span>
            {{ this.data[0].typeIllness[0] }}
          </p>
        </div>
        <button @click="createChat" :class="this.data[0].profileAvatar">
          bericht
          <span :class="this.data[0].profileAvatar">
            <!-- arrow icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
              <path
                fill="#f07904"
                d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
              />
            </svg>
          </span>
        </button>
      </article>

      <article v-if="this.data[0]">
        <h3>Biografie</h3>
        <p>{{ this.data[0].about }}</p>
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

          <ul v-if="this.data[0]">
            <li>
              <p>{{ this.data[0].typeIllness[0] }}</p>
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

      <article v-if="this.data[0]">
        <h3>Profielvragen</h3>
        <div :class="this.data[0].profileAvatar">
          <h4>Wat is de vraag?</h4>
          <p>Dit is het antwoord.</p>
        </div>
      </article>
    </main>
    <Nav active="buddies" :tour="false" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
import axios from "axios";

export default {
  name: "BuddyDetail",
  components: {
    Nav,
  },

  mounted() {
    this.getUser();
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    // get data from params. server GET request
    async getUser() {
      let userID = this.$route.params.id;
      let url = `${window.location.origin}/api/user/${userID}`;

      axios
        .get(url)
        .then((response) => {
          let userDataObject = this.data;
          userDataObject.push(response.data);
        })
        .catch((err) => {
          this.errors.push("Er is helaas geen account gevonden");
        });
    },

    // Get the initials of the name
    createInitials(firstName, surName) {
      let fullName = `${firstName} ${surName}`;

      // Logic for getting the name initials
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...fullName.matchAll(rgx)] || [];
      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
      return initials;
    },

    // Calculates the age from birthday to string
    calcAge(dateString) {
      const birthday = +new Date(dateString);
      return ~~((Date.now() - birthday) / 31557600000) + " jaar";
    },

    // create chat and go to chat
    async createChat() {
      let partID = this.$route.params.id;
      let url = `${window.location.origin}/api/createChat/${partID}`;

      // 1. Make post request to make new db object in chats
      axios
        .get(url)
        .then((response) => {
          // 2. returns chatRoomID
          let chatID = response.data;
          this.$router.push(`/chat/${chatID}`);
        })
        .catch((err) => {
          console.log(err);
          // this.errors.push("Er is helaas geen account gevonden");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/profile/profile.scss";
@import "@/components/buddies/buddyDetail.scss";
</style>
