// import * as wasm from "wasm-geme-of-life";
import {Universe} from "wasm-geme-of-life";

// wasm.greet();

const pre = document.getElementById("geme-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};


requestAnimationFrame(renderLoop);
