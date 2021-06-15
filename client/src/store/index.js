import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    //Register user
    user: {},
    chatRequests: [],
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
        quote: `"Ik ben behoorlijk uitgeput. Dit zorgt voor vermoeidheid zowel lichamelijk als mentaal"`,
        klachtenheader: "Andere klachten",
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
            url: "https://www.haaglandenmc.nl/",
          },
          {
            website: "Kenniscentrum Chronische Vermoeidheid",
            url: "https://nkcv.nl/",
          },
          {
            website: "Psychologenpraktijk M. Kalogridi",
            url: "https://kalogridi.nl/",
          },
          {
            website: "Eerstelijnspsychologiepraktijk Vosmeer",
            url: "https://www.zorgkaartnederland.nl/zorginstelling/psychologiepraktijk-en-psychotherapiepraktijk-eerstelijns-psychologie-praktijk-m-c-vosmeer-den-haag-3023216",
          },
        ],
      },
      {
        // Klachten
        id: 2,
        name: "Angst",
        image: "2.jpg",
        background: "right",
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
        quote: `“Tijdens het behandelingstraject zit je heel erg vast in je angsten. Nu komt dat er langzaam uit.” `,
        klachtenheader: "",
        klachten1: "",
        klachten2: "",

        // Tips
        heading2: "Tips om je minder angstig te voelen",
        tipslijst: [
          "Praat met iemand over je angst en je gevoelens.",
          "Doe dingen die je leuk vindt en waar je van ontspant.",
          "Zoek afleiding. Plan bijvoorbeeld een uitje. Dan heb je iets om naar uit te kijken.",
          "Doe oefeningen om te ontspannen en rustig te ademen. Bijvoorbeeld door yoga of mindfulness te doen.",
        ],

        // Hulp
        heading3: "Hulp bij angst",
        p2: "Voel je je vaak angstig? Bespreek dat dan met je huisarts. Of in het ziekenhuis met de verpleegkundige of arts. Vaak lucht het op om over je angst te praten. En je kan tips krijgen om je angst te verminderen. Je huisarts of arts kan je doorverwijzen naar een therapeut. Zo’n zorgverlener kan je helpen om beter met je angst om te gaan. Bijvoorbeeld door met je te praten. Of met een therapie.Je kunt ook over je angst praten met lotgenoten. Die ontmoet je in een inloophuis of bij een patiëntenorganisatie.Uit je je gevoelens liever op een andere manier, bijvoorbeeld in schilderen, dans of muziek? Dan kun je terecht bij een vaktherapeut.",
        links: [
          {
            website: "Haaglanden Medisch Centrum",
            url: "https://www.haaglandenmc.nl/",
          },
          {
            website: "Module Angst en paniek",
            url: "https://www.embloom.nl/content/angst-en-paniek/",
          },
          {
            website: "Stichting Kanker in Beeld",
            url: "https://www.kankerinbeeld.nl/",
          },
          {
            website: "Zelfhulptraining Minder angst na kanker",
            url: "https://www.hdi.nl/minder-angst-na-kanker/#:~:text=In%20deze%20zelfhulptraining%20leer%20je,je%20hiermee%20om%20kunt%20gaan.",
          },
          {
            website: "Psychologenpraktijk M. Kalogridi",
            url: "https://kalogridi.nl/",
          },
          {
            website: "Eerstelijnspsychologiepraktijk Vosmeer",
            url: "https://www.zorgkaartnederland.nl/zorginstelling/psychologiepraktijk-en-psychotherapiepraktijk-eerstelijns-psychologie-praktijk-m-c-vosmeer-den-haag-3023216",
          },
        ],
      },
      {
        // Klachten
        id: 3,
        name: "Somberheid",
        image: "3.jpg",
        background: "left",
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
        klachtenheader: "",
        klachten1: "",
        klachten2: "",

        // Tips
        heading2: "Tips om je minder somber te voelen",
        tipslijst: [
          "Praat met iemand over je sombere gevoelens.",
          "Denk niet steeds aan de toekomst. Probeer vooral in het hier en nu te leven.",
          "Zeg hardop ‘stop’ tegen jezelf als je merkt dat je piekert.",
          "Zorg voor voldoende slaap.",
          "Doe dingen die je leuk vindt en waar je van ontspant.",
          "Doe oefeningen om te ontspannen en rustig te ademen. Bijvoorbeeld door yoga of mindfulness te doen.",
          "Breng structuur aan in je dag. Probeer op vaste tijden op te staan en te gaan slapen. Eet gezond en op dezelfde tijden.",
          "Onderneem iets. Plan bijvoorbeeld een uitje. Dan heb je iets om naar uit te kijken. Je hebt er waarschijnlijk geen zin in. Maar je bent wel even afgeleid van je sombere gedachten.",
        ],

        // Hulp
        heading3: "Hulp bij somberheid",
        p2: "Al weken lang somber? Ga dan naar je huisarts. Je huisarts kan bijvoorbeeld medicijnen voorschrijven. Die helpen om rustiger te worden. De huisarts kan je ook doorverwijzen naar een gespreksgroep. In een gespreksgroep praat je met mensen die hetzelfde voelen als jij. Je huisarts kan je tips geven over verschillende trainingen en activiteiten. Die helpen je om minder te piekeren. Vind je praten lastig? Of uit je je gevoelens liever op een andere manier? Bijvoorbeeld door te schilderen, of aan muziek of beweging te doen. Dan kun je terecht bij een vaktherapeut.",
        links: [
          {
            website: "Haaglanden Medisch Centrum",
            url: "https://www.haaglandenmc.nl/",
          },
          {
            website: "Cursus In de put uit de put",
            url: "https://google.com",
          },
          {
            website: "Module Depressie",
            url: "https://google.com",
          },
          {
            website: "Stichting Kanker in Beeld",
            url: "https://www.kankerinbeeld.nl/",
          },
          {
            website: "Psychologenpraktijk M. Kalogridi",
            url: "https://kalogridi.nl/",
          },
          {
            website: "Eerstelijnspsychologiepraktijk Vosmeer",
            url: "https://google.com",
          },
        ],
      },
      {
        // Klachten
        id: 4,
        name: "Mijn relatie",
        image: "4.jpg",
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
        quote: `“Wij hebben geen standaard relatieproblemen, maar we hebben kanker tussen ons instaan.”`,
        klachtenheader: "Alles is anders",
        klachten1:
          "Kanker, de behandelingen en alle veranderingen moet je verwerken. Iedereen doet dat op z’n eigen manier. Je partner wil er misschien elke dag over praten en jij niet. Of omgekeerd. Hierdoor kun je relatieproblemen krijgen. Die problemen kunnen je extra onzeker of somber maken. Weet dat je niet de enige bent.",
        klachten2: "",

        // Tips
        heading2: "Tips om relatieproblemen te voorkomen",
        tipslijst: [
          "Praat met iemand over je sombere gevoelens.",
          "Praat erover en doe dat zo open en eerlijk mogelijk. Zo zorg je er samen voor dat jullie geen relatieproblemen krijgen. Of dat die worden opgelost.",
          "Sommige dingen wil je misschien niet met je partner bespreken. Of het lukt niet om er met je partner over te praten. Zoek dan steun bij iemand anders. Bijvoorbeeld bij een goede vriend of vriendin. Bij je huisarts. Of bij een geestelijk verzorger, maatschappelijk werker of therapeut.",
        ],

        // Hulp
        heading3: "Hulp je kinderen betrekken?",
        p2: "Kanker heeft ook invloed op het leven van je kind of kinderen. Hoe ga je daarmee om?",
        links: [
          {
            website: "Haaglanden Medisch Centrum",
            url: "https://www.haaglandenmc.nl/",
          },
          {
            website: "Nederlandse Vereniging voor Relatietherapie",
            url: "https://www.nvrg.nl/home",
          },
          {
            website: "Module Relatieproblemen",
            url: "https://google.com",
          },
          {
            website: "Seksuologiepraktijk Den Haag",
            url: "https://www.verwijsgidskanker.nl/organisatie/3273/seksuologiepraktijk-den-haag",
          },
          {
            website: "CenSeRe",
            url: "https://censere.nl/",
          },
        ],
      },
      {
        // Klachten
        id: 5,
        name: "Geld en werk",
        image: "5.jpg",
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
        quote: `“Ik vond het moeilijk om op werk over m’n klachten te praten. Het gesprek met mijn teamleider hielp.”`,
        klachtenheader: "",
        klachten1: "",
        klachten2: "",

        // Tips
        heading2: "Tips om geldzorgen te verminderen",
        tipslijst: [
          "Praat met iemand over je geldzorgen en problemen. Bijvoorbeeld met je huisarts. Die kan je doorverwijzen naar een maatschappelijk werker.",
          "Je kunt ook praten met je leidinggevende of met een vertrouwenspersoon op je werk. Of je kunt een afspraak maken met een schuldhulpverlener van je gemeente.",
        ],

        // Hulp
        heading3: "Hulpaanbieders bij jou in de buurt",
        p2: "Je kunt bij onderstaande hulpaanbieders terecht met langdurige relatieproblemen.",
        links: [
          {
            website: "Haaglanden Medisch Centrum",
            url: "https://www.haaglandenmc.nl/",
          },
          {
            website: "Kans Tegen Kanker",
            url: "https://www.kanstegenkanker.nl/",
          },
          {
            website: "Module Geldzorgen",
            url: "https://google.com",
          },
          {
            website: "Zelfjeschuldenregelen",
            url: "https://google.com",
          },
          {
            website: "Nibud",
            url: "https://www.nibud.nl/",
          },
        ],
      },
      {
        // Klachten
        id: 6,
        name: "Lichaam & uiterlijk",
        image: "1.jpg",
        background: "right",
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
        quote: `“Ik vond het moeilijk om op werk over m’n klachten te praten. Het gesprek met mijn teamleider hielp.”`,
        klachten1: "",
        klachten2: "",

        // Tips
        heading2: "Tips om geldzorgen te verminderen",
        tipslijst: [
          "Praat met iemand over je geldzorgen en problemen. Bijvoorbeeld met je huisarts. Die kan je doorverwijzen naar een maatschappelijk werker.",
          "Je kunt ook praten met je leidinggevende of met een vertrouwenspersoon op je werk. Of je kunt een afspraak maken met een schuldhulpverlener van je gemeente.",
        ],

        // Hulp
        heading3: "Hulpaanbieders bij jou in de buurt",
        p2: "Je kunt bij onderstaande hulpaanbieders terecht met langdurige relatieproblemen.",
        links: [
          {
            website: "Haaglanden Medisch Centrum",
            url: "https://www.haaglandenmc.nl/",
          },
          {
            website: "Kenniscentrum Chronische Vermoeidheid",
            url: "https://nkcv.nl/",
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
    ],
    // Onboarding states
    activeIndex: 0,
    Onboardingmax: 3,
  },
  mutations: {
    // Set state of the bullet points
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

    // Step 1
    updateStateFirstName(state, value) {
      state.user.firstName = value;
    },

    updateStateSurName(state, value) {
      state.user.surName = value;
    },

    // Step 2
    updateStateBirthDate(state, value) {
      state.user.birthDate = value;
    },

    // Step 3
    updateStateTown(state, value) {
      state.user.town = value;
    },

    // Step 4
    updateStateGender(state, value) {
      state.user.gender = value;
    },

    // Step 5
    updateStateTypeIllness(state, value) {
      state.user.typeIllness = value;
    },

    // Step 6
    updateStateProfileAvatar(state, value) {
      state.user.profileAvatar = value;
    },

    // Step 7
    updateStateAbout(state, value) {
      state.user.about = value;
    },

    // Step 8
    updateStateEmailAddress(state, value) {
      state.user.emailAddress = value;
    },

    // Step 9
    updateStatePassword(state, value) {
      state.user.password = value;
    },

    // store user data when logged in
    updateUser(state, value) {
      state.user = value;
      state.loggedIn = true;
    },
  },
  actions: {},
  modules: {},
  getters: {
    themelist: (state) => {
      return state.themelist;
    },
    theme: (state) => (id) => {
      return state.themelist.find((theme) => theme.id === id);
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
