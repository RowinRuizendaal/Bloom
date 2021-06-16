<template>
  <section class="chat-detail">
    <header>
      <router-link to="/chats" class="start">
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
      <router-link :to="'/buddies/' + participant[0].id" v-if="participant[0]">
        <div :class="participant[0].profileAvatar">
          <p>
            {{ createInitials(participant[0].firstName, participant[0].surName) }}
          </p>
        </div>

        <h2>
          {{ participant[0].firstName }}
          {{ participant[0].surName }}
        </h2>
      </router-link>
      <svg
        id="Iconly_Bulk_More_Circle"
        data-name="Iconly/Bulk/More Circle"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          id="Fill_1"
          data-name="Fill 1"
          d="M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10"
          transform="translate(2 2)"
          fill="#f07904"
          opacity="0.4"
        />
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M8.959,1.2a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,8.959,1.2Zm-4.479,0a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,4.479,1.2ZM0,1.2a1.2,1.2,0,1,1,1.2,1.2A1.2,1.2,0,0,1,0,1.2Z"
          transform="translate(6.323 10.804)"
          fill="#f07904"
        />
      </svg>
    </header>

    <main>
      <ul>
        <li v-for="(item, index) in messagesHistory[0]" :key="index">
          <div v-if="item.sender !== $store.state.user._id" class="other">
            <p>{{ item.content }}</p>
          </div>

          <div v-else class="me">
            <p>{{ item.content }}</p>
          </div>
        </li>

        <div v-if="messages.length">
          <li v-for="(item, index) in messages" :key="index">
            <div v-if="item.sender !== $store.state.user._id" class="other">
              <p>{{ item.content }}</p>
            </div>

            <div v-else class="me">
              <p>{{ item.content }}</p>
            </div>
          </li>
        </div>
      </ul>

      <div class="requests" v-if="requestAccepted == false && viewCreater == false">
        <button @click="makeRequestChoice('reject')">Afwijzen</button>
        <button @click="makeRequestChoice('accept')">Accepteren</button>
      </div>

      <form v-else @submit.prevent="send">
        <div>
          <input type="text" v-model="newMessage" placeholder="Typ een chatbericht..." required />
          <svg
            id="Voice"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="0 0 17 20"
          >
            <path
              id="Fill_1"
              data-name="Fill 1"
              d="M16.031,0a.962.962,0,0,0-.969.957,6.563,6.563,0,0,1-13.125,0A.962.962,0,0,0,.969,0,.962.962,0,0,0,0,.957,8.443,8.443,0,0,0,7.532,9.293v1.925a.969.969,0,0,0,1.937,0V9.293A8.443,8.443,0,0,0,17,.957.962.962,0,0,0,16.031,0"
              transform="translate(0 7.826)"
              fill="#726d61"
              opacity="0.4"
            />
            <path
              id="Fill_4"
              data-name="Fill 4"
              d="M4.351,13.217H4.7a4.325,4.325,0,0,0,4.351-4.3V4.3A4.324,4.324,0,0,0,4.7,0H4.351A4.324,4.324,0,0,0,0,4.3V8.921a4.325,4.325,0,0,0,4.351,4.3"
              transform="translate(3.973 0)"
              fill="#726d61"
            />
          </svg>
        </div>

        <button type="submit">send</button>
      </form>
    </main>
  </section>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "ChatDetail",

  data() {
    return {
      requestAccepted: false,
      viewCreater: false,
      socket: null,
      messagesHistory: [],
      participant: [],
      newMessage: null,
      messages: [],
    };
  },

  created() {
    this.socket = io("http://localhost:5000");
  },

  mounted() {
    this.socket.emit("joinRoom", {
      userID: this.$store.state.user._id,
      roomID: this.$route.params.id,
    });

    this.socket.on("roomData", ({ room, participant }) => {
      // Store participant
      let participantData = participant;
      this.participant.push(participantData);

      let userID = this.$store.state.user._id;
      // Check if this is a chatRequest, then put request to true
      let requestState = room.request.accepted;
      let requestCreater = room.request.creater;

      // check if chatCreatorID is the same as this user --> render chat
      if (requestCreater == userID) {
        // set view to viewCreater: false
        this.viewCreater = true;
      }

      if (requestState == true) {
        this.requestAccepted = true;
      }

      // Store messages history
      let messages = room.messages;
      this.messagesHistory.push(messages);
    });

    this.socket.on("newMessage", (messageObject) => {
      // console.log("New Message: ", messageObject);
      this.messages.push(messageObject);
    });
  },

  methods: {
    // Get the initials of the name
    createInitials(firstName, surName) {
      let fullName = `${firstName} ${surName}`;

      // Logic for getting the name initials
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...fullName.matchAll(rgx)] || [];
      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
      return initials;
    },

    // Chat request handler
    async makeRequestChoice(choice) {
      if (choice === "reject") {
        let chatID = this.$route.params.id;
        let url = `${window.location.origin}/api/deleteChat/${chatID}`;

        axios
          .get(url)
          .then((response) => {
            let errorMsg = response.data;
            // console.log("response: ", errorMsg);
            this.$router.push("/chats");
          })
          .catch((err) => {
            console.log(err);
          });

        // delete chat and go back to /chats
      } else {
        this.requestAccepted = true;

        let createrID = this.participant[0].id;
        let chatID = this.$route.params.id;
        let url = `${window.location.origin}/api/acceptChat/${createrID}/${chatID}`;

        axios
          .post(url)
          .then((response) => {
            let errorMsg = response.data;
            // console.log("response: ", errorMsg);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // Send messages handler
    send(e) {
      e.preventDefault();
      let date = new Date();
      let timestampSeconds = date.getTime() / 1000;

      let chatObject = {
        roomID: this.$route.params.id,
        sender: this.$store.state.user._id,
        content: this.newMessage,
        time: timestampSeconds,
      };

      this.socket.emit("chat-message", chatObject);
      this.newMessage = null;
    },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatDetail.scss";
</style>
