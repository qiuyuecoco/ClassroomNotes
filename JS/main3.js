let number = 9;
let three = 'Fizz';
let five = 'Buzz';
let answer;
// let yay = (number % 3 == 0) ? 'Fizz' : number;
// let nay = (number %= 5 == 0) ? 'Buzz' : number;

if ((number % 3 == 0) && (number % 5 == 0)) {
    answer = three + ' ' +  five;
    // console.log(answer);
}
else if (number % 3 == 0) {
    answer = 'Fizz';
    // console.log(answer);
}
else if (number % 5 == 0) {
    answer = 'Buzz';
    // console.log(answer);
}
else {
    console.log(number);
}
console.log(answer);

// answer = answer == '' ? number : answer