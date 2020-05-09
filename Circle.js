class Circle{
    constructor(x,y,width){
        var options ={
            restitution :0.1,
            friction :1,
            density :0.5,
            isStatic :true
        }
        this.body = Bodies.circle(x,y,width,options);
        this.width = width;
        World.add(world, this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;

        push();
        strokeWeight(4);
        stroke("orange");
        fill("yellow");
        ellipse(posX,posY,this.width);
        pop();
    }
}