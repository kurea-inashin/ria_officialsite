export class Player {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.hp = 100;
  }

  update(delta){}

  render(ctx){
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.x-15, this.y-15, this.width, this.height);
  }
}
