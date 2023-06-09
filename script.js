let strGen = "";
let a = 0;
let ans;
let b;
function showResult(NumStr, display) {
    strGen += NumStr;
    let ll = document.getElementById(display);
    // ll.innerText = "";
    ll.innerText = strGen;
}

document.getElementById('add')
    .addEventListener('click', function () {
        operator = "+";
        if (strGen == "") strGen = "0";
        if (b !== undefined) {
            ans = calculate(a, b, operator);
    
        document.getElementById('lowerDisplay').innerText = ans;
        }
        if (ans == undefined) a = strGen;
        else {
            strGen = ans;
            a = ans;
        }
        a = strGen;
        showResult(' + ', 'upperDisplay');
        strGen = "";
    });
document.getElementById('multiply')
    .addEventListener('click', function () {
        operator = "*";
        if (ans == undefined) a = strGen;
        else {
            strGen = ans;
            a = ans;
        }
        document.getElementById('upperDisplay').innerText = strGen + ' x ';
        // showResult(' x ', 'upperDisplay');
        strGen = "";
    });
document.getElementById('subtract')
    .addEventListener('click', function () {
        operator = "-";
        a = strGen;
        showResult(' - ', 'upperDisplay');
        strGen = "";
    });
document.getElementById('divide')
    .addEventListener('click', function () {
        operator = "/";
        a = strGen;
        showResult(' / ', 'upperDisplay');
        strGen = "";
    });
document.getElementById('equal')
    .addEventListener('click', function () {
        b = strGen;
        // strGen = "";
        let totStr = `${a} ${operator} ${b} =`;
        document.getElementById('upperDisplay').innerText = totStr;

        // showResult(totStr, 'upperDisplay');
        console.log(ans);
        ans = calculate(a, b, operator);
        console.log(ans);
        // strGen = "";
        document.getElementById('lowerDisplay').innerText = ans;
        // showResult(ans, "lowerDisplay");
        // strGen = ans;
    });
document.getElementById('clear')
    .addEventListener('click', function () {
        strGen = "";
        showResult(strGen, 'upperDisplay');
        showResult(0, 'lowerDisplay');
        strGen = "";
        ans = undefined;
        b=undefined;
    });

document.getElementById('delete')
    .addEventListener('click', function () {
        let v = "" + strGen;
        strGen = "";
        v = v.substring(0, v.length - 1);
        // console.log(v);
        // if(v=="")  showResult(0, 'lowerDisplay');
        // else {
        // showResult(v, 'lowerDisplay');
        //     strGen="";
        // }
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
        showResult(".", "lowerDisplay");
    });
// document.getElementById("buttons").addEventListener('click', function (e) {
//     console.log(e.target.id);
//     p = e.target.id;
//     showResult(p, "lowerDisplay")
// })

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