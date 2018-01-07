# vue-cli-template-library

> Template for developing open-source vue.js libraries

> Rollup + Jest + Babel + Storybook + TravisCI + SemanticRelease

## Usage

```bash
$ npm install -g vue-cli
$ vue init julon/vue-cli-template-library my-project
$ cd my-project
$ npm install
$ npm run storybook
```

## What's included

* `npm run build` : Production-ready build.
  * Export to CommonJS, ES Modules, UMD(dev & minified)
  * CSS is embedded in the JS by default
  * Using Rollup to compute Vue, ES6 js files
  * Pugjs and Stylus supported in vue files
* `npm run storybook` : The UI Development Environment
  * Based on webpack
  * Pre-configured to work out of the box
* `npm run test` : eslint & Unit-test with Jest
  * Supports ES2015+ in test files
  * Use `npm run test:watch` to start Jest in watch-mode
  * Use `npm run test:update` to start Jest and update component snapshot
* `npm run lint`
  * Rules based on prettier:recommended, vue:recommended
  * Import errors and warning detection
  * Use `npm run lint:fix` to fix eslint errors
* `npm run cz` : Commitizen support
  * Loaded with Conventional-changelog rules
  * Entrypoint to semantic-release automation
* Semantic-release auto-deployment configuration
  * Auto-generate changelog
  * Auto-commit computed package version in git
  * Auto-release in github
  * Auto-publish to npm
  * Enable this features by using the semantic-release-cli


## Fork It And Make Your Own
You can fork this repo to create your own boilerplate, and use it with vue-cli:
```bash
vue init username/repo my-project
```