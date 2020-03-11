# Restomenu Application
 This is the mobile app for restomenu.com


## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://MrFreshest@bitbucket.org/tkorkunckaya/restomenu-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._



## App Preview

All app preview screenshots were taken by running `ionic serve --lab` on a retina display.

- [Food Page](https://MrFreshest@bitbucket.org/tkorkunckaya/restomenu-app.git)

  <img src="resources/screenshots/FoodPage.png" alt="Food">


- [About Page](https://MrFreshest@bitbucket.org/tkorkunckaya/restomenu-app.git)

  <img src="resources/screenshots/AboutPage.png" alt="Food">


- To see more images of the app, check out the [screenshots directory](https://MrFreshest@bitbucket.org/tkorkunckaya/restomenu-app.git)!


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
