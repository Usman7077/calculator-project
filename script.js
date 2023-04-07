let strGen = "0";
let a = 0;
let b = 0;
function showResult(NumStr, upperLowerDis) {
    strGen += NumStr;
    let ll = document.getElementById(upperLowerDis);
    ll.innerText = "";
    ll.innerText = strGen;
}

document.getElementById('subtract')
    .addEventListener('click', function () {
        operator = "-";
        a = strGen;
        showResult(' - ', 'upperDisplay');
        strGen = "";
    });

document.getElementById('equal')
    .addEventListener('click', function () {
        b = strGen;
        strGen = "";
        let totStr = `${a} ${operator} ${b} =`;
        showResult(totStr, 'upperDisplay');
        let d = calculate(a, b, operator);
        strGen = "";
        showResult(d, "lowerDisplay");
        a = 0;
        b = 0;
    });

document.getElementById('seven')
    .addEventListener('click', function (e) {
        showResult(7, "lowerDisplay");
    });
// document.getElementById("buttons").addEventListener('click', function (e) {
//     console.log(e.target.id);
//     p = e.target.id;
//     showResult(p, "lowerDisplay")
// })

const calculate = function (a, b, operator) {
    if (operator == 'add') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == 'multiply') return multiply(a, b);
    else if (operator == 'divide') return divide(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;