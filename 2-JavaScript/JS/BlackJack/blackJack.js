//
// blackJack practice
//

let suits =  ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
        'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

let welcome = document.getElementById('welcome');
let newGame = document.getElementById('newGame');
let hitButton = document.getElementById('hitButton');
let stayButton = document.getElementById('stayButton');

hitButton.style.display = 'none';
stayButton.style.display = 'none';



function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card ={
                suit: suits[suitIdx],
                values: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}
function getCardString(card) {
    return card.value + " of " + card.suit;
}

function nextCard() {
    return deck.shift();
}

let deck = createDeck();

// let result = new Date().toDateString();
// console.log(result);

let playerCards = [nextCard(), nextCard()];



let card1 = "Ace of Spades",
    card2 = "Ten of Hearts";

console.log("Welcome to BlackJack!");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards [0]));
console.log(" " + getCardString(playerCards [1]));

// let title = document.getElementById('title');
// title.innerHTML
//
// let hitButton = document.getElementById('hitButton');
// hitButton.addEventListener('click', function () {
//     //code to do something with button click
// })