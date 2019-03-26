let phantomSprite;
let backgroundSprite;
let bomb;

let actorSpriteArray;
let knightSprite;
let phantomwalkright;
let phantomwalkleft;


class Sprite {
    constructor(img, x, y, width, height){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(renderingContext, x, y){
        renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
    };
}
function initSprite(img) {
    actorSpriteArray = [
        new Sprite(img, 8, 7, 82, 105), //actress
        new Sprite(img, 32, 130, 48, 95) //knight
    ];
    phantomwalkright = [
        new Sprite(img, 23, 727, 60, 106),
        new Sprite(img, 80, 727, 60, 106),
        new Sprite(img, 140, 727, 60, 106),
        new Sprite(img, 200, 727, 60, 106)
    ];
    phantomwalkleft = [
        new Sprite(img, 23, 838, 60, 106),
        new Sprite(img, 80, 838, 60, 106),
        new Sprite(img, 140, 838, 60, 106),
        new Sprite(img, 200, 838, 60, 106)
    ];
    phantomSprite = new Sprite(img,22, 254, 47, 95);
    bomb = new Sprite(img,32, 380,50, 45);
    knightSprite = new Sprite(img, 32, 134, 47, 95);
    backgroundSprite = new Sprite(img, 100, 0, 900, 500);
}