<template>
  <section class="login">
    <h1>Bloom</h1>
    <h2>Login</h2>
    <form action="/" method="POST" enctype="application/x-www-form-urlencoded">
      <fieldset>
        <legend>
          <label for="emailAddress"
            >E-mailadres
            <input type="text" id="emailAddress" name="emailAddress" />
          </label>

          <label for="password"
            >Wachtwoord
            <input type="password" id="password" name="password" />
          </label>
          <button type="Submit">Inloggen</button>
          <router-link to="/register" active-class="register">Registreren</router-link>
        </legend>
      </fieldset>
    </form>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/svg/achtergrond.svg");
  background-position: center;
  background-size: cover 100% 100%;
  background-repeat: no-repeat;
  @include q-lg-min {
    background-size: cover;
  }

  h1 {
    color: $orange;
    font-size: 48px;
    margin-bottom: 5rem;
  }

  // import button component
  button {
    color: red;
  }

  .start {
    color: $orange;
    font-size: 21px;
    font-weight: bold;
  }
}
</style>
