// Developed By: [[ R0HiiT_YadaV ]]

// 1. Updated Subject Structure (All 10 Chapters for each)
const subjects = [
    { name: "Hindi", chapters: Array.from({length: 10}, (_, i) => i === 0 ? "Chapter 1: अनुवाद का अर्थ, स्वरूप और महत्व" : i === 1 ? "Unit 2: हिंदी अनुवाद का अर्थ, परिभाषा और महत्व" : `Chapter ${i + 1}`) },
    { name: "English", chapters: ["Chapter 1: Pinjar", "Chapter 2: The Home and the World", "Chapter 3: Kanyadan", "Chapter 4: Translation Studies", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10"] },
    { name: "Sociology", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) },
    { name: "Physical Education and Yoga", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) },
    { name: "Fitter Theory", chapters: Array.from({length: 10}, (_, i) => `Chapter ${i + 1}`) }
];

// 2. Organized Questions (Har Chapter mein 2-2 Sample Questions)
const allQuestions = {
    "Hindi": {
        "Chapter 1: अनुवाद का अर्थ, स्वरूप और महत्व": [
            { q: "अनुवाद का मूल अर्थ क्या है?", options: ["नया साहित्य रचना", "पुनः कथन", "शब्द बदलना", "व्याकरण सुधार"], a: "पुनः कथन" },
            { q: "अनुवाद का महत्व क्या है?", options: ["सांस्कृतिक आदान-प्रदान", "समय काटना", "मूल ग्रंथ को नष्ट करना", "लिखना सीखना"], a: "सांस्कृतिक आदान-प्रदान" }
        ],
        "Unit 2: हिंदी अनुवाद का अर्थ, परिभाषा और महत्व": [
            { q: "अनुवाद शब्द किस धातु से बना है?", options: ["वद्", "पठ्", "लिख्", "गम्"], a: "वद्" },
            { q: "तर्जुमा किस भाषा का शब्द है?", options: ["अरबी", "फारसी", "तुर्की", "हिंदी"], a: "अरबी" }
        ]
        // Baki Chapters 3-10 ke liye aap niche Sociology wala format follow karein
    },
    "English": {
        "Chapter 1: Pinjar": [
            { q: "Who is the author of 'Pinjar'?", options: ["Amrita Pritam", "Khushwant Singh", "Tagore", "Premchand"], a: "Amrita Pritam" },
            { q: "Theme of Pinjar?", options: ["Partition", "War", "Politics", "Nature"], a: "Partition" }
        ],
        "Chapter 2: The Home and the World": [
            { q: "Original title of 'The Home and the World'?", options: ["Ghare Baire", "Gitanjali", "Chokher Bali", "Kabuliwala"], a: "Ghare Baire" },
            { q: "Author of 'The Home and the World'?", options: ["Tagore", "Gandhi", "Nehru", "Sarojini Naidu"], a: "Tagore" }
        ],
        "Chapter 3: Kanyadan": [
            { q: "'Kanyadan' was originally written in which language?", options: ["Hindi", "Marathi", "English", "Tamil"], a: "Marathi" },
            { q: "Who wrote 'Kanyadan'?", options: ["Vijay Tendulkar", "Girish Karnad", "Badal Sircar", "Mohan Rakesh"], a: "Vijay Tendulkar" }
        ],
        "Chapter 4: Translation Studies": [
            { q: "Translating tools is a system:", options: ["Software system", "Hardware system", "Operating system", "Database system"], a: "Software system" },
            { q: "Translation tools translate __________ into another language:", options: ["Source Language (SL)", "Target Language (TL)", "Both SL and TL", "None of these"], a: "Source Language (SL)" }
        ]
    },
    "Sociology": {
        "Chapter 1": [
            { q: "Who is the father of Sociology?", options: ["Auguste Comte", "Aristotle", "Plato", "Karl Marx"], a: "Auguste Comte" },
            { q: "Sociology is the study of?", options: ["Society", "Environment", "Plants", "History"], a: "Society" }
        ],
        "Chapter 2": [{q:"S2 Q1", options:["A","B","C","D"], a:"A"}, {q:"S2 Q2", options:["A","B","C","D"], a:"B"}]
        // Chapter 3 to 10 repeat karein...
    },
    "Physical Education and Yoga": {
        "Chapter 1": [
            { q: "शारीरिक शिक्षा का मुख्य लक्ष्य क्या है?", options: ["सर्वांगीण विकास", "केवल खेलना", "दौड़ना", "मजबूत बनना"], a: "सर्वांगीण विकास" },
            { q: "स्वस्थ शरीर में स्वस्थ मन किसका कथन है?", options: ["अरस्तू", "प्लेटो", "गाँधी", "नेहरू"], a: "अरस्तू" }
        ],
        "Chapter 2": [{q:"P2 Q1", options:["A","B","C","D"], a:"A"}, {q:"P2 Q2", options:["A","B","C","D"], a:"B"}]
    },
    "Fitter Theory": {
        "Chapter 1": [
            { q: "Bench vice size is determined by?", options: ["Width of jaw", "Length of spindle", "Weight", "Height"], a: "Width of jaw" },
            { q: "Which tool is used for marking?", options: ["Scriber", "Hammer", "Chisel", "Saw"], a: "Scriber" }
        ],
        "Chapter 2": [{q:"F2 Q1", options:["A","B","C","D"], a:"A"}, {q:"F2 Q2", options:["A","B","C","D"], a:"B"}]
    }
};

