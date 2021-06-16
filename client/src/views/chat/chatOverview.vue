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
        <p>0</p>
      </div>
    </header>

    <main>
      <div v-if="chats === null || chats === undefined" class="partial-state">
        <p>
          Je hebt nog geen chats. Probeer snel een buddy te vinden
          <router-link :to="'/buddies/'">hier</router-link>.
        </p>

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
            <p v-if="item.userChatUnique.messages.length > 0">
              {{ item.userChatUnique.messages[item.userChatUnique.messages.length - 1].content }}
            </p>

            <!-- <p v-else class="partialState">Stuur je eerste berichtje!</p> -->

            <p v-if="item.userChatUnique.messages.length > 0">
              {{
                convertTime(
                  item.userChatUnique.messages[item.userChatUnique.messages.length - 1].time
                )
              }}
            </p>

            <p v-else class="partialState"></p>
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
import moment from "moment";

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
      chats: null,
      chatRequests: [],
      viewCreater: true,
    };
  },
  methods: {
    async getChats() {
      // get user chat data by user ID
      let currentUserId = this.$store.state.user._id;
      let url = `${window.location.origin}/api/chatsItems/${currentUserId}`;

      axios
        .get(url)
        .then((response) => {
          let chats = response.data;

          // 1. Check if there are chats
          if (chats.length > 0)
            // global arr
            var allChats = [];

          // 2. If chats are not accpeted ant id isn't from creater, push them in this.chatRequests
          for (let i in chats) {
            if (
              !chats[i].userChatUnique.request.accepted &&
              chats[i].userChatUnique.request.creater != currentUserId
            ) {
              this.chatRequests.push(chats[i]);
            } else {
              // 3a Else check what the latest chatmessages are
              let chatObject = chats[i];
              let chatMessages = chatObject.userChatUnique.messages;

              // 3b Check if there are messages
              if (chatMessages.length > 0) {
                // 3c Check what the latest chatmessages are
                let lastMessage = chatMessages[chatMessages.length - 1];

                // 4. Get the timestamp
                let timestamp = lastMessage.time;

                // 5. Push them in a global array
                chats[i]["timeSort"] = {};
                chats[i]["timeSort"].time = timestamp;
                chats[i]["timeSort"].message = lastMessage;
                allChats.push(chats[i]);

                // 6. Sort the array
                allChats.sort(function (a, b) {
                  return b.timeSort.message.time - a.timeSort.message.time;
                });

                // 7. Assign this.chats with that global array
                this.chats = allChats;
              } else {
                // No message in chat object, so put there a message in
              }
            }
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

    // Check if time is the same as today, then remove date
    convertTime(timestamp) {
      let timeStampMsg = timestamp * 1000;

      let todayHours = new Date().setHours(0, 0, 0, 0);
      let chatTimeHours = new Date(timeStampMsg).setHours(0, 0, 0, 0);

      if (todayHours === chatTimeHours) {
        // Message is from today
        // format to correct
        let formattedDate = moment(timeStampMsg).format("HH:mm");
        return formattedDate;
      } else {
        // Message is from not today
        // format to correct
        let formattedDate = moment(timeStampMsg).format("DD-MM-YYYY, HH:mm");
        return formattedDate;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatOverview.scss";
</style>
