var appleImg;
var leafImg;
var gardenImg;
var rabbitImg;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}



function draw() {
  background(0);
  

  rabbit.x = World.mouseX 

  edges= createEdgeSprites();
  rabbit.collide(edges);
  


  var select_sprites = Math.round(random(1,2));
  
  if (frameCount % 80 == 0)  { 
  if (select_sprites == 1 ) {
   createApples() 
  } else if (select_sprites == 2 ) {
    createLeaves() 
    }
 }


  drawSprites();

  text( "frames elapsed: " + frameCount, 10, 30 );
  text( "select sprites: " + select_sprites, 10, 60 );

}


function createApples() {
  apple=createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.1
  apple.velocityY = 2.5
  apple.lifetime = 50
  }



function createLeaves() {
  
  leaf=createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1
  leaf.velocityY = 2.5
  leaf.lifetime = 50
  
  }

  