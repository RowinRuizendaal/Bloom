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
        <h2>Hoe ga ik om met...</h2>
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
@import "@/components/themes/theme.scss";
</style>
