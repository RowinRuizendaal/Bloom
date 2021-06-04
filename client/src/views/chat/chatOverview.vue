<template>
  <section class="chat-overview">
    <header>
      <h2>Chat</h2>
      <p><span>(v-if newMsg)</span>verzoek</p>
    </header>

    <main>
      <a v-for="(item, index) in chats[0]" :key="index" :href="'/chat/' + item.participant.id">
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
      </a>
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
        })
        .catch((err) => {
          console.log(err);
          // this.errors.push("Er is helaas geen account gevonden");
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

    klikLink(e) {
      console.log(e.target);
    },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatOverview.scss";
</style>
