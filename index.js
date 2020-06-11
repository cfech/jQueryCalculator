
var firstNumber = ''
var secondNumber = ""
var operator = ""
var result = 0
var numberSelector = false
var operatorSelector = false

//number selectors 
$(".number").on("click", function () {
    console.log("hello")

    if (numberSelector === false) {



        firstNumber = firstNumber + $(this).val()
        console.log("firstNumber", firstNumber)
        $("#first-number").text(firstNumber)

    } else {
        secondNumber = secondNumber + $(this).val()
        console.log("secondNumber", secondNumber)
        $("#second-number").text(secondNumber)

    }
})

// operator selector 
$(".operator").on("click", function () {
    if (operatorSelector === false) {
        operatorSelector = true
        numberSelector = true
        console.log("operatorSelector", operatorSelector)

        console.log($(this).val())

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



        console.log("operator", operator)
        $("#operator").text(op)



    } else {
      alert("operator selected "+ "'" +operator+"'")
    }
})


// cases for calculate function
function calculate() {
    console.log("hello")
    console.log(operator)
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
        console.log("answer", answer)
        $("#result").text(answer)
    }
    else {
        alert("Please select a first number, second number and an operator fo the calculator to function correctly")
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

})
