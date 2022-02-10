let UserEmail = '123@gmail.com'
let password ='1234'

let userChecker = function(myString){
    if((myString.includes(123)) && (myString.length>6)){
        return true
    }
    else{
        return false
    }
}
let passChecker = function(pass){
    if((pass.includes(1234)) && (pass.length>6)){
        return true
    }
    else{
        return false
    }
}
console.log(userChecker(UserEmail));
console.log(passChecker(password));