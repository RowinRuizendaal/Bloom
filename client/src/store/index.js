import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themelist: [
      {
        id: 1,
        name: "Vermoeidheid",
        image: "1.jpg",
        intro:
          "De behandeling van kanker kost veel energie. Dat is logisch. Je lichaam heeft tijd nodig om te herstellen. Daarnaast moet je alle emoties en gebeurtenissen verwerken. Ook dat kost energie.",
        p1: "Meestal ben je na een paar maanden minder moe. Maar je kunt ook lang na de behandeling nog erg moe zijn. Ben je zes maanden na de behandeling nog steeds erg moe? En kan de arts daar geen lichamelijke oorzaak voor vinden? Dan heb je last van langdurige vermoeidheid.",
        bulletlist: [
          "Je bent plotseling moe maar je weet niet waarom",
          "De vermoeidheid voelt alsof je uitgeput bent. Je bent al erg moe na een eenvoudig klusje.",
          "Bijvoorbeeld afwassen of stofzuigen. Je bent elke dag moe. De vermoeidheid gaat niet over. Ook niet als je even gaat zitten en uitrust.",
        ],
        quote:
          "Ik mezelf behoorlijk uitgeput. Dit zorgt voor vermoeidheid zowel lichamelijk als mentaal",
      },
      { id: 2, name: "Angst", image: "1.jpg" },
      { id: 3, name: "Somberheid" },
      { id: 4, name: "Mijn relatie" },
      { id: 5, name: "Geldzaken & werk" },
      { id: 6, name: "Lichaam & uiterlijk" },
    ],
    // Onboarding states
    activeIndex: 0,
    Onboardingmax: 3,
  },
  mutations: {
    nextSlide(state, index) {
      // check for bulletpoints
      if (index) {
        return (state.activeIndex = index - 1);
      }
      if (state.activeIndex === state.Onboardingmax - 1) {
        return (state.activeIndex = 0);
      }
      return state.activeIndex++;
    },
  },
  actions: {},
  modules: {},
  getters: {
    themelist: (state) => {
      return state.themelist;
    },
    theme: (state) => (id) => {
      console.log(id);
      return state.themelist.find((theme) => theme.id === id);
    },
  },
});
