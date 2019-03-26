let myLists = new ListCollection();

function ListCollection() {
    this.collection = [];
    this.add = function (Bname) {
        this.collection.push(new Bokoblin(Bname));
    };

}
//this would be our list
function Bokoblin(name) {
    this.name = name;
    this.collection = [];
    this.add = function (itemname, damageflag) {
        this.collection.push(new Item(itemname, damageflag));
    };
}
//reset damageflag
function Item(name, damage) {
    this.name = name;
    this.damage = damage;

}