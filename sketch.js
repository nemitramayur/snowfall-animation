const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bgimg,ice,iceGroup;

function preload(){
  bgimg=loadImage("snow3.jpg");
  ice=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world= engine.world;
  iceGroup = new Group();
}
function draw() {
  background(bgimg);  
  Engine.update(engine);
  drawSprites();
  spawnice();
}
