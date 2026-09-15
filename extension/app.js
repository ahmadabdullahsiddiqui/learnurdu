/* Roshni Urdu — learning content
   Each vocabulary item: [english, urdu, transliteration, note?]            */

const TOPICS = [
  {
    id: 'greet', kind: 'word', name: 'Greetings & Courtesy', gloss: 'آداب',
    blurb: 'The first fifteen minutes of any conversation.',
    items: [
      ['Peace be upon you (hello)', 'السلام علیکم', 'assalām-u-alaikum', 'The standard greeting.'],
      ['And upon you peace (reply)', 'وعلیکم السلام', 'wa-alaikum assalām', 'The set reply to the greeting.'],
      ['Good morning', 'صبح بخیر', 'subah bakhair'],
      ['Good night', 'شب بخیر', 'shab bakhair'],
      ['Welcome', 'خوش آمدید', 'khush āmdīd'],
      ['Thank you', 'شکریہ', 'shukriya'],
      ['Many thanks', 'بہت شکریہ', 'bahut shukriya'],
      ['Please', 'براہِ کرم', 'barā-e-karam'],
      ['Sorry / excuse me', 'معاف کیجیے', 'muāf kījiye'],
      ['Yes', 'جی ہاں', 'jī hāṅ', 'jī adds politeness; hāṅ alone is casual.'],
      ['No', 'جی نہیں', 'jī nahīṅ'],
      ['Goodbye', 'خدا حافظ', 'khudā hāfiz', 'Literally “God be your protector”.'],
      ['How are you?', 'آپ کیسے ہیں؟', 'āp kaise haiṅ?'],
      ['I am well', 'میں ٹھیک ہوں', 'maiṅ ṭhīk hūṅ'],
      ['See you again', 'پھر ملیں گے', 'phir mileṅge'],
      ['Congratulations', 'مبارک ہو', 'mubārak ho']
    ]
  },
  {
    id: 'people', kind: 'word', name: 'People & Family', gloss: 'خاندان',
    blurb: 'Who everyone is at the dinner table.',
    items: [
      ['mother', 'ماں', 'māṅ'],
      ['father', 'باپ', 'bāp'],
      ['parents', 'والدین', 'wālidain'],
      ['brother', 'بھائی', 'bhāī'],
      ['sister', 'بہن', 'bahan'],
      ['son', 'بیٹا', 'beṭā'],
      ['daughter', 'بیٹی', 'beṭī'],
      ['husband', 'شوہر', 'shauhar'],
      ['wife', 'بیوی', 'bīwī'],
      ['friend', 'دوست', 'dost'],
      ['child', 'بچہ', 'bachcha'],
      ['man', 'آدمی', 'ādmī'],
      ['woman', 'عورت', 'aurat'],
      ['family', 'خاندان', 'khāndān'],
      ['grandfather', 'دادا', 'dādā', "Father's father; mother's father is نانا nānā."],
      ['grandmother', 'دادی', 'dādī', "Father's mother; mother's mother is نانی nānī."],
      ['teacher', 'استاد', 'ustād'],
      ['neighbour', 'پڑوسی', 'paṛosī']
    ]
  },
  {
    id: 'numbers', kind: 'word', name: 'Numbers', gloss: 'گنتی',
    blurb: 'One to twenty, plus hundred and thousand.',
    items: [
      ['one', 'ایک', 'ek'], ['two', 'دو', 'do'], ['three', 'تین', 'tīn'],
      ['four', 'چار', 'chār'], ['five', 'پانچ', 'pānch'], ['six', 'چھ', 'chhe'],
      ['seven', 'سات', 'sāt'], ['eight', 'آٹھ', 'āṭh'], ['nine', 'نو', 'nau'],
      ['ten', 'دس', 'das'], ['eleven', 'گیارہ', 'gyārah'], ['twelve', 'بارہ', 'bārah'],
      ['thirteen', 'تیرہ', 'terah'], ['fourteen', 'چودہ', 'chaudah'], ['fifteen', 'پندرہ', 'pandrah'],
      ['sixteen', 'سولہ', 'solah'], ['seventeen', 'سترہ', 'satrah'], ['eighteen', 'اٹھارہ', 'aṭhārah'],
      ['nineteen', 'انیس', 'unnīs'], ['twenty', 'بیس', 'bīs'],
      ['hundred', 'سو', 'sau'], ['thousand', 'ہزار', 'hazār'],
      ['how many / how much', 'کتنا', 'kitnā']
    ]
  },
  {
    id: 'time', kind: 'word', name: 'Days & Time', gloss: 'وقت',
    blurb: 'The week runs Monday to Sunday — and کل means both yesterday and tomorrow.',
    items: [
      ['Monday', 'پیر', 'pīr'],
      ['Tuesday', 'منگل', 'mangal'],
      ['Wednesday', 'بدھ', 'budh'],
      ['Thursday', 'جمعرات', 'jumerāt'],
      ['Friday', 'جمعہ', 'juma'],
      ['Saturday', 'ہفتہ', 'hafta', 'The same word also means “week”.'],
      ['Sunday', 'اتوار', 'itwār'],
      ['today', 'آج', 'āj'],
      ['tomorrow', 'کل', 'kal', 'Context decides: kal is tomorrow *and* yesterday.'],
      ['yesterday', 'کل', 'kal', 'Same word as tomorrow — the verb tense tells you which.'],
      ['now', 'ابھی', 'abhī'],
      ['day', 'دن', 'din'],
      ['night', 'رات', 'rāt'],
      ['morning', 'صبح', 'subah'],
      ['evening', 'شام', 'shām'],
      ['month', 'مہینہ', 'mahīna'],
      ['year', 'سال', 'sāl'],
      ['hour', 'گھنٹہ', 'ghanṭa'],
      ['minute', 'منٹ', 'minaṭ'],
      ['time', 'وقت', 'waqt']
    ]
  },
  {
    id: 'food', kind: 'word', name: 'Food & Drink', gloss: 'کھانا',
    blurb: 'Enough to order, refuse and compliment a meal.',
    items: [
      ['water', 'پانی', 'pānī'],
      ['bread (flatbread)', 'روٹی', 'roṭī'],
      ['rice', 'چاول', 'chāwal'],
      ['meat', 'گوشت', 'gosht'],
      ['chicken', 'مرغی', 'murghī'],
      ['fish', 'مچھلی', 'machhlī'],
      ['egg', 'انڈا', 'anḍā'],
      ['milk', 'دودھ', 'dūdh'],
      ['tea', 'چائے', 'chāy'],
      ['vegetable', 'سبزی', 'sabzī'],
      ['fruit', 'پھل', 'phal'],
      ['apple', 'سیب', 'seb'],
      ['mango', 'آم', 'ām'],
      ['salt', 'نمک', 'namak'],
      ['sugar', 'چینی', 'chīnī', 'The same word means “Chinese”.'],
      ['oil', 'تیل', 'tel'],
      ['food / meal', 'کھانا', 'khānā', 'Also the verb “to eat”.'],
      ['hungry', 'بھوکا', 'bhūkā'],
      ['thirsty', 'پیاسا', 'pyāsā'],
      ['delicious', 'مزیدار', 'mazedār']
    ]
  },
  {
    id: 'colors', kind: 'word', name: 'Colours', gloss: 'رنگ',
    blurb: 'Several are borrowed straight from Persian.',
    items: [
      ['colour', 'رنگ', 'rang'],
      ['red', 'سرخ', 'surkh'],
      ['blue', 'نیلا', 'nīlā'],
      ['green', 'سبز', 'sabz'],
      ['yellow', 'پیلا', 'pīlā'],
      ['black', 'کالا', 'kālā'],
      ['white', 'سفید', 'safed'],
      ['brown', 'بھورا', 'bhūrā'],
      ['orange', 'نارنجی', 'nāranjī'],
      ['pink', 'گلابی', 'gulābī', 'From گلاب gulāb, “rose”.'],
      ['grey', 'سرمئی', 'surmaī'],
      ['purple', 'جامنی', 'jāmnī']
    ]
  },
  {
    id: 'body', kind: 'word', name: 'The Body', gloss: 'جسم',
    blurb: 'Head to foot — useful at the doctor and in idioms.',
    items: [
      ['head', 'سر', 'sar'],
      ['hair', 'بال', 'bāl'],
      ['eye', 'آنکھ', 'āṅkh'],
      ['ear', 'کان', 'kān'],
      ['nose', 'ناک', 'nāk'],
      ['mouth', 'منہ', 'muṅh'],
      ['tooth', 'دانت', 'dānt'],
      ['hand / arm', 'ہاتھ', 'hāth'],
      ['foot / leg', 'پاؤں', 'pāoṅ'],
      ['heart', 'دل', 'dil', 'Carries the sense of “mind, feeling” too.'],
      ['stomach', 'پیٹ', 'peṭ'],
      ['back', 'کمر', 'kamar'],
      ['finger', 'انگلی', 'unglī'],
      ['face', 'چہرہ', 'chehra'],
      ['body', 'جسم', 'jism']
    ]
  },
  {
    id: 'home', kind: 'word', name: 'Home & Things', gloss: 'گھر',
    blurb: 'The objects within arm’s reach.',
    items: [
      ['house / home', 'گھر', 'ghar'],
      ['door', 'دروازہ', 'darwāza'],
      ['window', 'کھڑکی', 'khiṛkī'],
      ['room', 'کمرہ', 'kamra'],
      ['kitchen', 'باورچی خانہ', 'bāwarchī khāna'],
      ['table', 'میز', 'mez'],
      ['chair', 'کرسی', 'kursī'],
      ['bed', 'بستر', 'bistar'],
      ['key', 'چابی', 'chābī'],
      ['book', 'کتاب', 'kitāb'],
      ['pen', 'قلم', 'qalam'],
      ['phone', 'فون', 'fon'],
      ['money', 'پیسے', 'paise'],
      ['clothes', 'کپڑے', 'kapṛe'],
      ['shoes', 'جوتے', 'jūte'],
      ['light', 'روشنی', 'roshnī', 'The app is named for this word.']
    ]
  },
  {
    id: 'travel', kind: 'word', name: 'Travel & Directions', gloss: 'سفر',
    blurb: 'Getting from the airport to the right street.',
    items: [
      ['city', 'شہر', 'shahr'],
      ['village', 'گاؤں', 'gāoṅ'],
      ['road / street', 'سڑک', 'saṛak'],
      ['station', 'اسٹیشن', 'sṭeshan'],
      ['airport', 'ہوائی اڈا', 'hawāī aḍḍā', 'Literally “air stand”.'],
      ['train', 'ٹرین', 'ṭren'],
      ['bus', 'بس', 'bas'],
      ['car', 'گاڑی', 'gāṛī'],
      ['ticket', 'ٹکٹ', 'ṭikaṭ'],
      ['left', 'بائیں', 'bāeṅ'],
      ['right', 'دائیں', 'dāeṅ'],
      ['straight ahead', 'سیدھا', 'sīdhā'],
      ['near', 'قریب', 'qarīb'],
      ['far', 'دور', 'dūr'],
      ['here', 'یہاں', 'yahāṅ'],
      ['there', 'وہاں', 'wahāṅ'],
      ['market', 'بازار', 'bāzār'],
      ['hotel', 'ہوٹل', 'hoṭal']
    ]
  },
  {
    id: 'verbs', kind: 'word', name: 'Everyday Verbs', gloss: 'افعال',
    blurb: 'Dictionary forms all end in ‑نا ‑nā.',
    items: [
      ['to go', 'جانا', 'jānā'],
      ['to come', 'آنا', 'ānā'],
      ['to eat', 'کھانا', 'khānā'],
      ['to drink', 'پینا', 'pīnā'],
      ['to do / to make', 'کرنا', 'karnā'],
      ['to see / to look', 'دیکھنا', 'dekhnā'],
      ['to say', 'کہنا', 'kahnā'],
      ['to listen / to hear', 'سننا', 'sunnā'],
      ['to read / to study', 'پڑھنا', 'paṛhnā'],
      ['to write', 'لکھنا', 'likhnā'],
      ['to sleep', 'سونا', 'sonā'],
      ['to sit', 'بیٹھنا', 'baiṭhnā'],
      ['to buy', 'خریدنا', 'kharīdnā'],
      ['to give', 'دینا', 'denā'],
      ['to take', 'لینا', 'lenā'],
      ['to understand', 'سمجھنا', 'samajhnā'],
      ['to work', 'کام کرنا', 'kām karnā'],
      ['to learn', 'سیکھنا', 'sīkhnā'],
      ['to speak', 'بولنا', 'bolnā'],
      ['to want / to need', 'چاہنا', 'chāhnā']
    ]
  },
  {
    id: 'adj', kind: 'word', name: 'Describing Things', gloss: 'صفات',
    blurb: 'Mostly opposites, mostly in pairs.',
    items: [
      ['big', 'بڑا', 'baṛā'],
      ['small', 'چھوٹا', 'chhoṭā'],
      ['good', 'اچھا', 'achchhā'],
      ['bad', 'برا', 'burā'],
      ['new', 'نیا', 'nayā'],
      ['old', 'پرانا', 'purānā'],
      ['hot', 'گرم', 'garam'],
      ['cold', 'ٹھنڈا', 'ṭhanḍā'],
      ['easy', 'آسان', 'āsān'],
      ['difficult', 'مشکل', 'mushkil'],
      ['beautiful', 'خوبصورت', 'khūbsūrat'],
      ['expensive', 'مہنگا', 'mahngā'],
      ['cheap', 'سستا', 'sastā'],
      ['fast', 'تیز', 'tez'],
      ['slow', 'آہستہ', 'āhista'],
      ['a lot / very', 'بہت', 'bahut'],
      ['a little', 'تھوڑا', 'thoṛā'],
      ['true', 'سچ', 'sach']
    ]
  },
  {
    id: 'nature', kind: 'word', name: 'Weather & Nature', gloss: 'موسم',
    blurb: 'The vocabulary of Urdu poetry, as it happens.',
    items: [
      ['sun', 'سورج', 'sūraj'],
      ['moon', 'چاند', 'chānd'],
      ['star', 'ستارہ', 'sitāra'],
      ['sky', 'آسمان', 'āsmān'],
      ['rain', 'بارش', 'bārish'],
      ['wind / air', 'ہوا', 'hawā'],
      ['cloud', 'بادل', 'bādal'],
      ['tree', 'درخت', 'darakht'],
      ['flower', 'پھول', 'phūl'],
      ['river', 'دریا', 'daryā'],
      ['mountain', 'پہاڑ', 'pahāṛ'],
      ['sea', 'سمندر', 'samundar'],
      ['ground / land', 'زمین', 'zamīn'],
      ['fire', 'آگ', 'āg'],
      ['snow / ice', 'برف', 'barf'],
      ['weather / season', 'موسم', 'mausam']
    ]
  },
  {
    id: 'animals', kind: 'word', name: 'Animals', gloss: 'جانور',
    blurb: 'Pets, farm animals and a few from the jungle.',
    items: [
      ['dog', 'کتا', 'kuttā'],
      ['cat', 'بلی', 'billī'],
      ['cow', 'گائے', 'gāy'],
      ['horse', 'گھوڑا', 'ghoṛā'],
      ['goat', 'بکری', 'bakrī'],
      ['sheep', 'بھیڑ', 'bheṛ'],
      ['donkey', 'گدھا', 'gadhā'],
      ['hen', 'مرغی', 'murghī'],
      ['bird', 'پرندہ', 'parinda'],
      ['lion', 'شیر', 'sher', 'The same word is used for “tiger” in everyday speech.'],
      ['elephant', 'ہاتھی', 'hāthī'],
      ['monkey', 'بندر', 'bandar'],
      ['rabbit', 'خرگوش', 'khargosh'],
      ['mouse', 'چوہا', 'chūhā'],
      ['snake', 'سانپ', 'sāṅp'],
      ['fish', 'مچھلی', 'machhlī']
    ]
  },
  {
    id: 'school', kind: 'word', name: 'At School', gloss: 'اسکول',
    blurb: 'Everything in the classroom and the school bag.',
    items: [
      ['school', 'اسکول', 'skūl'],
      ['student', 'طالب علم', 'tālib-e-ilm'],
      ['teacher', 'استاد', 'ustād'],
      ['book', 'کتاب', 'kitāb'],
      ['notebook', 'کاپی', 'kāpī'],
      ['pen', 'قلم', 'qalam'],
      ['pencil', 'پنسل', 'pinsil'],
      ['paper', 'کاغذ', 'kāghaz'],
      ['school bag', 'بستہ', 'basta'],
      ['lesson', 'سبق', 'sabaq'],
      ['question', 'سوال', 'sawāl'],
      ['answer', 'جواب', 'jawāb'],
      ['word', 'لفظ', 'lafz'],
      ['language', 'زبان', 'zabān', 'Also means “tongue”.']
    ]
  },
  {
    id: 'feelings', kind: 'word', name: 'Feelings', gloss: 'جذبات',
    blurb: 'How you feel today — good for talking about the day.',
    items: [
      ['happy', 'خوش', 'khush'],
      ['sad', 'اداس', 'udās'],
      ['angry / upset', 'ناراض', 'nārāz'],
      ['afraid', 'ڈرا ہوا', 'ḍarā huā', 'A girl says ڈری ہوئی ḍarī huī.'],
      ['tired', 'تھکا ہوا', 'thakā huā'],
      ['hungry', 'بھوکا', 'bhūkā'],
      ['thirsty', 'پیاسا', 'pyāsā'],
      ['surprised', 'حیران', 'hairān'],
      ['bored', 'بور', 'bor'],
      ['love', 'محبت', 'muhabbat'],
      ['to laugh', 'ہنسنا', 'haṅsnā'],
      ['to cry', 'رونا', 'ronā']
    ]
  },
  {
    id: 'play', kind: 'word', name: 'Play & Sports', gloss: 'کھیل',
    blurb: 'Games, toys and things to do outside.',
    items: [
      ['to play', 'کھیلنا', 'khelnā'],
      ['game', 'کھیل', 'khel'],
      ['toy', 'کھلونا', 'khilaunā'],
      ['ball', 'گیند', 'gend'],
      ['kite', 'پتنگ', 'patang'],
      ['cricket', 'کرکٹ', 'kriket'],
      ['football', 'فٹبال', 'fuṭbāl'],
      ['swimming', 'تیراکی', 'terākī'],
      ['park', 'پارک', 'pārk'],
      ['to run', 'دوڑنا', 'dauṛnā'],
      ['to jump', 'کودنا', 'kūdnā'],
      ['to win', 'جیتنا', 'jītnā'],
      ['to lose', 'ہارنا', 'hārnā']
    ]
  },

  /* ---- phrase sets ---- */
  {
    id: 'intro', kind: 'phrase', name: 'Introducing Yourself', gloss: 'تعارف',
    blurb: 'Name, origin, and admitting you are still learning.',
    items: [
      ['My name is …', 'میرا نام … ہے', 'merā nām … hai'],
      ['What is your name?', 'آپ کا نام کیا ہے؟', 'āp kā nām kyā hai?'],
      ['I am from Germany', 'میں جرمنی سے ہوں', 'maiṅ jarmanī se hūṅ'],
      ['Where are you from?', 'آپ کہاں سے ہیں؟', 'āp kahāṅ se haiṅ?'],
      ['Pleased to meet you', 'آپ سے مل کر خوشی ہوئی', 'āp se mil kar khushī huī'],
      ['I am learning Urdu', 'میں اردو سیکھ رہا ہوں', 'maiṅ urdū sīkh rahā hūṅ', 'A woman says سیکھ رہی ہوں sīkh rahī hūṅ.'],
      ['I do not speak Urdu well', 'میں اچھی اردو نہیں بولتا', 'maiṅ achchhī urdū nahīṅ boltā'],
      ['Do you speak English?', 'کیا آپ انگریزی بولتے ہیں؟', 'kyā āp angrezī bolte haiṅ?'],
      ['I do not understand', 'میں نہیں سمجھا', 'maiṅ nahīṅ samjhā'],
      ['Please say that again', 'دوبارہ کہیے', 'dobāra kahiye'],
      ['Please speak slowly', 'ذرا آہستہ بولیے', 'zarā āhista boliye'],
      ['What does this mean?', 'اس کا کیا مطلب ہے؟', 'is kā kyā matlab hai?']
    ]
  },
  {
    id: 'outabout', kind: 'phrase', name: 'Out & About', gloss: 'بازار میں',
    blurb: 'Shops, taxis, and finding the bathroom.',
    items: [
      ['How much is this?', 'یہ کتنے کا ہے؟', 'yeh kitne kā hai?'],
      ['That is too expensive', 'یہ بہت مہنگا ہے', 'yeh bahut mahngā hai'],
      ['I would like this', 'مجھے یہ چاہیے', 'mujhe yeh chāhiye'],
      ['Where is the bathroom?', 'باتھ روم کہاں ہے؟', 'bāth rūm kahāṅ hai?'],
      ['Where is the station?', 'اسٹیشن کہاں ہے؟', 'sṭeshan kahāṅ hai?'],
      ['Please help me', 'میری مدد کیجیے', 'merī madad kījiye'],
      ['I am lost', 'میں راستہ بھول گیا ہوں', 'maiṅ rāsta bhūl gayā hūṅ'],
      ['Water, please', 'پانی دیجیے', 'pānī dījiye'],
      ['The bill, please', 'بل دیجیے', 'bil dījiye'],
      ['What time is it?', 'کیا وقت ہوا ہے؟', 'kyā waqt huā hai?'],
      ['Is it far?', 'کیا یہ دور ہے؟', 'kyā yeh dūr hai?'],
      ['Take me here, please', 'مجھے یہاں لے چلیے', 'mujhe yahāṅ le chaliye']
    ]
  },
  {
    id: 'smalltalk', kind: 'phrase', name: 'Small Talk', gloss: 'گپ شپ',
    blurb: 'The filler that keeps a conversation alive.',
    items: [
      ['What do you do?', 'آپ کیا کام کرتے ہیں؟', 'āp kyā kām karte haiṅ?'],
      ['I work at a company', 'میں ایک کمپنی میں کام کرتا ہوں', 'maiṅ ek kampanī meṅ kām kartā hūṅ'],
      ['The weather is lovely today', 'آج موسم بہت اچھا ہے', 'āj mausam bahut achchhā hai'],
      ['I like this very much', 'مجھے یہ بہت پسند ہے', 'mujhe yeh bahut pasand hai'],
      ['No problem', 'کوئی بات نہیں', 'koī bāt nahīṅ'],
      ['Really?', 'واقعی؟', 'wāqaī?'],
      ['Of course', 'ضرور', 'zarūr'],
      ['Let’s go', 'چلیں', 'chaleṅ'],
      ['One moment', 'ایک منٹ', 'ek minaṭ'],
      ['I am tired', 'میں تھک گیا ہوں', 'maiṅ thak gayā hūṅ'],
      ['Best wishes', 'نیک تمنائیں', 'nek tamannāeṅ'],
      ['Take care', 'اپنا خیال رکھیے', 'apnā khayāl rakhiye']
    ]
  }
];

