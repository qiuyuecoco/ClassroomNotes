let c = document.getElementById("myCanvas");
let context = c.getContext("2d");
let img = document.getElementById("myImg");
context.drawImage(img, 45, 50);
// let img = $("#myImg");


// //circle
// context.beginPath();
// context.arc(65, 60, 300, 0, 2 * Math.PI);
// context.stroke();

// simple line
// context.moveTo(0,0);
// context.lineTo(335, 420);
// context.stroke();