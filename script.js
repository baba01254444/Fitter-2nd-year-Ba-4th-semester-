// 1. Updated Subject Structure with All Chapters
const subjects = [
    { name: "Hindi", chapters: ["Chapter 1: अनुवाद का अर्थ, स्वरूप और महत्व"] },
    { name: "English", chapters: ["Chapter 1: Pinjar", "Chapter 2: The Home and the World", "Chapter 3: Kanyadan", "Chapter 4: Translation Studies"] },
    { name: "Sociology", chapters: ["Chapter 1"] },
    { name: "Human Value", chapters: ["Chapter 1"] },
    { name: "Digital Marketing", chapters: ["Chapter 1"] },
    { name: "Fitter Theory", chapters: ["Chapter 1"] }
];

// 2. Organized Questions (Hindi Ch-1 and English Ch-4 Added)
const allQuestions = {
    "Hindi": {
        "Chapter 1: अनुवाद का अर्थ, स्वरूप और महत्व": [
            { q: "अनुवाद का मूल अर्थ क्या है?", options: ["नया साहित्य रचना", "पुनः कथन", "शब्द बदलना", "व्याकरण सुधार"], a: "पुनः कथन" },
            { q: "'अनु' का अर्थ होता है?", options: ["आगे", "पीछे", "बराबर", "ऊपर"], a: "पीछे" },
            { q: "'वाद' का अर्थ होता है?", options: ["कथन", "गान", "चित्रण", "नृत्य"], a: "कथन" },
            { q: "अनुवाद के पर्यायवाची शब्द कौन से हैं?", options: ["अनुवाद और रूपांतरण", "अनु और वाद", "श्रोत और लक्ष्य", "केवल अनुवाद"], a: "अनुवाद और रूपांतरण" },
            { q: "अनुवाद वह प्रक्रिया है जिसमें:", options: ["एक भाषा से दूसरी में अर्थ ले जाना", "नया अर्थ बनाना", "शब्द गिनना", "वाक्य छोटा करना"], a: "एक भाषा से दूसरी में अर्थ ले जाना" },
            { q: "हजारी प्रसाद द्विवेदी के अनुसार अनुवाद क्या है?", options: ["मूल भाव का अंगरक्षक", "नया सृजन", "शैली परिवर्तन", "लय बदलना"], a: "मूल भाव का अंगरक्षक" },
            { q: "अनुवाद के लिए सबसे आवश्यक क्या है?", options: ["स्रोत और लक्ष्य भाषा का ज्ञान", "केवल हिंदी ज्ञान", "केवल अंग्रेजी", "कविता लेखन"], a: "स्रोत और लक्ष्य भाषा का ज्ञान" },
            { q: "श्रोत भाषा (SL) क्या है?", options: ["जिससे अनुवाद होता है", "जिसमें अनुवाद होता है", "मध्य भाषा", "क्षेत्रीय भाषा"], a: "जिससे अनुवाद होता है" },
            { q: "लक्ष्य भाषा (TL) क्या है?", options: ["जिसमें अनुवाद होता है", "जिससे अनुवाद होता है", "मूल भाषा", "सहायक भाषा"], a: "जिसमें अनुवाद होता है" },
            { q: "अनुवादक को कैसा होना चाहिए?", options: ["स्वतंत्र विचारशक्ति वाला", "गुलाम मानसिकता वाला", "केवल नकल करने वाला", "विषय का अज्ञानी"], a: "स्वतंत्र विचारशक्ति वाला" },
            { q: "अनुवाद का स्वरूप कैसा होता है?", options: ["सृजनात्मक प्रक्रिया", "यांत्रिक प्रक्रिया", "नकल प्रक्रिया", "संक्षेपण"], a: "सृजनात्मक प्रक्रिया" },
            { q: "अनुवाद में किसका संरक्षण अनिवार्य है?", options: ["भाव और शैली", "केवल शब्द", "केवल व्याकरण", "वाक्य की लंबाई"], a: "भाव और शैली" },
            { q: "रूपांतरण अनुवाद का एक _____ है:", options: ["स्वरूप नहीं", "प्रकार", "मूल रूप", "अंतिम रूप"], a: "प्रकार" },
            { q: "अनुवादक की प्रमुख योग्यता क्या है?", options: ["विषय का समुचित ज्ञान", "केवल भाषा ज्ञान", "कविता रचना", "चित्रकला"], a: "विषय का समुचित ज्ञान" },
            { q: "अनुवाद का वैज्ञानिक अध्ययन क्या कहलाता है?", options: ["अनुवाद विज्ञान", "भाषा विज्ञान", "साहित्य शास्त्र", "व्याकरण शास्त्र"], a: "अनुवाद विज्ञान" },
            { q: "अनुवाद का सबसे बड़ा महत्व क्या है?", options: ["ज्ञान का प्रसार", "भाषा सीखना", "व्यापार", "मनोरंजन"], a: "ज्ञान का प्रसार" },
            { q: "बहुभाषिक समाज में अनुवाद क्या कार्य करता है?", options: ["भाषा-संस्तृति को जोड़ना", "अलग करना", "भाषा समाप्त करना", "संस्कृति नष्ट करना"], a: "भाषा-संस्कृति को जोड़ना" },
            { q: "अनुवाद से भाषा की क्षमता में क्या होता है?", options: ["शक्ति में वृद्धि", "कमी", "स्थिरता", "पतन"], a: "शक्ति में वृद्धि" },
            { q: "साहित्यिक अनुवाद का मुख्य उद्देश्य क्या है?", options: ["विश्व साहित्य का आदान-प्रदान", "केवल मनोरंजन", "व्यापारिक लाभ", "राजनीतिक प्रचार"], a: "विश्व साहित्य का आदान-प्रदान" },
            { q: "अनुवाद से राष्ट्रीय एकता पर क्या प्रभाव पड़ता है?", options: ["एकता बढ़ती है", "घटती है", "अप्रभावित रहती है", "नष्ट होती है"], a: "एकता बढ़ती है" },
            { q: "अनुवाद समीक्षा का अर्थ क्या है?", options: ["गुणवत्ता की जाँच", "नया अनुवाद", "मूल ग्रंथ", "संपादन"], a: "गुणवत्ता की जाँच" },
            { q: "अनुवाद के लिए कम से कम कितनी भाषाएँ आवश्यक हैं?", options: ["दो भाषाएँ", "एक भाषा", "तीन भाषाएँ", "कोई नहीं"], a: "दो भाषाएँ" },
            { q: "अनुवादक का प्राथमिक कर्तव्य क्या है?", options: ["मूल भाव सुरक्षित रखना", "नया अर्थ जोड़ना", "पाठ को छोटा करना", "पाठ को लंबा करना"], a: "मूल भाव सुरक्षित रखना" },
            { q: "'तर्जुमा' शब्द अनुवाद का क्या है?", options: ["पर्यायवाची", "विपरीत", "प्रकार", "साधन"], a: "पर्यायवाची" },
            { q: "अनुवाद प्रक्रिया का प्रथम चरण कौन सा है?", options: ["स्रोत पाठ विश्लेषण", "लक्ष्य पाठ लेखन", "संपादन", "मुद्रण"], a: "स्रोत पाठ विश्लेषण" },
            { q: "अनुवाद का व्यवस्थित अध्ययन किस शास्त्र में होता है?", options: ["अनुवाद विज्ञान", "भाषा विज्ञान", "साहित्य विज्ञान", "कला विज्ञान"], a: "अनुवाद विज्ञान" },
            { q: "सांस्कृतिक आदान-प्रदान अनुवाद से _____ होता है:", options: ["संभव", "असंभव", "हानिकारक", "स्थिर"], a: "संभव" },
            { q: "अच्छे अनुवादक की सबसे बड़ी पहचान क्या है?", options: ["स्वतंत्र चिंतन", "गुलामी", "अंधानुकरण", "भय"], a: "स्वतंत्र चिंतन" },
            { q: "आज के युग में अनुवाद का क्षेत्र कैसा है?", options: ["असीमित", "सीमित", "केवल साहित्य तक", "केवल विज्ञान तक"], a: "असीमित" },
            { q: "अनुवाद कार्य का मुख्य आधार क्या है?", options: ["द्विभाषिकता", "एकभाषिकता", "बहुभाषिकता", "भाषाहीनता"], a: "द्विभाषिकता" }
        ]
    },
    "English": {
        "Chapter 1: Pinjar": [
            { q: "Translating tools is a system:", options: ["Software system", "Hardware system", "Operating system", "Database system"], a: "Software system" },
            { q: "Translation tools translated __________ into another language:", options: ["Source Language (SL)", "Target Language (TL)", "Both SL and TL", "None of these"], a: "Source Language (SL)" },
            { q: "TL stands for:", options: ["Total Language", "Target Language", "Translation Language", "Technical Language"], a: "Target Language" },
            { q: "In which year was 'Pinjar' published?", options: ["1947", "1950", "1956", "1960"], a: "1950" },
            { q: "Original language of 'Pinjar'?", options: ["Hindi", "English", "Punjabi", "Urdu"], a: "Punjabi" },
            { q: "Who translated 'Pinjar' to English?", options: ["Dennis Mat", "Khushwant Singh", "Pritam Singh", "Sahir Ludhianvi"], a: "Khushwant Singh" },
            { q: "Protagonist of 'Pinjar'?", options: ["Lajo", "Puro", "Tara", "Rajjo"], a: "Puro" },
            { q: "Puro's village name in the novel?", options: ["Rattowal", "Chatto", "Sakkar", "Gujranwala"], a: "Chatto" },
            { q: "Who kidnaps Puro?", options: ["Ramchand", "Trilok", "Rashid", "Mohan Lal"], a: "Rashid" },
            { q: "Puro's new name after marriage?", options: ["Sara", "Hamida", "Rehma", "Tara"], a: "Hamida" },
            { q: "Central region of the novel?", options: ["Punjab", "Uttar Pradesh", "Gujarat", "Rajasthan"], a: "Punjab" },
            { q: "Main theme of 'Pinjar'?", options: ["Love story", "Partition violence", "Family reunion", "Revenge only"], a: "Partition violence" },
            { q: "Puro's fiancé in the story?", options: ["Rashid", "Trilok", "Ramchand", "Shyam Lal"], a: "Ramchand" },
            { q: "Puro's brother's name?", options: ["Ramchand", "Trilok", "Mohan Lal", "Shyam Lal"], a: "Trilok" },
            { q: "Puro's sister's name?", options: ["Tara", "Rajjo", "Lajo", "Hamida"], a: "Rajjo" },
            { q: "Puro's mother's name?", options: ["Tara", "Rehma", "Sara", "Lajo"], a: "Tara" },
            { q: "Ramchand's sister's name?", options: ["Rajjo", "Lajo", "Puro", "Tara"], a: "Lajo" },
            { q: "Amrita Pritam's birth year?", options: ["1919", "1920", "1935", "1950"], a: "1919" },
            { q: "Who was the first woman to receive Sahitya Akademi Award?", options: ["Amrita Pritam", "Mahadevi Verma", "Kamala Das", "Sarojini Naidu"], a: "Amrita Pritam" },
            { q: "Meaning of the Punjabi word 'Pinjar'?", options: ["Cage", "Skeleton", "Bird", "Love"], a: "Skeleton" },
            { q: "Which film is based on the novel 'Pinjar'?", options: ["The Skeleton", "Puro", "Pinjar", "Partition"], a: "Pinjar" },
            { q: "Main conflict in 'Pinjar' arises from?", options: ["Love vs Hate", "Partition of India-Pakistan", "Family vs Society", "Slavery only"], a: "Partition of India-Pakistan" }
        ],
        "Chapter 2: The Home and the World": [
            { q: "Original title of 'The Home and the World'?", options: ["Ghare Baire", "Gitanjali", "Chokher Bali", "Kabuliwala"], a: "Ghare Baire" },
            { q: "Year of original publication?", options: ["1913", "1916", "1919", "1921"], a: "1916" },
            { q: "Who translated it to English?", options: ["Rabindranath Tagore", "Surendranath Tagore", "Satyajit Ray", "Amrita Pritam"], a: "Surendranath Tagore" },
            { q: "Main theme of the novel?", options: ["Love story", "Nationalism vs Humanism", "Family drama", "Education"], a: "Nationalism vs Humanism" }
        ],
        "Chapter 3: Kanyadan": [
            { q: "'Kanyadan' was originally written in which language?", options: ["Hindi", "Marathi", "English", "Tamil"], a: "Marathi" },
            { q: "In which year was 'Kanyadan' published?", options: ["1978", "1983", "1990", "2008"], a: "1983" },
            { q: "Central theme of the play?", options: ["Love marriage", "Inter-caste marriage failure", "Political drama", "Family reunion"], a: "Inter-caste marriage failure" }
        ],
        "Chapter 4: Translation Studies": [
            { q: "Translation is moving text from?", options: ["Language creation", "Source Language to Target Language", "Word-for-word copy", "Poetry writing"], a: "Source Language to Target Language" },
            { q: "SL stands for?", options: ["Source Language", "Second Language", "Spoken Language", "Standard Language"], a: "Source Language" },
            { q: "TL stands for?", options: ["Total Language", "Target Language", "Translation Language", "Technical Language"], a: "Target Language" },
            { q: "Translating tools are?", options: ["Hardware system", "Software system", "Manual system", "Database system"], a: "Software system" },
            { q: "CAT stands for?", options: ["Computer Assisted Translation", "Creative Art Translation", "Common Audio Translation", "Cultural Analysis Tool"], a: "Computer Assisted Translation" },
            { q: "MT stands for?", options: ["Machine Translation", "Manual Translation", "Modern Translation", "Multiple Translation"], a: "Machine Translation" },
            { q: "TM stands for?", options: ["Translation Memory", "Target Memory", "Technical Manual", "Text Management"], a: "Translation Memory" },
            { q: "Google Translate uses?", options: ["Rule-based MT", "Neural MT", "Dictionary only", "Human translators"], a: "Neural MT" },
            { q: "Literal translation is?", options: ["Word-for-word", "Sense-for-sense", "Free translation", "Idiomatic"], a: "Word-for-word" },
            { q: "Localization means?", options: ["Cultural adaptation", "Word-for-word", "Literal", "Academic"], a: "Cultural adaptation" },
            { q: "Equivalence in translation means?", options: ["Same effect on target reader", "Same words", "Same grammar", "Same length"], a: "Same effect on target reader" },
            { q: "Who coined 'Skopos theory'?", options: ["Hans Vermeer", "Eugene Nida", "Peter Newmark", "Lawrence Venuti"], a: "Hans Vermeer" },
            { q: "Nida's translation types?", options: ["Formal & Dynamic", "Literal & Free", "Semantic & Communicative", "Faithful & Adaptation"], a: "Formal & Dynamic" },
            { q: "SDL Trados is a?", options: ["CAT tool", "Web browser", "Word processor", "Antivirus"], a: "CAT tool" },
            { q: "The first step in translation is?", options: ["Source text analysis", "Target text editing", "Proofreading", "Formatting"], a: "Source text analysis" }
        ]
    },
    "Fitter Theory": { "Chapter 1": [{ q: "Bench vice size?", options: ["Jaw", "Handle"], a: "Jaw" }] },
    "Digital Marketing": { "Chapter 1": [] },
    "Sociology": { "Chapter 1": [] },
    "Human Value": { "Chapter 1": [] }
};

// Quiz Logic
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
    backBtn.onclick = () => init();
    list.appendChild(backBtn);
}

function startQuiz(subName, chName) {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('subject-title').innerText = `${subName} (${chName})`;
    let rawData = (allQuestions[subName] && allQuestions[subName][chName]) ? allQuestions[subName][chName] : [];
    currentSet = rawData.sort(() => 0.5 - Math.random()).slice(0, 30);
    currentIndex = 0;
    userAnswers = {};
    showQuestion();
}

function showQuestion() {
    if (currentSet.length === 0) { alert("No questions found!"); goHome(); return; }
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
        btn.onclick = () => { userAnswers[currentIndex] = opt; showQuestion(); };
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
        report += `<div class="res-item"><p><strong>Q${i+1}: ${q.q}</strong><br>Your Answer: <span class="${isCorrect ? 'correct':'wrong'}">${userAnswers[i] || 'Not Attempted'}</span><br>Correct: <span class="correct">${q.a}</span></p></div><hr>`;
    });
    document.getElementById('score-card').innerHTML = `<h3>Final Score: ${score}/${currentSet.length}</h3>`;
    document.getElementById('result-details').innerHTML = report;
}

function goHome() { location.reload(); }
init();
