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
      <router-link :to="'/buddies/' + messagesHistory[0].participant.id">
        <div :class="messagesHistory[0].participant.profileAvatar">
          <p>
            {{
              createInitials(
                messagesHistory[0].participant.firstName,
                messagesHistory[0].participant.surName
              )
            }}
          </p>
        </div>

        <h2>
          {{ messagesHistory[0].participant.firstName }}
          {{ messagesHistory[0].participant.surName }}
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
        <li v-for="(item, index) in messagesHistory[0].messages" :key="index">
          <div v-if="item.sender == messagesHistory[0].participant.id" class="other">
            <p>{{ item.content }}</p>
          </div>

          <div v-else class="me">
            <p>{{ item.content }}</p>
          </div>
        </li>
      </ul>

      <form @submit.prevent="send">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="newMessage"
            placeholder="Enter message here"
          />
        </div>

        <button>send</button>
      </form>

      <!-- <div class="container">
        <div class="col-lg-6 offset-lg-3">
          <h2>{{ username }}</h2>
          <div class="card bg-info" v-if="ready">
            <div class="card-header text-white">
              <h4>
                My Chat App
                <span class="float-right">{{ connections }} connections</span>
              </h4>
            </div>
            <ul class="list-group list-group-flush text-right">
              <small v-if="typing" class="text-white">{{ typing }} is typing</small>
              <li class="list-group-item" v-for="(message, index) in messages" :key="index">
                <span :class="{ 'float-left': message.type === 1 }">
                  {{ message.message }}
                  <small>:{{ message.user }}</small>
                </span>
              </li>
            </ul>

            <div class="card-body">
              
            </div>
          </div>
        </div>
      </div> -->
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
      socket: null,
    };
  },

  mounted() {},

  methods: {
    // get data from params. server GET request
    async getChatData() {
      let userID = this.$route.params.id;
      let url = `${window.location.origin}/api/chat/${userID}`;

      axios
        .get(url)
        .then((response) => {
          let userMessagesObject = this.messagesHistory;
          userMessagesObject.push(response.data);
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

    // send() {
    //   this.messagesss.push({
    //     message: this.newMessage,
    //     type: 0,
    //     user: "Me",
    //   });

    //   socket.emit("chat-message", {
    //     message: this.newMessage,
    //     // user: this.username,
    //   });
    //   this.newMessage = null;
    // },

    // addUser() {
    //   this.ready = true;
    //   socket.emit("joined", this.username);
    // },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatDetail.scss";
</style>
