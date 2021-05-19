<template>
  <div class="register">
    <h2>Register</h2>
    <form action="/register" method="POST" enctype="application/x-www-form-urlencoded">
      <fieldset>
        <legend>
          <label for="firstName"
            >Voornaam
            <input type="text" id="firstName" name="firstName" />
          </label>
          <label for="surName"
            >Achternaam
            <input type="text" id="surName" name="surName" />
          </label>

          <label for="emailAddress"
            >E-mailadres
            <input type="text" id="emailAddress" name="emailAddress" />
          </label>

          <label for="password"
          >Wachtwoord
          <input type="password" id="password" name="password" />
        </label>

          <label for="birthDate"
            >Geboortedatum
            <input type="date" id="birthDate" name="birthDate" />
          </label>

          <label for="town"
            >Woonplaats
            <input type="text" id="town" name="town" />
          </label>

          <h3>gender</h3>

          <input type="radio" id="men" value="Man" name="gender" />
          <label for="men">Man</label>

          <input type="radio" id="woman" value="Vrouw" name="gender" />
          <label for="woman">Vrouw</label>

          <input type="radio" id="neutral" value="Vrouw" name="gender" />
          <label for="neutral">Neutraal</label>

          <label for="typeIllness"
            >Type kanker
            <input type="text" id="typeIllness" name="typeIllness" />
          </label>

          <label for="profileAvatar"
            >Profiel avatar (radio btns met created avatars) (render in
            template)
            <input type="text" id="profileAvatar" name="profileAvatar" />
          </label>

          <label for="about"
            >Vertel iets over jezelf
            <input type="textarea" id="about" name="about" />
          </label>

          <button type="Submit">Aanmaken</button>
        </legend>
      </fieldset>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Register',
  components: {
    HelloWorld,
  },
};
</script>