/* ---- the Urdu alphabet ----
   [letter, name, sound, note?]  — joined forms are generated with ZWJ    */
const ALPHABET = [
  ['ا', 'alif', 'a / ā', 'Carries a long ā; آ with madda starts words.'],
  ['ب', 'be', 'b'],
  ['پ', 'pe', 'p', 'Added for Indic sounds Arabic lacks.'],
  ['ت', 'te', 't', 'Soft, dental — tongue on the teeth.'],
  ['ٹ', 'ṭe', 'ṭ', 'Retroflex — tongue curled back. The small ط above marks it.'],
  ['ث', 'se', 's'],
  ['ج', 'jīm', 'j'],
  ['چ', 'che', 'ch'],
  ['ح', 'baṛī he', 'h'],
  ['خ', 'khe', 'kh', 'Like the ch in German “Bach”.'],
  ['د', 'dāl', 'd', 'Never joins to the left.'],
  ['ڈ', 'ḍāl', 'ḍ', 'Retroflex d.'],
  ['ذ', 'zāl', 'z'],
  ['ر', 're', 'r'],
  ['ڑ', 'ṛe', 'ṛ', 'A flapped retroflex — no English equivalent.'],
  ['ز', 'ze', 'z'],
  ['ژ', 'zhe', 'zh', 'Rare; the s in “measure”.'],
  ['س', 'sīn', 's'],
  ['ش', 'shīn', 'sh'],
  ['ص', 'su’ād', 's'],
  ['ض', 'zu’ād', 'z'],
  ['ط', 'to’e', 't'],
  ['ظ', 'zo’e', 'z'],
  ['ع', 'ain', '‘ (vowel carrier)', 'In Urdu it mostly carries the vowel beside it.'],
  ['غ', 'ghain', 'gh', 'A throaty, French‑style r.'],
  ['ف', 'fe', 'f'],
  ['ق', 'qāf', 'q', 'A k made far back in the throat.'],
  ['ک', 'kāf', 'k'],
  ['گ', 'gāf', 'g'],
  ['ل', 'lām', 'l'],
  ['م', 'mīm', 'm'],
  ['ن', 'nūn', 'n'],
  ['ں', 'nūn ghunna', 'nasal', 'Nasalises the vowel before it; only at word end.'],
  ['و', 'wā’o', 'w / o / ū'],
  ['ہ', 'choṭī he', 'h / a', 'Also spells the final ‑a of words like کمرہ kamra.'],
  ['ھ', 'do‑chashmī he', 'aspiration', 'Pairs with another letter: ک + ھ = کھ kh.'],
  ['ء', 'hamza', 'glottal stop', 'Separates two vowels, as in کوئی koī.'],
  ['ی', 'choṭī ye', 'y / ī', ''],
  ['ے', 'baṛī ye', 'e / ai', 'Word‑final only, as in ہے hai.']
];

