(function moduleExporter(moduleName, moduleBody) { // http://git.io/WebModule
   "use strict";

    var alias  = moduleName in GLOBAL ? (moduleName + "_") : moduleName; // switch
    var entity = moduleBody(GLOBAL);

    if (typeof modules !== "undefined") {
        GLOBAL["modules"]["register"](alias, moduleBody, entity["repository"]);
    }
    if (typeof exports !== "undefined") {
        module["exports"] = entity;
    }
    GLOBAL[alias] = entity;

})("Foo", function moduleBody(global) {

"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
function Foo(value) { // @arg String = "" - comment
//{@dev
    $valid($type(value, "String|omit"), Foo, "value");
//}@dev

    this._value = value || "";
}

Foo["repository"] = "https://github.com/uupaa/Foo.js"; // GitHub repository URL.
Foo["prototype"] = Object.create(Foo, {
    "constructor":  { "value": Foo                  }, // new Foo(value:String = ""):Foo
    // methods
    "concat":       { "value": Foo_concat           }, // Foo#concat(a:String):String
    // property accessors
    "value": {                                         // Foo#value:String
        "set": function(v) { this._value = v;       },
        "get": function()  { return this._value;    }
    },
});

// --- implements ------------------------------------------
function Foo_concat(a) { // @arg String
                         // @ret String
//{@dev
    $valid($type(a, "String"), Foo, "a");
//}@dev

    return this._value + a;
}

// --- validate and assert functions -----------------------
//{@dev
  function $type(obj, type)      { return GLOBAL["Valid"] ? GLOBAL["Valid"].type(obj, type)    : true; }
//function $keys(obj, str)       { return GLOBAL["Valid"] ? GLOBAL["Valid"].keys(obj, str)     : true; }
//function $some(val, str, ig)   { return GLOBAL["Valid"] ? GLOBAL["Valid"].some(val, str, ig) : true; }
//function $args(fn, args)       { if (GLOBAL["Valid"]) { GLOBAL["Valid"].args(fn, args); } }
  function $valid(val, fn, hint) { if (GLOBAL["Valid"]) { GLOBAL["Valid"](val, fn, hint); } }
//}@dev

return Foo; // return entity

});

