let allcats;
let selcourse;
let seltype;


function getCourses() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML = this.responseText;
            allcats = JSON.parse(this.responseText);
            allcats.categories.forEach((v, i) => {
                let newItem = `<div id="${v.catid}" class="courseContainer">` +
                    `<img src="${v.courseimage}" class="courseImg"/>` +
                    `<div>`+v.name+`</div>` +
                    `<button onclick="returnCourse(${v.catid}, this)" class="courseButton">More Info</button>` +
                    `</div>`;
                $(".centerbox").append(newItem);
            });
        }
    };
    xhttp.open("GET", "//api.jsonbin.io/b/5ad654fbf5d4cd62f4721e02", true);
    xhttp.send();

}
// // in replacement of the forEach method above
// for (let i = 0; i < allcats.categories.length; i++) {
//     $(".centerbox").append(`<div class="classbox">
//     <img width="100" src="${allcats.categories[i].courseimage}">
//     <span>${allcats.categories[i].name}</span>
//     <button onclick="returnCourse(${allcats.categories[i].catid}, this)">Select</button>
// </div>`)
// }


function returnCourse(courseid, mybtn){
    // console.log(courseid, mybtn);
    let thecard = $(mybtn).parent();
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            selcourse = JSON.parse(this.responseText);
            console.log(selcourse);
            // $(thecard).append(`<div>Found It</div>`);
            let levelsArray = selcourse.classes[0].levels;
            console.log(levelsArray);
            for (let i = 0; i < levelsArray.length; i++) {
                $(thecard).append(`<a onclick="showAllClasses(${i})">${levelsArray[i].type}</a>`)

            }
        }
    }
    xhttp.open("GET", "https://uxcobra.com/classapi/class" + courseid, true);
    xhttp.send();
}

function showAllClasses(typeindex) {
    seltype = typeindex;
    for (let c = 0; c < selcourse.classes.length; c ++) {
        $(".classdisp").append(`<div class="classrow">
            <div>${selcourse.classes[c].levels[seltype].type}</div>
            <div>${selcourse.classes[c].levels[seltype].teacher}</div>
            <div>${selcourse.classes[c].levels[seltype].schedule}</div>
            </div>`);
        }
    }
