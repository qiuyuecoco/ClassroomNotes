//lecture practice
//
// var string = "I love the mountains here in Utah";
// var pattern = /mountains/i;
// var str = string.search(pattern);
// console.log(str);
//
// var exp = /^[e-t3-7]+$/i;
//
// console.log(/apples/.exec("I love to eat apples."));

function goSearch(myval){
    let re = new RegExp("\\b" + myval + "\\b");
    let myString = $("#content").html().toString();
    let myResult = myString.search(re);
    console.log(myResult);

    if (myResult > -1) {
        $("#result").html("Got it at: " + myResult);
    }
    else {
        $("#result").html("Nope");
    }
}