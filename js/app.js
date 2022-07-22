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
        this.RandomCards()
        this.startTimer = this.timerforGame()
    }

    flipCard(card){
        if(this.letPlayerFlipCard(card)){
            console.log("in the flip card function")
            this.numberOfClicks++
            this.flips.innerHTML = `Flips: ${this.numberOfClicks}`
            card.classList.add('flip')

            if(this.checkingCard){
                this.doCardsMatch(card)
            }
            else{
                this.checkingCard = card
            }
        }

    }

    doCardsMatch (card) {
        if (this.getCardSource(card) === this.getCardSource(this.checkingCard)){
            console.log("do match")
            this.ifCardsMatch(card, this.checkingCard)
        }
        else {
            console.log("do not match")
            this.ifCardsDoNotMatch(card, this.checkingCard)
        }
        this.checkingCard = null
    }


    ifCardsMatch(card1, card2){
        this.correctCards.push(card1)
        this.correctCards.push(card2)

        if(this.correctCards.length === this.cards){
            this.wonGame()
            console.log("won!")
        }
    }

    ifCardsDoNotMatch (card1, card2){
        this.active = true
        setTimeout (() => {
            card1.classList.remove('flip')
            card2.classList.remove('flip')
            this.active = false
        },1000)

    }

    getCardSource (card) {
        return card.querySelector('.front').src
    }

    RandomCards(){
        this.cards.forEach(card => {
        let position = Math.floor(Math.random()*16)
        card.style.order = position
        })
    }

    doNotShowCards () {
        this.cards.forEach(card => {
            card.classList.remove('flip')
        })
    }

    letPlayerFlipCard (card) {
        return true 
        // return !this.active && !this.correctCards.includes(card) && card !== this.checkingCard
    }

    timerforGame () {
        return setInterval(() => {
            this.timeRemaining--
            this.timer.innerHTML = `Time: ${this.timeRemaining}`
            if (this.timeRemaining === 0) {
                this.stopGame()
            }
        },1000)
    }

    stopGame () {
        //does not let player flip cards anymore
        // and flips to the back
        this.doNotShowCards()
        //stop the timer once game is done
        clearInterval(this.startTimer)
    }

    wonGame () {
        clearInterval(this.startTimer)
    }

    lostGame () {
        clearInterval(this.startTimer)
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
    // *****START BUTTON************
    start.addEventListener('click' , ()=>{
        newGame.startGame()
    })
    // *****FLIPPING CARDS************
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
