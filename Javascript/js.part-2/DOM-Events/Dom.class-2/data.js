function displayDate(){
    console.log("Test Case 123")
    let pTagRef=document.getElementsByTagName('p')[0];
    console.log(pTagRef)
    //pTagRef.innerHTML = "GM"
    pTagRef.innerHTML = new Date().toLocaleDateString()
}