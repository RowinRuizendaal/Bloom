<template>
  <main>
    <header>
      <nav>
        <li class="logo"><h2>bloom</h2></li>
        <li><router-link to="/onboarding" class="skip">skip</router-link></li>
      </nav>
    </header>
    <article
      v-for="(item, index) in articles"
      :key="index"
      class="artikel"
      :class="{ 'card-slider-inactive': index !== activeIndex }"
    >
      <div class="container">
        <img class="image" :src="require(`../assets/onboarding/${item.img}`)" />
        <div class="text">
          <h2>{{ item.heading }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </article>
    <div class="buttons">
      <a class="nextButton" @click="nextSlide()">
        volgende
        <span>
          <!-- arrow icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.246 11.941">
            <path
              fill="#f07904"
              d="M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"
            />
          </svg>
        </span>
      </a>
      <div class="circles">
        <span
          v-for="index in this.maxslides"
          :key="index"
          :class="{ 'fill-active': index - 1 === activeIndex }"
          @click="nextSlide()"
        ></span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    nextSlide() {
      this.activeIndex += 1;

      if (this.activeIndex === 3) {
        this.activeIndex = 0;
      }
    },
  },
  data() {
    return {
      activeIndex: 0,
      maxslides: 3,
      articles: [
        {
          img: "onboarding-1.jpg",
          heading: "Grote invloed op je leven",
          text: "Kanker kan grote gevolgen hebben voor je werk, je relaties en je dagelijks leven. Alles is anders. Dat kan je boos, onzeker, eenzaam of somber maken. Veel mensen met kanker hebben dit soort gevoelens. Dat kan tijdens de behandeling zijn, maar juist ook de jaren daarna. Bloom helpt je om na het behandelingstraject het dagelijks leven weer op te pakken.",
        },
        {
          img: "onboarding-2.jpg",
          heading: "Psychosociale klachten",
          text: "De gevoelens en emoties waar je mee te maken kan krijgen noem je psychosociale klachten. Ben je vaak moe, bang of somber? Maak je je zorgen over je inkomen of je relatie? Bloom geeft je inzicht in een aantal van deze klachten. Je krijgt hierbij meer informatie en praktische tips, maar ook doorschakeling naar professionele hulp.",
        },
        {
          img: "onboarding-3.jpg",
          heading: "Lotgenoten contact",
          text: "Het is belangrijk om te praten over je gevoelens. Dat kan opluchten. Bovendien kunnen anderen je beter helpen als ze weten hoe het met je gaat. Zo sta je er niet helemaal alleen voor. Over je ziekte en problemen praten is niet altijd makkelijk. Toch is het goed én belangrijk. Daarom kun je via Bloom ook in contact komen met lotgenoten.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/onboarding/onboarding.scss";
</style>
