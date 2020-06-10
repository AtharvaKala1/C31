class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.a = [];
    this.smoke = loadImage("sprites/smoke.png");

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x,this.body.position.y]
      this.a.push(pos);
    }
    for(var i = 0;i <this.a.length;i++) {
    image(this.smoke,this.a[i][0],this.a[i][1]);
    }
  }
}
