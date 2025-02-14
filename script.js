function getInfo(){
    document.getElementById("info").innerHTML = "Name: Deacon Davis   Class: Web Development 2   Instructor: Kim Gross  High School: Braintree Academy"
}
function doCrazyMaths(){
    let x = parseInt(document.getElementById("UserX").value)
    let y =  parseInt(document.getElementById("UserY").value)
    let solution = x + y
    document.getElementById("answer").innerHTML = solution
}
function Maths(){
    let x = parseInt(document.getElementById("Num_1").value)
    let y =  parseInt(document.getElementById("Num_2").value)
    let solution = x + y
    document.getElementById("Answers").innerHTML = solution
}
function M_Maths(){
    let x = parseInt(document.getElementById("Num_1").value)
    let y =  parseInt(document.getElementById("Num_2").value)
    let solution = x * y
    document.getElementById("Answers").innerHTML = solution
}
function D_Maths(){
    let x = parseInt(document.getElementById("Num_1").value)
    let y =  parseInt(document.getElementById("Num_2").value)
    let solution = x / y
    document.getElementById("Answers").innerHTML = solution
}
function S_Maths(){
    let x = parseInt(document.getElementById("Num_1").value)
    let y =  parseInt(document.getElementById("Num_2").value)
    let solution = x - y
    document.getElementById("Answers").innerHTML = solution
}
function randomPlaceholder(){
    return Math.floor(Math.random() * 10) + 1;
}
window.onload = function(){
    document.getElementById("Num_1").value = randomPlaceholder()
    document.getElementById("Num_2").value = randomPlaceholder()
}