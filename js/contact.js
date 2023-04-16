
function info() {

    var mail = prompt("What is your mail?");
    if (!(mail.match("\\.") && mail.match("@"))) {
        alert("The mail needs to contain @ and a dot. Try again please")
        info();
    } else {
        $("p:contains(me@fake)").html(mail);
        console.log("From: " + mail);
    }

    var phoneNumber = prompt("What is your phonenumber?")
    if (isNaN(phoneNumber) || phoneNumber == "") {
        alert("No number provided. Try again please");
        info();
    } else if (phoneNumber.length == 10) {
        $("p:contains(1-123)").html(phoneNumber);
        console.log("Contact: " + phoneNumber);
    } else {
        alert("The phonenumber needs to contain 10 digits")
        info();
    }

    var address = prompt("What is your address?");
    if (address == "") {
        alert("No address provided");
        info();
    } else {
        $("p:contains(1445)").html(address);
        console.log("Address: " + address);
    }
}