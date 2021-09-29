//know issues
//todo
//Make an ending game function. 
//What will that do?
//i need to make local storage, user will input their Name, and it will record their score.
//come up with a way to score the player.
let playGame = false;
let gameTimer = 75;
let optionChosen;
let optionAel = document.getElementById("option-a");
let optionBel = document.getElementById("option-b");
let optionCel = document.getElementById("option-c");
let optionDel = document.getElementById("option-d");
let gameTimerel = document.getElementById("game-timer");
let gameScoreEl = document.getElementById("game-score");
let quizQuestionEl = document.getElementById("quiz-question");
let rightWrongEl = document.getElementById("right-wrong");
let startQuizBtn = document.getElementById("start-quiz-btn");
let nextBtn = document.getElementById("next-btn");
let question_1 = [];
let question_2 = [];
let question_3 = [];
let question_4 = [];
let question_5 = [];
let questionCount = 0;
let gamesScore = 0;
let uEl = document.getElementById("ul-el") 
let saveScoreBtn = document.getElementById("save-scorebtn")
let savedScores = []
let savedScoresNumber = []
let nameInput = document.getElementById("name-input")
let scoreBtn = document.getElementById("score-btn")

// how to store the question asnwer and options.
let gameStuff = [question_1 =
{
    Question: "Commonly used data types DO NOT include:",
    answer: "option-c",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["strings", "booleans", "alerts", "numbers"]
},
question_2 =
{

    Question: "The condition of an if/else statment is enclosed within ____.",
    answer: "option-c",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: quotes", "b: curly brackets", "c: parentheses", "d. square brackets"]
},

question_3 =
{

    Question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
    answer: "option-b",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: JavaScript", "b: console.log ", "c: for loops", "d. terminal / bash"]
},

question_4 =
{

    Question: "Arrays in JavaScript can be used to store _____",
    answer: "option-d",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: numbers and strings", "b: other arrays", "c: booleans", "d. all of the above"]
},

question_5 =
{

    Question: "String values must be enclosed within _____ when being assigned to variables",
    answer: "option-c",
    option: ["option-a", "option-b", "option-c", "option-d",],
    //corract answer goes here so u can append?? or textcontent to the page
    optionShown: ["a: commas", "b: curly brackets", "c: quotes", "d. parentheses"]
}
]


// start game. 
startQuizBtn.addEventListener("click", function () {

    startQuizBtn.setAttribute("style", "visibility: hidden");


    playGame = true

    if (playGame == true) {
        setTime()
    }



    quizQuestionEl.innerHTML = gameStuff[questionCount].Question
    //how do I get the options onto the page?
    optionAel.innerHTML = gameStuff[questionCount].optionShown[0]
    optionBel.innerHTML = gameStuff[questionCount].optionShown[1]
    optionCel.innerHTML = gameStuff[questionCount].optionShown[2]
    optionDel.innerHTML = gameStuff[questionCount].optionShown[3]

    if (playGame == false) {
        gameOver()
        console.log("this means the game over function is going to run")
    }

})




// start button will only start with gamestuf[0].
// then there will be if 
//statment if statment for the next btn. if gamestuff = 0 then run the incrmatnation questionsCount++
//
// nextBtn.addEventListener("click", function () {

// })

//when the game starts remove the "start button"

// when im on question 5. I need it to stop the game
// check the time and translate the time left to points.
//bring up promt for the layer to enter their name and store theirpoints into local storage
//after done show the restart button.
// i think i also need to set when time is up display a message. you got zero points try agin
// show the restart button.
//when button is clicked. make the button glow is boxshadow


function checkAnswer() {
    if (gameStuff[questionCount].answer == optionChosen) {  //change this is a variable and base it on what the person chooses.
        addPts()
        console.log(optionChosen)
        setMessageTimer("Thats right")
        
        if (questionCount == 4){
            gameOver()
            return
        }

        questionCount++

        quizQuestionEl.innerHTML = gameStuff[questionCount].Question
        //how do I get the options onto the page?
        optionAel.innerHTML = gameStuff[questionCount].optionShown[0]
        optionBel.innerHTML = gameStuff[questionCount].optionShown[1]
        optionCel.innerHTML = gameStuff[questionCount].optionShown[2]
        optionDel.innerHTML = gameStuff[questionCount].optionShown[3]

    } else {
        setMessageTimer("Try Again")

        
        losePts()
    }

    function setMessageTimer(message) {
        var messageTimer = 3
        var messageInterval = setInterval(function () {
            messageTimer--
            rightWrongEl.textContent = message


            if (messageTimer < 1) {
                clearInterval(messageInterval)

                rightWrongEl.textContent = ""

            }
        }, 1000)
    }


}

//Score keeper

function addPts() {
   
    gameScoreEl.textContent = "Total Score: " + gamesScore

}

function losePts() {
    gameTimer = gameTimer - 10
    if (gameTimer < 1) {
        gameTimer = 0
        clearInterval(timerInterval)
    }
}


// now I need to make 1 button and when I press it. it will set a variable to the 
//answer the person chose.
//if a person clicks "option-a" it will set the variable  opionChosen to string "option-a"
// "option-b" it will set the variable  opionChosen to string "option-b"

//buttons for answers 
optionAel.addEventListener("click", function () {
    optionChosen = "option-a"
    console.log("this is option a ", optionChosen)
    checkAnswer();
});

optionBel.addEventListener("click", function () {
    optionChosen = "option-b"
    console.log("this is option b ", optionChosen)
    checkAnswer();
});

optionCel.addEventListener("click", function () {
    optionChosen = "option-c"
    console.log("this is option c ", optionChosen)
    checkAnswer();
});

optionDel.addEventListener("click", function () {
    optionChosen = "option-d"
    console.log("this is option d ", optionChosen)
    checkAnswer();
});



//example
function gameOver() {
    gamesScore = gameTimer
    playGame = false
    gameScoreEl.textContent = "Final score: " + gamesScore
    gameTimerel.textContent = ""
    quizQuestionEl.innerHTML = ""
    optionAel.innerHTML = ""
    optionBel.innerHTML = ""
    optionCel.innerHTML = ""
    optionDel.innerHTML = ""
    scoreBtn.classList.remove("hide")


    // if (gameScore > 1){
        
    // }
}


// game timer start
function setTime() {
    var timerInterval = setInterval(function () {
        gameTimer--;

       if (playGame == false){
        clearInterval(timerInterval)
        return
       }

        gameTimerel.textContent = "Time Left: " + gameTimer;
        if (gameTimer < 1) {
            clearInterval(timerInterval)
            playGame = false

            if (playGame == false) {
                gameOver()

            }


        }
    }, 1000)
}


console.log("this is the answer for number1", gameStuff[0].answer)
console.log("this is the answer for number2", gameStuff[1].answer)
console.log("this is the answer for number3", gameStuff[2].answer)
console.log("this is the answer for number4", gameStuff[3].answer)
console.log("this is the answer for number5", gameStuff[4].answer)


//end game
// save score function
saveScoreBtn.addEventListener("click", function() {
    savedScores.push(nameInput.value)
    savedScores.push(gamesScore)
    // savedScoresNumber.push(gamesScore)

   
 for (let i = 0; i < 2; i++) {
      uEl.innerHTML += "<li>" + savedScores[i] + "   Score: " + savedScores[i+1] + "</li>"
 }
     
       
    // savedScores = JSON.stringify(savedScores)
    localStorage.setItem("savedScores", JSON.stringify(savedScoresNumber))
    
        
    
                                        

}) 



//second video 10-20