let strGen = "";
let a = 0;
let ans;
let b;
let dot = 0;
let clicked = 0;

function showResult(NumStr, display) {
    strGen += NumStr;
    let ll = document.getElementById(display);
    ll.innerText = strGen;
}
document.getElementById('add')
    .addEventListener('click', function () {
        clicked++;
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
document.getElementById('multiply')
    .addEventListener('click', function () {
        clicked++;
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "*";
            a = strGen;
            showResult(' x ', 'upperDisplay');
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
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "-";
            a = strGen;
            showResult(' - ', 'upperDisplay');
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
        if (strGen == "") strGen = "0";
        if (clicked == 1) {
            operator = "/";
            a = strGen;
            showResult(' / ', 'upperDisplay');
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
document.getElementById('equal')
    .addEventListener('click', function () {
        if (strGen == "") strGen = "0";
        b = strGen;
        let totStr = `${a} ${operator} ${b} =`;
        document.getElementById('upperDisplay').innerText = totStr;
        ans = calculate(a, b, operator);
        document.getElementById('lowerDisplay').innerText = ans;
        // a = ans;
        // strGen = "";
        dot = 0;
        // clicked=0;
    });
document.getElementById('clear')
    .addEventListener('click', function () {
        strGen = "";
        showResult(strGen, 'upperDisplay');
        showResult(0, 'lowerDisplay');
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
        showResult(v, 'lowerDisplay');
    });


document.getElementById('1')
    .addEventListener('click', function (e) {
        showResult(1, "lowerDisplay");
    });
document.getElementById('2')
    .addEventListener('click', function (e) {
        showResult(2, "lowerDisplay");
    });
document.getElementById('3')
    .addEventListener('click', function (e) {
        showResult(3, "lowerDisplay");
    });
document.getElementById('4')
    .addEventListener('click', function (e) {
        showResult(4, "lowerDisplay");
    });
document.getElementById('5')
    .addEventListener('click', function (e) {
        showResult(5, "lowerDisplay");
    });
document.getElementById('6')
    .addEventListener('click', function (e) {
        showResult(6, "lowerDisplay");
    });
document.getElementById('7')
    .addEventListener('click', function (e) {
        showResult(7, "lowerDisplay");
    });
document.getElementById('8')
    .addEventListener('click', function (e) {
        showResult(8, "lowerDisplay");
    });
document.getElementById('9')
    .addEventListener('click', function (e) {
        showResult(9, "lowerDisplay");
    });
document.getElementById('0')
    .addEventListener('click', function (e) {
        showResult(0, "lowerDisplay");
    });
document.addEventListener('keypress', function (e) {
    console.log(e)
});
document.getElementById('.')
    .addEventListener('click', function (e) {
        dot++;
        if (dot == 1) {
            showResult(".", "lowerDisplay");
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

