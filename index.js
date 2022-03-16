function err() {
    let juice = document.getElementById("error");
    juice.textContent = "Error, try again";
}

let v1 = 0;
let v2 = 0;
let answer = 0;
let count = 0;
let count2 = 0;

function ass1() {
    count++;
    v1 = count;
    console.log("executing");
    document.getElementById("value").textContent = v1;
}

function ass2() {
    count2++;
    v2 = count2;
    console.log("executing");
    document.getElementById("value2").textContent = v2;
}

function add() {
    answer = v1 + v2;
    document.getElementById("results").textContent = " addition " + answer;
}

function minus() {
    answer = v1 - v2;
    document.getElementById("results").textContent = " subtraction " + answer;
}

function divide() {
    answer = v1 / v2;
    document.getElementById("results").textContent += " division" + answer;
}

function multiply() {
    answer = v1 * v2;
    console.log("This button has been clicked and works fine until this point");
    document.getElementById("results").innerHTML += " multiplication " + answer;
}