const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var roof1,roof2,rope,bob1,bob2,bob3,bob4,bob5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
roof = new Roof()
bob1 = new Bob(300,300) 
bob2 = new Bob(350,300) 
bob3 = new Bob(400,300) 
bob4 = new Bob(450,300) 
bob5 = new Bob(500,300) 

rope1 = new Rope(bob1.body,roof.body,-100)
rope2 = new Rope(bob2.body,roof.body,-50)
rope3 = new Rope(bob3.body,roof.body,0)
rope4 = new Rope(bob4.body,roof.body,50)
rope5 = new Rope(bob5.body,roof.body,100)

}

function draw(){
    background(0);
    Engine.update(engine);
    roof.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}
function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
    }
}