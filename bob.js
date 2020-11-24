class Bob {
  constructor(x,y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 25, options);
    this.radius = 25;
  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS)
    fill("green");
    ellipse(pos.x,pos.y,25,25);
    
  }
};
