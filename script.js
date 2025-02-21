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
let numberArray = [];

function huh(){
   let value = document.getElementById("numENTER").value
   if (value.trim() !== ""){
    let number = Number(value);
        if(!isNaN(number)){
        if (number === -1){
            addArray();
        } else{
            numberArray.push(number);
            console.log(numberArray)
        }
        } else{
            console.log("Please enter a valid number!");
        }
   }
   else{
    console.log("The input is empty");
   }
}
function addArray(){
    let total = 0;
        for(let i = 0; i < numberArray.length; i++){
            total += numberArray[i];
        }
    document.getElementById("result").innerHTML = total;
    numberArray.length = 0;
}