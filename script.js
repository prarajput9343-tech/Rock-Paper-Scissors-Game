let container = document.querySelector(".container");
let weaponBox = document.querySelector(".weapon-box");
let playerChoiceBox = document.querySelector(".player-choices");
let weapons = document.querySelectorAll(".weapons div");
let computer = playerChoiceBox.querySelector(".computer-choice img");
let player = playerChoiceBox.querySelector(".player-choice img");
let resultBox = container.querySelector(".result-box");
let resultTxt = resultBox.querySelector("h2");
let playagain = resultBox.querySelector("button");
let wonVal = document.querySelector(".score-box .won h2 span");
let lostVal = document.querySelector(".score-box .lost h2 span");
let drawVal = document.querySelector(".score-box .draw h2 span");

let won=0, lost=0, draw=0;


let computerChoices = ["rock","paper","scissor"];

let outcomes = {
    rockrock: "Draw",
    rockpaper: "Computer",
    paperrock: "You",
    paperpaper: "Draw",
    scissorpaper: "You",
    paperscissor: "Computer",
    scissorscissor: "Draw",
    scissorrock: "Computer",
    rockscissor: "You"
}

for(let i=0; i<weapons.length;i++){
    weapons[i].addEventListener("click", (e) =>{

        player.src = "rockPlayer.png";
        computer.src = `rockComputer.png`;


        weaponBox.style.display = "none";
        playerChoiceBox.style.display = "block";

        setTimeout(()=>{
            playerChoiceBox.classList.add("active");
        },1000);

        setTimeout(() =>{
            let playerChoices = playerChoiceBox.querySelectorAll("div");
            for(let i=0; i<playerChoices.length; i++){
                playerChoices[i].style.animationPlayState = "paused"
            }
            player.src = e.target.src;

            let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
            computer.src = `${randomChoice}Computer.png`;

            let userChoice = e.target.parentElement.className;
            let outcomesValue = outcomes[userChoice+randomChoice];

            showResult(outcomesValue);

        },3000);
    } )
}
let showResult =(result) =>{

    resultBox.style.display = "block";

    if(result === "You"){
        resultTxt.innerHTML = "You Won!";
        won++;
        wonVal.innerHTML = won;
    }
    else if(result === "Computer"){
        resultTxt.innerHTML = "You Lost!" ;
        lost++;
        lostVal.innerHTML = lost;
    }
    else{
        resultTxt.innerHTML = "Draw!";
        draw++;
        drawVal.innerHTML = draw;
    }
}

playagain.addEventListener("click", () =>{
    playerChoiceBox.classList.remove("active");
    resultBox.style.display = "none";
    weaponBox.style.display = "block";
    playerChoiceBox.style.display = "none";

    let playerChoices = playerChoiceBox.querySelectorAll("div");
         for(let i=0; i<playerChoices.length; i++){
             playerChoices[i].style.animationPlayState = "running"
            }

})