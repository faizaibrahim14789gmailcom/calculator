#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number ", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perfrom operation",
        type: "list",
        name: "operators",
        choices: ["addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditonal statment
if (answer.operators === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opertors === "Multipilication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.second);
}
else {
    console.log("invalid operators");
}
