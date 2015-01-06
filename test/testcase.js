var ModuleTestFoo = (function(global) {

var _isNodeOrNodeWebKit = !!global.global;
var _runOnNodeWebKit =  _isNodeOrNodeWebKit && /native/.test(setTimeout);
var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

return new Test("Foo", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        nw:         true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testFoo_value,
        testFoo_isNumber,
        testFoo_isInteger,
    ]).run().clone();

function testFoo_value(test, pass, miss) {

    var result = new Foo(123.4).value();

    if (result === 123.4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testFoo_isNumber(test, pass, miss) {

    var result = [
            new Foo(123.4).isNumber(),  // true
            new Foo(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testFoo_isInteger(test, pass, miss) {

    var result = [
           !new Foo(123.4).isInteger(), // !false -> true
            new Foo(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

