class Restart {
    constructor(){
        this.x = 500;
        this.y = 150;

        
        this.button = createSprite(this.x,this.y,50,50);
        this.buttonImage = loadImage("restart1.png");
        this.button.addImage(this.buttonImage);
        this.button.scale = 0.3
       
        }

    display(){
       gameState = "play" ;
       score = 0;
       bg.back.velocityY = 1;
    }
}