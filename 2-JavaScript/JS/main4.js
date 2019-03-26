// type["hasac"] = true;
// console.log(car.hasac);
// delete car.year;


let type = {make: 'Toyota', model: 'Prius'};
// let feature = {powerseats: true, bodystyle: 'hatchback'};
// let year = 2007;
// let milage = 44000;
// let color = 'blue';
// let passenger = 5;
//
// console.log(type.make);


// let card = {name: 'Keisha Ding', goal: 'Entrepreneur', motto: 'Nike: Just do it', email: 'krding@v.com', number:'801-696-7529', myimg:'./GrumpyCatUni.png'};
//
// document.getElementById('main').innerHTML = card.name;
// document.getElementById('title').innerHTML = card.goal;
// document.getElementById('email').innerHTML = card.email;
// document.getElementById('number').innerHTML = card.number;
// document.getElementById('motto').innerHTML = card.motto;
// document.getElementById('myimg').innerHTML = card.myimg;

function searchobj(mystring) {
    // console.log(mystring);
    // for every property in type do this...
    for(prop in type){
        // console.log(type);
        // convert property to a string for searching purposes
        let nstring = type[prop].toString();
        if(nstring.indexOf(mystring) && type[mystring] != undefined){
            document.getElementById('result').innerHTML = type[mystring];
        }
    }
}

let variable = {
    type1: "details",
    type2: "more deatils",
    info: function printInfo(string) {
        console.log("bird info");
    },
    type3: "type"
};

variable.info();