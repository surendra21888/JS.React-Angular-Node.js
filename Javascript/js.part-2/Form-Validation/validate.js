function validateForm(){
    //alert('Test Case 123')
    let emailId = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    if(emailId ===""){
       document.getElementById('emailMsg').innerHTML = "Pls Enter Email Id:"
    }
    if(pwd ===""){
        document.getElementById('pwdMsg').innerHTML = "Pls Enter Password:"
    }
return false
}