// Foo test

onmessage = function(event) {
    self.unitTest = event.data; // { message, setting: { secondary, baseDir } }

    if (!self.console) { // polyfill WebWorkerConsole
        self.console = function() {};
        self.console.dir = function() {};
        self.console.log = function() {};
        self.console.warn = function() {};
        self.console.error = function() {};
        self.console.table = function() {};
    }

    importScripts("../lib/WebModuleGlobal.js");

    importScripts("../node_modules/uupaa.hash.js/lib/Hash.js");
    importScripts("wmtools.js");
    importScripts("../lib/Foo.js");
    importScripts("../release/Foo.w.min.js");
    importScripts("testcase.js");

    self.postMessage(self.unitTest);
};

