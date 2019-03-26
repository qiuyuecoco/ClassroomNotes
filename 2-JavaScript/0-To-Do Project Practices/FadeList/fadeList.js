$(function () {
    console.log("herro");
    // $("#mydiv").css("color", "blue");
    // $("#second").show();
    console.log($(".myInput").attr("src"));
});

//read/write to the below
//$("#myinput").val("hello");

// $(function () {
//     let title = $("#second").html();
//     console.log(title);
// });
//
// $(function () {
//     let myVal = $("#myinput").val();
//     console.log(myVal);
// });

// let myrows = document.getElementsByClassName("row");
// // this does NOT work
// // myrows.style.font = 24px;
//
// for (let i = 0; i < myrows.length; i++) {
//     myrows[i].style.fontSize = "24px";
// }
//
// $(function () {
//     $(".list").append("<div class='row'>Learn</div>");
//     $(".list").prepend("<div class='row'>Study</div>");
//     // $(".row").css("font-size", "24px");
//
// })
function addItem() {
    let inputValue = $(".myInput").val();
    let listItems = $(".list").children();
    if (inputValue != "") {
        $(".list").append("<div class='row'>"+
            "<i onclick = 'deleteItem(this)' class='fas fa-trash'></i>"+
            "<span contenteditable='true'>" + inputValue + "</span>"+
                "<button onclick='goGreen(this)'>Highlight</button>"+
            "</div>");
        $(".myInput").val("");
        console.log(listItems);
        // $(".row:even").css("background-color", "#dadfea");
    }
    $(".myInput").focus();

}

function checkKey(event) {
    switch (event.which) {
        case 13:
            addItem();
            break;
    }
}

function deleteItem(element) {
    console.log(element);
    $(element).fadeOut( "slow", function() {
        $(element).parent().remove();
    });

    $(".row:even").css("background-color", "#dadfea");

}

function goGreen(element) {
    $(element).parent().addClass("active");
    $(element).parent().find('span').remove();
}