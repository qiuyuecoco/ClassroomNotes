let currentDeckId;

$.get(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    {},
    data => {
        currentDeckId = data.deck_id;
        displayCards(data.deck_id, 2);
        // console.log(data);
    }
);

//Promise: Get deck

function getNewDeck () {
    return new Promise((resolve, reject) => {
        $.get(
            `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
            {},
            deck => {
                resolve(deck);
            }
        );
    });
}

let deckPromise = getNewDeck();
deckPromise.then(deck => console.log('deck from deckPromise', deck));

function getCards (deckId, count) {
    return new Promise((resolve, reject) => {
        $.get(
            `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`,
            {},
            data => {
                const cards = data.cards;
                resolve(cards);
            }
        ).fail(error => {
            reject(error);
        });
    });
}

let getTwoCardPromise = deckPromise.then(deck =>{
    return getCards(deck.deck_id, 2);
});
getTwoCardPromise.then(cards =>{
    displayCards(cards);
});

function drawCard () {
    let oneCardPromise = deckPromise.then(deck => {
        return getCards(deck.deck_id, 1);
    });
        oneCardPromise.then(cards => {
            displayCards(cards);
        });
}

// //BJ Promise Practice: get Deck
// let cardPromise = getCards();
// function getCards(dkId, count) {
//     return new Promise((resolve, reject) =>{
//         $.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
//             {
//             success: data => {
//                 resolve(data);
//             },
//             error: error => {
//                 reject(error);
//             }
//         });
//     });
// }
// cardPromise.then(data => {
//     console.log('promiseCard', data);
// },
//     error => {
//     console.log('promiseCardRejected', error);
// });
// // check above practice: returning promiseCard Undefined

function displayCards(deckId, count) {
    $.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`,
        {},
        data => {
            const cards = data.cards;

            cards.forEach(card => {
                $('#hand1').append(`<img src=${card.image}>`);
            });
        }
    );
}

function drawCard() {
    displayCards(currentDeckId, 1);
}