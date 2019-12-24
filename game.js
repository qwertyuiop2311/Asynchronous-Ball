class Game{
    constructor(){

    }

    getstate(){
        var gamestateref=database.ref("gamestate");
        gamestateref.on("value", function(data){
            gamestate=data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }

    start(){
        if(gamestate===0){
            player=new Player()
            player.getcount()
            form= new Form()
            form.display()
        }
    }

    play(){
        form.hide()
        textSize(30)
        text("Game has Started", 120, 100)
        Player.getplayerinfo()

        if(allplayers!==undefined){
            var displayposition=130
            for(var plr in allplayers){
                if(plr==="player"+player.index){
                    fill("red")
                }
                else{
                    fill(black)
                }
                displayposition+=20
                textSize(15)
                text(allplayers[plr].name+": "+allplayers[plr].distance,120,displayposition)
            }
            
        }

        if(keyIsDown("up")&&player.index!==null){
            player.distance+=50
            player.update()
        }
    }
}