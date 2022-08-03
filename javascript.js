

var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
        title:
          'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
      },
      {
        title:
          'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
      },
    ];
    var submitbtn = document.getElementById ("submit")
    var initialsEl = document.getElementById ("initials")
    var finalScore = document.getElementById ("finalScore")
    var endScreen = document.getElementById ("EndScreen")
    var startpage = document.getElementById ("startpage");
    var questionsEl = document.getElementById ("questions");
    var questionEl = document.getElementById ("question");
    var answers = document.getElementById ("answers");
    var timeEL = document.getElementById ("time");
    var startbutton = document.getElementById ("start");
    var timeInterval;
    var time = 60; 
    var index = 0
    startbutton.addEventListener ("click",startQuiz)
    function startQuiz () {
      startpage.setAttribute ("class", "hide")
      timeInterval = setInterval (countdown, 1000)
      timeEL.textContent = time
      showQuestion ()
    };
    function countdown () {
      time -- 
      timeEL.textContent = time
      if ( time <= 0){
        endQuiz ()
      }
    };
    function showQuestion () {
      var currentQuestion = questions[index]
      questionEl.textContent = currentQuestion.title
      answers.innerHTML = ""
      for (var i = 0; i <currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i]
        var choiceBtn = document.createElement ("button")
        choiceBtn.textContent = choice
        choiceBtn.onclick = checkAnswer;
        choiceBtn.setAttribute ("value" , choice)
        answers.appendChild (choiceBtn)
    }};
    function checkAnswer () {
      if(this.value !== questions[index].answer) {
        time -= 10
        timeEL.textContent = time
        console.log ("incorrect")
        if (time < 0) {
          endQuiz ()
        }
      }
      else {
      console.log ("correct")
      }
      index++
      if (index >= questions.length) {
        endQuiz () 
      }
      else {
        showQuestion ()
      }
    };
    
    function endQuiz () { 
      clearInterval (timeInterval)
      questionsEl.setAttribute ("class", "hide")
      endScreen.classList.remove ("hide")
      finalScore.textContent = time
    };
    function saveHighScore () {
      var initials = initialsEl.value 
      if (initials !== "") {
        var scores = JSON.parse (localStorage.getItem("scores")) || []
        var newScore = {
          score:time,
          initials:initials
        }
        scores.push (newScore)
        localStorage.setItem ("scores" , JSON.stringify (scores))
      }
      window.location.href = "scores.html"
    };
    submitbtn.addEventListener ("click" , saveHighScore)