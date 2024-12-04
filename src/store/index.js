import { proxy } from "valtio";

//State of the APPLICATION

const state = proxy({
  intro: true,
  color: "#000000",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
