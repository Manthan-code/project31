class Particle{
    constructor(x, y,radius) {
        var options = {
            restitution:0.5
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius);
        pop();
      }
  }