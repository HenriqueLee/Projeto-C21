const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var wall, wall2, ground


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new ground(width/2,650,width,20);
	wall = new ground(600,700,20,100);
	wall2 = new ground(700,700,20,100);
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}
    ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball_options);
	Engine.run(engine);
}    

function draw(){
	rectMode(CENTER)
	background("black")
	ground.show()
	wall.show()
	wall2.show()
	ellipse(ball.position.x,ball.position.y,20,20)
}
	 
	 





