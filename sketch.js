const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
var player;
var ground;
var boundries = []
var coinArray = [];
var coin;
var score = 0;
var missed = 0;
var count = 0;

function setup(){
    var canvas = createCanvas(800,550);
    engine = Engine.create();
    myworld = engine.world;
    
    player = new Player(width/4,450,50,100);
    ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k=k+width-2) {
      boundries.push(new Boundries(k,0,10,height*2));
    }
}


function draw(){
    background(230, 255, 230);
    Engine.update(engine);
    textSize(20)
    fill ("Green")
    text ("Score   : " + score,width-150,20)
    text("Coin Collector", width/2-100,20)
    fill ("Red")
    text("Missed : " + missed, width-150,40)

    ground.display();
    player.display();

    if(frameCount % 60===0){
      coinArray.push(new Coin(random(0,width),50,15));
      count++;
    }

    for (var j = 0; j < coinArray.length; j++) {
      coinArray[j].display();
      
      if(Matter.SAT.collides(player.bodies, coinArray[j].bodies).collided){
        score = score + 1;
        World.remove(myworld,coinArray[j].bodies)
        coinArray.splice(j,1)
      }
      else if(Matter.SAT.collides(coinArray[j].bodies, ground.bodies).collided){
        missed = missed + 1
        World.remove(myworld,coinArray[j].bodies)
        coinArray.splice(j,1)
      }
      
      if(missed >= 5){
        textSize(40)
        text("Game Over", width/2-100,height/2)
      }
    }
    
    for (var k = 0; k < boundries.length; k++) {
      boundries[k].display();
    }
    World.add(myworld,keyPressed)

  }

function keyPressed(){
    /*if(keyCode === 32){
       player.jump();
     }*/
     if(keyCode === LEFT_ARROW){
        player.move(-5,0);
      }
      if(keyCode === RIGHT_ARROW){
        player.move(5,0);
      }
}




 //Matter.SAT.collides(player.bodies, coin2.bodies).collided
    
