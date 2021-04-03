class Fly{
    constructor(a,b){
        this.x = a
        this.y = b
       this.flyGroup = new Group()
    }

    display(){

        if (World.frameCount % 90 === 0) {
            this.fly = createSprite(this.x,this.y,10,10);  
            this.fly.x = Math.round(random(10,1000));
            this.flyImage = loadImage("rock1.png");
            this.fly.addImage(this.flyImage);
            this.fly.scale = 0.1;
            this.fly.velocityY = 3 ;
            this.fly.lifetime = 400
            this.flyGroup.add(this.fly);
        }
    }
}