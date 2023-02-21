let firstnumber = 0;
let secondnumber = 0;
let operator = "";
let result = 0;

// firstnumber = document.getElementById("fnumb").value;
//     secondnumber = document.getElementById("snumb").value;
//     operator = document.getElementById("operation").value;
//     console.log(firstnumber);
//     console.log(secondnumber);
//     console.log(operator);
function operation() {
    firstnumber = document.getElementById("fnumb").value;
    secondnumber = document.getElementById("snumb").value;
    operator = document.getElementById("operation").value;
    switch (operator) {
        case 0:
            if (operator == "+") {
                result = firstnumber + secondnumber;
            } break;
        case 1:
            if (operator == "-") {
                result = firstnumber - secondnumber;
            } break;
        case 2:
            if (operator == "*") {
                result = firstnumber * secondnumber;
            } break;
        case 3:
            if (operator == "/") {
                if(secondnumber===0){
                    document.getElementById("display").innerHTML("Error")
                }
                result = firstnumber / secondnumber;
            } break;
        default:
    }
    document.getElementById("display").innerHTML = result;
}
