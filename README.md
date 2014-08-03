# Foo.js [![Build Status](https://travis-ci.org/uupaa/Foo.js.png)](http://travis-ci.org/uupaa/Foo.js)

[![npm](https://nodei.co/npm/uupaa.foo.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.foo.js/)

Foo.js description.

## Document

- [Foo.js wiki](https://github.com/uupaa/Foo.js/wiki/Foo)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/Foo.js">
<script>
console.log( Foo() );
</script>
```

### WebWorkers

```js
importScripts("lib/Foo.js");

console.log( Foo() );
```

### Node.js

```js
var Foo = require("lib/Foo.js");

console.log( Foo() );
```

