//First number input
var num1 = prompt('Pick a number');
//Picking an operation
var operator = prompt('Pick an operation "+, -, *, or /"');
//Second number input
var num2 = prompt('Pick another number');

//Actually doing the math
if (operator == '+') {
    result = +num1 + +num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
} 

//Outputting the giving equation and the answer
console.log(num1, operator, num2, '=', result );
