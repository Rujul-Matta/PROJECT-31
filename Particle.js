class Particle {
    constructor(){
        this.body = Bodies.circle(random(10, width-10),75,10,{isStatic: false}); 
        this.r = 10;
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        // translate(pos.x, pos.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}