/* ---- grammar notes ---- */
const GRAMMAR = [
  {
    id: 'g1', title: 'The verb comes last',
    body: 'Urdu builds a sentence subject → object → verb. English “I eat bread” is literally “I bread eat‑am”. Once you expect the verb at the end, long sentences stop being frightening.',
    ex: [['میں روٹی کھاتا ہوں', 'maiṅ roṭī khātā hūṅ', 'I eat bread'],
         ['وہ اردو سیکھتی ہے', 'woh urdū sīkhtī hai', 'She learns Urdu']]
  },
  {
    id: 'g2', title: 'Pronouns and three levels of “you”',
    body: 'میں maiṅ (I), ہم ham (we), تُو tū (intimate, rare), تم tum (familiar), آپ āp (polite), یہ yeh (this / he / she near), وہ woh (that / he / she away). As a learner, use آپ with everyone until someone invites you to do otherwise.',
    ex: [['آپ کہاں جا رہے ہیں؟', 'āp kahāṅ jā rahe haiṅ?', 'Where are you going?'],
         ['ہم گھر جا رہے ہیں', 'ham ghar jā rahe haiṅ', 'We are going home']]
  },
  {
    id: 'g3', title: '“To be” — honā in the present',
    body: 'میں … ہوں hūṅ · تم … ہو ho · یہ / وہ … ہے hai · ہم / آپ / وہ (plural) … ہیں haiṅ. This little verb closes most beginner sentences.',
    ex: [['میں استاد ہوں', 'maiṅ ustād hūṅ', 'I am a teacher'],
         ['یہ میری کتاب ہے', 'yeh merī kitāb hai', 'This is my book']]
  },
  {
    id: 'g4', title: 'Every noun has a gender',
    body: 'Nouns are masculine or feminine, and adjectives ending in ‑ا ‑ā shift to ‑ی ‑ī for feminine nouns. Adjectives that do not end in ‑ā (خوبصورت, مشکل) never change.',
    ex: [['اچھا لڑکا', 'achchhā laṛkā', 'a good boy'],
         ['اچھی لڑکی', 'achchhī laṛkī', 'a good girl']]
  },
  {
    id: 'g5', title: 'Postpositions, not prepositions',
    body: 'Urdu puts its little words after the noun: میں meṅ (in), پر par (on), سے se (from / with), کو ko (to), کے ساتھ ke sāth (together with), کے لیے ke liye (for).',
    ex: [['گھر میں', 'ghar meṅ', 'in the house'],
         ['دوست کے ساتھ', 'dost ke sāth', 'with a friend']]
  },
  {
    id: 'g6', title: 'The verb agrees with you',
    body: 'In the present habitual the verb stem takes ‑تا ‑tā for a masculine speaker and ‑تی ‑tī for a feminine one, then ہوں / ہے / ہیں follows. So the same sentence differs depending on who says it.',
    ex: [['میں کام کرتا ہوں', 'maiṅ kām kartā hūṅ', 'I work (man speaking)'],
         ['میں کام کرتی ہوں', 'maiṅ kām kartī hūṅ', 'I work (woman speaking)']]
  },
  {
    id: 'g7', title: 'Saying no',
    body: 'نہیں nahīṅ goes directly before the verb, and in the present tense the ہے / ہیں is often dropped after it.',
    ex: [['میں نہیں جاتا', 'maiṅ nahīṅ jātā', 'I do not go'],
         ['یہ مشکل نہیں', 'yeh mushkil nahīṅ', 'This is not difficult']]
  },
  {
    id: 'g8', title: 'Asking a question',
    body: 'For yes/no questions put کیا kyā at the front — it is a spoken question mark. Otherwise use a question word in the middle: کون kaun (who), کیا kyā (what), کہاں kahāṅ (where), کب kab (when), کیوں kyoṅ (why), کیسے kaise (how), کتنا kitnā (how much).',
    ex: [['کیا آپ ٹھیک ہیں؟', 'kyā āp ṭhīk haiṅ?', 'Are you well?'],
         ['یہ کیا ہے؟', 'yeh kyā hai?', 'What is this?']]
  },
  {
    id: 'g9', title: 'Polite requests',
    body: 'The ‑یے ‑iye ending turns a verb into a courteous request: کہنا → کہیے, بولنا → بولیے, دینا → دیجیے. With friends the familiar form ends in ‑و ‑o: کرو karo, بولو bolo.',
    ex: [['ذرا سنیے', 'zarā suniye', 'Listen a moment, please'],
         ['اندر آئیے', 'andar āiye', 'Please come in']]
  },
  {
    id: 'g10', title: 'Reading the script',
    body: 'Urdu runs right to left in the flowing nastaliq style, where each word slopes down toward the left. Short vowels are usually not written — you supply them from knowing the word, exactly as you do with an abbreviation in English. Letters change shape depending on whether they start, sit inside, or end a word; the Script tab shows all four forms of each letter.',
    ex: [['اردو', 'urdū', 'Urdu'],
         ['روشنی', 'roshnī', 'light']]
  }
];


