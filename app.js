function validateEmail(emailID) {
    var mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailID.value.match(mailFormat)) {
        alert("Success. Have a great Day")
        return true
    } else {
        alert("Not a Valid Email")
        return false
    }
}