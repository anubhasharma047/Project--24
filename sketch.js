const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber1;
var rubber2;
var stone1;
var stone2;
var rubber3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new rubber(850,564,10,10);
    rubber2 = new rubber(950,564,10,10);
    rubber3 = new rubber(750,564,50,20);
    stone1 = new stone(550,500,50);



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    stone1.display();
    rubber3.display();
    
 
}