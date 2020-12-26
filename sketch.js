const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
    World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	boxPosition=width/2-100;
	boxY=610;

	boxleftSprite=createSprite(boxPosition,boxY,20,100);
	boxleftSprite.shapeColor=color(255,0,0);
	boxleftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
	World.add(world,boxleftBody);
 
	boxbottomSprite=createSprite(boxPosition+100,boxY+40,200,20);
	boxbottomSprite.shapeColor=color(255,0,0);
    boxbottomBody=Bodies.rectangle(boxPosition+100,boxY+40,200,20,{isStatic:true});
	World.add(world,boxbottomBody);
	
	boxrightSprite=createSprite(boxPosition+200,boxY,20,100,{isStatic:true});
	boxrightSprite.shapeColor=color(255,0,0);
	boxrightBody=Bodies.rectangle(boxPosition+200,boxY,20,100,{isStatic:true});
	World.add(world,boxrightBody);

	Engine.run(engine);


}


function draw() 
{
  background(0);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
}
function keyPressed()
{
	if(keyCode ===DOWN_ARROW)
	{
		Matter.Body.setStatic(packageBody,false);
	}
}
