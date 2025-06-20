let score = 0;
let computerScore = 0;
const userScoreCard = document.querySelector("#userscore");
const compScoreCard = document.querySelector("#compscore");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-board");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    const userChoiceElem = document.querySelector(`#${userChoice}`);
    const computerChoiceElem = document.querySelector(`#${computerChoice}`);

    let userWin = false;
    let isDraw = false;

    if (userChoice === computerChoice) {
        isDraw = true;
    } else {
        if (
            (userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper")
        ) {
            userWin = true;
        }
    }

    // Reset classes after a delay
    choices.forEach(c => c.classList.remove('winner', 'loser', 'draw'));
    computerChoiceElem.classList.remove('winner', 'loser', 'draw');


    if (isDraw) {
        drawGame(userChoiceElem, computerChoiceElem);
    } else {
        showWinner(userWin, userChoice, computerChoice, userChoiceElem, computerChoiceElem);
    }
};

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = (userChoiceElem, computerChoiceElem) => {
    msg.innerHTML = "It's a draw! Play again.";
    msg.style.backgroundColor = "#34495e";
    msg.style.color = "white";
    userChoiceElem.classList.add("draw");
    computerChoiceElem.classList.add("draw");
    setTimeout(() => {
        userChoiceElem.classList.remove("draw");
        computerChoiceElem.classList.remove("draw");
    }, 1000);
};

const showWinner = (userWin, userChoice, computerChoice, userChoiceElem, computerChoiceElem) => {
    if (userWin) {
        score++;
        userScoreCard.innerHTML = score;
        msg.textContent = `You win! Your ${userChoice} beats ${computerChoice}.`;
        msg.style.backgroundColor = "#27ae60";
        msg.style.color = "white";
        userChoiceElem.classList.add("winner");
        computerChoiceElem.classList.add("loser");
    } else {
        computerScore++;
        compScoreCard.innerHTML = computerScore;
        msg.textContent = `You lose! ${computerChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "#c0392b";
        msg.style.color = "white";
        userChoiceElem.classList.add("loser");
        computerChoiceElem.classList.add("winner");
    }

    setTimeout(() => {
        userChoiceElem.classList.remove("winner", "loser");
        computerChoiceElem.classList.remove("winner", "loser");
    }, 1000);
};
