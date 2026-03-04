import { Scene } from '../core/Scene.js';
import { StageSelectScene } from './StageSelectScene.js';

export class HomeScene extends Scene {
  constructor(game){
    super();
    this.game = game;
  }

  init(){
    this.canvas = this.game.canvas;
    this.ctx = this.game.ctx;
    this.clickHandler = this.handleClick.bind(this);
    this.canvas.addEventListener('click', this.clickHandler);
  }

  handleClick(e){
    this.game.changeScene(new StageSelectScene(this.game));
  }

  update(delta){}
  render(ctx){
    ctx.fillStyle = "#0f0";
    ctx.font = "36px sans-serif";
    ctx.fillText("HOME BASE", 280, 200);
    ctx.font = "24px sans-serif";
    ctx.fillText("CLICK TO GO TO STAGE SELECT", 180, 300);
  }

  destroy(){
    this.canvas.removeEventListener('click', this.clickHandler);
  }
}
