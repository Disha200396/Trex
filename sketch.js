var trex,trex_anim;

function preload() {
  trex_anim = loadAnimation("trex1.png","trex3.png","trex.4.png");
}

function setup() {
  createCanvas(400, 400);
  trex = createSprite(200,200,50,50);
  trex.addAnimation("c1",trex_anim);
}

function draw() {
  background(220);
  drawSprites();
}