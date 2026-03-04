import { Scene } from '../core/Scene.js';
import { HomeScene } from './HomeScene.js';

export class ResultScene extends Scene {
  constructor(game, cleared){
    super();
    this.game = game;
    this.cleared = cleared;
  }

  init(){
    this.canvas = this.game.canvas;
    this.ctx = this.game.ctx;
    this.clickHandler = this.backHome.bind(this);
    this.canvas.addEventListener('click', this.clickHandler);
  }

  backHome(){
    this.game.changeScene(new HomeScene(this.game));
  }

  update(delta){}
  render(ctx){
    ctx.fillStyle = "#fff";
    ctx.font = "36px sans-serif";
    ctx.fillText(this.cleared ? "STAGE CLEARED!" : "GAME OVER", 200, 300);
    ctx.font = "24px sans-serif";
    ctx.fillText("CLICK TO RETURN HOME", 220, 400);
  }

  destroy(){
    this.canvas.removeEventListener('click', this.clickHandler);
  }
}
