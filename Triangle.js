class Triangle{
    constructor(x, y, sides ,radius, angle, color){
        var options ={
            restitution :0,
            friction :1,
            density :0.2,
            isStatic :true
        }
        this.body = Bodies.polygon(x, y, sides ,radius, color, options);
        Matter.Body.setAngle(this.body,angle);
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var vertices = this.body.vertices;
        var angle = this.body.angle;
        push();
        rotate(angle);
        strokeWeight(1);
        stroke("white");
        fill(this.color);
        triangle(vertices[0].x,vertices[0].y,vertices[1].x,vertices[1].y,vertices[2].x,vertices[2].y);
        pop();
    }
}