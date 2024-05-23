
//Function Basics

// function greet (name) {
//     console.log(`Nice to meet you today ${name}`);
//   }
  
// greet("Henry");
  
//Local Scope vs Global Scope

// let globalVar = "This is a global variable";

// function local () {

//   let globalVar = "This should  be a local variable"

//   console.log(globalVar);
// }




//Higher Order Function

function mathOperation(num1, num2, callback) {
    return callback(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


