(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _isNodeOrNodeWebKit = !!global.global;
//var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
//var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
//var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
//var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

// --- class / interfaces ----------------------------------
function Foo(value) { // @arg String = "" - comment
//{@dev
  //$args(Foo, arguments);
  //$valid($type(value, "String|omit"), Foo, "value");
//}@dev

    this._value = value || "";
}

//{@dev
Foo["repository"] = "https://github.com/uupaa/Foo.js"; // GitHub repository URL. http://git.io/Help
//}@dev

Foo["prototype"] = Object.create(Foo, {
    "constructor":  { "value": Foo          },  // new Foo(value:String = ""):Foo
    // property accessor
    "value": {                                  // Foo#value:String
        "set": function(v) { this._value = v; },
        "get": function()  { return this._value; }
    },
    // methods
    "concat":       { "value": Foo_concat   },  // Foo#concat(a:String):String
    "concat$":      { "value": Foo_concat$  },  // Foo#concat$(a:String):this
});

/* class SubClass extends Foo { ... }

SubClass["prototype"] = Object.create(SubClass.prototype, {
    "constructor":  { "value": SubClass                 },
    "concat":       { "value": SubClass_concat          },
    "concat$":      { "value": SubClass_concat$         },
});
 */

// --- implements ------------------------------------------
function Foo_concat(a) { // @arg String
                         // @ret String
    return this._value + a;
}

function Foo_concat$(a) { // @arg String
                          // @ret this
    this._value += a;
    return this;
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if (typeof module !== "undefined") {
    module["exports"] = Foo;
}
global["Foo" in global ? "Foo_" : "Foo"] = Foo; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

