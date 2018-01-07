# {{ name }}

[![Build Status](https://travis-ci.org/{{ repos }}.svg?branch=master)](https://travis-ci.org/{{ repos }})
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> {{ description }}

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install {{ name }}
```
{{ name }} can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, {{ name }} will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { HelloWorld } from '{{ name }}';

export default {
  ...
  components: {
    HelloWorld
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from '{{ name }}';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('{{ name }}');

var YourComponent = Vue.extend({
  ...
  components: {
    'hello-world': ModuleLibrary.HelloWorld
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('{{ name }}');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/{{ name }}/dist/{{ name }}.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<hello-world></hello-world>
```

## Changelog

See the GitHub [release history](https://github.com/{{ repos }}/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
