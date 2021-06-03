<template>
  <section class="chat-detail">
    <header>
      <p>terugknopje</p>
      <div>
        <p>profileAvatar</p>
        <h2>naam van participant</h2>
      </div>
      <p>svg settings</p>
    </header>

    <main>
      <div class="container">
        <div class="col-lg-6 offset-lg-3">
          <h2>{{ username }}</h2>
          <div class="card bg-info" v-if="ready">
            <div class="card-header text-white">
              <h4>
                My Chat App <span class="float-right">{{ connections }} connections</span>
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
              <form @submit.prevent="send">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newMessage"
                    placeholder="Enter message here"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
// import axios from "axios";

// var socket = io.connect();

export default {
  name: "ChatDetail",
  created() {
    window.onbeforeunload = () => {
      socket.emit("leave", this.username);
    };

    socket.on("chat-message", (data) => {
      this.messages.push({
        message: data.message,
        type: 1,
        user: data.user,
      });
    });

    socket.on("typing", (data) => {
      this.typing = data;
    });

    socket.on("stopTyping", () => {
      this.typing = false;
    });

    socket.on("joined", (data) => {
      this.info.push({
        username: data,
        type: "joined",
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    socket.on("leave", (data) => {
      this.info.push({
        username: data,
        type: "left",
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    socket.on("connections", (data) => {
      this.connections = data;
    });
  },

  watch: {
    newMessage(value) {
      value ? socket.emit("typing", this.username) : socket.emit("stopTyping");
    },
  },

  data: function () {
    return {
      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
    };
  },

  methods: {
    send() {
      this.messages.push({
        message: this.newMessage,
        type: 0,
        user: "Me",
      });

      socket.emit("chat-message", {
        message: this.newMessage,
        user: this.username,
      });
      this.newMessage = null;
    },

    addUser() {
      this.ready = true;
      socket.emit("joined", this.username);
    },
  },
};
</script>

<style lang="scss">
/* .chat-overview {
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
      //   padding: 0.3em;

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
} */
</style>
