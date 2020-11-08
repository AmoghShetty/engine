var fixedrect;
var movingrect;
var recta;
var rectb;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(600,200,50,50);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;
  recta=createSprite(400,200,50,50);
  rectb=createSprite(400,300,50,50);
  recta.velocityY=1;
  rectb.velocityY=-1;
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY
  
  if(isTouching(fixedrect,movingrect)){
    fixedrect.shapeColor="orange";
    movingrect.shapeColor="orange";
  }else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }

   bounceOff(recta,rectb);
  drawSprites();
}

function isTouching(object1,object2){ 
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2) {
      return true;
    }
    else{

     return false;

    }
    
}
function bounceOff(object1,object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2){
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
  

    }
    if(object1.y-object2.y<object1.height/2+object2.height/2 &&
      object2.y-object1.y<object2.height/2+object1.height/2){

        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
     
      }

}