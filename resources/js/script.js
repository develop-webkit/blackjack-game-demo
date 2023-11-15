let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard 
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

    cardsEL.textContent = "Card: " + firstCard + " " + secondCard
} 

function newCard(){
    console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 2;
    // 2. Add the new card to the sum variable
    sum += card;
    // 3. Call startGame()
    renderGame();
}