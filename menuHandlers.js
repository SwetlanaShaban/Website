$(document).ready(function(){
    $(".menuArea").click(function(e){
        var title = $(e.target).attr('title');
        alert(title);
    });
});