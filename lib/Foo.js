// @name: Foo.js
// @require: Valid.js
// @cutoff: @assert @node

(function(global) {
"use strict";

// --- variable --------------------------------------------
//{@assert
var Valid = global["Valid"] || require("uupaa.valid.js");
//}@assert

var _inNode = "process" in global;
var _inWorker = "WorkerLocation" in global;
var _inBrowser = "self" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function Foo(value) { // @arg Number/Integer: the value.
                      // @help: Foo
//{@assert
    _if(!Valid.type(value, "Number/Integer"), "Foo(value)");
//}@assert

    this._value = value;
}

Foo["repository"] = "https://github.com/uupaa/Foo.js";

Foo["prototype"]["value"]     = Foo_value;     // Foo#value():Number/Integer
Foo["prototype"]["isNumber"]  = Foo_isNumber;  // Foo#isNumber():Boolean
Foo["prototype"]["isInteger"] = Foo_isInteger; // Foo#isInteger():Boolean
/* or
Foo["prototype"] = {
    "constructor":  Foo,
    "value":        Foo_value,     // Foo#value():Number/Integer
    "isNumber":     Foo_isNumber,  // Foo#isNumber():Boolean
    "isInteger":    Foo_isInteger  // Foo#isInteger():Boolean
};
 */

// --- implement -------------------------------------------
function Foo_value() { // @ret Number/Integer: get value.
                       // @help: Foo#value
    return this._value;
}

function Foo_isNumber() { // @ret Boolean: valie is Number
                          // @help: Foo#isNumber
    return typeof this._value === "number";
}

function Foo_isInteger() { // @ret Boolean: valie is Integer
                           // @help: Foo#isInteger
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
}

//{@assert
function _if(value, msg) {
    if (value) {
        console.error(Valid.stack(msg));
        throw new Error(msg);
    }
}
//}@assert

// --- export ----------------------------------------------
//{@node
if (_inNode) {
    module["exports"] = Foo;
}
//}@node
if (global["Foo"]) {
    global["Foo_"] = Foo; // already exsists
} else {
    global["Foo"]  = Foo;
}

})((this || 0).self || global);

