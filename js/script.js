
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
        clearTimeout(timer)
        this.flash();
        console.log(this.color)
        player1.pattern.push(this.color)
        console.log(player1.evaluate())
        return;
    }
    flash = () => {
        console.log("flash")
        if (this.color == "red") {
            this.button.style.borderTop = "200px solid lightcoral";
        } else {
            //console.log(this.color);
            let color = `light${this.color}`;
            //console.log(color);
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
    //while(compSequence.pattern = player1.pattern){
        //console.log(compSequence.randomColor)
        let newColor = compSequence.randomColor()
        console.log(newColor)
        compSequence.pattern.push(newColor)
        timer = setTimeout(player1.lose,5000)
        console.log(compSequence.pattern)
        compSequence.playSequence()
        console.log("sequence played")
        //player1Timer.start()
        

    //}
}

class Sequence{
    constructor(){
        this.pattern=[];
    }
    newButton = () => {

    }
    randomColor = () => {
        let nextSequence = Math.floor(Math.random()*4)
        console.log(nextSequence)
        switch(nextSequence) {
            case 0:
                nextSequence="red";
                return nextSequence;
                break;
            case 1:
                nextSequence="yellow";
                return nextSequence;
                break;
            case 2:
                nextSequence="green";
                return nextSequence;
                break;
            case 3:
                nextSequence="blue";
                return nextSequence;
                break;
        }
    return nextSequence;
    }
    playSequence = () => {
        for(let i=0;i<this.pattern.length;i++){
            console.log(this.pattern.length);
            let color = this.pattern[i];
            console.log(color);
            setTimeout ([color].flash(), 1000); 
            //wait
        }
    }
    evaluate = () =>{
        for(let i=0;i<this.pattern.length;i++){
            if (this.pattern[i] = compSequence.pattern[i]){
                return true;
            } else {
                return false;
                break;
            }
        }
            
        
    }
    lose =() => {
        console.log("player 1 loses")
    }
}

const compSequence = new Sequence()
const player1 = new Sequence()

//need to evaluate play

let timer;


