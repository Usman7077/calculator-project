let strGen = "";
let a;
let ans;
let b;
let dot = 0;
let clicked = 0;
let operator = "";

document.getElementById('0').addEventListener('click', () => lowerDisplay('0'));
document.getElementById('1').addEventListener('click', () => lowerDisplay('1'));
document.getElementById('2').addEventListener('click', () => lowerDisplay('2'));
document.getElementById('3').addEventListener('click', () => lowerDisplay('3'));
document.getElementById('4').addEventListener('click', () => lowerDisplay('4'));
document.getElementById('5').addEventListener('click', () => lowerDisplay('5'));
document.getElementById('6').addEventListener('click', () => lowerDisplay('6'));
document.getElementById('7').addEventListener('click', () => lowerDisplay('7'));
document.getElementById('8').addEventListener('click', () => lowerDisplay('8'));
document.getElementById('9').addEventListener('click', () => lowerDisplay('9'));
document.getElementById('.').addEventListener('click', () => lowerDisplay('.'));
document.getElementById('add').addEventListener('click', () => subt("+"));
document.getElementById('multiply').addEventListener('click', () => subt("*"));
document.getElementById('divide').addEventListener('click', () => subt("/"));
document.getElementById('subtract').addEventListener('click', () => subt("-"));
document.getElementById('equal').addEventListener('click', () => equal());
document.getElementById('delete').addEventListener('click', () => del());
document.getElementById('clear').addEventListener('click', () => clear());

window.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9" || event.key == ".") lowerDisplay(event.key);
    else if (event.key == "*" || event.key == "/" || event.key == "+" || event.key == "-") subt(event.key);
    else if (event.key == "Enter" || event.key == "=") equal();
    else if (event.key == "Backspace") del();
});

function lowerDisplay(str) {
    if (str == ".") {
        dot++;
        if (dot == 1) {
            strGen += str;
            document.getElementById('lowerDisplay').innerText = strGen;
        }
    }
    else {
        strGen += str;
        document.getElementById('lowerDisplay').innerText = strGen;
    }
}

function subt(op) {
    if (strGen == "" && a == undefined) { }
    else if (strGen == "") {
        operator = op;
        document.getElementById('upperDisplay').innerText = `${a} ${operator} `;
    }
    else {
        clicked++;
        b = "";
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = op;
            a = strGen;
            document.getElementById('upperDisplay').innerText = `${a} ${operator} `;
        }
        else {
            b = strGen;

            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            operator = op;
            if (ans == "Cal Error!") {document.getElementById('upperDisplay').innerText = ``;}
            else {document.getElementById('upperDisplay').innerText = `${ans} ${operator} `;}
            a = ans;
        }
        strGen = "";
    }
}

function equal() {
    if (strGen == "") { }
    else {
        if (b == undefined) a = strGen; //don't calculate until b value is assigned.
        else {
            b = strGen;
            let totStr = `${a} ${operator} ${b} =`;
            document.getElementById('upperDisplay').innerText = totStr;
            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            dot = 0;
        }
    }
}

function del() {
    let v;
    v = "" + strGen;
    if (v.substring(v.length - 1, v.length) == ".") dot = 0;
    strGen = v.substring(0, v.length - 1);
    document.getElementById('lowerDisplay').innerText = strGen;
}

function clear() {
    strGen = "";
    document.getElementById('upperDisplay').innerText = strGen;
    document.getElementById('lowerDisplay').innerText = 0;
    a = undefined;
    ans = undefined;
    b = undefined;
    dot = 0;
    clicked = 0;
}

const calculate = function (a, b, operator) {
    b = +b;
    a = +a;
    if (operator == "/" && b == 0) return "Cal Error!";
    else if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

window.addEventListener("keydown", (event) => console.log(event.key));