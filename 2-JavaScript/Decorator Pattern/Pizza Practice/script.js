class Pizza{
    constructor(i){
        this.price = 5.00;
        this.ingredients = i;
    }
    calcPrice(){
        for(let i = 0; i < this.ingredients.colllection.length; i++){
            console.log("ingredient added");
            this.price += this.ingredients.colllection[i].price;
        }

    }

}
class Ingredients {
    constructor(){
    this.colllection = [];

    }
    add(item){
        this.colllection.push(item);
    }
}
class Chicken {
    constructor(){
        this.price = 2.50;
        this.ingredient = "chicken";

    }
}
class Mushroom {
    constructor(){
        this.price = 1.50;
        this.ingredient = "mushroom";
    }
}
let myIngredients = new Ingredients();
myIngredients.add(new Chicken());
myIngredients.add(new Mushroom());

let myPizza = new Pizza(myIngredients);
myPizza.calcPrice();




// console.log(myPizza.price + " -> " + myPizza.ingredients);
console.log(myIngredients.colllection);
console.log(myPizza);