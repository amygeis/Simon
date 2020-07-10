
//need button class and 4 buttons



class Player{
    constructor(){
        this.level = level;

    }
    score = () =>{

    }    
}

class Button{
    constructor(color){
        this.color = color;
        this.bright = false;
        this.click = document.querySelector(`.${this.color}`).addEventListener("click",this.click)
    }
    click = () => {
        console.log(this.color)

    }
    flash = () => {

    }
}

const red =new Button("red");
const yellow = new Button("yellow");
const green = new Button("green");
const blue = new Button("blue");

//need game sequence class

class Sequence{
    constructor(){
        this.pattern=pattern;
    }
    newButton = () => {

    }
}
//need to evaluate play



//need timer


//need random generator


