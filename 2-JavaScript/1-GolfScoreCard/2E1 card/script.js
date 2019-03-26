let columnNum = 7;
let playerNum = 4;

(function () {
    buildColumn();
})();

function buildColumn() {
    for (let c = 0; c < columnNum; c++) {
         $(".scoreBox").append(`<div id="col${c}" class="column">hole ${c + 1}</div>`);
    }
    addBoxes();
}

function addBoxes() {
    //cycle thru number of player
    for (let p = 0; p < playerNum; p++) {
        //cycle thru number of holes
        for (let h = 0; h < columnNum; h++){
            $("#col" + h).append(`<div id="p${p}h${h}" class="hole" contenteditable="true"></div>`)
        }
    }
}

//
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             $(".scoreBox") = this.responseText;
//         }
//     };
//     xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
//     xhttp.send();
// }