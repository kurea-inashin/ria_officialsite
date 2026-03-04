export class ItemManager {
  constructor(){ this.coins = 0; }

  update(delta){
    if(Math.random()<0.001) this.coins++;
  }

  render(ctx){
    ctx.fillStyle="#ff0";
    ctx.font="20px sans-serif";
    ctx.fillText("COINS: "+this.coins, 10,20);
  }
}
