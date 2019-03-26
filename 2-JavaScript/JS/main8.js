// let todos: [
//     {
//     text: 'do something',
//     selected: false
//     },
//     {
//     text: 'trash',
//     selected: true
//     }
// }];

// let progress = countSelectedElements(todos);
// function countSelectedElements(array) {
//     let numberSelected = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].selected) {
//             numberSelected++;
//         }
//     }
// }

// let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// function backwards (alpha) {
//     let beta = 26;
//     for (let i = 26; i > beta.length; i--){
//         if (beta[i].length)
//             return (alpha)
//     }
// }

let bet = "abcdefghijklmnopqrstuvwxyz"; //.split('');
for (let i = bet.length - 1; i >= 0; i--){
    console.log(bet[i])
}


function concate(...items) {
    let stringy = '';
    items.forEach(function (element, index, array) {
        stringy = stringy + elements;
    })
    return stringy;
}

let str = concate('t' + ' ' + 'k' + ' ' + 's');



let properties = {
    a: {
        rooms: 4,
        street: '123 main street',
        zipCode: 84043
    },
    b: {
        rooms: 3,
        street: '444 digital drive',
        zipCode: 84043
    },
    c: {
        rooms: 9,
        street: '12384 traverse pkwy',
        zipCode: 84005
    },
    d: {
        rooms: 19,
        street: '43976 homestead pkwy',
        zipCode: 84043
    },
};

let propertyCount = 0;
for (const rentalInfo in properties){
    if (properties[rentalInfo].zipCode == 84043){
        propertyCount++;
    }
}
console.log(propertyCount);


//broken code
// for in (zipCode of properties) {
//     num (properties[zipCode])
// }
//
// for (let itemname in properties) {
//     blah (itemname , properties[itemname])
// }
//
// for(let zipCode of shoppingList)
// {  totalItems =  zipCode;}