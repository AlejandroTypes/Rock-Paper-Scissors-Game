var humanScore = 0;
var computerScore = 0;
let computerAnswer = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    maxNum = 3;
    let CoAnswer = computerAnswer[Math.floor(Math.random() * maxNum)];
    return CoAnswer;
};

function getHumanChoice(){
    let humanAnswer = prompt("Rock, Paper or Scissors?").toLowerCase();
    return humanAnswer;
};

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if(humanChoice == "rock" && computerChoice === computerAnswer[0]){
        return "Tie! The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "rock" && computerChoice === computerAnswer[1]){
        computerScore = computerScore+=1;
        return "You lose! Paper beats Rock. The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "rock" && computerChoice === computerAnswer[2]){
        humanScore = humanScore+=1;
        return "You win! Rock beats Scissors. The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "paper" && computerChoice === computerAnswer[0]){
        humanScore = humanScore+=1;
        return "You win! Paper beats Rock. The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "paper" && computerChoice === computerAnswer[1]){
        return "Tie! The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "paper" && computerChoice === computerAnswer[2]){
        computerScore = computerScore+=1;
        return "You lose! Scissors beats Paper. The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "scissors" && computerChoice === computerAnswer[0]){
        computerScore = computerScore+=1;
        return "You lose! Rock bears Scissors. The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "scissors" && computerChoice === computerAnswer[1]){
        humanScore = humanScore+=1;
        return "You win! Scissors beats Paper. The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    } else if (humanChoice == "scissors" && computerChoice === computerAnswer[2]){
        return "Tie! The computer chose " + computerChoice + ". You have " + humanScore + " points and the computer has " + computerScore + " points.";
    };
};

function playGame(){
    for (var i = 0; i < 100; i++) {
        if(humanScore == 5 && computerScore < 5){
            return "You reached 5 points! YOU WIN";
        } else if (humanScore < 5 && computerScore == 5){
            return "The computer reached 5 points! YOU LOSE";
        } else {
            console.log(playRound());
        };
    };
};

console.log(playGame());

