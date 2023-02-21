window.onload() = function () {
    document.querySelector("submit").onclick = function (e) {
        //prevents reload
        e.preventDefault()

        let result = 0;

        let firstnumber = document.querySelector("#fnumb").value;
        console.log(firstnumber)
        let secondnumber = document.querySelector("#snumb").value;
        let operator = document.querySelector("operation").value;
        //request only numbers
        firstnumber = parseFloat(firstnumber);
        secondnumber = parseFloat(secondnumber);

        switch (operator) {
            case "+":
                result = firstnumber + secondnumber;
                break;
            case "-":
                result = firstnumber - secondnumber;
                break;
            case "*":

                result = firstnumber * secondnumber;
                break;
            case "/":
                if (operator = "/") {
                    if (secondnumber === 0) {
                        result = "Error"
                    }
                    result = firstnumber / secondnumber;
                } break;
            default:
                result = "Error";
                break;
        }

        document.querySelector("#display").innerText = result;

    }
}