// *************************************************
// const matchBoxCard = document.querySelectorAll('.match-box-card')
// allCards = Array.from(matchBoxCard)
// matchBoxCard.forEach(card => card.addEventListener('click', FlipCard))
// *************************************************

class MatchBox {
    constructor (time, cards) {
        this.cards = cards
        this.time = time
        this.timeRemaining = time
        this.timer = document.querySelector('.time')
        this.flips = document.querySelector('.flips')
    }

    startGame() {
        console.log("in the start game function")
        this.checkingCard = null
        this.numberOfClicks = 0
        this.timeRemaining = this.time
        this.correctCards =[]
        this.cardsChosen =[]
        this.active = true
        this.comparingCard = ""
    }

    flipCard(card){
        if(this.letPlayerFlipCard(card)){
            console.log("in the flip card function")
            this.numberOfClicks++
            this.flips.innerHTML = `Flips: ${this.numberOfClicks}`
            card.classList.add('flip')
            
        }

    }

    RandomCards(){
        this.cards.forEach(card => {
        let position = Math.floor(Math.random()*16)
        card.style.order = position
        })
    }




    letPlayerFlipCard (card) {
        return true 
        // return !this.active && !this.correctCards.includes(card) && card !== this.checkingCard
    }

}


function game (){
    // selecting all the cards, creating an array from them, 
    // and then passing them to the MatchBox class 
    let start = document.querySelector('.startGamebtn')
    let allCards = Array.from(document.querySelectorAll('.match-box-card'))
    let newGame = new MatchBox(100, allCards)
    // selecting the start button in html so I can 
    // add an event listener on click
    // once the user clicks the start button 
    // call the method start Game in matchbox class
    start.addEventListener('click' , ()=>{
        newGame.startGame()
    })
    
    newGame.RandomCards()

    allCards.forEach(card => card.addEventListener('click', () => {
        newGame.flipCard(card)
    } ))

}
game()
















// *************************************************
// PLAYER CLASS - instantiating two players ( 1 & 2 ) 
// *************************************************
class Player {
    constructor (name,timeRemaining){
        this.name = name
        this.totalFlips = 10
        this.totalTime = 100
        // this.timeRemaining = timeRemaining
        // pass in time remaining from the time function 
        // when the timer stops because the player is out of flips
        // this.flipsRemaining  = flipsRemaining
        // if there are any flips remaining when the player
        // matches all the cards
        // this.totalScore = totalScore

    }
    displayPlayerNumber (){
        PlayerNumber = document.querySelector('.playerNumber')
        PlayerNumber.innerHTML = `Player ${this.name}`
    }

    calculateScore () {

    }


}


// const player1 = new Player("player1")
// const player2 = new Player("player2")
// console.log(player1)
// console.log(player2)


// // *************************************************
// const matchBoxCard = document.querySelectorAll('.match-box-card')
// matchBoxCard.forEach(card => card.addEventListener('click', FlipCard))
// // *************************************************
// ----------------------------------------------------------------------------------->
// creating an array for all the cards 
// allCards = Array.from(matchBoxCard)
// console.log(allCards)
// ----------------------------------------------------------------------------------->
// SHUFFLING CARDS 
// function RandomCards (arr) {
//   arr.forEach(card => {
//     let position = Math.floor(Math.random()*16)
//     card.style.order = position
//     console.log(card)})
// }
        
// -----------------------------------------------------------------------------------> 


// ----------------------------------------------------------------------------------->
// TIMER   
// totalTime = 101;
// let time = document.querySelector('.time')

// function timer() {
//     totalTime--
//     time.innerHTML = `Time ${totalTime}`
// }


// ----------------------------------------------------------------------------------->
// START GAME FUNCTION
// function startGame() {
    // let start = document.querySelector('.startGamebtn')
    // start.addEventListener('click' , () => {
//         // check event listener 
//         console.log("clicked")
  
//         timer()
//         const timerInterval = setInterval(timer,1000)

//         function stopTimer() {
//             clearInterval(timerInterval)
//         }
//         setTimeout(stopTimer, 100000)

//         // shuffle function 
//         RandomCards(allCards)
       
//     })
// }

// ----------------------------------------------------------------------------------->

