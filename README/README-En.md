# Formz
The concept was to create a form that when sent, sends a link via text message to the user, which displays the information previously entered.

This project was developed with React including create-react-app, the OVH API, normalize.css, react-router, firebase, uuid and react-loader-spinner.


[DEMO.](#demo)

[Launch it yourself.](#run-it-via-localhost)

## What does this project use:
- create-react-app, allows you to start a react app quickly. https://github.com/facebook/create-react-app
- react-loader-spinner, a loading screen for react. https://github.com/mhnpd/react-loader-spinner
- react-router, a router for react. https://github.com/ReactTraining/react-router
- firebase, is used to temporarily store data. https://firebase.google.com/ - https://github.com/firebase/firebase-js-sdk
- l'API OVH, is used to send the text message. https://docs.ovh.com/fr/sms/ - http://ovh.github.io/node-ovh/ - https://github.com/ovh/node-ovh
- uuid, generates a unique identifier, allowing to secure a little more the storage of information. https://github.com/uuidjs/uuid
- normalize.css, reset the CSS for all browsers. https://github.com/necolas/normalize.css/

## Run it via localhost
You can start this project in a few steps :
1. Clone this directory,
2. run the command ```npm install ```,
3. Then rename the file ```'.env.dist'``` into ```'.env'```,
4. You will need an account OVH Cloud and Google Firebase,
5. Once you have your accounts, create the proper projects and replace the variables in the ```'.env'``` with your own.
6. You can now launch it :
    - in development mode: with the command ```npm start ```
    - or create a build : with the command ```npm run build ```
#### Précisions
- The development mode launches a server locally on your machine at [http://localhost:3000](http://localhost:3000), the page will refresh on updates, and ESlint errors will be displayed in the console.
- The build, will create a folder ```'build'``` containing the site ready for use on any server, the file size is minimized.

## Demo

A demo is available on : https://www.formz-react.netlify.app

A quota of sending text messages could be reached, blocking the proper working of this DEMO.