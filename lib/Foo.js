(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _isNodeOrNodeWebKit = !!global.global;
//var _runOnNodeWebKit =  _isNodeOrNodeWebKit && /native/.test(setTimeout);
//var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
//var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
//var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

// --- class / interfaces ----------------------------------
function Foo(value) { // @arg Number|Integer = 0 comment
//{@dev
  //$args(Foo, arguments);
  //$valid($type(value, "Number|Integer|omit"), Foo, "value");
//}@dev

    this._value = value || 0;
}

//{@dev
Foo["repository"] = "https://github.com/uupaa/Foo.js"; // GitHub repository URL. http://git.io/Help
//}@dev

Foo["prototype"] = {
    "constructor":  Foo,           // new Foo(value:Number|Integer):Foo
    "value":        Foo_value,     // Foo#value():Number|Integer
    "isNumber":     Foo_isNumber,  // Foo#isNumber():Boolean
    "isInteger":    Foo_isInteger  // Foo#isInteger():Boolean
};

/*
class Xyz extends Foo { ... }

Xyz["prototype"] = Object.create(Foo.prototype, {
    "constructor":  { "value": Xyz },
    "value":        { "value": Xyz_value },
    "isNumber":     { "value": Xyz_isNumber },
    "isInteger":    { "value": Xyz_isInteger },
});
 */

// --- implements ------------------------------------------
function Foo_value() { // @ret Number|Integer comment
    return this._value;
}

function Foo_isNumber() { // @ret Boolean comment
    return typeof this._value === "number";
}

function Foo_isInteger() { // @ret Boolean comment
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
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

