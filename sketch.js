const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1,box2, box3, box4,box5;
var log1,log2,log3,log4;
var pig1, pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,390,1200,20)

    box1 = new Box(450,350,70,70);
    box2 = new Box(700,350,70,70);

    log1 = new Log(570,310,20,330,PI/2);

   box3 = new Box(450,270,70,70);
   box4 = new Box(700,270,70,70);

    log2 = new Log(570,230,20,330,PI/2);

    box5= new Box(580,185,70,70);

    log3 = new Log(525,185,20,150,PI/7);
    log4 = new Log(670,185,20,150,-PI/7);

pig1 = new Pig(570,350);
pig2 = new Pig(570,270);

bird=new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

box1.display();
box2.display();

log1.display();

box3.display();
box4.display();

log2.display();

box5.display();

log3.display();

log4.display();

pig1.display();

pig2.display();

bird.display();
}
