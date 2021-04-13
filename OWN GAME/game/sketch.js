var peopleWithMask, peopleWithMaskimg2, peopleWithoutMask, player, ground, peopleWithMaskGroup, peopleWithoutMaskGroup, peopleWithoutMaskimg1, peopleWithMaskimg1;
var score = 0;
var playerimg, backgroungimg
var peopleWithoutMaskimg2, peopleWithoutMaskimg3, peopleWithoutMaskimg4, peopleWithoutMaskimg5, peopleWithoutMaskimg6, peopleWithoutMaskimg7
var virusImg;
var ouch;
var virus;
var PLAY = 1;
var gameState = PLAY;
var gameState = END;

function preload(){
 peopleWithoutMaskimg1 = loadImage("bwithoutmask.jpg")
 peopleWithoutMaskimg2 = loadImage("gwithoutmask.jpg")
 peopleWithoutMaskimg3 = loadImage("without2.jpg")
 peopleWithoutMaskimg4 = loadImage("imageedit_24_4288903951.jpg")
 peopleWithoutMaskimg5 = loadImage("imageedit_25_2594517995.jpg")
 peopleWithoutMaskimg6 = loadImage("imageedit_26_8288151091.jpg")
 peopleWithoutMaskimg7 = loadImage(" imageedit_27_7563752427.jpg")
 peopleWithMaskimg1 = loadImage("bwithmask.jpg")
 peopleWithMaskimg2 = loadImage("gwithmask.jpg")
 virusImg = loadImage("download (2).png");
 playerimg = loadAnimation("boy1.jpg", "boy2.jpg", "boy3.jpg", "boy4.jpg");
 ouch = loadSound("176653326.mp3");
}

function setup(){
    createCanvas(2000, 600);
 
    player = createSprite(400, 400, 30, 30)
    player.addAnimation("Boy", playerimg)
    player.scale = 0.3
    ground = createSprite(1, 500, displayWidth*4, 10)
    peopleWithMaskGroup = new Group();
    peopleWithoutMaskGroup = new Group();
    virusGroup = new Group();

console.log(windowWidth, windowHeight);
console.log(displayWidth,displayHeight)

    //peopleWithoutMask.shapeColor("red")
    //ground.shapeColor = ("black")
    virusGroup.debug= true;
}
function draw(){
    background("white")
    if(gameState === PLAY){

    
    score = score + Math.round(getFrameRate()/60);
    textSize(40)
    stroke(random(0, 225), random(0, 225), random(0, 225));
    text("SCORE :"+ score, 1200, 100);
if(keyDown("space")||keyDown("UP_ARROW")&&player.y>=150){
    player.velocityY = -7;
}
if(keyDown("RIGHT_ARROW")){
 player.velocityX = +7;
 player.velocityY = 0;   
}
player.velocityY += 0.6;
player.collide(ground);
spawnPeopleWithMask();
spawnPeopleWithoutMask();
cVirus();
    }
if(player.isTouching(virusGroup)){
   ouch.play();
}
if(gameState === END){
 score = 0;
 player.velocityX = 0;
 player.velocityY = 0;
 player.removeAnimation("Boy", playerimg)
 peopleWithMask.velocityX = 0
 peopleWithoutMask.velocityX = 0
 virus.velocityY = 0;

}



    drawSprites();
}
function spawnPeopleWithMask(){
    if(frameCount % 211 === 0){
    peopleWithMask = createSprite(1100, 430, 30, 30);
    //peopleWithMask.shapeColor("green");
    var rand  = Math.round(random(1, 2))
    switch (rand){
        case 1:peopleWithMask.addImage(peopleWithMaskimg1);
        break;
        case 2:peopleWithMask.addImage(peopleWithMaskimg2);
        break;
    }
    peopleWithMask.scale = 0.2;
    peopleWithMask.velocityX = -9
    peopleWithMask.lifetime = 150;
    peopleWithMaskGroup.add(peopleWithMask);
    }
}
function spawnPeopleWithoutMask(){
    if(frameCount % 78 === 0){
        peopleWithoutMask = createSprite(1100, 430, 30, 30);
        peopleWithoutMask.velocityX = -9
        var rand = Math.round(random (1, 7))
        switch(rand){
             case 1:peopleWithoutMask.addImage(peopleWithoutMaskimg1);
             break;
             case 2:peopleWithoutMask.addImage(peopleWithoutMaskimg2);
             break;
             case 3:peopleWithoutMask.addImage(peopleWithoutMaskimg3);
             break;
             case 4:peopleWithoutMask.addImage(peopleWithoutMaskimg4);
             break;
             case 5:peopleWithoutMask.addImage(peopleWithoutMaskimg5);
             break;
             case 6:peopleWithoutMask.addImage(peopleWithoutMaskimg6);
             break;
             case 7:peopleWithoutMask.addImage(peopleWithoutMaskimg7);
             break;
        }
        peopleWithoutMask.scale = 0.5;
       // peopleWithoutMask.rotate = 45;
        peopleWithoutMask.lifetime = 150;
        console.log(peopleWithoutMask.rotation);
        //peopleWithoutMask.rotation = 8.5;
        peopleWithoutMaskGroup.add(peopleWithoutMask);
    }
}
function cVirus(){
    if(frameCount % 85 === 0){
     virus = createSprite(100, 40, 30, 30);
     virus.addImage(virusImg)
     virus.scale  = .3;
     virus.setCollider("circle", 0,0,80);
virus.debug =true;
     virus.x = Math.round(random(100,700));
     //virus.y = Math.round(random(100,700));
        //peopleWithMask.shapeColor("green");
        virus.velocityY = 9;
        virusGroup.add(virus);
        virus.lifetime = 150;
       // console.log(virus.setCollider)
        
        }
}