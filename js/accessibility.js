
$(document).ready(function () {
    $('#accessToggle').on('change', function () {
        if (this.checked) {
            $("p").css("font-size", "120%");
        }
        else {
            $("p").removeAttr("style");
        }
    });
});