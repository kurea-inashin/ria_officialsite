export class Enemy {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.hp = 10;
  }

  update(delta){ this.y += 0.05*delta; }

  render(ctx){
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.x-15, this.y-15, this.width, this.height);
  }
}
