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

    $(".menuArea").click(function (e) {
        $('#horContent').hide();
        $('#horContent').html("");

        var title = $(e.target).attr('title');
        var descriptionObject = getSignDescription(title);

        var panel = $('<div/>', { class: "panel panel-primary" }).appendTo($('#horContent'));
        $('<p/>', { class: "font-weight-normal" }).html(title).appendTo(panel);
        $('<p/>', { class: "font-weight-normal" }).html('Dates : ' + descriptionObject['Dates']).appendTo(panel);
        $('<p/>', { class: "font-weight-normal" }).html('Planet : ' + descriptionObject['Planet']).appendTo(panel);
        $('<p/>', { class: "font-weight-normal" }).html('Element : ' + descriptionObject['Element']).appendTo(panel);
        $('<p/>', { class: "font-weight-normal" }).html('Good days: ' + descriptionObject['Success']).appendTo(panel);
        $('<p/>', { class: "font-weight-normal" }).html('Bad days: ' + descriptionObject['Unsuccess']).appendTo(panel);

        var additionalInfoPanel = $('<div/>', { class: "panel panel-default" });
        additionalInfoPanel.html("Additional info. Click to expand");
        var expandButton = $('<input type="button" value="Expand"/>');

        additionalInfoPanel.append(expandButton);
        panel.append(additionalInfoPanel);

        expandButton.click(function () {
            additionalInfoPanel.html(descriptionObject['Prediction'] + descriptionObject['Characteristics']);
        });

        $('#horContent').show();
    });


    var getSignDescription = function (name) {
        return json[name];
    }
});