$(document).ready(function() {
    background();
});

function background(){
    $("h1").animate({
        backgroundSize: "90%"
    }, 10000, "linear", function() {
        $(".arrow, .instructions").fadeIn(500);
    });
}