// There are 4 ways to swap the values of two variables.

// ✅ Temporary Variable
let variable1 = 10;
let variable2 = 20;
let temp;

temp = variable1;
variable1 = variable2
variable2 = temp;

console.log("variable1", variable1);
console.log("variable2", variable2);


// ✅ Destructuring Assignment(ES6)
let num1 = 10;
let num2 = 20;


[num1, num2] = [num2, num1];

console.log(`num1: ${num1}`);
console.log(`num1: ${num2}`);

// Q - Is this an array ?
// Ans - Right - hand side([num2, num1]) is an array literal.
// Left - hand side([num1, num2]) is an array destructuring pattern introduced in ES6.

// ✅ Arithmetic Operators(+, -)

let firstNumber = 10
let secondNumber = 20

firstNumber = secondNumber + firstNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber

console.log(`FirstNumber: ${firstNumber}`);
console.log(`SecondNumber: ${secondNumber}`);


// ✅ Bitwise XOR(Advanced) ???????
let num1 = 10;
let num2 = 20;

num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

