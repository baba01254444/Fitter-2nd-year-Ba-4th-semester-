// 1. Updated Subject Structure
const subjects = [
    { name: "Hindi", chapters: ["Chapter 1: अनुवाद का अर्थ और स्वरूप"] },
    { name: "English", chapters: ["Chapter 1: Pinjar", "Chapter 2: The Home and the World", "Chapter 3: Kanyadan", "Chapter 4: Translation Studies"] },
    { name: "Sociology", chapters: ["Chapter 1: Social Change & Control"] },
    { name: "Human Value", chapters: ["Chapter 1: Ethics and Values"] },
    { name: "Digital Marketing", chapters: ["Chapter 1: Introduction to DM"] },
    { name: "Fitter Theory", chapters: ["Chapter 1: Safety & Tools"] }
];

// 2. Organized Questions (30 per Subject)
const allQuestions = {
    "Hindi": {
        "Chapter 1: अनुवाद का अर्थ और स्वरूप": [
            { q: "अनुवाद का मूल अर्थ क्या है?", options: ["नया साहित्य", "पुनः कथन", "शब्द बदलना", "व्याकरण"], a: "पुनः कथन" },
            { q: "'अनु' का अर्थ होता है?", options: ["आगे", "पीछे", "बराबर", "ऊपर"], a: "पीछे" },
            { q: "'वाद' का अर्थ होता है?", options: ["कथन", "गान", "चित्रण", "नृत्य"], a: "कथन" },
            { q: "SL का हिंदी अर्थ क्या है?", options: ["स्रोत भाषा", "लक्ष्य भाषा", "साधारण भाषा", "सरल भाषा"], a: "स्रोत भाषा" },
            { q: "TL का हिंदी अर्थ क्या है?", options: ["स्रोत भाषा", "लक्ष्य भाषा", "तर्क भाषा", "तीव्र भाषा"], a: "लक्ष्य भाषा" },
            { q: "अनुवादक का गुण है?", options: ["द्विभाषिकता", "अज्ञानता", "नकल", "भ्रम"], a: "द्विभाषिकता" },
            { q: "तर्जुमा किस भाषा का शब्द है?", options: ["अरबी-फारसी", "हिंदी", "संस्कृत", "अंग्रेजी"], a: "अरबी-फारसी" },
            { q: "लिपि अंतरण क्या है?", options: ["अर्थ बदलना", "लिपि बदलना", "भाषा बदलना", "कुछ नहीं"], a: "लिपि बदलना" },
            { q: "आशु अनुवाद क्या है?", options: ["लिखित", "तुरंत मौखिक", "काव्य", "मशीनी"], a: "तुरंत मौखिक" },
            { q: "कोश का अर्थ है?", options: ["खजाना/डिक्शनरी", "कमरा", "रास्ता", "पेड़"], a: "खजाना/डिक्शनरी" },
            { q: "अनुवाद प्रक्रिया का अंग है?", options: ["विश्लेषण", "अंतरण", "पुनर्गठन", "ये सभी"], a: "ये सभी" },
            { q: "मशीनी अनुवाद को कहते हैं?", options: ["Human Trans", "Machine Trans", "Oral Trans", "Poetic"], a: "Machine Trans" },
            { q: "सारानुवाद का अर्थ?", options: ["पूरा अनुवाद", "मुख्य भाव का संक्षिप्त अनुवाद", "शब्द-शब्द", "उल्टा अनुवाद"], a: "मुख्य भाव का संक्षिप्त अनुवाद" },
            { q: "अनुवाद की इकाई क्या है?", options: ["शब्द", "वाक्य", "ध्वनि", "वर्ण"], a: "वाक्य" },
            { q: "अच्छे अनुवाद की विशेषता?", options: ["स्पष्टता", "सटीकता", "प्रवाह", "ये सभी"], a: "ये सभी" },
            { q: "हजारी प्रसाद द्विवेदी ने अनुवाद को क्या माना?", options: ["अंगरक्षक", "शत्रु", "मित्र", "नकल"], a: "अंगरक्षक" },
            { q: "भावाुवाद में प्रधानता होती है?", options: ["शब्द की", "भाव की", "व्याकरण की", "अंक की"], a: "भाव की" },
            { q: "वैज्ञानिक अनुवाद में चाहिए?", options: ["तथ्यात्मकता", "काल्पनिकता", "लंबा वाक्य", "कठिन शब्द"], a: "तथ्यात्मकता" },
            { q: "मीडिया अनुवाद में जरूरी है?", options: ["सरलता और गति", "कठिन संस्कृत", "पुरानी भाषा", "मौन"], a: "सरलता और गति" },
            { q: "अनुवाद का महत्व है?", options: ["सांस्कृतिक एकता", "व्यापार", "ज्ञान प्रसार", "ये सभी"], a: "ये सभी" },
            { q: "द्विभाषिकता का अर्थ?", options: ["एक भाषा जानना", "दो भाषा जानना", "भाषा न जानना", "बोलना"], a: "दो भाषा जानना" },
            { q: "अनुवाद एक कला है या विज्ञान?", options: ["कला", "विज्ञान", "दोनों", "कोई नहीं"], a: "दोनों" },
            { q: "विधि अनुवाद संबंधित है?", options: ["कानून से", "धर्म से", "खेल से", "रसोई से"], a: "कानून से" },
            { q: "छायानुवाद का आधार?", options: ["मूल की छाया/प्रभाव", "शब्द-शब्द", "अंक", "संगीत"], a: "मूल की छाया/प्रभाव" },
            { q: "अनुवादक का उत्तरदायित्व?", options: ["मूल के प्रति वफादारी", "बदलाव", "गलती छिपाना", "अपनी राय"], a: "मूल के प्रति वफादारी" },
            { q: "शब्दकोश का उपयोग?", options: ["शब्द ढूंढना", "कहानी", "कविता", "चित्र"], a: "शब्द ढूंढना" },
            { q: "अनुवाद का क्षेत्र है?", options: ["सीमित", "व्यापक", "शून्य", "छोटा"], a: "व्यापक" },
            { q: "अनुवाद की आवश्यकता क्यों है?", options: ["संपर्क हेतु", "मस्ती हेतु", "लड़ाई हेतु", "नींद हेतु"], a: "संपर्क हेतु" },
            { q: "समीक्षा का अर्थ?", options: ["गुण-दोष विवेचन", "सिर्फ तारीफ", "सिर्फ बुराई", "लिखना"], a: "गुण-दोष विवेचन" },
            { q: "विश्व अनुवाद दिवस कब है?", options: ["30 सितंबर", "1 जनवरी", "15 अगस्त", "2 अक्टूबर"], a: "30 सितंबर" }
        ]
    },
    "English": {
        "Chapter 4: Translation Studies": [
            { q: "Translation is moving text from?", options: ["Language creation", "SL to TL", "Copying", "Writing"], a: "SL to TL" },
            { q: "CAT stands for?", options: ["Computer Assisted Translation", "Creative Art", "Common Audio", "Culture"], a: "Computer Assisted Translation" },
            { q: "MT in translation means?", options: ["Machine Translation", "Manual", "Modern", "Multiple"], a: "Machine Translation" },
            { q: "Who coined 'Skopos theory'?", options: ["Hans Vermeer", "Nida", "Newmark", "Venuti"], a: "Hans Vermeer" },
            { q: "Nida's theory types?", options: ["Formal & Dynamic", "Literal & Free", "Old & New", "Hard & Soft"], a: "Formal & Dynamic" },
            { q: "Localization means?", options: ["Cultural adaptation", "Word-for-word", "Literal", "Spelling"], a: "Cultural adaptation" },
            { q: "TM stands for?", options: ["Translation Memory", "Target Memory", "Text", "Time"], a: "Translation Memory" },
            { q: "Literal translation is?", options: ["Word-for-word", "Sense-for-sense", "Free", "False"], a: "Word-for-word" },
            { q: "Subtitling is?", options: ["Audiovisual trans", "Legal", "Medical", "Old"], a: "Audiovisual trans" },
            { q: "Back translation is for?", options: ["Quality check", "New writing", "Fun", "Deleting"], a: "Quality check" },
            { q: "Trados is a?", options: ["CAT tool", "Browser", "Game", "OS"], a: "CAT tool" },
            { q: "Equivalent effect means?", options: ["Same impact on reader", "Same words", "Same letters", "Same color"], a: "Same impact on reader" },
            { q: "Faithful translation preserves?", options: ["Original meaning", "Only grammar", "Page number", "Nothing"], a: "Original meaning" },
            { q: "First step in trans?", options: ["Analysis", "Printing", "Payment", "Binding"], a: "Analysis" },
            { q: "Semantic focus is on?", options: ["Author's style", "Reader's comfort", "Price", "Paper"], a: "Author's style" },
            { q: "Communicative focus?", options: ["Reader's understanding", "Author's style", "Machine", "Grammar"], a: "Reader's understanding" },
            { q: "Interlingual trans means?", options: ["Between 2 languages", "Same language", "Symbols", "Sign language"], a: "Between 2 languages" },
            { q: "Intralingual trans means?", options: ["Rewording same lang", "Different lang", "Music", "Art"], a: "Rewording same lang" },
            { q: "Technical trans is for?", options: ["Manuals", "Poems", "Novels", "Songs"], a: "Manuals" },
            { q: "Legal trans needs?", options: ["Precision", "Creativity", "Rhyme", "Shortening"], a: "Precision" },
            { q: "Post-colonial trans looks at?", options: ["Power/Politics", "Spelling", "Fonts", "Speed"], a: "Power/Politics" },
            { q: "Neural MT is used by?", options: ["Google Translate", "Old books", "Radio", "Pen"], a: "Google Translate" },
            { q: "Who wrote 'Translation Studies' book?", options: ["Susan Bassnett", "Modi", "Tagore", "Shakespeare"], a: "Susan Bassnett" },
            { q: "Domestication strategy?", options: ["Adapting to Target culture", "Retaining Source", "Literal", "Wrong"], a: "Adapting to Target culture" },
            { q: "Foreignization strategy?", options: ["Retaining Source culture", "Adapting Target", "Simplified", "Easy"], a: "Retaining Source culture" },
            { q: "Polysystem theory by?", options: ["Even-Zohar", "Jakobson", "Catford", "Nida"], a: "Even-Zohar" },
            { q: "Untranslatability is due to?", options: ["Cultural gaps", "Small words", "Ink", "Paper size"], a: "Cultural gaps" },
            { q: "Machine translation speed?", options: ["Very Fast", "Very Slow", "Zero", "Human-like"], a: "Very Fast" },
            { q: "Human translator is better for?", options: ["Emotions/Nuance", "Data only", "Numbers", "Binary"], a: "Emotions/Nuance" },
            { q: "Translation is a bridge between?", options: ["Cultures", "Walls", "Oceans", "Ships"], a: "Cultures" }
        ],
        // Note: Rest of the English chapters (Pinjar, etc.) are already in your previous logic.
    },
    "Sociology": {
        "Chapter 1: Social Change & Control": [
            { q: "Who wrote 'Social Change'?", options: ["Ogburn", "Marx", "Weber", "Parsons"], a: "Ogburn" },
            { q: "Social Change means?", options: ["Change in society", "Change in dress", "Weather change", "None"], a: "Change in society" },
            { q: "Cultural Lag theory by?", options: ["Ogburn", "Spencer", "Durkheim", "Comte"], a: "Ogburn" },
            { q: "Evolutionary theory by?", options: ["Spencer", "Marx", "Weber", "Linton"], a: "Spencer" },
            { q: "Social Control term by?", options: ["E.A. Ross", "Auguste Comte", "Marx", "Merton"], a: "E.A. Ross" },
            { q: "Formal Social Control?", options: ["Law/Police", "Family", "Religion", "Friend"], a: "Law/Police" },
            { q: "Informal Social Control?", options: ["Family/Customs", "Court", "Army", "Prison"], a: "Family/Customs" },
            { q: "Who is the Father of Sociology?", options: ["Auguste Comte", "Spencer", "Marx", "Aristotle"], a: "Auguste Comte" },
            { q: "Primary group is?", options: ["Family", "Political Party", "Trade Union", "Caste"], a: "Family" },
            { q: "Secondary group is?", options: ["Office", "Family", "Friends", "Neighbors"], a: "Office" },
            { q: "Urbanization leads to?", options: ["Social change", "No change", "Old customs", "Silence"], a: "Social change" },
            { q: "Globalization means?", options: ["World integration", "Village wall", "State only", "Home"], a: "World integration" },
            { q: "Sociology is study of?", options: ["Society", "Plants", "Stars", "Rocks"], a: "Society" },
            { q: "Conflict theory by?", options: ["Karl Marx", "Durkheim", "Comte", "Cooley"], a: "Karl Marx" },
            { q: "Functionalism by?", options: ["Parsons", "Marx", "Weber", "Mill"], a: "Parsons" },
            { q: "Bureaucracy concept by?", options: ["Max Weber", "Marx", "Spencer", "Ross"], a: "Max Weber" },
            { q: "Sacred and Profane by?", options: ["Durkheim", "Weber", "Marx", "Comte"], a: "Durkheim" },
            { q: "Suicide study by?", options: ["Durkheim", "Marx", "Weber", "Spencer"], a: "Durkheim" },
            { q: "Joint family is common in?", options: ["Rural India", "Urban USA", "Space", "Factory"], a: "Rural India" },
            { q: "Status is?", options: ["Social position", "Money only", "Height", "Speed"], a: "Social position" },
            { q: "Role is?", options: ["Behavior of status", "Movie acting", "Sleeping", "Eating"], a: "Behavior of status" },
            { q: "Caste is based on?", options: ["Birth", "Wealth", "Education", "Skills"], a: "Birth" },
            { q: "Class is based on?", options: ["Economic status", "Birth", "Religion", "Color"], a: "Economic status" },
            { q: "Society is a web of?", options: ["Social relations", "Wires", "Internet", "Roads"], a: "Social relations" },
            { q: "Modernization means?", options: ["Rationality/Tech", "Old dress", "Blind faith", "No change"], a: "Rationality/Tech" },
            { q: "Who said 'Man is a social animal'?", options: ["Aristotle", "Plato", "Comte", "Marx"], a: "Aristotle" },
            { q: "Culture is?", options: ["Learned behavior", "DNA", "Blood", "Weather"], a: "Learned behavior" },
            { q: "Sanction means?", options: ["Reward/Punishment", "Money only", "Sign", "Paper"], a: "Reward/Punishment" },
            { q: "Westernization concept by?", options: ["M.N. Srinivas", "G.S. Ghurye", "Marx", "Weber"], a: "M.N. Srinivas" },
            { q: "Sanskritization by?", options: ["M.N. Srinivas", "Comte", "Spencer", "Parsons"], a: "M.N. Srinivas" }
        ]
    },
    "Human Value": {
        "Chapter 1: Ethics and Values": [
            { q: "Ethics means?", options: ["Right/Wrong conduct", "Money making", "Power", "Style"], a: "Right/Wrong conduct" },
            { q: "Values are?", options: ["Beliefs/Principles", "Prices", "Numbers", "Items"], a: "Beliefs/Principles" },
            { q: "Ahimsa means?", options: ["Non-violence", "Violence", "Angry", "Fear"], a: "Non-violence" },
            { q: "Integrity means?", options: ["Honesty/Consistency", "Richness", "Physical strength", "Speed"], a: "Honesty/Consistency" },
            { q: "Empathy means?", options: ["Understanding others", "Hating others", "Ignoring others", "Talking"], a: "Understanding others" },
            { q: "Work Ethics?", options: ["Dedication to work", "Laziness", "Cheating", "Leaving early"], a: "Dedication to work" },
            { q: "Spiritual value?", options: ["Peace/Love", "Gold", "Phone", "Car"], a: "Peace/Love" },
            { q: "Constitutional value?", options: ["Justice/Liberty", "Casteism", "Dowry", "Smoking"], a: "Justice/Liberty" },
            { q: "Self-discipline?", options: ["Control on self", "Controlling others", "Sleeping", "Eating"], a: "Control on self" },
            { q: "Character is?", options: ["What we are", "What we wear", "What we say", "What we buy"], a: "What we are" },
            { q: "Environment value?", options: ["Protecting Nature", "Cutting trees", "Pollution", "Plastic"], a: "Protecting Nature" },
            { q: "Truthfulness?", options: ["Satya", "Asatya", "Moha", "Maya"], a: "Satya" },
            { q: "Human Rights?", options: ["Equality for all", "Power for few", "No rights", "War"], a: "Equality for all" },
            { q: "Moral development by?", options: ["Kohlberg", "Newton", "Tesla", "Edison"], a: "Kohlberg" },
            { q: "Dharma means?", options: ["Duty/Righteousness", "Name", "Place", "Food"], a: "Duty/Righteousness" },
            { q: "Respect for parents?", options: ["Core Value", "Hobby", "Burden", "Time pass"], a: "Core Value" },
            { q: "Tolerance?", options: ["Accepting diff views", "Fighting", "Anger", "Ignoring"], a: "Accepting diff views" },
            { q: "Professional ethics?", options: ["Code of conduct", "Making profit only", "Lie", "Lazy"], a: "Code of conduct" },
            { q: "Altruism?", options: ["Selfless care", "Selfishness", "Greed", "Ego"], a: "Selfless care" },
            { q: "Justice?", options: ["Fairness", "Injustice", "Fear", "Bias"], a: "Fairness" },
            { q: "Sustainability?", options: ["Future resources", "Waste", "Greed", "Fast food"], a: "Future resources" },
            { q: "Who said 'Truth is God'?", options: ["Mahatma Gandhi", "Nehru", "Azad", "Marx"], a: "Mahatma Gandhi" },
            { q: "Ethical dilemma?", options: ["Conflict of values", "Happy news", "Easy choice", "No choice"], a: "Conflict of values" },
            { q: "Civic sense?", options: ["Social responsibility", "Living alone", "Dirtiness", "Noise"], a: "Social responsibility" },
            { q: "Gender Equality?", options: ["Equal Men/Women", "Male superior", "Female superior", "No rights"], a: "Equal Men/Women" },
            { q: "Corruption is?", options: ["Unethical", "Ethical", "Great", "Value"], a: "Unethical" },
            { q: "Yoga helps in?", options: ["Mental peace", "Weight gain only", "Laziness", "War"], a: "Mental peace" },
            { q: "Universal brotherhood?", options: ["Vasudhaiva Kutumbakam", "My home only", "War", "Boundaries"], a: "Vasudhaiva Kutumbakam" },
            { q: "Honesty is?", options: ["Best policy", "Worst policy", "Waste", "Slow"], a: "Best policy" },
            { q: "Final goal of values?", options: ["Human well-being", "Destruction", "Greed", "Power"], a: "Human well-being" }
        ]
    },
    "Digital Marketing": {
        "Chapter 1: Introduction to DM": [
            { q: "SEO stands for?", options: ["Search Engine Optimization", "Social Engine", "Simple Opt", "Site Opt"], a: "Search Engine Optimization" },
            { q: "SEM stands for?", options: ["Search Engine Marketing", "Social Media", "Simple Mark", "Site Mark"], a: "Search Engine Marketing" },
            { q: "PPC stands for?", options: ["Pay Per Click", "Price Per Customer", "Paper", "Point"], a: "Pay Per Click" },
            { q: "Full form of SMM?", options: ["Social Media Marketing", "Site Mark", "Social Main", "System"], a: "Social Media Marketing" },
            { q: "Which is a DM channel?", options: ["Email", "SEO", "Facebook", "All of these"], a: "All of these" },
            { q: "What is Backlink?", options: ["Link from other site", "Broken link", "Home link", "No link"], a: "Link from other site" },
            { q: "DM is also known as?", options: ["Online Marketing", "Offline Mark", "Direct Mark", "Paper Mark"], a: "Online Marketing" },
            { q: "Keyword is?", options: ["Search query term", "Password", "Door key", "Code"], a: "Search query term" },
            { q: "CTR stands for?", options: ["Click Through Rate", "Customer Rate", "Common Time", "Count"], a: "Click Through Rate" },
            { q: "ROI stands for?", options: ["Return on Investment", "Rate of Int", "Record", "Report"], a: "Return on Investment" },
            { q: "Spam is?", options: ["Unwanted emails", "Gift", "New song", "Update"], a: "Unwanted emails" },
            { q: "Blogging is?", options: ["Content Marketing", "Cold calling", "Radio ad", "Printing"], a: "Content Marketing" },
            { q: "Influencer marketing is on?", options: ["Instagram/YouTube", "Radio", "Post", "Wall"], a: "Instagram/YouTube" },
            { q: "Landing page is?", options: ["First page after click", "Last page", "Error page", "Home"], a: "First page after click" },
            { q: "KPI means?", options: ["Key Performance Indicator", "Key Point", "Kid", "Knowledge"], a: "Key Performance Indicator" },
            { q: "Organic traffic is?", options: ["Free traffic", "Paid ads", "Bot", "Fake"], a: "Free traffic" },
            { q: "Domain name?", options: ["Website address", "Your name", "IP only", "Email"], a: "Website address" },
            { q: "Cookies in DM?", options: ["User tracking data", "Food", "Computer part", "Virus"], a: "User tracking data" },
            { q: "CTA means?", options: ["Call to Action", "Common Task", "Call", "Count"], a: "Call to Action" },
            { q: "Email marketing tool?", options: ["Mailchimp", "WhatsApp", "Phone", "Paper"], a: "Mailchimp" },
            { q: "Google Analytics is for?", options: ["Tracking traffic", "Editing photo", "Music", "Typing"], a: "Tracking traffic" },
            { q: "Viral marketing?", options: ["Rapid spreading content", "Flu", "Slow growth", "Zero reach"], a: "Rapid spreading content" },
            { q: "DM advantage?", options: ["Global reach", "Cheap", "Measurable", "All of these"], a: "All of these" },
            { q: "E-commerce is?", options: ["Online shopping", "TV shopping", "Bazar", "Free"], a: "Online shopping" },
            { q: "Lead generation?", options: ["Getting potential customers", "Selling trash", "Fighting", "Sleeping"], a: "Getting potential customers" },
            { q: "Mobile marketing?", options: ["Ads on mobile", "Buying mobile", "Calling", "Repairing"], a: "Ads on mobile" },
            { q: "Hashtags are used in?", options: ["Social Media", "SEO", "Offline", "Email"], a: "Social Media" },
            { q: "Bounce rate?", options: ["Users leaving quickly", "User staying", "New user", "Growth"], a: "Users leaving quickly" },
            { q: "Affiliate marketing?", options: ["Commission based sales", "Salary", "Gift", "Hobby"], a: "Commission based sales" },
            { q: "Content is?", options: ["King", "Queen", "Soldier", "Slave"], a: "King" }
        ]
    },
    "Fitter Theory": {
        "Chapter 1: Safety & Tools": [
            { q: "Bench vice size?", options: ["Jaw width", "Handle", "Body", "Weight"], a: "Jaw width" },
            { q: "Try square angle?", options: ["90 degree", "45", "60", "180"], a: "90 degree" },
            { q: "Fire extinguisher color for Class A?", options: ["Red", "Blue", "Black", "Yellow"], a: "Red" },
            { q: "Hammer material?", options: ["Cast steel", "Brass", "Plastic", "Wood"], a: "Cast steel" },
            { q: "Micrometer least count?", options: ["0.01 mm", "0.1", "1.0", "0.001"], a: "0.01 mm" },
            { q: "V-block is used for?", options: ["Holding round bars", "Flat bars", "Square", "Thin sheet"], a: "Holding round bars" },
            { q: "Vernier caliper accuracy?", options: ["0.02 mm", "0.1", "0.5", "1.0"], a: "0.02 mm" },
            { q: "File is made of?", options: ["High Carbon Steel", "Mild Steel", "Copper", "Aluminum"], a: "High Carbon Steel" },
            { q: "Safety signs-Red circle?", options: ["Prohibition", "Warning", "Mandatory", "Info"], a: "Prohibition" },
            { q: "Measuring tape length?", options: ["Various", "1m only", "Fixed", "Short"], a: "Various" },
            { q: "Scriber is for?", options: ["Marking lines", "Cutting", "Punching", "Drilling"], a: "Marking lines" },
            { q: "Center punch angle?", options: ["90 degree", "60", "30", "45"], a: "90 degree" },
            { q: "Prick punch angle?", options: ["30 degree", "60", "90", "120"], a: "30 degree" },
            { q: "Hacksaw blade length?", options: ["250-300mm", "100mm", "500mm", "1m"], a: "250-300mm" },
            { q: "Coolant is for?", options: ["Cooling tool", "Heating", "Painting", "Cleaning"], a: "Cooling tool" },
            { q: "Calipers are?", options: ["Indirect measuring", "Direct", "Not tools", "Electronic"], a: "Indirect measuring" },
            { q: "Feeler gauge?", options: ["Gap checking", "Length", "Depth", "Width"], a: "Gap checking" },
            { q: "Spirit level?", options: ["Level checking", "Height", "Weight", "Speed"], a: "Level checking" },
            { q: "Anvil is used in?", options: ["Forging", "Drilling", "Painting", "Sewing"], a: "Forging" },
            { q: "Lathe machine?", options: ["Mother of machines", "Simple tool", "Hand tool", "Toy"], a: "Mother of machines" },
            { q: "PPE stands for?", options: ["Personal Protective Equipment", "Point", "Power", "Price"], a: "Personal Protective Equipment" },
            { q: "First Aid kit contains?", options: ["Bandage/Medicine", "Food", "Books", "Money"], a: "Bandage/Medicine" },
            { q: "Class B fire?", options: ["Liquid fire", "Wood", "Electric", "Metal"], a: "Liquid fire" },
            { q: "Dot punch angle?", options: ["60 degree", "30", "90", "120"], a: "60 degree" },
            { q: "Chisel is a?", options: ["Cutting tool", "Measuring", "Marking", "Holding"], a: "Cutting tool" },
            { q: "Flat file shape?", options: ["Rectangular", "Round", "Square", "Triangular"], a: "Rectangular" },
            { q: "Bench drill?", options: ["Fixed drill", "Hand drill", "Portable", "None"], a: "Fixed drill" },
            { q: "Steel rule material?", options: ["Stainless steel", "Wood", "Plastic", "Lead"], a: "Stainless steel" },
            { q: "Calipers type?", options: ["Inside/Outside", "Left/Right", "Up/Down", "None"], a: "Inside/Outside" },
            { q: "Drill bit material?", options: ["HSS", "MS", "Brass", "Copper"], a: "HSS" }
        ]
    }
};

// 3. Quiz Logic (Common for all)
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
    // Shuffle and pick 30
    currentSet = rawData.sort(() => 0.5 - Math.random()).slice(0, 30);
    
    currentIndex = 0;
    userAnswers = {};
    showQuestion();
}

function showQuestion() {
    if (currentSet.length === 0) { alert("No questions!"); goHome(); return; }
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
        report += `<div class="res-item"><p><strong>Q${i+1}: ${q.q}</strong><br>Answer: <span class="${isCorrect ? 'correct':'wrong'}">${userAnswers[i] || 'None'}</span> | Correct: <span class="correct">${q.a}</span></p></div><hr>`;
    });
    document.getElementById('score-card').innerHTML = `<h3>Score: ${score}/${currentSet.length}</h3>`;
    document.getElementById('result-details').innerHTML = report;
}

function goHome() { location.reload(); }
init();
