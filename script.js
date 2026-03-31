// 1. Updated Subject Structure
const subjects = [
    { 
        name: "Hindi", 
        chapters: [
            "Chapter 1: अनुवाद का अर्थ और स्वरूप", 
            "Chapter 2: हिंदी अनुवाद का अर्थ और महत्व",
            "Chapter 3: अनुवाद के सिद्धांत व प्रक्रिया",
            "Chapter 4: अनुवाद का परीक्षण, पुनरीक्षण, मूल्यांकन और समीक्षा"
        ] 
    },
    { name: "English", chapters: ["Chapter 1: Pinjar", "Chapter 2: The Home and the World", "Chapter 3: Kanyadan", "Chapter 4: Translation Studies"] },
    { name: "Sociology", chapters: ["Chapter 1: Social Change & Control"] },
    { name: "Human Value", chapters: ["Chapter 1: Ethics and Values"] },
    { name: "Digital Marketing", chapters: ["Chapter 1: Introduction to DM"] },
    { name: "Fitter Theory", chapters: ["Chapter 1: Safety & Tools"] }
];

// 2. Organized Questions
const allQuestions = {
    "Hindi": {
        "Chapter 1: अनुवाद का अर्थ और स्वरूप": [
            { q: "अनुवाद का मूल अर्थ क्या है?", options: ["नया साहित्य", "पुनः कथन", "शब्द बदलना", "व्याकरण"], a: "पुनः कथन" },
            { q: "'अनु' का अर्थ होता है?", options: ["आगे", "पीछे", "बराबर", "ऊपर"], a: "पीछे" },
            { q: "SL का हिंदी अर्थ क्या है?", options: ["स्रोत भाषा", "लक्ष्य भाषा", "साधारण भाषा", "सरल भाषा"], a: "स्रोत भाषा" }
        ],
        "Chapter 2: हिंदी अनुवाद का अर्थ और महत्व": [
            { q: "अनुवाद का सबसे बड़ा महत्व क्या है?", options: ["ज्ञान का प्रसार", "भाषा सीखना", "व्यापार", "मनोरंजन"], a: "ज्ञान का प्रसार" },
            { q: "सफल अनुवादक के लिए क्या जरूरी है?", options: ["दोनों भाषाओं का ज्ञान", "सिर्फ एक भाषा", "लिखना", "बोलना"], a: "दोनों भाषाओं का ज्ञान" },
            { q: "अनुवाद शब्द किस धातु से बना है?", options: ["वद्", "पठ्", "लिख्", "गम्"], a: "वद्" }
        ],
        "Chapter 3: अनुवाद के सिद्धांत व प्रक्रिया": [
            { 
                q: "नायडा (Eugene Nida) के अनुसार अनुवाद के दो प्रकार कौन से हैं?", 
                options: ["औपचारिक व गतिशील (Formal & Dynamic)", "शाब्दिक व भावपूर्ण", "साहित्यिक व तकनीकी", "मौखिक व लिखित"], 
                a: "औपचारिक व गतिशील (Formal & Dynamic)" 
            },
            { 
                q: "अनुवाद प्रक्रिया का प्रथम चरण क्या है?", 
                options: ["विश्लेषण (Analysis)", "अंतरण", "पुनर्गठन", "समीक्षा"], 
                a: "विश्लेषण (Analysis)" 
            }
        ],
        "Chapter 4: अनुवाद का परीक्षण, पुनरीक्षण, मूल्यांकन और समीक्षा": [
            { 
                q: "अनुवाद परीक्षण का पहला मापदंड क्या है?", 
                options: ["सटीकता (Accuracy)", "शैली", "लंबाई", "रंग"], 
                a: "सटीकता (Accuracy)" 
            }
        ] // <-- Yahan bracket miss tha, maine laga diya
    }, // <-- Yahan comma miss tha, maine laga diya
    "English": {
        "Chapter 1: Pinjar": [],
        "Chapter 2: The Home and the World": [],
        "Chapter 3: Kanyadan": [],
        "Chapter 4: Translation Studies": [
            { q: "CAT stands for?", options: ["Computer Assisted Translation", "Creative Art", "Common Audio", "Culture"], a: "Computer Assisted Translation" }
        ]
    },
    "Sociology": { "Chapter 1: Social Change & Control": [] },
    "Human Value": { "Chapter 1: Ethics and Values": [] },
    "Digital Marketing": { "Chapter 1: Introduction to DM": [] },
    "Fitter Theory": { "Chapter 1: Safety & Tools": [] }
};

