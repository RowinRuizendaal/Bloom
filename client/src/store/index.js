import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themelist: [
      {
        // Klachten
        id: 1,
        name: "Vermoeidheid",
        image: "1.jpg",
        intro:
          "De behandeling van kanker kost veel energie. Dat is logisch. Je lichaam heeft tijd nodig om te herstellen. Daarnaast moet je alle emoties en gebeurtenissen verwerken. Ook dat kost energie.",
        p1: "Meestal ben je na een paar maanden minder moe. Maar je kunt ook lang na de behandeling nog erg moe zijn. Ben je zes maanden na de behandeling nog steeds erg moe? En kan de arts daar geen lichamelijke oorzaak voor vinden? Dan heb je last van langdurige vermoeidheid.",
        klachtenlijst: [
          "Je bent plotseling moe maar je weet niet waarom",
          "De vermoeidheid voelt alsof je uitgeput bent. Je bent al erg moe na een eenvoudig klusje.",
          "Bijvoorbeeld afwassen of stofzuigen. Je bent elke dag moe. De vermoeidheid gaat niet over. Ook niet als je even gaat zitten en uitrust.",
        ],
        quote: `"Ik mezelf behoorlijk uitgeput. Dit zorgt voor vermoeidheid zowel lichamelijk als mentaal"`,
        klachten1:
          "Als je erg moe bent, heb je weinig energie en kun je weinig doen. Dat heeft invloed op je emoties en gevoelens. Je bent bijvoorbeeld snel boos of somber. Mensen begrijpen vaak niet hoe het is om steeds moe te zijn. Dat kan je eenzaam maken.",
        klachten2:
          "Door vermoeidheid werken ook je hersenen minder goed. Soms kun je dan dingen niet goed onthouden. Of kun je je moeilijk concentreren.",

        // Tips
        heading2: "Tips om je minder moe te voelen",
        tipslijst: [
          "Eet gezond en op vaste tijden. Sla geen maaltijden over.",
          "Zorg dat je voldoende beweegt, ook al ben je moe. Bijvoorbeeld door een stukje te wandelen of fietsen. Regelmatig bewegen is goed voor je conditie, ook voor je herstel en je humeur.",
          "Plan niet teveel dingen op een dag. Neem tussendoor regelmatig even rust.",
          "Verdeel de dingen die je wilt doen over de week.",
          "Ga op een vaste tijd naar bed. Probeer overdag zo min mogelijk te slapen of helemaal niet te slapen.",
        ],

        // Hulp
        heading3: "Hulp bij langdurige vermoeidheid",
        p2: "Blijf je na je behandeling maandenlang heel erg moe? Dan is het belangrijk dat je hulp zoekt.  Je huisarts, arts in het ziekenhuis of verpleegkundige kan je doorverwijzen naar een therapeut. Of naar een behandelcentrum voor langdurige vermoeidheid.",
        links: [
          {
            website: "Haaglanden Medisch Centrum",
            url: "https://google.com",
          },
          {
            website: "Kenniscentrum Chronische Vermoeidheid",
            url: "https://google.com",
          },
          {
            website: "Psychologenpraktijk M. Kalogridi",
            url: "https://google.com",
          },
          {
            website: "Eerstelijnspsychologiepraktijk Vosmeer",
            url: "https://google.com",
          },
        ],
      },
      {
        id: 2,
        name: "Angst",
        image: "1.jpg",
        intro:
          "Een ernstige ziekte kan je angstig maken. Dat is begrijpelijk. Je leven en toekomstplannen zijn ingrijpend veranderd. Veel mensen met kanker zijn angstig. Dat is een normale reactie. Ben je vaak angstig en gaat dat gevoel niet over? Dan is het belangrijk dat je hulp zoekt.",
        p1: "",
        klachtenlijst: [
          "Je kunt door de angst niet meer functioneren in het dagelijks leven.",
          "Je durft geen plannen te maken voor de toekomst.",
          "Je controleert je lichaam vaker dan nodig is.",
          "Je durft niet naar het ziekenhuis te gaan voor de controles. Of je gaat juist heel vaak naar de dokter.",
          "Je piekert veel en je slaapt slecht.",
          "Je kunt je niet goed concentreren.",
          "Je hebt last van hartkloppingen, je trilt en bent vaak duizelig.",
        ],
        quote: `“Tijdens het behandelingstraject zit je heel erg vast in je angsten. Nu komt dat er langzaam uit.”`,
      },
      {
        id: 3,
        name: "Somberheid",
        image: "1.jpg",
        intro:
          "Een ernstige ziekte kan je somber maken. Dat is heel begrijpelijk. Je dagelijks leven en je toekomstplannen zijn ingrijpend veranderd. Ben je vaak somber en gaat dat gevoel niet over? Dan is het belangrijk dat je hulp zoekt.",
        p1: "",
        klachtenlijst: [
          "Je hebt nergens zin in. Veel dingen interesseren je niet meer.",
          "Je hebt geen zin om met vrienden af te spreken.",
          "Je hebt ook geen zin om te sporten of te werken.",
          "Je kunt je nergens op verheugen.",
          "Je piekert veel en je slaapt niet goed.",
          "Niemand kan je opvrolijken. Ook je vrienden of partner niet.",
        ],
        quote: `“Ik zeg tegen mijn vrienden dat het goed met me gaat. Maar ik voel me vaak eenzaam en somber.”`,
      },
      {
        id: 4,
        name: "Mijn relatie",
        image: "1.jpg",
        intro:
          "Kanker zet je leven op z’n kop. Niet alleen je eigen leven. Ook het leven van je partner. Jullie moeten allebei wennen aan de nieuwe situatie. En jullie moeten allebei de gebeurtenissen en emoties verwerken. Hierdoor kunnen relatieproblemen ontstaan. Praat er samen over. En zoek hulp als jullie er samen niet uitkomen.",
        p1: "",
        klachtenlijst: [
          "Je hebt het gevoel dat je partner je niet begrijpt.",
          "Je voelt je eenzaam in je relatie.",
          "Je krijgt van je partner niet de steun die je nodig hebt.",
          "Je vindt het moeilijk om met je partner over je ziekte en je gevoelens te praten.",
          "Je hebt minder behoefte aan seks en intimiteit.",
          "Je hebt het gevoel dat je partner jou door je ziekte niet meer aantrekkelijk vindt.",
          "Je vindt het moeilijk om met je partner over seks en intimiteit te praten.",
          "Je bent bang dat je partner je verlaat omdat je ziek bent.",
        ],
        quote:
          "“Wij hebben geen standaard relatieproblemen, maar we hebben kanker tussen ons instaan.”",
      },
      {
        id: 5,
        name: "Geldzaken & werk",
        image: "1.jpg",
        intro:
          "Door een ernstige ziekte ontstaan soms geldproblemen. Bijvoorbeeld door extra kosten. Of doordat je minder of helemaal niet kunt werken door je ziekte. Heb je geldproblemen of schulden? Praat erover en zoek hulp.",
        p1: "Geldzorgen kunnen je somber, onzeker of angstig maken. Ook kun je er slecht door gaan slapen. Weet dat je niet de enige bent. Veel mensen met kanker hebben geldproblemen. Vaak schamen ze zich. Ze praten er daarom liever niet over. Dat maakt de geldzorgen en negatieve gevoelens vaak alleen maar erger.",
        klachtenlijst: [
          "Je hebt geldzorgen en je piekert veel.",
          "Je weet niet hoe je alle rekeningen moet betalen.",
          "Je schaamt je voor je geldproblemen. Daarom praat je er met niemand over. Dat geeft je een eenzaam gevoel.",
          "Je slaapt niet goed door de geldzorgen.",
          "Je maakt de post niet meer open. Je bent bang dat het rekeningen zijn.",
          "Je bent bang dat je dingen moet verkopen. Bijvoorbeeld je auto of je huis.",
        ],
        quote:
          "“Ik vond het moeilijk om op werk over m’n klachten te praten. Het gesprek met mijn teamleider hielp.”",
      },
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
