let userWins = 0;
let compWins = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
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

    console.log(`User's Choice: ${userChoice}`);
    console.log(`Computer's Choice: ${computerChoice}`);

    if(computerChoice === "scissors" && userChoice === "paper"){ 
        console.log("Computer Wins");
        compWins++;
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        console.log("Computer Wins");
        compWins++;
    }
    else if(computerChoice === "paper" && userChoice === "rock"){ 
        console.log("Computer Wins");
        compWins++;
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){ 
        console.log("User Wins");
        userWins++;
    }
    else if(userChoice === "paper" && computerChoice === "rock"){ 
        console.log("User Wins");
        userWins++;
    }    
    else if(userChoice === "rock" && computerChoice === "scissors"){
        console.log("User Wins");
        userWins++;
    }
    else
        console.log("It's a draw"); 
}



function game(){
    
    rock.addEventListener("click",()=>{
        userChoice = "rock";
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);
        console.log(`User Wins: ${userWins}`);
        console.log(`Comp Wins: ${compWins}`);
        
        if(userWins === 5)
            console.log("User wins the WAR!!!!");
        else if(compWins === 5)
            console.log("The day belongs to the MACHINES!!!!");     
    });

    paper.addEventListener("click",()=>{
        userChoice = "paper";
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);
        console.log(`User Wins: ${userWins}`);
        console.log(`Comp Wins: ${compWins}`);

        if(userWins === 5)
            console.log("User wins the WAR!!!!");
        else if(compWins === 5)
            console.log("The day belongs to the MACHINES!!!!"); 
    });
        
    scissors.addEventListener("click",()=>{
        userChoice = "scissors";
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);
        console.log(`User Wins: ${userWins}`);
        console.log(`Comp Wins: ${compWins}`);

        if(userWins === 5)
            console.log("User wins the WAR!!!!");
        else if(compWins === 5)
            console.log("The day belongs to the MACHINES!!!!"); 
    });

}

game();
       









