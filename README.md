##### Meesterproef @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/ralfz123/browser-technologies-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/ralfz123/browser-technologies-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://bloom-hva.herokuapp.com/) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

# Bloom

![Bloom logo](docs/bloom.png)

_Meesterproef, a course of the minor Web Design & Development. It is a minor of the third year from the study [CMD](https://www.cmd-amsterdam.nl/)._

[Link to live version :rocket:](https://bloom-hva.herokuapp.com/)
### Table of Contents
<div style="margin-left: auto; margin-right: auto;margin: 0 auto;">
    <a href="#rocket-purpose-of-project">🚀 Purpose of Project <a>
    • <a href="#heart_eyes-concept">😍 Concept<a>
    • <a href="#1234-data">🔢 Data<a>
    • <a href="#nerd_face-technical-summary">🤓  Technical summary<a>
    • <a href="#gear-installation">⚙️ Installation<a>
    • <a href="#file_folder-sources">📁 Sources<a>
    • <a href="#cop-license">👮 License<a>
</div>

## :rocket: Purpose of Project

The reason the client started this project is that she has been personally involved in this disease. The client's mother has had breast cancer. She then started to talk a lot with her mother about the process afterward. However, there is still little instruction/approach to be found after the treatment project. It is clear during the treatment process what the approach is, but after that, it stops. Not much is known about that yet. That is why Eva got the idea to investigate this.

## Goal of the application

The purpose of this application is to connect people who have had or still have cancer. These people can tell their story together or find support from other users. The users can therefore find a 'buddy' with this app. The user can also indicate in the app what type of cancer they have had and this means that these people are matched based on the type of cancer.



## :heart_eyes: Concept
### What's it?
**Bloom** is an application to connect people with each other who have had or still have cancer, these people can tell share their thought and opinions with others.

### Core feature/user scenario's
- As a user, I want information on relevant topics, so that I know what to expect after the treatment process.
- As a user, I want 1 on 1 contact with fellow sufferers, so that I can reflect on my experiences and strengthen my coping strategies.



## :1234: Data  
We used Mongoose data schemas to create schemas before we insert the data.
### User schema
```js
{
  firstName: String,
  surName: String,
  emailAddress: String,
  password: String,
  birthDate: String,
  town: String,
  gender: String,
  typeIllness: String,
  profileAvatar: String,
  about: String,
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
- [Heroku deployment](https://www.heroku.com/nodejs)


## :gear: Installation
>⚠️ To use the application in development, you need a MongoDB database and a URI to connect with it! Contact us please if you want to run the project.

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
Credits to [Eva Valkenburg]() for giving us this awesome exercise.

### Code sources
- Stackoverflow (n.d.). Searching for answers on dev questions - Stackoverflow. Retrieved 18 May 2021 from https://www.stackoverflow.com

- https://bezkoder.com/vue-node-express-mongodb-mevn-crud/

- https://bezkoder.com/vue-js-crud-app/

## :cop: License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project from [Ralf](https://github.com/ralfz123) and [Rowin](https://github.com/RowinRuizendaal) has a [MIT © License](https://github.com/ralfz123/browser-technologies-2021/blob/main/LICENSE)

