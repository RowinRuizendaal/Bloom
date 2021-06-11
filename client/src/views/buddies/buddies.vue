<template>
  <section class="buddies">
    <header>
      <h2>Buddy zoeken</h2>
      <svg
        id="Filter"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="25.926"
        viewBox="0 0 29.167 25.926"
      >
        <path
          id="Fill_1"
          data-name="Fill 1"
          d="M11.788,0H2.2A2.181,2.181,0,0,0,0,2.16a2.182,2.182,0,0,0,2.2,2.16h9.589a2.182,2.182,0,0,0,2.2-2.16A2.181,2.181,0,0,0,11.788,0"
          transform="translate(0 18.897)"
          fill="#f07904"
          opacity="0.4"
        />
        <path
          id="Fill_4"
          data-name="Fill 4"
          d="M13.985,2.159A2.18,2.18,0,0,0,11.788,0H2.2A2.18,2.18,0,0,0,0,2.159a2.181,2.181,0,0,0,2.2,2.16h9.589a2.18,2.18,0,0,0,2.2-2.16"
          transform="translate(15.181 2.768)"
          fill="#f07904"
          opacity="0.4"
        />
        <path
          id="Fill_6"
          data-name="Fill 6"
          d="M10.03,4.927A4.972,4.972,0,0,1,5.015,9.856,4.973,4.973,0,0,1,0,4.927,4.972,4.972,0,0,1,5.015,0,4.971,4.971,0,0,1,10.03,4.927"
          transform="translate(0 0)"
          fill="#f07904"
        />
        <path
          id="Fill_9"
          data-name="Fill 9"
          d="M10.03,4.929A4.971,4.971,0,0,1,5.015,9.856,4.972,4.972,0,0,1,0,4.929,4.973,4.973,0,0,1,5.015,0,4.972,4.972,0,0,1,10.03,4.929"
          transform="translate(19.137 16.07)"
          fill="#f07904"
        />
      </svg>
    </header>

    <main>
      <router-link v-for="(item, index) in users[0]" :key="index" :to="'/buddies/' + item._id">
        <article>
          <div :class="item.profileAvatar">
            <p>{{ createInitials(item.firstName, item.surName) }}</p>
          </div>
          <div>
            <p>
              {{ item.firstName }}
              {{ item.surName }}
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
              {{ item.typeIllness[0] }}
            </p>
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
                  />
                </svg>
              </span>
              {{ calcAge(item.birthDate) }}
            </p>
          </div>
          <a :href="'/buddies/' + item._id">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7.246"
              height="11.941"
              viewBox="0 0 7.246 11.941"
            >
              <path
                id="Path_13"
                data-name="Path 13"
                d="M3.431-4.786a.656.656,0,0,0,0-.928l-5.314-5.314a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L.779-5.25-3.432-1.019a.656.656,0,0,0,0,.927l.62.62a.656.656,0,0,0,.928,0Z"
                transform="translate(3.623 11.22)"
                fill="#f07904"
              />
            </svg>
          </a>
        </article>
      </router-link>
    </main>
    <Nav active="buddies" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
import axios from "axios";

export default {
  name: "Buddies",
  components: {
    Nav,
  },
  mounted() {
    this.getAllUsers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getAllUsers() {
      let currentUserID = this.$store.state.user._id;
      let url = `${window.location.origin}/api/users/${currentUserID}`;

      axios
        .get(url)
        .then((response) => {
          // Iterate over each obj and put in array
          let arrayUsers = this.users;
          arrayUsers.push(response.data);
        })
        .catch((err) => {
          console.log("err");
          // this.errors.push("Er zijn helaas geen users gevonden");
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
  },
};
</script>

<style lang="scss">
@import "@/components/buddies/buddies.scss";
</style>
