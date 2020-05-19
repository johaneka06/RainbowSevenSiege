function checkUserNameReq(userName) {
    if(userName.length >= 3) return true;
    return false;
}

function checkEmailRequirement(email) {
    if(email.includes("@")) {
        var count = 0;
        for(var i = 0; i < email.length; i++) {
            if(email[i] == "@") count++;
            if(count > 1) return false;
        }
        if(email.endsWith(".com") || email.endsWith(".co.id")) return true;
        return false;
    }
    return false;
}

function submitBtnClick() {
    var userName = document.getElementById("usernameBox").value;
    var email = document.getElementById("emailBox").value;
    var password = document.getElementById("passwordBox").value;
    var address = document.getElementById("addressBox").value;
    var copies = document.getElementById("copiesBox").value;
    var gameType = document.getElementById("type").value;
    if(checkUserNameReq(userName) == false) alert("Username must be 3 chars or more!");
    else if(!checkEmailRequirement(email)) alert("Email must be in valid format! Contains 1 \"@\" and ends with .com or .co.id");
}

