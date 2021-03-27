class Ground{
    constructor(a,b,c,d){
    var options = {
        isStatic: true 

    }
   this.bodies= Bodies.rectangle(a,b,c,d,options);
   this.width = c;
   this.height = d;
    World.add(myworld, this.bodies);
    }

    display(){
        var pos = this.bodies.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y,this.width, this.height);
       // Matter.Body.setVelocity(this.bodies,{x:-5,y:0})
       /* if(pos.x < 0){
            Matter.Body.setPosition(this.bodies,{x : displayWidth/2 , y : displayHeight-200})
        } */
    }
}