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

// --- Zmienne dla pytań typu "matching" ---
let matchingLeftItems = [];
let matchingRightItems = [];
let userMatches = new Map(); // Map<leftItemId, rightItemId>
let selectedLeftItemId = null;


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
    userMatches.clear();
    selectedLeftItemId = null;
    matchingLeftItems = [];
    matchingRightItems = [];

    const question = shuffledQuestions[currentQuestionIndex];

    // Reset button text
    isAnswerChecked = false;
    submitBtn.textContent = "Sprawdź odpowiedź";

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

    // --- LOGIKA RENDEROWANIA ---

    // Typ "matching"
    if (question.type === 'matching' && question.match_pairs) {
        renderMatchingQuestion(question);
        return;
    }

    // Typy standardowe (choice / multi-choice)
    let isMultipleChoice = false;

    if (question.type === 'multi-choice') {
        isMultipleChoice = true;
    } else if (question.type === 'choice') {
        isMultipleChoice = false;
    } else {
        // Fallback dla starego formatu
        isMultipleChoice = Array.isArray(question.poprawna);
    }

    // Obsługa pytań z jedną opcją (np. slajdy informacyjne)
    if (question.opcje && question.opcje.length === 1) {
        isAnswerChecked = true;
        submitBtn.textContent = (currentQuestionIndex === shuffledQuestions.length - 1) ? "Zobacz wyniki" : "Następne pytanie";
    }

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
        // Dla slajdów informacyjnych
        score += 1;
    }
}

function renderMatchingQuestion(question) {
    const pairs = question.match_pairs;

    // Prepare items with IDs
    matchingLeftItems = pairs.map((pair, index) => ({ id: `L${index}`, text: pair.left, originalIndex: index }));
    matchingRightItems = pairs.map((pair, index) => ({ id: `R${index}`, text: pair.right, originalIndex: index }));

    // Shuffle independently
    shuffleArray(matchingLeftItems);
    shuffleArray(matchingRightItems);

    const container = document.createElement('div');
    container.className = 'matching-container';

    // Left Column
    const leftCol = document.createElement('div');
    leftCol.className = 'matching-column';

    matchingLeftItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'matching-item left';
        div.dataset.id = item.id;
        div.textContent = item.text;

        // Badge container
        const badge = document.createElement('span');
        badge.className = 'match-badge';
        div.appendChild(badge);

        div.addEventListener('click', () => handleLeftItemClick(item.id, div));
        leftCol.appendChild(div);
    });

    // Right Column
    const rightCol = document.createElement('div');
    rightCol.className = 'matching-column';

    matchingRightItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'matching-item right';
        div.dataset.id = item.id;
        div.textContent = item.text;

        // Badge container
        const badge = document.createElement('span');
        badge.className = 'match-badge';
        div.appendChild(badge);

        div.addEventListener('click', () => handleRightItemClick(item.id, div));
        rightCol.appendChild(div);
    });

    container.appendChild(leftCol);
    container.appendChild(rightCol);
    optionsContainer.appendChild(container);
}

function handleLeftItemClick(id, element) {
    if (isAnswerChecked) return;

    // Deselect previous
    if (selectedLeftItemId) {
        const prev = document.querySelector(`.matching-item.left[data-id="${selectedLeftItemId}"]`);
        if (prev) prev.classList.remove('selected');
    }

    // Select new (allow toggle off if clicking same?? No, user asked for: select left, then select right)
    // If clicking same, just keep selected or deselect? Let's just select.
    selectedLeftItemId = id;
    element.classList.add('selected');
}

function handleRightItemClick(rightId, element) {
    if (isAnswerChecked) return;

    if (!selectedLeftItemId) {
        // Animacja shake lub alert?
        element.classList.add('incorrect');
        setTimeout(() => element.classList.remove('incorrect'), 400);
        return;
    }

    // Check if this right item is already matched with SOMEONE ELSE
    // If so, verify if we want to steal it?
    // User logic: "User can change his decission".
    // So yes, we just update the map.

    // Remove match for the current Left Item if it existed (re-pairing)
    // Also remove match if any other Left Item was pointing to THIS Right Item?
    // Yes, a right item can only be matched to ONE left item.

    // 1. Remove any existing match pointing to 'rightId'
    for (let [l, r] of userMatches.entries()) {
        if (r === rightId) {
            userMatches.delete(l);
            // Updating UI for that left item
            updateMatchingUI(l);
        }
    }

    // 2. Set new match
    userMatches.set(selectedLeftItemId, rightId);

    // 3. Update UI
    updateMatchingUI(selectedLeftItemId);
    updateMatchingUI(); // Refresh all badges just in case

    // 4. Deselect Left
    const leftElem = document.querySelector(`.matching-item.left[data-id="${selectedLeftItemId}"]`);
    if (leftElem) leftElem.classList.remove('selected');
    selectedLeftItemId = null;
}

// --- Paleta kolorów dla par ---
const pairColors = [
    { bg: '#e3f2fd', border: '#90caf9', text: '#212529' }, // Blue
    { bg: '#e8f5e9', border: '#a5d6a7', text: '#212529' }, // Green
    { bg: '#fff3e0', border: '#ffcc80', text: '#212529' }, // Orange
    { bg: '#f3e5f5', border: '#ce93d8', text: '#212529' }, // Purple
    { bg: '#ffebee', border: '#ef9a9a', text: '#212529' }, // Red
    { bg: '#e0f2f1', border: '#80cbc4', text: '#212529' }, // Teal
    { bg: '#fffde7', border: '#fff59d', text: '#212529' }, // Yellow
    { bg: '#e8eaf6', border: '#9fa8da', text: '#212529' }, // Indigo
    { bg: '#fbe9e7', border: '#ffab91', text: '#212529' }, // Deep Orange
    { bg: '#f9fbe7', border: '#e6ee9c', text: '#212529' }  // Lime
];

