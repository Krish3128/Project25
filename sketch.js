
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground (400,340,800,15);
    ball = new Ball(100,330);
    log1 = new Log (530,290,20,100)
    log3 = new Log (647,290,20,100)
	dustbin = new Dustbin (595,260,170,20)
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

 ground.display();
 ball.display();
 log1.display();
 log3.display();
 dustbin.display();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {

       Matter.Body.applyForce(ball.body,ball.body.position,{x:135,y:-135});

    }
}

