let player = {
    name: "Nabeel",
    chips: 200
}
let firstNumber = 0
let secondNumber = 0
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
let newCardButton = document.querySelector("#newCardBtn")

// 4. Render the player's name and chips in playerEl


function startGame(){
    firstNumber = getRandomCard()
    secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = cards[0] + cards[1]
    isAlive = true
    hasBlackJack = false
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1   
    console.log(randomNumber)
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber;
    }
}


function renderGame(){

    cardsEl.textContent = "Card: "

    for(let i=0;i < cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }


    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message =  "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 50
    } else {
        message =  "You're out of the game!"
        player.chips -= 50
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
    newCardButton.style.display = "inline-block"
} 
 

function newCard(){

    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}