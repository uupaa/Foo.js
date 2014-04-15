=========
Foo.js
=========

Foo.js description.

# Document

- https://github.com/uupaa/Foo.js/wiki/Foo

and 

- https://github.com/uupaa/WebModule and [slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
- https://github.com/uupaa/Help.js and [slide](http://uupaa.github.io/Slide/slide/Help.js/index.html)

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

# for Developers

1. Install development dependency tools

    ```sh
    $ brew install node
    $ npm install -g plato
    ```

2. Clone Repository and Install

    ```sh
    $ git clone git@github.com:uupaa/Foo.js.git
    $ cd Foo.js
    $ npm install
    ```

3. Build and Minify

    `$ npm run build`

4. Test

    `$ npm run test`

5. Lint

    `$ npm run lint`


