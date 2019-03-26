//
// function keisha(hair, eyes) {
//     console.log("Hello Keisha, you have " + hair + " and " + eyes);
// }
// // call function
// keisha ('black hair', 'brown eyes');
//
// // self-invoking function
// (function () {
//     console.log('hello');
// })();

// let anime = characters ('Pinky', 'Brain');
// function characters(Genius, Insane) {
//     return Genius + Insane + ' back to the drawing board';
// }
//
// let cookie = wisdom("Keisha");
// function wisdom(myname) {
//     let fortune = myname + ", good luck.";
//     return fortune
// }
// let answer = calculate(5);
// function calculate(number){
//     return number * 2;
// }

function iterator(array) {
    let nextIndex = 0;

    return{
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done:false} :
                {done: true};
        }
    }
}
let it = iterator(['John', 'Tim', "Sam"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);


let addItem = (function () {
    let cartItems = 0;
    return function () {
        return cartItems += 1;
    };
})();

console.log(addItem());
console.log(addItem());
console.log(addItem());
console.log(addItem());


let number = add (2);
function add(number) {
    return number + 5;

}

let answer = (function () {
    let secNum = 4;
    return function () {
        return secNum + 3;
    };
})();