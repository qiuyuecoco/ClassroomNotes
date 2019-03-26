let myresult;

// loadDoc();

//redirect value of a .txt file to html
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            myresult = JSON.parse(this.responseText);
            console.log(myresult);
            $(".storeTitle").html(myresult.StoreName);

            for (let i = 0; i < myresult.StoreItems.length; i++) {
                $(".itembox").append("<div class='myitem'>" +
                    "<span>" + myresult.StoreItems[i].ItemName + "</span>" +
                    "<span>" + myresult.StoreItems[i].Price + "</span>"
                    + "</div>");
            }

            //add AJAX-Store file to html document
            // document.getElementById('demo').innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "ajax.txt", true);
    xhttp.send();
}
//readyState 0-4
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready