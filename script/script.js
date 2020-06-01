function checkUserNameReq(userName) {
    if(userName.length >= 3) return true;
    return false;
}

function checkUserNameAlphanumeric(userName){
    var status = true;
        for(var i = 0; i < userName.length; i++){
            if((userName.charAt(i).charCodeAt(0)>47 && userName.charAt(i).charCodeAt(0)<58) || (userName.charAt(i).charCodeAt(0)>64 && userName.charAt(i).charCodeAt(0)<91) || (userName.charAt(i).charCodeAt(0)>96 && userName.charAt(i).charCodeAt(0)<123)){
                status = true;
            } else{
                status = false;
                break;
            }
        }
    return status;
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

function checkPassword(password){
    if(password.length >= 8) return true;
    return false;
}

//Regex validation for password must be alphanumeric
function checkPasswordMustBeAlphanumeric(password){
    var regexPattern = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/g; 
    if(password.match(regexPattern)) return true;
    return false;
}

function checkQuantity(copies){
    if(copies > 0) return true;
    return false;
}

function gameTypeRequirement(gameType){
    if(gameType === "nill") return false;
    return true;
    
}

function submitBtnClick() {
    var userName = document.getElementById("usernameBox").value;
    var email = document.getElementById("emailBox").value;
    var password = document.getElementById("passwordBox").value;
    var address = document.getElementById("addressBox").value;
    var copies = document.getElementById("copiesBox").value;
    var gameType = document.getElementById("type").value;
    if(userName == "") 
        alert("Username must be filled!");
    else if(!checkUserNameReq(userName))
        alert("Username must be 3 chars or more!");
    else if(!checkUserNameAlphanumeric(userName))
        alert("Username must be alphanumeric!");
    else if(email == "")
        alert("Email must be filled!");
    else if(!checkEmailRequirement(email)) 
        alert("Email must be in valid format! Contains 1 \"@\" and ends with .com or .co.id");
    else if(password == "")
        alert("Password must be filled!");
    else if(!checkPassword(password))
        alert("Password must be 8 chars or more!");
    else if(!checkPasswordMustBeAlphanumeric(password))
        alert("Password must be alphanumeric!");
    else if(address == "")
        alert("Address must be filled!");
    else if(!checkQuantity(copies))
        alert("Number of copies must be integer and the value must be more than 0!")
    else if(!gameTypeRequirement(gameType)) 
        alert("Game Type Must Be Chosen!");
    else if(!document.getElementById("chckBox").checked) 
        alert("You must agree with the terms and service agreement.");
    else{
        alert("Thank you for pre-ordering Rainbow Seven Siege: " + gameType + " Edition! You will be notified when we've released the game!");
    }
}