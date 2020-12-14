<h1 align="center">RN_06 Live Chat Firebase</h1>


<div align="center">
  <h3>
    <a href="https://github.com/SemihDurmus/RN_06_Live_Chat_Firebase.git">
      Project Source
    </a>
 
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

| Login | Sign up     | Chat  |
  |--------------|:--------:|:--------------------------------------------------------------:|
  |<img src="visuals/login.gif" height="500">     |<img src="visuals/signup.gif" height="500">| <img src="visuals/chat.gif" height="500">|



### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React-native](https://reactnative.dev/)
- [Firebase (Authentication and Realtime Database)](https://firebase.google.com/?gclid=Cj0KCQjwufn8BRCwARIsAKzP694R8t8HoyK48GMN2tTTtGwJkIH5LIA1pMusLsuDBALEV9gZm_eyEgIaAgB0EALw_wcB)


## Features

- This Live Chat app is built for IOS and can be adopted to Android as well by applying settings.
- The application comprises use of :
  * React-native firebase (authentication and realtime database)
  * React stack navigation 
  * React-native modal
  * React-native vector-icons
  * Moment
  * Error reporting

- Login is the landing page of the application. In this page user can enter the registerd email and password to have access to chat-channels. This information is checked with Firebase-authentication. 
- If the user inserts invalid e-mail and/or password, the app warns user with alerts specified for the type of error.
- If the user doesnt have a registered account, the user can click "Sign Up" button in Login Page and navigate to Sign Up page. Here the user fills email address and password (twice) to designated input areas. When doing password confirmation the border color of the second password input area turns to green if the password charaters match as the user types, or to red if the characters do not match. So that the user becomes aware of a possible mistake earlier.
- After click button of Create Account, account will be created in firebase and the user navigates back to Login Page. 
- Another option is that the user can click on the cancel button which makes the user navigate back to Login Page without creating an account.
- After logging in successfully, the user must choose a channel among the listed ones in the modal in order to continue. 
- Once the user selectes any channel, it is possible to display the modal again and change the channel by clicking on the bluish-gray button on top-right.
- In chat rooms the posted items show up in a chronological order with the sentding times and user names.
- The user can type a message and send to selected channel.
- The user can log out by clicking the red logout icon on top-right.

## How To Use

To use this application, the packages for Navigation, Moment, Modal, Vector Icons and Firebase should be installed/identified with prior to running the app. From your command line:

```
//------FIREBASE---------------

//https://rnfirebase.io/auth/usage

//Install & setup the app module

$yarn add @react-native-firebase/app

//Install the authentication module

$yarn add @react-native-firebase/auth

//If you're developing your app using iOS, run this command

$cd ios/ && pod install && cd ..

//Install & setup the app module

$yarn add @react-native-firebase/app

//Install the database module

$yarn add @react-native-firebase/database

//If you're developing your app using iOS, run this command

$cd ios/ && pod install && cd ..

//-----REACT NAVIGATION---------

//https://reactnavigation.org/docs/getting-started

$yarn add @react-navigation/native

$yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

$npx pod-install ios

//Add the following line to the top of the index.js file

@import 'react-native-gesture-handler';

$yarn add @react-navigation/stack

//-----MODAL-------------------

//https://github.com/react-native-modal/react-native-modal

$yarn add react-native-modal


//-----VECTOR ICONS-------------

//https://github.com/oblador/react-native-vector-icons

$ npm install --save react-native-vector-icons

//Detailed directions are stated in the package document. In this project only "MaterialCommunityIcons" was uploaded and used among other alternatives.

//https://oblador.github.io/react-native-vector-icons/

//-----MOMENT------------------

//https://momentjs.com/

$yarn add moment 

```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- [Firebase(Authentication and Realtime Database)](https://firebase.google.com/?gclid=Cj0KCQjwufn8BRCwARIsAKzP694R8t8HoyK48GMN2tTTtGwJkIH5LIA1pMusLsuDBALEV9gZm_eyEgIaAgB0EALw_wcB))
- [Firebase usage](https://rnfirebase.io/)
- [Navigation](https://reactnavigation.org/docs/getting-started)
- [Modal](https://github.com/react-native-modal/react-native-modal)
- [Vector Icons - Usage](https://github.com/oblador/react-native-vector-icons)
- [Vector Icons - List](https://oblador.github.io/react-native-vector-icons/)
- [Modals](https://github.com/react-native-modal/react-native-modal)
- [Moment-js](https://momentjs.com/)

## Contact

- GitHub [SemihDurmus](https://github.com/SemihDurmus)
- Linkedin [@Semih Durmus](https://www.linkedin.com/in/semih-durmus-0548751b7/)




