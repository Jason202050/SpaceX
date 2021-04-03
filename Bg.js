class Bg {
    constructor(){
        this.x = 550;
        this.y = 100;

        this.back = createSprite(this.x,this.y);
        this.bgImage = loadImage("background1.jpg");
        this.back.addImage(this.bgImage);
        this.back.velocityY = 1;
       
        }

    display(){
        if(this.back.y > 800){
            this.back.y = 100

        }
    }
}