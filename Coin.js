class Coin{
    constructor(a,b,r){
    var options = {
        restitution :1.0
     }
   this.bodies= Bodies.circle(a,b,r);
   this.width = a;
   this.height = b;
   this.rad = r;
   //this.image = loadImage("coin.png")
    World.add(myworld, this.bodies);
    }


    display(){
            var pos = this.bodies.position;
            push();
            translate(pos.x, pos.y);
            noStroke();
            ellipseMode(RADIUS);
            fill("yellow");
            ellipse(0,0,this.rad,this.rad)
            //image(this.image,0,0,this.rad,this.rad);
            pop();
    }
}