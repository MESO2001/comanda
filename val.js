function validateform(){
var username = document.getElementById("username").value;
var email= document.getElementById("email").value;
var password = document.getElementById("password").value;
var phone= document.getElementById("phone").value;
var text= "";

if( username.length <5){
    text ="please enter valid username";
erorr.innerHTML = text;
return false ;
}
 if (email.indexOf("@") == -1 && email.length <10){
    text ="please enter valid email";
erorr.innerHTML= text ;
return false;
}
if( password.length<6 ){
    text ="please enter valid password";
    erorr.innerHTML=text;
    return false;
}
if(isNaN(phone) || phone.length !=11 ){
    text ="please enter 11 number";
    erorr.innerHTML=text;
    return false;  
} 
else{
alert("done");
}

}