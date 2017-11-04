# React Boilerplate
This is a basic boiler plate to get you started with no extra to bloat it.

## Features
 * Hot reloads
 * CSS & SCSS support
 * Favicons (generates 37 different icons for iOS devices, Android devices and the Desktop browser and  JSON file with all information about the icons with favicons-webpack-plugin)
 * es2015
 * minification
 * mangle
 * Webpack DLL plugin for super fast compilation time
 * basic eslint setup
 * Testing with Jest and Enzyme
 * Coverage reports with Jest

## Commands

* `yarn start`: Start a webpack-dev-server on port `8080` with hot-reloading
* `yarn build:vendor`: Build the vendor dlls. *This is done automatically when you do `build:dev`, `build:prod`, `start`.*
* `yarn build:dev`: Build
* `yarn build:prod`: Build for production (minify, mangle, remove comments)
* `yarn run clean`: clean `dist/` *This is done automatically before any build runs.*
