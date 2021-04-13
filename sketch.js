var movingrect,fixedrect,gameobject1,gameobject2;



function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 100, 75, 50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  gameobject1=createSprite(400,300,70,50);
  gameobject2=createSprite(300,300,50,50);
  gameobject1.shapeColor="blue";
  gameobject2.shapeColor="yellow";
}

function draw() {
  background(0); 
  
  movingrect.x=mouseX;
movingrect.y=mouseY;


if(istouching(movingrect,gameobject2)){
  movingrect.shapeColor="blue";
  gameobject2.shapeColor="blue";
}
else{
  movingrect.shapeColor="green";
  gameobject2.shapeColor="green";
}





  
  drawSprites();
}

