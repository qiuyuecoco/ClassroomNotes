// const posts = [
//     {title: "Post One", body: "This is post one"},
//     {title: "Post Two", body: "This is post two"}
// ];
// function getPosts () {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) =>{
//             output += `<li>${post.title}</li>`;
//         });
//         $('#postTitle').html = output;
//     }, 1000);
// }
// function createPost(post, callback){
//     setTimeout(() =>{
//         posts.push(post);
//         callback();
//     }, 2000);
// }
// createPost({title: "post three", body: "This is post three"}, getPosts);
//
//
const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];
function getPosts () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        $('#postTitle').html = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject("Error, something went wrong");
            }
        }, 2000);
    });
}
//
// createPost({title: "Post Three", body: "This is post three"})
//     .then(getPosts)
//     .catch(err => console.log(err));
const Promise1 = Promise.resolve("Hello World");
const Promise2 = 10;
const Promise3 = new Promise((resolve, reject) =>
setTimeout(resolve, 2000, "Goodbye"));
Promise.all([Promise1, Promise2, Promise3]).then(value =>
console.log(values));

/**
 1. strings, objects & arrays
 2. functions
 3. loops
 4. classes
 5. callbacks
 6. promises
 */

let string = "hello";
let aCharacter = string[2];
let stringLength = string.length;
let stringAsArray = string.split('l');
console.log(stringAsArray);
let hasSubstring = string.indexOf("ll") != -1;
let hasSubstringRegex = string.match(/l{2}/);
console.log(hasSubstring);

//objects
let object = {
    name: 'luigi',
    id: 234234,
    games: [
        "Super Mario World",
        "Yoshi\'s Island",
        "Mario Kart"
    ]
};
object['latestGame'] = "Mario Party";
object.latestGame = "Mario Partay";
const propertyNames = Object.keys(object);
const propertyValues = Object.values(object);
for (const key in object) {
    const value = object[key];
}
console.log(propertyNames);
console.log(propertyValues);

//arrays
//push, pop, map, filter, forEach
const array = [
    "Super Mario World",
    "Yoshi\'s Island",
    "Mario Kart"
];
array[array.length - 1] = "Mario Party 8";
const game = array[array.length - 1];
array[array.length - 1] = undefined;
console.log(array.length);

//functions
function square(number) {
    return number + number
}
const result = square(4);
console.log(result);

//loops
const items = ['toothpaste', 'soap', 'floss', 'comb'];
const itemLength = [];
for (let i = 0; i < items.length; i++) {
    itemLength[i] = items[i].length;
}
//these are all the same to push the item length
// items.forEach(item =>{
//     // itemLength[index] = item[index].length;
//     // itemLength[index] = item.length;
//     itemLength.push(item.length);
// });
items.forEach((item, index) =>{
    itemLength.push(item.length);
});
console.log(itemLength);
const itemLengthsEasy = items.map(item => item.length);

//classes
class Printer {
    constructor(ipAddress, brand, model) {
        this.ipAddress = ipAddress;
        this.brand = brand;
        this.model = model;
        this._status = "Ready";
    }
    print(files){
        this._status = "Printing";
    }
    get status (){
        return this._status == "Not ready" ? "Printing" : "Ready";
    }
}
class InkJetPrinter extends Printer{
    constructor(ipAddress, brand, model, inkType) {
        super (ipAddress, brand, model);
        this.inkType = inkType;
    }
    print(files, settings) {
        //code particular to InkJetPrinter
    }
}
class InkCartridge {
    constructor () {
        this.black = 100;
        this.red = 100;
        this.yellow = 100;
        this.blue = 100;
    }
    get level() {
        return(this.red + this.yellow + this.blue) / 3;
    }
}
const printer = new Printer("12.34.56", "HP", "LaserJet");
const newPrinter = new Printer("12.34.56", "HP", "LaserJet", new InkCartridge());

const currentStatus = printer.status;
console.log(Printer);
console.log(newPrinter);

//callbacks
function getData(id, callback) {
    let data = {id: id, name: "Secret Agent"};
    callback(data);
}
getData(234567, (data) =>{

    //do something important to data
   console.log(data)
});

//promises
function getDataPromise(id) {
    return new Promise((resolve, reject) => {
        if(!id){
            reject({error: "You are smart" , message: "Try again"})
        }
        let data = {id: id, name: "Secret Agent"};
        resolve(data);

    })
}
let dataPromise = getDataPromise(2323);
dataPromise.then(data => {
    console.log("from.then", data);
});