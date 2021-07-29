var engine: TSEngine.Engine;

/* The main entry point to the application */
window.onload = function () {
  engine = new TSEngine.Engine();

  engine.start();
};

window.onresize = function () {
  engine.resize();
};
