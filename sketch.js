
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var bola;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		desity:1.2
	}
	bola=Bodies.circle(500,600,20)
	World.add(world,bola)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  ellipse(bola.position.x,bola.position.y,40)

  groundObject.display();
  dustbinObj.display();

}

function keyPressed () {
    if (keyCode === UP_ARROW) {
		console.log("tecla")		
        Matter.Body.applyForce(bola,bola.position,{x:0.03,y:-0.09});
    }
}
