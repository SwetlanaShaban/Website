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
        if (day < 10)
            day = "0" + day;

        month = date.getMonth() + 1;
        if (month < 10)
            month = "0" + month;

        year = date.getFullYear();

        var inpDate = new Date(year, month - 1, day);
        alert(inpDate.toString("DD.MM.YYYY"));
    });

    var getSignDescription = function (name) {
        return json[name];
    }
});