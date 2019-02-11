h1.innerHTML = "Hi again";

let object = {
    num: 4,
    string: "string",
    isTrue: true
};

const myObject = {
    friday: false,
    ppl: 15,
    blah: "string",
    wait: { more: {}},
    back: function () {

    }
};
console.log(myObject)


let numb = 8;
let words = "string with words";
let active = true;

let item = function (num1) {

};
let alpha = 4000
let bravo = 3800
let z = alpha + bravo

let charlie = "Charles"
let delta = "Delta"
let intro = charlie + delta

console.log(intro + z)

//conditional execution
// let day = new Date().getDay();
let date = new Date ();
let day = date.getDay();
let isAfternoon = date.getHours() >= 12;
let schoolsOut = date.getHours() >= 10 && date.getMinutes() >= 30;

if (day == 5 && isAfternoon) {
    console.log('yay')
}
else if (day == 4) {
    console.log('almost Friday')
}
else if (day == 6 || schoolsOut) {
    console.log('time to hit the slopes')
}
else {
    console.log('nay')
}

//ternery operator; boolean expression ? <true expression> : <false expression>
let yay = isFriday ? 'yay it\'s Friday' : 'blah'

if (isFriday) {
    myMood = "yay"
}
else {
    myMood = "blah"
}

