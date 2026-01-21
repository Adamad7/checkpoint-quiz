// --- Pobieranie elementów z DOM ---
const quizContainer = document.getElementById('quiz-container');
const questionWrapper = document.getElementById('question-wrapper');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const progressBarFill = document.getElementById('progress-bar-fill');

const resultsWrapper = document.getElementById('results-wrapper');
const scoreText = document.getElementById('score-text');
const detailsText = document.getElementById('details-text');
const restartBtn = document.getElementById('restart-btn');
const menuBtn = document.getElementById('menu-btn');

// NOWE ELEMENTY
const examSelection = document.getElementById('exam-selection');
const examList = document.getElementById('exam-list');

// NOWE ELEMENTY
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const rootHtmlElement = document.documentElement; // Tag <html>

// --- Stan quizu ---
let currentExamQuestions = [];
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswerChecked = false;


// --- Funkcja pomocnicza: Tasowanie tablicy (Fisher-Yates) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// --- Funkcja inicjalizująca wybór egzaminu ---
function initExamSelection() {
    examList.innerHTML = '';
    examsData.forEach(exam => {
        const btn = document.createElement('button');
        btn.textContent = exam.title;
        btn.className = 'exam-btn'; // Możesz dodać style w CSS
        btn.addEventListener('click', () => selectExam(exam));
        examList.appendChild(btn);
    });

    examSelection.classList.remove('hide');
    quizContainer.classList.add('hide');
    resultsWrapper.classList.add('hide');
    menuBtn.classList.add('hide'); // Ukryj przycisk menu na ekranie wyboru
}

function selectExam(exam) {
    currentExamQuestions = exam.questions;
    examSelection.classList.add('hide');
    quizContainer.classList.remove('hide');
    menuBtn.classList.remove('hide'); // Pokaż przycisk menu po wybraniu egzaminu
    startQuiz();
}
// --- Funkcja rozpoczynająca quiz ---


// --- Funkcja wyświetlająca pytanie ---
// --- NOWY ELEMENT ---
const questionCounter = document.getElementById('question-counter');


function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    isAnswerChecked = false;

    shuffledQuestions = [...currentExamQuestions];
    shuffleArray(shuffledQuestions);

    resultsWrapper.classList.add('hide');
    questionWrapper.classList.remove('hide');

    showNextQuestion();
}

// --- Funkcja wyświetlająca pytanie ---
function showNextQuestion() {
    optionsContainer.innerHTML = '';

    const question = shuffledQuestions[currentQuestionIndex];

    // Obsługa pytań z jedną opcją (np. slajdy informacyjne)
    if (question.opcje.length === 1) {
        isAnswerChecked = true;
        submitBtn.textContent = (currentQuestionIndex === shuffledQuestions.length - 1) ? "Zobacz wyniki" : "Następne pytanie";
    } else {
        isAnswerChecked = false;
        submitBtn.textContent = "Sprawdź odpowiedź"; // Domyślny tekst
    }

    questionText.textContent = question.pytanie;

    // Aktualizacja licznika
    questionCounter.textContent = `Pytanie ${currentQuestionIndex + 1} z ${shuffledQuestions.length}`;

    // --- Obsługa obrazka ---
    const questionImage = document.getElementById('question-image');
    if (question.image && question.image.trim() !== "") {
        questionImage.src = question.image;
        questionImage.classList.remove('hide');
    } else {
        questionImage.classList.add('hide');
        questionImage.src = "";
    }

    const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100; // Pasek postępu
    progressBarFill.style.width = `${progressPercent}%`;

    const isMultipleChoice = Array.isArray(question.poprawna);
    const inputType = isMultipleChoice ? 'checkbox' : 'radio';

    const shuffledOptions = [...question.opcje];
    shuffleArray(shuffledOptions);

    // Jeśli jest tylko jedna opcja, nie wyświetlamy jej (slajd informacyjny)
    if (question.opcje.length > 1) {
        shuffledOptions.forEach(option => {
            const optionId = `option-${currentQuestionIndex}-${option.replace(/\s+/g, '')}`;

            const label = document.createElement('label');
            label.className = 'option-label';
            label.htmlFor = optionId;

            const input = document.createElement('input');
            input.type = inputType;
            input.id = optionId;
            input.name = 'option';
            input.value = option;

            // Blokada zmiany odpowiedzi po sprawdzeniu (opcjonalne, ale dobre dla UX)
            input.addEventListener('change', () => {
                if (isAnswerChecked) input.checked = !input.checked;
            });


            const customInput = document.createElement('span');
            customInput.className = 'custom-input';

            const optionText = document.createTextNode(option);

            label.appendChild(input);
            label.appendChild(customInput);
            label.appendChild(optionText);
            optionsContainer.appendChild(label);
        });
    }
    else {
        score += 1;
    }
}

