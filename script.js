// 1. Updated Subject Structure with Chapters
const subjects = [
    { name: "Hindi", chapters: ["Chapter 1"] },
    { name: "English", chapters: ["Chapter 1: Pinjar", "Chapter 2: The Home and the World"] },
    { name: "Sociology", chapters: ["Chapter 1"] },
    { name: "Human Value", chapters: ["Chapter 1"] },
    { name: "Digital Marketing", chapters: ["Chapter 1"] },
    { name: "Fitter Theory", chapters: ["Chapter 1"] }
];

// 2. Organized Questions by Subject and then by Chapter
const allQuestions = {
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
            { q: "Year of original publication of 'Ghare Baire'?", options: ["1913", "1916", "1919", "1921"], a: "1916" },
            { q: "Who translated 'The Home and the World' to English?", options: ["Rabindranath Tagore", "Surendranath Tagore", "Satyajit Ray", "Amrita Pritam"], a: "Surendranath Tagore" },
            { q: "Year of English translation of the novel?", options: ["1916", "1919", "1920", "1930"], a: "1919" },
            { q: "Tagore's Nobel Prize year?", options: ["1913", "1916", "1919", "1921"], a: "1913" },
            { q: "Setting of the novel 'The Home and the World'?", options: ["Bengal during Swadeshi movement", "Punjab partition", "Calcutta independence", "Delhi revolt"], a: "Bengal during Swadeshi movement" },
            { q: "Partition of Bengal reference in the novel?", options: ["West to Hindus, East to Muslims", "East to Hindus, West to Muslims", "No division", "United Bengal"], a: "West to Hindus, East to Muslims" },
            { q: "Nikhilesh's occupation in the story?", options: ["Teacher", "Zamindar", "Swadeshi leader", "Merchant"], a: "Zamindar" },
            { q: "Nikhilesh's approach to Swadeshi movement?", options: ["Violent", "Peaceful, non-violent", "Boycott only", "Ignored"], a: "Peaceful, non-violent" },
            { q: "Which character trait best describes Sandip?", options: ["Peace-loving", "Fanatical nationalist", "Philosopher", "Teacher"], a: "Fanatical nationalist" },
            { q: "Who is the husband of the protagonist Bimala?", options: ["Sandip", "Nikhilesh", "Chandranath", "Amulya"], a: "Nikhilesh" },
            { q: "Who is Bara Rani in the novel?", options: ["Bimala's sister-in-law", "Miss Gilby", "Rehma", "Tara"], a: "Bimala's sister-in-law" },
            { q: "Who is Nikhilesh's teacher/mentor?", options: ["Sandip", "Chandranath", "Amulya", "Surendranath"], a: "Chandranath" },
            { q: "Which young follower dies in the novel?", options: ["Sandip", "Amulya", "Panchu", "Mirjan"], a: "Amulya" },
            { q: "Who was the English teacher for Bimala?", options: ["Bara Rani", "Miss Gilby", "Chandranath", "Rehma"], a: "Miss Gilby" },
            { q: "What name does Sandip call Bimala?", options: ["Queen Bee", "Rani", "Devi", "Maa"], a: "Queen Bee" },
            { q: "Who is the poor tenant helped by Nikhilesh?", options: ["Amulya", "Panchu", "Chandranath", "Mirjan"], a: "Panchu" },
            { q: "What is the narrative style of the novel?", options: ["Third person", "First person (three characters)", "Omniscient", "Stream of consciousness"], a: "First person (three characters)" },
            { q: "Central conflict of the novel?", options: ["Home vs World", "Tradition vs Modernity", "Both A and B", "None"], a: "Both A and B" },
            { q: "What does Nikhilesh want Bimala to be?", options: ["Blind devotion", "Balanced rational woman", "Swadeshi leader", "Housebound wife"], a: "Balanced rational woman" },
            { q: "Amount Sandip asks Bimala to steal?", options: ["5000 rupees", "50000 rupees", "6000 rupees", "10000 rupees"], a: "50000 rupees" },
            { q: "Amount Bimala actually gives to Sandip?", options: ["5000 rupees", "6000 rupees", "50000 rupees", "10000 rupees"], a: "6000 rupees" },
            { q: "What do 'dying flowers' symbolize in the story?", options: ["Swadeshi success", "Nikhilesh-Bimala dying relation", "Sandip's love", "Bara Rani's jealousy"], a: "Nikhilesh-Bimala dying relation" },
            { q: "Which critic considers Tagore's style tedious?", options: ["Sandip", "Georg Lukacs", "Chandranath", "Amulya"], a: "Georg Lukacs" },
            { q: "Main theme of 'The Home and the World'?", options: ["Love story only", "Nationalism vs Humanism", "Family drama", "Education"], a: "Nationalism vs Humanism" },
            { q: "Whose boat sinks in the river?", options: ["Panchu", "Mirjan", "Amulya", "Sandip"], a: "Mirjan" },
            { q: "What is Nikhilesh's fate at the end?", options: ["Dies saving women", "Leaves with Bimala", "Marries again", "Joins Swadeshi"], a: "Dies saving women" },
            { q: "How does Bimala feel after stealing the money?", options: ["Proud", "Guilty and ashamed", "Excited", "Indifferent"], a: "Guilty and ashamed" },
            { q: "Swadeshi leader who favors violence?", options: ["Nikhilesh", "Chandranath", "Sandip", "Bara Rani"], a: "Sandip" },
            { q: "Main socio-political focus of the novel?", options: ["Partition riots", "Bengal partition, Swadeshi", "World War", "Independence 1947"], a: "Bengal partition, Swadeshi" }
        ],
                "Chapter 3: Kanyadan": [
            { q: "'Kanyadan' was originally written in which language?", options: ["Hindi", "Marathi", "English", "Tamil"], a: "Marathi" },
            { q: "In which year was 'Kanyadan' published?", options: ["1978", "1983", "1990", "2008"], a: "1983" },
            { q: "Who translated 'Kanyadan' to English?", options: ["Vijay Tendulkar", "Gauri Ramnarayan", "Priya Tendulkar", "Nirmala Tendulkar"], a: "Gauri Ramnarayan" },
            { q: "Vijay Tendulkar's birth year?", options: ["1928", "1935", "1940", "1950"], a: "1928" },
            { q: "Vijay Tendulkar's death year?", options: ["2000", "2008", "2010", "2015"], a: "2008" },
            { q: "Vijay Tendulkar is famous for plays in?", options: ["Hindi theatre", "Marathi theatre", "English drama", "Sanskrit plays"], a: "Marathi theatre" },
            { q: "What was the name of Vijay Tendulkar's wife?", options: ["Gauri", "Nirmala", "Priya", "Jyoti"], a: "Nirmala" },
            { q: "Number of children Vijay Tendulkar had?", options: ["2", "3", "4", "5"], a: "4" },
            { q: "Which daughter of Tendulkar was a famous actress?", options: ["Gauri", "Priya Tendulkar", "Nirmala", "Jyoti"], a: "Priya Tendulkar" },
            { q: "Which major award was received by Tendulkar?", options: ["Padma Shri only", "Padma Bhushan", "Bharat Ratna", "Jnanpith only"], a: "Padma Bhushan" },
            { q: "Central theme of the play 'Kanyadan'?", options: ["Love marriage", "Inter-caste marriage failure", "Political drama", "Family reunion"], a: "Inter-caste marriage failure" },
            { q: "What does the title 'Kanyadan' mean?", options: ["Gift of son", "Gift of daughter (marriage)", "Caste unity", "Dalit empowerment"], a: "Gift of daughter (marriage)" },
            { q: "The play 'Kanyadan' critiques?", options: ["Upper caste only", "Caste system and patriarchy", "Dalit politics", "Urban life"], a: "Caste system and patriarchy" },
            { q: "Idealism vs Realism in the play is shown through?", options: ["Arun and Jyoti", "Nath and Seva", "Jayaprakash and Vaman", "Kamal and Hardas"], a: "Nath and Seva" },
            { q: "Who is the domestic violence perpetrator in the play?", options: ["Nath", "Arun Athavale", "Jayaprakash", "Vaman Seth"], a: "Arun Athavale" },
            { q: "What is the title of Arun's autobiography?", options: ["Dalit Life", "Rides", "Kanyadan", "Revenge"], a: "Rides" },
            { q: "The family in the play lives in which city?", options: ["Mumbai", "Pune", "Delhi", "Nagpur"], a: "Pune" },
            { q: "What is the protagonist Jyoti's caste?", options: ["Dalit", "Brahmin", "Shudra", "Kshatriya"], a: "Brahmin" },
            { q: "Who is Jyoti's father in the play?", options: ["Arun", "Nath Devlekar", "Jayaprakash", "Hardas"], a: "Nath Devlekar" },
            { q: "What is Nath's profession?", options: ["Writer", "MLA (politician)", "Teacher", "Publisher"], a: "MLA (politician)" },
            { q: "Who is Jyoti's mother?", options: ["Gauri", "Seva", "Priya", "Nirmala"], a: "Seva" },
            { q: "Who is Jyoti's brother?", options: ["Arun", "Jayaprakash", "Vaman", "Kamal"], a: "Jayaprakash" },
            { q: "What is Arun Athavale's caste?", options: ["Brahmin", "Dalit", "Upper class", "Merchant"], a: "Dalit" },
            { q: "Arun was a student of?", options: ["Jyoti", "Nath", "Seva", "Jayaprakash"], a: "Jyoti" },
            { q: "Who gave the book launch speech?", options: ["Arun", "Nath", "Vaman Seth", "Hardas Chimote"], a: "Vaman Seth" },
            { q: "Arun works part-time at?", options: ["Hotel", "Newspaper (Shramik Samachar)", "Politics", "Factory"], a: "Newspaper (Shramik Samachar)" },
            { q: "Jyoti's age at the time of marriage?", options: ["18", "20", "21", "23"], a: "21" },
            { q: "What is Jayaprakash's age in the play?", options: ["20", "21", "23", "25"], a: "23" },
            { q: "Arun beats Jyoti primarily due to?", options: ["Love", "Revenge on upper caste", "Money", "Politics"], a: "Revenge on upper caste" },
            { q: "What is the conclusion of the play?", options: ["Happy marriage", "Inter-caste marriage fails to end casteism", "Divorce", "Reunion"], a: "Inter-caste marriage fails to end casteism" }
        ],
        
            
    },
    "Fitter Theory": {
        "Chapter 1": [
            { q: "Bench vice ki size kis se li jati hai?", options: ["Jaw ki chaudai", "Spindle ki lambai", "Handle ki lambai", "Body ka weight"], a: "Jaw ki chaudai" }
        ]
    },
    "Digital Marketing": { "Chapter 1": [] },
    "Hindi": { "Chapter 1": [] },
    "Sociology": { "Chapter 1": [] },
    "Human Value": { "Chapter 1": [] }
}; 

let currentSet = [];
let currentIndex = 0;
let userAnswers = {};

// 3. Initialize Subject List
function init() {
    const list = document.getElementById('subject-list');
    list.innerHTML = ""; // Clear list
    subjects.forEach(sub => {
        const btn = document.createElement('button');
        btn.innerText = sub.name;
        btn.onclick = () => showChapters(sub);
        list.appendChild(btn);
    });
}

// 4. Show Chapters for Selected Subject
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
    backBtn.onclick = () => init();
    list.appendChild(backBtn);
}

// 5. Start Quiz with Subject and Chapter
function startQuiz(subName, chName) {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('subject-title').innerText = `${subName} (${chName})`;
    
    let rawData = allQuestions[subName][chName] || [];
    // Shuffle and pick 30
    currentSet = rawData.sort(() => 0.5 - Math.random()).slice(0, 30);
    
    currentIndex = 0;
    userAnswers = {};
    showQuestion();
}

function showQuestion() {
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
            showQuestion();
        };
        optCont.appendChild(btn);
    });

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

    document.getElementById('score-card').innerHTML = `<h3>Final Score: ${score}/${currentSet.length}</h3>`;
    document.getElementById('result-details').innerHTML = report;
}

function goHome() {
    location.reload(); 
}

init();
