import { Spine } from "pixi-spine";
import { Container } from "pixi.js";

export class Girl extends Container {
  constructor(spineData) {
    super();

    // Pass the structured data directly into Spine's from method
    this.spine = Spine.from(spineData);

    this.addChild(this.spine);
  }
}
