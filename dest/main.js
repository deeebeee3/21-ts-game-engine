"use strict";
var TSEngine;
(function (TSEngine) {
    var Engine = /** @class */ (function () {
        function Engine() {
            this._count = 0;
            console.log("i constructor was called");
        }
        Engine.prototype.start = function () {
            this.loop();
        };
        Engine.prototype.loop = function () {
            this._count++;
            document.title = this._count.toString();
            requestAnimationFrame(this.loop.bind(this));
        };
        return Engine;
    }());
    TSEngine.Engine = Engine;
})(TSEngine || (TSEngine = {}));
window.onload = function () {
    var e = new TSEngine.Engine();
    e.start();
    document.body.innerHTML += "Foo";
};
//# sourceMappingURL=main.js.map