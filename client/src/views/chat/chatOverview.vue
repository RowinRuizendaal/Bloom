<template>
  <section class="chat-overview">
    <header>
      <h2>Chat</h2>
      <p><span>(v-if newChat)</span>verzoek</p>
    </header>

    <main>
      <router-link
        v-for="(item, index) in chats[0]"
        :key="index"
        :to="'/chat/' + item.participants[0]"
      >
        <article>
          <div :class="item.participant.profileAvatar">
            <p>
              {{ createInitials(item.participant.firstName, item.participant.surName) }}
            </p>
          </div>

          <div>
            <p>{{ item.participant.firstName }} {{ item.participant.surName }}</p>
            <p>{{ item.messages[item.messages.length - 1].content }}</p>
            <p>{{ item.messages[item.messages.length - 1].time }}</p>
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
          console.log(response.data);
          arrayChats.push(response.data);
        })
        .catch((err) => {
          console.log(err);
          // this.errors.push("Er is helaas geen account gevonden");
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
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatOverview.scss";
</style>
