//DOM manipulation via html

let myTimer;
let turnOff = false;
let myChildren = $("#page").children();

(function () {
    rainLoop();
    placeDrops();
})();

function rainLoop() {
    window.requestAnimationFrame(rainLoop);
    draw();
}

function placeDrops() {
    if(!turnOff){
        let timeRandom = Math.floor((Math.random() * 2000) + 500);
        let random = Math.floor((Math.random() * 8) + 1);
        for (let i = 0; i < random; i++) {
            addDrop();
        }
        myTimer = setTimeout(placeDrops, timeRandom)
    }
}

function draw() {
    myChildren = $("#page").children();
    $("#page").children().each(function () {
        updateSpot($(this));
    })
}
function addDrop() {
    let dropX = Math.floor((Math.random() * 1000) + 40);
    $("#page").append(`<div class = 'drop' style = 'left: ${dropX}px'></div>`)
}
function updateSpot(thechild) {
    let spot = $(thechild).css("top");
    spot = spot.replace("px", "");
    let fix = Number(spot);
    if(fix > 600){
        $(thechild).fadeOut("fast", function () {
            $(thechild).remove();
        });
    }
    else {
        fix++;
        $(thechild).css("top", (fix + "px"));
    }
}