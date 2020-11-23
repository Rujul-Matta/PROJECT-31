class Plinko {
    constructor(x, y, r){
        this.body = Bodies.circle(x,y,r,{isStatic: true}); 
        this.r = r;
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
    }
    display(){
        
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(RADIUS);
        circle(pos.x, pos.y, this.r);
    }
}