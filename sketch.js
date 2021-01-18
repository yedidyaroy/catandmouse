var tom,tomoneImage,tomtwoImage,tomthreeImage;
var backGround,backGroundImage;
var jerry,jerryImage;
function preload() {
    //load the images here
backGroundImage = loadImage("garden.png")
tomoneImage = loadImage("tomOne.png")
jerryImage = loadAnimation("jerryOne.png")
tomtwoImage = loadAnimation("tomTwo.png","tomThree.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backGround=createSprite(200,200,20,20);
    backGround.addImage(backGroundImage);

    tom = createSprite(550,470,20,20);
    tom.addImage(tomoneImage);
    tom.scale=0.1;

    jerry = createSprite(100,450,20,20);
    jerry.addAnimation("standing",jerryImage);
    jerry.scale=0.1;
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
   tom.velocityX=-5;
   tom.changeAnimation("moving",tomtwoImage);
   //tom.changeAnimation("moving")
  }

}
