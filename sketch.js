var s1,s2,s3,s4
var sprite=[]
function setup() {
  createCanvas(400,400);
  s1=createSprite(75,100,30,30)
  s2=createSprite(150,250,30,30)
  s3=createSprite(300,300,30,30)
  s4=createSprite(350,150,30,30)
  sprite=[s1,s2,s3,s4]
  console.log(sprite[0].position.x,sprite[1].position.x,sprite[2].position.x,sprite[3].position.x)

}
function draw(){
  background(100,200,50)
  drawSprites()
}



