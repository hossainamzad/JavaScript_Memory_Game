
const score_panel = document.querySelector('.score-panel');
const stars = document.querySelector('.stars');
const moves = document.querySelector('.moves');
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
let openCards = [];
let moveCounter = 0;

/*
 * Create a list that holds all of your cards
 */

let cardHolder = ['fa-diamond', 'fa-diamond',
                  'fa-paper-plane-o', 'fa-paper-plane-o',
                  'fa-anchor', 'fa-anchor',
                  'fa-bolt', 'fa-bolt',
                  'fa-cube', 'fa-cube',
                  'fa-leaf', 'fa-leaf',
                  'fa-bicycle', 'fa-bicycle',
                  'fa-bomb', 'fa-bomb'
              ];


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 // display cards on the DOM
// function displayCardsOnTheBoard(card) {
//   return `<li class="card">
//                 <i class="fa ${card}"></i>
//             </li>`;
// }
// displayCardsOnTheBoard();

// function createBoard() {
//   let cardHTML = cardHolder.map((card) => {
//     return displayCardsOnTheBoard();
//   })
//   deck.innerHTML = cardHTML.join('');
// }

// this function will display cards upon clicking
function displayCards() {
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      toggleCards(card);
      addOpenCardstoArray(card);
      countingMoves();
      winOrLose();
      restartTheGame();
    })
  })
}
displayCards();

// display the card's symbol (put this functionality in another function
//that you call from this display cards
function toggleCards(card) {
  card.classList.add('open', 'show');
}

//if the cards do not match, remove the cards from the list
//and hide the card's symbol (put this functionality in another
//function)
function hideCards(){
  setTimeout(() => {
    openCards.forEach((card) => {
      card.classList.remove('open', 'show');
    }); openCards = [];
  }, 1000);
}

// push the open card to the openCards array
function addOpenCardstoArray(card) {
  if (openCards.length < 2) {
    openCards.push(card);
    if(openCards.length === 2) {
      // now cehck for match
      checkForMatch(openCards[0], openCards[1]);
      console.log(openCards)
    }
  }
}

function checkForMatch(cardOne, cardTwo) {
  if(cardOne.firstElementChild.className === cardTwo.firstElementChild.className){
    console.log("found a match!!!!")
    cardOne.classList.add('match');
    cardTwo.classList.add('match');
    openCards = [];
  }else{
    hideCards();
    console.log('no match found.')
  }
}


//increment the move counter and display it on the page
//put this functionality in another function that you
//call from this one

function countingMoves () {
  moveCounter++;
  moves.innerHTML = moveCounter;
  console.log(`moves taken:${moveCounter}`)
}

//if all cards have matched, display a message with
//the final score (put this functionality in another
//function that you call from this one)

function winOrLose() {
  if(openCards.length === 16){
    console.log('you won!')
  }
}

function restartTheGame() {
  restart.addEventListener('click', () => {
    deck.innerHTML = '';
    openCards = [];
    console.log('restarted')
  })
}

