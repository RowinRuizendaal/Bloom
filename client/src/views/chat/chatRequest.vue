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

    <main></main>
    <Nav active="chats" />
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
import axios from "axios";

export default {
  name: "ChatRequest",
  components: {
    Nav,
  },
  mounted() {
    // this.getChats();
  },
  data() {
    return {
      chats: [],
      //   chatRequests: [],
    };
  },
  methods: {
    // get user chat data by user ID
    // async getChats() {
    //   let currentUserId = this.$store.state.user._id;
    //   let url = `${window.location.origin}/api/chatsItems/${currentUserId}`;
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       // if data --> display
    //       // else --> empty state
    //       let arrayChats = this.chats;
    //       console.log("response: ", response.data);
    //       let chats = response.data;
    //       if (chats.length) {
    //         for (let i in chats) {
    //           console.log();
    //           let acceptedState = chats[i].userChatUnique.accepted;
    //           if (acceptedState == false)
    //             // push in chatRequests
    //             this.chatRequests.push(chats[i]);
    //           console.log("req: ", this.chatRequests);
    //         }
    //         arrayChats.push(response.data);
    //       } else {
    //         arrayChats.push(null);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // //  Get the initials of a fullname
    // createInitials(firstName, surName) {
    //   let fullName = `${firstName} ${surName}`;
    //   // Logic for getting the name initials
    //   let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    //   let initials = [...fullName.matchAll(rgx)] || [];
    //   initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
    //   return initials;
    // },
    // async randomBuddy() {
    //   // 1. Request to all buddies
    //   let currentUserId = this.$store.state.user._id;
    //   let url = `${window.location.origin}/api/users/${currentUserId}`;
    //   // 2. pick One random
    //   // 3. Return the buddies/id.
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       const allUsers = response.data;
    //       let randomUser = randomUserPicker(allUsers);
    //       this.randomUserFirstName = randomUser.firstName;
    //       this.randomUserId = randomUser._id;
    //       // Gets random user of all users
    //       function randomUserPicker(users) {
    //         const randomUser = users[Math.floor(Math.random() * users.length)];
    //         return randomUser;
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatRequest.scss";
</style>
