const matchBoxCard = document.querySelectorAll('.match-box-card')
matchBoxCard.forEach(card => card.addEventListener('click', FlipCard))
// ----------------------------------------------------------------------------------->
// creating an array for all the cards 
allCards = Array.from(matchBoxCard)
// console.log(allCards)
// ----------------------------------------------------------------------------------->
// SHUFFLING CARDS 
function RandomCards (arr) {
  arr.forEach(card => {
    let position = Math.floor(Math.random()*16)
    card.style.order = position
    console.log(card)})
}
        
// -----------------------------------------------------------------------------------> 
// FLIPPING CARD AND ITTERATING FLIPS  
let flips = 10
flips = document.querySelector('.flips')

function FlipCard () {
    this.classList.toggle('flip')
    // console.log(flips)
}

function decreaseFlips () {
    flips --
    flips.innerHTML = `Flips: ${flips}`
}

// ----------------------------------------------------------------------------------->
// TIMER   
totalTime = 101;
let time = document.querySelector('.time')

function timer() {
    totalTime--
    time.innerHTML = `Time ${totalTime}`
}

// ----------------------------------------------------------------------------------->
// START GAME FUNCTION
function startGame() {
    let start = document.querySelector('.startGamebtn')
    start.addEventListener('click' , () => {
        console.log("clicked")
        // timer function 
        timer()
        const timerInterval = setInterval(timer,1000)

        function stopTimer() {
            clearInterval(timerInterval)
        }
        setTimeout(stopTimer, 100000)

        // shuffle function 
        RandomCards(allCards)

        // count flips
        allCards.addEventListener("click" , decreaseFlips())

       
    })
}

// ----------------------------------------------------------------------------------->


