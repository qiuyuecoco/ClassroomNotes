let messages;

if(retrieveChat()) {
    messages = retrieveChat();
}
else {
    messages = [];
}

// let messages = retrieveChat() || [];

displayMessages();

function displayMessages() {
    const chatElement = $('#chat-box');
    chatElement.html('');
    for(let i = 0; i < messages.length; i++) {
        chatElement.append(`<div>${messages[i]}</div>`);
    }
}

function addMessage(inputId) {
    const message = $(`#${inputId}`).val();
    messages.push(message);
    displayMessages();
    saveChat();
    $(`#${inputId}`).val("");
}

function saveChat() {
    localStorage.setItem('chat', JSON.stringify(messages));
}

function retrieveChat() {
    const messagesString = localStorage.getItem('chat');
    return JSON.parse(messagesString);
}


// function saveList(List) {
//     const stringyfiedList = JSON.stringify(firstList);
//     localStorage.setItem(list.name, stringyfiedList);
// }
// function retrieveList(listName) {
//     return localStorage.getItem(JSON.parse(listName));
// }

// function addItem() {
//     let inputValue = $(".myInput").val();
//     let listItems = $(".list").children();
//     if (inputValue != "") {
//         $(".list").append("<div class='row'>"+
//             "<i onclick = 'deleteItem(this)' class='fas fa-trash'></i>"+
//             "<span contenteditable='true'>" + inputValue + "</span>"+
//             "<button onclick='goGreen(this)'>Highlight</button>"+
//             "</div>");
//         $(".myInput").val("");
//         console.log(listItems);
//     }
//     $(".myInput").focus();
//
// }

// let chat = document.getElementById("chatContainer");
// let chat = [];
//
// function sendOne(value, event) {
//     let oneInput = $("#userOne").val();
//     if (oneInput != "")
//         $("#chatContainer").prepend("<p class = 'userOneChat'>" + value + "</p>");
//         $("#userOne").val("");
// }
// function oneCheck(event) {
//     switch (event.which) {
//         case 13:
//             addItem();
//             break;
//     }
// }
//
// function sendTwo(value, event) {
//
// }