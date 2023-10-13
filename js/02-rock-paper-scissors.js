// The Rock, Paper, Scissors Game

function userPick(){
    repeat = true;
    choice = prompt("choose rock, paper or scissors: ").toLowerCase();
    console.log(choice);
    do{
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
            choice = prompt("Incorrect choice. Choose rock, paper or scissors: ").toLowerCase();
            repeat = true;
            continue;
        }else {
            repeat = false;
        }
    }while(repeat)
    
    return choice;

}

function compPick(){
    let cPick;
    num = Math.round(Math.random() * 10) // random number between 0-10
    if(num <=3 ){
        cPick = "rock"
    }else if (num >6 ){
        cPick = "scissors"
    }else {cPick = "paper'"}

    return cPick;
}

function decideWinner(usrChoice,compChoice){
    switch(true){
        case (usrChoice == compChoice): {alert(" Its a tie on "+ usrChoice); break;}
        case (usrChoice == "rock" && compChoice == "paper"): {
            alert(" You lose. You chose " + usrChoice +". " + compChoice + 'covers ' + usrChoice);break;}
        case (usrChoice == "rock" && compChoice == "scissors"): {
            alert(` You win. You chose ${usrChoice}. ${usrChoice} destroys ${compChoice}.`); 
            break}
    
        case (usrChoice == "paper" && compChoice == "scissors"): {
            alert(` You lose. You chose ${usrChoice}. ${compChoice} cuts ${usrChoice} .`);
            break;}
        case (usrChoice == "paper" && compChoice == "rock"): {
            alert(` You win. You chose ${usrChoice}. ${usrChoice} covers ${compChoice}.`);  
            break;}
    
        case (usrChoice == "scissors" && compChoice == "paper"): {
            alert(` You win. You chose ${usrChoice}. ${usrChoice} cuts ${compChoice}.`);     break;}
        case (usrChoice == "scissors" && compChoice == "rock"): {
            alert(` You lose. You chose ${usrChoice}. ${compChoice} destroys ${usrChoice}.`);   break;}              
    }
}


userChoice = userPick();
computerChoice = compPick();
console.log(`user: ${userChoice}, random: ${computerChoice}`)
decideWinner(userChoice,computerChoice);

playAgain = 'n'
do{
    playAgain = (prompt("Do you wish to play again? (y/n): ")).toLowerCase()
    if (playAgain == 'y'){
        userChoice = userPick();
        computerChoice = compPick();
        decideWinner(userChoice,computerChoice);
        continue;
    } else {playAgain = 'n'}
}while(playAgain == 'y')

