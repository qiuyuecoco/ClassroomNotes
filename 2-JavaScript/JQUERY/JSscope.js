// (function () {
//     displayNumber();
// })();
//
// function displayNumber() {
//     let mynum = addNumber(2);
//     console.log(mynum);
// }
// function addNumber(val) {
//     let randum = Math.random();
//     return randum + val;
// }

var two = 5;
let func = local(4);
let funcTwo = localTwo(2);

function local(num) {
     let two = 2;
     let myNum = two + num;
     console.log(myNum);
 }

function localTwo(numb) {
    var one = 4;
    let newNum = two + one;

    console.log(newNum);
}

(function () {
    var myCart = 2;
    var bonusCart = 4;
    console.log(myCart + " plus " + bonusCart);
})();