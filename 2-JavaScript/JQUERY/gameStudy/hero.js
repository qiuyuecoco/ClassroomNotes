name1 = link;
name2 = link2;

function Hero() {
    this.x = 200;
    this.y = 400;
    this.width = 50;
    this.height = 100;
    this.health = 100;
    this.changeHeight = function (height) {
        this.height = height;
    }
    this.changehealth = function (health) {
        this.health = health;
    }
    this.name = function () {
        this.name = name;
    }
}
let link = new Hero();
let link2 = new Hero();
link2.changeHeight(200);
console.log(link);
console.log(link2);