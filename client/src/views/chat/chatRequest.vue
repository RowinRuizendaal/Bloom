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
        v-for="(item, index) in data"
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

export default {
  name: "ChatRequest",
  components: {
    Nav,
  },

  data() {
    let chatRequestsData = this.$store.state.chatRequests;

    return {
      data: chatRequestsData,
    };
  },
  methods: {
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
@import "@/components/chat/chatRequest.scss";
</style>
