class Rectangle{
    constructor(x,y,width,height,color){
        var options ={
            restitution :0,
            friction :1,
            density :0.5,
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        rectMode(CENTER);
        strokeWeight(3);
        stroke("brown");
        fill(this.color);
        translate(200,0);
        rect(posX,posY,this.width,this.height);
        pop();
    }
}
