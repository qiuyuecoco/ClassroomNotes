function addList(myval, event) {
    switch (event.which) {
        case 13:
            $(".lists").append("<div class='myList'>" +
                "<span class='title' contenteditable='true'>" + myval + "</span>" +
                "<div class='listItems'></div>");
            $(".listInput").val("");
            break;
    }
}