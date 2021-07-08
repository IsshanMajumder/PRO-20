var canvas,bgImg
var together
var tom, tomImg1, tomImg2, tomImg3
var jerry, jerryImg1, jerryImg2, jerryImg3

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadImage("images/cat2.png");
    tomImg3 = loadImage("images/cat3.png");
    jerryImg1 = loadImage("images/mouse1.png");   
    jerryImg2 = loadImage("images/mouse2.png");
    jerryImg3 = loadImage("images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870, 600);
    tom.addAnimation("tomsleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
     tom.velocity = 0;
     tom.addAnimation("tom last image", tomImg3);
     tom.scale=0.2;
     tom.changeAnimation("tom last image");
     jerry.addAnimation("jerry last image", jerryImg3);
     jerry.scale=0.15;
     jerry.changeAnimation("jerry last image");

    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode == LEFT_ARROW)
  {   tom.velocityX = -5;
      tom.addAnimation("tomRunning", tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerryImg2);
      jerry.frameDelay=25;
      jerry.changeAnimation("jerryTeasing")
  }



}
