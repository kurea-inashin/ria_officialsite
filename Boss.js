export class Boss {
  constructor(){
    this.x = 400;
    this.y = 100;
    this.width = 80;
    this.height = 80;
    this.hp = 500;
  }

  update(delta){ this.y += Math.sin(Date.now()/500)*0.5; }

  render(ctx){
    ctx.fillStyle = "#ff0";
    ctx.fillRect(this.x-40, this.y-40, this.width, this.height);
    ctx.fillStyle="#000";
    ctx.fillText(this.hp, this.x-15,this.y+5);
  }
}
