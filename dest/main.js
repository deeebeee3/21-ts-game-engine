"use strict";
var engine;
/* The main entry point to the application */
window.onload = function () {
    engine = new TSE.Engine();
    engine.start();
};
window.onresize = function () {
    engine.resize();
};
var TSE;
(function (TSE) {
    /**
     * The main game engine class
     */
    var Engine = /** @class */ (function () {
        /**
         * Create a new engine.
         */
        function Engine() {
            console.log("Engine class constructor was called");
            this._canvas = TSE.GLUtilities.initialize();
        }
        /**
         * Starts up this engine.
         */
        Engine.prototype.start = function () {
            TSE.gl.clearColor(0, 0, 0, 1);
            this.loop();
        };
        /**
         * Resizes the canvas to fit the window
         */
        Engine.prototype.resize = function () {
            // guard against canvas not being defined before code run
            if (this._canvas !== undefined) {
                this._canvas.width = window.innerWidth;
                this._canvas.height = window.innerHeight;
            }
        };
        Engine.prototype.loop = function () {
            TSE.gl.clear(TSE.gl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.loop.bind(this));
        };
        return Engine;
    }());
    TSE.Engine = Engine;
})(TSE || (TSE = {}));
var TSE;
(function (TSE) {
    /**
     * Responsible for setting up a WebGL rendering context.
     */
    var GLUtilities = /** @class */ (function () {
        function GLUtilities() {
        }
        /**
         * Initializes WebGL, potentially using the canvas with an
         * assigned id matching the provided if it is defined.
         *
         * @param elementId The id of the element to search for.
         * @returns
         */
        GLUtilities.initialize = function (elementId) {
            var canvas;
            if (elementId !== undefined) {
                canvas = document.getElementById(elementId);
                if (canvas === undefined) {
                    throw new Error("Cannot find a canvas named: " + elementId);
                }
            }
            else {
                canvas = document.createElement("canvas");
                document.body.appendChild(canvas);
            }
            TSE.gl = canvas.getContext("webgl");
            if (TSE.gl === undefined) {
                throw new Error("Unable to initialize WebGL!");
            }
            return canvas;
        };
        return GLUtilities;
    }());
    TSE.GLUtilities = GLUtilities;
})(TSE || (TSE = {}));
//# sourceMappingURL=main.js.map