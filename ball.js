class BallClass{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
       
       this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        fill("blue")
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop()
        
      }
}
