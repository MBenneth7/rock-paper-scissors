let userWins = 0;
let compWins = 0;
let limit = 0;
let computerChoice = "";
let userChoice = "";



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

    let userPrompt = prompt("Pick Rock Paper or Scissors");

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

    return userPrompt;

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
    
    while(limit < 5){
        userChoice = userAction();
        computerChoice = computerAction();
        playRound(userChoice, computerChoice);
        console.log(`User Wins: ${userWins}`);
        console.log(`Comp Wins: ${compWins}`);
        limit++;

    }

    if(userWins > compWins)
        console.log("User wins the WAR!!!!");
    else
        console.log("The day belongs to the MACHIINES!!!!");     

}

game();




