<template>
  <section class="index__page">
    <article>
      <p>Welkom bij</p>
      <h1>Bloom</h1>
    </article>
    <router-link to="/about" active-class="start">Starten</router-link>
  </section>
</template>

<script>
export default {
  name: "Home",
  //   components: {
  //     HelloWorld,
  //   },
};
</script>

<style lang="scss">
.index__page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../assets/svg/achtergrond.svg");
  background-position: center;
  background-size: cover 100% 100%;
  background-repeat: no-repeat;
  @include q-lg-min {
    background-size: cover;
  }
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-weight: bold;
      font-size: 16px;
      color: rgb(114, 109, 97);
    }
    h1 {
      color: $orange;
      font-size: 48px;
      margin-bottom: 5rem;
    }
  }
  .start {
    color: $orange;
    font-size: 21px;
    font-weight: bold;
  }
}
</style>
