const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var scary;
var guy, background1;
var maxIllusion=1;
var illusions=[];
var world,engine;
var ground1;
function preload(){

}
function setup(){

engine=Engine.create();
world=engine.world;

ground1= new ground(displayWidth/2,0,displayWidth,10);
ground1.visble=false;
    
createCanvas(800,400);
guy = new player(100,100);
guy.scale=0.1;

if(frameCount%150===0 || this.guy<background-50){
    for(var i=0;i<maxIllusion;i++){
       illusions.push(new illusion(random(0,400),random(0,400)));
    }   
 }
}

function draw(){

Engine.update(engine);


background1=guy.x+100;
background1=guy.y+100;

if(guy.x<background || guy.y<background){
    background1=background(255); 
}
else{
    background1=background(0);
}

if(keyDown(UP_ARROW)){
    velocityY=-3;
}
if(keyDown(DOWN_ARROW)){
    velocityY=3;
}
if(keyDown(RIGHT_ARROW)){
    velocityX=3;
}
if(keyDown(LEFT_ARROW)){
    velocityX=-3;
}
guy.display();
ground1.display();

for(var i=0;i<maxIllusion;i++){
    illusions[i].showIllusion();
    illusions[i].updateY();
 }

drawSprites();
}