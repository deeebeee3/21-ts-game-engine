namespace TSEngine {
  export class Engine {
    private _count: number = 0;

    public constructor() {
      console.log("i constructor was called");
    }

    public start(): void {
      this.loop();
    }

    private loop(): void {
      this._count++;

      document.title = this._count.toString();
      requestAnimationFrame(this.loop.bind(this));
    }
  }
}

window.onload = function () {
  let e = new TSEngine.Engine();

  e.start();

  document.body.innerHTML += "Foo";
};
