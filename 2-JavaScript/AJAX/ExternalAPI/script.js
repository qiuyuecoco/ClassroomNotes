let myresult;

loadDoc();

//redirect value of a .txt file to html
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            myresult = JSON.parse(this.responseText);
            console.log(myresult);
            $(".weather").html(myresult.weather[0].description);
            $("#image").attr("src", "http://openweathermap.org/img/w/" + myresult.weather[0].icon + ".png");

        }
    };

    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Lehi&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
    xhttp.send();
}


