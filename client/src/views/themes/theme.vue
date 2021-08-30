<template>
  <section class="themes">
    <header>
      <div>
        <h2>Thema's</h2>
        <router-link to="/information">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
              id="Iconly_Bulk_Info_Circle"
              data-name="Iconly/Bulk/Info Circle"
              transform="translate(24 24) rotate(180)"
            >
              <path
                id="Fill_1"
                data-name="Fill 1"
                d="M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10"
                transform="translate(2 2)"
                fill="#f07904"
                opacity="0.4"
              />
              <path
                id="Combined_Shape"
                data-name="Combined Shape"
                d="M.005,8.468a.878.878,0,1,1,.879.875A.874.874,0,0,1,.005,8.468ZM0,5.295V.875a.875.875,0,0,1,1.75,0v4.42a.875.875,0,1,1-1.75,0Z"
                transform="translate(11.12 7.336)"
                fill="#f07904"
              />
            </g>
          </svg>
        </router-link>
      </div>

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
              <article :class="theme.background">
                <h3>{{ theme.name }}</h3>
              </article>
            </router-link>
          </div>
        </div>
      </section>
      <Nav :tour="true" />
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
