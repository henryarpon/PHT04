
//Original Version

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz"); 
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

//Refactored Version 


// for (let i = 1; i <= 100; i++) {
    
//     let result = "";

//     if (i % 3 === 0) {
//         result += "Fizz";
//     } 
    
//     if (i % 5 === 0) {
//         result += "Buzz";
//     }

//     if (result === "") {
//         result = i; 
//     }

//     console.log(result);
// }


//Using Switch

// for (let i = 1; i <= 100; i++) {

//     switch (true) {
//         case (i % 3 === 0 && i % 5 === 0):
//             console.log("FizzBuzz");
//             break;
//         case (i % 3 === 0):
//             console.log("Fizz");
//             break;
//         case (i % 5 === 0):
//             console.log("Buzz");
//             break;
//         default:
//             console.log(i);
//     }
// }
