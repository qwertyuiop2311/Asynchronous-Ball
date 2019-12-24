class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Play")
        this.greeting=createElement("h3")
    }

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game")
        title.position(130, 0)

        
        this.input.position(130, 160)

       
        this.button.position(250, 200)

        
        this.button.mousePressed(function(){
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playercount++
            player.index=playercount
            player.update()
            player.updatecount(playercount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(130, 160)
        })
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}