# 🚀 React Native Boilerplate - May 2021

[![React Native](https://img.shields.io/badge/React%20Native-v0.64.0-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v5.9-blue.svg)](https://reactnavigation.org/)

React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux saga
and redux persist. Uses latest version of react-navigation (v5.9)

<p float="left">
<a href='http://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>
 
<a href='https://redux-saga.js.org/'><img src='https://redux-saga.js.org/img/Redux-Saga-Logo-Landscape.png' height='60' alt='Redux Logo' aria-label='redux-saga.js.org/' /></a>

<a href='https://callstack.github.io/react-native-paper/'><img src='https://raw.githubusercontent.com/callstack/react-native-paper/master/docs/assets/images/paper-logo.svg?sanitize=true' height='110' alt='Redux Logo' aria-label='https://callstack.github.io/react-native-paper/' /></a>

</p>

# UPDATE
If you want something simple, un opinionated and scalable with no boilerplate: 
[React-Native-Query-Zusatnd-BoilerPlate](https://github.com/victorkvarghese/react-native-boilerplate-query-zustand)


## Scalability Factor

This Type based Architecture scales smoothly for small - medium apps. If you guys are building a very large application I would suggest using the following feature based architecture which will be more developer friendly with ease of scaling.

[React-Native-Feature-BoilerPlate](https://github.com/victorkvarghese/react-native-feature-boilerplate)

## Projects using this BoilerPlate

- [MediBuddy](https://github.com/victorkvarghese/MediBuddy)
- [react-native-messenger](https://github.com/victorkvarghese/react-native-messenger)
- [rn-coffee](https://github.com/victorkvarghese/rn-coffee)

## Features
- [Typescript](https://www.typescriptlang.org/) support.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) with [Authentication flow](https://reactnavigation.org/docs/auth-flow) baked in & theming support.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Paper](https://callstack.github.io/react-native-paper/)- with theming support 
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))


## How this looks
  <img height="720" src="https://user-images.githubusercontent.com/15869386/84810277-c051fb00-b028-11ea-9351-cbb586ae4fc2.gif" />
  
## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/victorkvarghese/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`
5. Run `yarn` to install dependencies

6. Start the packager with `yarn start`
7. Connect a mobile device to your development machine
8. Run the test application:

- On Android:
  - Run `react-native run-android` or Use Android Studio (Recommended)
- On iOS:
  - Open `ios/YourReactProject.xcworkspace` in Xcode
  - Hit `Run` after selecting the desired device

9. Enjoy!!!

## Contributing

PRs are welcome
