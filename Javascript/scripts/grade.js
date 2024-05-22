// let score;
//     do {
//         score = prompt("Enter a score");
//         if (isNaN(score) || score.trim() === "") {
//             alert("Please enter a valid score.");
//         }
//     } while (isNaN(score) || score.trim() === "");

// let numScore = parseInt(score);

// if (numScore >= 90) {
//     console.log(`Your score of ${numScore} has a grade equivalent of A`);
// } 
// else if (numScore >= 80 && numScore <= 89) {
//     console.log(`Your score of ${numScore} has a grade equivalent of B`);
// }
// else if (numScore >= 70 && numScore <= 79) {
//     console.log(`Your score of ${numScore} has a grade equivalent of C`);
// }
// else if (numScore >= 60 && numScore <= 69) {
//     console.log(`Your score of ${numScore} has a grade equivalent of D`);
// }
// else {
//     console.log(`Your score of ${numScore} has a grade equivalent of F`);
// }

function getValidScore() {
    let score;
    do {
        score = prompt("Enter a score");
    } 
    while (isNaN(score) || score.trim() === "");
    return parseInt(score);
}

function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

let numScore = getValidScore();
let grade = getGrade(numScore);
console.log(`Your score of ${numScore} has a grade equivalent of ${grade}`);


