
let playGame = false;
let gameTimer = 75;
let optionChosen;
let optionAel = document.getElementById("option-a");
let optionBel = document.getElementById("option-b");
let optionCel = document.getElementById("option-c");
let optionDel = document.getElementById("option-d");
let gameTimerel = document.getElementById("game-timer");
let quizQuestionEl = document.getElementById("quiz-question");
let rightWrongEl = document.getElementById("right-wrong");
let startQuizBtn = document.getElementById("start-quiz-btn");
let nextBtn = document.getElementById("next-btn");
let question_1 = [];
let questionCount = 0;

// how do store the question asnwer and options.
let gameStuff = [question_1 =
{
    Question: "How much would a wood chuck",
    answer: "option-b",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a", "b-The correct answer goes here", "c", "d"]
},
question_2 =
{

    Question: "What data type will this line of code be after is is concatenated?",
    answer: "option-a",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: a string", "b: a number", "c: an object", "d. all of the above"]
},

question_3 =
{

    Question: "Question 3",
    answer: "option-a",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: a string", "b: a number", "c: an object", "d. all of the above"]
},

question_4 =
{

    Question: "Wquestion 4",
    answer: "option-a",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: a string", "b: a number", "c: an object", "d. all of the above"]
},

question_5 =
{

    Question: "question 5",
    answer: "option-a",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["asdfsdfds: a string", "b: a sdfsd", "c: an obasdasject", "d. all asdasdof the above"]
}
]


// start button. just to set everythingto question 1
startQuizBtn.addEventListener("click", function () {
    setTime()

    

        quizQuestionEl.innerHTML = gameStuff[questionCount].Question
        //how do I get the options onto the page?
        optionAel.innerHTML = gameStuff[questionCount].optionShown[0]
        optionBel.innerHTML = gameStuff[questionCount].optionShown[1]
        optionCel.innerHTML = gameStuff[questionCount].optionShown[2]
        optionDel.innerHTML = gameStuff[questionCount].optionShown[3]
    
        if (playGame = false){
            gameOver()
        }
 
})


// start button will only start with gamestuf[0].
// then there will be if 
//statment if statment for the next btn. if gamestuff = 0 then run the incrmatnation questionsCount++
//
nextBtn.addEventListener("click", function () {
    questionCount++
    rightWrongEl.textContent = ""
        quizQuestionEl.innerHTML = gameStuff[questionCount].Question
        //how do I get the options onto the page?
        optionAel.innerHTML = gameStuff[questionCount].optionShown[0]
        optionBel.innerHTML = gameStuff[questionCount].optionShown[1]
        optionCel.innerHTML = gameStuff[questionCount].optionShown[2]
        optionDel.innerHTML = gameStuff[questionCount].optionShown[3]
    

})

//how do i get the quetion from the array game Stuff on to thewebpage?
// for (let i = 0; i < gameStuff.length; i++) {

//     quizQuestionEl.innerHTML = gameStuff[i].Question
//     //how do I get the options onto the page?
//     optionAel.innerHTML = gameStuff[i].optionShown[0]
//     optionBel.innerHTML = gameStuff[i].optionShown[1]
//     optionCel.innerHTML = gameStuff[i].optionShown[2]
//     optionDel.innerHTML = gameStuff[i].optionShown[3]

//now how do i get them to roate on the page at the right time?

// }






if (gameTimer === 0) {
    playGame = false
} else {
    playGame = true
}






//lets get question 1 show up on the page with only js.




// how do I campare the answer to the option chosen?
// how do I get then question and options display on the page? or console.log
// I want to compiar answer with any number that is in the array option:


//start with index 0 because this is question 1
// how do iget the answer?  

function checkAnswer() {
    if (gameStuff[0].answer == optionChosen) {  //change this is a variable and base it on what the person chooses.
        rightWrongEl.textContent = "Thats right!"
        console.log("It is correct")
    } else {
        rightWrongEl.textContent = "You suck"
        console.log("you suck")
    }
}
console.log()
// now I need to make 1 button and when I press it. it will set a variable to the 
//answer the person chose.
//if a person clicks "option-a" it will set the variable  opionChosen to string "option-a"
// "option-b" it will set the variable  opionChosen to string "option-b"

//buttons for answers 
optionAel.addEventListener("click", function () {
    optionChosen = "option-a"
    checkAnswer();
});

optionBel.addEventListener("click", function () {
    optionChosen = "option-b"
    checkAnswer();
});

optionCel.addEventListener("click", function () {
    optionChosen = "option-c"
    checkAnswer();
});

optionDel.addEventListener("click", function () {
    optionChosen = "option-d"
    checkAnswer();
});



//example
function gameOver(){
    quizQuestionEl.innerHTML = ""
    //how do I get the options onto the page?
    optionAel.innerHTML = ""
    optionBel.innerHTML = ""
    optionCel.innerHTML = ""
    optionDel.innerHTML = ""
}
  

// 1. back next-btn
// 2. make a for loop have that for loop trigger the next page to load.
// 3. i need to make a function to get the next page to load, but not check the answer.
// how do I get the info on the screen to show ? with javascript.

        function setTime(){
            var timerInterval = setInterval(function(){
                gameTimer--;
                
                gameTimerel.textContent = "Time Left: " + gameTimer;
                if (gameTimer === 0){
                    clearInterval(timerInterval)
                    playGame = false
                    
                }
            }, 1000)
        }