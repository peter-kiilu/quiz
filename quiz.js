// List of questions and answers
const quiz = [
    { question: "What is the capital of Tuvalu?", answer: "Funafuti" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is your Best Friends name?", answer: "This PC" },
    { question: "When is your birthday?", answer: "Yesterday" },
    { question: "What is the color of the sky?", answer: "Blue" }
];

let currentQuestion = 0; // Track current question

// Function to display the current question
function displayQuestion() {
    document.getElementById('question').textContent = quiz[currentQuestion].question;
    document.getElementById('feedback').textContent = "";
    document.getElementById('answer').value = "";
}

// Function to check if the answer is correct
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === quiz[currentQuestion].answer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct!";
    } else {
        document.getElementById('feedback').textContent = "Wrong! The correct answer is " + quiz[currentQuestion].answer;
    }
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        displayQuestion();
    } else {
        document.getElementById('question').textContent = "You've completed the quiz!";
        document.getElementById('answer').style.display = 'none';
        document.querySelector('button[onclick="submitAnswer()"]').style.display = 'none';
        document.querySelector('button[onclick="nextQuestion()"]').style.display = 'none';
    }
}

// Initialize quiz with first question
displayQuestion();
