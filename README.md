=========
Foo.js
=========

![](https://travis-ci.org/uupaa/Foo.js.png)

Foo.js description.

# Document

- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [Foo.js wiki](https://github.com/uupaa/Foo.js/wiki/Foo)


# How to use

```js
<script src="lib/Foo.js">
<script>
// for Browser
console.log( Foo() );
</script>
```

```js
// for WebWorkers
importScripts("lib/Foo.js");

console.log( Foo() );
```

```js
// for Node.js
var Foo = require("lib/Foo.js");

console.log( Foo() );
```

