<template>
  <section class="profile">
    <header>
      <h1>Profiel</h1>
      <router-link to="/profile-edit"></router-link>
    </header>

    <main>
      <article>
        <div class="profile-img" :class="data.profileAvatar">
          <p>
            {{ data.firstName.charAt(0).toUpperCase() }}
            {{ data.surName.charAt(0).toUpperCase() }}
          </p>
        </div>
        <div class="profile-headInfo">
          <h2>{{ data.firstName }} {{ data.surName }}</h2>
          <p><span>icon</span> {{ data.birthDate }}</p>
          <p><span>icon</span> {{ data.typeIllness[0] }}</p>
        </div>
      </article>

      <article>
        <h3>Biografie</h3>
        <p>{{ data.about }}</p>
      </article>

      <article>
        <h3>Oncospecifiek - data pas invullen wnr user op profiel komt</h3>
        <ul>
          <li>
            <p>Type kanker</p>
            <p>{{ data.typeIllness[0] }}</p>
          </li>
          <li>
            <p>Fase</p>
            <p></p>
          </li>
          <li>
            <p>Ziekenhuis</p>
            <p></p>
          </li>
          <li>
            <p>Diagnosejaar</p>
            <p></p>
          </li>
        </ul>
      </article>

      <article>
        <h3>Profielvragen</h3>
        <div :class="data.profileAvatar">
          <h4>vraag</h4>
          <p>antwoord</p>
        </div>
      </article>
    </main>
  </section>
</template>

<script>
export default {
  name: "Profile",
  data() {
    let dataUser = this.$store.state.user;
    return {
      data: dataUser,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/profile/profile.scss";
</style>
