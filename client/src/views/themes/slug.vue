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
          <span v-for="(toggle, index) in toggles" :key="index" @click="checkindex(index)">
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

          <h2 class="heading">Andere klachten</h2>
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

          <ul class="listeditem">
            <li v-for="(theme, index) in article.links" :key="index">
              <Button
                :message="article.links[index].website"
                :slug="article.links[index].url"
                :isSlider="false"
              />
            </li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import Button from "@/components/button/button";
export default {
  components: {
    Button,
  },
  methods: {
    checkindex(index) {
      console.log(index);
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
        min-width: 8rem;
      }
      .skip {
        font-size: 1rem;
        color: $gray;
        text-decoration: none;
      }
    }
  }
  .toggle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
    text-align: center;

    span {
      color: $orange;
      background-color: $yellow;
      width: 10rem;
      cursor: pointer;
      height: 3rem;
      &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
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
  .heading {
    color: $orange;
    line-height: 1.5rem;
    font-size: 1.5rem;
    margin: 1rem 0rem 1rem 0rem;
  }
  .text {
    line-height: 1.6rem;
    max-width: 30rem;
    font-size: 1rem;
    padding: 20px;

    .intro {
      color: $gray;
    }

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
  .listeditem {
    list-style: none;
    font-family: Nunito;
    font-weight: lighter;

    li {
      padding: 1rem;
    }
    li::before {
      content: "\2022";
      color: $orange;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  blockquote {
    margin-top: 1.5rem;
    color: $orange;
    font-family: Nunito;
    font-weight: bolder;
    font-size: 1.5rem;
    position: relative;
    border-radius: 5px;
    line-height: 1.6rem;
  }
  .header {
    display: flex;
    align-items: center;
    width: 30rem;
    h1 {
      margin-left: 1.3rem;
      @include q-lg-min {
        margin-left: 0px;
      }
    }
    p {
      margin-left: auto;
      margin-right: 1.5rem;
      color: $orange;
      @include q-lg-min {
        margin-right: 0px;
      }
    }
  }
  .tips,
  .hulp {
    .heading {
      margin-top: 5rem;
    }
  }
  .hulp {
    .listeditem {
      li {
        &:before {
          content: "";
        }
      }
    }
    .nextButton {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }
}
</style>
