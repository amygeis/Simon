
//need button class and 4 buttons
const startButton = document.querySelector(`#start`)
const startClick = startButton.addEventListener("click", startGame)

class Player{  ///future
    constructor(){
        this.level = level;

    }
    score = () =>{

    }    
}

///   *******Button Class************

class Button{
    constructor(color){
        this.color = color;
        this.bright = false;
        this.button = document.querySelector(`.${this.color}`)
        this.click = this.button.addEventListener("click",this.click)
    }
    click = () => {
        //clearTimeout(timer)   //silver
        this.flash();
        console.log(this.color)
        player1.pattern.push(this.color)
        
        if(evaluate()){
           // timer = setTimeout(player1.lose,5000) //silver level - timeout on user input
        } else {
            // console.log(`evaluate false=${evaluate}`)
            player1.lose()
        }
        if(player1.pattern.length == compSequence.pattern.length){
            console.log("length matches")
            clearTimeout(timer)
            console.log(player1.pattern)
            player1.pattern=[];
            player1.turn=false;
        }
        return;
    }
    flash = () => {
        //console.log("flash")
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

//******    Button declaration ********* */
const red =new Button("red");
const yellow = new Button("yellow");
const green = new Button("green");
const blue = new Button("blue");

//************  startgame function ********** */

function startGame(e){
    e.preventDefault();
    //for(let l=0;l<15;l++){
        //console.log(compSequence.randomColor)
        let newColor = compSequence.randomColor()
        console.log(newColor)
        compSequence.pattern.push(newColor)
        //timer = setTimeout(player1.lose,5000) //silver
        console.log(compSequence.pattern)
        //compSequence.playSequence()
        playSequence(compSequence.pattern,1000)
        console.log("sequence played")
        //player1Timer.start()
        player1.turn=true;
        //while(player1.turn){

        //}
        

    //}
}

class Sequence{
    constructor(){
        this.pattern=[];
        this.turn = false;
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
            //`${color}.flash()`
            setTimeout (`${color}.flash()`, 1000); 
            setTimeout(console.log("wait"),1000)
            //wait

        }
    }
    evaluate = () =>{
        for(let i=0;i<this.pattern.length;i++){
            console.log(`player1 ${player1.pattern[i]} comp ${compSequence.patter[i]}`)
            if (player1.pattern[i] == compSequence.pattern[i]){
                //return true;
            } else {
                console.log("color wrong");
                return false;
                break;
            }
        } return true;
            
        
    }
    lose =() => {
        console.log("player 1 loses")
    }
}

function evaluate () {
    for(let i=0;i<player1.pattern.length;i++){
        console.log(`player1 ${player1.pattern[i]} comp ${compSequence.pattern[i]}`)
        if (player1.pattern[i] != compSequence.pattern[i]){
            console.log("wrong color")
            return false;
            break
        }
    }  return true
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function playSequence(sequence, time) {
    for(let i=0;i<sequence.length;i++){
        console.log(sequence.length);
        let color = sequence[i];
        console.log(color);
        //`${color}.flash()`
        await sleep(1000)
        setTimeout (`${color}.flash()`, 500); 
        //wait

    }
}

const compSequence = new Sequence()
const player1 = new Sequence()

//need to evaluate play

let timer;


