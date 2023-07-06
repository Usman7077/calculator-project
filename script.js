let strGen = "";
let a;
let ans;
let b;
let dot = 0;
let clicked = 0;
let operator="";

document.getElementById('add')
    .addEventListener('click', function () {
        clicked++;
        // operator = "+";
        b = "";
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "+";
            a = strGen;
            document.getElementById('upperDisplay').innerText = `${a} ${operator} `;
        }
        else {
            b = strGen;
            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            operator = "+";
            document.getElementById('upperDisplay').innerText = `${ans} ${operator} `;
            a = ans;
        }
        strGen = "";
    });
document.getElementById('equal')
    .addEventListener('click', function () {
        // if (strGen == "") strGen = "0";
        if (b == undefined) a = strGen; //don't calculate until b value is assigned.
        else {
            b = strGen;
            let totStr = `${a} ${operator} ${b} =`;
            document.getElementById('upperDisplay').innerText = totStr;
            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            clicked=0;
            // a = ans;
            // strGen = "";
            dot = 0;
        }
    });
document.getElementById('clear')
    .addEventListener('click', function () {
        strGen = "";
        document.getElementById('upperDisplay').innerText = strGen;
        document.getElementById('lowerDisplay').innerText = 0;
        strGen = "";
        ans = undefined;
        b = undefined;
        dot = 0;
        clicked = 0;
    });
document.getElementById('delete')
    .addEventListener('click', function () {
        let v = "" + strGen;
        strGen = "";
        if (v.substring(v.length - 1, v.length) == ".") dot = 0;
        v = v.substring(0, v.length - 1);
        document.getElementById('lowerDisplay').innerText = v;
    });
document.getElementById('multiply')
    .addEventListener('click', function () {
        clicked++;
        // operator = "*";
        b = "";
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "*";
            a = strGen;
            document.getElementById('upperDisplay').innerText = `${a} ${operator} `;
        }
        else {
            b = strGen;
            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            operator = "*";
            document.getElementById('upperDisplay').innerText = `${ans} ${operator} `;
            a = ans;
        }
        strGen = "";
    });
document.getElementById('subtract')
    .addEventListener('click', function () {
        clicked++;
        // operator = "-";
        b = "";
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "-";
            a = strGen;
            document.getElementById('upperDisplay').innerText = `${a} ${operator} `;
        }
        else {
            b = strGen;
            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            operator = "-";
            document.getElementById('upperDisplay').innerText = `${ans} ${operator} `;
            a = ans;
        }
        strGen = "";
    });
document.getElementById('divide')
    .addEventListener('click', function () {
        clicked++;
        // operator = "/";
        b = "";
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "/";
            a = strGen;
            document.getElementById('upperDisplay').innerText = `${a} ${operator} `;
        }
        else {
            b = strGen;
            ans = calculate(a, b, operator);
            document.getElementById('lowerDisplay').innerText = ans;
            operator = "/";
            document.getElementById('upperDisplay').innerText = `${ans} ${operator} `;
            a = ans;
        }
        strGen = "";
    });

document.getElementById('1')
    .addEventListener('click', function () {
        strGen += 1;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('2')
    .addEventListener('click', function () {
        strGen += 2;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('3')
    .addEventListener('click', function () {
        strGen += 3;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('4')
    .addEventListener('click', function () {
        strGen += 4;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('5')
    .addEventListener('click', function () {
        strGen += 5;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('6')
    .addEventListener('click', function () {
        strGen += 6;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('7')
    .addEventListener('click', function () {
        strGen += 7;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('8')
    .addEventListener('click', function () {
        strGen += 8;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('9')
    .addEventListener('click', function () {
        strGen += 9;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.getElementById('0')
    .addEventListener('click', function () {
        strGen += 0;
        document.getElementById('lowerDisplay').innerText = strGen;
    });
document.addEventListener('keypress', function (e) {
    console.log(e)
});
document.getElementById('.')
    .addEventListener('click', function () {
        dot++;
        if (dot == 1) {
            strGen += ".";
            document.getElementById('lowerDisplay').innerText = strGen;
        }

    });
const calculate = function (a, b, operator) {
    b = +b;
    a = +a;
    if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
// document.getElementById("buttons").addEventListener('click', function (e) {
//     console.log(e.target.id);
//     p = e.target.id;
//     showResult(p, "lowerDisplay")
// })

