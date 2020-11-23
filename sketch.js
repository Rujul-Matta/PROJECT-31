const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine = Engine;
var bodies = Bodies;
var body = Body;
var world = World;

var particles = []
var plinkos =[]
var divisons = []

var divisonHeight = 250 ;
function preload(){
  IMG = loadImage("back.png")
}
function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  ground_1 = new Ground(300,595,600,10);
  ground_2 = new Ground(5,300,10,600);
  ground_3 = new Ground(595,300,10,600);

  for(var k = 0; k <= width; k += 60){
    divisons.push(new Divison(k, 550, 5, divisonHeight));
  }
  
  for(var l = 0; l <= width; l += 60){
    plinkos.push(new Plinko(l, 400, 10));
  }
  for(var l = 0; l <= width; l += 60){
    plinkos.push(new Plinko(l, 350, 10));
  }
  for(var l = 0; l <= width; l += 60){
    plinkos.push(new Plinko(l, 300, 10));
  }
  for(var l = 0; l <= width; l += 60){
    plinkos.push(new Plinko(l, 250, 10));
  }
  for(var l = 0; l <= width; l += 60){
  plinkos.push(new Plinko(l, 200, 10));
  }
  for(var l = 0; l <= width; l += 60){
    plinkos.push(new Plinko(l, 150, 10));
  }
  for(var l = 0; l <= width; l += 60){
  plinkos.push(new Plinko(l, 100, 10));
  }
  for(var l = 0; l <= width; l += 60){
    plinkos.push(new Plinko(l, 50, 10));
  }

  
}

function draw() {
  background(IMG);  

  Engine.update(engine);
  ground_1.display();
  ground_2.display();
  ground_3.display();

  for(var k = 0; k < divisons.length; k++){
    divisons[k].
    display();
  }
  for(var m = 0; m < particles.length; m++){
    particles[m].display();
  }

  
  if(frameCount % 30 === 0 ){
      particles.push(new Particle());
    
  }
  for(var l = 0; l < plinkos.length; l+= 1){
    plinkos[l].display();
  }  
}
