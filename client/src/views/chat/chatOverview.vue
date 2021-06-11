<template>
  <section class="chat-overview">
    <header>
      <h2>Chat</h2>

      <router-link v-if="this.chatRequests.length" to="/chats/requests">
        <div>
          <p>{{ this.chatRequests.length }}</p>
        </div>

        <p v-if="this.chatRequests.length > 1">verzoeken</p>
        <p v-else>verzoek</p>
      </router-link>

      <div v-else>
        <p>niks</p>
      </div>
    </header>

    <main>
      <div v-if="chats === null || chats === undefined" class="partial-state">
        <p>
          Je hebt nog geen chats. Probeer snel een buddy te vinden
          <router-link :to="'/buddies/'">hier</router-link>. Wij kunnen ook een random buddy voor
          jou uitkiezen, klik dan

          <button @click="randomBuddy()">hier</button>
        </p>

        <router-link class="randomUser" :to="'/buddies/' + this.randomUserId">
          <p>{{ this.randomUserFirstName }}</p>
        </router-link>

        <svg
          id="Iconly_Bulk_Info_Circle"
          data-name="Iconly/Bulk/Info Circle"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="100"
          viewBox="0 0 20 20"
        >
          <path
            id="Fill_1"
            data-name="Fill 1"
            d="M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10"
            fill="#f07904"
            opacity="0.4"
          />
          <path
            id="Combined_Shape"
            data-name="Combined Shape"
            d="M.005,8.468a.878.878,0,1,1,.879.875A.874.874,0,0,1,.005,8.468ZM0,5.295V.875a.875.875,0,0,1,1.75,0v4.42a.875.875,0,1,1-1.75,0Z"
            transform="translate(9.12 5.336)"
            fill="#f07904"
          />
        </svg>
      </div>

      <router-link
        v-else
        v-for="(item, index) in chats"
        :key="index"
        :to="'/chat/' + item.userChatUnique._id"
      >
        <article>
          <div :class="item.participant.profileAvatar">
            <p>
              {{ createInitials(item.participant.firstName, item.participant.surName) }}
            </p>
          </div>

          <div>
            <p>{{ item.participant.firstName }} {{ item.participant.surName }}</p>
            <p>
              {{ item.userChatUnique.messages[item.userChatUnique.messages.length - 1].content }}
            </p>
            <p>
              {{ item.userChatUnique.messages[item.userChatUnique.messages.length - 1].time }}
            </p>
          </div>
        </article>
      </router-link>
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
      chatRequests: [],
      randomUserFirstName: null,
      randomUserId: null,
      viewCreater: true,
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
          // console.log("response: ", response.data);

          let chats = response.data;
          // console.log("all chats: ", chats);
          if (chats.length) {
            for (let i in chats) {
              let acceptedState = chats[i].userChatUnique.request.accepted;
              let requestCreater = chats[i].userChatUnique.request.creater;

              if (requestCreater !== currentUserId && acceptedState == false) {
                this.viewCreater = false;

                // push in chatRequests
                this.chatRequests.push(chats[i]);
                this.$store.state.chatRequests.push(chats[i]);
                // console.log("req: ", this.chatRequests);
              } else {
                // filter out the chatrequests
                this.chats.push(chats[i]);
              }
            }
          } else {
            this.chats = null;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //  Get the initials of a fullname
    createInitials(firstName, surName) {
      let fullName = `${firstName} ${surName}`;

      // Logic for getting the name initials
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...fullName.matchAll(rgx)] || [];
      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
      return initials;
    },

    async randomBuddy() {
      // 1. Request to all buddies
      let currentUserId = this.$store.state.user._id;
      let url = `${window.location.origin}/api/users/${currentUserId}`;
      // 2. pick One random
      // 3. Return the buddies/id.

      axios
        .get(url)
        .then((response) => {
          const allUsers = response.data;
          let randomUser = randomUserPicker(allUsers);
          this.randomUserFirstName = randomUser.firstName;
          this.randomUserId = randomUser._id;

          // Gets random user of all users
          function randomUserPicker(users) {
            const randomUser = users[Math.floor(Math.random() * users.length)];

            return randomUser;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatOverview.scss";
</style>
