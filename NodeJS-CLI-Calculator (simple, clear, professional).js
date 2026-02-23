const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//higher order function

function calculate(a, b, operation){
    return operation(a, b);
}

//callback functions
function add(x,y){
        return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function division(x, y){
    return x / y;
}

function modulus(x, y){
    if (y === 0) return "Cannot divide by 0";
    return x % y;
}

function percentage(x, y){
    return ((x / y)*100)
}

//Taking user input
rl.question("Enter first number: ",function(num1) {
    rl.question("Enter second number: ", function(num2) {
        rl.question("choose operation (Add, subtract, multiply, division, modulus, percentage):",function(op) {

            const a = Number(num1);
            const b = Number(num2);

            let result;

            if (op === "add") result = calculate(a, b, add);
            else if (op === "subtract") result = calculate(a, b, subtract);
            else if (op === "multiply") result = calculate(a, b, multiply);
            else if (op === "division") result = calculate(a, b, division);
            else if (op === "modulus") result = calculate(a, b, modulus);
            else if (op === "percentage") result = calculate(a, b, percentage);
            else{
                console.log("Invalid Operations");
                rl.close();
                return;
            }
            console.log("Result:", result);
            rl.close();
        });
    });
});


