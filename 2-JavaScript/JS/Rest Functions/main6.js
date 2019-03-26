// functions - Rest Parameters 

function concat(...items) {
    let stringy = '';
    for (let i = 0; i < items.length; i++) {
        stringy += items[i];
    }
    return stringy;
}
console.log( concat('Hello', ' beautiful ', 'morning') );


// //rest parameters w/longest string
// function long(...items) {
//     let longest = str.split(' ');
//     for (let i = 0; i < longest.length; i++) {
//         longest = items[i];
//     }
//     return longest;
// }
// console.log(long('dream', 'big', 'dreams'))

// function LongestString(...items) {
//     let longString = items[0];
//     for (let i = 1; i < items.length; i++) {
//         if(items[i].length > longString.length){
//             longString = items[i];
//         }
//     }
//     return longString;
// }
// const answer = LongestString('asdf', 'qwert', 'qwerty', 'asdfg');
// console.log (answer);


//my attempt, prints entire results w/ yum yum
function layered(yum, id) {
    // let id = 'yum';
    return yum() + id;
}

// function yum(a) {
//     return a * 8;
// }
// let result = layered(function (yum) {return a + a} + ' yum');
let result = layered( function() {return "yum";}, "yum");
console.log(result);
console.log(layered(()=>{return "num";},"yum"));
// function layer(fn, a) {
//     let result = fn(a);
//     return result;
// }
// let layerResult = layer(square, 5);
//
// function square(n) {
//     return n * n;
//
// }
// console.log(layerResult);