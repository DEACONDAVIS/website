function getInfo(){
    document.getElementById("info").innerHTML = "Name: Deacon Davis   Class: Web Development 2   Instructor: Kim Gross  High School: Braintree Academy"
}
function doCrazyMaths(){
    let x = parseInt(document.getElementById("UserX").value)
    let y =  parseInt(document.getElementById("UserY").value)
    let solution = x + y
    document.getElementById("answer").innerHTML = solution
}