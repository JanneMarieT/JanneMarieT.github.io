
document.querySelector("#liveToastBtn").onclick = function () {
    new bootstrap.Toast(document.querySelector('#liveToast')).show();
}


$(document).ready(function () {
    $("#boredBtn").click(function () {
        $.ajax({
            url: "https://www.boredapi.com/api/activity/", success: function (result) {
                console.log(result);
            }
        });
    });
});
