// Phantom population location
class Phantom {
    constructor() {
        this.x = 400;
        this.y = 18;
        this.width = 100;
        this.height = 100;

        this.maxspeed = 4;
        this.velX = 0;
        this.friction = 0.8;
        this.direction = "";
        this.frame = 0;
        this.animation = [0, 1, 2, 3];
        this.states = {
            standing: 0,
            walkingright: 1,
            walkingleft: 2
        };
        this.currentState = this.states.standing;
    }
    update(){
        let n = 10;
        this.frame += frames % n === 0 ? 1 : 0;
        this.frame %= this.animation.length;

        if(this.direction === "right" && this.x < 900){
            if (this.velX < this.maxspeed){
                this.velX++;
            }
        }
        if(this.direction === "left" && this.x > 40){
            if (this.velX > -this.maxspeed){
                this.velX--;
            }
        }
        this.velX *= this.friction;
        this.x += this.velX;
        // // make phantom fall off of the edge
        // this.y += 1;
    }
    draw(){
        renderingContext.save();
        let n = this.animation[this.frame];
        if(this.currentState === this.states.standing){
            phantomSprite.draw(renderingContext, this.x, this.y);
        }
        if(this.currentState === this.states.walkingright){
            phantomwalkright[n].draw(renderingContext, this.x, this.y);
        }
        if(this.currentState === this.states.walkingleft){
            phantomwalkleft[n].draw(renderingContext, this.x, this.y);
        }
        renderingContext.restore();
    }
}
let myPhantom = new Phantom();

class Bomb {
    constructor(){
        this.x = myPhantom.x;
        this.y = 30;
        this.width = 100;
        this.height = 100;
        this.detonate = false;
    }
    update(){
        this.velY += this.gravity;
        this.y += this.velY;
    }
    draw(){
        bomb.draw(renderingContext, this.x, this.y);
    }
}
class WeaponCollection {
    constructor(){
        this.collection = [];

    }
    add(){
        this.collection.push(new Bomb());
    }
    update(){
        for (let w = 0; w < this.collection.length; w++) {
            let daBomb = this.collection[w];
            daBomb.update();
        }
    }
    draw(){
        for (let w = 0; w < this.collection.length; w++) {
            let daBomb = this.collection[w];
            daBomb.draw();
        }
    }
}
let myWeapons = new WeaponCollection();

// Knight population location
class Knight{
    constructor() {
        this.x = 600;
        this.y = 340;
        this.width = 100;
        this.height = 100;
    }
    draw(){
        knightSprite.draw(renderingContext, this.x, this.y);
    }
}
let myKnight = new Knight();
let knightTwo = new Knight();

class Actor {
    constructor(type) {
        this.x = 400;
        this.y = 45;
        this.width = 100;
        this.height = 100;
        this.type = type
    }
    update(){
        this.y += 1;
    }
    draw(){
        actorSpriteArray[this.type].draw(renderingContext, this.x, this.y);
    }
}
let myActor = new Actor();

class Cast {
    constructor(){
        this.collection = [];
    }
    add(){
        this.collection.push(new Actor());
    };
}

let myCast = new Cast();