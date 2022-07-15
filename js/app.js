class Game {
    constructor(){
        this.time = 100
        this.flips = 10
        this.score = 0
    }

    RandomCards () {
        // let cards = document.querySelectorAll('.card')
        let shuffledCards = imageArray.sort(()=> Math.random() - 0.5)
        console.log(shuffledCards)
        // for(let i = 0; i < imageArray.length; i++){
        //     imageArray[i](()=> Math.random() - 0.5)
        // }
        
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

//creating an array for all the cards 
const imageArray = []

imageArray[1] = document.querySelector('.tripleSeven').src="images/wallpaper.jpeg" 
imageArray[1] = document.querySelector('.tripleSeven').src="images/wallpaper.jpeg" 
imageArray[2] = document.querySelector('.doNotFear').src="images/doNotFearChange.JPG"
imageArray[3] = document.querySelector('.doNotFear').src="images/doNotFearChange.JPG"
imageArray[4] = document.querySelector('.IamBetter').src="images/iAmBetter.JPG"
imageArray[5] = document.querySelector('.IamBetter').src="images/iAmBetter.JPG"
imageArray[6] = document.querySelector('.IfYouChange').src="images/ifYouChange.JPG"
imageArray[7] = document.querySelector('.IfYouChange').src="images/ifYouChange.JPG"
imageArray[8] = document.querySelector('.enough').src="images/youAreEnough.JPG"
imageArray[9] = document.querySelector('.enough').src="images/youAreEnough.JPG"
imageArray[10] = document.querySelector('.skeletons').src="images/skeletons.JPG"
imageArray[11] = document.querySelector('.skeletons').src="images/skeletons.JPG"
imageArray[12] = document.querySelector('.beKind').src="images/beKindToYourself.JPG"
imageArray[13] = document.querySelector('.beKind').src="images/beKindToYourself.JPG"
imageArray[14] = document.querySelector('.moon').src="images/theMoon.JPG"
imageArray[15] = document.querySelector('.moon').src="images/theMoon.JPG"

// console.log(imageArray)

const player = new Game()
player.RandomCards();
player.time = document.querySelector('.time')
player.score = document.querySelector('.score')

const matchBoxCard = document.querySelectorAll('.match-box-card')

matchBoxCard.forEach(card => card.addEventListener('click', player.FlipCard))