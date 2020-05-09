class Triangle{
    constructor(x, y, sides ,radius, color){
        var options ={
            restitution :0,
            friction :1,
            density :0.2,
            isStatic :true
        }
        this.body = Bodies.polygon(x, y, sides ,radius, color, options);
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var vertices = this.body.vertices;
        push();
        translate(34,0);
        strokeWeight(3);
        stroke("brown");
        fill(this.color);
        triangle(vertices[0].x,vertices[0].y,vertices[1].x,vertices[1].y,vertices[2].x,vertices[2].y);
        pop();
    }
}