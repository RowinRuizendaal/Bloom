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
          <li v-for="(item, index) in this.content" :key="index">
            <div>
              <h3>{{ item.title }}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.246"
                height="11.941"
                viewBox="0 0 7.246 11.941"
                style="display: block; transform: rotate(90deg)"
              >
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M3.431-4.786a.656.656,0,0,0,0-.928l-5.314-5.314a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L.779-5.25-3.432-1.019a.656.656,0,0,0,0,.927l.62.62a.656.656,0,0,0,.928,0Z"
                  transform="translate(3.623 11.22)"
                  fill="#f07904"
                />
              </svg>
              <p>- - -</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.246"
                height="11.941"
                viewBox="0 0 7.246 11.941"
                style="display: block; transform: rotate(270deg)"
              >
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M3.431-4.786a.656.656,0,0,0,0-.928l-5.314-5.314a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L.779-5.25-3.432-1.019a.656.656,0,0,0,0,.927l.62.62a.656.656,0,0,0,.928,0Z"
                  transform="translate(3.623 11.22)"
                  fill="#f07904"
                />
              </svg>
            </div>

            <p v-for="(para, index) in item.paragraphs" :key="index">
              {{ para }}
            </p>
          </li>
        </ul>
      </article>
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

      // content for this page
      content: [
        {
          id: 1,
          title: "Hoe werkt Bloom?",
          paragraphs: ["Bloom werkt op een mobiele apparaat met internet."],
        },
        {
          id: 2,
          title: "Hoe is Bloom ontstaan?",
          paragraphs: ["Een afstudeerproject van Eva valkenburg"],
        },
        {
          id: 3,
          title: "Hulpaanbieders",
          paragraphs: [
            "In de Bloom app worden hulpaanbieders opgenomen die aanvullende behandeling en begeleiding bieden aan kankerpatiënten in remissie. De verwijzing vindt je terug op de thema pagina’s onder hulp.",
            "Vermelding in de Bloom app? Lees voor het doen van een verzoek eerst onze criteria     door.",
          ],
        },
        {
          id: 4,
          title: "Veelgestelde vragen",
          paragraphs: ["Stel een vraag"],
        },
        {
          id: 5,
          title: "Gegevensbeleid",
          paragraphs: ["AVG"],
        },
        {
          id: 6,
          title: "Gebruikersvoorwaarden",
          paragraphs: ["Niet pesten", "Respect hebben voor elkaar"],
        },
        {
          id: 7,
          title: "Een probleem rapporteren",
          paragraphs: [
            "Werkt de app niet zoals je wilt? Stuur mij even een bericht. Mail of in-app.",
          ],
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
