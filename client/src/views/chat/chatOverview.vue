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
          console.log("response: ", chats);

          // When there are chats
          if (chats.length > 0) {
            let chatsArray = [];

            // Loop over chat objects
            for (let i in chats) {
              // console.log("all chats", chats[i]);
              // let currentUserId = this.$store.state.user._id;
              let acceptedState = chats[i].userChatUnique.request.accepted;
              let requestCreater = chats[i].userChatUnique.request.creater;

              // if chat obj is not accepted
              if (requestCreater !== currentUserId && acceptedState == false) {
                this.viewCreater = false;

                // Push to chatRequests to seperate the data
                this.chatRequests.push(chats[i]);
              }
              // if chat obj is accepted
              else {
                // 1. Check if chat obj has messages, otherwise create timestamp key and set to null
                // 2. Check the timestamp

                let test = lengthCheck(chats[i]);
                // 3. Push obj in new Arr
                chatsArray.push(test);

                // get the latest chat object and return latest message objecht
                function lengthCheck(obj) {
                  if (obj.userChatUnique.messages.length > 0) {
                    console.log("object", obj);
                    let last = getLastObject(obj.userChatUnique.messages);
                    console.log("last messge per chat -- ", last);

                    function getLastObject(arr) {
                      return arr[arr.length - 1];
                    }

                    // Check if message is from current user or participant
                    let lastMsg = {
                      participant: {
                        firstName: obj.participant.firstName,
                        surName: obj.participant.surName,
                        id: obj.participant.id,
                        profileAvatar: obj.participant.profileAvatar,
                      },
                      userChatUnique: {
                        messages: [last],
                        participants: obj.userChatUnique.participants,
                        request: {
                          accepted: obj.userChatUnique.request.accepted,
                          creater: obj.userChatUnique.request.creater,
                        },
                        _id: obj.userChatUnique._id,
                      },
                    };

                    return lastMsg;
                  } else {
                    // time from now, so thisempty chat wil be put to the highest
                    let date = new Date();
                    let timestampSeconds = date.getTime() / 1000;
                    obj.userChatUnique.messages.push({
                      content: "Stuur je eerste berichtje!",
                      time: timestampSeconds,
                    });
                    return obj;
                  }
                }
                // 4. Sort the newArr
                let testie = chatsArray.sort(function (a, b) {
                  return b.userChatUnique.messages[0].time - a.userChatUnique.messages[0].time;
                });

                // 5. Assign this.chats to newArr
                console.log("this.chats :", this.chats);
                this.chats = testie;
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

    // Check if time is the same as today, then remove date
    convertTime(timestamp) {
      let timeStampMsg = timestamp * 1000;

      let todayHours = new Date().setHours(0, 0, 0, 0);
      let chatTimeHours = new Date(timeStampMsg).setHours(0, 0, 0, 0);

      if (todayHours === chatTimeHours) {
        // Message is from today
        // format to correct
        let formattedDate = moment(timeStampMsg).format("hh:mm a");
        return formattedDate;
      } else {
        // Message is from not today
        // format to correct
        let formattedDate = moment(timeStampMsg).format("DD-MM-YYYY, hh:mm a");
        return formattedDate;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/components/chat/chatOverview.scss";
</style>
