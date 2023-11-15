let firstNumber = 10;
let secondNumber = 8
let cards = [firstNumber,secondNumber]
let sum = cards[0] + cards[1] 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")

function startGame(){
    renderGame();
}

function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message =  "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message =  "You're out of the game!"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message

    cardsEL.textContent = "Card: " + cards[0] + " " + cards[1]
} 
 

function newCard(){
    console.log("Drawing a new card from the deck!");
    let card = 2;
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
}


for(let i = 0;cards.length;i+=1){
    console.log(cards[i]);
}