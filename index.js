
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
        console.log("operator", operator)
 


    } else {
        console.log("operator selected")
    }
})


function calculate(){
    console.log("hello")
    console.log(operator)
    switch(operator){
        case("plus"):
        return parseInt(firstNumber) + parseInt(secondNumber);
        case("minus"):
        return parseInt(firstNumber) - parseInt(secondNumber);
        case("times"):
        return parseInt(firstNumber) * parseInt(secondNumber);
        case("divide"):
        return parseInt(firstNumber) / parseInt(secondNumber);
        case("power"):
        return Math.pow(parseInt(firstNumber), parseInt(secondNumber));
    }

}



// equals
$(".equal").on("click", function(){
    if(firstNumber !== "" && secondNumber !== "" && operator !== ""){
 var answer =  calculate()
 console.log("answer", answer)
    }
    else{
        alert("please select a first number, second number and an operator fo the calculator to function correctly")
    }
})
