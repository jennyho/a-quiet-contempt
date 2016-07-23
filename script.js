$(document).ready(function() {
    background();
});

function background(){
    $("h1").animate({
        backgroundSize: "75%"
    }, 10000, "linear" );
}