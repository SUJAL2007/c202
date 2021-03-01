 var object2, object1;

 var box

function setup() {

  createCanvas(800,400);
  object2=createSprite(400, 100, 80, 50);
  object1=createSprite(400,300,50,50);
  object2.debug=true;
  object1.debug=true;
 // object1.velocityY=-5;
  //object2.velocityY=+5;
  box=createSprite(400,200,50,50);
  
}

function draw() {
  background("pink");  

 object1.x=mouseX;
  object1.y=mouseY;

  /*if( object1.x- object2.x < object1.width/2+ object2.width/2 &&
    object2.x-object1.x <object1.width/2+ object2.width/2 &&
    object2.y-object1.y < object1.height/2+ object2.height/2 &&
    object1.y-object2.y< object1.height/2+ object2.height/2)
  {
    object1.shapeColor="blue";
    object2.shapeColor="blue";

  }
  else
  {
    object1.shapeColor="green";
    object2.shapeColor="green";
  }*/

 /* if( object1.x- object2.x < object1.width/2+ object2.width/2 &&
    object2.x-object1.x <object1.width/2+ object2.width/2 )
    {
      object1.shapeColor="blue";
      object2.shapeColor="blue";

      object1.velocityX=object1.velocityX* (-1);
      object2.velocityX=object2.velocityX* (-1);

    }

    if(object2.y-object1.y < object1.height/2+ object2.height/2 &&
      object1.y-object2.y< object1.height/2+ object2.height/2)
      {
        object1.shapeColor="blue";
      object2.shapeColor="blue";

      object1.velocityY=object1.velocityY* (-1);
      object2.velocityY=object2.velocityY* (-1);


      }*/

if( isTouching(object1,box))
     {
       object1.shapeColor="orange"
       box.shapeColor="orange"

       
     } 
     else 
     {
      object1.shapeColor="green"
       box.shapeColor="green" 
     }
    

  drawSprites();
}






















