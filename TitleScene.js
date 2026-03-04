import { Scene } from '../core/Scene.js';
import { HomeScene } from './HomeScene.js';

export class TitleScene extends Scene {
  constructor(game){
    super();
    this.game = game;
  }

  init(){
    this.canvas = this.game.canvas;
    this.ctx = this.game.ctx;
    this.clickHandler = this.startGame.bind(this);
    this.canvas.addEventListener('click', this.clickHandler);
  }

  startGame(){
    this.game.changeScene(new HomeScene(this.game));
  }

  update(delta){}
  render(ctx){
    ctx.fillStyle = "#fff";
    ctx.font = "48px sans-serif";
    ctx.fillText("SHOOTER GAME", 150, 250);
    ctx.font = "24px sans-serif";
    ctx.fillText("CLICK TO START", 300, 350);
  }

  destroy(){
    this.canvas.removeEventListener('click', this.clickHandler);
  }
}
