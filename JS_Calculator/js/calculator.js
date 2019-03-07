window.onload = onLoadFunc;

function onLoadFunc() {
    var inputElements = document.querySelectorAll(".calc_input");
    
    inputElements.forEach(function(item) {
        item.onclick = function() {
            this.select();
        }
    });
}

function calculate() {

    var num1 = document.getElementById("number1").value;
    num1 = parseFloat(num1);

    var num2 = document.getElementById("number2").value;
    num2 = parseFloat(num2);

    var operator = document.getElementById("operator_select").value;
    
    var result = 0;

    switch (operator) {
        case "+":
        result = num1 + num2;
        break;
        case "-":
        result = num1 - num2;
        break;
        case "*":
        result = num1 * num2;
        break;
        case "/":
        result = num1 / num2;
        break;
    }

    document.getElementById("result").value = result;
}