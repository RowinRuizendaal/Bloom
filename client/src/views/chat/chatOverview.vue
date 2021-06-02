<template>
  <section class="chat-overview">
    <header>
      <h2>Buddy zoeken</h2>
      <svg
        id="Filter"
        xmlns="http://www.w3.org/2000/svg"
        width="29.167"
        height="25.926"
        viewBox="0 0 29.167 25.926"
      >
        <path
          id="Fill_1"
          data-name="Fill 1"
          d="M11.788,0H2.2A2.181,2.181,0,0,0,0,2.16a2.182,2.182,0,0,0,2.2,2.16h9.589a2.182,2.182,0,0,0,2.2-2.16A2.181,2.181,0,0,0,11.788,0"
          transform="translate(0 18.897)"
          fill="#f07904"
          opacity="0.4"
        />
        <path
          id="Fill_4"
          data-name="Fill 4"
          d="M13.985,2.159A2.18,2.18,0,0,0,11.788,0H2.2A2.18,2.18,0,0,0,0,2.159a2.181,2.181,0,0,0,2.2,2.16h9.589a2.18,2.18,0,0,0,2.2-2.16"
          transform="translate(15.181 2.768)"
          fill="#f07904"
          opacity="0.4"
        />
        <path
          id="Fill_6"
          data-name="Fill 6"
          d="M10.03,4.927A4.972,4.972,0,0,1,5.015,9.856,4.973,4.973,0,0,1,0,4.927,4.972,4.972,0,0,1,5.015,0,4.971,4.971,0,0,1,10.03,4.927"
          transform="translate(0 0)"
          fill="#f07904"
        />
        <path
          id="Fill_9"
          data-name="Fill 9"
          d="M10.03,4.929A4.971,4.971,0,0,1,5.015,9.856,4.972,4.972,0,0,1,0,4.929,4.973,4.973,0,0,1,5.015,0,4.972,4.972,0,0,1,10.03,4.929"
          transform="translate(19.137 16.07)"
          fill="#f07904"
        />
      </svg>
    </header>

    <main></main>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Buddies",
  mounted() {
    this.getAllUsers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getAllUsers() {
      axios
        .get("/api/users")
        .then((response) => {
          // iterate over each obj and put
          let arrayUsers = this.users;
          arrayUsers.push(response.data);
        })
        .catch((err) => {
          this.errors.push("Er is helaas geen account gevonden");
        });
    },
  },
};
</script>

<style lang="scss">
.chatoverview {
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
      position: relative;
      background: white;
      border-radius: 10px;
      width: 9em;
      height: fit-content;
      margin: 0.5em;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);

      div {
        p {
          &:not(:nth-of-type(1)) {
            color: $black;
            font-size: 0.8rem;
          }
        }

        &:nth-of-type(1) {
          border-radius: 10px 10px 0 0;
          text-align: center;
          padding: 1em;

          p {
            font-size: 2.5rem;
            font-weight: 600;
          }
        }

        &:nth-of-type(2) {
          padding: 1em;
          font-size: 0.8rem;

          p {
            &:nth-of-type(1) {
              font-weight: $font-weight-bold;
              color: $black;
            }

            &:nth-of-type(2) {
            }

            &:nth-of-type(3) {
            }
          }
        }
      }

      a {
        background: $yellow;
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: center;
        width: 2em;
        height: 2em;
        padding: 0.5em;
        border-radius: 10px 0 10px 0;
      }
    }
  }
}
</style>
