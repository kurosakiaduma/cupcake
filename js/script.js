$(document).ready(function() {
    $("#link").click(function() {
        $(".img").fadeIn(4000);
    });
    $("button#bw").click(function() {
        $("body").removeClass();
        $("body").addClass("black-background");
    });
    $("button#wb").click(function() {
        $("body").removeClass();
        $("body").addClass("white-background");
    });
    $("button#bb").click(function() {
        $("body").removeClass();
        $("body").addClass("blue-background");
    });
});
