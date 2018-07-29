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

const score_panel = document.querySelector('.score-panel');
const stars = document.querySelector('.stars');
const moves = document.querySelector('.moves');
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
let cardsInPlay = [];



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

 /*
*
*
*
*/

function displayCardsOnTheBoard(card) {
  return `<li class="card">`
                + `<i class="fa ${card}"></i>`
            + `</li>`;
}

// function generateCard(card) {
//   return `<li class="card">` + `<i class='fa ${card}'></i>` + `</li>`;

// }

/*
*
*
*
*/

function createBoard() {
  let cardHTML = shuffle(cardHolder).map((card) => {
    return displayCardsOnTheBoard(card);
  })
  deck.innerHTML = cardHTML.join('');
}

// createBoard();
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


function displayCards() {
  // console.log(cards)
  cards.forEach(function(card){
     card.addEventListener('click', function(e){
      card.classList.add('open', 'show');
    })
  })
}

// add an eventlistener to a parent element for performence issue
// deck.addEventListener('click', doSomething);
// // create doSomething function that runs at every click
// function doSomething(e) {
//   let clickedItem = e.target.id;
//   console.log("I am clicked:" + clickedItem);
//   clickedItem.classList.add('open', 'show')
// }

// function openCard(arg) {
//   arg.classList.add('open', 'show');
// }

/*
*
*
*
*/
// function newGame() {
//   document.querySelector('.restart').onclick = function() {
//    // alert("restarting the game!!!!");
//     cardsInPlay = [];
//  }
// }

/*
*
*
*
*/
function removingStars() {
  // grab the li
  let removeStar = document.querySelector('.stars li');
  // remove it from DOM
  removeStar.remove();
}
// removingStars();
/*
*
*
*
*/
function addingStars() {
  // grab the ul
  var ul = document.querySelector('.stars');
  // create a new li
  var li = document.createElement('li');
  // and give it some content
  var newLi = document.createTextNode('0');
  // add the text node to the newly created li
  li.appendChild(newLi);
  // add the newly created element and its content into the DOM
  ul.appendChild(li);
}
// addingStars();
/*
*
*
*
*/

function moveCounter() {
  let counter = 1;
  moves.innerHTML = 6
}
// moveCounter();
/*
*
*
*
*/

// function checkForMatch(){
//   // this stateent is checking whether the user has played two cards and the number is .
//   if (cardsInPlay.length === 2){
//     if (cardsInPlay[0] === cardsInPlay[1]){
//       card.removeClass('open', 'show');
//       card.addClass('card match');
//       console.log("You have found a match!");
//     }else{
//       // alert("Sorry, Try again");
//       console.log("NOOOOO")
//     }
//    }
// }

/*
*
*
*
*/

function flipCard() {
  cards.forEach((card) => {
    console.log(cards);
    console.log(card);

    card.addEventListener('click', (e) => {
      // openCard();
      card.classList.add('open', 'show');
      //.classList will retrieve the list of classes set on the card element
      // .add method is letting me add .open and .show class to the element
      // read for more: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList

      cardsInPlay.push(card);
      console.log('cardsInPlay', cardsInPlay.length)


       if(cardsInPlay.length >= 2) {
        // delay
        setTimeout( () => {
          cardsInPlay.forEach( (card) => {
            // hide the open cards when condition met
            card.classList.remove('open', 'show');
            // empty the cardsInPlay array
            cardsInPlay = [];
            })
          }, 1000)
        }
        // checkForMatch();
    })
  })
  // newGame();
}

// shuffle cards

// function shuffleDeck() {

//     const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
//     const shuffledCards = shuffle(cardsToShuffle);
//     for (card of shuffledCards) {
//         deck.appendChild(card);
//     }
// }
// shuffleDeck();





