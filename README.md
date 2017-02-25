# SWAPIONIC

## Installation

**Prerequisites**
```bash
$ npm install -g cordova ionic
```

First thing you should do is `npm install`.

For launching you can do
```bash
$ ionic serve
```
If you want to see the app as a desktop webapp

or 

```bash
$ ionic serve -l
```
This will open the app wrapped in each platform mode (android, ios and windows phone).

If you want to build the app for your mobile phone:
```bash
$ ionic platform add android
$ ionic build android
$ ionic run android
```

For iOS users, you will need _macOs_ and _xCode_ installed. You will need to install two node modules:
```bash
$ npm install -g ios-deploy
$ npm install -g ios-sim-version
```
