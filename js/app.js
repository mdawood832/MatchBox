const matchBoxCard = document.querySelectorAll('.match-box-card')
matchBoxCard.forEach(card => card.addEventListener('click', FlipCard))
// ----------------------------------------------------------------------------------->


// ----------------------------------------------------------------------------------->
function RandomCards () {
//   matchBoxCard.forEach(card => {
//     let position = Math.floor(Math.random()*16)
//     card.document.style.order = position})
}
        
 // ----------------------------------------------------------------------------------->   
 let flips = 10
 flips = document.querySelector('.flips')

 function FlipCard () {
    // console.log("card flipped"), console logs and works fine
    // console.log(this), this is the matchbox card
    this.classList.toggle('flip')
    flips--
    console.log(flips)
}

// ----------------------------------------------------------------------------------->
function startGame() {
    let start = document.querySelector('.startGamebtn')
    start.addEventListener('click' , () => {
        console.log("clicked")
        setInterval(timer,1000)
        if (totalTime === 0){
            clearInterval(timer)
        }
    })
}

// ----------------------------------------------------------------------------------->

// let time = document.querySelector('.time')
// totalTime = 10;
let time = document.querySelector('.time')
totalTime = 10;
if (totalTime === 0){
    clearInterval(timerInterval)
}

function timer() {
    totalTime --
    time.innerHTML = `Time: ${totalTime}`
}

// const player = new Game()
// player.RandomCards();
// player.time = document.querySelector('.time')
// player.score = document.querySelector('.score')

// const matchBoxCard = document.querySelectorAll('.match-box-card')

matchBoxCard.forEach(card => card.addEventListener('click', FlipCard()))