let pirate = {health: 100};
pirate ["health"] = 80;

function Pirate(health, speed) {
    this.health = health;
    this.speed = speed;
}
let wingbeard = new Pirate(100, 130);
console.log(wingbeard.health + wingbeard.speed);