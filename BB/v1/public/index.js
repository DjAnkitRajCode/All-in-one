function checkPassword(){
    var p = document.getElementById("pass").value;
    var cp = document.getElementById("cpass").value;
    //using if........else
    if(p==cp){
        alert("same password");
    }
    else{
        alert("Confirm password incorrect");
    }
}