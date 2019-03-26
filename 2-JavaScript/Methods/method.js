//practice notes, prior to class work
//
// let string = "something";
// let result = string.substr(1,5);
//
// console.log(result);
//
// class List {
//     constructor(text){
//         this.name = name;
//         this.task = [];
//     }
//
// }
// const list = $("div.list");
// // List.html(`<div> ${List.name}`);
// const name = $("div").html;
//
// let listSplit = list.split(",");
// let listArr = listSplit.length;
// console.log(listArr);
//
// let nameSplit = div[1];

// //Vanilla JS
// let myList = document.getElementById("list").innerHTML;
// let myName = document.getElementById("name");
// let nameVal = myName.innerHTML;
// console.log(nameVal);
// nameVal = nameVal.replace("Keisha ", "");
// myName.innerHTML = nameVal.toLocaleUpperCase();
// let myArray = myList.split(", ");
// document.getElementById("itemcount").innerHTML =myArray.length;

//JQuery method
let myList = $("#list").html();
console.log(myList);
let myArray = myList.split(", ");
$("#itemcount").html(myArray.length);
let myName = $("#name").html();
myName = myName.split(" ");
myName = myName[1].toLocaleUpperCase();
$("#name").html(myName);