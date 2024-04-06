let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
})

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () => {
    console.log("Draw!");
    msg.innerText = "Draw! Play again!";
    msg.style.backgroundColor = "#081b31";
}

const updateScore = () => {
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})

