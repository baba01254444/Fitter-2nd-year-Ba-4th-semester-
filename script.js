// 1. Updated Subject Structure with All Chapters
const subjects = [
    { name: "Hindi", chapters: ["Chapter 1: अनुवाद का अर्थ, स्वरूप और महत्व", "Unit 2: हिंदी अनुवाद का अर्थ, परिभाषा और महत्व"] },
    { name: "English", chapters: ["Chapter 1: Pinjar", "Chapter 2: The Home and the World", "Chapter 3: Kanyadan", "Chapter 4: Translation Studies"] },
    { name: "Sociology", chapters: ["Chapter 1"] },
    { name: "Physical education and yoga", chapters: ["Chapter 1"] },
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
        ],
        "Unit 2: हिंदी अनुवाद का अर्थ, परिभाषा और महत्व": [
            { q: "हिंदी अनुवाद का शाब्दिक अर्थ क्या है?", options: ["पुनः कथन", "नया सृजन", "शब्द परिवर्तन", "भाव विस्तार"], a: "पुनः कथन" },
            { q: "अनुवाद शब्द संस्कृत के किन शब्दों से बना है?", options: ["अनु + वाद", "अनु + वाच्", "अनु + वर्ण", "अनु + वाक्"], a: "अनु + वाद" },
            { q: "अनुवाद के पर्यायवाची शब्द कौन से हैं?", options: ["तर्जुमा, रूपांतरण, अनुवाद", "अनुलोम, अनुगमन", "अनुग्रह, अनुभव", "केवल तर्जुमा"], a: "तर्जुमा, रूपांतरण, अनुवाद" },
            { q: "अनुवाद की प्रक्रिया मुख्य रूप से क्या है?", options: ["एक भाषा से दूसरी में अंतरण", "नया ग्रंथ निर्माण", "मूल पाठ को नष्ट करना", "संक्षेपण"], a: "एक भाषा से दूसरी में अंतरण" },
            { q: "स्रोत भाषा (Source Language) किसे कहते हैं?", options: ["जिससे अनुवाद किया जाता है", "जिसमें अनुवाद किया जाता है", "मध्य भाषा", "क्षेत्रीय भाषा"], a: "जिससे अनुवाद किया जाता है" },
            { q: "बाबू गुलाब राय के अनुसार अनुवाद क्या है?", options: ["मूल का अंगरक्षक", "स्वतंत्र सृजन", "शैली परिवर्तन", "लयबद्धता"], a: "मूल का अंगरक्षक" },
            { q: "कैटफोर्ड ने अनुवाद को क्या माना है?", options: ["भाषिक प्रतिस्थापन", "साहित्यिक रूपांतरण", "सांस्कृतिक आदान-प्रदान", "तकनीकी प्रक्रिया"], a: "भाषिक प्रतिस्थापन" },
            { q: "नईमार्क के अनुसार अनुवाद के कौन से प्रकार हैं?", options: ["साहित्यिक और तकनीकी", "शाब्दिक और स्वतंत्र", "अर्थगत और संप्रेषणीय", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
            { q: "यथार्थ अनुवाद किसे कहा जाता है?", options: ["निकटतम स्वाभाविक अनुवाद", "शब्दानुक्रम अनुवाद", "काव्यात्मक अनुवाद", "व्याख्यात्मक अनुवाद"], a: "निकटतम स्वाभाविक अनुवाद" },
            { q: "एक आदर्श अनुवाद में क्या संरक्षित रहता है?", options: ["अभिव्यक्ति और अर्थ दोनों", "केवल शब्द", "केवल शैली", "केवल लय"], a: "अभिव्यक्ति और अर्थ दोनों" },
            { q: "हिंदी अनुवाद का प्राथमिक महत्व क्या है?", options: ["राष्ट्रीय एकीकरण", "साहित्यिक समृद्धि", "भाषा विकास", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
            { q: "अनुवाद के माध्यम से क्या प्राप्त होता है?", options: ["सांस्कृतिक समन्वय", "भाषाई विभेद", "साहित्यिक ह्रास", "ज्ञान संकुचन"], a: "सांस्कृतिक समन्वय" },
            { q: "वैश्विक स्तर पर अनुवाद को क्या माना जाता है?", options: ["ज्ञान प्रसार का साधन", "भाषा विनाश", "संस्कृति विनाश", "साहित्यिक प्रतिस्पर्धा"], a: "ज्ञान प्रसार का साधन" },
            { q: "हिंदी को राजभाषा बनाने में अनुवाद की भूमिका कैसी है?", options: ["महत्वपूर्ण भूमिका", "कोई भूमिका नहीं", "नकारात्मक भूमिका", "सीमित भूमिका"], a: "महत्वपूर्ण भूमिका" },
            { q: "अनुवाद विज्ञान का वास्तविक स्वरूप क्या है?", options: ["वैज्ञानिक अनुशासन", "कला", "शिल्प", "केवल सिद्धांत"], a: "वैज्ञानिक अनुशासन" },
            { q: "Bathgate के अनुसार अनुवाद के कितने सोपान (Steps) हैं?", options: ["7 सोपान", "3 सोपान", "5 सोपान", "6 सोपान"], a: "7 सोपान" },
            { q: "पाठ के आधार पर अनुवाद के कितने भेद हो सकते हैं?", options: ["अभिव्यक्ति सापेक्ष और अर्थ सापेक्ष", "शाब्दिक और भावपूर्ण", "साहित्यिक और गैर-साहित्यिक", "मौखिक और लिखित"], a: "अभिव्यक्ति सापेक्ष और अर्थ सापेक्ष" },
            { q: "छाया अनुवाद का आधार क्या होता है?", options: ["मूल की छाया या प्रभाव", "शब्द-शब्द अनुवाद", "व्याख्या अनुवाद", "रूपांतरण"], a: "मूल की छाया या प्रभाव" },
            { q: "अंतर संकेत अनुवाद (Inter-semiotic) क्या है?", options: ["एक संकेत से दूसरे संकेत में", "एक भाषा से दूसरी में", "शब्द परिवर्तन", "भाव विस्तार"], a: "एक संकेत से दूसरे संकेत में" },
            { q: "रूपांतरण अनुवाद में किसकी सुविधा देखी जाती है?", options: ["अनुवादक की सुविधा", "शाब्दिक शुद्धता", "भावानुवाद", "आदर्श अनुवाद"], a: "अनुवादक की सुविधा" },
            { q: "एक अच्छे अनुवादक के मुख्य गुण क्या हैं?", options: ["द्विभाषिकता और विषय ज्ञान", "केवल एक भाषा ज्ञान", "काव्य रचना", "पत्रकारिता"], a: "द्विभाषिकता और विषय ज्ञान" },
            { q: "अनुवाद समीक्षा का मुख्य उद्देश्य क्या होता है?", options: ["गुण-दोष का परीक्षण", "नया अनुवाद करना", "मूल पाठ में सुधार", "केवल प्रकाशन"], a: "गुण-दोष का परीक्षण" },
            { q: "अनुवाद की प्रमुख सीमाएं क्या मानी जाती हैं?", options: ["सांस्कृतिक भेद", "भाषाई समानता", "व्याकरण समानता", "शब्द समानता"], a: "सांस्कृतिक भेद" },
            { q: "पाठ धर्मी अनुवाद का क्या अर्थ है?", options: ["मूल पाठ के समान प्रभाव", "शब्दानुक्रम समान", "लंबाई समान", "कठिनाई समान"], a: "मूल पाठ के समान प्रभाव" },
            { q: "अनुवाद की सफलता का मापदंड क्या है?", options: ["सटीकता और स्वाभाविकता", "केवल शब्द", "केवल भाव", "पाठ की लंबाई"], a: "सटीकता और स्वाभाविकता" },
            { q: "हिंदी अनुवाद शास्त्र का पिता किसे माना जाता है?", options: ["आचार्य देवेंद्र नाथ शर्मा", "हजारी प्रसाद द्विवेदी", "रामचंद्र शुक्ल", "बाबू गुलाब राय"], a: "आचार्य देवेंद्र नाथ शर्मा" },
            { q: "अनुवाद अध्ययन का वैज्ञानिक रूप कब विकसित हुआ?", options: ["20वीं शताब्दी", "19वीं शताब्दी", "18वीं शताब्दी", "प्राचीन काल"], a: "20वीं शताब्दी" },
            { q: "अनुवाद का सामाजिक महत्व क्या है?", options: ["बहुभाषिक एकता", "भाषा वर्चस्व", "साहित्यिक प्रतिस्पर्धा", "राजनीतिक विभाजन"], a: "बहुभाषिक एकता" },
            { q: "लक्ष्य पाठ (Target Text) का निर्माण किस पर आधारित होता है?", options: ["स्रोत पाठ का संप्रेष्य", "नया सृजन", "अनुवादक की कल्पना", "पाठक की पसंद"], a: "स्रोत पाठ का संप्रेष्य" },
            { q: "अनुवाद की आवश्यकता का मुख्य कारण क्या है?", options: ["सांस्कृतिक आदान-प्रदान", "समय काटना", "मूल ग्रंथ को नष्ट करना", "लिखना सीखना"], a: "सांस्कृतिक आदान-प्रदान" }
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
        "Chapter 4: Translation Studies": [
            { q: "Translation is the process of moving text from?", options: ["Language creation", "Source Language to Target Language", "Word-for-word copy", "Poetry writing"], a: "Source Language to Target Language" },
            { q: "In translation studies, SL stands for?", options: ["Source Language", "Second Language", "Spoken Language", "Standard Language"], a: "Source Language" },
            { q: "TL stands for?", options: ["Total Language", "Target Language", "Translation Language", "Technical Language"], a: "Target Language" },
            { q: "Translating tools are considered a?", options: ["Hardware system", "Software system", "Manual system", "Database system"], a: "Software system" },
            { q: "Translation tools primarily translate from?", options: ["TL to SL", "SL to TL", "English only", "Hindi only"], a: "SL to TL" },
            { q: "CAT in translation stands for?", options: ["Computer Assisted Translation", "Creative Art Translation", "Common Audio Translation", "Cultural Analysis Tool"], a: "Computer Assisted Translation" },
            { q: "MT in the field of translation means?", options: ["Machine Translation", "Manual Translation", "Modern Translation", "Multiple Translation"], a: "Machine Translation" },
            { q: "TM stands for?", options: ["Translation Memory", "Target Memory", "Technical Manual", "Text Management"], a: "Translation Memory" },
            { q: "Modern Google Translate uses which technology?", options: ["Rule-based MT", "Neural MT", "Dictionary only", "Human translators"], a: "Neural MT" },
            { q: "Which of the following is a famous CAT tool?", options: ["SDL Trados", "Web browser", "Word processor", "Antivirus"], a: "SDL Trados" },
            { q: "A 'Literal Translation' is often called?", options: ["Word-for-word", "Sense-for-sense", "Free translation", "Idiomatic"], a: "Word-for-word" },
            { q: "A translation that preserves the original meaning perfectly is?", options: ["Faithful translation", "Cultural adaptation", "Adds extra meaning", "Shortens text"], a: "Faithful translation" },
            { q: "Semantic translation focuses on?", options: ["Author’s style maintained", "Reader-focused", "Changes meaning", "Poetic license"], a: "Author’s style maintained" },
            { q: "Communicative translation is primarily?", options: ["Reader-oriented", "Author-oriented", "Literal", "Academic"], a: "Reader-oriented" },
            { q: "What is the first step in the translation process?", options: ["Source text analysis", "Target text editing", "Proofreading", "Formatting"], a: "Source text analysis" },
            { q: "Literary translation includes which of these?", options: ["Poetry, novels", "Legal documents", "Medical reports", "Technical manuals"], a: "Poetry, novels" },
            { q: "Technical translation deals with?", options: ["Engineering manuals", "Poems", "Drama", "Essays"], a: "Engineering manuals" },
            { q: "Legal translation requires high level of?", options: ["Precision, certification", "Creative liberty", "Rhyme", "Cultural adaptation"], a: "Precision, certification" },
            { q: "Translation of movies/series via subtitles is?", options: ["Audiovisual translation", "Literary", "Legal", "Commercial"], a: "Audiovisual translation" },
            { q: "Adapting a product to a specific locale/culture is?", options: ["Localization", "Word-for-word", "Literal", "Academic"], a: "Localization" },
            { q: "Untranslatability often occurs due to?", options: ["Cultural differences", "Simple words", "Numbers", "Dates"], a: "Cultural differences" },
            { q: "Equivalence in translation means?", options: ["Same effect on target reader", "Same words", "Same grammar", "Same length"], a: "Same effect on target reader" },
            { q: "Domestication strategy focuses on?", options: ["Target culture norms", "Source culture retained", "Literal", "Foreignization"], a: "Target culture norms" },
            { q: "Foreignization strategy means?", options: ["Source culture retained", "Target culture adapted", "Simplified", "Expanded"], a: "Source culture retained" },
            { q: "Translating a translated text back to the original language is?", options: ["Back translation", "Source to source", "Multiple languages", "Machine only"], a: "Back translation" },
            { q: "Who coined the 'Skopos theory'?", options: ["Hans Vermeer", "Eugene Nida", "Peter Newmark", "Lawrence Venuti"], a: "Hans Vermeer" },
            { q: "Eugene Nida categorized translation into?", options: ["Formal & Dynamic", "Literal & Free", "Semantic & Communicative", "Faithful & Adaptation"], a: "Formal & Dynamic" },
            { q: "How many translation methods were suggested by Peter Newmark?", options: ["8 methods", "5 methods", "10 methods", "3 methods"], a: "8 methods" },
            { q: "Polysystem theory was developed by?", options: ["Itamar Even-Zohar", "Roman Jakobson", "J.C. Catford", "Vinay & Darbelnet"], a: "Itamar Even-Zohar" },
            { q: "Post-colonial translation studies focus on?", options: ["Power dynamics", "Word accuracy", "Rhyme", "Meter"], a: "Power dynamics" }
        ]
    },
    "Fitter Theory": { "Chapter 1": [{ q: "Bench vice size?", options: ["Jaw", "Handle"], a: "Jaw" }] },
    "Digital Marketing": { "Chapter 1": [] },
    "Sociology": { "Chapter 1": [] },
    "Physical education and yoga": { "Chapter 1": [{ q: "शारीरिक शिक्षा का सरल अर्थ क्या है?", options: ["खेल-कूद से सर्वांगीण विकास", "केवल दौड़ना-कूदना", "किताबी ज्ञान", "संगीत प्रशिक्षण"], a: "खेल-कूद से सर्वांगीण विकास" },
        { q: "J.F. Williams की परिभाषा में मुख्य शब्द क्या है?", options: ["Physical activities selected", "Mental development", "Academic learning", "Artistic skills"], a: "Physical activities selected" },
        { q: "Charles A. Bucher के अनुसार शारीरिक शिक्षा किसका हिस्सा है?", options: ["Total education का हिस्सा", "अलग विषय", "केवल खेल", "व्यायाम कला"], a: "Total education का हिस्सा" },
        { q: "शारीरिक शिक्षा का मुख्य लक्ष्य क्या है?", options: ["शारीरिक, मानसिक, भावनात्मक विकास", "केवल मांसपेशियाँ", "परीक्षा पास करना", "डिग्री प्राप्ति"], a: "शारीरिक, मानसिक, भावनात्मक विकास" },
        { q: "शारीरिक शिक्षा का माध्यम क्या है?", options: ["शारीरिक क्रियाएँ", "लिखित परीक्षा", "सैद्धांतिक व्याख्यान", "कंप्यूटर"], a: "शारीरिक क्रियाएँ" },
        { q: "शारीरिक शिक्षा का मुख्य उद्देश्य (Main Aim) क्या है?", options: ["सर्वांगीण विकास", "शारीरिक विकास मात्र", "मानसिक विकास", "आध्यात्मिक विकास"], a: "सर्वांगीण विकास" },
        { q: "शारीरिक विकास का मुख्य अर्थ क्या होता है?", options: ["स्वस्थ, सुगठित शरीर", "तेज बुद्धि", "टीम वर्क", "भावना नियंत्रण"], a: "स्वस्थ, सुगठित शरीर" },
        { q: "मानसिक विकास में कौन से तत्व शामिल हैं?", options: ["एकाग्रता और निर्णय क्षमता", "लंबाई बढ़ाना", "वजन बढ़ाना", "दौड़ने की क्षमता"], a: "एकाग्रता और निर्णय क्षमता" },
        { q: "भावनात्मक विकास का उद्देश्य क्या है?", options: ["क्रोध और भय पर नियंत्रण", "मांसपेशी शक्ति", "सामाजिकता", "संतुलन"], a: "क्रोध और भय पर नियंत्रण" },
        { q: "सामाजिक विकास के अंतर्गत क्या आता है?", options: ["सहयोग, नेतृत्व, अनुशासन", "व्यक्तिगत खेल", "एकल अभ्यास", "सोलो डांस"], a: "सहयोग, नेतृत्व, अनुशासन" },
        { q: "न्यूरोमस्कुलर विकास का संबंध किससे है?", options: ["समन्वय, संतुलन, कौशल", "हृदय शक्ति", "फेफड़े क्षमता", "हड्डी मजबूती"], a: "समन्वय, संतुलन, कौशल" },
        { q: "सर्वांगीण विकास में कौन-कौन से पहलू शामिल हैं?", options: ["शारीरिक, मानसिक, भावनात्मक, सामाजिक", "केवल शारीरिक", "केवल मानसिक", "केवल सामाजिक"], a: "शारीरिक, मानसिक, भावनात्मक, सामाजिक" },
        { q: "शारीरिक शिक्षा के बारे में पहली गलत धारणा (Misconception) क्या है?", options: ["यह केवल खेल-कूद है", "यह शिक्षा का हिस्सा है", "इसमें पढ़ाई भी होती है", "यह करियर बनाता है"], a: "यह केवल खेल-कूद है" },
        { q: "दूसरी गलत धारणा क्या है?", options: ["यह केवल strong body के लिए है", "इससे मन भी विकसित होता है", "यह व्यक्तित्व विकास है", "यह सर्वांगीण वृद्धि है"], a: "यह केवल strong body के लिए है" },
        { q: "तीसरी भ्रांति क्या है?", options: ["यह स्कूल का टाइम-पास है", "यह जीवन भर की प्रक्रिया है", "इसके आजीवन लाभ हैं", "यह करियर की नींव है"], a: "यह स्कूल का टाइम-पास है" },
        { q: "चौथी गलत धारणा क्या समझी जाती है?", options: ["यह केवल कमजोर छात्रों के लिए है", "यह सभी के लिए जरूरी है", "यह स्वस्थ जीवनशैली है", "यह रोग निवारक है"], a: "यह केवल कमजोर छात्रों के लिए है" },
        { q: "पांचवीं भ्रांति क्या है?", options: ["इसमें कोई करियर नहीं बन सकता", "कोचिंग और जिम में स्कोप है", "उच्च शिक्षा (M.P.Ed) संभव है", "रिसर्च का दायरा है"], a: "इसमें कोई करियर नहीं बन सकता" },
        { q: "आधुनिक समाज में शारीरिक शिक्षा की आवश्यकता क्यों है?", options: ["Sedentary lifestyle के कारण", "मोटापा और तनाव के कारण", "टेक्नोलॉजी पर निर्भरता के कारण", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
        { q: "शारीरिक शिक्षा का महत्व क्या है?", options: ["यह रोगों से बचाती है", "अनुशासन सिखाती है", "व्यक्तित्व विकास करती है", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
        { q: "राष्ट्रीय एकीकरण में शारीरिक शिक्षा कैसे मदद करती है?", options: ["खेल संस्कृति बढ़ाकर", "एकता बढ़ाकर", "युवा ऊर्जा का सही उपयोग", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
        { q: "तनाव मुक्ति के लिए शारीरिक शिक्षा को कैसा माना जाता है?", options: ["अत्यंत आवश्यक", "वैकल्पिक", "हानिकारक", "बेकार"], a: "अत्यंत आवश्यक" },
        { q: "शारीरिक शिक्षा का करियर दायरा (Scope) क्या है?", options: ["स्कूल, कॉलेज और जिम", "कोचिंग और फिजियोथेरेपी", "डिफेंस और रिसर्च", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
        { q: "फिटनेस उद्योग में क्या शामिल है?", options: ["जिम, योग और एरोबिक्स", "केवल योग", "केवल जिम", "कोई स्कोप नहीं"], a: "जिम, योग और एरोबिक्स" },
        { q: "सामान्य शिक्षा के साथ शारीरिक शिक्षा का क्या संबंध है?", options: ["अभिन्न अंग", "अलग विषय", "विरोधी", "गौण"], a: "अभिन्न अंग" },
        { q: "प्लेटो का प्रसिद्ध कथन क्या है?", options: ["स्वस्थ शरीर में स्वस्थ मन", "स्वस्थ मन पहले", "शरीर महत्वहीन है", "मन ही सबकुछ है"], a: "स्वस्थ शरीर में स्वस्थ मन" },
        { q: "शिक्षा और शारीरिक शिक्षा का संयोजन क्या करता है?", options: ["पूर्ण व्यक्तित्व विकास", "आंशिक विकास", "केवल शारीरिक विकास", "केवल मानसिक विकास"], a: "पूर्ण व्यक्तित्व विकास" },
        { q: "प्राचीन भारत में शारीरिक शिक्षा के रूप क्या थे?", options: ["धनुर्विद्या, मल्लयुद्ध", "योग, कुश्ती", "वैदिक काल की शिक्षा", "उपरोक्त सभी"], a: "उपरोक्त सभी" },
        { q: "1854 के Wood's Despatch में क्या सुझाव दिया गया था?", options: ["शारीरिक प्रशिक्षण की सिफारिश", "खेलों पर प्रतिबंध", "केवल किताबी ज्ञान", "योग का विरोध"], a: "शारीरिक प्रशिक्षण की सिफारिश" },
        { q: "स्वतंत्रता के बाद 1948 में किस संस्थान की स्थापना हुई?", options: ["LNCPE Gwalior", "NCERT", "UGC", "Khelo India"], a: "LNCPE Gwalior" },
        { q: "आधुनिक भारत में शारीरिक शिक्षा की मुख्य योजनाएं कौन सी हैं?", options: ["Khelo India, Fit India", "NEP 2020", "RKSK 2012", "उपरोक्त सभी"], a: "उपरोक्त सभी" }]
},

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
