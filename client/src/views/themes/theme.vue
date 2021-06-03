<template>
  <section class="themes">
    <header>
      <h2>Thema's</h2>

      <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5">
        <ellipse cx="7.524" cy="7.572" rx="7.524" ry="7.572" fill="#f07904" />
        <path
          d="M16.34 17.456a1.156 1.156 0 01-.778-.337l-1.782-2.078a.952.952 0 01-.07-1.331.852.852 0 011.214 0l2.241 1.793a1.18 1.18 0 01.254 1.253 1.168 1.168 0 01-1.032.744z"
          fill="#f07904"
          opacity=".4"
        />
      </svg>
    </header>

    <main>
      <section class="theme">
        <h3>Hoe ga ik om met...</h3>
        <div class="container">
          <div v-for="(theme, index) in themelist" :key="index">
            <router-link :to="{ name: 'article', params: { id: theme.id } }">
              <article>
                <h3>{{ theme.name }}</h3>
              </article>
            </router-link>
          </div>
        </div>
      </section>
      <Nav />
    </main>
  </section>
</template>

<script>
import Nav from "@/components/nav/nav";
export default {
  components: {
    Nav,
  },
  computed: {
    themelist() {
      return this.$store.getters.themelist;
    },
  },
};
</script>

<style lang="scss">
.themes {
  width: 86vw;
  margin: 0 auto;
  height: 100vh;

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

  .theme {
    h3 {
      margin-top: 2rem;
      margin-left: 1rem;
      font-family: silka;
      font-weight: bold;
      font-size: 1.0000007559056rem;
      color: $gray;
      text-transform: uppercase;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      margin-top: 2rem;
      padding-bottom: 5rem;
      a {
        text-decoration: none;
        color: #f07904;
        font-weight: bold;
        font-size: 1.5rem;
      }
      article {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 9rem;
        height: 8rem;
        background-color: #fef1c5;
        margin: 0.5rem;
        margin-bottom: 1rem;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 15px 15px -14px rgb(114, 109, 97 / 25%);

        &:after {
          content: "";
          position: absolute;
          background-color: #fee89e;
          height: 2rem;
          width: 2rem;
          bottom: 0;
          right: 0;
          border-radius: 5px;
          background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7.246 11.941'%3E%3Cpath fill='%23f07904' d='M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z' /%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: 20px 20px;
          background-position: center;
        }
        h3 {
          color: $orange;
          text-transform: none;
          font-size: 1.2rem;
          max-width: 10rem;
          font-family: Nunito;
          font-weight: bold;
          margin-right: auto;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
