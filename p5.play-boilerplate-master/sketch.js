var girl
var bee, beeGroup, butterfly,butterflyGroup;
var backgroundImg
var invisibleGround
var edge
var score

function preload(){
  backgroundImg=loadImage("Normal Background.jpeg");
  girlImg=loadImage('girl1.png')
  beeImg=loadImage('Bee.jpg')
  ButterflyImg=loadImage('Butterfly.jpeg')
}






function setup() {
  createCanvas(600,400);
  girl=createSprite(350,200,35,35)
  girl.addImage(girlImg);
  girl.scale=0.1

  edge=createSprite(300,390,600,16)
  edge.visible=true



  createEdgeSprites()
  girl.collide(edge)
  
}

function draw() {
  background(backgroundImg);  
  if(keyDown("space")){
    girl.y=girl.y-5

  }
  girl.y=girl.y+0.5
  drawSprites();
  
}