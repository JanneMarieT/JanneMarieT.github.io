
$('Table img').click(function () {
    var src = $(this).attr("src");
    window.open(src, '_blank');
});


$("tr").on("mouseover", function () {
    $(this).css("color", "red");
});

$("tr").on("mouseleave", function () {
    $(this).removeAttr("style");
});

