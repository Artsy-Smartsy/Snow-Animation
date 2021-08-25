
var girl_snow, girl_carrot, girl_rock, girl_hat, girl;
var snow_var , snowImg , snow ;
var bg

function preload(){
  girl_snow= loadAnimation("assets/g1.png","assets/g2.png");
  girl_carrot= loadAnimation("assets/g3.png","assets/g4.png")
  girl_rock=loadAnimation("assets/g5.png","assets/g6.png")
  girl_hat=loadAnimation("assets/g7.png","assets/g8.png")
  snowImg = loadImage("snow4.webp");
  bg=loadImage
  ("assets/bg1.png",
   "assets/bg2.png",
    "assets/bg3.png",
     "assets/bg4.png",
      "assets/bg5.png",
      "assets/bg6.png",
      "assets/bg7.png",
      "assets/bg8.png",
      "assets/bg9.png",
      "assets/bg10.png",
      "assets/bg11.png",
      "assets/bg12.png",
      "assets/bg13.png")

}


function setup() {
  createCanvas(800,400);
  let fr = 10;
  snow = new Snow
}

function draw() {
  background(bg);
    Snow ();
  drawSprites();
  console.log(frameCount);
}
function Snow() {
  if (frameCount % 10 === 0) {
    var snow_var = createSprite(80,0,40,10);
    snow_var.x = Math.round(random(0,1200));
    snow_var.addImage(snowImg);
    snow_var.scale = 0.1;
    snow_var.velocityY = 3;
    snow_var.lifetime = 250;
    snow_var.depth = girl.depth ;
    girl.depth = girl.depth + 1;
  }
}

function BackgAnimation(){
  if(frameCount>=0 && frameCount<200 ){
    bg = "assets/bg1.png";
}
else if (frameCount>=201 && frameCount<400){
    bg="assets/bg2.png"
}
}