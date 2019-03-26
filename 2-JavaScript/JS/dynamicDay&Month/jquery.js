// let onClick = document.getElementById('onClick');

let myDay = document.getElementById('day');
let myMonth = document.getElementById('month');
let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthArray = ["January", "February", "March"];
let dateArray = [];

checkTime("2pm");

function checkTime (daytime) {

    let mydate = new Date();
    let dayofweek = mydate.getDay();
    let month = mydate.getMonth();
    let date = mydate.getDate();
    console.log(dayofweek);


    for (let i = 0; i < dayArray.length; i++) {
        if (dayofweek === i) {
            myDay.innerHTML = dayArray[i];
        }
    }

    for (let i = 0; i < monthArray.length; i++) {
        if (month === i) {
            myMonth.innerHTML = monthArray[i];
        }
    }
    for (let i = 0; i < dateArray.length; i++) {
        if (date === i) {
            monthArray.innerHTML = dateArray[i];
        }

    }
    // switch (dayofweek) {
    //      case "0":
    //          myDay.innerHTML = "Sunday";
    //          break;
    //      case "1":
    //          myDay.innerHTML = "Monday";
    //          break;
    //      case "2":
    //          myDay.innerHTML = "Tuesday";
    //          break;
    //      case "3":
    //          myDay.innerHTML = "Wednesday";
    //          break;
    //      case "4":
    //          myDay.innerHTML = "Thursday";
    //          break;
    //      case "5":
    //          myDay.innerHTML = "Friday";
    //          break;
    //      case "6":
    //          myDay.innerHTML = "Saturday";
    //  }
    // switch (month) {
    //     case "0":
    //         myMonth.innerHTML = "January";
    //         break;
    //     case "1":
    //         myMonth.innerHTML = "February";
    //         break;
    //     case "2":
    //         myMonth.innerHTML = "March";
    //         break;
    //     case "3":
    //         myMonth.innerHTML = "April";
    //         break;
    //     case "4":
    //         myMonth.innerHTML = "Thursday";
    //         break;
    //     case "5":
    //         myMonth.innerHTML = "Friday";
    //         break;
    //     case "6":
    //         myMonth.innerHTML = "Saturday";
    //         break;
    //     default:
    //         alert("Something's broken");
    // }
}


// for (let i = 0; i < 12; i++) {
//     if (i===6){continue;}
//     let text = "Output is " + i;
//     console.log(text);
// }

