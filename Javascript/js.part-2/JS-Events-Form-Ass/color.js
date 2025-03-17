function changeColor(){
    //alert('Test Case123')
    let input_Tag_Ref = document.getElementById('abc')
    input_Tag_Ref.style.backgroundColor = "green"
}
function changeCase(){
    //alert('Test Case 123')
    let name = document.getElementById('xyz').value
    //alert(name.toUpperCase())
    //document.getElementById('xyz').style.backgroundColor="red"
    document.getElementById('xyz').value = name.toUpperCase()
}