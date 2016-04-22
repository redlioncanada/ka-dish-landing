System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var WindowProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("WindowProvider", WindowProvider = core_1.provide(Window, { useValue: window }));
        }
    }
});
//# sourceMappingURL=window.provider.js.map