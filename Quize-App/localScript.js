let questions = [
    {
        question: "The OOP is stand for the____ ?",
        answers: [
            { text: "Oracle object programming", correct: false },
            { text: "Object outstanded Programming", correct: false },
            { text: "Object orianted programming", correct: true },
            { text: "None of this", correct: false },
        ]
    },
    {
        question: "How many types of inheritance in C++ language ?",
        answers: [
            { text: "5", correct: true },
            { text: "2", correct: false },
            { text: "0", correct: false },
            { text: "1", correct: false },
        ]
    },
    {
        question: "What will be output of 5 + '5'_____",
        answers: [
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "-55", correct: false },
            { text: "55", correct: true },
        ]
    },
    {
        question: "C language is a...?",
        answers: [
            { text: "Programming language", correct: false },
            { text: "Procedural language", correct: false },
            { text: "Low-lavel language", correct: false },
            { text: "All of this", correct: true },
        ]
    },
    {
        question: "What is the encapsulation....?",
        answers: [
            { text: "Refrancer the data", correct: false },
            { text: "Stored the data", correct: false },
            { text: "Shared the data", correct: false },
            { text: "Hiding the data", correct: true },
        ]
    },
    {
        question: "How many lages of cow ?",
        answers: [
            { text: "There is four lages", correct: true },
            { text: "There is one lages", correct: false },
            { text: "There is two lages", correct: false },
            { text: "There is three lages", correct: false },
        ]
    },
];



//  handling the data 


const questionEl = document.querySelector(".question");
const answers = document.querySelector(".answers");
const nextBtn = document.querySelector(".Next-btn");

let currIndex = 0;
let score = 0;

function startQuize() {
    currIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions();
}

function showQuestions() {
    resetState();
    const currQuestion = questions[currIndex];
    let questionNo = currIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = ans.text;
        answers.appendChild(button);

        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAns);
    });

}

function resetState() {
    nextBtn.style.display = "none";
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}

function selectAns(e) {
    const selectBtn = e.target;

    const isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else { 
        selectBtn.classList.add("incorrect");
    }

    Array.from(answers.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

        nextBtn.style.display = "block";
    });
}


function handleButton() {
    currIndex++;
    if (currIndex < questions.length) {
        showQuestions();
    }
    else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length} !`;

    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currIndex < questions.length) {
        handleButton();
    }
    else {
        startQuize();
    }
})

startQuize();
