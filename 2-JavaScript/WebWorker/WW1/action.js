// //basic web worker class practice
// var w;
//
// function startWorker() {
//     if(typeof (Worker) != "undefined"){
//         if(typeof (w) === "undefined"){
//             w = new Worker("worker.js");
//         }
//         w.onmessage = function (event) {
//             $(".result").html(event.data);
//         }
//     }
//     else{
//         $(".result").html("Stop using IE. It won't work");
//     }
// }
// function stopWorker() {
//     w.terminate();
//     w = undefined;
// }

//
// //timeout and interval practice
// var tick = 0;
// var myTimer = setInterval(goBang, 4000);
//
// function goBang() {
//     tick ++;
//     console.log("timer done" + tick);
//     if(tick > 5){
//         clearInterval(myTimer)
//     }
// }

//requestAnimationFrame
let frames = 0;

gameLoop();

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    frames ++;
    console.log(frames);
}