class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        player1 = createSprite(200,500);
        player1.addImage("player1",mouth1_img);
        player1.scale=0.08

        player2 = createSprite(800,500);
        player2.addImage("player2", mouth2_img);
        player2.scale=0.08

        players=[player1,player2];
    }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            if(index === player.index){   
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25); 
            }
           
            if(index===player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name,x-25,y+25);
            }
            textSize(25);
            fill("white");
            text("Player 1:"+allPlayers.player1.score,50,50);
            text("Player 2:"+allPlayers.player2.score,50,100);
            // Add code to diplay the scores of both 
            // the players on the screen



        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }
    
        if (frameCount % 40 === 0) {
            cake = createSprite(random(100, 1000), 0, 100, 100);
            cake.velocityY = 6;
            cake.scale=0.08
            var rand = Math.round(random(1,3));
            switch(rand){
                case 1: cake.addImage("cake1",cake1_img);
                break;
                case 2: cake.addImage("cake2", cake2_img);
                break;
                case 3: cake.addImage("cake3", cake3_img);
                break;
            }
            cakeGroup.add(cake);
            
        }

        if (frameCount % 60 === 0) {
            candy = createSprite(random(200, 500), 0, 100, 100);
            candy.velocityY = 6;
            candy.scale=0.08
            var rand = Math.round(random(1,2));
            switch(rand){
                case 1: candy.addImage("candy1",candy1_img);
                break;
                case 2: candy.addImage("candy2", candy2_img);
                break;
            }
            candyGroup.add(candy);
            
        }

        if (frameCount % 120 === 0) {
            veg = createSprite(random(300, 700), 0, 100, 100);
            veg.velocityY = 6;
            veg.scale=0.08
            var rand = Math.round(random(1,3));
            switch(rand){
                case 1: veg.addImage("vegetable1",vegetable1_img);
                break;
                case 2: veg.addImage("vegetable2", vegetable2_img);
                break;
                case 3: veg.addImage("vegetable3", vegetable3_img);
                break;
            }
            vegGroup.add(veg);
            
        }

        if(player.index!=null){
            for(var i=0;i<cakeGroup.length;i++){
                if(cakeGroup.get(i).isTouching(players)){
                    cakeGroup.get(i).destroy();
                    player.score+=2;
                    player.update();
                }
            }
        }

        
        if(player.index!=null){
            for(var i=0;i<candyGroup.length;i++){
                if(candyGroup.get(i).isTouching(players)){
                    candyGroup.get(i).destroy();
                    player.score+=1;
                    player.update();
                }
            }
        }

        
        if(player.index!=null){
            for(var i=0;i<vegGroup.length;i++){
                if(vegGroup.get(i).isTouching(players)){
                    vegGroup.get(i).destroy();
                    player.score-=1;
                    player.update();
                }
            }
        }

        if(player.score >=50){
            gameState = 2;
            this.end();
          }



    }

    end(){
        textSize(40);
        fill("black");
        text("GAME OVER",400,400);

       // Add code to update game state and display Game Over


       
    }
}
