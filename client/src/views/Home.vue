<template>
  <main class="home">
    <section class="index__page">
      <article>
        <p>Welkom bij</p>
        <h1>bloom</h1>
      </article>
      <router-link to="/onboarding" class="start">Starten</router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
@import "@/components/home/home.scss";
</style>
