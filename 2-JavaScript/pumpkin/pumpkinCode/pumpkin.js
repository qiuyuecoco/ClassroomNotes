// JavaScript Document
var gametitle = "Pumpkin Game";
var pumpkinpatch = "";
var numpumpkins = 0;

document.getElementById("title").innerHTML = gametitle;
document.getElementById("numbertitle").innerHTML = numpumpkins;

function addPumpkin(event) {
	let randomPumpkin = Math.floor((Math.random() * 4) + 1);

	var xAdjust = 360;
	var yAdjust = 8;
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
	numpumpkins ++;
	document.getElementById("numbertitle").innerHTML = numpumpkins;
}


// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});

//broken practice
// function addItem() {
//     let inputItem = $(".itemInput").val();
//     let listItems = $(".list").children();
//     if (inputItem != "") {
//         $(".list").append("<div class='row'>"+
//             "<i onclick = 'deleteItem(this)' class='fas fa-trash'></i>"+
//             "<span contenteditable='true'>" + inputItem + "</span>"+
//             "<button onclick='goGreen(this)'>Highlight</button>"+
//             "</div>");
//         $(".myInput").val("");
//         console.log(listItems);
//     }
//     $(".itemInput").focus();
//
// }
//
// function checkKey(event) {
//     switch (event.which) {
//         case 13:
//             addItem();
//             break;
//     }
// }
//
// function deleteItem(element) {
//     console.log(element);
//     $(element).fadeOut( "slow", function() {
//         $(element).parent().remove();
//     });
//
//     $(".row:even").css("background-color", "#dadfea");
//
// }
//
// function goGreen(element) {
//     $(element).parent().addClass("active");
//     $(element).parent().find('span').remove();
// }
//
//
// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }
//
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);
//
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
//
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
//
//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }