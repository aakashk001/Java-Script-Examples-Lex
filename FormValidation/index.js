console.log("Inside the index.js")
function clearerror(){
    errors = document.getElementsByClassName('formerror');
    for(let items of errors){
        items.innerHTML ="";
    }
}

function seterror(id, error) {
let element = document.getElementById(id);
element.getElementsByClassName("formerror")[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
      clearerror();
   
  
    //perform validation and if the value is false then change the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if(name.length <5){
        seterror("name","*Length of name should be greater than 5 ");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if(email.length < 10){
        seterror("email","*Length of name should be greater than 10");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length != 10){
        seterror("phone","*Length of phoneNumber should be greater than 10");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 5){
        seterror("pass","*Password should be grater than 10");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password){
        seterror("cpass","*Confirm Passwoed should be same as that as Password");
        returnval = false;
    }
    return returnval;
}
