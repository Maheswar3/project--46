
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background,backgroundImg 
function preload()
{
backgroundImg = loadImage ("th.jpg")	
}

function setup() {
	createCanvas(windowHeight,windowWidth);
	background= createSprite (displayWidth/2-20,displayHeight/2-40,60,60)
	background.addImage (backgroundImg)
	background.scale=7;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bunny=new bunny(600,200);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

   Bunny.display ();
  drawSprites();
  
  if(keyDown("UP_ARROW")|| touches.length>0){
    Bunny.y=Bunny.y-30
  }

  if(keyDown("RIGHT_ARROW")|| touches.length>0){
    Bunny.x=player.x+30
  }
  if(keyDown("LEFT_ARROW")|| touches.length>0){
     Bunny.x=Bunny.x+30
  }
}



