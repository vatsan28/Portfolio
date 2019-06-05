$("#toOverview").click(function() {
    $('html, body').animate({
        scrollTop: $("#overview").offset().top
    }, 200);
});
$("#toCritique").click(function() {
    $('html, body').animate({
        scrollTop: $("#critique").offset().top
    }, 500);
});
$("#toAudience").click(function() {
    $('html, body').animate({
        scrollTop: $("#audience").offset().top
    }, 700);
});
$("#toAnalysis").click(function() {
    $('html, body').animate({
        scrollTop: $("#analysis").offset().top
    }, 900);
});
$("#toDemo").click(function() {
    $('html, body').animate({
        scrollTop: $("#demo").offset().top
    }, 1000);
});
$(".scrollTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 400);
});