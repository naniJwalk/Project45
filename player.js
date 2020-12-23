class player{
    constructor(x,y){
    var options={
        friction:0.01
    }
    this.body = Bodies.rectangle(x, y, 20, 100, options);
    this.width = 20;
    this.height = 100;
    this.x=x;
    this.y=y;
    //this.image = loadAnimation("sadwalk1.png","sadwalk2.png","sadwalk3.png","sadwalk4.png","sadwalk5.png");
    this.image = loadImage("sadwalk1.png");
    World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,20, 100);
        pop();
      }
}