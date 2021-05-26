<template>
  <!-- <label for="profileAvatar"> -->
  <div>
    <h2>Kies een profel pictogram</h2>
    <p>
      Je kunt kiezen voor je
      <span class="span">memoji</span>
      of initialen.
    </p>

    <div class="msg">
      <p>
        Memoji is een vorm van het weergeven van een karakter, wat erg persoonlijk is, maar niet
        privacygevoelig als bij een foto.
      </p>
    </div>

    <!-- <input
      type="radio"
      id="profileAvatar"
      name="profileAvatar"
      v-model="profileAvatar"
      value="pic-1"
    />
    Pic1 -->

    <ul class="six">
      <li v-for="(item, index) in avatars" :key="index">
        <div>
          <input
            type="radio"
            :id="item"
            :value="item"
            name="profileAvatar"
            v-model="profileAvatar"
          />
          <label :for="item">{{ item }}</label>
        </div>
      </li>
    </ul>
  </div>
  <!-- </label> -->
</template>

<script>
// import DataService from "../../services/DataService.js";

export default {
  data() {
    return {
      profileAvatar: "",
      avatars: [1, 2, 3, 4, 5, 6, "AJ", "AJ", "AJ"],
    };
  },
};
</script>

<style lang="scss">
.six {
  display: grid;
  grid-template-columns: 6em 6em 6em;
  grid-template-rows: 6em 6em 6em;
}

.span {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

div.msg {
  /* opacity: 0;  */
  position: absolute;
  z-index: 1;
  top: 0.5em;
  min-width: 330px;
  padding: 0.51em;
  text-shadow: none;
  border-radius: 5px;
  background-color: crimson;
  color: white;
  font-size: 0.7rem;
}
</style>
