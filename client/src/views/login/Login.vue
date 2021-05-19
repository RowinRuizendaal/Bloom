<template>
  <div class="login">
    <h2>Login<h2>
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
          <a href="/">Registreren</a>
        </legend>
      </fieldset>
    </form>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Login',
  // components: {
  //   HelloWorld,
  // },
};
</script>