// --- Funkcja sprawdzająca odpowiedź ---
function checkAnswer() {
    if (isAnswerChecked) {
        // Jeśli odpowiedź już sprawdzona, przejdź do następnego pytania
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showNextQuestion();
        } else {
            showResults();
        }
        return;
    }

    // SPRAWDZANIE ODPOWIEDZI
    const question = shuffledQuestions[currentQuestionIndex];
    const selectedInputs = document.querySelectorAll('input[name="option"]:checked');

    if (selectedInputs.length === 0) {
        alert("Musisz wybrać przynajmniej jedną odpowiedź!");
        return;
    }

    isAnswerChecked = true; // Oznacz jako sprawdzoną
    submitBtn.textContent = (currentQuestionIndex === shuffledQuestions.length - 1) ? "Zobacz wyniki" : "Następne pytanie";

    const userAnswers = Array.from(selectedInputs).map(input => input.value);
    const correctAnswers = Array.isArray(question.poprawna) ? question.poprawna : [question.poprawna];

    // Logika poprawności
    const isCorrect = userAnswers.length === correctAnswers.length &&
        userAnswers.sort().every((answer, index) =>
            answer === correctAnswers.sort()[index]
        );

    if (isCorrect) {
        score++;
    }

    // Wyświetlanie feedbacku
    const allLabels = document.querySelectorAll('.option-label');
    allLabels.forEach(label => {
        const input = label.querySelector('input');
        const isSelected = input.checked;
        const isAnswerCorrect = correctAnswers.includes(input.value);

        // Reset klas
        label.classList.remove('correct', 'incorrect', 'correct-answer');

        if (isSelected) {
            if (isAnswerCorrect) {
                label.classList.add('correct');
            } else {
                label.classList.add('incorrect');
            }
        }

        // Zawsze podświetl poprawną odpowiedź (jeśli nie została wybrana lub zaznaczona źle)
        if (isAnswerCorrect && !isSelected) {
            label.classList.add('correct-answer');
        }

        // Zablokuj inputy
        input.disabled = true;
        label.style.cursor = 'default';
    });

    // Aktualizacja paska postępu na koniec pytania (opcjonalnie)
    const progressPercent = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
}

// --- Funkcja pokazująca wyniki ---
function showResults() {
    questionWrapper.classList.add('hide');
    resultsWrapper.classList.remove('hide');

    const totalQuestions = shuffledQuestions.length;
    scoreText.textContent = `Twój wynik: ${score} / ${totalQuestions}`;

    let details = `(Odpowiedziałeś poprawnie na ${score} z ${totalQuestions} pytań.)`;
    detailsText.textContent = details;
}

// --- NOWA FUNKCJA: Aktualizacja ikony przycisku motywu ---
function updateThemeButtonIcon() {
    if (rootHtmlElement.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️'; // Słońce, jeśli jest ciemno (aby przełączyć na jasno)
    } else {
        themeToggleBtn.textContent = '🌙'; // Księżyc, jeśli jest jasno (aby przełączyć na ciemno)
    }
}

// --- NOWA FUNKCJA: Przełączanie motywu ---
function toggleTheme() {
    // 1. Przełącz klasę na tagu <html>
    rootHtmlElement.classList.toggle('dark-mode');

    // 2. Zapisz wybór w localStorage
    let currentTheme;
    if (rootHtmlElement.classList.contains('dark-mode')) {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme);

    // 3. Zaktualizuj ikonę przycisku
    updateThemeButtonIcon();
}

// --- Nasłuchiwanie na zdarzenia ---
document.addEventListener('DOMContentLoaded', () => {
    initExamSelection();
    updateThemeButtonIcon(); // Ustaw poprawną ikonę przycisku przy starcie
});

submitBtn.addEventListener('click', checkAnswer);
restartBtn.addEventListener('click', startQuiz);
menuBtn.addEventListener('click', initExamSelection);
themeToggleBtn.addEventListener('click', toggleTheme); // NOWY LISTENER