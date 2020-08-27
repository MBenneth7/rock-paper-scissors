let userWins = 0;
let compWins = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let display = document.querySelector("#display");
let userChoice = "";
let computerChoice = "";


function computerAction(){
    let choice = Math.ceil(Math.random() * 3);
    let computerChoice = "";

        switch(choice){

            case 1:
                computerChoice = "rock";
                break;
            case 2: 
                computerChoice = "paper";
                break;    
            case 3: 
                computerChoice = "scissors";
                break;
        }
    return computerChoice;
};

function userAction(){

    //let userPrompt = prompt("Pick Rock Paper or Scissors");


    /*
    if(userPrompt === ""){
        console.log("Okay we are going to pick rock paper or scissors for you");
        let choice = Math.ceil(Math.random() * 3);

        switch(choice){

            case 1:
                userPrompt = "rock";
                break;
            case 2: 
                userPrompt = "paper";
                break;    
            case 3: 
                userPrompt = "scissors";
                break;
        }

    }
    else
        userPrompt =  userPrompt.toLowerCase();
    */

    //return userPrompt;
}

function playRound(userChoice, computerChoice){

    const userPlay = document.createElement("p");
    const compPlay = document.createElement("p");

    userPlay.textContent = `User's Choice: ${userChoice}`;
    userPlay.style.cssText = "color:blue; font-weight:bolder;";

    compPlay.textContent = `Computer's Choice: ${computerChoice}`;
    compPlay.style.cssText = "color:red; font-weight:bolder;";

    display.appendChild(userPlay);
    display.appendChild(compPlay);

    if(computerChoice === "scissors" && userChoice === "paper"){ 
        compWins++;
        computerWins();
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        compWins++;
        computerWins();
    }
    else if(computerChoice === "paper" && userChoice === "rock"){ 
        compWins++;
        computerWins();
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){ 
        userWins++;
        playerWins();
    }
    else if(userChoice === "paper" && computerChoice === "rock"){ 
        userWins++;
        playerWins();
    }    
    else if(userChoice === "rock" && computerChoice === "scissors"){
        userWins++;
        playerWins();
    }
    else
        draw();
}

function computerWins(){

    const compDisplay = document.createElement("h1");
    const results = document.createElement("h2");
    //const userDisplay = document.createElement("h1");

    compDisplay.textContent = "Computer Wins";
    compDisplay.style.cssText = "color: red";

    results.textContent = `User Wins: ${userWins} Comp Wins: ${compWins}`; 
    
    display.appendChild(compDisplay);
    display.appendChild(results);


}

function playerWins(){

    const userDisplay = document.createElement("h1");
    const results = document.createElement("h2");

    userDisplay.textContent = "User Wins";
    userDisplay.style.cssText = "color: blue";

    results.textContent = `User Wins: ${userWins} Comp Wins: ${compWins}`; 

    display.appendChild(userDisplay);
    display.appendChild(results);
}

function draw(){

    const drawDisplay = document.createElement("h3");
    const results = document.createElement("h2");

    drawDisplay.textContent = "Its a draw";
    drawDisplay.style.cssText = "color: green";

    results.textContent = `User Wins: ${userWins} Comp Wins: ${compWins}`; 

    display.appendChild(drawDisplay);
    display.appendChild(results);

}

function playerVictory(){

    const userVictory = document.createElement("h1");
    userVictory.textContent = "User wins the WAR!!!!";
    userVictory.style.cssText = "color:blue";

    display.appendChild(userVictory);

}

function computerVictory(){

    const compVictory = document.createElement("h1");
    compVictory.textContent = "The day belongs to the MACHINES!!!!";
    compVictory.style.cssText = "color:red";

    display.appendChild(compVictory);

}

function game(){
    
    rock.addEventListener("click",()=>{
        userChoice = "rock";
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);
        
        if(userWins === 5){
            playerVictory();
            userWins = 0;
            compWins = 0;
        }

        else if(compWins === 5){
            computerVictory();
            userWins = 0;
            compWins = 0;
        }     
    });

    paper.addEventListener("click",()=>{
        userChoice = "paper";
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);

        if(userWins === 5){
            playerVictory();
            userWins = 0;
            compWins = 0;
        }

        else if(compWins === 5){
            computerVictory();
            userWins = 0;
            compWins = 0;
        }    
    });
        
    scissors.addEventListener("click",()=>{
        userChoice = "scissors";
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);

        if(userWins === 5){
            playerVictory();
            userWins = 0;
            compWins = 0;
        }

        else if(compWins === 5){
            computerVictory();
            userWins = 0;
            compWins = 0;
        }    
    });

}

game();
       









