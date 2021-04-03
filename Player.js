class Player{
    constructor(a,b){
        this.x = a
        this.y = b
        this.player = createSprite(this.x,this.y,10,10);  
        this.playerImage = loadImage("player spaceship.png");
        this.player.addImage(this.playerImage);
        this.player.scale = 0.2
        this.bulletImage = loadImage("laser.png")
        this.laserSound = loadSound("lasersound.wav")
    }

    display(){

        this.player.x = mouseX;
        this.player.y = mouseY;
    }

    shoot(){
    this.bullet = createSprite(this.player.x,this.player.y - 70)
    this.bullet.addImage(this.bulletImage);
    this.bullet.scale = 0.1
    this.bullet.velocityY = -2;
    this.laserSound.play();
    }
}
