// Functions
// function declaration
function greet() {
    console.log("Hello, welcome to functions!");
  }
  greet();
  function squareDeclaration(num) {
    return num * num;
  }
  console.log(squareDeclaration(6));
  // function functionName(parameter) {
   // code goes here
  // }
  // functionName(argument)

console.log("Square for Function Declaration", squareDeclaration(6));
// 2. Function expression
const squareExpression = function (num) {
  return num * num;
};
console.log("Square for Function Expression", squareExpression(5));

// Function Hoisting - only works for function declaration
sayHello();
function sayHello() {
  console.log("Hello function hoisting");
}

// variable scope
// global scope
let globalVar = "I am global";
console.log(globalVar);
// local scope
function localScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
localScope();
// console.log(localVar);


// Higher Order Functions
function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }
  // Callback functions
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  // Using the higher-order functions with callbacks
  let sum = calculate(5, 3, add);
  let difference = calculate(5, 3, subtract);
  console.log("Addition: ", sum);
  console.log("Subtraction: ", difference);