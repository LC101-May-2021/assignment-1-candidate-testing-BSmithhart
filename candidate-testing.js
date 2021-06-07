const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
//console.log(candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer= "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilmeters == 5000 meters? ", "(5 + 3)/2 * 10 =? ","Given the array [8, 'orbit', 'trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];

let candidateAnswers = [];

//console.log(correctAnswers);


// TODO 1.1b: Ask for candidate's name //
function askForNameA() {candidateName = input.question("Please enter your name: ");
}

askForNameA(candidateName);

console.log(" ");
// TODO 1.1c: Ask for candidate's name //

console.log ("Candidate Name: " + candidateName + "!");
console.log(" ");

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

function askQuestion() {for (let i = 0; i <   questions.length; i++) 
  {let answer = input.question(`#${i+1}: ${questions[i]}`);
  candidateAnswers.push(answer);
  console.log("Your Answer: " + candidateAnswers[i]);
  console.log("Correct Answer: " + correctAnswers[i]);
  console.log(" ");
  }
}





// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

function gradeQuiz(canAnswers) { 
  let countAnswers = 0;
  for (i =0; i< correctAnswers.length; i++) {
     if (canAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      countAnswers +=1;
     }

  } 
   
    
  let grade = countAnswers / 5 *100;
  //console.log (grade);
  if (grade >= 80){
    console.log(`>>> Overall Grade: ${grade}${"%"} ${countAnswers} ${"of 5 responses correct <<<"}`);
    console.log(">>> Status: PASSED >>>");}  
    if (grade <= 79){console.log(`>>> Overall Grade: ${grade}${"%"} ${countAnswers} ${"of 5 responses correct <<<"}`);
  console.log(">>> Status: FAILED <<<");}
  

  return grade;

}

function runProgram() { 
  //askForName ();
  // TODO 1.1c: Ask for candidate's name //

  

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};