const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  quizScore = 0;
  document.getElementById("right-answers").innerText = quizScore;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  setStatusClass(selectedButton, correct);

  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  if (correct) {
    quizScore++;
  }

  document.getElementById("right-answers").innerText = quizScore;

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// Web development questions
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Tool Markup Language", correct: false },
      { text: "HighText Machine Language", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Computer Style Sheets", correct: false },
    ],
  },
  {
    question: "Which tag is used for inserting a JavaScript file in HTML?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false },
    ],
  },
  {
    question: "Which of these is a JavaScript framework?",
    answers: [
      { text: "Laravel", correct: false },
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Flask", correct: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "font", correct: false },
      { text: "class", correct: false },
      { text: "style", correct: true },
      { text: "styles", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    answers: [
      { text: "fgcolor", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "font-color", correct: false },
    ],
  },
  {
    question: "What does DOM stand for in web development?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Display Object Model", correct: false },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Document Order Model", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<para>", correct: false },
      { text: "<paragraph>", correct: false },
      { text: "<text>", correct: false },
    ],
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Applied Program Interaction", correct: false },
      { text: "Application Protocol Interface", correct: false },
      { text: "Advanced Programming Instruction", correct: false },
    ],
  },
  {
    question: "Which protocol is used to load websites?",
    answers: [
      { text: "HTTP", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "SSH", correct: false },
    ],
  },
];
