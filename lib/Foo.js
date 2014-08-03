(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function Foo(value) { // @arg Number|Integer - the value.
//{@dev
    $args(Foo, arguments);
//}@dev

    this._value = value;
}

//{@dev
Foo["repository"] = "https://github.com/uupaa/Foo.js";
//}@dev

Foo["prototype"]["value"]     = Foo_value;     // Foo#value():Number/Integer
Foo["prototype"]["isNumber"]  = Foo_isNumber;  // Foo#isNumber():Boolean
Foo["prototype"]["isInteger"] = Foo_isInteger; // Foo#isInteger():Boolean

// --- implements ------------------------------------------
function Foo_value() { // @ret Number|Integer - get value.
    return this._value;
}

function Foo_isNumber() { // @ret Boolean - valie is Number
    return typeof this._value === "number";
}

function Foo_isInteger() { // @ret Boolean - valie is Integer
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = Foo;
}
global["Foo" in global ? "Foo_" : "Foo"] = Foo; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

