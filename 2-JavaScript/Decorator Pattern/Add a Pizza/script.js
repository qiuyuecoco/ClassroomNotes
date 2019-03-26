let pizzaList = new Pizza();

function addType(val, event) {
    switch (event.key) {
        case "Enter":
            $("#input").val("");
            pizzaList.add(val);
            console.log(pizzaList);
            break;
    }
}
function Pizza() {
    this.collection = [];
    this.add = function (pizzaName) {
        this.collection.push(new PizzaType(pizzaName));
    };
}
function PizzaType(type) {
    this.type = type;
}