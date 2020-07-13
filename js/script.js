
//need button class and 4 buttons
const startButton = document.querySelector(`#start`)
const startClick = startButton.addEventListener("click", startGame)

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
        this.button = document.querySelector(`.${this.color}`)
        this.click = this.button.addEventListener("click",this.click)
    }
    click = () => {
        this.flash();

    }
    flash = () => {
        if (this.color == "red") {
            this.button.style.borderTop = "200px solid lightcoral";
        } else {
            console.log(this.color);
            let color = `light${this.color}`;
            console.log(color);
            this.button.style.borderTop = "200px solid " + color;
        }
        setTimeout (this.darkcolor, 500) 
    }
    darkcolor =() => {
        this.button.style.borderTop = "200px solid " + this.color;
    }

}


const red =new Button("red");
const yellow = new Button("yellow");
const green = new Button("green");
const blue = new Button("blue");

//need game sequence class

function startGame(e){
    e.preventDefault();
    while(compSequence.pattern = player1.pattern){
        compSequence.pattern.push(nextSequence)
        compSequence.playSequence

    }
}

class Sequence{
    constructor(){
        this.pattern=[];
    }
    newButton = () => {

    }
    randomColor = () => {
        let nextSequence = Math.floor(Math.random()*4)
        switch(nextSequenc) {
            case 0:
                nextSequence="red";
                break;
            case 1:
                nextSequence="yellow";
                break;
            case 2:
                nextSequence="green";
                break;
            case 3:
                nextSequence="blue";
                break;
        }
    return nextSequence;
    }
    playSequence = () => {
        for(let i=0;i<this.pattern.length;i++){
            this.pattern[i].flash
            //wait
        }
    }
}

const compSequence = new Sequence()
const player1 = new Sequence()

//need to evaluate play



//need timer


//need random generator



