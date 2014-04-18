new Test().add([
        testFoo_failure,
        testFoo_value,
        testFoo_isNumber,
        testFoo_isInteger,
    ]).run(function(err, test) {
        if (1) {
            err || test.worker(function(err, test) {
                if (!err && typeof Foo_ !== "undefined") {
                    var name = Test.swap(Foo, Foo_);

                    new Test(test).run(function(err, test) {
                        Test.undo(name);
                    });
                }
            });
        }
    });

function testFoo_failure(next) {

        console.error("testFoo_failure ng");
        next && next.miss();
}

function testFoo_value(next) {

    var result = new Foo(123.4).value();

    if (result === 123.4) {
        console.log("testFoo_value ok");
        next && next.pass();
    } else {
        console.error("testFoo_value ng");
        next && next.miss();
    }
}

function testFoo_isNumber(next) {

    var result = [
            new Foo(123.4).isNumber(),  // true
            new Foo(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        console.log("testFoo_isNumber ok");
        next && next.pass();
    } else {
        console.error("testFoo_isNumber ng");
        next && next.miss();
    }
}

function testFoo_isInteger(next) {

    var result = [
           !new Foo(123.4).isInteger(), // !false -> true
            new Foo(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        console.log("testFoo_isInteger ok");
        next && next.pass();
    } else {
        console.error("testFoo_isInteger ng");
        next && next.miss();
    }
}

