$(document).ready(function () {
    var firstNumber = ''
    var secondNumber = ""
    var operator = ""
    var result = 0
    var numberSelector = false
    var operatorSelector = false

    //number selectors 
    $(".number").on("click", function () {
        if (numberSelector === false) {
            firstNumber = firstNumber + $(this).val()
            $("#first-number").text(firstNumber)
        } else {
            secondNumber = secondNumber + $(this).val()
            $("#second-number").text(secondNumber)
        }
    })

    // operator selector 
    $(".operator").on("click", function () {
        if (operatorSelector === false) {
            operatorSelector = true
            numberSelector = true

            operator = $(this).val()

            let op

            switch (operator) {
                case ("plus"):
                    op = "+"
                    break;
                case ("minus"):
                    op = "-"
                    break;
                case ("times"):
                    op = "*"
                    break;
                case ("divide"):
                    op = "/"
                    break;
                case ("power"):
                    op = "^"
                    break;
            }

            $("#operator").text(op)

        } else {
            $("#oas").removeClass("d-none")
            $("#oas").text("operator already selected " + "'" + operator + "'")
        }
    })


    // cases for calculate function
    function calculate() {
        switch (operator) {
            case ("plus"):
                return parseInt(firstNumber) + parseInt(secondNumber);
            case ("minus"):
                return parseInt(firstNumber) - parseInt(secondNumber);
            case ("times"):
                return parseInt(firstNumber) * parseInt(secondNumber);
            case ("divide"):
                return parseInt(firstNumber) / parseInt(secondNumber);
            case ("power"):
                return Math.pow(parseInt(firstNumber), parseInt(secondNumber));
        }
    }



    // equals on click
    $(".equal").on("click", function () {
        if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
            var answer = calculate()
            $("#result").text(answer)
        }
        else {
            $("#fne").removeClass("d-none")
            $(".lineBreak").removeClass("d-none")
        }
    })

    // clear button
    $(".clear").on("click", function () {
        console.log("clearing")
        firstNumber = ""
        $("#first-number").empty()
        secondNumber = ""
        $("#second-number").empty()
        operator = ""
        op = ""
        $("#operator").empty()

        answer = ""
        $("#result").empty()
        numberSelector = false
        operatorSelector = false
        $("#fne").addClass("d-none")
        $("#oas").addClass("d-none")
        $(".lineBreak").addClass("d-none")
    })
})