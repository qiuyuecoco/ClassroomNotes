function Car(make, model, year, features) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.features = features;
}

let v8 = new features (8, '44W-360', 120);
let carOne = new Car('acura', 'mdx', 2019, v8);

function features(cyclinder, torque, power) {
    this.cyclinder = cyclinder;
    this.torque = torque;
    this.power = power;
    this.getStatus = () => {};
}
console.log(carOne);
Car.prototype = Object.create(features.prototype);
Car.prototype.constructor = Car;

/* Example for to-do app
ListeningStateChangedEvent.forEach (list => listContainerElement.append(list.name));
*/


function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let myAddress = new Address('143 triumph blvd', 'slc', 84043);

function Person(name, address) {
    this.name = name;
    this.address = address;
    this.talk = () => {};
    this.walk = () => {};
}

function Employee(name, address, badgeId, position) {
    Person.call(this, name, address);
    this.badgeId = badgeId;
    this.position = position;
    this.work = (task) => {};
    this.lead = (employee) => {};

}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Company(name, address, employees) {
    this.name = name;
    this.address = address;
    this.employees = employees;
    this.provideService = (employees, customer) => {};
    this.addEmployee = (employee) => {
        if (employee.badgeId) {
            this.employees.push(employee);
        }
    }
}

let companyAddress = new Address("1 digital drive", "lehi", 84043);
let megan = new Employee("Megan Smart", myAddress, 413435, "software dev");
let mark = new Employee("Mark Smith", myAddress, 10101, "project Manager");
let Adobe = new Company('Adobe', companyAddress, [megan]);
Adobe.addEmployee(mark);

console.log(Adobe);