// --- Logic Implementation ---
let currentSet = [];
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
    const raw = (allQuestions[subName] && allQuestions[subName][chapName]) ? allQuestions[subName][chapName] : [];
    if(raw.length === 0) { alert("Bhai, is chapter me data nahi hai!"); return; }
    
    // Shuffle and take max 30 questions
    currentSet = raw.sort(() => 0.5 - Math.random()).slice(0, 30);
    currentIndex = 0;
    userAnswers = {};
    document.getElementById('chapter-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = currentSet[currentIndex];
    document.getElementById('progress').innerText = `Question: ${currentIndex + 1}/${currentSet.length}`;
    document.getElementById('question-text').innerText = q.q;
    const optContainer = document.getElementById('options-container');
    optContainer.innerHTML = '';
    
    // Shuffle Options (Requirement #10)
    let shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if(userAnswers[currentIndex] === opt) btn.classList.add('selected');
        btn.innerText = opt;
        btn.onclick = () => {
            userAnswers[currentIndex] = opt;
            const btns = optContainer.querySelectorAll('.option-btn');
            btns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        };
        optContainer.appendChild(btn);
    });

    document.getElementById('prev-btn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').classList.toggle('hidden', currentIndex === currentSet.length - 1);
    document.getElementById('submit-btn').classList.toggle('hidden', currentIndex !== currentSet.length - 1);
}

function nextQuestion() { currentIndex++; showQuestion(); }
function prevQuestion() { currentIndex--; showQuestion(); }

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    let score = 0;
    let feedback = '';
    currentSet.forEach((q, i) => {
        const correct = userAnswers[i] === q.a;
        if(correct) score++;
        feedback += `<div class="feedback-item" style="padding:10px; border-bottom:1px solid #ddd;">
            <p><strong>Q${i+1}: ${q.q}</strong></p>
            <p>Aapka Answer: <span style="color:${correct?'green':'red'}">${userAnswers[i]||'Nahi diya'}</span></p>
            ${!correct?`<p>Correct: <span style="color:green">${q.a}</span></p>`:''}
        </div>`;
    });
    document.getElementById('score-summary').innerHTML = `<h3>Result: ${score}/${currentSet.length}</h3>`;
    document.getElementById('feedback-list').innerHTML = feedback;
}

function goHome() { location.reload(); }

window.onload = init;
