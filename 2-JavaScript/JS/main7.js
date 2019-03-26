//calculator
function calculate() {
    let numberone = document.getElementById('numOne').value;
    let numbertwo = document.getElementById('numTwo').value;
    let myresults = document.getElementById('result');
    let final = Number(numberone) + Number(numbertwo);
    myresults.innerHTML = final;
}
let option = document.getElementById('mytype');
myval.value




// function layer(n, n4) {
//     let result = n(a);
//     return result;
// }
// let layerResult = layer(square, 5);
//
// function square(n) {
//     return 4 * n;
// }
// console.log(layerResult);


// //debug practice
// (function () {
//     collectNumbers();
// }());
//
// function collectNumbers() {
//     let numOne = findNumber(4);
//     let numTwo = findNumber(9);
//     document.getElementById('result').innerHTML = numTwo;
//
// }
// function findNumber(mynum) {
//     // "use strict";
//     return mynum + 3;
// }


// var firstname = "Joel";
// var lastname = "Frasier";
//
// function combinename(fname, lname){
//
//     fname += " John";
//     return fname + " " + lname;
// }
//
// alert(combinename(firstname, lastname));

//
// var firstname = "Joel";
// var lastname = "Frasier";
// var middlename = "Darryl";
// var nametitle = 'Sir';
//
// function combinename(fname, lname){
//     fname += " John";
//     return nametitle + " " + fname + " " + middlename + " " + lname;
// }
//
// alert(combinename(firstname, lastname));