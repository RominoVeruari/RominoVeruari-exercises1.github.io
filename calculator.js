
function operation() {
    let firstnumber = document.getElementById("fnumb").value;
    let secondnumber = document.getElementById("snumb").value;
    let operator = document.getElementById("operation").value;
    let result = 0;
    switch (operator) {
        case 0:
            if (operator = "+") {
                result = firstnumber + secondnumber;
            } break;
        case 1:
            if (operator = "-") {
                result = firstnumber - secondnumber;
            } break;
        case 2:
            if (operator = "*") {
                result = firstnumber * secondnumber;
            } break;
        case 3:
            if (operator = "/") {
                if(secondnumber===0){
                    document.getElementById("display").innerHTML("Error")
                }
                result = firstnumber / secondnumber;
            } break;
        default:
    }
    
    document.querySelector("#display").innerText = result;
    
}
