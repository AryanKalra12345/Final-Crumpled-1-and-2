
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(700,650,1400,20)
ball= new BallClass(200,650,40)
dustbin1=new DustbinClass(1200,500,300,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  ball.display()
  dustbin1.display();
  drawSprites();
 
}



