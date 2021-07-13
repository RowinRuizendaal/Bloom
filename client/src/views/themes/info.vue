<template>
  <section class="info">
    <header>
      <router-link to="/themes">
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
      <h2>informatie</h2>
    </header>

    <main>
      <article>
        <ul>
          <li>
            <h3>Hoe werkt Bloom?</h3>
            <p>In de Bloom app....</p>
          </li>
        </ul>
      </article>
      <Nav />
    </main>
  </section>
</template>

<script>
import Button from "@/components/button/button";
import Nav from "@/components/nav/nav";
export default {
  components: {
    // Button,
    Nav,
  },
  methods: {
    checkindex(index) {
      this.data = index;
    },
  },
  data() {
    return {
      data: 0,
      toggles: [
        {
          heading: "Klachten",
        },
        {
          heading: "Tips",
        },
        {
          heading: "Hulp",
        },
      ],
    };
  },
  computed: {
    article() {
      return this.$store.getters.theme(parseInt(this.$route.params.id));
    },
  },
};
</script>

<style lang="scss">
@import "@/components/themes/info.scss";
</style>
