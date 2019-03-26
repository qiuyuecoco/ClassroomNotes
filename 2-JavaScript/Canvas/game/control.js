let width = 900;
let height = 500;
let canvas;
let renderingContext;
let frames = 0;

(function () {
    main();
})();

function main() {
    canvasSetup();
    document.getElementById("myCanvas").appendChild(canvas);
    loadGraphics();
    document.addEventListener("keydown", mykeypress);
    document.addEventListener("keyup", unpress);
}
function mykeypress(event) {
    switch (event.keyCode) {
        case 39: //right arrow press
            myPhantom.direction = "right";
            myPhantom.currentState = myPhantom.states.walkingright;
            break;
        case 37: //left arrow press
            myPhantom.direction = "left";
            myPhantom.currentState = myPhantom.states.walkingleft;
            break;
        case 32: //space bar press
            myWeapons.add();
            break;
    }
}
function unpress() {
    myPhantom.currentState = myPhantom.states.standing;
    myPhantom.direction="";
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = "1px solid black";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");
}
function loadGraphics() {
    let img = new Image();
    img.src ="../../../Media/SpriteSheet.png";
    img.onload = function () {
        initSprite(this);
        gameLoop();
    }
}
function gameLoop() {
    render();
    update();
    frames++;
    window.requestAnimationFrame(gameLoop);
}
function update() {
    myActor.update();
    myPhantom.update();
    myWeapons.update();
}
function render() {
    backgroundSprite.draw(renderingContext, 0, 0);
    myPhantom.draw();
    myWeapons.draw();


    // myActor.draw();
    // myKnight.draw();
    // knightTwo.draw(renderingContext, 200, 330);
}