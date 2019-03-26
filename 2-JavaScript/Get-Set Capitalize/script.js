//place into
class Util {
    constructor() {
        this.id = 0;
    }
    get next() {
        return this.id++;
    }
    set next(number){
        if(typeof number == 'number'){
        if(this.id == 0)
            this.id = number;
        }
    }
}
let util = new Util();
// let itemInputID = util.next;

//generate random id
class Util2 {
    static getNext(){
        let id = `${Math.floor(Math.random() * 100)}-
        ${Math.floor(Math.random() * 100)}-
        ${Math.floor(Math.random() * 100)}`;
        return id;
    }
}

//set Timeout with ID & console log message
setTimeout(() => console.log('done'), 2000);

setTimeout(
    function () {
        console.log("text");
        2000;
    }
);

//function that hold an array & prints specific item
// const pcs= ["dell", "lenovo", "hp"];
// let Pcs = forEach((pc) =>{
//     console.log(pc)
// });
//
// const coolPcs = pcs.filter((pc) => pc.indexOf("l") != -1);


//class practice
let array = ['dog', 'cat', 'mouse'];
document.getElementById('array').innerText = array;
//function run asynchronously
function capAsync(anArray, callback) {
    //setTimeout creates the asynchronousity
    window.setTimeout(
        function () {
            //callback is the function passed in
            callback(anArray.toString().toUpperCase());
        }, Math.random() * 2000 + 1000);
}
function capFirstLetAsync(anArray, someCallback) {
    setTimeout(() => {
        const newArray = anArray.map(item => item.substring(0, 1).toUpperCase() + item.substring(1));
        someCallback (newArray);
    }, Math.random() * 2000 + 1000);
}
//execute the async function passing callback function
//not being used, not sure why...
// let newCoolStr = capAsync(array, handleModifiedArray);
// function handleFirst(data) {
//     capFirstLetAsync(data, handleModifiedArray);
// }

//this becomes the callback function
function handleModifiedArray(modifiedArrayStr) {
    document.getElementById('array').innerText = modifiedArrayStr;
}
//declare to run functions
capFirstLetAsync(array, handleModifiedArray);
capAsync(array, handleModifiedArray);


// //twitter example to show how to wait for other information to load
// authenUser(username, password, callback){
//     let user = server.authenticate();
//     callback(user);
// }
//
// getTweets(user){
//     server.getRecentTweets()
// }
// getTweetDets(id){}
//
// authenUser(username, password, getTweets){}