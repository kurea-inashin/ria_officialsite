import { TitleScene } from '../scenes/TitleScene.js';

export class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.currentScene = null;
    this.lastTime = 0;
  }

  start() {
    this.changeScene(new TitleScene(this));
    requestAnimationFrame(this.loop.bind(this));
  }

  changeScene(scene){
    if(this.currentScene) this.currentScene.destroy();
    this.currentScene = scene;
    this.currentScene.init();
  }

  loop(timestamp){
    const delta = timestamp - this.lastTime;
    this.lastTime = timestamp;
    if(this.currentScene){
      this.currentScene.update(delta);
      this.currentScene.render(this.ctx);
    }
    requestAnimationFrame(this.loop.bind(this));
  }
}
