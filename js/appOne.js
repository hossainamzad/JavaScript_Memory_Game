// const score_panel = document.querySelector('.score-panel');
// const stars = document.querySelector('.stars');
// const moves = document.querySelector('.moves');
// const restart = document.querySelector('.restart');
// const deck = document.querySelector('.deck');
// const cards = document.querySelectorAll('.card');
// let openCards = [];
// let moveCounter = 0;

// deck.addEventListener('click', event => {
//   // console.log(event)
//   const clickTarget = event.target;
//   if(clickTarget.classList.contains('card') && openCards.length < 2) {
//     toggleCards(clickTarget);
//     addOpenCardstoArray(clickTarget);
//     console.log(openCards)
//     checkForMatch();
//   }
// })

// function toggleCards(card) {
//   card.classList.toggle('open');
//   card.classList.toggle('show');
// }

// // push the open card to the openCards array
// function addOpenCardstoArray(card) {
//   openCards.push(card);
//   // console.log(openCards)
// }

// function checkForMatch() {
//   let cardOne = openCards[0];
//   let cardTwo = openCards[1];
//   console.log(cardOne.firstElementChild.className)
//   console.log(cardTwo.firstElementChild.className)
//   if(cardOne.firstElementChild.className === cardTwo.firstElementChild.className){    console.log("found a match!!!!")
//     cardOne.classList.toggle('match');
//     cardTwo.classList.toggle('match');
//     openCards = [];
//     console.log(openCards)
//   }else{
//     console.log('not a match');
//     openCards = [];
//     // toggleCards(cardOne);
//     // toggleCards(cardTwo);
//     hideCards();
//     console.log('logging out from else:', openCards)
//   }
// }

// function hideCards(){
//   setTimeout(() => {
//     openCards.forEach((card) => {
//       card.classList.remove('open', 'show');
//     })
//   }, 1000);
// }
