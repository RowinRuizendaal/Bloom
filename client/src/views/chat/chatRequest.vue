<template>
  <section class="chat-request">
    <header>
      <router-link to="/chats">
        <svg
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
      <h2>berichtverzoeken</h2>
    </header>

    <main>
      <router-link
        v-for="(item, index) in chatRequests"
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
            <p v-if="item.userChatUnique.messages.length">
              {{ item.userChatUnique.messages[item.userChatUnique.messages.length - 1].content }}
            </p>

            <p v-else class="partialState">Stuur je eerste berichtje!</p>

            <p v-if="item.userChatUnique.messages.length">
              {{
                convertTime(
                  item.userChatUnique.messages[item.userChatUnique.messages.length - 1].time
                )
              }}
            </p>

            <p v-else class="partialState"></p>
            <div>
              <p>
                {{ item.userChatUnique.messages.length }}
              </p>
            </div>
          </div>
        </article></router-link
      >
    </main>
    <Nav active="chats" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
import axios from "axios";
import moment from "moment";

export default {
  name: "ChatRequest",
  components: {
    Nav,
  },

  mounted() {
    this.getChats();
  },

  data() {
    return {
      chatRequests: [],
    };
  },

  methods: {
    async getChats() {
      // get user chat data by user ID
      let currentUserId = this.$store.state.user._id;
      let url = `${window.location.origin}/api/chatsItems/${currentUserId}`;

      axios.get(url).then((response) => {
        let chatRequests = response.data;

        // Iterate over each object
        for (let i in chatRequests) {
          let chatObject = chatRequests[i];

          //  Check if chatObj is request (req.accpe = false)
          if (chatObject.userChatUnique.request.accepted == false) {
            // Push object to chatRequests
            this.chatRequests.push(chatObject);
          }
        }
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
@import "@/components/chat/chatRequest.scss";
</style>
