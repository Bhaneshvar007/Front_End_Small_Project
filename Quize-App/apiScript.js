// Your API URL
const apiUrl = "https://opentdb.com/api.php?amount=25&category=9&difficulty=easy&type=multiple";

let questions = []; // Will store fetched questions
let currIndex = 0;
let score = 0;

// Function to transform each question to the required format
function transformQuestion(questionData) {
    const answers = [
        ...questionData.incorrect_answers.map(answer => ({ text: answer, correct: false })),
        { text: questionData.correct_answer, correct: true }
    ];

    return {
        question: questionData.question,
        answers: answers
    };
}

// Fetch data from the API and convert it
async function fetchAndConvertData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        questions = data.results.map(transformQuestion);
        startQuiz();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function startQuiz() {
    currIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions();
}

// DOM elements
const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers");
const nextBtn = document.querySelector(".Next-btn");

function showQuestions() {
    resetState();
    const currQuestion = questions[currIndex];
    let questionNo = currIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = ans.text;
        answersEl.appendChild(button);

        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAns);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild);
    }
}

function selectAns(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;  // Increment score if correct
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answersEl.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function handleButton() {
    currIndex++;
    if (currIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currIndex < questions.length) {
        handleButton();
    } else {
        fetchAndConvertData();  
    }
});

fetchAndConvertData();
