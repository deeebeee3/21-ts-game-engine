namespace TSEngine {
  /**
   * The main game engine class
   */
  export class Engine {
    private _canvas: HTMLCanvasElement;

    /**
     * Create a new engine.
     */
    public constructor() {
      console.log("Engine class constructor was called");

      this._canvas = GLUtilities.initialize();
    }

    /**
     * Starts up this engine.
     */
    public start(): void {
      gl.clearColor(0, 0, 0, 1);
      this.loop();
    }

    /**
     * Resizes the canvas to fit the window
     */
    public resize(): void {
      // guard against canvas not being defined before code run
      if (this._canvas !== undefined) {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
      }
    }

    private loop(): void {
      gl.clear(gl.COLOR_BUFFER_BIT);
      requestAnimationFrame(this.loop.bind(this));
    }
  }
}
