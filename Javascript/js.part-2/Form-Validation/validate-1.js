function validateForm(){
    //alert('Test Case 123')
    let emailId = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    if(emailId ===""){
        alert("Please Enter Email Id");
    }
    if(pwd ===""){
        alert("Please Enter Password")
    }

}