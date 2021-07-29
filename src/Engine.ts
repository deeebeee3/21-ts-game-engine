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

    private loop(): void {
      gl.clear(gl.COLOR_BUFFER_BIT);
      requestAnimationFrame(this.loop.bind(this));
    }
  }
}
