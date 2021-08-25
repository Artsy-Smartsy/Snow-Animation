class Snow{
    constructor(x){
        var options={
            restitution:0.1,
            density:0.5,
            
        }
       
        this.body=Bodies.rectangle(x,-20,50,50,options);
        this.x=x;
        this.y=50;
        this.image=loadImage("snow5.webp");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        if(this.y=800){World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
       
        image(this.image,0,0,50,50);
        
        //console.log(this.body);
        pop();
    }
}