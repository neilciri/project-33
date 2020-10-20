class Plinko {
  constructor(x, y) {
    var options = {
        isStatic: true,
        'restitution':0,
        'friction':1
    }
    this.body = Bodies.circle(x, y,10, options);
    this.radius = 10
    World.add(world, this.body);
  }
  display(){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius.this.radius);
  
    fill("white");
    //image(this.image,0, 0, this.radius, this.radius);
    pop();
  }
};

