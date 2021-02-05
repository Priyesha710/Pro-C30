class Box{
    constructor(xInput,yInput,colourInput){
        var options = {
            friction:0.5,
            density:1
        }
        //colourInput has to be a string
        this.colour = colourInput;
        this.body = Bodies.rectangle(xInput,yInput,40,40,options);
        World.add(userWorld,this.body);
    }
    display(){
        if(this.body.speed<5){
        push();
        fill(this.colour);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,40,40);
        pop();
        }else{
            World.remove(userWorld,this.body);
            push();
            this.visibility = this.visibility - 15;
            tint(255,this.visibility);
            pop();
           
        }
    }
}