class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic :true});
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        
        rectMode(CENTER);
        fill(255);
        translate(170,0);
        rect(posX,posY,this.width,this.height);
    }
}