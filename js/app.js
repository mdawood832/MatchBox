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
totalTime = 101;
let time = document.querySelector('.time')

function timer() {
    totalTime--
    time.innerHTML = `Time: ${totalTime}`

    // setInterval(timer,1000)

    // if (totalTime === 0){
    //     clearInterval(timerInterval)
    // } 
}

// function stopTimer() {
//     clearInterval(timerInterval)
// }

// setTimeout(stopTimer, 10000)

// ----------------------------------------------------------------------------------->
function startGame() {
    let start = document.querySelector('.startGamebtn')
    start.addEventListener('click' , () => {
        console.log("clicked")
        timer()
        const timerInterval = setInterval(timer,1000)

        function stopTimer() {
            clearInterval(timerInterval)
        }
        
        setTimeout(stopTimer, 100000)
    })
}

// ----------------------------------------------------------------------------------->
// totalTime = 10;
// let time = document.querySelector('.time')

// function timer() {
//     totalTime--
//     time.innerHTML = `Time: ${totalTime}`

//     let timerInterval =setInterval(timer,1000)

//     if (totalTime === 0){
//         clearInterval(timerInterval)
//         time.innerHTML = ''
//     } 
// }

// function stopTimer() {

// }

// let timerInterval =setInterval(timer,1000)







// const matchBoxCard = document.querySelectorAll('.match-box-card')

