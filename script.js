// 1. Subject Structure
const subjects = [
    { 
        name: "Hindi", 
        chapters: [
            "Chapter 1: अनुवाद का अर्थ और स्वरूप", 
            "Chapter 2: हिंदी अनुवाद का अर्थ और महत्व",
            "Chapter 3: अनुवाद के सिद्धांत व प्रक्रिया",
            "Chapter 4: अनुवाद का परीक्षण, पुनरीक्षण, मूल्यांकन और समीक्षा",
            "Chapter 5: पारिभाषिक शब्दावली: अर्थ और स्वरूप"
        ] 
    },
    { 
        name: "English", 
        chapters: [
            "Chapter 1: Pinjar", 
            "Chapter 2: The Home and the World", 
            "Chapter 3: Kanyadan", 
            "Chapter 4: Translation Studies"
        ] 
    },
    { name: "Sociology", chapters: ["Chapter 1: Social Change & Control"] },
    { 
        name: "Physical Education and Yoga", 
        chapters: [
            "Chapter 1: शारीरिक शिक्षा का अर्थ, परिभाषा और उद्देश्य",
            "Chapter 2: शारीरिक फिटनेस और कल्याण (Wellness)",
            "Chapter 3: योग का अर्थ, इतिहास और आधार",
            "Chapter 4: प्राणायाम और ध्यान",
            "Chapter 5: आसनों के लाभ",
            "Chapter 6: पारंपरिक खेल और मनोरंजन",
            "Chapter 7: खेल चोटें और प्राथमिक चिकित्सा"
        ] 
    },
    { 
        name: "Human Value", 
        chapters: [
            "Chapter 1: Human Values & Ethics",
            "Chapter 2: Holistic Development",
            "Chapter 3: Spirituality & Management",
            "Chapter 4: Environment & Ecosystem",
            "Chapter 5: Biodiversity & Conservation",
            "Chapter 6: Pollution & Waste Management",
            "Chapter 7: Environment Acts & Awareness"
        ] 
    },
    { name: "Digital Marketing", chapters: ["Chapter 1: Introduction to DM"] },
    { name: "Fitter Theory", chapters: ["Chapter 1: Safety & Tools"] }
];

