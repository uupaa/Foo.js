var ModuleTestFoo = (function(global) {

var _inNode    = "process"        in global;
var _inWorker  = "WorkerLocation" in global;
var _inBrowser = "document"       in global;

return new Test("Foo", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true,
    }).add([
//      testFoo_failure,
        testFoo_value,
        testFoo_isNumber,
        testFoo_isInteger,
    ]).run().clone();

function testFoo_failure(next) {
    next && next.miss();
}

function testFoo_value(next) {

    var result = new Foo(123.4).value();

    if (result === 123.4) {
        next && next.pass();
    } else {
        next && next.miss();
    }
}

function testFoo_isNumber(next) {

    var result = [
            new Foo(123.4).isNumber(),  // true
            new Foo(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        next && next.pass();
    } else {
        next && next.miss();
    }
}

function testFoo_isInteger(next) {

    var result = [
           !new Foo(123.4).isInteger(), // !false -> true
            new Foo(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        next && next.pass();
    } else {
        next && next.miss();
    }
}

})((this || 0).self || global);

