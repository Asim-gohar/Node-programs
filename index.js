/*
                               //To calculate numbers
import inquirer from "inquirer";

function continueCalculation(){
inquirer
.prompt([{
  name : "num1" ,
  type : "number" ,
  message : "Enter your first number?" ,
} , {
  name : "operation" ,
  type : "list" ,
  message : "Enter the operation?" ,
  choices : ["Addition" , "Substraction" , "Multiplication" , "Division" , "Modulus" ,"Exponent"] ,
} , {
  name : "num2" ,
  type : "number" ,
  message : "Enter your second number?" ,
} , {
  name : "Continue" ,
  type : "confirm" ,
  message : "Do you want to perform another calculation"
}
])
.then((result)=>{
  console.log(result);

switch (result.operation) {
  case "Addition" :
  console.log(result.num1 + result.num2);
  break ;
  case "Substraction" :
    console.log(result.num1 - result.num2);
  break ;
  case "Multiplication" :
    console.log(result.num1 * result.num2);
  break ;
  case "Division" :
    console.log(result.num1 / result.num2);
  break ;
  case "Modulus" :
    console.log(result.num1 % result.num2);
  break ;
  case "Exponent" :
    console.log(result.num1 ** result.num2);
  break ;
  default :
  break ;
}

  if(result.Continue){
    continueCalculation() ;  // For Countinue Calculating
  }
  else{
    console.log("Good Bye !");
    
  }
 }) ;
}
continueCalculation() ;  //Start program by calling function
*/
/*
                              //Collect user data
import inquirer from "inquirer";

function getUserInformation(){
  inquirer
  .prompt([{
    name : "Name" ,
    type : "string" ,
    message : "Enter your name?" ,
  } , {
    name : "Age" ,
    type : "number" ,
    message : "Enter your age?"
  } , {
    name : "favouriteLanguage" ,
    type : "input" ,
    message : "Enter your favourite language?",
  } , {
    name : "continue" ,
    type : "confirm" ,
    message : "Do you want to perform another"
  }
])

.then((answers)=>{
  console.log(`Name :${answers.Name}`);
  console.log(`Age : ${answers.Age}`);
  console.log(`Favourite programming language : ${answers.favouriteLanguage}`);
  
  
  
  if(answers.continue){
      getUserInformation() ; //To continue program
  }
  else{
    console.log("Good bye!");
    
  }
})
}
getUserInformation() ;
*/
//Practice in class
/*
import inquirer, { Answers , QuestionCollection } from "inquirer";
async function sum(){
  
const questions : QuestionCollection= [{       //await inquirer.prompt( " this syntax will not use in questions if use in result"
  type : "number" ,
  name : "num1" ,
  message : "Enter your number 1?"
} , {
  type : "number" ,
  name : "num2" ,
  message : "Enter your number 2?"
}] //)
try {
  const result : Answers = await inquirer.prompt(questions)
console.log(result.num1 + result.num2);

if(result.num1 === 10){
  //import inquirer from "inquirer";
  const anotherInput = await inquirer.prompt([{
  type : "number" ,
  name : "num3" ,
  message : "Enter your number 3?"

}])


console.log(`Number 3 is ${anotherInput.num3}`);

}

} catch (error) {
  console.log(`catch error ${error}`);
  
}
// const result : Answers = await inquirer.prompt(questions)
// console.log(result.num1 + result.num2);

//import inquirer from "inquirer";
// const continue = inquirer.prompt([{
// if(result.num1 === 10){
//   //import inquirer from "inquirer";
//   const anotherInput = await inquirer.prompt([{
//   type : "number" ,
//   name : "num3" ,
//   message : "Enter your number 3?"

// }])


// console.log(`Number 3 is ${anotherInput.num3}`);

// }
}

sum()
console.log("After input");
*/
//import inquirer from "inquirer";
//import inquirer from "inquirer";
/*

                                  //Students Grades
//write a program to get scores from user.if scores is grater tahn 100. and smaller than 0 give output like a "Your input is wrong" . and also give grade to user score.
import inquirer, { Answers, QuestionCollection } from "inquirer"
import chalk from "chalk";
async function getStudentInput() {
 const questions : QuestionCollection = [{
  name : "Name" ,
  type : "string" ,
  message : "Enter your name?"
 } , {
  name : "Score" ,
  type : "number" ,
  message : "Enter your score?"
 } , {
  name : "continue" ,
  type : "confirm" ,
  message : "Do you want perform another?"
 }
 ]
 try {
  let answers : Answers = await inquirer.prompt(questions) ;
  console.log(chalk.white.bgBlue.bold(`Answers is [Name: ${answers.Name} , Score: ${answers.Score} ]`));
  
  if(answers.Score < 0 || answers.Score > 100){
    throw new Error("Input should be from 0 to 100");
  }
  else if(answers.Score < 40){
    console.log(chalk.red.bgWhite.bold("You are failed"));
  }
  else if(answers.Score >= 40 && answers.Score < 60){
    console.log(chalk.yellow.bgWhite.bold("You got grade B"));
    
  }
  else if(answers.Score >= 60 && answers.Score < 80){
    console.log(chalk.yellow.bgWhite.bold("You got grade A"));
    
  }
  else{
    console.log(chalk.yellow.bgWhite.bold("You got grade A+"));
  }
  if(answers.continue){
    getStudentInput()
  }
  else{
    console.log(chalk.magentaBright("Good bye!"));
    
  }
 } catch (error) {
  console.log(chalk.white.bgRed.bold("Error" , error));
  
 }
 
}
getStudentInput()
*/
//Same program solve in class
/*
                    //Get students examScore
import chalk from "chalk";
import inquirer, { Answers, QuestionCollection } from "inquirer";

async function userScore(){
  const questions : QuestionCollection = ([{
  name : "Name" ,
  type : "string" ,
  message : "Enter your name?" ,
 } , {
  name : "Score" ,
  type : "number" ,
  message : "Enter your score?" ,
 }])
try {
  const answers : Answers = await inquirer.prompt(questions)
  console.log(chalk.red(`Answers is [Name: ${answers.Name} , Score: ${answers.Score}]`));
  
  if(answers.Score > 100 || answers.Score < 0){
    throw new Error("Invalid input: Score must be 0 to 100");
  }
  else if(answers.Score < 40 ){
  console.log("You are failed.");
}
else if(answers.Score >= 40  && answers.Score <= 60){
  console.log(`You got grade "B".`);
}
else if(answers.Score > 60 && answers.Score <= 80 ){
  console.log(`You got grade "A".`);
}
else{
  console.log(`You got grade "A+"`);
  
}
} catch (error) {
  console.log(chalk.bgCyan("Error" , error));
  
}


}
userScore()
*/
/*
                            //Calculator by async and await method
import chalk from "chalk";
import inquirer, { Answers, QuestionCollection } from "inquirer";
//import Choices from "inquirer/lib/objects/choices.js";

async function calculator() {
  const questions : QuestionCollection = [{
    name : "num1" ,
    type : "number" ,
    message : "Enter your number?" ,
  } , {
    name : "operation" ,
    type : "list" ,
    message : "Choose your operation" ,
    choices : ["Addition" , "Substraction" , "Multiplication" , "Division" , "Modulus" , "Exponent"] ,
  } , {
    name : "num2" ,
    type : "number" ,
    message : "Enter your number?" ,
  } , {
    name : "continue" ,
    type : "confirm" ,
    message : "Do you want to perform another?" ,
  }]
  try {
    const answers : Answers = await inquirer.prompt(questions)
    console.log(answers);
    if(answers.operation == "Addition"){
      console.log(chalk.redBright.bgWhite.bold("Answer is:" , answers.num1 + answers.num2));
    }
    else if(answers.operation == "Substraction"){
      console.log(chalk.redBright.bgWhite.bold("Answer is:" , answers.num1 - answers.num2));
    }
    else if(answers.operation == "Multiplication"){
      console.log(chalk.redBright.bgWhite.bold("Answer is:" , answers.num1 * answers.num2));
    }
    else if(answers.operation == "Division"){
      console.log(chalk.redBright.bgWhite.bold("Answer is:" , answers.num1 / answers.num2));
    }
    else if(answers.operation == "Modulus"){
      console.log(chalk.redBright.bgWhite.bold("Answer is:" , answers.num1 % answers.num2));
    }
    else if(answers.operation == "Exponent"){
      console.log(chalk.redBright.bgWhite.bold("Answer is:" , Math.pow(answers.num1 , answers.num2)));
    }
    else{
      console.log("input is not correct");
      
    }

    if(answers.continue){
      calculator()
    }
    else{
      console.log(chalk.overline.bgWhite.bold("Good bye!"));
      
    }
if(typeof answers.num1 !== "number" || typeof answers.num2 !== "number"){
  throw new Error("Please enter numerical value");
  
}
  } catch (error) {
    console.log(chalk.blue.bgWhite.bold("Error" , error));
    
  }
}
calculator() ;
*/
/*
                         //Number guessing Game
import inquirer, { Answers, QuestionCollection } from "inquirer";
import chalk from "chalk";
let targetNumber = Math.floor(Math.random() * 20) + 1 ;
async function numberGuessingGame(){
  const questions : QuestionCollection = [{
    name : "guess" ,
    type : "number" ,
    message : "Guess the number (between 1 and 20)" ,
  }]
  console.log(chalk.cyan.bgWhite.bold(`Welcome to the new number guessing game!`));
  console.log(chalk.cyan.bgWhite.bold(`Try to guess the secret number`));
  
  
  let attempts : number = 0 ;
  while(true){
    try {
      const answers : Answers = await inquirer.prompt(questions) ;
      const guess = answers.guess ;
      if(guess == targetNumber){
        attempts++ ;
        console.log(chalk.white.bgBlue.bold(`Congratulation, You won the game in ${attempts} attempts.`));
        break;
      }
      else if(guess < targetNumber){
        attempts++ ;
        console.log(chalk.red.bgWhite.bold("Your guess number is too low, Guess another number."));
      }
      else{
        attempts++ ;
        console.log(chalk.red.bgWhite.bold("Your guess number is too high, Guess another number."));
      }
    } catch (error) {
      console.log(chalk.white.bgRed.bold("Error" , error));
    }
  }
  const playAgain : Answers = await inquirer.prompt([{
    name : "again" ,
    type : "confirm" ,
    message : "Do you want to play again" ,
  }])
  if(playAgain.again){
    targetNumber = Math.floor(Math.random() * 20) + 1 ;
    numberGuessingGame() ;
  }
  else{
    console.log(chalk.white.bgBlue.bold("Good bye!")) ;
  
}}
numberGuessingGame() ;
*/
/*
import inquirer, { Answers, QuestionCollection } from "inquirer";

let choices = ["Paper" , "Scissors" , "Rock"] ;
async function rockPaperScissorsGame() {
  let questions : QuestionCollection = [{
    name : "playerChoice" ,
    type : "list" ,
    message : "Choose your move :" ,
    choices : choices ,
  }]
  console.log("Welcome to the Paper , Rock , Scissors game!");
  console.log("let's start the game");
  let playerScore = 0 ;
  let computerScore = 0 ;
  while(true){
    try{
    const answer : Answers = await inquirer.prompt(questions) ;
    let playerChoice = answer.playerChoice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)] ;
    
    console.log(`You choose: ${playerChoice}`);
    console.log(`Computer choose: ${computerChoice}`);

    if(playerChoice === computerChoice){
      console.log(`Its a tie, Both players will  get "1" point.`);
      playerScore++ ;
      computerScore++ ;
     }
     else if(
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
     ){
      console.log(`You won this round`);
      playerScore++ ;
      
       }
       else{
        console.log("Computer won this round");
        computerScore++ ;
       }
       
       
       
       console.log(`Player score: ${playerScore}`);
       console.log(`Computer score: ${computerScore}`);
       
       
  } catch(error){
    console.log("Error" , error);
    
  }
const playAgain : Answers = await inquirer.prompt([{
  name : "again" ,
  type : "confirm" ,
  message : "Do you want to plauy again!" ,
}])
if(!playAgain.again){
  console.log("Good bye!");
  break ;
}

}
}
rockPaperScissorsGame() ;
*/
/*
                               //Number guessing game
import inquirer, { Answers, QuestionCollection } from "inquirer";
import chalk from "chalk";
let targetNumber = Math.floor(Math.random() * 20) + 1 ;
let maxAttempts = 5 ;
let attempts = 0 ;
async function numberGuessingGame(){
  let questions : QuestionCollection = [{
    name : "guess" ,
    type : "number" ,
    message : "Guess number between (1 to 20) :"
}]
  console.log(chalk.bgWhite.white.bold("Welcome to the number guessing game"));
  console.log(chalk.white.bgWhite.bold("let's start playing"));

while(attempts < maxAttempts){
  try{
    let answer : Answers = await inquirer.prompt(questions) ;
  let guess = answer.guess ;
  
  if(guess == targetNumber){
    console.log(chalk.blue.bgYellow.bold(`Congratulation you find the number in ${attempts} attempts`));
    break;
  }
  else if(guess < targetNumber){
    console.log(chalk.blue.bgWhite.bold(`Its a low number from target number, guess another.`));
    
  }
  else{
    console.log(chalk.blue.bgWhite.bold('Its a high number from target number, guess another.'));
    
  }
  attempts++ ;
  if(attempts === maxAttempts){
    console.log(chalk.white.bgRed.bold(`You are out of the attempts. The secret number was ${targetNumber}`));
   }
   
  }
catch(error){
    console.log(chalk.white.bgRed.bold("Error" , error));
    
  }
  
}
  
  let playAgain :Answers = await inquirer.prompt([{
    name : "again" ,
    type : "confirm" ,
    message : "Do you want to play again?"
  }])
  if(playAgain.again){
    attempts = 0
    targetNumber = Math.floor(Math.random() * 20) + 1 ;
   numberGuessingGame()
  }
  else{
    console.log(chalk.yellow.bgWhite.bold("Thanks for playing"));
  }

}
numberGuessingGame() ;
*/
/*
                             //rockPaperSciessor Game
import inquirer, { Answers, QuestionCollection } from "inquirer";
let choices = ["Paper" , "Scissors" , "Rock"] ;
// let computerChoice = choices(Math.floor(Math.random() * choices.length))
async function rockPaperScissorsGame() {
  let questions : QuestionCollection = [{
    name : "Choose" ,
    type : "list" ,
    message : "Choose your turn:" ,
    choices : choices,
  }]
  console.log("welcom to Rock , Paper , Scissors Game!");
  console.log("Let's start palying!");
  let playerScore = 0 ;
  let computerScore = 0 ;
  while(true){
    try{
  const answer : Answers = await inquirer.prompt(questions) ;
  const playerChoice = answer.Choose ;
  let computerChoice = choices[(Math.floor(Math.random() * choices.length))]
  console.log(`You choose: ${playerChoice}`);
  console.log(`Computer choose: ${computerChoice}`);
  
  if(playerChoice == computerChoice){
    console.log(`Its a tie. Both teams will get one points`);
    playerScore++ ;
    computerScore++ ;
  }
  else if(
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissor" && computerChoice == "Paper")
  ){
    console.log("You win this round.");
    playerScore++ ;
  }
  else{
    console.log("Computer win this round.");
    computerScore++ ;
  }
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  
  
    }catch(error){
      console.log('Error' , error);
      
    }
    let playAgain : Answers = await inquirer.prompt({
      name : "again" ,
      type : "confirm" ,
      message : "Do you want play another round?"
    })
    if(!playAgain.again){
      console.log("Thanks for playing.");
      break ;
    }
}


}
rockPaperScissorsGame() ;
*/
/*
                             //To check countryies.json file
import data from "./countries.json" assert {type : "json"}
import chalk from "chalk";
for(let i = 0 ; i < data.length ; i++){
  let country = data[i] ;
  if(country.name.slice(0,1).toLowerCase() == "z"){
    console.log(`Country Name is` + chalk.red.bgWhite.bold (country.name) + `Country code is` + chalk.white.bgRed.bold (country.code))
    
  }
}
*/
/*
                               //Defining types of programme
type subjectGradeType = {midterm: number ,final: number ,}
interface gradeType {
    math: subjectGradeType ,
    science: subjectGradeType ,
}
interface addressType {
  street: string ,
    city: string ,
    postalCode: number,
}
interface contactType {
    email: string,
    phone: number,
}
interface complexObjectTypes  {
  name: string ,
  age: number ,
  isStudent: boolean,
  interests: string[],
  address: addressType ,
  grades: gradeType ,
  contact: contactType ,
  tuple: [number , string , boolean] ,
  functionExample: (x : number) => number;
}

const complexObject: complexObjectTypes = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  interests: ["programming", "music", "hiking"],
  address: {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: 12345,
  },
  grades: {
    math: {
      midterm: 85,
      final: 92,
    },
    science: {
      midterm: 78,
      final: 88,
    },
  },
  contact: {
    email: "john.doe@example.com",
    phone: 1234567890,
  },
  tuple: [1, "two", true],
  functionExample: function (x) {
    return x * 2;
  },
};
console.log(typeof complexObject);
*/
//Develop a TS program that show the working of an ATM machine such
//  - User should login by entering his/her unique account number and a secret PIN
//  - User can check account balance 
//  - User can withdraw money 
//  - User can check his/her previous transections in the current login
//  - User should be asked at the end of each function that if he/she wants to end transections or perform any other transections if the user choose more transections he/she must be shown all the options again and he / she can perform any transections.
//  In the current login means if user logged in and performed 5 transections he/she have an option to check these 5 transections
//  If he/she choosed to end the transections the data should be removed.
import inquirer from "inquirer";
async function atmMachine() {
    let userAccountNum = 1234;
    let userPIN = 786;
    let accountBalance = 500;
    let transactions = [];
    const loginQuestions = [{
            name: "accountNumber",
            type: "number",
            message: "Plese enter your account number:"
        }, {
            name: "PIN",
            type: "number",
            message: "Plese enter your password:",
        }];
    console.log(`Welcome to Atm machine. To continue Please enter your Atm card "Number and Pin".`);
    let isAuthenticate = false;
    let index = 0;
    while (true) {
        try {
            if (!isAuthenticate) {
                const userInput = await inquirer.prompt(loginQuestions);
                if (userInput.accountNumber == userAccountNum && userInput.PIN == userPIN) {
                    isAuthenticate = true;
                }
                else {
                    console.log(`Invalid input or incorrect "Card number/PIN".`);
                    continue;
                }
            }
            let performAction = await inquirer.prompt([{
                    name: "accountInfo",
                    type: "list",
                    message: "Choose action to perform:",
                    choices: ["check account balance", "withdraw money", "check previous transections"],
                }]);
            if (performAction.accountInfo == "check account balance") {
                console.log(`Your account balance is ${accountBalance}`);
            }
            else if (performAction.accountInfo == "withdraw money") {
                let withdraw = await inquirer.prompt([{
                        name: "moneyWithDraw",
                        type: "number",
                        message: "Enter your amount to withdraw:"
                    }]);
                if (withdraw.moneyWithDraw > 0 && withdraw.moneyWithDraw < 500) {
                    console.log(`Withdrawl money amount is: ${withdraw.moneyWithDraw}`);
                    transactions.push(withdraw.moneyWithDraw);
                    console.log(`Remaining account balance is: ${accountBalance -= withdraw.moneyWithDraw}`);
                    index++;
                }
                else {
                    console.log("invalid input");
                }
            }
            else if (performAction.accountInfo == "check previous transections") {
                console.log(`All num of previous transaction was: "${index}" and transtaion amount was "${transactions}"`);
            }
            else {
                console.log("Input is not valid or incorrect!");
            }
        }
        catch (error) {
            console.log("Error", error);
        }
        let performAnotherTransaction = await inquirer.prompt([{
                name: "performAnother",
                type: "confirm",
                message: "Do you want to perform another transaction?"
            }]);
        if (!performAnotherTransaction.performAnother) {
            console.log(`Thanks for using Atm machine`);
            break;
        }
    }
}
atmMachine();
