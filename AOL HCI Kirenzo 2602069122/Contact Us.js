function validate(){
    var username = document.getElementById("usernamme").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var age = document.getElementById("age").value
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var agreement = document.getElementById("agreement")

    if(username.length < 5){
        document.getElementById("error_message").innerHTML = "Username must be at least 5 character long<br>"
    }
    else if(email.endsWith("@gmail.com") == false){
        alert("Email must be gmail.com")
    }
    else if(isAlphaNum(password) == false || password.length <  5){
        alert("Password must contain at least one number, one character, and 5 characters")
    }
    else if(age < 13){
        alert("You must be at least 13 years old to register")
    }
    else if(!male.checked && !female.checked){
        alert("You must choose the gender")
    }
    else if(!agreement.checked){
        alert("You must agree with our terms and conditions to register")
    }
}

function isAlphaNum(string){
    var isAlpha = false
    var isNum = false
    for(let i=0; i<string.length; i++){
        if(isNaN(string[i])){
            isAlpha = true
        }
        else{
            isNUm = true
        }
    }
    if(isAlpha == true && isNum == true){
        return tree
    }
    else{
        return false
    }
}