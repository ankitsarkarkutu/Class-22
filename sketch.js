const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground,ball;
function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true

  }
  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
var options = {
  restitution:1
}
ball = Bodies.circle(200,100,20,options)
World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20,20);
}