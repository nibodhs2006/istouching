var mrect
var frect




function setup() {
  createCanvas(800,800);
 mrect=createSprite(300,400,70,120)
 mrect.shapeColor='green'
mrect.debug=true

 frect=createSprite(500,200,130,90)
 frect.shapeColor='green'
 frect.debug=true
}

function draw() {
  background('cyan');  

mrect.x=mouseX
mrect.y=mouseY

if(mrect.x-frect.x<mrect.width/2+frect.width/2&&frect.x-mrect.x<mrect.width/2+frect.width/2&&
  mrect.y-frect.y<mrect.height/2+frect.height/2&&frect.y-mrect.y<mrect.height/2+frect.height/2){
mrect.shapeColor='red'
frect.shapeColor='red'

}
else{
  mrect.shapeColor='green'
  frect.shapeColor='green'
}
  drawSprites();
}