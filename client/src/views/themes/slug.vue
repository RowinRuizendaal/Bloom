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
        <div class="read">
          <svg
            id="Volume_Up"
            data-name="Volume Up"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
            viewBox="0 0 11 9"
          >
            <path
              id="Fill_1"
              data-name="Fill 1"
              d="M6.179,1.725A5.083,5.083,0,0,0,6.063.978,1.273,1.273,0,0,0,4.879,0a1.507,1.507,0,0,0-.868.36L2.281,1.808H1.376a1.35,1.35,0,0,0-1.3,1.255,13.952,13.952,0,0,0,0,2.839,1.322,1.322,0,0,0,1.3,1.289h.905l1.763,1.47A1.347,1.347,0,0,0,4.838,9h.052a1.27,1.27,0,0,0,1.175-.99,4.522,4.522,0,0,0,.112-.726L6.2,7.054a48.249,48.249,0,0,0,0-5.108Z"
              transform="translate(0 0)"
              fill="#f07904"
            />
            <path
              id="Fill_4"
              data-name="Fill 4"
              d="M.835.2A.453.453,0,0,0,.2.084.478.478,0,0,0,.082.737,3.978,3.978,0,0,1,.7,2.954,3.979,3.979,0,0,1,.082,5.171.478.478,0,0,0,.2,5.825a.452.452,0,0,0,.639-.118,4.938,4.938,0,0,0,.786-2.753A4.938,4.938,0,0,0,.835.2"
              transform="translate(7.368 1.546)"
              fill="#f07904"
              opacity="0.4"
            />
            <path
              id="Fill_6"
              data-name="Fill 6"
              d="M.835.2A.453.453,0,0,0,.2.084.479.479,0,0,0,.081.738,6.7,6.7,0,0,1,1.134,4.473,6.7,6.7,0,0,1,.081,8.209.478.478,0,0,0,.2,8.863a.451.451,0,0,0,.261.084.456.456,0,0,0,.377-.2A7.659,7.659,0,0,0,2.051,4.473,7.659,7.659,0,0,0,.835.2"
              transform="translate(8.949 0.027)"
              fill="#f07904"
              opacity="0.4"
            />
          </svg>
          <p>lees voor</p>
        </div>
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
