let score=0;
let computerScore=0;
const userScoreCard=document.querySelector("#userscore");
const compScoreCard=document.querySelector("#compscore");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg-board");
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id");
        if(userChoice==null){
            userChoice="rock";
        }
        playGame(userChoice);

    });
});
const playGame = (userChoice)=>{
    const computerChoice=genComputerChoice();
    console.log("user choice = ",userChoice);
    console.log("computer choice=",computerChoice);
    if(userChoice==computerChoice){
        //Draw
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice=="rock"){
            if(computerChoice=="paper"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userChoice=="paper"){
            if(computerChoice=="scissor"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        if(userChoice=="scissor"){
            if(computerChoice=="rock"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        showWinner(userwin,computerChoice);
    }

};
const genComputerChoice =()=>{
    let options=["rock","paper","scissor"];
    let randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}
const drawGame = () =>{
    console.log("The Game Was Draw");
    msg.innerHTML="THE GAME WAS DRAW, TRY AGAIN";
}
const showWinner = (userwin,computerChoice) =>{
    if(userwin){
        console.log("You WIN");
        computerChoice=computerChoice.toUpperCase();
        msg.textContent="YOU WON!!,COMPUTER CHOOSE "+ computerChoice;
        score++;
        userScoreCard.innerHTML=score;
    }
    else{
        console.log("You LOST");
        msg.textContent="YOU LOST! COMPUTER CHOOSE "+ computerChoice;
        computerScore++;
        compScoreCard.innerHTML=computerScore;
    }
}
