class Player{
    constructor(x,y,c,d){
    var options = {
    restitution: 0

    }
    this.bodies= Matter.Bodies.rectangle(x,y,c,d,options);
    this.width = c;
    this.height = d;
    this.image = loadImage("man.png")
    World.add(myworld, this.bodies);
    }

    /*jump(){
        Matter.Body.setVelocity(this.bodies,{x : 0, y : -6});
    }*/

    move(a,b){
        var pos = this.bodies.position;
        pos.x = pos.x + a;
        pos.y = pos.y + b;
        //console.log(pos)
    }

    display(){
        var pos = this.bodies.position;
        //var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle); 
        noStroke();
        //rectMode(CENTER)
        //rect(0,0,this.width,this.height)
        imageMode(CENTER); 
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}
