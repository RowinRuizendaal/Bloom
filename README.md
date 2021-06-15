##### Meesterproef @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/RowinRuizendaal/Bloom) ![Badge stating amount of issues open](https://img.shields.io/github/issues/RowinRuizendaal/Bloom) [![](https://img.shields.io/badge/site--status-up-success)](https://bloom-hva.herokuapp.com/) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

# Bloom

![Bloom logo](docs/bloom.png)

_Meesterproef, a course of the minor Web Design & Development. It is a minor of the third year from the study [CMD](https://www.cmd-amsterdam.nl/)._

[Link to live version :rocket:](https://bloom-hva.herokuapp.com/)
### Table of Contents
<div style="margin-left: auto; margin-right: auto;margin: 0 auto;">
    <a href="#rocket-purpose-of-project">🚀 Purpose of Project </a>
    • <a href="#heart_eyes-concept">😍 Concept</a>
    • <a href="#1234-data">🔢 Data</a>
    • <a href="#nerd_face-technical-summary">🤓  Technical summary</a>
    • <a href="#gear-installation">⚙️ Installation</a>
    • <a href="#file_folder-sources">📁 Sources</a>
    • <a href="#cop-license">👮 License</a>
</div>

## :rocket: Purpose of Project

The reason the client started this project is that she has been personally involved in this disease. The client's mother has had breast cancer. She then started to talk a lot with her mother about the process afterward. However, there is still little instruction/approach to be found after the treatment project. It is clear during the treatment process what the approach is, but after that, it stops. Not much is known about that yet. That is why Eva got the idea to investigate this.

## Goal of the application

The purpose of this application is to connect people who have had or still have cancer. These people can tell their story together or find support from other users. The users can therefore find a 'buddy' with this app. The user can also indicate in the app what type of cancer they have had and this means that these people are matched based on the type of cancer.

## :heart_eyes: Concept
### What's it?
**bloom** is an application to connect people with each other who have had or still have cancer, these people can tell share their thought and opinions with others.

### Core feature/user scenario's
- As a user, I want information on relevant topics, so that I know what to expect after the treatment process.
- As a user, I want 1-on-1 contact with fellow sufferers, so that I can reflect on my experiences and strengthen my coping strategies.

### Features
- You can register an account via a Progressive Disclosure register process
- You can login onto your account
- You can assume a lot of information about cancer at the Themes page
- You can see other buddies
- You can filter the buddies
- You can match a buddy by beginning a chat with him/her
- You can chat with a buddy

### Tech-features
#### Passsword hashing
why?
how?
codesnippet?
UX friendly, how?

#### Vuex store encrypting
why?
how?
codesnippet?
UX friendly, how?

#### localStorage
why?
how?
codesnippet?
UX friendly, how?

#### Realtime Chat
This feature is built with socketIO. The package [vue-socket.io](https://vue-socket.io/) helped a lot also. With this feature you can chat with other people. First you join a room, that checks if there is already chat history. When there is, it sends you from the server the chat history. After that you can chat with the person you are in the room.

##### Events
|ClientSide|ServerSide|
|---|---|
|[joinRoom](https://github.com/RowinRuizendaal/Bloom/blob/master/server/app/controllers/socket.controllers.js#L21-L66) |[joinRoomHandler](https://github.com/RowinRuizendaal/Bloom/blob/master/server/app/controllers/socket.controllers.js#L21-L66)|
|[roomData](https://github.com/RowinRuizendaal/Bloom/blob/master/client/src/views/chat/chatDetail.vue#L153-L176)|[roomData](https://github.com/RowinRuizendaal/Bloom/blob/master/server/app/controllers/socket.controllers.js#L58-L61)|
|[newMessage](https://github.com/RowinRuizendaal/Bloom/blob/master/client/src/views/chat/chatDetail.vue#L178-L182)| [newMessageHandler](https://github.com/RowinRuizendaal/Bloom/blob/master/server/app/controllers/socket.controllers.js#L80-L92)|

#### Dynamic backbutton
why?
how?
codesnippet?
UX friendly, how?

## Progressive Web App
A progressive web application (PWA) is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.

Improvements:
- speed

Also this improves the UX a bit, because the speed of the app is improved by the service worker.

### Features
1. Install
You can install the application from the browser to your homescreen. So you can get the whole app experience

2. Cache
The app remembers the pages you have visited. So when you are offline (have no internet connection) you can use the app in the offline mode with all the pages from the cache you have visited. Also when you are online and you visit pages that are in the cache, it optimses the speed of the app.

<img src="docs/pwa/" alt="have to be made - GIF of how to install and start the app" width=350px>

<img src="docs/pwa/pwa-favicon.png" alt="Favicon of the PWA" width=150px>

<img src="docs/pwa/pwa-app.png" alt="User Interface of the PWA" width=500px>

##### [`vue.config.js`](https://github.com/RowinRuizendaal/Bloom/blob/master/client/vue.config.js#L19-L58)
This file takes care of the design of the app if you have it installed on your device. This includes the theme color and favicons.

```js
pwa: {
  manifestOptions: {
    name: "bloom",
    short_name: "bloom",
    start_url: "./",
    theme_color: "#fef1c5",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    icons: [
      {
        src: "./img/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "./img/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "./img/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./img/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "./registerServiceWorker.js",
      // ...other Workbox options...
    },
  },
},
```

##### [`registerServiceWorker.js`](https://github.com/RowinRuizendaal/Bloom/blob/master/client/src/registerServiceWorker.js#L5-L33)
This file creates the service worker and finally caches the visited pages. This makes the app also available offline. When the app uses the visited pages from the cache, it helps to increase the speed of the app.

```js
if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      // eslint-disable-next-line max-len
      console.log("No internet connection found. App is running in offline mode.");
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
```


### User Interface
Screenshots of the pages in the application
<p float="left">

<img src="docs/UI/start.png" alt="The user interface of the start page" width="250"/>

<img src="docs/UI/onboarding.png" alt="The user interface of the onboarding page" width="250"/>

<img src="docs/UI/login.png" alt="The user interface of the login page" width="250"/>

</p>

<p float="left">

<img src="docs/UI/themes.png" alt="The user interface of the themes page" width="250"/>

<img src="docs/UI/profile.png" alt="The user interface of the profile page" width="250"/>

<img src="docs/UI/buddies.png" alt="The user interface of the Buddies page" width="250"/>
</p>

<p float="left">
<img src="docs/UI/chats.png" alt="The user interface of the chats page" width="250"/>

<img src="docs/UI/chat-detail.png" alt="The user interface of the chat-detail page" width="250"/>
</p>

## :1234: Data  
We used Mongoose data schemas to create schemas before we insert the data.
### User schema
lorem ipsum 
This data in db is created by the [createUser function](https://github.com/RowinRuizendaal/Bloom/blob/master/server/app/helpers/db.helpers.js#L41-L67).

```js
{
  firstName: String,
  surName: String,
  emailAddress: String,
  password: String,
  birthDate: String,
  town: String,
  gender: String,
  typeIllness: Array,
  profileAvatar: String,
  about: String,
}
```

### Chat schema
lorem ipsum 
This data is created as ```lorem``` by default when you want to chat with someone. (function object). This data can be manipulated by the accept of the other particicpant. Or delete, then this object will be deleted in the database. Or New message via socket will also be pushed to db for later visit on chat (messages history).

```js
{
  request: {
    creater: String,
    accepted: Boolean,
  },
  participants: Array,
  messages: [
    {
      sender: String,
      content: String,
      time: String,
    },
  ],
}
```


## :nerd_face: Technical summary
This app is built, using:
- _Mobile First technique_
- [npm](https://www.npmjs.com/)
- [Node.js server](https://nodejs.org/)
- [Express router](https://expressjs.com/)
- [Vue frontend framework](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/guide/#the-simplest-store)
- [Vue Router](https://router.vuejs.org/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](http://socket.io/)
- [Heroku deployment](https://www.heroku.com/nodejs)

## Folderstructure
```
📦client
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜browserconfig.xml
 ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┣ 📜mstile-150x150.png
 ┃ ┃ ┣ 📜safari-pinned-tab.svg
 ┃ ┃ ┗ 📜site.webmanifest
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂Nunito
 ┃ ┃ ┃ ┣ 📜Nunito-Black.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-BlackItalic.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Bold.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Bold.woff
 ┃ ┃ ┃ ┣ 📜Nunito-BoldItalic.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-ExtraBold.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-ExtraBold.woff
 ┃ ┃ ┃ ┣ 📜Nunito-ExtraBoldItalic.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-ExtraLight.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-ExtraLightItalic.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Italic.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Light.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Light.woff
 ┃ ┃ ┃ ┣ 📜Nunito-LightItalic.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Regular.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-Regular.woff
 ┃ ┃ ┃ ┣ 📜Nunito-SemiBold.ttf
 ┃ ┃ ┃ ┣ 📜Nunito-SemiBold.woff
 ┃ ┃ ┃ ┗ 📜Nunito-SemiBoldItalic.ttf
 ┃ ┃ ┗ 📂Silka
 ┃ ┃ ┃ ┣ 📜Silka-Bold.ttf
 ┃ ┃ ┃ ┣ 📜Silka-Bold.woff
 ┃ ┃ ┃ ┣ 📜Silka-Light.ttf
 ┃ ┃ ┃ ┣ 📜Silka-Light.woff
 ┃ ┃ ┃ ┣ 📜Silka-Medium.ttf
 ┃ ┃ ┃ ┣ 📜Silka-Medium.woff
 ┃ ┃ ┃ ┣ 📜Silka-Regular.otf
 ┃ ┃ ┃ ┣ 📜Silka-Regular.woff
 ┃ ┃ ┃ ┗ 📜Silka-Thin.ttf
 ┃ ┣ 📂img
 ┃ ┃ ┗ 📂icons
 ┃ ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┃ ┣ 📜android-chrome-maskable-192x192.png
 ┃ ┃ ┃ ┣ 📜android-chrome-maskable-512x512.png
 ┃ ┃ ┃ ┣ 📜apple-touch-icon-120x120.png
 ┃ ┃ ┃ ┣ 📜apple-touch-icon-152x152.png
 ┃ ┃ ┃ ┣ 📜apple-touch-icon-180x180.png
 ┃ ┃ ┃ ┣ 📜apple-touch-icon-60x60.png
 ┃ ┃ ┃ ┣ 📜apple-touch-icon-76x76.png
 ┃ ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┃ ┣ 📜msapplication-icon-144x144.png
 ┃ ┃ ┃ ┣ 📜mstile-150x150.png
 ┃ ┃ ┃ ┗ 📜safari-pinned-tab.svg
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┃ ┣ 📜buddy-selected.svg
 ┃ ┃ ┃ ┃ ┣ 📜buddy.svg
 ┃ ┃ ┃ ┃ ┣ 📜messages-selected.svg
 ┃ ┃ ┃ ┃ ┣ 📜messages.svg
 ┃ ┃ ┃ ┃ ┣ 📜profile-selected.svg
 ┃ ┃ ┃ ┃ ┣ 📜profile.svg
 ┃ ┃ ┃ ┃ ┣ 📜theme-selected.svg
 ┃ ┃ ┃ ┃ ┗ 📜theme.svg
 ┃ ┃ ┃ ┣ 📜age.svg
 ┃ ┃ ┃ ┣ 📜arrow-down.svg
 ┃ ┃ ┃ ┣ 📜arrow.svg
 ┃ ┃ ┃ ┣ 📜check.svg
 ┃ ┃ ┃ ┣ 📜cross.svg
 ┃ ┃ ┃ ┣ 📜error.svg
 ┃ ┃ ┃ ┣ 📜filter.svg
 ┃ ┃ ┃ ┣ 📜mic.svg
 ┃ ┃ ┃ ┣ 📜more.svg
 ┃ ┃ ┃ ┣ 📜plus.svg
 ┃ ┃ ┃ ┣ 📜send.svg
 ┃ ┃ ┃ ┣ 📜settings.svg
 ┃ ┃ ┃ ┗ 📜type.svg
 ┃ ┃ ┣ 📂onboarding
 ┃ ┃ ┃ ┣ 📜onboarding-1.jpg
 ┃ ┃ ┃ ┣ 📜onboarding-2.jpg
 ┃ ┃ ┃ ┗ 📜onboarding-3.jpg
 ┃ ┃ ┣ 📂scss
 ┃ ┃ ┃ ┣ 📂variables
 ┃ ┃ ┃ ┃ ┣ 📜_assets.scss
 ┃ ┃ ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┃ ┃ ┣ 📜_responsive.scss
 ┃ ┃ ┃ ┃ ┗ 📜_typography.scss
 ┃ ┃ ┃ ┗ 📜main.scss
 ┃ ┃ ┣ 📂svg
 ┃ ┃ ┃ ┣ 📜background.svg
 ┃ ┃ ┃ ┣ 📜chevron.svg
 ┃ ┃ ┃ ┣ 📜signup-background-2.svg
 ┃ ┃ ┃ ┣ 📜signup-background-3.svg
 ┃ ┃ ┃ ┣ 📜signup-background-4.svg
 ┃ ┃ ┃ ┣ 📜signup-background.svg
 ┃ ┃ ┃ ┗ 📜zoek.svg
 ┃ ┃ ┣ 📂themes
 ┃ ┃ ┃ ┣ 📜1.jpg
 ┃ ┃ ┃ ┣ 📜2.jpg
 ┃ ┃ ┃ ┣ 📜3.jpg
 ┃ ┃ ┃ ┣ 📜4.jpg
 ┃ ┃ ┃ ┗ 📜5.jpg
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂buddies
 ┃ ┃ ┃ ┣ 📜buddies.scss
 ┃ ┃ ┃ ┗ 📜buddyDetail.scss
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜button.scss
 ┃ ┃ ┃ ┗ 📜button.vue
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📜chatDetail.scss
 ┃ ┃ ┃ ┣ 📜chatOverview.scss
 ┃ ┃ ┃ ┗ 📜chatRequest.scss
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┣ 📜error.scss
 ┃ ┃ ┃ ┗ 📜error.vue
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┗ 📜home.scss
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜login.scss
 ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┣ 📜nav.scss
 ┃ ┃ ┃ ┗ 📜nav.vue
 ┃ ┃ ┣ 📂onboarding
 ┃ ┃ ┃ ┗ 📜onboarding.scss
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┗ 📜profile.scss
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┗ 📜register.scss
 ┃ ┃ ┣ 📂textarea
 ┃ ┃ ┃ ┣ 📜textarea.scss
 ┃ ┃ ┃ ┗ 📜textarea.vue
 ┃ ┃ ┗ 📂themes
 ┃ ┃ ┃ ┣ 📜slug.scss
 ┃ ┃ ┃ ┗ 📜theme.scss
 ┃ ┣ 📂router
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜DataService.js
 ┃ ┣ 📂store
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂views
 ┃ ┃ ┣ 📂buddies
 ┃ ┃ ┃ ┣ 📜buddies.vue
 ┃ ┃ ┃ ┗ 📜buddyDetail.vue
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📜chatDetail.vue
 ┃ ┃ ┃ ┣ 📜chatOverview.vue
 ┃ ┃ ┃ ┗ 📜chatRequest.vue
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┃ ┣ 📜eightStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜fifthStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜firstStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜fourthStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┃ ┣ 📜readyStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜secondStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜seventhStep.vue
 ┃ ┃ ┃ ┃ ┣ 📜sixthStep.vue
 ┃ ┃ ┃ ┃ ┗ 📜thirdStep.vue
 ┃ ┃ ┃ ┣ 📜ForgotPassword.vue
 ┃ ┃ ┃ ┗ 📜Login.vue
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┗ 📜Profile.vue
 ┃ ┃ ┣ 📂themes
 ┃ ┃ ┃ ┣ 📜slug.vue
 ┃ ┃ ┃ ┗ 📜theme.vue
 ┃ ┃ ┣ 📜Home.vue
 ┃ ┃ ┗ 📜onboarding.vue
 ┃ ┣ 📜App.vue
 ┃ ┣ 📜http-common.js
 ┃ ┣ 📜main.js
 ┃ ┗ 📜registerServiceWorker.js
 ┣ 📜.editorconfig
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜babel.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜vue.config.js
 ┗ 📜yarn.lock
 ```

## :gear: Installation
>⚠️ To use the application in development, you need a MongoDB database and a URI to connect with it! Please contact us if you want to run the project.

1. Clone the repository:  
```
git clone https://github.com/RowinRuizendaal/Bloom.git
```

2. Install dependencies client & server   
``` 
cd client && npm install

cd server && npm install
```

3. To run the app   
```
cd client && npm run serve

cd server && npm run dev
```

4. Go to [localhost](http://localhost:8080/) in the browser and voilà :sparkles:
```
http://localhost:8080/
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## :file_folder: Sources
Credits to [Eva Valkenburg](https://www.evavalkenburg.nl/) for giving us this awesome exercise.

### Code sources
- Stackoverflow (n.d.). Searching for answers on dev questions - Stackoverflow. Retrieved 18 May 2021 from https://www.stackoverflow.com

- https://bezkoder.com/vue-node-express-mongodb-mevn-crud/

- https://bezkoder.com/vue-js-crud-app/

## :cop: License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project from [Ralf](https://github.com/ralfz123) and [Rowin](https://github.com/RowinRuizendaal) has a [MIT © License](https://github.com/RowinRuizendaal/Bloom/blob/main/LICENSE)




