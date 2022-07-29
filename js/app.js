// *************************************************
// MATCHBOX CLASS 
// *************************************************
class MatchBox {
    constructor (time, cards, playerNumber) {
        this.playerNumber = playerNumber
        this.displayPlayer = document.querySelector('.playerNumber')
        this.cards = cards
        this.time = time
        this.timeRemaining = time
        this.timer = document.querySelector('.time')
        this.flips = document.querySelector('.flips')
        this.score = document.querySelector('.score')
        let finalScorePlayer1  = (this.timeRemaining/this.scoreKeeper)*10
        let finalScorePlayer2  = (this.timeRemaining/this.scoreKeeper)*10
    }

    startGame() {
        console.log("in the start game function")
        this.checkingCard = null
        this.numberOfClicks = 0
        this.scoreKeeper = 0
        this.timeRemaining = this.time
        this.correctCards =[]
        this.cardsChosen =[]
        this.active = true
        setTimeout (() => {
            this.RandomCards() 
            this.startTimer = this.timerforGame()
            this.active = false 
        }, 500)
        this.comparingCard = ""
        // this.RandomCards()
        // this.startTimer = this.timerforGame()
        this.doNotShowCards()
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
        this.scoreKeeper++
        this.score.innerHTML =`Matches: ${this.scoreKeeper}`

        if(this.scoreKeeper === 8){
            this.wonGame()
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

    resetScore () {
        this.score.innerHTML = 'Score'
    
    }

    letPlayerFlipCard (card) {
        // return true
        return !this.active && !this.correctCards.includes(card) && card !== this.checkingCard
    }

    timerforGame () {
        return setInterval(() => {
            this.timeRemaining--
            this.timer.innerHTML = `Time: ${this.timeRemaining}`
            if (this.timeRemaining === 0) {
                this.stopGame()
                if (this.scoreKeeper < 8){
                    this.score.innerHTML = "Lost Game"
                    this.lostGame()
                    this.doNotShowCards
                }

            }
        },1000)
    }

    stopGame () {
        //does not let player flip cards anymore
        // and flips to the back
        this.doNotShowCards()
        //stop the timer once game is done
        clearInterval(this.startTimer)
        // this.resetScore()
        // this.resetScore()
    }

    wonGame () {
        console.log("won!")
        setTimeout (() => {
            let finalScore  = (this.timeRemaining/this.scoreKeeper)*10
            this.score.innerHTML = `Score: ${finalScore}, YOU WON!`
            clearInterval(this.startTimer)
            this.doNotShowCards()
        },500)
    
    }

    lostGame () {
        this.score.innerHTML = "Lost Game"
        console.log("lost")
        clearInterval(this.startTimer)
        this.doNotShowCards()
        this.stopGame()
    }

}




function game (){
    // selecting all the cards, creating an array from them, 
    // and then passing them to the MatchBox class 
    let start = document.querySelector('.startGamebtn')
    let allCards = Array.from(document.querySelectorAll('.match-box-card'))
    let newGame = new MatchBox(60, allCards)

    start.addEventListener('click' , ()=>{
        newGame.startGame()
    })
    // *****FLIPPING CARDS************

    allCards.forEach(card => card.addEventListener('click', () => {
        newGame.flipCard(card)
    } ))
}
game()



