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
      <div class="header">
        <h1>{{ article.name }}</h1>
        <p>lees voor</p>
      </div>
      <div class="text">
        <p class="intro">{{ article.intro }}</p>
        <div class="toggle">
          <span
            v-for="(toggle, index) in toggles"
            :key="index"
            @click="checkindex(index)"
            :class="{ 'active-class': index === data }"
          >
            <p>{{ toggle.heading }}</p>
          </span>
        </div>

        <!-- Klachten toggle -->
        <div v-if="data === 0" class="klachten">
          <p>{{ article.p1 }}</p>

          <h2 class="heading">Herken je deze klachten?</h2>

          <ul class="listeditem">
            <li v-for="(theme, index) in article.klachtenlijst" :key="index">
              {{ article.klachtenlijst[index] }}
            </li>
          </ul>

          <blockquote cite="">
            {{ article.quote }}
          </blockquote>

          <h2 class="heading">{{ article.klachtenheader }}</h2>
          <p>{{ article.klachten1 }}</p>
          <p>{{ article.klachten2 }}</p>
        </div>

        <!-- Tips toggle -->
        <div v-if="data === 1" class="tips">
          <h2 class="heading">{{ article.heading2 }}</h2>

          <ul class="listeditem">
            <li v-for="(theme, index) in article.tipslijst" :key="index">
              {{ article.tipslijst[index] }}
            </li>
          </ul>
        </div>

        <!-- hulp toggle -->
        <div v-if="data === 2" class="hulp">
          <h2 class="heading">{{ article.heading3 }}</h2>
          <p>{{ article.p2 }}</p>

          <ul class="listeditem links">
            <li v-for="(theme, index) in article.links" :key="index">
              <Button
                :isSlider="false"
                :isSubmit="false"
                :message="article.links[index].website"
                :slug="article.links[index].url"
              />
            </li>
          </ul>
        </div>
      </div>
    </article>
    <Nav />
  </main>
</template>

<script>
import Button from "@/components/button/button";
import Nav from "@/components/nav/nav";
export default {
  components: {
    Button,
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
@import "@/components/themes/slug.scss";
</style>
