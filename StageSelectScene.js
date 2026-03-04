import { Scene } from '../core/Scene.js';
import { GameScene } from './GameScene.js';

export class StageSelectScene extends Scene {
  constructor(game){
    super();
    this.game = game;
  }

  init(){
    this.canvas = this.game.canvas;
    this.ctx = this.game.ctx;
    this.clickHandler = this.startStage.bind(this);
    this.canvas.addEventListener('click', this.clickHandler);
  }

  startStage(){
    this.game.changeScene(new GameScene(this.game, 1));
  }

  update(delta){}
  render(ctx){
    ctx.fillStyle = "#ff0";
    ctx.font = "36px sans-serif";
    ctx.fillText("STAGE SELECT", 250, 200);
    ctx.font = "24px sans-serif";
    ctx.fillText("CLICK TO START STAGE 1", 220, 300);
  }

  destroy(){
    this.canvas.removeEventListener('click', this.clickHandler);
  }
}
