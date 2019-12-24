var database, canvas, backgroundimage, gamestate=0, playercount, form, player, game, allplayers, distance=0;

function setup(){
    database = firebase.database()
    canvas=createCanvas(400,400);
    
    game=new Game()
    game.getstate()
    game.start()

    
}

function draw(){
    if(playercount===4){
        game.update(1)
    }

    if(gamestate===1){
        clear()
        game.play()
        
    }
}
