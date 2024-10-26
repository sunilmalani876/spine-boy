import { Application, Assets } from "pixi.js";
// import { Girl } from "./girl";

export const app = new Application({
  resolution: Math.max(window.devicePixelRatio, 2),
  backgroundColor: 0x37afe1,
});

async function init() {
  document.body.appendChild(app.view);

  // Load assets individually to avoid undefined errors
  const spineJson = await Assets.load("/public/spine_json/bg_girl_skel.json");
  const spineAtlas = await Assets.load("/public/spine_json/bg_girl.atlas.txt");
  const spineImage = await Assets.load("/public/spine_json/bg_girl.png");

  // Make sure the assets are loaded before passing to Girl
  const spineData = {
    skeleton: spineJson,
    atlas: spineAtlas,
    image: spineImage,
  };
  console.log(spineData);

  // const spineGirl = new Girl(spineData);
  // app.stage.addChild(spineGirl);
}

await init();
