function checkInfo(){
    let namE = document.getElementById("Name").value;
    let addR = document.getElementById("addR").value;
    let emaD = document.getElementById("emad").value;
    let phnO = document.getElementById("phoneNo").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emaD)){
        document.getElementById("stuff2").innerHTML = "";
    } else {
        document.getElementById("stuff2").innerHTML = emaD;
    }
    document.getElementById("stuf").innerHTML = namE;
    let phoneRegex = /^(?:\+1\s?)?(?:\(?(\d{3})\)?[\s.-]?)(\d{3})[\s.-]?(\d{4})$/;
    let match = phnO.match(phoneRegex);

    if(match){
        let areaCode = match[1];
        let prefix = match[2];
        let num = match[3];

        let formattedNo = `+1 (${areaCode}) ${prefix}-${num}`;
        document.getElementById("stuff").innerHTML = formattedNo;

    } 
    else {
        document.getElementById("stuff").innerHTML = "";
    }
    let zipRegex = /^\d{5}$/;
    if(!zipRegex.test(addR)){
        document.getElementById("stuff3").innerHTML = "";
    } else{
        document.getElementById("stuff3").innerHTML = addR;
    }
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
function A1(){
    document.getElementById("a1a").innerHTML = "x";
}
function A2(){
    document.getElementById("a2a").innerHTML = "x";
}
function A3(){
    document.getElementById("a3a").innerHTML = "x";
}
function B1(){
    document.getElementById("b1b").innerHTML = "x";
}
function B2(){
    document.getElementById("b2b").innerHTML = "x";
}
function B3(){
    document.getElementById("b3b").innerHTML = "x";
}
function C1(){
    document.getElementById("c1c").innerHTML = "x";
}
function C2(){
    document.getElementById("c2c").innerHTML = "x";
}
function C3(){
    document.getElementById("c3c").innerHTML = "x";
}



function A1o(){
    document.getElementById("a1a").innerHTML = "o";
}
function A2o(){
    document.getElementById("a2a").innerHTML = "o";
}
function A3o(){
    document.getElementById("a3a").innerHTML = "o";
}
function B1o(){
    document.getElementById("b1b").innerHTML = "o";
}
function B2o(){
    document.getElementById("b2b").innerHTML = "o";
}
function B3o(){
    document.getElementById("b3b").innerHTML = "o";
}
function C1o(){
    document.getElementById("c1c").innerHTML = "o";
}
function C2o(){
    document.getElementById("c2c").innerHTML = "o";
}
function C3o(){
    document.getElementById("c3c").innerHTML = "o";
}
function clearBoard(){
    document.getElementById("a1a").innerHTML = "#";
    document.getElementById("a2a").innerHTML = "#";
    document.getElementById("a3a").innerHTML = "#";

    document.getElementById("b1b").innerHTML = "#";
    document.getElementById("b2b").innerHTML = "#";
    document.getElementById("b3b").innerHTML = "#";

    document.getElementById("c1c").innerHTML = "#";
    document.getElementById("c2c").innerHTML = "#";
    document.getElementById("c3c").innerHTML = "#";
}

function disp(val){
    document.getElementById("swerans").value += val;
}

function solve(){
    let A = document.getElementById("swerans").value;
    let B = math.evaluate(A);
    document.getElementById("swerans").value = B;
}
function clearScreen(){
    document.getElementById("swerans").value = "";
}