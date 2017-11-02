# React Boilerplate
This is a basic boiler plate to get you started with no extra to bloat it.

## Features
 * Hot reloads
 * SCSS support
 * es2015
 * minification
 * mangle
 * Webpack DLL plugin for super fast compilation time
 * basic eslint setup

## Commands

* `yarn start`: Start a webpack-dev-server on port `8080` with hot-reloading
* `yarn build:vendor`: Build the vendor dlls. *This is done automatically when you do `build:dev`, `build:prod`, `start`.*
* `yarn build:dev`: Build
* `yarn build:prod`: Build for production (minify, mangle, remove comments)
* `yarn run clean`: clean `dist/` *This is done automatically before any build runs.*
