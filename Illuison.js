class illuison{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,20,100);
        this.width=20;
        this.height=100;
        this.image = loadImage("skeleton.jpg");
        World.add(world,this.body);
    }
    updateY(){     
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        
    }
    showIlluison(){
        fill("blue")
        imageMode(CENTER);
        image(this.body.position.x,this.body.position.y,20,100);
    }
}