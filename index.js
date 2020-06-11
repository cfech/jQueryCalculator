
var firstNumber = ''
var secondNumber = ""
var operator = ""
var result = 0
var numberSelector = true
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
        console.log("operatorSelector", operatorSelector)

        console.log($(this).val())

        operator = $(this).val()
        console.log("operator", operator)
        numberSelector = false


    } else {
        console.log("operator selected")
    }
})

