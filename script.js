// Developed By: [[ R0HiiT_YadaV ]]

const subjects = [
    { name: "Hindi", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) },
    { name: "English", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) },
    { name: "Sociology", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) },
    { name: "Physical Education and Yoga", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) },
    { name: "Fitter Theory", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) }
];

const allQuestions = {
    "Hindi": {
        "Chapter 1": [{q: "अनुवाद का अर्थ क्या है?", options: ["पुनः कथन", "लेखन", "श्रवण", "पठन"], a: "पुनः कथन"}, {q: "स्रोत भाषा किसे कहते हैं?", options: ["जिससे अनुवाद हो", "जिसमें अनुवाद हो", "विदेशी भाषा", "मातृभाषा"], a: "जिससे अनुवाद हो"}],
        "Chapter 2": [{q: "तर्जुमा किस भाषा का शब्द है?", options: ["अरबी", "हिंदी", "संस्कृत", "अंग्रेजी"], a: "अरबी"}, {q: "अनुवाद की प्रक्रिया के मुख्य चरण?", options: ["3", "5", "7", "2"], a: "3"}],
        "Chapter 3": [{q: "H3 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H3 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 4": [{q: "H4 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H4 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 5": [{q: "H5 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H5 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 6": [{q: "H6 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H6 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 7": [{q: "H7 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H7 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 8": [{q: "H8 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H8 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 9": [{q: "H9 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H9 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 10": [{q: "H10 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "H10 Q2", options: ["A", "B", "C", "D"], a: "B"}]
    },
    "English": {
        "Chapter 1": [{q: "Who wrote 'Pinjar'?", options: ["Amrita Pritam", "Tagore", "Premchand", "Khushwant Singh"], a: "Amrita Pritam"}, {q: "Theme of Pinjar?", options: ["Partition", "War", "Politics", "Nature"], a: "Partition"}],
        "Chapter 2": [{q: "E2 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E2 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 3": [{q: "E3 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E3 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 4": [{q: "E4 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E4 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 5": [{q: "E5 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E5 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 6": [{q: "E6 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E6 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 7": [{q: "E7 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E7 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 8": [{q: "E8 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E8 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 9": [{q: "E9 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E9 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 10": [{q: "E10 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "E10 Q2", options: ["A", "B", "C", "D"], a: "B"}]
    },
    "Sociology": {
        "Chapter 1": [{q: "Father of Sociology?", options: ["Auguste Comte", "Aristotle", "Plato", "Marx"], a: "Auguste Comte"}, {q: "Sociology is study of?", options: ["Society", "Plants", "Stars", "History"], a: "Society"}],
        "Chapter 2": [{q: "S2 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S2 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 3": [{q: "S3 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S3 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 4": [{q: "S4 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S4 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 5": [{q: "S5 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S5 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 6": [{q: "S6 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S6 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 7": [{q: "S7 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S7 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 8": [{q: "S8 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S8 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 9": [{q: "S9 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S9 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 10": [{q: "S10 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "S10 Q2", options: ["A", "B", "C", "D"], a: "B"}]
    },
    "Physical Education and Yoga": {
        "Chapter 1": [{q: "शारीरिक शिक्षा का लक्ष्य?", options: ["सर्वांगीण विकास", "दौड़ना", "पढाई", "कुश्ती"], a: "सर्वांगीण विकास"}, {q: "Sound mind in sound body?", options: ["Plato", "Aristotle", "Gandhi", "Nehru"], a: "Aristotle"}],
        "Chapter 2": [{q: "P2 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P2 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 3": [{q: "P3 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P3 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 4": [{q: "P4 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P4 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 5": [{q: "P5 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P5 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 6": [{q: "P6 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P6 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 7": [{q: "P7 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P7 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 8": [{q: "P8 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P8 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 9": [{q: "P9 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P9 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 10": [{q: "P10 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "P10 Q2", options: ["A", "B", "C", "D"], a: "B"}]
    },
    "Fitter Theory": {
        "Chapter 1": [{q: "Bench vice size?", options: ["Jaw width", "Spindle", "Handle", "Body"], a: "Jaw width"}, {q: "Marking tool?", options: ["Scriber", "Hammer", "Chisel", "Saw"], a: "Scriber"}],
        "Chapter 2": [{q: "F2 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F2 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 3": [{q: "F3 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F3 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 4": [{q: "F4 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F4 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 5": [{q: "F5 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F5 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 6": [{q: "F6 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F6 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 7": [{q: "F7 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F7 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 8": [{q: "F8 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F8 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 9": [{q: "F9 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F9 Q2", options: ["A", "B", "C", "D"], a: "B"}],
        "Chapter 10": [{q: "F10 Q1", options: ["A", "B", "C", "D"], a: "A"}, {q: "F10 Q2", options: ["A", "B", "C", "D"], a: "B"}]
    }
};

let currentQuestions = [];
let userAnswers = {};
let currentIndex = 0;

function init() {
    const grid = document.getElementById('subject-grid');
    if(!grid) return;
    grid.innerHTML = '';
    subjects.forEach(sub => {
        const btn = document.createElement('button');
        btn.innerText = sub.name;
        btn.onclick = () => showChapters(sub);
        grid.appendChild(btn);
    });
}

function showChapters(sub) {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('chapter-screen').classList.remove('hidden');
    const grid = document.getElementById('chapter-grid');
    grid.innerHTML = '';
    sub.chapters.forEach(chap => {
        const btn = document.createElement('button');
        btn.innerText = chap;
        btn.onclick = () => startQuiz(sub.name, chap);
        grid.appendChild(btn);
    });
}

function startQuiz(subName, chapName) {
    const raw = allQuestions[subName][chapName] || [];
    // Shuffle questions and take only 30 (yahan 2 hain to 2 hi aayenge)
    currentQuestions = raw.sort(() => 0.5 - Math.random()).slice(0, 30);
    currentIndex = 0;
    userAnswers = {};
    document.getElementById('chapter-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('progress').innerText = `Question: ${currentIndex + 1}/${currentQuestions.length}`;
    document.getElementById('question-text').innerText = q.q;
    const optContainer = document.getElementById('options-container');
    optContainer.innerHTML = '';
    
    // Shuffle Options Order (Requirement #10)
    let shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if(userAnswers[currentIndex] === opt) btn.classList.add('selected');
        btn.innerText = opt;
        btn.onclick = () => {
            userAnswers[currentIndex] = opt;
            showQuestion();
        };
        optContainer.appendChild(btn);
    });

    document.getElementById('prev-btn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible
