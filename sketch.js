const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(600,600)
    engine = Engine.create();
    world = engine.world;

    drop1 = new raindrops(random(0,800),random(0,800),10,10)
    drop2 = new raindrops(random(0,800),random(0,800),10,10)
    drop3 = new raindrops(random(0,800),random(0,800),10,10)
    drop4 = new raindrops(random(0,800),random(0,800),10,10)
    drop5 = new raindrops(random(0,800),random(0,800),10,10)
    drop6 = new raindrops(random(0,800),random(0,800),10,10)
    drop7 = new raindrops(random(0,800),random(0,800),10,10)
    drop8 = new raindrops(random(0,800),random(0,800),10,10)
    drop9 = new raindrops(random(0,800),random(0,800),10,10)
    drop10 = new raindrops(random(0,800),random(0,800),10,10)
}

function draw(){
    Engine.update(engine);
    background("black");

    drop1.display();
    drop1.update();
    drop2.display();
    drop2.update();
    drop3.display();
    drop3.update();
    drop4.display();
    drop4.update();
    drop5.display();
    drop5.update();
    drop6.display();
    drop6.update();
    drop7.display();
    drop7.update();
    drop8.display();
    drop8.update();
    drop9.display();
    drop9.update();
    drop10.display();
    drop10.update();
}   

