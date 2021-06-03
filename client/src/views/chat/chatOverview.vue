<template>
  <section class="chat-overview">
    <header>
      <h2>Chat</h2>
      <p><span>(v-if newMsg)</span>verzoek</p>
    </header>

    <main>
      <article>
        <!-- <article v-for="(item, index) in chats[0]" :key="index">
        <div :class="item.profileAvatar">
          <p>
            {{ createInitials(item.firstName, item.surName) }}
          </p>
        </div>

        <div>
          <p>{{ item.firstName }} {{ item.surName }}</p>
          <p>laatste chats obj van message</p>
        </div> -->

        <!--  <div class="profile-headInfo">
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
        </div> -->
      </article>
    </main>
    <Nav active="chats" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
import axios from "axios";

export default {
  name: "ChatOverview",
  components: {
    Nav,
  },
  mounted() {
    this.getChats();
  },
  data() {
    return {
      chats: [],
    };
  },
  methods: {
    // get user chat data by user ID
    async getChats() {
      let currentUserId = this.$store.state.user._id;
      let url = `${window.location.origin}/api/chatsItems/${currentUserId}`;

      axios
        .get(url)
        .then((response) => {
          // if data --> display
          // else --> empty state
          // iterate over each obj and put in array
          let arrayChats = this.chats;
          arrayChats.push(response.data);

          // this.chats

          // loop
          // console.log(response.data[0].participant);
          this.getChatInfo(response.data[0].participant).then((response) => {
            console.log(response);
          });
        })
        .catch((err) => {
          console.log(err);
          // this.errors.push("Er is helaas geen account gevonden");
        });
    },

    async getChatInfo(participantId) {
      let url = `${window.location.origin}/api/chatsParticipants/${participantId}`;

      axios
        .get(url)
        .then((response) => {
          console.log("andere f: ", response.data);
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

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

<style lang="scss">
.chat-overview {
  width: 86vw;
  margin: 0 auto;
  header {
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 0.5px solid #8080803d;
    color: $orange;
    margin-bottom: 1em;

    h2 {
      font-family: $font-family-secondary;
      font-weight: $font-weight-bold;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;

    article {
      &:not(:nth-of-type(1)) {
        border-bottom: 0.13px solid $lighterGray;
      }

      &:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        div {
          &:nth-child(1) {
            width: 8em;
            height: 8em;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 3px 8px $gray;
          }
        }
      }
    }
  }
}
</style>
