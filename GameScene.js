import { Scene } from '../core/Scene.js';
import { Player } from '../entities/Player.js';
import { Enemy } from '../entities/Enemy.js';
import { Boss } from '../entities/Boss.js';
import { ItemManager } from '../entities/ItemManager.js';
import { ResultScene } from './ResultScene.js';

export class GameScene extends Scene {
  constructor(game, stageId){
    super();
    this.game = game;
    this.stageId = stageId;
    this.player = null;
    this.enemies = [];
    this.boss = null;
    this.items = null;
    this.elapsed = 0;
  }

  init(){
    this.player = new Player(400, 500);
    this.items = new ItemManager();
    this.boss = new Boss();
    this.enemies = [new Enemy(200,100), new Enemy(400,50), new Enemy(600,100)];
  }

  update(delta){
    this.elapsed += delta;
    this.player.update(delta);
    this.enemies.forEach(e=>e.update(delta));
    this.boss.update(delta);
    this.items.update(delta);

    if(this.boss.hp <= 0){
      this.game.changeScene(new ResultScene(this.game, true));
    }
  }

  render(ctx){
    ctx.clearRect(0,0,this.game.canvas.width,this.game.canvas.height);
    this.player.render(ctx);
    this.enemies.forEach(e=>e.render(ctx));
    this.boss.render(ctx);
    this.items.render(ctx);
  }

  destroy(){}
}
