var ModuleTestFoo = (function(global) {

var _isNodeOrNodeWebKit = !!global.global;
var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

var test = new Test("Foo", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test primary and secondary modules.
        ignoreError:false, // ignore error.
    }).add([
        testFoo_value,
        testFoo_concat,
        testFoo_concat$,
    ]);

if (_runOnBrowser || _runOnNodeWebKit) {
    //test.add([]);
} else if (_runOnWorker) {
    //test.add([]);
} else if (_runOnNode) {
    //test.add([]);
}

return test.run().clone();

function testFoo_value(test, pass, miss) {

    var instance = new Foo("a");

    if (instance.value === "a") {
        instance.value = "b";

        if (instance.value === "b") {
            test.done(pass());
            return;
        }
    }
    test.done(miss());
}

function testFoo_concat(test, pass, miss) {

    var result = {
            0: new Foo(   ).concat("a") === "a", // true
            1: new Foo("b").concat("b") === "bb" // true
        };

    if (/false/.test(JSON.stringify(result, null, 2))) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testFoo_concat$(test, pass, miss) {

    var result = {
            0: new Foo(   ).concat$("a").value === "a", // true
            1: new Foo("b").concat$("b").value === "bb" // true
        };

    if (/false/.test(JSON.stringify(result, null, 2))) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

})((this || 0).self || global);

