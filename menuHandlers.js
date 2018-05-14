$(document).ready(function () {
    var xhttp = new XMLHttpRequest();
    var json ;

    xhttp.onreadystatechange = function (data) {
        if (this.readyState == 4 && this.status == 200) {
            json =  JSON.parse(xhttp.responseText);
        }
    };

    xhttp.open("GET", "signs.json", true);
    xhttp.send();

    $(".menuArea").click(function (e) {
        var title = $(e.target).attr('title');
        var descriptionObject = getSignDescription(title);
    });


    var getSignDescription = function (name) {
        return json[name];
    }
});