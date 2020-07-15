
//need button class and 4 buttons
const startButton = document.querySelector(`#start`);
const startClick = startButton.addEventListener("click", startGame);
const levelButton = document.querySelector(`#level`);
const selectedLevelList = document.querySelector(`#difficulty`);
const selectedLevel = selectedLevelList.options [selectedLevelList.selectedIndex].value;

// **  sound generation credit - https://gist.github.com/micahbales/32f2afe2f33bcbafca786387bd359cbc  

const sounds = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
  };

  function playSound(sound) {
      sounds[sound].currentTime=0;
      sounds[sound].play();
  };

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
        // if(player1.turn=false){
        //     return;
        // }
        this.flash();
        //console.log(this.color)
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
        playSound(this.color)
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

async function startGame(e){
    e.preventDefault();
    startButton.disabled=true;
    selectedLevelList.disabled=true;
    compSequence.pattern=[];
    for(let l=0;l<selectedLevel;l++){
        player1.level=l+1
        levelButton.innerText = player1.level;
        let newColor = compSequence.randomColor();
        compSequence.pattern.push(newColor)
        playSequence(compSequence.pattern,1000)
        //timer = setTimeout(player1.lose,5000) //silver
        player1.turn=true;
        while(player1.turn){
            await sleep(1000)
            }
    };
    if(player1.winning = false){
                    player1.lose()
    }else {
        player1.win();
    }
    
}

class Sequence{
    constructor(){
        this.pattern=[];
        this.turn = false;
        this.winning=true;
        this.level=0;
    }
    newButton = () => {

    }
    randomColor = () => {
        let nextSequence = Math.floor(Math.random()*4)
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
            let color = this.pattern[i];
            setTimeout (`${color}.flash()`, 1000); 
            //wait

        }
    }
    evaluate = () =>{
        for(let i=0;i<this.pattern.length;i++){
            //console.log(`player1 ${player1.pattern[i]} comp ${compSequence.patter[i]}`)
            if (player1.pattern[i] == compSequence.pattern[i]){
                //return true;
            } else {
                return false;
                break;
            }
        } return true; 
        
    }
    win =() =>{
        selectedLevelList.disabled=false;
        startButton.disabled=false;
        alert(`"You won!!!  You passed all ${selectedLevel} rounds!"`)
        let wincolor = compSequence.pattern[compSequence.pattern.length-1]
        for (let i=0;i<6;i++){
            setTimeout(`${wincolor}.flash()`, i*750)
        }
        
    }
    lose =() => {
        console.log("player 1 loses")
        alert("Sorry!!  You clicked the wrong color!")
        this.winning=false;
        startButton.disabled=false;
        selectedLevelList.disabled=false;
    }
}

function evaluate () {
    for(let i=0;i<player1.pattern.length;i++){
        //console.log(`player1 ${player1.pattern[i]} comp ${compSequence.pattern[i]}`)
        if (player1.pattern[i] != compSequence.pattern[i]){
            return false;
            break
        }
    }  return true
}

//********           sleep function          */
/* found sleep function on ttps://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function playSequence(sequence, time) {
    for(let i=0;i<sequence.length;i++){
        let color = sequence[i];
        await sleep(1000)
        setTimeout (`${color}.flash()`, 500); 
        //wait

    }
}

const compSequence = new Sequence()
const player1 = new Sequence()


let timer;

