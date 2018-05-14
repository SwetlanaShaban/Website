$(document).ready(function () {
    $('#horContent').hide();

    var xhttp = new XMLHttpRequest();
    var json;

    xhttp.onreadystatechange = function (data) {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(xhttp.responseText);
        }
    };

    xhttp.open("GET", "signs.json", true);
    xhttp.send();

    $('#submit').on('click', function () {
        var date = new Date($('#bday').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        alert([day, month].join('.'));
    });

    var getSignDescription = function (name) {
        return json[name];
    }
});