// Data Structure for Subjects
const subjects = ["Hindi", "English", "Sociology", "Human Value", "Digital Marketing", "Fitter Theory"];

// Sample Data (Aap yahan 50-50 questions har subject ke add kar sakte hain)
const allQuestions = {
    "English": [
        { 
            q: "Translating tools is a system:", 
            options: ["Software system", "Hardware system", "Operating system", "Database system"], 
            a: "Software system" 
        },
        { 
            q: "Translation tools translated __________ into another language:", 
            options: ["Source Language (SL)", "Target Language (TL)", "Both SL and TL", "None of these"], 
            a: "Source Language (SL)" 
        },
        { 
            q: "TL stands for:", 
            options: ["Total Language", "Target Language", "Translation Language", "Technical Language"], 
            a: "Target Language" 
        }
    ],
    "Fitter Theory": [
        { 
            q: "Bench vice ki size kis se li jati hai?", 
            options: ["Jaw ki chaudai", "Spindle ki lambai", "Handle ki lambai", "Body ka weight"], 
            a: "Jaw ki chaudai" 
        }
    ],
    "Digital Marketing": [],
    "Hindi": [],
    "Sociology": [],
    "Human Value": []
};


let currentSet = [];
let currentIndex = 0;
let userAnswers = {};

// Initialize Home Screen
function init() {
    const list = document.getElementById('subject-list');
    subjects.forEach(sub => {
        const btn = document.createElement('button');
        btn.innerText = sub;
        btn.onclick = () => startQuiz(sub);
        list.appendChild(btn);
    });
}

function startQuiz(sub) {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('subject-title').innerText = sub;
    
    // Logic: Shuffle 50 Qs and Pick 30 (Point 4 & 5)
    let rawData = allQuestions[sub] || [];
    currentSet = rawData.sort(() => 0.5 - Math.random()).slice(0, 30);
    
    currentIndex = 0;
    userAnswers = {};
    showQuestion();
}

function showQuestion() {
    const q = currentSet[currentIndex];
    document.getElementById('progress').innerText = `${currentIndex + 1}/30`;
    document.getElementById('question-text').innerText = q.q;
    
    const optCont = document.getElementById('options-container');
    optCont.innerHTML = '';
    
    // Shuffle Options (Point 10)
    let shuffledOpts = [...q.options].sort(() => 0.5 - Math.random());
    
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if(userAnswers[currentIndex] === opt) btn.classList.add('selected');
        btn.innerText = opt;
        btn.onclick = () => {
            userAnswers[currentIndex] = opt;
            showQuestion(); // Refresh selection
        };
        optCont.appendChild(btn);
    });

    // Toggle Buttons (Point 6)
    document.getElementById('prev-btn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').classList.toggle('hidden', currentIndex === currentSet.length - 1);
    document.getElementById('submit-btn').classList.toggle('hidden', currentIndex !== currentSet.length - 1);
}

function nextQuestion() { currentIndex++; showQuestion(); }
function prevQuestion() { currentIndex--; showQuestion(); }

function showFeedback() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('feedback-screen').classList.remove('hidden');
    
    let score = 0;
    let report = "";
    
    currentSet.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.a;
        if(isCorrect) score++;
        report += `<div class="res-item">
            <p><strong>Q${i+1}: ${q.q}</strong><br>
            Your Answer: <span class="${isCorrect ? 'correct':'wrong'}">${userAnswers[i] || 'Not Attempted'}</span><br>
            Correct: <span class="correct">${q.a}</span></p>
        </div><hr>`;
    });

    document.getElementById('score-card').innerHTML = `<h3>Final Score: ${score}/30</h3>`;
    document.getElementById('result-details').innerHTML = report;
}

function goHome() {
    location.reload(); // Simple way to go home (Point 8)
}

init();
