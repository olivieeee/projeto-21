
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bolinha
var parede1
var parede2
var chao


function preload()
{ 
	
}

function setup() {
	createCanvas(600, 400);
	var bolinha_opcao={
		isStatic:false,
		restuition:0.05,
		friction:0,
		density:1.2,
	}
	var chao_opcao={
isStatic:true

	}

	



	engine = Engine.create();
	world = engine.world;
	bolinha=Bodies.circle(100,300,20, bolinha_opcao);
	World.add(world, bolinha)
	chao=Bodies.rectangle(300,400,600,30,chao_opcao)
	World.add(world, chao)
	parede1=Bodies.rectangle(380,350,15,100,chao_opcao)
	World.add(world, parede1)
	parede2=Bodies.rectangle(550,350,15,100,chao_opcao)
	World.add(world, parede2)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(160);
  
  drawSprites();
  ellipse(bolinha.position.x,bolinha.position.y,35)
  rect(chao.position.x,chao.position.y,600, 30)
 rect(parede1.position.x,parede1.position.y,15, 100)
 rect(parede2.position.x,parede2.position.y,15, 100)
}
function keyPressed(){
 
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(bolinha,{x:0,y:0},{x:10,y:-05})

	}

}