// --- Paleta kolorów dla par (Tryb Ciemny) ---
const pairColorsDark = [
    { bg: '#1565c0', border: '#0159a1ff', text: '#e0e0e0' }, // Dark Blue
    { bg: '#2e7d32', border: '#018b05ff', text: '#e0e0e0' }, // Dark Green
    { bg: '#fd780bff', border: '#cc7b03ff', text: '#e0e0e0' }, // Dark Orange
    { bg: '#7b1fa2', border: '#8b00a3ff', text: '#e0e0e0' }, // Dark Purple
    { bg: '#c62828', border: '#910000ff', text: '#e0e0e0' }, // Dark Red
    { bg: '#00695c', border: '#018b05ff', text: '#e0e0e0' }, // Dark Teal
    { bg: '#f9a825', border: '#cc7b03ff', text: '#121212' }, // Dark Yellow (Keep dark text here)
    { bg: '#283593', border: '#8b00a3ff', text: '#e0e0e0' }, // Dark Indigo
    { bg: '#d84315', border: '#cc7b03ff', text: '#e0e0e0' }, // Dark Deep Orange
    { bg: '#9e9d24', border: '#aec200ff', text: '#121212' }  // Dark Lime (Keep dark text here)
];


function updateMatchingUI() {
    // Determine current theme
    const isDarkMode = rootHtmlElement.classList.contains('dark-mode');
    const colors = isDarkMode ? pairColorsDark : pairColors;
    // Helper to get pair number. 
    // We can assign a number (1, 2, 3...) based on the Left Item's position in the rendered list?
    // Or just iterate userMatches.

    // Reset all items paired status and styles
    const resetItem = (el) => {
        el.classList.remove('paired');
        el.querySelector('.match-badge').textContent = '';
        el.style.backgroundColor = '';
        el.style.borderColor = '';
        el.style.color = '';
    };

    document.querySelectorAll('.matching-item.right').forEach(resetItem);
    document.querySelectorAll('.matching-item.left').forEach(resetItem);

    // Assign Pair Numbers based on Left Column order (visual order) to keep it clean and stable
    const leftElements = document.querySelectorAll('.matching-item.left');

    leftElements.forEach((leftEl, index) => {
        const leftId = leftEl.dataset.id;
        if (userMatches.has(leftId)) {
            const rightId = userMatches.get(leftId);
            const rightEl = document.querySelector(`.matching-item.right[data-id="${rightId}"]`);

            if (rightEl) {
                // Use index directly for stable colors and numbers
                const colorSet = colors[index % colors.length];
                const badgeNumber = index + 1;

                // Apply styles to Left Item
                leftEl.classList.add('paired');
                leftEl.querySelector('.match-badge').textContent = badgeNumber;
                leftEl.style.backgroundColor = colorSet.bg;
                leftEl.style.borderColor = colorSet.border;
                leftEl.style.color = colorSet.text;

                // Apply styles to Right Item
                rightEl.classList.add('paired');
                rightEl.querySelector('.match-badge').textContent = badgeNumber;
                rightEl.style.backgroundColor = colorSet.bg;
                rightEl.style.borderColor = colorSet.border;
                rightEl.style.color = colorSet.text;
            }
        }
    });
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

    const question = shuffledQuestions[currentQuestionIndex];

    // --- VALIDATION FOR MATCHING ---
    if (question.type === 'matching') {
        // Validate
        // Check if all left items are matched
        if (userMatches.size < matchingLeftItems.length) {
            alert("Połącz wszystkie elementy!");
            return;
        }

        isAnswerChecked = true;
        submitBtn.textContent = (currentQuestionIndex === shuffledQuestions.length - 1) ? "Zobacz wyniki" : "Następne pytanie";

        let allCorrect = true;

        matchingLeftItems.forEach(leftItem => {
            const userRightId = userMatches.get(leftItem.id);
            const rightItem = matchingRightItems.find(r => r.id === userRightId);

            // Validation
            const leftEl = document.querySelector(`.matching-item.left[data-id="${leftItem.id}"]`);
            const rightEl = document.querySelector(`.matching-item.right[data-id="${userRightId}"]`);

            const isPairCorrect = rightItem && leftItem.originalIndex === rightItem.originalIndex;

            if (isPairCorrect) {
                leftEl.classList.add('correct');
                // rightEl.classList.add('correct'); // Optional handling for right side
            } else {
                allCorrect = false;
                leftEl.classList.add('incorrect');
                // rightEl.classList.add('incorrect');
            }
        });

        // Handling right side coloring (needs care because right side doesn't know WHO matched to it easily without map)
        matchingRightItems.forEach(rightItem => {
            // Find who matched to this right item
            let matchedLeftId = null;
            for (let [l, r] of userMatches.entries()) {
                if (r === rightItem.id) matchedLeftId = l;
            }

            if (matchedLeftId) {
                const leftItem = matchingLeftItems.find(l => l.id === matchedLeftId);
                const isPairCorrect = leftItem.originalIndex === rightItem.originalIndex;
                const rightEl = document.querySelector(`.matching-item.right[data-id="${rightItem.id}"]`);

                if (isPairCorrect) {
                    rightEl.classList.add('correct');
                } else {
                    rightEl.classList.add('incorrect');
                }
            }
        });

        if (allCorrect) {
            score++;
        }

        return;
    }

    // --- EXISTING VALIDATION FOR CHOICE ---

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

    // 4. Odśwież kolory dopasowania (jeśli jesteśmy w pytaniu typu matching)
    if (typeof updateMatchingUI === 'function') {
        updateMatchingUI();
    }
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