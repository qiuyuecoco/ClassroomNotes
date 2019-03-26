listNum = 0;
function addList(value, event) {
    switch (event.which) {
        case 13:
            //add List with Enter key
            console.log(value);
            listNum ++;
            $(".boxofLists").append("<div id='list" + listNum + "'>" +
                value +
                "<button onclick='deleteList(" + listNum + ")'>delete</button>"+
                "<input type='text' placeholder='add item' onkeyup='additem(" + listNum +", this.value, event)'>"+
                "</div>");

            $("#addList").val("");
            break;
    }
}

function additem(listID, value, event) {
    switch (event.keyCode) {
        case 13:
            $("#list" + listID).append("<div class = 'item'>" + value +"</div>");
            break;
    }
}

function deleteList(listID) {
    console.log(listID);
    $("#list" + listID).remove();
}
function findChildren() {
    let mychildren = $(".boxofLists").children();
    console.log(mychildren);
}