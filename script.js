const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'WHAT DAY DID GOD CREATE MAN?',
    answers: [
      { text: '7th Day', correct: false },
      { text: '6th Day', correct: true },
      { text: '2nd Day', correct: false },
      { text: '4th Day', correct: false }
    ]
  },
  {
    question: 'Whom of these is not a prophet?',
    answers: [
      { text: 'Deborah', correct: true },
      { text: 'Amos', correct: true },
      { text: 'Ezekiel', correct: true },
      { text: 'Joel', correct: true },
      { text: 'Aaron', correct: true },
      { text: 'Enoch', correct: true }
    ]
  },
  {
    question: 'WHERE WAS JESUS BORN?',
    answers: [
      { text: 'Judea', correct: false },
      { text: 'Bethlehem', correct: true },
      { text: 'Egypt', correct: false },
      { text: 'General Hospital, Lagos', correct: false }
    ]
  },
  {
    question: 'What gave Samson his strength?',
    answers: [
      { text: 'His clothes', correct: false },
      { text: 'His Hair', correct: true },
      { text: 'Type of food he ate', correct: false },
      { text: 'Types of songs he danced to', correct: false }
    ]
  },
  {
    question: 'What did David use to defeat Goliath?',
    answers: [
      { text: 'A gun', correct: false },
      { text: 'His hands', correct: false },
      { text: 'A sword', correct: false },
      { text: 'A sling and a stone', correct: true }
    ]
  },
  {
    question: 'How many plagues did God send to Egypt?',
    answers: [
      { text: '5', correct: false },
      { text: '10', correct: true },
      { text: '4', correct: false },
      { text: '7', correct: false }
    ]
  },
  {
    question: '"Thou shall not steal" is the____?',
    answers: [
      { text: '3rd commandment', correct: false },
      { text: '7th commandment', correct: false },
      { text: '8th commandment', correct: true },
      { text: '5th commandment', correct: false }
    ]
  },
  {
    question: 'Jesus fasted for____?',
    answers: [
      { text: '40 days', correct: false },
      { text: '40 days and 40 nights', correct: true },
      { text: '40 nights', correct: false },
      { text: '12 days', correct: false }
    ]
  },
  {
    question: 'Jesus was baptized in_____?',
    answers: [
      { text: 'Atlantic ocean', correct: false },
      { text: 'Pacific', correct: false },
      { text: 'River ogun', correct: false },
      { text: 'River Jordan', correct: true }
    ]
  },
  {
    question: 'John was a____',
    answers: [
      { text: 'Tax collector', correct: false },
      { text: 'Poet', correct: false },
      { text: 'Baptizer', correct: true },
      { text: 'Doctor', correct: false }
    ]
  },
  {
    question: 'Lazarus was dead for ___ days before Jesus arrived?',
    answers: [
      { text: '3 days', correct: false },
      { text: '4 days', correct: true },
      { text: '2 days', correct: false },
      { text: '5 days', correct: false }
    ]
  }
]