// 2. Organized Questions Data
const allQuestions = {
    "Hindi": {
        "Chapter 1: अनुवाद का अर्थ और स्वरूप": [
            { q: "अनुवाद का मूल अर्थ क्या है?", options: ["नया साहित्य", "पुनः कथन", "शब्द बदलना", "व्याकरण"], a: "पुनः कथन" },
            { q: "'अनु' का अर्थ होता है?", options: ["आगे", "पीछे", "बराबर", "ऊपर"], a: "पीछे" }
        ],
        "Chapter 2: हिंदी अनुवाद का अर्थ और महत्व": [
            { q: "अनुवाद शब्द किस धातु से बना है?", options: ["वद्", "पठ्", "लिख्", "गम्"], a: "वद्" }
        ],
        "Chapter 3: अनुवाद के सिद्धांत व प्रक्रिया": [
            { q: "नायडा के अनुसार अनुवाद के कितने प्रकार हैं?", options: ["दो", "तीन", "चार", "पांच"], a: "दो" }
        ],
        "Chapter 4: अनुवाद का परीक्षण, पुनरीक्षण, मूल्यांकन और समीक्षा": [
            { q: "अनुवाद परीक्षण का पहला मापदंड क्या है?", options: ["सटीकता (Accuracy)", "शैली", "लंबाई", "रंग"], a: "सटीकता (Accuracy)" }
        ],
        "Chapter 5: पारिभाषिक शब्दावली: अर्थ और स्वरूप": [
            { q: "पारिभाषिक शब्द क्या हैं?", options: ["विशिष्ट विषय के विशेष शब्द", "दैनिक शब्द", "काव्य", "भावपूर्ण"], a: "विशिष्ट विषय के विशेष शब्द" }
        ]
    },
    "English": {
        "Chapter 4: Translation Studies": [
            { q: "CAT stands for?", options: ["Computer Assisted Translation", "Creative Art", "Common Audio", "Culture"], a: "Computer Assisted Translation" }
        ]
    },
    "Physical Education and Yoga": { 
        "Chapter 1: शारीरिक शिक्षा का अर्थ, परिभाषा और उद्देश्य": [
            { q: "शारीरिक शिक्षा का अर्थ क्या है?", options: ["शारीरिक क्रियाओं से सर्वांगीण विकास", "केवल खेल", "पढ़ाई", "संगीत"], a: "शारीरिक क्रियाओं से सर्वांगीण विकास" },
            { q: "स्वस्थ शरीर में स्वस्थ मन का निवास होता है, यह किसने कहा?", options: ["अरस्तू", "प्लेटो", "रूसो", "सुकरात"], a: "अरस्तू" }
        ],
        "Chapter 2: शारीरिक फिटनेस और कल्याण (Wellness)": [
            { q: "Wellness का मुख्य लक्ष्य क्या है?", options: ["बीमारियों से बचाव", "दवाई खाना", "अस्पताल जाना", "दौड़ना"], a: "बीमारियों से बचाव" },
            { q: "फिटनेस का घटक कौन सा है?", options: ["शक्ति", "गति", "लचीलापन", "उपरोक्त सभी"], a: "उपरोक्त सभी" }
        ],
        "Chapter 3: योग का अर्थ, इतिहास और आधार": [
            { q: "योग शब्द की उत्पत्ति किस धातु से हुई?", options: ["युज्", "युथ", "योग", "यत्"], a: "युज्" },
            { q: "अष्टांग योग के कितने अंग हैं?", options: ["8", "5", "10", "12"], a: "8" }
        ],
        "Chapter 4: प्राणायाम और ध्यान": [
            { q: "प्राणायाम में 'कुम्भक' का अर्थ है?", options: ["सांस रोकना", "सांस लेना", "सांस छोड़ना", "ध्यान"], a: "सांस रोकना" },
            { q: "ध्यान का संबंध किससे है?", options: ["मानसिक एकाग्रता", "दौड़ना", "कुश्ती", "सोना"], a: "मानसिक एकाग्रता" }
        ],
        "Chapter 5: आसनों के लाभ": [
            { q: "मधुमेह के लिए कौन सा आसन लाभकारी है?", options: ["मंडूकासन", "ताड़ासन", "शवासन", "वज्रासन"], a: "मंडूकासन" },
            { q: "लंबाई बढ़ाने के लिए आसन?", options: ["ताड़ासन", "हलासन", "पद्मासन", "चक्रासन"], a: "ताड़ासन" }
        ],
        "Chapter 6: पारंपरिक खेल और मनोरंजन": [
            { q: "खो-खो में कितने खिलाड़ी खेलते हैं?", options: ["9", "11", "7", "12"], a: "9" },
            { q: "मनोरंजन का उद्देश्य क्या है?", options: ["तनाव कम करना", "थकान", "काम", "पैसा"], a: "तनाव कम करना" }
        ],
        "Chapter 7: खेल चोटें और प्राथमिक चिकित्सा": [
            { q: "RICE विधि में 'I' का अर्थ?", options: ["Ice (बर्फ)", "Injury", "Internal", "Injection"], a: "Ice (बर्फ)" },
            { q: "मांसपेशियों में खिंचाव कहलाता है?", options: ["Strain", "Sprain", "Fracture", "Cramp"], a: "Strain" }
        ]
    },
    "Human Value": {
        "Chapter 1: Human Values & Ethics": [
            { q: "नैतिकता का संबंध किससे है?", options: ["चरित्र", "दौलत", "शक्ति", "दिखावा"], a: "चरित्र" }
        ],
        "Chapter 2: Holistic Development": [
            { q: "सर्वांगीण विकास में क्या है?", options: ["शारीरिक, मानसिक, आध्यात्मिक", "केवल खेल", "पैसा", "पढ़ाई"], a: "शारीरिक, मानसिक, आध्यात्मिक" }
        ],
        "Chapter 3: Spirituality & Management": [
            { q: "आध्यात्मिकता का अर्थ?", options: ["स्वयं को जानना", "पूजा", "मंदिर", "पहाड़"], a: "स्वयं को जानना" }
        ],
        "Chapter 4: Environment & Ecosystem": [
            { q: "Ecosystem के जैविक घटक?", options: ["पेड़ और जीव", "मिट्टी", "हवा", "पानी"], a: "पेड़ और जीव" }
        ],
        "Chapter 5: Biodiversity & Conservation": [
            { q: "जैव विविधता का अर्थ?", options: ["जीवों की विभिन्नता", "पेड़ काटना", "खेती", "पशु"], a: "जीवों की विभिन्नता" }
        ],
        "Chapter 6: Pollution & Waste Management": [
            { q: "ओजोन परत को नुकसान पहुंचाता है?", options: ["CFCs", "Oxygen", "Nitrogen", "Argon"], a: "CFCs" }
        ],
        "Chapter 7: Environment Acts & Awareness": [
            { q: "विश्व पर्यावरण दिवस?", options: ["5 जून", "15 अगस्त", "26 जनवरी", "1 मई"], a: "5 जून" }
        ]
    },
    "Sociology": { "Chapter 1: Social Change & Control": [] },
    "Digital Marketing": { "Chapter 1: Introduction to DM": [] },
    "Fitter Theory": { "Chapter 1: Safety & Tools": [] }
};

// 3. Quiz Logic
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
             
