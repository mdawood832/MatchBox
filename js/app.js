const matchBoxCard = document.querySelectorAll('.match-box-card')

class Game {
    constructor(){
        this.time = 100
        this.flips = 10
        this.score = 0
    }

    RandomCards () {
    //   matchBoxCard.forEach(card => {
    //     let position = Math.floor(Math.random()*16)
    //     card.document.style.order = position})
    }
        
    

    FlipCard () {
        // console.log("card flipped"), console logs and works fine
        // console.log(this), this is the matchbox card
        this.classList.toggle('flip')
        let flips = this.flips
        flips = document.querySelector('.flips')
        flips--
        console.log(flips)
    }



}



const player = new Game()
player.RandomCards();
player.time = document.querySelector('.time')
player.score = document.querySelector('.score')

// const matchBoxCard = document.querySelectorAll('.match-box-card')

matchBoxCard.forEach(card => card.addEventListener('click', player.FlipCard))