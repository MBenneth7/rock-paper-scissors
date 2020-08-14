function computerAction(){
    let choice = Math.ceil(Math.random() * 3);
    let computerChoice;

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


let userChoice = prompt("Pick Rock Paper or Scissors");
if(userChoice === ""){
    console.log("Okay we are going to pick rock paper or scissors for you");
    let choice = Math.ceil(Math.random() * 3);

    switch(choice){

        case 1:
            userChoice = "rock";
            break;
        case 2: 
            userChoice = "paper";
            break;    
        case 3: 
            userChoice = "scissors";
            break;
    }

}
else
    userChoice =  userChoice.toLowerCase();

console.log(`User's Choice: ${userChoice}`);

let computerChoice = computerAction();
console.log(`Computer's Choice: ${computerChoice}`);

if(computerChoice === "scissors" && userChoice === "paper") console.log("Computer Wins");
else if(computerChoice === "rock" && userChoice === "scissors") console.log("Computer Wins");
else if(computerChoice === "paper" && userChoice === "rock") console.log("Computer Wins");
else if(userChoice === "scissors" && computerChoice === "paper") console.log("User Wins");
else if(userChoice === "paper" && computerChoice === "rock") console.log("User Wins");
else if(userChoice === "rock" && computerChoice === "scissors") console.log("User Wins");
else console.log("It's a draw");


