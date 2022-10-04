var ship ,ship_moving;

var seaImg, seaImg1;

function preload(){

ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(120, 200, 20, 50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.25;

  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale = 0.25;
  sea.velocityX = -2;

  sea.depth = ship.depth;
  ship.depth = ship.depth + 1;

}

function draw() {
  background("blue");
    
  sea.velocityX = -2

if(sea.x < 0){

  sea.x = sea.width/8;

}

  drawSprites();
}
