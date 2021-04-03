var player1
var enemy1
var restart
var bg
var score = 0;
var gameState = "play";

function preload(){

checkPoint = loadSound("checkPoint.mp3");
dieSound = loadSound("die.mp3");
}

function setup(){

createCanvas(1100,500);

bg = new Bg()

player1 = new Player(580,460);

enemy1 = new Enemy(100,100);

restart = new Restart();
    
fly1 = new Fly(0, 100);
}

function draw(){

background("black");
bg.display();

if(gameState == "play"){
    restart.button.visible = false;
    player1.display();
    enemy1.display();

    fly1.display();

    for (var i = 0; i < enemy1.enemyGroup.length; i++) {
    
        if(enemy1.enemyGroup.get(i).isTouching(player1.bullet)){
        enemy1.enemyGroup.get(i).remove()
        score =score+1;
        checkPoint.play();
    
        }
    }

    if(enemy1.enemyGroup.isTouching(player1.player) || fly1.flyGroup.isTouching(player1.player)){
        gameState = "end"
        //player1.player.remove()
        //player1.bullet.remove()
        dieSound.play();
        }

}
    drawSprites()

if(gameState == "end"){
    restart.button.visible = true;
    bg.back.velocityY = 0;
    fill ("white")
    textSize(25);
    text("Game Over ", 430,100)
    if(mousePressedOver(restart.button)) {
        restart.display();
      }
}

fill ("white")
textSize(25);
text("score - " + score , 950,80)
text("SPACEX" , 450 , 50)
}

function mouseReleased(){
    if(gameState == "play" ){
        player1.shoot()
    }
    
}