// 3. Quiz Logic (Baki logic bilkul sahi hai)
let currentSet = [];
let currentIndex = 0;
let userAnswers = {};

function init() {
    const list = document.getElementById('subject-list');
    if (!list) return;
    list.innerHTML = ""; 
    subjects.forEach(sub => {
        const btn = document.createElement('button');
        btn.innerText = sub.name;
        btn.onclick = () => showChapters(sub);
        list.appendChild(btn);
    });
}

function showChapters(sub) {
    const list = document.getElementById('subject-list');
    list.innerHTML = `<h3>${sub.name} - Select Chapter:</h3>`;
    sub.chapters.forEach(ch => {
        const btn = document.createElement('button');
        btn.innerText = ch;
        btn.onclick = () => startQuiz(sub.name, ch);
        list.appendChild(btn);
    });
    const backBtn = document.createElement('button');
    backBtn.innerText = "🔙 Back to Subjects";
    backBtn.className = "home-btn";
    backBtn.style.backgroundColor = "#6c757d";
    backBtn.style.marginTop = "10px";
    backBtn.onclick = () => init();
    list.appendChild(backBtn);
}

function startQuiz(subName, chName) {
    const quizScreen = document.getElementById('quiz-screen');
    const homeScreen = document.getElementById('home-screen');
    if(!quizScreen || !homeScreen) return;

    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    document.getElementById('subject-title').innerText = `${subName} (${chName})`;
    
    let rawData = (allQuestions[subName] && allQuestions[subName][chName]) ? allQuestions[subName][chName] : [];
    
    currentSet = [...rawData].sort(() => 0.5 - Math.random()).slice(0, 30);
    currentIndex = 0;
    userAnswers = {};
    showQuestion();
}

function showQuestion() {
    if (currentSet.length === 0) { 
        alert("Bhai, is chapter mein abhi questions nahi hain!"); 
        goHome(); 
        return; 
    }
    const q = currentSet[currentIndex];
    document.getElementById('progress').innerText = `${currentIndex + 1}/${currentSet.length}`;
    document.getElementById('question-text').innerText = q.q;
    const optCont = document.getElementById('options-container');
    optCont.innerHTML = '';
    
    let shuffledOpts = [...q.options].sort(() => 0.5 - Math.random());
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if(userAnswers[currentIndex] === opt) btn.classList.add('selected');
        btn.innerText = opt;
        btn.onclick = () => { 
            userAnswers[currentIndex] = opt; 
            const allBtns = optCont.querySelectorAll('.option-btn');
            allBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        };
        optCont.appendChild(btn);
    });

    document.getElementById('prev-btn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').classList.toggle('hidden', currentIndex === currentSet.length - 1);
    document.getElementById('submit-btn').classList.toggle('hidden', currentIndex !== currentSet.length - 1);
}

function nextQuestion() { if(currentIndex < currentSet.length - 1) { currentIndex++; showQuestion(); } }
function prevQuestion() { if(currentIndex > 0) { currentIndex--; showQuestion(); } }

function showFeedback() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('feedback-screen').classList.remove('hidden');
    let score = 0;
    let report = "";
    currentSet.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.a;
        if(isCorrect) score++;
        report += `<div class="res-item"><p><strong>Q${i+1}: ${q.q}</strong><br>Aapka Jawab: <span class="${isCorrect ? 'correct':'wrong'}">${userAnswers[i] || 'Nahi Diya'}</span> | Sahi: <span class="correct">${q.a}</span></p></div><hr>`;
    });
    document.getElementById('score-card').innerHTML = `<h3>Final Score: ${score}/${currentSet.length}</h3>`;
    document.getElementById('result-details').innerHTML = report;
}

function goHome() { location.reload(); }

init();
