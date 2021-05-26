<template>
  <main class="slug">
    <header>
      <nav>
        <li>
          <router-link to="/themes" class="skip"
            ><svg xmlns="http://www.w3.org/2000/svg" width="7.246" height="11.941">
              <path
                data-name="Path 13"
                d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
                fill="#f07904"
              /></svg
          ></router-link>
        </li>
        <li class="logo"><h2>bloom</h2></li>
      </nav>
    </header>
    <article>
      <img
        class="image"
        :src="require(`../../assets/themes/${article.image}`)"
        :alt="`${article.name}-image`"
      />
      <h1>{{ article.name }}</h1>
      <div class="text">
        <p>{{ article.intro }}</p>
        <div>Hier komen toggles te staan</div>
        <p>{{ article.p1 }}</p>

        <h2 class="klachten">Herken je deze klachten?</h2>

        <ul>
          <li v-for="(theme, index) in article.bulletlist" :key="index">
            {{ article.bulletlist[index] }}
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  computed: {
    article() {
      return this.$store.getters.theme(parseInt(this.$route.params.id));
    },
  },
};
</script>

<style lang="scss">
.slug {
  height: 100vh;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 4rem;
      li {
        list-style: none;
        &:nth-child(1) {
          transform: rotate(180deg);
          margin-right: 4rem;
        }
      }
      .logo {
        color: $orange;
        font-size: 1.167rem;
        margin: auto;
        max-width: 0rem;
      }
      .skip {
        font-size: 1rem;
        color: $gray;
        text-decoration: none;
      }
    }
  }
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
  }
  .image {
    margin-bottom: 1.5rem;
    max-width: 100%;
    width: 90%;
    filter: opacity(90%);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 12rem;
    object-fit: cover;
    @include q-lg-min {
      max-width: 30rem;
    }
  }
  .klachten {
    color: $orange;
    line-height: 1.5rem;
    font-size: 1.5rem;
  }
  .text {
    line-height: 1.6rem;
    max-width: 25rem;
    font-size: 1rem;
    padding: 20px;

    p {
      &:nth-child(1) {
        font-family: Nunito;
        font-weight: bold;
      }
      font-family: Nunito;
      font-weight: lighter;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