/* ============================ state ============================ */
var ZWJ='‍';
var KEY='roshni.v1';
var INTERVALS=[0,1,3,7,16,35];
var GOAL=20;

function blank(){return{srs:{},streak:0,lastDay:null,today:null,todayCount:0,quiz:{},hintShown:false,voiceURI:null,slow:false};}
function load(){
  try{var r=localStorage.getItem(KEY);if(!r)return blank();
    var o=JSON.parse(r);var b=blank();for(var k in b)if(!(k in o))o[k]=b[k];return o;}
  catch(e){return blank();}
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
var S=load();

function dayKey(d){d=d||new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function yesterKey(){var d=new Date();d.setDate(d.getDate()-1);return dayKey(d);}
function rollDay(){
  var t=dayKey();
  if(S.today!==t){S.today=t;S.todayCount=0;}
}
function shownStreak(){
  if(S.lastDay===dayKey()||S.lastDay===yesterKey())return S.streak;
  return 0;
}
function countStudy(){
  var t=dayKey();
  if(S.lastDay!==t){S.streak=(S.lastDay===yesterKey())?S.streak+1:1;S.lastDay=t;}
  rollDay();S.todayCount++;save();
}

/* ============================ words ============================ */
var WORDS=[];
TOPICS.forEach(function(t){
  t.items.forEach(function(it,i){
    WORDS.push({id:t.id+':'+i,en:it[0],ur:it[1],tl:it[2],note:it[3]||'',topic:t.id,kind:t.kind});
  });
});
var BY_ID={};WORDS.forEach(function(w){BY_ID[w.id]=w;});
function topicWords(id){return WORDS.filter(function(w){return w.topic===id;});}
function topicById(id){for(var i=0;i<TOPICS.length;i++)if(TOPICS[i].id===id)return TOPICS[i];}

function mastery(id){
  var ws=topicWords(id),sum=0;
  ws.forEach(function(w){var r=S.srs[w.id];if(r)sum+=Math.min(r.box,5);});
  return ws.length?sum/(ws.length*5):0;
}
function overall(){
  var sum=0;WORDS.forEach(function(w){var r=S.srs[w.id];if(r)sum+=Math.min(r.box,5);});
  return WORDS.length?sum/(WORDS.length*5):0;
}
function learnedCount(){var n=0;WORDS.forEach(function(w){if(S.srs[w.id]&&S.srs[w.id].box>=3)n++;});return n;}
function dueNow(){
  var now=Date.now(),n=0;
  WORDS.forEach(function(w){var r=S.srs[w.id];if(r&&r.due<=now)n++;});
  return n;
}
function queue(limit,topic){
  var now=Date.now(),pool=topic?topicWords(topic):WORDS,due=[],fresh=[];
  pool.forEach(function(w){var r=S.srs[w.id];if(!r)fresh.push(w);else if(r.due<=now)due.push(w);});
  shuffle(due);
  return due.concat(fresh.slice(0,Math.max(0,limit-due.length))).slice(0,limit);
}
function grade(id,g){
  var r=S.srs[id]||{box:0,lapses:0,reps:0,due:0};
  if(g==='again'){r.box=0;r.lapses++;r.due=Date.now()+6e5;}
  else{r.box=Math.min(5,r.box+(g==='easy'?2:1));r.due=Date.now()+INTERVALS[r.box]*864e5;}
  r.reps++;S.srs[id]=r;countStudy();
}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* ============================ speech ============================ */
var VOICES=[];
function refreshVoices(){try{VOICES=window.speechSynthesis?speechSynthesis.getVoices():[];}catch(e){VOICES=[];}
  /* if voices arrive after the Home view is already showing, repaint it so
     the picker fills in (route is undefined during the very first call) */
  if(typeof route!=='undefined'&&route&&route.tab==='home'&&document.getElementById('view'))render();}
function hasSpeech(){return !!window.speechSynthesis;}
refreshVoices();
if(window.speechSynthesis&&typeof speechSynthesis.addEventListener==='function'){
  speechSynthesis.addEventListener('voiceschanged',refreshVoices);
}
/* An Urdu voice, if the device has one. (Hindi is offered as a manual
   choice in settings, but never picked automatically: a Hindi engine
   cannot read the Arabic-based Urdu script, so we let the OS try its own
   Urdu engine via lang='ur-PK' instead.) */
function urduVoice(){
  for(var i=0;i<VOICES.length;i++)if(/^ur(-|_|$)/i.test(VOICES[i].lang||''))return VOICES[i];
  return null;
}
/* Voices worth listing in the picker: any Urdu or Hindi voice installed. */
function pronVoices(){
  return VOICES.filter(function(v){return /^(ur|hi)(-|_|$)/i.test(v.lang||'');});
}
function chosenVoice(){
  if(S.voiceURI){
    for(var i=0;i<VOICES.length;i++)if(VOICES[i].voiceURI===S.voiceURI)return VOICES[i];
  }
  return urduVoice();
}
/* How to enable a spoken voice, shown when none is installed. */
var NOVOICE_TIP='No Urdu voice is installed on this device, so there is no sound. '+
  'On Windows the quickest fix is to open this page in Microsoft Edge, which has built-in online Urdu voices. '+
  'Or install a voice — Windows: Settings › Time & language › Language & region › add Urdu (with the speech option); '+
  'Android: Settings › System › Languages & input › Text-to-speech; '+
  'iPhone: Settings › Accessibility › Spoken Content › Voices.';
function speak(text){
  if(!window.speechSynthesis){toast('This browser has no speech engine.');return;}
  try{
    if(!VOICES.length)refreshVoices();
    speechSynthesis.cancel();
    speechSynthesis.resume(); /* Chrome can leave the queue paused; nudge it */
    var u=new SpeechSynthesisUtterance(text);
    var v=chosenVoice();
    u.lang=v?v.lang:'ur-PK';
    u.rate=S.slow?0.55:0.8;u.pitch=1;
    if(v)u.voice=v;
    speechSynthesis.speak(u);
    if(!v)toast(NOVOICE_TIP);          /* no usable voice — explain the silence */
  }catch(e){toast('Speech is unavailable here.');}
}
var toastTimer;
function toast(msg){
  var el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(function(){el.classList.remove('show');},4200);
}

/* ============================ routing ============================ */
var route={tab:'home',sub:null,arg:null};
var ICONS={
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  learn:'<path d="M4 4.5h6a2.5 2.5 0 0 1 2.5 2.5v13a2 2 0 0 0-2-2H4z"/><path d="M20 4.5h-6A2.5 2.5 0 0 0 11.5 7v13a2 2 0 0 1 2-2H20z"/>',
  cards:'<rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h9.5A2.5 2.5 0 0 1 20 6.5V16"/>',
  quiz:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12.3 2.4 2.4 4.6-4.9"/>',
  script:'<path d="M17.5 3.5 20.5 6.5 9 18l-4 1 1-4z"/><path d="M4 21h16"/>'
};
var TABS=[['home','Home'],['learn','Learn'],['cards','Cards'],['quiz','Quiz'],['script','Script']];
function paintTabs(){
  document.getElementById('tabs').innerHTML=TABS.map(function(t){
    return '<button class="tab" data-tab="'+t[0]+'"'+(route.tab===t[0]?' aria-current="page"':'')+
      '><svg viewBox="0 0 24 24">'+ICONS[t[0]]+'</svg><span>'+t[1]+'</span></button>';
  }).join('');
}
function go(tab,sub,arg){
  route={tab:tab,sub:sub||null,arg:(arg==null?null:arg)};
  paintTabs();render();
  window.scrollTo(0,0);
}
document.getElementById('tabs').addEventListener('click',function(e){
  var b=e.target.closest('[data-tab]');if(b)go(b.dataset.tab);
});

/* ============================ chrome ============================ */
function paintChrome(){
  var s=shownStreak();
  document.getElementById('streakChip').textContent=s===1?'1 day streak':s+' day streak';
  var d=dueNow();
  document.getElementById('dueChip').textContent=d===0?'nothing due':d+' due';
}

/* ============================ views ============================ */
function render(){
  rollDay();paintChrome();
  var v=document.getElementById('view');
  var html=({home:viewHome,learn:viewLearn,cards:viewCards,quiz:viewQuiz,script:viewScript})[route.tab]();
  v.innerHTML=html;
}

/* ---- home ---- */
function ringSvg(frac){
  var r=38,c=2*Math.PI*r;
  return '<svg width="86" height="86" viewBox="0 0 86 86">'+
    '<circle cx="43" cy="43" r="'+r+'" stroke="var(--raise)" stroke-width="7" fill="none"/>'+
    '<circle cx="43" cy="43" r="'+r+'" stroke="var(--gold)" stroke-width="7" fill="none" stroke-linecap="round"'+
    ' stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+(c*(1-frac)).toFixed(1)+'"/></svg>';
}
function viewHome(){
  var done=Math.min(S.todayCount,GOAL),frac=done/GOAL;
  var d=dueNow(),wordOfDay=WORDS[(new Date().getDate()*7+new Date().getMonth()*31)%WORDS.length];
  var learned=learnedCount();
  var h='<div class="stack">';
  h+='<div class="hero"><div class="ring">'+ringSvg(frac)+
     '<div class="val"><div><b>'+done+'</b><span>of '+GOAL+'</span></div></div></div>'+
     '<div class="grow"><div class="eyebrow">Today</div>'+
     '<h2 style="font-size:1.25rem;margin:2px 0 4px">'+
       (done>=GOAL?'Goal met':(done>0?'Keep going':'Ready when you are'))+'</h2>'+
     '<p class="muted" style="margin:0">'+
       (d>0? d+' card'+(d===1?'':'s')+' waiting for review.' : 'Nothing is due — new words are queued up.')+
     '</p></div></div>';

  h+='<button class="btn" data-start="all">'+(d>0?'Review '+d+' card'+(d===1?'':'s'):'Start a session')+'</button>';

  h+='<div class="split">'+
     '<div class="card pad"><div class="eyebrow">Words known</div><div style="font-family:Newsreader,Georgia,serif;font-size:1.6rem;font-weight:600;font-variant-numeric:tabular-nums">'+learned+' <span style="font-size:.9rem;color:var(--ink3);font-family:\'IBM Plex Sans\',sans-serif">/ '+WORDS.length+'</span></div></div>'+
     '<div class="card pad"><div class="eyebrow">Overall mastery</div><div style="font-family:Newsreader,Georgia,serif;font-size:1.6rem;font-weight:600;font-variant-numeric:tabular-nums">'+Math.round(overall()*100)+'%</div></div>'+
     '</div>';

  h+='<div class="sec"><h2>Word of the day</h2><span class="ur">لفظِ روز</span></div>';
  h+='<div class="card"><div class="entry">'+spkBtn(wordOfDay.ur)+'<div class="grow">'+
     '<div class="en">'+esc(wordOfDay.en)+'</div>'+
     '<div class="ur">'+esc(wordOfDay.ur)+'</div>'+
     '<div class="tl">'+esc(wordOfDay.tl)+'</div>'+
     (wordOfDay.note?'<div class="note">'+esc(wordOfDay.note)+'</div>':'')+
     '</div></div></div>';

  h+='<div class="sec"><h2>Your topics</h2></div><div class="card rowlist">';
  TOPICS.slice(0,6).forEach(function(t){h+=topicRow(t);});
  h+='</div>';
  h+='<button class="btn ghost" data-go="learn">See all '+TOPICS.length+' topics</button>';

  h+='<div class="sec"><h2>Pronunciation</h2><span class="ur">تلفظ</span></div>';
  h+=pronCard();

  h+='<p class="tiny" style="text-align:center;margin:6px 0 0">Progress is saved on this device only.</p>';
  return h+'</div>';
}
function pronCard(){
  if(!hasSpeech())
    return '<div class="card pad"><p class="muted" style="margin:0">This browser has no speech engine, so spoken pronunciation is unavailable. The transliteration under every word shows how to say it.</p></div>';
  var vs=pronVoices();
  var opts='<option value=""'+(S.voiceURI?'':' selected')+'>System default (Urdu)</option>';
  vs.forEach(function(v){
    opts+='<option value="'+esc(v.voiceURI)+'"'+(S.voiceURI===v.voiceURI?' selected':'')+'>'+esc(v.name)+' — '+esc(v.lang)+'</option>';
  });
  var v=chosenVoice();
  var status=v
    ? '<div class="pstat ok">Ready — using <b>'+esc(v.name)+'</b> ('+esc(v.lang)+')</div>'
    : '<div class="pstat warn">No Urdu voice found on this device — pronunciation will be silent until you add one.</div>';
  var h='<div class="card pad stack" style="gap:12px">';
  h+=status;
  h+='<div><div class="eyebrow">Voice</div><select id="voiceSel" class="sel" aria-label="Pronunciation voice" style="margin-top:6px">'+opts+'</select></div>';
  h+='<div class="split">'+
     '<button class="toggle" data-slow="1" aria-pressed="'+(S.slow?'true':'false')+'">'+(S.slow?'Slow speed · on':'Slow speed')+'</button>'+
     '<button class="btn slim" data-speak="شکریہ">Test — <span class="ur" style="font-size:1.1rem">شکریہ</span></button></div>';
  if(!v)
    h+='<p class="tiny" style="margin:0">On Windows the quickest fix is to open the app in <b>Microsoft Edge</b> — it has built-in online Urdu voices. To install a voice instead — Windows: Settings › Time &amp; language › Language &amp; region › add <b>Urdu</b> (with the speech option); Android: Settings › System › Languages &amp; input › Text-to-speech; iPhone: Settings › Accessibility › Spoken Content › Voices.</p>';
  return h+'</div>';
}
function spkBtn(text){
  return '<button class="spk" data-speak="'+esc(text)+'" aria-label="Play pronunciation">'+
    '<svg viewBox="0 0 24 24"><path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18.2 6.5a8 8 0 0 1 0 11"/></svg></button>';
}
var TOPIC_EMOJI={greet:'👋',people:'👨‍👩‍👧',numbers:'🔢',time:'📅',food:'🍎',
  colors:'🎨',body:'🖐️',home:'🏠',travel:'✈️',verbs:'🏃',adj:'🌈',nature:'🌤️',
  animals:'🐾',school:'🏫',feelings:'😊',play:'⚽',
  intro:'🙋',outabout:'🛍️',smalltalk:'💬'};
function topicEmoji(id){return TOPIC_EMOJI[id]||'📚';}
function topicRow(t,attr){
  var m=mastery(t.id);
  return '<button class="row" '+(attr||'data-topic')+'="'+t.id+'">'+
    '<span class="temoji" aria-hidden="true">'+topicEmoji(t.id)+'</span>'+
    '<div class="grow"><div class="name">'+esc(t.name)+'</div>'+
    '<div class="sub">'+t.items.length+(t.kind==='phrase'?' phrases':' words')+'</div>'+
    '<div class="meter"><i style="width:'+(m*100).toFixed(0)+'%"></i></div></div>'+
    '<span class="pct">'+Math.round(m*100)+'%</span></button>';
}

/* ---- learn ---- */
function viewLearn(){
  if(route.sub==='topic')return viewTopic(route.arg);
  if(route.sub==='grammar')return viewGrammar();
  var h='<div class="stack">';
  h+='<div class="sec"><h2>Vocabulary</h2><span class="ur">الفاظ</span></div><div class="card rowlist">';
  TOPICS.filter(function(t){return t.kind==='word';}).forEach(function(t){h+=topicRow(t);});
  h+='</div>';
  h+='<div class="sec"><h2>Phrases</h2><span class="ur">جملے</span></div><div class="card rowlist">';
  TOPICS.filter(function(t){return t.kind==='phrase';}).forEach(function(t){h+=topicRow(t);});
  h+='</div>';
  h+='<div class="sec"><h2>Grammar</h2><span class="ur">قواعد</span></div>'+
     '<button class="row card" data-grammar="1"><div class="grow"><div class="name">'+GRAMMAR.length+' short notes</div>'+
     '<div class="sub">Word order, gender, postpositions, politeness</div></div><span class="arrow">→</span></button>';
  return h+'</div>';
}
function viewTopic(id){
  var t=topicById(id);if(!t)return viewLearn();
  var m=mastery(id);
  var h='<div class="stack"><button class="back-link" data-go="learn">← All topics</button>';
  h+='<div><div class="sec"><span style="font-size:1.6rem">'+topicEmoji(id)+'</span><h2 style="font-size:1.35rem">'+esc(t.name)+'</h2><span class="ur">'+esc(t.gloss)+'</span></div>'+
     '<p class="muted" style="margin:6px 2px 0">'+esc(t.blurb)+'</p></div>';
  h+='<div class="card pad" style="display:flex;align-items:center;gap:12px">'+
     '<div class="grow"><div class="eyebrow">Mastery</div><div class="meter" style="margin-top:6px"><i style="width:'+(m*100).toFixed(0)+'%"></i></div></div>'+
     '<span class="pct">'+Math.round(m*100)+'%</span></div>';
  h+='<div class="split"><button class="btn" data-drill="'+id+'">Practise these</button>'+
     '<button class="btn ghost" data-quiz="'+id+'">Quiz me</button></div>';
  h+='<div class="card">';
  topicWords(id).forEach(function(w){
    h+='<div class="entry">'+spkBtn(w.ur)+'<div class="grow">'+
       '<div class="en">'+esc(w.en)+'</div>'+
       '<div class="ur">'+esc(w.ur)+'</div>'+
       '<div class="tl">'+esc(w.tl)+'</div>'+
       (w.note?'<div class="note">'+esc(w.note)+'</div>':'')+
       '</div></div>';
  });
  return h+'</div></div>';
}
function viewGrammar(){
  var h='<div class="stack"><button class="back-link" data-go="learn">← All topics</button>';
  h+='<div class="sec"><h2 style="font-size:1.35rem">Grammar notes</h2><span class="ur">قواعد</span></div>';
  GRAMMAR.forEach(function(g,i){
    h+='<div class="card pad stack" style="gap:10px">'+
       '<div><div class="eyebrow">Note '+(i+1)+'</div><h3 style="font-size:1.05rem;margin-top:3px">'+esc(g.title)+'</h3></div>'+
       '<p class="muted" style="margin:0">'+esc(g.body)+'</p>';
    g.ex.forEach(function(e){
      h+='<div class="gex"><div class="ur">'+esc(e[0])+'</div><div class="tl">'+esc(e[1])+'</div><div class="en">'+esc(e[2])+'</div></div>';
    });
    h+='</div>';
  });
  return h+'</div>';
}

/* ---- cards ---- */
var session=null;
function startSession(topic){
  var q=queue(GOAL,topic);
  session=q.length?{q:q,i:0,flipped:false,done:0,topic:topic||null}:null;
  go('cards');
}
function viewCards(){
  if(!session){
    var d=dueNow();
    return '<div class="stack">'+
      '<div class="sec"><h2 style="font-size:1.35rem">Flashcards</h2><span class="ur">کارڈ</span></div>'+
      '<p class="muted" style="margin:0 2px">Cards you find hard come back sooner; cards you know drift out to 35 days. '+
      (d>0?'<b>'+d+'</b> are due right now.':'Nothing is due — a session will bring in new words.')+'</p>'+
      '<button class="btn" data-start="all">Start a session of '+GOAL+'</button>'+
      '<div class="sec"><h2>Or drill one topic</h2></div><div class="card rowlist">'+
      TOPICS.map(function(t){return topicRow(t,'data-start');}).join('')+'</div></div>';
  }
  if(session.i>=session.q.length){
    var n=session.done;
    return '<div class="stack" style="text-align:center;padding-top:20px">'+
      '<div class="ur" style="font-size:2.4rem;color:var(--gold)">شاباش</div>'+
      '<h2 style="font-size:1.5rem">'+n+' card'+(n===1?'':'s')+' reviewed</h2>'+
      '<p class="muted" style="margin:0">Today: '+S.todayCount+' of '+GOAL+' · Streak: '+shownStreak()+' day'+(shownStreak()===1?'':'s')+'</p>'+
      '<button class="btn" data-start="'+(session.topic||'all')+'">Another session</button>'+
      '<button class="btn ghost" data-go="home">Back to home</button></div>';
  }
  var w=session.q[session.i];
  var r=S.srs[w.id];
  var reverse=r?(r.box%2===1):false;
  var front=reverse?('<div class="ur">'+esc(w.ur)+'</div>'):('<div class="prompt">'+esc(w.en)+'</div>');
  var back=reverse
    ?('<div class="prompt">'+esc(w.en)+'</div><div class="tl">'+esc(w.tl)+'</div>')
    :('<div class="ur">'+esc(w.ur)+'</div><div class="tl">'+esc(w.tl)+'</div>');
  var pct=(session.i/session.q.length*100).toFixed(0);
  return '<div class="stack">'+
    '<div class="qhead"><span>'+(session.i+1)+' / '+session.q.length+'</span>'+
      '<div class="progressbar grow" style="flex:1"><i style="width:'+pct+'%"></i></div>'+
      '<button class="back-link" data-endsession="1">End</button></div>'+
    '<div class="deck"><div class="flip'+(session.flipped?' is-back':'')+'" id="flip" data-flip="1">'+
      '<div class="face front">'+front+'<div class="hint">tap to reveal</div></div>'+
      '<div class="face back">'+back+
        '<button class="btn ghost slim" data-speak="'+esc(w.ur)+'" style="margin-top:6px">Hear it</button>'+
        (w.note?'<div class="hint" style="max-width:34ch">'+esc(w.note)+'</div>':'')+
      '</div></div></div>'+
    (session.flipped
      ? '<div class="grades">'+
        '<button class="grade again" data-grade="again">Again<small>10 min</small></button>'+
        '<button class="grade good" data-grade="good">Good<small>'+nextLabel(w.id,'good')+'</small></button>'+
        '<button class="grade easy" data-grade="easy">Easy<small>'+nextLabel(w.id,'easy')+'</small></button></div>'
      : '<button class="btn ghost" data-flip="1">Reveal</button>')+
    '</div>';
}
function nextLabel(id,g){
  var r=S.srs[id],box=r?r.box:0;
  var nb=Math.min(5,box+(g==='easy'?2:1));
  var d=INTERVALS[nb];
  return d===0?'today':(d===1?'1 day':d+' days');
}

/* ---- quiz ---- */
var quiz=null;
function buildQuiz(topicId){
  var pool=topicId?topicWords(topicId):WORDS.slice();
  var picks=shuffle(pool.slice()).slice(0,Math.min(10,pool.length));
  var qs=picks.map(function(w){
    var others=shuffle((topicId?pool:WORDS).filter(function(o){return o.id!==w.id&&o.en!==w.en;})).slice(0,3);
    var dir=Math.random()<.5?'en2ur':'ur2en';
    return{w:w,dir:dir,opts:shuffle([w].concat(others))};
  });
  quiz={topic:topicId||null,qs:qs,i:0,score:0,picked:null};
}
function viewQuiz(){
  if(!quiz){
    var h='<div class="stack"><div class="sec"><h2 style="font-size:1.35rem">Quiz</h2><span class="ur">امتحان</span></div>'+
      '<p class="muted" style="margin:0 2px">Ten multiple‑choice questions, mixed in both directions.</p>'+
      '<button class="btn" data-quiz="all">Mixed quiz — everything</button>'+
      '<div class="sec"><h2>By topic</h2></div><div class="card rowlist">';
    TOPICS.forEach(function(t){
      var best=S.quiz[t.id];
      h+='<button class="row" data-quiz="'+t.id+'"><div class="grow"><div class="name">'+esc(t.name)+'</div>'+
         '<div class="sub">'+(best!=null?'best '+best+'%':'not attempted')+'</div></div><span class="arrow">→</span></button>';
    });
    return h+'</div></div>';
  }
  if(quiz.i>=quiz.qs.length){
    var pct=Math.round(quiz.score/quiz.qs.length*100);
    var key=quiz.topic||'all';
    if(S.quiz[key]==null||pct>S.quiz[key]){S.quiz[key]=pct;save();}
    var aced=pct===100;
    var headline=aced?'Perfect! 🎉':(pct>=80?'Great job! 🌟':(pct>=50?'Well done! 👍':'Keep practising! 💪'));
    return '<div class="stack" style="text-align:center;padding-top:20px">'+
      (aced?'<div class="ur" style="font-size:2.6rem;color:var(--gold);line-height:1.4">شاباش</div>':'')+
      '<div class="eyebrow">Result</div>'+
      '<h2 style="font-size:1.6rem">'+headline+'</h2>'+
      '<div class="'+(aced?'pop ':'')+'" style="font-family:\'Fredoka\',sans-serif;font-size:3.4rem;font-weight:700;line-height:1;color:'+(aced?'var(--jade)':'var(--ink)')+'">'+pct+'%</div>'+
      '<p class="muted" style="margin:0">'+quiz.score+' of '+quiz.qs.length+' correct'+
        (quiz.topic?' · '+esc(topicById(quiz.topic).name):' · mixed')+'</p>'+
      '<button class="btn" data-quiz="'+(quiz.topic||'all')+'">Try again</button>'+
      '<button class="btn ghost" data-quizmenu="1">Pick another topic</button></div>';
  }
  var q=quiz.qs[quiz.i],w=q.w;
  var prompt=q.dir==='en2ur'
    ? '<div class="prompt" style="font-family:Newsreader,Georgia,serif;font-size:1.6rem">'+esc(w.en)+'</div>'
    : '<div class="ur" style="font-size:2rem">'+esc(w.ur)+'</div>';
  var h='<div class="stack">'+
    '<div class="qhead"><span>'+(quiz.i+1)+' / '+quiz.qs.length+'</span>'+
      '<div class="progressbar" style="flex:1"><i style="width:'+(quiz.i/quiz.qs.length*100).toFixed(0)+'%"></i></div>'+
      '<span>'+quiz.score+' right</span><button class="back-link" data-quizmenu="1">End</button></div>'+
    '<div class="card pad" style="text-align:center">'+
      '<div class="eyebrow">'+(q.dir==='en2ur'?'Which is the Urdu?':'What does this mean?')+'</div>'+
      '<div style="margin-top:8px">'+prompt+'</div></div>'+
    '<div class="stack" style="gap:8px">';
  q.opts.forEach(function(o,k){
    var cls='opt';
    if(quiz.picked){
      if(o.id===w.id)cls+=' correct';
      else if(o.id===quiz.picked)cls+=' wrong';
    }
    var body=q.dir==='en2ur'
      ? '<div><div class="ur">'+esc(o.ur)+'</div><div class="tl">'+esc(o.tl)+'</div></div>'
      : '<div><div style="font-weight:600">'+esc(o.en)+'</div></div>';
    var mark=quiz.picked?(o.id===w.id?'<span class="mark" style="color:var(--jade)">correct</span>':(o.id===quiz.picked?'<span class="mark" style="color:var(--gulnar)">no</span>':'')):'';
    h+='<button class="'+cls+'" data-opt="'+o.id+'"'+(quiz.picked?' disabled':'')+'>'+body+mark+'</button>';
  });
  h+='</div>';
  if(quiz.picked){
    h+='<div class="card pad" style="text-align:center"><div class="ur" style="font-size:1.6rem">'+esc(w.ur)+'</div>'+
       '<div class="tl">'+esc(w.tl)+'</div><div class="muted">'+esc(w.en)+'</div>'+
       '<div style="margin-top:10px" class="split"><button class="btn ghost slim" data-speak="'+esc(w.ur)+'">Hear it</button>'+
       '<button class="btn slim" data-next="1">Next</button></div></div>';
  }
  return h+'</div>';
}

/* ---- script ---- */
function viewScript(){
  if(route.sub==='letter'){
    var L=ALPHABET[route.arg];
    if(!L)return viewScript0();
    var ch=L[0];
    var forms=[['Isolated',ch],['Initial',ch+ZWJ],['Medial',ZWJ+ch+ZWJ],['Final',ZWJ+ch]];
    var h='<div class="stack"><button class="back-link" data-go="script">← The alphabet</button>'+
      '<div class="card pad" style="text-align:center">'+
      '<div class="ur" style="font-size:3.2rem;color:var(--lapis-ink);line-height:1.6">'+esc(ch)+'</div>'+
      '<h2 style="font-size:1.3rem">'+esc(L[1])+'</h2>'+
      '<div class="tl" style="font-size:.95rem">sounds like <b>'+esc(L[2])+'</b></div></div>';
    h+='<div class="sec"><h2>How it joins</h2></div><div class="forms">';
    forms.forEach(function(f){h+='<div class="form"><div class="ur">'+esc(f[1])+'</div><small>'+f[0]+'</small></div>';});
    h+='</div>';
    if(L[3])h+='<div class="card pad"><div class="eyebrow">Note</div><p class="muted" style="margin:6px 0 0">'+esc(L[3])+'</p></div>';
    var ex=WORDS.filter(function(w){return w.ur.indexOf(ch)>=0;}).slice(0,6);
    if(ex.length){
      h+='<div class="sec"><h2>Words using it</h2></div><div class="card">';
      ex.forEach(function(w){
        h+='<div class="entry">'+spkBtn(w.ur)+'<div class="grow"><div class="ur">'+esc(w.ur)+'</div><div class="tl">'+esc(w.tl)+' · '+esc(w.en)+'</div></div></div>';
      });
      h+='</div>';
    }
    var idx=route.arg;
    h+='<div class="split">'+
       (idx>0?'<button class="btn ghost" data-letter="'+(idx-1)+'">← Previous</button>':'')+
       (idx<ALPHABET.length-1?'<button class="btn ghost" data-letter="'+(idx+1)+'">Next →</button>':'')+'</div>';
    return h+'</div>';
  }
  return viewScript0();
}
function viewScript0(){
  var h='<div class="stack">'+
    '<div class="sec"><h2 style="font-size:1.35rem">The alphabet</h2><span class="ur">حروفِ تہجی</span></div>'+
    '<p class="muted" style="margin:0 2px">'+ALPHABET.length+' letters, written right to left in the sloping nastaliq hand. '+
    'Tap any letter to see how it changes shape at the start, middle and end of a word.</p>'+
    '<div class="glyphgrid">';
  ALPHABET.forEach(function(L,i){
    h+='<button class="glyph" data-letter="'+i+'"><span class="ur">'+esc(L[0])+'</span><small>'+esc(L[1])+'</small></button>';
  });
  h+='</div>';
  h+='<div class="card pad"><div class="eyebrow">Reading tip</div><p class="muted" style="margin:6px 0 0">'+
     'Short vowels are normally left out. کتاب is written k‑t‑ā‑b and read <i>kitāb</i> — you supply the vowels from knowing the word, the way you read “Dr” as “doctor”.</p></div>';
  return h+'</div>';
}

/* ============================ events ============================ */
function onClick(e){
  var t=e.target;
  var el;
  if((el=t.closest('[data-speak]'))){speak(el.dataset.speak);return;}
  if((el=t.closest('[data-slow]'))){S.slow=!S.slow;save();render();if(S.slow)speak('شکریہ');return;}
  if((el=t.closest('[data-go]'))){go(el.dataset.go);return;}
  if((el=t.closest('[data-topic]'))){go('learn','topic',el.dataset.topic);return;}
  if((el=t.closest('[data-grammar]'))){go('learn','grammar');return;}
  if((el=t.closest('[data-letter]'))){go('script','letter',parseInt(el.dataset.letter,10));return;}
  if((el=t.closest('[data-drill]'))){startSession(el.dataset.drill);return;}
  if((el=t.closest('[data-start]'))){startSession(el.dataset.start==='all'?null:el.dataset.start);return;}
  if((el=t.closest('[data-endsession]'))){session=null;render();return;}
  if((el=t.closest('[data-flip]'))){
    if(!session)return;
    if(!session.flipped){session.flipped=true;render();}
    return;
  }
  if((el=t.closest('[data-grade]'))){
    if(!session)return;
    var w=session.q[session.i];
    grade(w.id,el.dataset.grade);
    session.done++;session.i++;session.flipped=false;render();
    return;
  }
  if((el=t.closest('[data-quiz]'))){
    var id=el.dataset.quiz;
    buildQuiz(id==='all'?null:id);go('quiz');return;
  }
  if((el=t.closest('[data-quizmenu]'))){quiz=null;render();return;}
  if((el=t.closest('[data-opt]'))){
    if(!quiz||quiz.picked)return;
    quiz.picked=el.dataset.opt;
    var q=quiz.qs[quiz.i];
    var right=quiz.picked===q.w.id;
    if(right)quiz.score++;
    grade(q.w.id,right?'good':'again');
    render();return;
  }
  if((el=t.closest('[data-next]'))){
    if(!quiz)return;
    quiz.i++;quiz.picked=null;render();
    if(quiz.i>=quiz.qs.length&&quiz.score===quiz.qs.length)celebrate();
    return;
  }
}
/* Confetti burst for a perfect score. Pure CSS/JS, cleans itself up. */
function celebrate(){
  try{
    var colors=['#ff5d8f','#4c6ef5','#12b886','#f9820b','#9b5de5','#00b8d4','#ffd43b'];
    var wrap=document.createElement('div');wrap.className='confetti';
    var html='';
    for(var i=0;i<110;i++){
      var c=colors[i%colors.length];
      var left=Math.round(Math.random()*100);
      var delay=(Math.random()*0.5).toFixed(2);
      var dur=(2.6+Math.random()*2).toFixed(2);
      var x=Math.round(Math.random()*200-100);
      var r=Math.round(Math.random()*360);
      var w=6+Math.round(Math.random()*7);
      html+='<i style="left:'+left+'%;--c:'+c+';--d:'+dur+'s;--delay:'+delay+'s;--x:'+x+'px;--r:'+r+'deg;width:'+w+'px;height:'+Math.round(w*0.6)+'px"></i>';
    }
    wrap.innerHTML=html;document.body.appendChild(wrap);
    setTimeout(function(){wrap.remove();},5200);
  }catch(e){}
}

/* ============================ boot ============================ */
function boot(){
  var view=document.getElementById('view');
  view.addEventListener('click',onClick);
  view.addEventListener('change',function(e){
    var s=e.target.closest('#voiceSel');
    if(s){S.voiceURI=s.value||null;save();speak('شکریہ');}
  });
  paintTabs();render();
  installPwa();
}
function installPwa(){
  try{
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('sw.js',{scope:'./'}).catch(function(){});
    }
  }catch(e){}
}
if(window.claude&&window.claude.hot&&window.claude.hot.ready)window.claude.hot.ready(boot);
else boot();

