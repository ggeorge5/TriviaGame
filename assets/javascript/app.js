function buildQuiz() {
   
    const output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answers = [];

      
      for (letter in currentQuestion.answers) {
        
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }
  

  function showResults() {
   
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
      stop();
    });


    resultsContainer.innerHTML = "you got: " + `${numCorrect} correct out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  const myQuestions = [
    {
      question: "What number did Len Dawnson wear?",
      answers: {
        a: "5",
        b: "10",
        c: "16",
        d: "20"
      },
      correctAnswer: "c"
    },
    {
      question: "How many Super Bowls have the Chiefs won?",
      answers: {
        a: "0",
        b: "2",
        c: "3",
        d: "1"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the Stadium called that the Chiefs play at?",
      answers: {
        a: "Arrowhead Stadium",
        b: "Chiefs Family Stadium",
        c: "Patrick Mahome",
        d: "Lamar Hunt Stadium"
      },
      correctAnswer: "a"
    },
    {
      question: "How many seasons has the Chiefs franchise played in?",
      answers: {
        a: "90",
        b: "70",
        c: "60",
        d: "55"
      },
      correctAnswer: "c"
    }
  ];

 
  buildQuiz();


  submitButton.addEventListener("click", showResults);




  var number = 30;
  var intervalId;
  
  $("#start").on("click", run);
      
  
  function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      buildQuiz();
      }
      
  function decrement () {
      number--;
  
  
  $("#timer").text(number);
      if (number === 0) {
          stop();
          alert('Times Up! ' + ' See your score below! ' + ' Thanks for playing!');
          showResults();
          }
      }

  function stop() {
      clearInterval(intervalId);
      }
