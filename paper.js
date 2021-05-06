class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
                }
        this.body=Bodies.circle(x,y,r, options)
        this.width = 33;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,33,33);
        pop();
      }
  }
  