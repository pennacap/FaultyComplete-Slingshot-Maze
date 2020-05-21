class SlingShot {
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.body = Constraint.create(options);
        this.pointB= pointB;
        World.add(world, this.body);
    }
    display() {
        if (this.body.bodyA) {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB
            push();
            stroke(255)
            //line(this.body.bodyA.position.x-10, this.body.bodyA.position.y+10, this.pointB.x, this.pointB.y);
            //line(this.body.bodyA.position.x+10, this.body.bodyA.position.y+10, this.pointB.x, this.pointB.y);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 8, pointA.y+10, pointB.x -10, pointB.y);
                line(pointA.x+8, pointA.y+10, pointB.x + 10, pointB.y - 3);
               // image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
            pop();
        }
    }
    fly() {
        this.body.bodyA = null;
    }
    attach(body) {
        this.body.bodyA = body;
    }
    
}