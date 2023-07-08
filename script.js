let strGen = "";
let a, b, ans;
let dot = 0;
let clicked = 0;
let operator = "";

window.addEventListener("click", (e) => {
    if (e.target.id >= "0" && e.target.id <= "9" || e.target.id == ".") lowerDisplay(e.target.id);
    else if (e.target.id == "*" || e.target.id == "/" || e.target.id == "+" || e.target.id == "-") cal(e.target.id);
    else if (e.target.id == "=") equal();
    else if (e.target.id == "delete") del();
    else if (e.target.id == "clear") clear();

});

window.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9" || event.key == ".") lowerDisplay(event.key);
    else if (event.key == "*" || event.key == "/" || event.key == "+" || event.key == "-") cal(event.key);
    else if (event.key == "Enter" || event.key == "=") equal();
    else if (event.key == "Backspace") del();
});

function lowerDisplay(str) {
    if (str == ".") {
        dot++;
        if (dot == 1) {
            strGen += str;
            if (strGen == ".") strGen = "0.";
            document.getElementById('lowerDisplay').innerText = strGen;
        }
    }
    else {
        strGen += str;
        if (strGen.length == 1 && strGen == "0") strGen = "";
        else document.getElementById('lowerDisplay').innerText = strGen;
    }
}

function cal(op) {
    if (strGen == "" && a == undefined) return
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
            if (ans == "What's this?") document.getElementById('upperDisplay').innerText = "";
            else document.getElementById('upperDisplay').innerText = `${ans} ${operator} `;
            a = ans;
        }
        strGen = "";
    }
    dot = 0;
}

function equal() {
    if (strGen == "") return;
    else {
        if (b == undefined) a = strGen; //don't calculate until b value is assigned.
        else {
            b = strGen;
            let totStr = `${a} ${operator} ${b} =`;
            document.getElementById('upperDisplay').innerText = totStr;
            ans = calculate(a, b, operator);
            if (ans == "What's this?") {
                document.getElementById('upperDisplay').innerText = "";
                reset();
            }
            document.getElementById('lowerDisplay').innerText = ans;
            dot = 0;
            strGen = ans;
            b=undefined;
            clicked=0;
            // strGen="";
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

function reset() {
    strGen = "";
    document.getElementById('upperDisplay').innerText = strGen;
    document.getElementById('lowerDisplay').innerText = 0;
    a = undefined;
    b = undefined;
    dot = 0;
    clicked = 0;
}

const calculate = function (a, b, operator) {
    b = +b;
    a = +a;
    if (operator == "/" && b == 0) return "What's this?";
    else if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// window.addEventListener("click", (PointerEvent) => console.log(PointerEvent.target.getElementById));
