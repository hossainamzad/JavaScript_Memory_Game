
const deck = document.querySelector('.deck');
const closeModal = document.querySelector('.modal-close');
const replayButton = document.querySelector('.modal-replay');
let cardList = [];
let moves = 0;
let duration = 0, timerId;
let timerOn = false;
let matchedCards = 0;



/* Shuffle deck */
shuffleCards();

function resetGame() {
    resetTime();
    resetMoves();
    resetStars();
    resetDeck();
    shuffleCards();
}

function resetTime() {
    stopTimer();
    duration = 0;
    displayTime();
}

function resetMoves() {
    moves = 0;
    document.querySelector('.moves').textContent = moves;
    return moves;
}

function resetStars() {
    const resetStars = document.querySelectorAll('.stars li');

    for (let resetStar of resetStars) {
        if (resetStar.style.visibility === 'hidden') {
            resetStar.style.visibility = 'visible';
        }
    }
}

function resetDeck() {
    const finalCards = document.querySelectorAll('.deck .card')

    for (let card of finalCards) {
        card.className = 'card';
    }
    matchedCards = 0;
}


function checkWin() {
    if (matchedCards === 8) {
        endGame();
    }
}

function endGame() {
    stopTimer();
    displayStats();
    toggleModal();
}


function shuffleCards() {
    const cardsArray = [].slice.call(document.querySelectorAll('.card'));
    const shuffledCards = shuffle(cardsArray);

    for (card of shuffledCards) {
        deck.appendChild(card);
    }
}

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

function openCards(clicked) {
    clicked.classList.toggle('open');
    clicked.classList.toggle('show');
}


function hideCards(clicked) {
    clicked.classList.remove('open');
    clicked.classList.remove('show');
}


function addCard(clicked) {
    cardList.push(clicked);
    //console.log(cardList);

}


function checkMatch() {
    if (cardList[0].firstElementChild.className === cardList[1].firstElementChild.className) {  //check if the two cards have matching class
        //console.log("match found!");
        cardList[0].classList.toggle('match');  //if mathced, leave two cards open
        cardList[1].classList.toggle('match');
        matchedCards++;
        clearCardList(cardList);
    } else {
        setTimeout(function () {
            //console.log("Not a match :(");
            hideCards(cardList[0]);
            hideCards(cardList[1]);
            clearCardList(cardList);
        }, 1000);
    }

    return cardList;
}

function clearCardList(cards) {
    cards.length = 0;
    return cards;
}


function addMove() {
    moves++;
    const movesDisplay = document.querySelector('.moves');

    if (moves === 1) {
        movesDisplay.nextSibling.textContent = " Move";
    } else {
        movesDisplay.nextSibling.textContent = " Moves";
    }
    movesDisplay.textContent = moves;
    return moves;

}

function checkMoves() {
    if (moves === 8 || moves === 24 || moves === 32) {
        removeStar();
    }

    checkWin();
}

function removeStar() {
    const stars = document.querySelectorAll('.score-panel .stars li');

    for (const star of stars) {
        if (!(star.style.visibility === 'hidden')) {
            star.style.visibility = 'hidden';
        break;
        }

    }

}

function startTimer() {
    timerId = setInterval( function() {
        duration++;
        displayTime();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
    timerOn = false;
    duration = 0;   //reset clock
}


function displayTime() {
    const timer = document.querySelector('.timer');
    let sec = duration % 60;
    let min = Math.floor(duration / 60);

    if (sec < 10) {
        timer.textContent = `${min}:0${sec}`;
    } else {
        timer.textContent = `${min}:${sec}`;
    }
}

function toggleModal() {
    const modal = document.getElementById('openModal');
    modal.classList.toggle('hide');
}

function displayStats() {
    const timeDisplay = document.querySelector('#statsTime');
    const movesDisplay = document.querySelector('#statsMoves');
    const starsDisplay = document.querySelector('#statsStars');
    let timeStats = document.querySelector('.timer').innerText;
    let movesStats = document.querySelector('.moves').innerText;
    let starsStats = getStars();

    timeDisplay.textContent = `${timeStats}`;
    movesDisplay.textContent = `${movesStats}`;
    starsDisplay.textContent = `${starsStats}`;

}

function getStars() {
    const finalStars = document.querySelectorAll('.stars li');
    let finalStarCount = 0;

    for (star of finalStars) {
        if (!(star.style.visibility === 'hidden')) {
            finalStarCount++;
        }
    }
    return finalStarCount;
}

closeModal.addEventListener('click', function() {
        toggleModal();
    }
)

replayButton.addEventListener('click', function() {
        toggleModal();
        resetGame();
});

deck.addEventListener('click', function(e) {
    let li = event.target.closest('li');


    if (!li) {
        return;
    }

    if (!li.classList.contains('card')) {
       return;
    }

    if (li.classList.contains('match')) {
        return;
     }

     if (li.classList.contains('open') || li.classList.contains('show')) {
        return;
     }

    if ((cardList.length < 2) && (!cardList.includes(li))) {
        if (!timerOn) {
            startTimer();
            timerOn = true;
        }
        openCards(li);
        addCard(li);

    }

    if (cardList.length === 2) {
        checkMatch();
        addMove();
        checkMoves();
    }
});

document.querySelector('.restart').addEventListener('click', resetGame);

