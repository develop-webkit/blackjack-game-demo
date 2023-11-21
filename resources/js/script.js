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

function startGame(){
    firstNumber = getRandomCard()
    secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = cards[0] + cards[1]
    isAlive = true
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
    } else {
        message =  "You're out of the game!"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
} 
 

function newCard(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}