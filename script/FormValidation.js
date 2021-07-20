let btn = document.getElementById('submit-button')
let email = document.getElementById("email")
let password = document.getElementById("password")
let username =document.getElementById("username")
let date = document.getElementById("date")   
let checkbox= document.getElementById('checkbox')

btn.onclick = function(){
    let dateTime = new Date(date.value)
    let today = new Date()
    email.style.borderColor = "#ccc"
    if(!email.value.endsWith("gmail.com")){
        alert('Invalids Email')
        email.style.borderColor = "red"
        return
    }
    else if (username.value.length < 5){
        alert('Invalid Username')
        username.style.borderColor = "red"
        return
    }
    else if(checkContainNum(password.value) || password.value.length<6){
        alert('Invalid Password')
        password.style.borderColor = "red"
        return
    } else if( date.value == ""||today.getFullYear() - dateTime.getFullYear() < 18){
        alert('Not 18 Years Old Yet')
        date.style.borderColor = "red"
        return
    }else if(checkbox.checked == false){
        alert("Check the Terms & Conditions")
        return
    }
    
    alert('success')
}
function checkContainNum(password){
    for(let i=0; i<password.length; i++){
        console.log(password[i])
        console.log(isNaN(password[i]))
        if (!isNaN(password[i])){
            return false
        }    
    }
    return true
}
