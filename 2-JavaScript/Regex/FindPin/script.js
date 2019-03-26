//pin must be 4-6 digits, no letter or symbols
// function checkPin (pin){
//     let myReg = /^([0-9]){4,6}$/;
//
//     if (myReg.test(pin)){
//         //returns true if matched
//         console.log(true + " " + pin);
//     }
//     else {
//         console.log(false + " " + pin);
//     }
// }

function checkpin(pin){
    console.log(/^(?=[0-9]*$)(?:.{4}|.{6})$/.test(pin) + " " + pin);
}

checkpin("1234");
checkpin("0.1324");
checkpin("123134");
checkpin("-123");
checkpin("194");