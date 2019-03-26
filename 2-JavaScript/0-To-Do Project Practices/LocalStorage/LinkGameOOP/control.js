(function () {
    if(localStorage.alldata){
        let mydata = JSON.parse(localStorage.alldata);

        for (let l = 0; l < mydata.length; l++) {
            myLists.add(mydata[l].name);
            for (let i = 0; i < mydata[l].collection.length; i++) {
                myLists.collection[l].add(mydata[l].collection[i].name, mydata[l].collection[i].damage);
            }
        }
        pagePrint(myLists.collection);
    }
})();

function placeBokoblin(value, event) {
    switch (event.key) {
        case "Enter":
            // console.log ("enter pushed");
            myLists.add(value);
            $(".bokoblin").val("");
            setMyData();
            break;
    }
}

function setMyData() {
    localStorage.setItem("alldata", JSON.stringify(myLists.collection));
    getMyData();
}

function getMyData() {
    $(".bokoblinBox").html("");
    let objData = JSON.parse(localStorage.alldata);
    console.log(objData);
    pagePrint(objData);
}

function pagePrint(objDataArray) {
    for (let l = 0; l < objDataArray.length; l++) {

        let listItems = "";
        for (let i = 0; i < objDataArray[l].collection.length; i++) {
            listItems += "<div>" + objDataArray[l].collection[i].name + "</div>";

        }

        $(".bokoblinBox").append("<div><span>" + objDataArray[l].name +
            "</span>" + "<input onkeyup='addItem(this, this.value, event,"+ l +")' type='text' placeholder='Add Item...' class='iteminput'>" +
            "<div>" + listItems + "</div>" +
            "</div>")
    }
}
function addItem(element, myval, event, listNum) {
    switch (event.key) {
        case "Enter":
            $(element).val("");
            myLists.collection[listNum].add(myval, false);
            setMyData();
            break;
    }

}
