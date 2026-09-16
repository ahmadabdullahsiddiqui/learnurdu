/* Roshni Urdu — learning content
   Each vocabulary item: [english, urdu, transliteration, note?]            */

const TOPICS = [
  {
    id: 'greet', kind: 'word', name: 'Greetings & Courtesy', gloss: 'آداب',
    blurb: 'The first fifteen minutes of any conversation.',
    items: [
      ['Peace be upon you (hello)', 'السلام علیکم', 'assalaam-u-alaikum', 'The standard greeting.'],
      ['And upon you peace (reply)', 'وعلیکم السلام', 'wa-alaikum assalaam', 'The set reply to the greeting.'],
      ['Good morning', 'صبح بخیر', 'subah bakhair'],
      ['Good night', 'شب بخیر', 'shab bakhair'],
      ['Welcome', 'خوش آمدید', 'khush aamdeed'],
      ['Thank you', 'شکریہ', 'shukriya'],
      ['Many thanks', 'بہت شکریہ', 'bahut shukriya'],
      ['Please', 'براہِ کرم', 'bara-e-karam'],
      ['Sorry / excuse me', 'معاف کیجیے', 'muaaf keejiye'],
      ['Yes', 'جی ہاں', 'ji haan', 'ji adds politeness; haan alone is casual.'],
      ['No', 'جی نہیں', 'ji naheen'],
      ['Goodbye', 'خدا حافظ', 'khuda haafiz', 'Literally “God be your protector”.'],
      ['How are you?', 'آپ کیسے ہیں؟', 'aap kaise hain?'],
      ['I am well', 'میں ٹھیک ہوں', 'main theek hoon'],
      ['See you again', 'پھر ملیں گے', 'phir milenge'],
      ['Congratulations', 'مبارک ہو', 'mubaarak ho']
    ]
  },
  {
    id: 'people', kind: 'word', name: 'People & Family', gloss: 'خاندان',
    blurb: 'Who everyone is at the dinner table.',
    items: [
      ['mother', 'ماں', 'maan'],
      ['father', 'باپ', 'baap'],
      ['parents', 'والدین', 'waalidain'],
      ['brother', 'بھائی', 'bhaai'],
      ['sister', 'بہن', 'bahan'],
      ['son', 'بیٹا', 'beta'],
      ['daughter', 'بیٹی', 'beti'],
      ['husband', 'شوہر', 'shauhar'],
      ['wife', 'بیوی', 'beewi'],
      ['friend', 'دوست', 'dost'],
      ['child', 'بچہ', 'bachcha'],
      ['man', 'آدمی', 'aadmi'],
      ['woman', 'عورت', 'aurat'],
      ['family', 'خاندان', 'khaandaan'],
      ['grandfather', 'دادا', 'daada', "Father's father; mother's father is نانا naana."],
      ['grandmother', 'دادی', 'daadi', "Father's mother; mother's mother is نانی naani."],
      ['teacher', 'استاد', 'ustaad'],
      ['neighbour', 'پڑوسی', 'parosi']
    ]
  },
  {
    id: 'numbers', kind: 'word', name: 'Numbers', gloss: 'گنتی',
    blurb: 'One to twenty, plus hundred and thousand.',
    items: [
      ['one', 'ایک', 'ek'], ['two', 'دو', 'do'], ['three', 'تین', 'teen'],
      ['four', 'چار', 'chaar'], ['five', 'پانچ', 'paanch'], ['six', 'چھ', 'chhe'],
      ['seven', 'سات', 'saat'], ['eight', 'آٹھ', 'aath'], ['nine', 'نو', 'nau'],
      ['ten', 'دس', 'das'], ['eleven', 'گیارہ', 'gyaarah'], ['twelve', 'بارہ', 'baarah'],
      ['thirteen', 'تیرہ', 'terah'], ['fourteen', 'چودہ', 'chaudah'], ['fifteen', 'پندرہ', 'pandrah'],
      ['sixteen', 'سولہ', 'solah'], ['seventeen', 'سترہ', 'satrah'], ['eighteen', 'اٹھارہ', 'athaarah'],
      ['nineteen', 'انیس', 'unnees'], ['twenty', 'بیس', 'bees'],
      ['hundred', 'سو', 'sau'], ['thousand', 'ہزار', 'hazaar'],
      ['how many / how much', 'کتنا', 'kitna']
    ]
  },
  {
    id: 'numbers100', kind: 'word', name: 'Numbers 1–100', gloss: 'گنتی',
    blurb: 'Every number from one to a hundred. Each has its own name — there is no shortcut, so practise a few at a time.',
    items: [
      ['1', 'ایک', 'ek', 'Urdu numeral: ۱'],
      ['2', 'دو', 'do', 'Urdu numeral: ۲'],
      ['3', 'تین', 'teen', 'Urdu numeral: ۳'],
      ['4', 'چار', 'chaar', 'Urdu numeral: ۴'],
      ['5', 'پانچ', 'paanch', 'Urdu numeral: ۵'],
      ['6', 'چھ', 'chhe', 'Urdu numeral: ۶'],
      ['7', 'سات', 'saat', 'Urdu numeral: ۷'],
      ['8', 'آٹھ', 'aath', 'Urdu numeral: ۸'],
      ['9', 'نو', 'nau', 'Urdu numeral: ۹'],
      ['10', 'دس', 'das', 'Urdu numeral: ۱۰'],
      ['11', 'گیارہ', 'gyaarah', 'Urdu numeral: ۱۱'],
      ['12', 'بارہ', 'baarah', 'Urdu numeral: ۱۲'],
      ['13', 'تیرہ', 'terah', 'Urdu numeral: ۱۳'],
      ['14', 'چودہ', 'chaudah', 'Urdu numeral: ۱۴'],
      ['15', 'پندرہ', 'pandrah', 'Urdu numeral: ۱۵'],
      ['16', 'سولہ', 'solah', 'Urdu numeral: ۱۶'],
      ['17', 'سترہ', 'satrah', 'Urdu numeral: ۱۷'],
      ['18', 'اٹھارہ', 'athaarah', 'Urdu numeral: ۱۸'],
      ['19', 'انیس', 'unnees', 'Urdu numeral: ۱۹'],
      ['20', 'بیس', 'bees', 'Urdu numeral: ۲۰'],
      ['21', 'اکیس', 'ikkees', 'Urdu numeral: ۲۱'],
      ['22', 'بائیس', 'baaees', 'Urdu numeral: ۲۲'],
      ['23', 'تئیس', 'teees', 'Urdu numeral: ۲۳'],
      ['24', 'چوبیس', 'chaubees', 'Urdu numeral: ۲۴'],
      ['25', 'پچیس', 'pachchees', 'Urdu numeral: ۲۵'],
      ['26', 'چھببیس', 'chhabbees', 'Urdu numeral: ۲۶'],
      ['27', 'ستائیس', 'sattaaees', 'Urdu numeral: ۲۷'],
      ['28', 'اٹھائیس', 'athaaees', 'Urdu numeral: ۲۸'],
      ['29', 'انتیس', 'untees', 'Urdu numeral: ۲۹'],
      ['30', 'تیس', 'tees', 'Urdu numeral: ۳۰'],
      ['31', 'اکتیس', 'iktees', 'Urdu numeral: ۳۱'],
      ['32', 'بتیس', 'battees', 'Urdu numeral: ۳۲'],
      ['33', 'تینتیس', 'taintees', 'Urdu numeral: ۳۳'],
      ['34', 'چونتیس', 'chauntees', 'Urdu numeral: ۳۴'],
      ['35', 'پینتیس', 'paintees', 'Urdu numeral: ۳۵'],
      ['36', 'چھتیس', 'chhattees', 'Urdu numeral: ۳۶'],
      ['37', 'سینتیس', 'saintees', 'Urdu numeral: ۳۷'],
      ['38', 'اڑتیس', 'artees', 'Urdu numeral: ۳۸'],
      ['39', 'انتالیس', 'untaalees', 'Urdu numeral: ۳۹'],
      ['40', 'چالیس', 'chaalees', 'Urdu numeral: ۴۰'],
      ['41', 'اکتالیس', 'iktaalees', 'Urdu numeral: ۴۱'],
      ['42', 'بیالیس', 'bayaalees', 'Urdu numeral: ۴۲'],
      ['43', 'تینتالیس', 'taintaalees', 'Urdu numeral: ۴۳'],
      ['44', 'چوالیس', 'chawaalees', 'Urdu numeral: ۴۴'],
      ['45', 'پینتالیس', 'paintaalees', 'Urdu numeral: ۴۵'],
      ['46', 'چھیالیس', 'chhiyaalees', 'Urdu numeral: ۴۶'],
      ['47', 'سینتالیس', 'saintaalees', 'Urdu numeral: ۴۷'],
      ['48', 'اڑتالیس', 'artaalees', 'Urdu numeral: ۴۸'],
      ['49', 'انچاس', 'unchaas', 'Urdu numeral: ۴۹'],
      ['50', 'پچاس', 'pachaas', 'Urdu numeral: ۵۰'],
      ['51', 'اکاون', 'ikaawan', 'Urdu numeral: ۵۱'],
      ['52', 'باون', 'baawan', 'Urdu numeral: ۵۲'],
      ['53', 'ترپن', 'tirpan', 'Urdu numeral: ۵۳'],
      ['54', 'چون', 'chauwan', 'Urdu numeral: ۵۴'],
      ['55', 'پچپن', 'pachpan', 'Urdu numeral: ۵۵'],
      ['56', 'چھپن', 'chhappan', 'Urdu numeral: ۵۶'],
      ['57', 'ستاون', 'sattaawan', 'Urdu numeral: ۵۷'],
      ['58', 'اٹھاون', 'athaawan', 'Urdu numeral: ۵۸'],
      ['59', 'انسٹھ', 'unsath', 'Urdu numeral: ۵۹'],
      ['60', 'ساٹھ', 'saath', 'Urdu numeral: ۶۰'],
      ['61', 'اکسٹھ', 'iksath', 'Urdu numeral: ۶۱'],
      ['62', 'باسٹھ', 'baasath', 'Urdu numeral: ۶۲'],
      ['63', 'ترسٹھ', 'tirsath', 'Urdu numeral: ۶۳'],
      ['64', 'چوسٹھ', 'chaunsath', 'Urdu numeral: ۶۴'],
      ['65', 'پینسٹھ', 'painsath', 'Urdu numeral: ۶۵'],
      ['66', 'چھیاسٹھ', 'chhiyaasath', 'Urdu numeral: ۶۶'],
      ['67', 'سترسٹھ', 'satsath', 'Urdu numeral: ۶۷'],
      ['68', 'اڑسٹھ', 'arsath', 'Urdu numeral: ۶۸'],
      ['69', 'انہتر', 'unhattar', 'Urdu numeral: ۶۹'],
      ['70', 'ستر', 'sattar', 'Urdu numeral: ۷۰'],
      ['71', 'اکہتر', 'ikhattar', 'Urdu numeral: ۷۱'],
      ['72', 'بہتر', 'bahattar', 'Urdu numeral: ۷۲'],
      ['73', 'تہتر', 'tihattar', 'Urdu numeral: ۷۳'],
      ['74', 'چوہتر', 'chauhattar', 'Urdu numeral: ۷۴'],
      ['75', 'پچہتر', 'pachhattar', 'Urdu numeral: ۷۵'],
      ['76', 'چھہتر', 'chhihattar', 'Urdu numeral: ۷۶'],
      ['77', 'ستہتر', 'sathattar', 'Urdu numeral: ۷۷'],
      ['78', 'اٹھہتر', 'athhattar', 'Urdu numeral: ۷۸'],
      ['79', 'اناسی', 'unaasi', 'Urdu numeral: ۷۹'],
      ['80', 'اسی', 'assi', 'Urdu numeral: ۸۰'],
      ['81', 'اکیاسی', 'ikyaasi', 'Urdu numeral: ۸۱'],
      ['82', 'بیاسی', 'bayaasi', 'Urdu numeral: ۸۲'],
      ['83', 'تراسی', 'tiraasi', 'Urdu numeral: ۸۳'],
      ['84', 'چوراسی', 'chauraasi', 'Urdu numeral: ۸۴'],
      ['85', 'پچاسی', 'pachaasi', 'Urdu numeral: ۸۵'],
      ['86', 'چھیاسی', 'chhiyaasi', 'Urdu numeral: ۸۶'],
      ['87', 'ستاسی', 'sataasi', 'Urdu numeral: ۸۷'],
      ['88', 'اٹھاسی', 'athaasi', 'Urdu numeral: ۸۸'],
      ['89', 'نواسی', 'nawaasi', 'Urdu numeral: ۸۹'],
      ['90', 'نوے', 'nawwe', 'Urdu numeral: ۹۰'],
      ['91', 'اکانوے', 'ikaanwe', 'Urdu numeral: ۹۱'],
      ['92', 'بانوے', 'baanwe', 'Urdu numeral: ۹۲'],
      ['93', 'ترانوے', 'tiraanwe', 'Urdu numeral: ۹۳'],
      ['94', 'چورانوے', 'chauraanwe', 'Urdu numeral: ۹۴'],
      ['95', 'پچانوے', 'pachaanwe', 'Urdu numeral: ۹۵'],
      ['96', 'چھیانوے', 'chhiyaanwe', 'Urdu numeral: ۹۶'],
      ['97', 'ستانوے', 'sataanwe', 'Urdu numeral: ۹۷'],
      ['98', 'اٹھانوے', 'athaanwe', 'Urdu numeral: ۹۸'],
      ['99', 'ننانوے', 'ninaanwe', 'Urdu numeral: ۹۹'],
      ['100', 'سو', 'sau', 'Urdu numeral: ۱۰۰']
    ]
  },
  {
    id: 'time', kind: 'word', name: 'Days & Time', gloss: 'وقت',
    blurb: 'The week runs Monday to Sunday — and کل means both yesterday and tomorrow.',
    items: [
      ['Monday', 'پیر', 'peer'],
      ['Tuesday', 'منگل', 'mangal'],
      ['Wednesday', 'بدھ', 'budh'],
      ['Thursday', 'جمعرات', 'jumeraat'],
      ['Friday', 'جمعہ', 'juma'],
      ['Saturday', 'ہفتہ', 'hafta', 'The same word also means “week”.'],
      ['Sunday', 'اتوار', 'itwaar'],
      ['today', 'آج', 'aaj'],
      ['tomorrow', 'کل', 'kal', 'Context decides: kal is tomorrow *and* yesterday.'],
      ['yesterday', 'کل', 'kal', 'Same word as tomorrow — the verb tense tells you which.'],
      ['now', 'ابھی', 'abhi'],
      ['day', 'دن', 'din'],
      ['night', 'رات', 'raat'],
      ['morning', 'صبح', 'subah'],
      ['evening', 'شام', 'shaam'],
      ['month', 'مہینہ', 'maheena'],
      ['year', 'سال', 'saal'],
      ['hour', 'گھنٹہ', 'ghanta'],
      ['minute', 'منٹ', 'minat'],
      ['time', 'وقت', 'waqt']
    ]
  },
  {
    id: 'food', kind: 'word', name: 'Food & Drink', gloss: 'کھانا',
    blurb: 'Enough to order, refuse and compliment a meal.',
    items: [
      ['water', 'پانی', 'paani'],
      ['bread (flatbread)', 'روٹی', 'roti'],
      ['rice', 'چاول', 'chaawal'],
      ['meat', 'گوشت', 'gosht'],
      ['chicken', 'مرغی', 'murghi'],
      ['fish', 'مچھلی', 'machhli'],
      ['egg', 'انڈا', 'anda'],
      ['milk', 'دودھ', 'doodh'],
      ['tea', 'چائے', 'chaay'],
      ['vegetable', 'سبزی', 'sabzi'],
      ['fruit', 'پھل', 'phal'],
      ['apple', 'سیب', 'seb'],
      ['mango', 'آم', 'aam'],
      ['salt', 'نمک', 'namak'],
      ['sugar', 'چینی', 'cheeni', 'The same word means “Chinese”.'],
      ['oil', 'تیل', 'tel'],
      ['food / meal', 'کھانا', 'khaana', 'Also the verb “to eat”.'],
      ['hungry', 'بھوکا', 'bhooka'],
      ['thirsty', 'پیاسا', 'pyaasa'],
      ['delicious', 'مزیدار', 'mazedaar']
    ]
  },
  {
    id: 'colors', kind: 'word', name: 'Colours', gloss: 'رنگ',
    blurb: 'Several are borrowed straight from Persian.',
    items: [
      ['colour', 'رنگ', 'rang'],
      ['red', 'سرخ', 'surkh'],
      ['blue', 'نیلا', 'neela'],
      ['green', 'سبز', 'sabz'],
      ['yellow', 'پیلا', 'peela'],
      ['black', 'کالا', 'kaala'],
      ['white', 'سفید', 'safed'],
      ['brown', 'بھورا', 'bhoora'],
      ['orange', 'نارنجی', 'naaranji'],
      ['pink', 'گلابی', 'gulaabi', 'From گلاب gulaab, “rose”.'],
      ['grey', 'سرمئی', 'surmai'],
      ['purple', 'جامنی', 'jaamni']
    ]
  },
  {
    id: 'body', kind: 'word', name: 'The Body', gloss: 'جسم',
    blurb: 'Head to foot — useful at the doctor and in idioms.',
    items: [
      ['head', 'سر', 'sar'],
      ['hair', 'بال', 'baal'],
      ['eye', 'آنکھ', 'aankh'],
      ['ear', 'کان', 'kaan'],
      ['nose', 'ناک', 'naak'],
      ['mouth', 'منہ', 'munh'],
      ['tooth', 'دانت', 'daant'],
      ['hand / arm', 'ہاتھ', 'haath'],
      ['foot / leg', 'پاؤں', 'paaon'],
      ['heart', 'دل', 'dil', 'Carries the sense of “mind, feeling” too.'],
      ['stomach', 'پیٹ', 'pet'],
      ['back', 'کمر', 'kamar'],
      ['finger', 'انگلی', 'ungli'],
      ['face', 'چہرہ', 'chehra'],
      ['body', 'جسم', 'jism']
    ]
  },
  {
    id: 'home', kind: 'word', name: 'Home & Things', gloss: 'گھر',
    blurb: 'The objects within arm’s reach.',
    items: [
      ['house / home', 'گھر', 'ghar'],
      ['door', 'دروازہ', 'darwaaza'],
      ['window', 'کھڑکی', 'khirki'],
      ['room', 'کمرہ', 'kamra'],
      ['kitchen', 'باورچی خانہ', 'baawarchi khaana'],
      ['table', 'میز', 'mez'],
      ['chair', 'کرسی', 'kursi'],
      ['bed', 'بستر', 'bistar'],
      ['key', 'چابی', 'chaabi'],
      ['book', 'کتاب', 'kitaab'],
      ['pen', 'قلم', 'qalam'],
      ['phone', 'فون', 'fon'],
      ['money', 'پیسے', 'paise'],
      ['clothes', 'کپڑے', 'kapre'],
      ['shoes', 'جوتے', 'joote'],
      ['light', 'روشنی', 'roshni', 'A bright, poetic word.']
    ]
  },
  {
    id: 'travel', kind: 'word', name: 'Travel & Directions', gloss: 'سفر',
    blurb: 'Getting from the airport to the right street.',
    items: [
      ['city', 'شہر', 'shahr'],
      ['village', 'گاؤں', 'gaaon'],
      ['road / street', 'سڑک', 'sarak'],
      ['station', 'اسٹیشن', 'steshan'],
      ['airport', 'ہوائی اڈا', 'hawaai adda', 'Literally “air stand”.'],
      ['train', 'ٹرین', 'tren'],
      ['bus', 'بس', 'bas'],
      ['car', 'گاڑی', 'gaari'],
      ['ticket', 'ٹکٹ', 'tikat'],
      ['left', 'بائیں', 'baaen'],
      ['right', 'دائیں', 'daaen'],
      ['straight ahead', 'سیدھا', 'seedha'],
      ['near', 'قریب', 'qareeb'],
      ['far', 'دور', 'door'],
      ['here', 'یہاں', 'yahaan'],
      ['there', 'وہاں', 'wahaan'],
      ['market', 'بازار', 'baazaar'],
      ['hotel', 'ہوٹل', 'hotal']
    ]
  },
  {
    id: 'verbs', kind: 'word', name: 'Everyday Verbs', gloss: 'افعال',
    blurb: 'Dictionary forms all end in -نا -na.',
    items: [
      ['to go', 'جانا', 'jaana'],
      ['to come', 'آنا', 'aana'],
      ['to eat', 'کھانا', 'khaana'],
      ['to drink', 'پینا', 'peena'],
      ['to do / to make', 'کرنا', 'karna'],
      ['to see / to look', 'دیکھنا', 'dekhna'],
      ['to say', 'کہنا', 'kahna'],
      ['to listen / to hear', 'سننا', 'sunna'],
      ['to read / to study', 'پڑھنا', 'parhna'],
      ['to write', 'لکھنا', 'likhna'],
      ['to sleep', 'سونا', 'sona'],
      ['to sit', 'بیٹھنا', 'baithna'],
      ['to buy', 'خریدنا', 'khareedna'],
      ['to give', 'دینا', 'dena'],
      ['to take', 'لینا', 'lena'],
      ['to understand', 'سمجھنا', 'samajhna'],
      ['to work', 'کام کرنا', 'kaam karna'],
      ['to learn', 'سیکھنا', 'seekhna'],
      ['to speak', 'بولنا', 'bolna'],
      ['to want / to need', 'چاہنا', 'chaahna']
    ]
  },
  {
    id: 'adj', kind: 'word', name: 'Describing Things', gloss: 'صفات',
    blurb: 'Mostly opposites, mostly in pairs.',
    items: [
      ['big', 'بڑا', 'bara'],
      ['small', 'چھوٹا', 'chhota'],
      ['good', 'اچھا', 'achchha'],
      ['bad', 'برا', 'bura'],
      ['new', 'نیا', 'naya'],
      ['old', 'پرانا', 'puraana'],
      ['hot', 'گرم', 'garam'],
      ['cold', 'ٹھنڈا', 'thanda'],
      ['easy', 'آسان', 'aasaan'],
      ['difficult', 'مشکل', 'mushkil'],
      ['beautiful', 'خوبصورت', 'khoobsoorat'],
      ['expensive', 'مہنگا', 'mahnga'],
      ['cheap', 'سستا', 'sasta'],
      ['fast', 'تیز', 'tez'],
      ['slow', 'آہستہ', 'aahista'],
      ['a lot / very', 'بہت', 'bahut'],
      ['a little', 'تھوڑا', 'thora'],
      ['true', 'سچ', 'sach']
    ]
  },
  {
    id: 'nature', kind: 'word', name: 'Weather & Nature', gloss: 'موسم',
    blurb: 'The vocabulary of Urdu poetry, as it happens.',
    items: [
      ['sun', 'سورج', 'sooraj'],
      ['moon', 'چاند', 'chaand'],
      ['star', 'ستارہ', 'sitaara'],
      ['sky', 'آسمان', 'aasmaan'],
      ['rain', 'بارش', 'baarish'],
      ['wind / air', 'ہوا', 'hawa'],
      ['cloud', 'بادل', 'baadal'],
      ['tree', 'درخت', 'darakht'],
      ['flower', 'پھول', 'phool'],
      ['river', 'دریا', 'darya'],
      ['mountain', 'پہاڑ', 'pahaar'],
      ['sea', 'سمندر', 'samundar'],
      ['ground / land', 'زمین', 'zameen'],
      ['fire', 'آگ', 'aag'],
      ['snow / ice', 'برف', 'barf'],
      ['weather / season', 'موسم', 'mausam']
    ]
  },
  {
    id: 'animals', kind: 'word', name: 'Animals', gloss: 'جانور',
    blurb: 'Pets, farm animals and a few from the jungle.',
    items: [
      ['dog', 'کتا', 'kutta'],
      ['cat', 'بلی', 'billi'],
      ['cow', 'گائے', 'gaay'],
      ['horse', 'گھوڑا', 'ghora'],
      ['goat', 'بکری', 'bakri'],
      ['sheep', 'بھیڑ', 'bher'],
      ['donkey', 'گدھا', 'gadha'],
      ['hen', 'مرغی', 'murghi'],
      ['bird', 'پرندہ', 'parinda'],
      ['lion', 'شیر', 'sher', 'The same word is used for “tiger” in everyday speech.'],
      ['elephant', 'ہاتھی', 'haathi'],
      ['monkey', 'بندر', 'bandar'],
      ['rabbit', 'خرگوش', 'khargosh'],
      ['mouse', 'چوہا', 'chooha'],
      ['snake', 'سانپ', 'saanp'],
      ['fish', 'مچھلی', 'machhli']
    ]
  },
  {
    id: 'school', kind: 'word', name: 'At School', gloss: 'اسکول',
    blurb: 'Everything in the classroom and the school bag.',
    items: [
      ['school', 'اسکول', 'skool'],
      ['student', 'طالب علم', 'taalib-e-ilm'],
      ['teacher', 'استاد', 'ustaad'],
      ['book', 'کتاب', 'kitaab'],
      ['notebook', 'کاپی', 'kaapi'],
      ['pen', 'قلم', 'qalam'],
      ['pencil', 'پنسل', 'pinsil'],
      ['paper', 'کاغذ', 'kaaghaz'],
      ['school bag', 'بستہ', 'basta'],
      ['lesson', 'سبق', 'sabaq'],
      ['question', 'سوال', 'sawaal'],
      ['answer', 'جواب', 'jawaab'],
      ['word', 'لفظ', 'lafz'],
      ['language', 'زبان', 'zabaan', 'Also means “tongue”.']
    ]
  },
  {
    id: 'feelings', kind: 'word', name: 'Feelings', gloss: 'جذبات',
    blurb: 'How you feel today — good for talking about the day.',
    items: [
      ['happy', 'خوش', 'khush'],
      ['sad', 'اداس', 'udaas'],
      ['angry / upset', 'ناراض', 'naaraaz'],
      ['afraid', 'ڈرا ہوا', 'dara hua', 'A girl says ڈری ہوئی dari hui.'],
      ['tired', 'تھکا ہوا', 'thaka hua'],
      ['hungry', 'بھوکا', 'bhooka'],
      ['thirsty', 'پیاسا', 'pyaasa'],
      ['surprised', 'حیران', 'hairaan'],
      ['bored', 'بور', 'bor'],
      ['love', 'محبت', 'muhabbat'],
      ['to laugh', 'ہنسنا', 'hansna'],
      ['to cry', 'رونا', 'rona']
    ]
  },
  {
    id: 'play', kind: 'word', name: 'Play & Sports', gloss: 'کھیل',
    blurb: 'Games, toys and things to do outside.',
    items: [
      ['to play', 'کھیلنا', 'khelna'],
      ['game', 'کھیل', 'khel'],
      ['toy', 'کھلونا', 'khilauna'],
      ['ball', 'گیند', 'gend'],
      ['kite', 'پتنگ', 'patang'],
      ['cricket', 'کرکٹ', 'kriket'],
      ['football', 'فٹبال', 'futbaal'],
      ['swimming', 'تیراکی', 'teraaki'],
      ['park', 'پارک', 'paark'],
      ['to run', 'دوڑنا', 'daurna'],
      ['to jump', 'کودنا', 'koodna'],
      ['to win', 'جیتنا', 'jeetna'],
      ['to lose', 'ہارنا', 'haarna']
    ]
  },

  /* ---- phrase sets ---- */
  {
    id: 'intro', kind: 'phrase', name: 'Introducing Yourself', gloss: 'تعارف',
    blurb: 'Name, origin, and admitting you are still learning.',
    items: [
      ['My name is …', 'میرا نام … ہے', 'mera naam … hai'],
      ['What is your name?', 'آپ کا نام کیا ہے؟', 'aap ka naam kya hai?'],
      ['I am from Germany', 'میں جرمنی سے ہوں', 'main jarmani se hoon'],
      ['Where are you from?', 'آپ کہاں سے ہیں؟', 'aap kahaan se hain?'],
      ['Pleased to meet you', 'آپ سے مل کر خوشی ہوئی', 'aap se mil kar khushi hui'],
      ['I am learning Urdu', 'میں اردو سیکھ رہا ہوں', 'main urdoo seekh raha hoon', 'A woman says سیکھ رہی ہوں seekh rahi hoon.'],
      ['I do not speak Urdu well', 'میں اچھی اردو نہیں بولتا', 'main achchhi urdoo naheen bolta'],
      ['Do you speak English?', 'کیا آپ انگریزی بولتے ہیں؟', 'kya aap angrezi bolte hain?'],
      ['I do not understand', 'میں نہیں سمجھا', 'main naheen samjha'],
      ['Please say that again', 'دوبارہ کہیے', 'dobaara kahiye'],
      ['Please speak slowly', 'ذرا آہستہ بولیے', 'zara aahista boliye'],
      ['What does this mean?', 'اس کا کیا مطلب ہے؟', 'is ka kya matlab hai?']
    ]
  },
  {
    id: 'outabout', kind: 'phrase', name: 'Out & About', gloss: 'بازار میں',
    blurb: 'Shops, taxis, and finding the bathroom.',
    items: [
      ['How much is this?', 'یہ کتنے کا ہے؟', 'yeh kitne ka hai?'],
      ['That is too expensive', 'یہ بہت مہنگا ہے', 'yeh bahut mahnga hai'],
      ['I would like this', 'مجھے یہ چاہیے', 'mujhe yeh chaahiye'],
      ['Where is the bathroom?', 'باتھ روم کہاں ہے؟', 'baath room kahaan hai?'],
      ['Where is the station?', 'اسٹیشن کہاں ہے؟', 'steshan kahaan hai?'],
      ['Please help me', 'میری مدد کیجیے', 'meri madad keejiye'],
      ['I am lost', 'میں راستہ بھول گیا ہوں', 'main raasta bhool gaya hoon'],
      ['Water, please', 'پانی دیجیے', 'paani deejiye'],
      ['The bill, please', 'بل دیجیے', 'bil deejiye'],
      ['What time is it?', 'کیا وقت ہوا ہے؟', 'kya waqt hua hai?'],
      ['Is it far?', 'کیا یہ دور ہے؟', 'kya yeh door hai?'],
      ['Take me here, please', 'مجھے یہاں لے چلیے', 'mujhe yahaan le chaliye']
    ]
  },
  {
    id: 'smalltalk', kind: 'phrase', name: 'Small Talk', gloss: 'گپ شپ',
    blurb: 'The filler that keeps a conversation alive.',
    items: [
      ['What do you do?', 'آپ کیا کام کرتے ہیں؟', 'aap kya kaam karte hain?'],
      ['I work at a company', 'میں ایک کمپنی میں کام کرتا ہوں', 'main ek kampani men kaam karta hoon'],
      ['The weather is lovely today', 'آج موسم بہت اچھا ہے', 'aaj mausam bahut achchha hai'],
      ['I like this very much', 'مجھے یہ بہت پسند ہے', 'mujhe yeh bahut pasand hai'],
      ['No problem', 'کوئی بات نہیں', 'koi baat naheen'],
      ['Really?', 'واقعی؟', 'waaqai?'],
      ['Of course', 'ضرور', 'zaroor'],
      ['Let’s go', 'چلیں', 'chalen'],
      ['One moment', 'ایک منٹ', 'ek minat'],
      ['I am tired', 'میں تھک گیا ہوں', 'main thak gaya hoon'],
      ['Best wishes', 'نیک تمنائیں', 'nek tamannaaen'],
      ['Take care', 'اپنا خیال رکھیے', 'apna khayaal rakhiye']
    ]
  }
];

/* ---- the Urdu alphabet ----
   [letter, name, sound, note?]  — joined forms are generated with ZWJ    */
const ALPHABET = [
  ['ا', 'alif', 'a / a', 'Carries a long a; آ with madda starts words.'],
  ['ب', 'be', 'b'],
  ['پ', 'pe', 'p', 'Added for Indic sounds Arabic lacks.'],
  ['ت', 'te', 't', 'Soft, dental — tongue on the teeth.'],
  ['ٹ', 'te', 't', 'Retroflex — tongue curled back. The small ط above marks it.'],
  ['ث', 'se', 's'],
  ['ج', 'jeem', 'j'],
  ['چ', 'che', 'ch'],
  ['ح', 'bari he', 'h'],
  ['خ', 'khe', 'kh', 'Like the ch in German “Bach”.'],
  ['د', 'daal', 'd', 'Never joins to the left.'],
  ['ڈ', 'daal', 'd', 'Retroflex d.'],
  ['ذ', 'zaal', 'z'],
  ['ر', 're', 'r'],
  ['ڑ', 're', 'r', 'A flapped retroflex — no English equivalent.'],
  ['ز', 'ze', 'z'],
  ['ژ', 'zhe', 'zh', 'Rare; the s in “measure”.'],
  ['س', 'seen', 's'],
  ['ش', 'sheen', 'sh'],
  ['ص', 'suaad', 's'],
  ['ض', 'zuaad', 'z'],
  ['ط', 'toe', 't'],
  ['ظ', 'zoe', 'z'],
  ['ع', 'ain', '(vowel carrier)', 'In Urdu it mostly carries the vowel beside it.'],
  ['غ', 'ghain', 'gh', 'A throaty, French-style r.'],
  ['ف', 'fe', 'f'],
  ['ق', 'qaaf', 'q', 'A k made far back in the throat.'],
  ['ک', 'kaaf', 'k'],
  ['گ', 'gaaf', 'g'],
  ['ل', 'laam', 'l'],
  ['م', 'meem', 'm'],
  ['ن', 'noon', 'n'],
  ['ں', 'noon ghunna', 'nasal', 'Nasalises the vowel before it; only at word end.'],
  ['و', 'wao', 'w / o / oo'],
  ['ہ', 'choti he', 'h / a', 'Also spells the final -a of words like کمرہ kamra.'],
  ['ھ', 'do-chashmi he', 'aspiration', 'Pairs with another letter: ک + ھ = کھ kh.'],
  ['ء', 'hamza', 'glottal stop', 'Separates two vowels, as in کوئی koi.'],
  ['ی', 'choti ye', 'y / i', ''],
  ['ے', 'bari ye', 'e / ai', 'Word-final only, as in ہے hai.']
];

/* ---- grammar notes ---- */
const GRAMMAR = [
  {
    id: 'g1', title: 'The verb comes last',
    body: 'Urdu builds a sentence subject → object → verb. English “I eat bread” is literally “I bread eat-am”. Once you expect the verb at the end, long sentences stop being frightening.',
    ex: [['میں روٹی کھاتا ہوں', 'main roti khaata hoon', 'I eat bread'],
         ['وہ اردو سیکھتی ہے', 'woh urdoo seekhti hai', 'She learns Urdu']]
  },
  {
    id: 'g2', title: 'Pronouns and three levels of “you”',
    body: 'میں main (I), ہم ham (we), تُو too (intimate, rare), تم tum (familiar), آپ aap (polite), یہ yeh (this / he / she near), وہ woh (that / he / she away). As a learner, use آپ with everyone until someone invites you to do otherwise.',
    ex: [['آپ کہاں جا رہے ہیں؟', 'aap kahaan ja rahe hain?', 'Where are you going?'],
         ['ہم گھر جا رہے ہیں', 'ham ghar ja rahe hain', 'We are going home']]
  },
  {
    id: 'g3', title: '“To be” — hona in the present',
    body: 'میں … ہوں hoon · تم … ہو ho · یہ / وہ … ہے hai · ہم / آپ / وہ (plural) … ہیں hain. This little verb closes most beginner sentences.',
    ex: [['میں استاد ہوں', 'main ustaad hoon', 'I am a teacher'],
         ['یہ میری کتاب ہے', 'yeh meri kitaab hai', 'This is my book']]
  },
  {
    id: 'g4', title: 'Every noun has a gender',
    body: 'Nouns are masculine or feminine, and adjectives ending in -ا -a shift to -ی -i for feminine nouns. Adjectives that do not end in -a (خوبصورت, مشکل) never change.',
    ex: [['اچھا لڑکا', 'achchha larka', 'a good boy'],
         ['اچھی لڑکی', 'achchhi larki', 'a good girl']]
  },
  {
    id: 'g5', title: 'Postpositions, not prepositions',
    body: 'Urdu puts its little words after the noun: میں men (in), پر par (on), سے se (from / with), کو ko (to), کے ساتھ ke saath (together with), کے لیے ke liye (for).',
    ex: [['گھر میں', 'ghar men', 'in the house'],
         ['دوست کے ساتھ', 'dost ke saath', 'with a friend']]
  },
  {
    id: 'g6', title: 'The verb agrees with you',
    body: 'In the present habitual the verb stem takes -تا -ta for a masculine speaker and -تی -ti for a feminine one, then ہوں / ہے / ہیں follows. So the same sentence differs depending on who says it.',
    ex: [['میں کام کرتا ہوں', 'main kaam karta hoon', 'I work (man speaking)'],
         ['میں کام کرتی ہوں', 'main kaam karti hoon', 'I work (woman speaking)']]
  },
  {
    id: 'g7', title: 'Saying no',
    body: 'نہیں naheen goes directly before the verb, and in the present tense the ہے / ہیں is often dropped after it.',
    ex: [['میں نہیں جاتا', 'main naheen jaata', 'I do not go'],
         ['یہ مشکل نہیں', 'yeh mushkil naheen', 'This is not difficult']]
  },
  {
    id: 'g8', title: 'Asking a question',
    body: 'For yes/no questions put کیا kya at the front — it is a spoken question mark. Otherwise use a question word in the middle: کون kaun (who), کیا kya (what), کہاں kahaan (where), کب kab (when), کیوں kyon (why), کیسے kaise (how), کتنا kitna (how much).',
    ex: [['کیا آپ ٹھیک ہیں؟', 'kya aap theek hain?', 'Are you well?'],
         ['یہ کیا ہے؟', 'yeh kya hai?', 'What is this?']]
  },
  {
    id: 'g9', title: 'Polite requests',
    body: 'The -یے -iye ending turns a verb into a courteous request: کہنا → کہیے, بولنا → بولیے, دینا → دیجیے. With friends the familiar form ends in -و -o: کرو karo, بولو bolo.',
    ex: [['ذرا سنیے', 'zara suniye', 'Listen a moment, please'],
         ['اندر آئیے', 'andar aaiye', 'Please come in']]
  },
  {
    id: 'g10', title: 'Reading the script',
    body: 'Urdu runs right to left in the flowing nastaliq style, where each word slopes down toward the left. Short vowels are usually not written — you supply them from knowing the word, exactly as you do with an abbreviation in English. Letters change shape depending on whether they start, sit inside, or end a word; the Script tab shows all four forms of each letter.',
    ex: [['اردو', 'urdoo', 'Urdu'],
         ['روشنی', 'roshni', 'light']]
  }
];


/* ============================ state ============================ */
var ZWJ='‍';
var KEY='roshni.v1';
var APP_VERSION='1.2.0';
var INTERVALS=[0,1,3,7,16,35];
var GOAL=20;

function blank(){return{srs:{},streak:0,lastDay:null,today:null,todayCount:0,quiz:{},hintShown:false,voiceURI:null,slow:false,lang:"en"};}
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
/* Voices worth listing in the picker: only real Urdu voices (Hindi is a
   different language and is intentionally excluded). */
function pronVoices(){
  return VOICES.filter(function(v){return /^ur(-|_|$)/i.test(v.lang||'');});
}
function chosenVoice(){
  if(S.voiceURI){
    for(var i=0;i<VOICES.length;i++)if(VOICES[i].voiceURI===S.voiceURI)return VOICES[i];
  }
  return urduVoice();
}
var NOVOICE_TIP='Could not play the audio here. If you picked a device voice, switch back to “Built-in audio”.';

/* cyrb53 hash — MUST match cyrb53() in build-audio.mjs so we find the file. */
function audioHash(str){
  var h1=0xdeadbeef,h2=0x41c6ce57;
  for(var i=0;i<str.length;i++){var ch=str.charCodeAt(i);
    h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);
  h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);
  return (h2>>>0).toString(16).padStart(8,'0')+(h1>>>0).toString(16).padStart(8,'0');
}

/* Speak a device voice via the Web Speech API (used only if the user picks one). */
function speakNative(v,text){
  try{
    if(!VOICES.length)refreshVoices();
    speechSynthesis.cancel();speechSynthesis.resume();
    var u=new SpeechSynthesisUtterance(text);
    u.lang=v.lang;u.voice=v;u.rate=S.slow?0.55:0.8;u.pitch=1;
    speechSynthesis.speak(u);
  }catch(e){toast('Speech is unavailable here.');}
}
/* If the bundled clip is missing, fall back to a device voice, else explain. */
function fallbackSpeak(text){
  var v=window.speechSynthesis?chosenVoice():null;
  if(v){speakNative(v,text);return;}
  toast(NOVOICE_TIP);
}
/* Speak using the device's own text-to-speech (system default). Prefers a real
   Urdu voice if the device has one, otherwise asks the OS for lang ur-PK. */
function speakSystem(text){
  try{
    if(!VOICES.length)refreshVoices();
    speechSynthesis.cancel();speechSynthesis.resume();
    var u=new SpeechSynthesisUtterance(text);
    var v=urduVoice();
    u.lang=v?v.lang:'ur-PK';if(v)u.voice=v;
    u.rate=S.slow?0.55:0.8;u.pitch=1;
    speechSynthesis.speak(u);
  }catch(e){toast('Speech is unavailable here.');}
}
/* Primary: play the bundled offline MP3 — works on every device, no internet. */
var localAudio=null;
function speak(text){
  /* "Use my device's voice" — let the OS speak with its own TTS. */
  if(S.voiceURI==='device'&&window.speechSynthesis){speakSystem(text);return;}
  /* Honour an explicitly chosen named device voice, if any. */
  if(S.voiceURI&&window.speechSynthesis){
    var chosen=chosenVoice();
    if(chosen){speakNative(chosen,text);return;}
  }
  try{
    if(localAudio){try{localAudio.pause();}catch(e){}}
    localAudio=new Audio('audio/'+audioHash(text)+'.mp3');
    localAudio.playbackRate=S.slow?0.7:1;
    var done=false;
    localAudio.onerror=function(){if(!done){done=true;fallbackSpeak(text);}};
    var p=localAudio.play();
    if(p&&p.catch)p.catch(function(){/* autoplay/gesture issue — onerror covers missing files */});
  }catch(e){fallbackSpeak(text);}
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
  document.getElementById('tabs').innerHTML=TABS.map(function(tb){
    return '<button class="tab" data-tab="'+tb[0]+'"'+(route.tab===tb[0]?' aria-current="page"':'')+
      '><svg viewBox="0 0 24 24">'+ICONS[tb[0]]+'</svg><span>'+esc(t(tb[1]))+'</span></button>';
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
  var s=shownStreak(), de=S.lang==='de';
  document.getElementById('streakChip').textContent=de?(s===1?'1 Tag Serie':s+' Tage Serie'):(s===1?'1 day streak':s+' day streak');
  var d=dueNow();
  document.getElementById('dueChip').textContent=de?(d===0?'nichts fällig':d+' fällig'):(d===0?'nothing due':d+' due');
  var lb=document.getElementById('langBtn');
  if(lb){var de=S.lang==='de';
    lb.innerHTML='<span class="fl'+(de?'':' on')+'">🇬🇧</span><span class="fl'+(de?' on':'')+'">🇩🇪</span>';
    lb.title=de?'Meanings in German — tap for English':'Meanings in English — tap for German';}
}

/* ============================ views ============================ */
function render(){
  rollDay();paintChrome();
  var v=document.getElementById('view');
  var html=({home:viewHome,learn:viewLearn,cards:viewCards,quiz:viewQuiz,script:viewScript,game:viewGame})[route.tab]();
  v.innerHTML=html;
  paintTabs();
  if(S.lang==='de')translateDom(v);
}

/* ---- home ---- */
function ringSvg(frac){
  var r=38,c=2*Math.PI*r;
  return '<svg width="86" height="86" viewBox="0 0 86 86">'+
    '<circle cx="43" cy="43" r="'+r+'" stroke="var(--raise)" stroke-width="7" fill="none"/>'+
    '<circle cx="43" cy="43" r="'+r+'" stroke="#0e7d3e" stroke-width="7" fill="none" stroke-linecap="round"'+
    ' stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+(c*(1-frac)).toFixed(1)+'"/></svg>';
}
function viewHome(){
  var done=Math.min(S.todayCount,GOAL),frac=done/GOAL;
  var d=dueNow(),wordOfDay=WORDS[(new Date().getDate()*7+new Date().getMonth()*31)%WORDS.length];
  var learned=learnedCount();
  var h='<div class="stack">';
  h+='<div class="hero"><div class="ring">'+ringSvg(frac)+
     '<div class="val"><div><b>'+done+'</b><span>'+(S.lang==='de'?'von ':'of ')+GOAL+'</span></div></div></div>'+
     '<div class="grow"><div class="eyebrow">Today</div>'+
     '<h2 style="font-size:1.25rem;margin:2px 0 4px">'+
       (done>=GOAL?'Goal met':(done>0?'Keep going':'Ready when you are'))+'</h2>'+
     '<p class="muted" style="margin:0">'+
       (d>0? (S.lang==='de'?(d+' '+(d===1?'Karte wartet':'Karten warten')+' auf Wiederholung.'):(d+' card'+(d===1?'':'s')+' waiting for review.')) : t('Nothing is due — new words are queued up.'))+
     '</p></div></div>';

  h+='<button class="btn" data-start="all">'+(d>0?(S.lang==='de'?(d+' '+(d===1?'Karte':'Karten')+' wiederholen'):('Review '+d+' card'+(d===1?'':'s'))):t('Start a session'))+'</button>';

  h+='<div class="split">'+
     '<div class="card pad"><div class="eyebrow">Words known</div><div style="font-family:Newsreader,Georgia,serif;font-size:1.6rem;font-weight:600;font-variant-numeric:tabular-nums">'+learned+' <span style="font-size:.9rem;color:var(--ink3);font-family:\'IBM Plex Sans\',sans-serif">/ '+WORDS.length+'</span></div></div>'+
     '<div class="card pad"><div class="eyebrow">Overall mastery</div><div style="font-family:Newsreader,Georgia,serif;font-size:1.6rem;font-weight:600;font-variant-numeric:tabular-nums">'+Math.round(overall()*100)+'%</div></div>'+
     '</div>';

  h+='<div class="sec"><h2>Word of the day</h2><span class="ur">لفظِ روز</span></div>';
  h+='<div class="card"><div class="entry">'+spkBtn(wordOfDay.ur)+'<div class="grow">'+
     '<div class="en">'+esc(gloss(wordOfDay))+'</div>'+
     '<div class="ur">'+esc(wordOfDay.ur)+'</div>'+
     '<div class="tl">'+esc(wordOfDay.tl)+'</div>'+
     (wordOfDay.note?'<div class="note">'+esc(wordOfDay.note)+'</div>':'')+
     '</div></div></div>';

  h+='<div class="sec"><h2>Your topics</h2></div><div class="card rowlist">';
  TOPICS.slice(0,6).forEach(function(t){h+=topicRow(t);});
  h+='</div>';
  h+='<button class="btn ghost" data-go="learn">'+(S.lang==='de'?('Alle '+TOPICS.length+' Themen'):('See all '+TOPICS.length+' topics'))+'</button>';

  h+='<div class="sec"><h2>Play a game</h2><span class="ur">کھیل</span></div>';
  h+='<button class="btn" data-go="game" style="background:linear-gradient(135deg,#12b886,#4c6ef5)">🎮 Memory Match — match the words</button>';

  h+='<div class="sec"><h2>Pronunciation</h2><span class="ur">تلفظ</span></div>';
  h+=pronCard();

  h+='<p class="tiny" style="text-align:center;margin:6px 0 0">Progress is saved on this device only.</p>';
  h+='<p class="credit">Made and Designed with <span class="hh">❤</span> by Ahmad Abdullah</p>';
  h+='<p class="tiny" style="text-align:center;margin:4px 0 0"><a href="privacy.html" target="_blank" rel="noopener" style="color:var(--ink3)">'+(S.lang==='de'?'Datenschutz':'Privacy')+'</a> · v'+APP_VERSION+'</p>';
  return h+'</div>';
}
function pronCard(){
  var speech=hasSpeech();
  var vs=speech?pronVoices():[];
  var named=(S.voiceURI&&S.voiceURI!=='device'&&speech)?chosenVoice():null;
  var usingNamed=!!(named&&named.voiceURI===S.voiceURI);
  var usingDevice=S.voiceURI==='device'&&speech;
  var status;
  if(usingNamed) status='<div class="pstat ok">Ready — using your device voice <b>'+esc(named.name)+'</b> ✓</div>';
  else if(usingDevice) status='<div class="pstat ok">Using your device’s own voice ✓</div>';
  else status='<div class="pstat ok">Ready — built-in offline audio ✓ Works on every device, including iPhone &amp; iPad. No internet needed.</div>';
  var h='<div class="card pad stack" style="gap:12px">';
  h+=status;
  h+='<div class="split">'+
     '<button class="btn" data-speak="شکریہ">Test — <span class="ur" style="font-size:1.15rem">شکریہ</span></button>'+
     '<button class="toggle" data-slow="1" aria-pressed="'+(S.slow?'true':'false')+'">'+(S.slow?'Slow speed · on':'Slow speed')+'</button></div>';
  if(speech){
    var opts='<option value=""'+(!S.voiceURI?' selected':'')+'>Built-in audio (recommended)</option>';
    opts+='<option value="device"'+(S.voiceURI==='device'?' selected':'')+'>Use my device’s voice</option>';
    vs.forEach(function(v){
      opts+='<option value="'+esc(v.voiceURI)+'"'+(S.voiceURI===v.voiceURI?' selected':'')+'>'+esc(v.name)+' — '+esc(v.lang)+'</option>';
    });
    h+='<div><div class="eyebrow">Voice</div><select id="voiceSel" class="sel" aria-label="Pronunciation voice" style="margin-top:6px">'+opts+'</select></div>';
  }
  h+='<p class="tiny" style="margin:0">Every word has built-in audio that plays offline on any device. You can also choose your device’s own voice above (uses its text-to-speech).</p>';
  return h+'</div>';
}
function spkBtn(text){
  return '<button class="spk" data-speak="'+esc(text)+'" aria-label="Play pronunciation">'+
    '<svg viewBox="0 0 24 24"><path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18.2 6.5a8 8 0 0 1 0 11"/></svg></button>';
}
var TOPIC_EMOJI={greet:'👋',people:'👨‍👩‍👧',numbers:'🔢',time:'📅',food:'🍎',
  colors:'🎨',body:'🖐️',home:'🏠',travel:'✈️',verbs:'🏃',adj:'🌈',nature:'🌤️',
  numbers100:'💯',animals:'🐾',school:'🏫',feelings:'😊',play:'⚽',
  intro:'🙋',outabout:'🛍️',smalltalk:'💬'};
var TOPIC_ART = {"greet":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"60\" cy=\"30\" r=\"9\" fill=\"#ffd43b\"/><path d=\"M60 21v-4M60 43v4M51 30h-4M73 30h-4M53 23l-3-3M67 23l3-3M53 37l-3 3M67 37l3 3\" stroke=\"#f9820b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><g><rect x=\"14\" y=\"40\" width=\"26\" height=\"26\" rx=\"10\" fill=\"#4c6ef5\"/><circle cx=\"27\" cy=\"26\" r=\"12\" fill=\"#ffd9b8\"/><path d=\"M15 24a12 12 0 0124 0v3l-5-5-4 4-4-4-4 4-5-4z\" fill=\"#33285a\"/><circle cx=\"23\" cy=\"26\" r=\"2\" fill=\"#33285a\"/><circle cx=\"31\" cy=\"26\" r=\"2\" fill=\"#33285a\"/><path d=\"M23 31q4 4 8 0\" stroke=\"#33285a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M40 46l9-9\" stroke=\"#ffd9b8\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"36\" r=\"5\" fill=\"#ffd9b8\"/></g><g><rect x=\"80\" y=\"40\" width=\"26\" height=\"26\" rx=\"10\" fill=\"#ff5d8f\"/><circle cx=\"93\" cy=\"26\" r=\"12\" fill=\"#ffd9b8\"/><path d=\"M81 27a12 12 0 0124 0q-6-6-12-6t-12 6z\" fill=\"#12b886\"/><circle cx=\"89\" cy=\"26\" r=\"2\" fill=\"#33285a\"/><circle cx=\"97\" cy=\"26\" r=\"2\" fill=\"#33285a\"/><path d=\"M89 31q4 4 8 0\" stroke=\"#33285a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M80 46l-9-9\" stroke=\"#ffd9b8\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"36\" r=\"5\" fill=\"#ffd9b8\"/></g></svg>","people":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"2\" y=\"2\" width=\"116\" height=\"68\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"98\" cy=\"18\" r=\"9\" fill=\"#ffd43b\"/><rect x=\"8\" y=\"52\" width=\"104\" height=\"12\" rx=\"6\" fill=\"#12b886\"/><g stroke=\"#33285a\" stroke-width=\"2\"><path d=\"M34 62V44a14 14 0 0 1 28 0v18Z\" fill=\"#4c6ef5\"/><circle cx=\"48\" cy=\"26\" r=\"11\" fill=\"#f9820b\"/><path d=\"M37 24a11 11 0 0 1 22 0Z\" fill=\"#33285a\"/><path d=\"M62 62V46a12 12 0 0 1 24 0v16Z\" fill=\"#ff5d8f\"/><circle cx=\"74\" cy=\"30\" r=\"10\" fill=\"#f9820b\"/><path d=\"M64 30a10 10 0 0 1 20 0Z\" fill=\"#9b5de5\"/><path d=\"M88 62V50a8 8 0 0 1 16 0v12Z\" fill=\"#ffd43b\"/><circle cx=\"96\" cy=\"38\" r=\"7\" fill=\"#f9820b\"/><path d=\"M89 37a7 7 0 0 1 14 0Z\" fill=\"#33285a\"/></g><g fill=\"#33285a\"><circle cx=\"44\" cy=\"26\" r=\"1.5\"/><circle cx=\"52\" cy=\"26\" r=\"1.5\"/><circle cx=\"70\" cy=\"30\" r=\"1.5\"/><circle cx=\"78\" cy=\"30\" r=\"1.5\"/><circle cx=\"93\" cy=\"38\" r=\"1.3\"/><circle cx=\"99\" cy=\"38\" r=\"1.3\"/></g><g fill=\"none\" stroke=\"#33285a\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M45 30a4 3 0 0 0 6 0\"/><path d=\"M71 34a4 3 0 0 0 6 0\"/><path d=\"M94 41a3 2 0 0 0 4 0\"/></g></svg>","numbers":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><g stroke=\"#33285a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><rect x=\"12\" y=\"30\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#4c6ef5\"/><rect x=\"45\" y=\"22\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#ff5d8f\"/><rect x=\"78\" y=\"30\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#12b886\"/></g><g fill=\"none\" stroke=\"#fff7ef\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M25 40l4-2v16\"/><path d=\"M56 32h8a4 4 0 0 1 0 8l-8 8h12\"/><path d=\"M91 40a4 4 0 1 1 7 3 4 4 0 1 1-7 3\"/></g><circle cx=\"27\" cy=\"22\" r=\"4\" fill=\"#ffd43b\" stroke=\"#33285a\" stroke-width=\"2\"/><circle cx=\"93\" cy=\"22\" r=\"4\" fill=\"#f9820b\" stroke=\"#33285a\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"14\" r=\"4\" fill=\"#9b5de5\" stroke=\"#33285a\" stroke-width=\"2\"/></svg>","numbers100":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"2\" y=\"2\" width=\"116\" height=\"68\" rx=\"14\" fill=\"#fff7ef\"/><g fill=\"#ffd43b\" stroke=\"#33285a\" stroke-width=\"1\"><path d=\"M18 14l1.6 3.4L23 19l-3.4 1.6L18 24l-1.6-3.4L13 19l3.4-1.6z\"/><path d=\"M104 20l1.6 3.4L109 25l-3.4 1.6L104 30l-1.6-3.4L99 25l3.4-1.6z\"/><path d=\"M14 52l1.4 3L18 56.4l-2.6 1.4L14 61l-1.4-3.2L10 56.4l2.6-1.4z\"/><path d=\"M108 50l1.4 3 2.6 1.4-2.6 1.4L108 59l-1.4-3.2-2.6-1.4 2.6-1.4z\"/><path d=\"M60 8l1.4 3L64 12.4 61.4 13.8 60 17l-1.4-3.2L56 12.4l2.6-1.4z\"/></g><g stroke=\"#33285a\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M34 30v22\" stroke=\"#4c6ef5\"/><path d=\"M34 30l-5 4\" stroke=\"#4c6ef5\"/></g><ellipse cx=\"58\" cy=\"41\" rx=\"12\" ry=\"15\" fill=\"none\" stroke=\"#ff5d8f\" stroke-width=\"6\"/><ellipse cx=\"86\" cy=\"41\" rx=\"12\" ry=\"15\" fill=\"none\" stroke=\"#12b886\" stroke-width=\"6\"/><g fill=\"#f9820b\"><circle cx=\"26\" cy=\"60\" r=\"2.5\"/><circle cx=\"94\" cy=\"62\" r=\"2.5\"/></g></svg>","time":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"2\" y=\"2\" width=\"116\" height=\"68\" rx=\"14\" fill=\"#fff7ef\"/><g fill=\"#ffd43b\"><circle cx=\"20\" cy=\"30\" r=\"9\"/><g stroke=\"#ffd43b\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M20 15v-5M20 50v-5M5 30h-1M36 30h-1M9 19l-3-3M31 19l3-3M9 41l-3 3M31 41l3 3\"/></g></g><path d=\"M96 22a11 11 0 1 0 9 17 9 9 0 0 1-9-17z\" fill=\"#ffd43b\"/><circle cx=\"60\" cy=\"38\" r=\"26\" fill=\"#4c6ef5\"/><circle cx=\"60\" cy=\"38\" r=\"20\" fill=\"#fff7ef\"/><g stroke=\"#33285a\" stroke-width=\"2.4\" stroke-linecap=\"round\"><path d=\"M60 38V26M60 38l9 5\"/></g><circle cx=\"60\" cy=\"38\" r=\"2.6\" fill=\"#33285a\"/><g fill=\"#33285a\"><circle cx=\"52\" cy=\"33\" r=\"2\"/><circle cx=\"68\" cy=\"33\" r=\"2\"/></g><path d=\"M53 44a7 5 0 0 0 14 0\" fill=\"none\" stroke=\"#ff5d8f\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><circle cx=\"60\" cy=\"12\" r=\"3\" fill=\"#12b886\"/></svg>","food":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"2\" y=\"2\" width=\"116\" height=\"68\" rx=\"12\" fill=\"#fff7ef\"/><g stroke=\"#33285a\" stroke-width=\"1.1\"><ellipse cx=\"26\" cy=\"52\" rx=\"20\" ry=\"6\" fill=\"#4c6ef5\"/><circle cx=\"26\" cy=\"42\" r=\"15\" fill=\"#ffd43b\"/><circle cx=\"26\" cy=\"42\" r=\"10.5\" fill=\"#f9820b\" stroke=\"none\"/><circle cx=\"21\" cy=\"41\" r=\"1.6\" fill=\"#33285a\" stroke=\"none\"/><circle cx=\"31\" cy=\"41\" r=\"1.6\" fill=\"#33285a\" stroke=\"none\"/><path d=\"M21 45q5 4 10 0\" fill=\"none\"/></g><g stroke=\"#33285a\" stroke-width=\"1.1\"><circle cx=\"60\" cy=\"44\" r=\"15\" fill=\"#ff5d8f\"/><path d=\"M60 30q6-8 12-4-6 4-12 4\" fill=\"#12b886\"/><path d=\"M60 30v-4\" stroke-width=\"1.6\"/><circle cx=\"55\" cy=\"43\" r=\"1.6\" fill=\"#33285a\" stroke=\"none\"/><circle cx=\"65\" cy=\"43\" r=\"1.6\" fill=\"#33285a\" stroke=\"none\"/><path d=\"M55 47q5 4 10 0\" fill=\"none\"/></g><g stroke=\"#12b886\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M92 20q-2 3 0 6\"/><path d=\"M98 18q-2 3 0 6\"/></g><g stroke=\"#33285a\" stroke-width=\"1.1\"><ellipse cx=\"95\" cy=\"56\" rx=\"16\" ry=\"4\" fill=\"#fff\" /><path d=\"M84 34h22l-2 16a4 4 0 0 1-4 3H90a4 4 0 0 1-4-3z\" fill=\"#fff\"/><path d=\"M106 37c6 0 6 9 0 9\" fill=\"none\"/><circle cx=\"92\" cy=\"42\" r=\"1.5\" fill=\"#33285a\" stroke=\"none\"/><circle cx=\"100\" cy=\"42\" r=\"1.5\" fill=\"#33285a\" stroke=\"none\"/><path d=\"M92 46q4 4 8 0\" fill=\"none\"/></g></svg>","colors":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M28 62a32 32 0 0 1 64 0\" stroke=\"#ff5d8f\" stroke-width=\"6\"/><path d=\"M35 62a25 25 0 0 1 50 0\" stroke=\"#f9820b\" stroke-width=\"6\"/><path d=\"M42 62a18 18 0 0 1 36 0\" stroke=\"#ffd43b\" stroke-width=\"6\"/><path d=\"M49 62a11 11 0 0 1 22 0\" stroke=\"#12b886\" stroke-width=\"6\"/></g><g stroke=\"#33285a\" stroke-width=\"1.5\"><circle cx=\"20\" cy=\"24\" r=\"8\" fill=\"#4c6ef5\"/><circle cx=\"16\" cy=\"34\" r=\"3\" fill=\"#4c6ef5\"/><circle cx=\"26\" cy=\"15\" r=\"2.5\" fill=\"#4c6ef5\"/><circle cx=\"100\" cy=\"26\" r=\"8\" fill=\"#9b5de5\"/><circle cx=\"105\" cy=\"36\" r=\"3\" fill=\"#9b5de5\"/><circle cx=\"94\" cy=\"16\" r=\"2.5\" fill=\"#9b5de5\"/></g><circle cx=\"60\" cy=\"66\" r=\"4\" fill=\"#ff5d8f\" stroke=\"#33285a\" stroke-width=\"1.5\"/></svg>","body":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"2\" y=\"2\" width=\"116\" height=\"68\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"52\" cy=\"36\" r=\"26\" fill=\"#ffd43b\" stroke=\"#33285a\" stroke-width=\"2\"/><path d=\"M32 22q4-8 12-6\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M72 22q-4-8-12-6\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linecap=\"round\"/><ellipse cx=\"44\" cy=\"33\" rx=\"6\" ry=\"7\" fill=\"#fff\"/><ellipse cx=\"60\" cy=\"33\" rx=\"6\" ry=\"7\" fill=\"#fff\"/><circle cx=\"45\" cy=\"34\" r=\"3.2\" fill=\"#33285a\"/><circle cx=\"61\" cy=\"34\" r=\"3.2\" fill=\"#33285a\"/><circle cx=\"46\" cy=\"33\" r=\"1\" fill=\"#fff\"/><circle cx=\"62\" cy=\"33\" r=\"1\" fill=\"#fff\"/><path d=\"M50 42q2 3 4 0\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M45 49q7 5 14 0\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"34\" cy=\"42\" r=\"4\" fill=\"#ff5d8f\" opacity=\".6\"/><circle cx=\"70\" cy=\"42\" r=\"4\" fill=\"#ff5d8f\" opacity=\".6\"/><g stroke=\"#33285a\" stroke-width=\"2\" stroke-linecap=\"round\"><rect x=\"90\" y=\"28\" width=\"14\" height=\"20\" rx=\"6\" fill=\"#f9820b\"/><rect x=\"88\" y=\"18\" width=\"4\" height=\"16\" rx=\"2\" fill=\"#f9820b\"/><rect x=\"93\" y=\"14\" width=\"4\" height=\"20\" rx=\"2\" fill=\"#f9820b\"/><rect x=\"98\" y=\"15\" width=\"4\" height=\"19\" rx=\"2\" fill=\"#f9820b\"/><rect x=\"103\" y=\"19\" width=\"4\" height=\"15\" rx=\"2\" fill=\"#f9820b\"/><path d=\"M90 30q-6 2-6 8\" fill=\"none\"/></g><path d=\"M100 8q3 2 0 4M104 10q2 2 0 4\" fill=\"none\" stroke=\"#12b886\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>","home":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"12\" fill=\"#fff7ef\"/><rect x=\"4\" y=\"52\" width=\"112\" height=\"16\" rx=\"6\" fill=\"#12b886\"/><g stroke=\"#33285a\" stroke-width=\"1.6\"><rect x=\"88\" y=\"30\" width=\"8\" height=\"24\" rx=\"3\" fill=\"#f9820b\"/><circle cx=\"92\" cy=\"24\" r=\"14\" fill=\"#12b886\"/><circle cx=\"82\" cy=\"30\" r=\"9\" fill=\"#12b886\"/><circle cx=\"101\" cy=\"30\" r=\"9\" fill=\"#12b886\"/><rect x=\"20\" y=\"30\" width=\"48\" height=\"28\" rx=\"4\" fill=\"#ffd43b\"/><path d=\"M16 32 L44 12 L72 32 Z\" fill=\"#ff5d8f\"/><rect x=\"30\" y=\"40\" width=\"14\" height=\"18\" rx=\"3\" fill=\"#f9820b\"/><circle cx=\"41\" cy=\"49\" r=\"1.6\" fill=\"#ffd43b\" stroke=\"none\"/><rect x=\"50\" y=\"38\" width=\"12\" height=\"12\" rx=\"2\" fill=\"#4c6ef5\"/><line x1=\"56\" y1=\"38\" x2=\"56\" y2=\"50\"/><line x1=\"50\" y1=\"44\" x2=\"62\" y2=\"44\"/></g><circle cx=\"20\" cy=\"14\" r=\"7\" fill=\"#ffd43b\" stroke=\"#33285a\" stroke-width=\"1.6\"/></svg>","travel":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"98\" cy=\"20\" r=\"10\" fill=\"#ffd43b\"/><path d=\"M14 60h92\" stroke=\"#33285a\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M22 60h14M50 60h14M78 60h14\" stroke=\"#ffd43b\" stroke-width=\"2\" stroke-linecap=\"round\"/><g transform=\"translate(70 22)\"><path d=\"M0 6 26-2 20 6 26 14z\" fill=\"#4c6ef5\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M8 6l-6-9 2 9-2 9z\" fill=\"#ff5d8f\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\"/></g><g transform=\"translate(30 40)\"><rect x=\"0\" y=\"6\" width=\"42\" height=\"12\" rx=\"5\" fill=\"#ff5d8f\" stroke=\"#33285a\" stroke-width=\"2.5\"/><path d=\"M8 6c3-8 22-8 26 0z\" fill=\"#12b886\" stroke=\"#33285a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><rect x=\"14\" y=\"-1\" width=\"12\" height=\"7\" rx=\"2\" fill=\"#cdeffb\" stroke=\"#33285a\" stroke-width=\"2\"/><circle cx=\"10\" cy=\"18\" r=\"5\" fill=\"#33285a\"/><circle cx=\"10\" cy=\"18\" r=\"2\" fill=\"#fff7ef\"/><circle cx=\"32\" cy=\"18\" r=\"5\" fill=\"#33285a\"/><circle cx=\"32\" cy=\"18\" r=\"2\" fill=\"#fff7ef\"/></g></svg>","verbs":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"98\" cy=\"18\" r=\"10\" fill=\"#ffd43b\"/><g stroke=\"#33285a\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M22 40h8\"/><path d=\"M18 50h8\"/><path d=\"M24 60h9\"/></g><g fill=\"#33285a\"><ellipse cx=\"46\" cy=\"66\" rx=\"16\" ry=\"3\"/></g><g stroke=\"#33285a\" stroke-width=\"4\" stroke-linecap=\"round\"><path d=\"M60 34l14-6\" stroke=\"#f9820b\"/><path d=\"M60 34l10 10\" stroke=\"#f9820b\"/><path d=\"M56 46l-4 14\" stroke=\"#4c6ef5\"/><path d=\"M56 46l14 6\" stroke=\"#4c6ef5\"/></g><circle cx=\"58\" cy=\"22\" r=\"9\" fill=\"#f9c8a0\"/><path d=\"M49 20a9 9 0 0 1 18-2l-4 3-4-3-4 3z\" fill=\"#33285a\"/><circle cx=\"61\" cy=\"22\" r=\"1.5\" fill=\"#33285a\"/><path d=\"M60 26q3 1 5-1\" stroke=\"#33285a\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\"/><rect x=\"49\" y=\"30\" width=\"18\" height=\"20\" rx=\"8\" fill=\"#ff5d8f\"/><circle cx=\"74\" cy=\"27\" r=\"3.5\" fill=\"#f9c8a0\"/><circle cx=\"70\" cy=\"45\" r=\"3.5\" fill=\"#f9c8a0\"/><path d=\"M50 60l4 2 3-3\" fill=\"none\" stroke=\"#12b886\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M63 55l6 2 1-4\" fill=\"none\" stroke=\"#12b886\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g fill=\"#9b5de5\"><circle cx=\"88\" cy=\"40\" r=\"3\"/><circle cx=\"96\" cy=\"52\" r=\"2.5\"/><circle cx=\"84\" cy=\"58\" r=\"2\"/></g></svg>","adj":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><path d=\"M40 40 Q40 58 45 62 L43 68\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"1.5\"/><path d=\"M85 44 Q85 56 82 60 L84 64\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"1.5\"/><ellipse cx=\"40\" cy=\"30\" rx=\"22\" ry=\"26\" fill=\"#4c6ef5\" stroke=\"#33285a\" stroke-width=\"2.5\"/><ellipse cx=\"33\" cy=\"20\" rx=\"6\" ry=\"8\" fill=\"#fff7ef\" opacity=\".5\"/><path d=\"M37 55 L43 55 L40 60 Z\" fill=\"#4c6ef5\" stroke=\"#33285a\" stroke-width=\"2\"/><ellipse cx=\"85\" cy=\"38\" rx=\"11\" ry=\"13\" fill=\"#ff5d8f\" stroke=\"#33285a\" stroke-width=\"2.5\"/><ellipse cx=\"81\" cy=\"33\" rx=\"3\" ry=\"4\" fill=\"#fff7ef\" opacity=\".5\"/><path d=\"M82 50 L88 50 L85 54 Z\" fill=\"#ff5d8f\" stroke=\"#33285a\" stroke-width=\"2\"/></svg>","nature":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"2\" y=\"2\" width=\"116\" height=\"68\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"28\" cy=\"24\" r=\"12\" fill=\"#ffd43b\"/><g stroke=\"#ffd43b\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M28 6v-3\"/><path d=\"M28 45v3\"/><path d=\"M10 24H7\"/><path d=\"M46 24h3\"/><path d=\"M15 11l-2-2\"/><path d=\"M41 11l2-2\"/><path d=\"M15 37l-2 2\"/><path d=\"M41 37l2 2\"/></g><path d=\"M96 58 78 30l-18 28z\" fill=\"#12b886\"/><path d=\"M96 58 84 40l-6 18z\" fill=\"#0ca678\"/><path d=\"M60 58h58\" stroke=\"#9b5de5\" stroke-width=\"0\" fill=\"none\"/><rect x=\"38\" y=\"48\" width=\"6\" height=\"14\" rx=\"3\" fill=\"#f9820b\"/><circle cx=\"41\" cy=\"42\" r=\"12\" fill=\"#12b886\"/><circle cx=\"31\" cy=\"46\" r=\"8\" fill=\"#12b886\"/><circle cx=\"51\" cy=\"46\" r=\"8\" fill=\"#12b886\"/><circle cx=\"41\" cy=\"36\" r=\"8\" fill=\"#37cf9a\"/><g fill=\"#ffffff\"><circle cx=\"82\" cy=\"20\" r=\"9\"/><circle cx=\"94\" cy=\"20\" r=\"11\"/><circle cx=\"106\" cy=\"22\" r=\"8\"/><rect x=\"80\" y=\"20\" width=\"30\" height=\"11\" rx=\"5\"/></g><rect x=\"8\" y=\"60\" width=\"104\" height=\"6\" rx=\"3\" fill=\"#9b5de5\"/></svg>","animals":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect x=\"1\" y=\"1\" width=\"118\" height=\"70\" rx=\"12\" fill=\"#fff7ef\"/><g stroke=\"#33285a\" stroke-width=\"1\" stroke-linejoin=\"round\"><!--CAT--><g><path d=\"M18 30 l-5-9 8 3z\" fill=\"#f9820b\"/><path d=\"M42 30 l5-9-8 3z\" fill=\"#f9820b\"/><circle cx=\"30\" cy=\"40\" r=\"15\" fill=\"#f9820b\"/><path d=\"M45 55 q6 2 4 8\" fill=\"none\" stroke-width=\"1.4\"/><circle cx=\"25\" cy=\"38\" r=\"2.4\" fill=\"#33285a\" stroke=\"none\"/><circle cx=\"35\" cy=\"38\" r=\"2.4\" fill=\"#33285a\" stroke=\"none\"/><path d=\"M28 43 l2 2 2-2\" fill=\"none\" stroke-width=\"1.2\"/><path d=\"M30 45 q-4 3-8 1M30 45 q4 3 8 1\" fill=\"none\" stroke-width=\"0.8\"/></g><!--DOG--><g><path d=\"M46 36 q-4 2-3 9 4 0 5-4z\" fill=\"#b5651d\"/><path d=\"M74 36 q4 2 3 9-4 0-5-4z\" fill=\"#b5651d\"/><circle cx=\"60\" cy=\"40\" r=\"15\" fill=\"#b5651d\"/><circle cx=\"55\" cy=\"38\" r=\"2.4\" fill=\"#33285a\" stroke=\"none\"/><circle cx=\"65\" cy=\"38\" r=\"2.4\" fill=\"#33285a\" stroke=\"none\"/><ellipse cx=\"60\" cy=\"44\" rx=\"2.6\" ry=\"2\" fill=\"#33285a\" stroke=\"none\"/><path d=\"M60 46 v3\" fill=\"none\" stroke-width=\"1\"/><path d=\"M58 49 q2 4 4 0\" fill=\"#ff5d8f\"/></g><!--ELEPHANT--><g><circle cx=\"90\" cy=\"40\" r=\"15\" fill=\"#9aa7bd\"/><circle cx=\"78\" cy=\"38\" r=\"7\" fill=\"#9aa7bd\"/><circle cx=\"102\" cy=\"38\" r=\"7\" fill=\"#9aa7bd\"/><path d=\"M90 44 q-3 6 1 12 4 1 4-4\" fill=\"#9aa7bd\"/><circle cx=\"86\" cy=\"38\" r=\"2.2\" fill=\"#33285a\" stroke=\"none\"/><circle cx=\"94\" cy=\"38\" r=\"2.2\" fill=\"#33285a\" stroke=\"none\"/><path d=\"M87 54 l-2 4M93 54 l2 4\" stroke=\"#fff\" stroke-width=\"1.6\"/></g></g></svg>","school":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><g stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"14\" y=\"30\" width=\"34\" height=\"34\" rx=\"6\" fill=\"#12b886\"/><rect x=\"24\" y=\"24\" width=\"14\" height=\"9\" rx=\"2\" fill=\"#0ca678\"/><rect x=\"14\" y=\"42\" width=\"34\" height=\"6\" fill=\"#ffd43b\"/><circle cx=\"31\" cy=\"53\" r=\"4\" fill=\"#fff7ef\"/><path d=\"M60 22c-9-6-19-4-24 0v34c5-4 15-6 24 0z\" fill=\"#4c6ef5\"/><path d=\"M60 22c9-6 19-4 24 0v34c-5-4-15-6-24 0z\" fill=\"#5c7cfa\"/><path d=\"M60 22v34\" fill=\"none\"/><path d=\"M40 33h10M40 40h10M70 33h10M70 40h10\" stroke=\"#fff7ef\" stroke-width=\"2\"/><g transform=\"rotate(38 96 46)\"><rect x=\"90\" y=\"18\" width=\"9\" height=\"34\" rx=\"2\" fill=\"#ffd43b\"/><path d=\"M90 52h9l-4.5 8z\" fill=\"#f9820b\"/><path d=\"M92.5 57h4l-1.5 3z\" fill=\"#33285a\" stroke=\"none\"/><rect x=\"90\" y=\"18\" width=\"9\" height=\"6\" rx=\"2\" fill=\"#ff5d8f\"/></g></g></svg>","feelings":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><circle cx=\"38\" cy=\"36\" r=\"24\" fill=\"#ffd43b\" stroke=\"#33285a\" stroke-width=\"3\"/><circle cx=\"30\" cy=\"30\" r=\"3.5\" fill=\"#33285a\"/><circle cx=\"46\" cy=\"30\" r=\"3.5\" fill=\"#33285a\"/><circle cx=\"24\" cy=\"38\" r=\"4\" fill=\"#ff5d8f\" opacity=\".6\"/><circle cx=\"52\" cy=\"38\" r=\"4\" fill=\"#ff5d8f\" opacity=\".6\"/><path d=\"M28 42a10 8 0 0 0 20 0z\" fill=\"#33285a\"/><circle cx=\"82\" cy=\"36\" r=\"24\" fill=\"#4c6ef5\" stroke=\"#33285a\" stroke-width=\"3\"/><circle cx=\"74\" cy=\"30\" r=\"3.5\" fill=\"#33285a\"/><circle cx=\"90\" cy=\"30\" r=\"3.5\" fill=\"#33285a\"/><path d=\"M72 49a10 8 0 0 1 20 0\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"72\" cy=\"40\" r=\"2.5\" fill=\"#8fb3ff\"/></svg>","play":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><path d=\"M92 8 L104 26 L92 40 L80 26 Z\" fill=\"#ff5d8f\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M92 8 L92 40 M80 26 L104 26\" stroke=\"#33285a\" stroke-width=\"1.5\"/><path d=\"M92 40 q3 8 -3 12 q3 3 6 0 q-3 -8 0 -12\" fill=\"none\" stroke=\"#9b5de5\" stroke-width=\"2\" stroke-linecap=\"round\"/><g stroke=\"#33285a\" stroke-width=\"2\"><rect x=\"16\" y=\"44\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#4c6ef5\"/><rect x=\"30\" y=\"34\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#12b886\"/><rect x=\"20\" y=\"30\" width=\"14\" height=\"14\" rx=\"3\" fill=\"#ffd43b\"/></g><circle cx=\"60\" cy=\"52\" r=\"15\" fill=\"#fff\" stroke=\"#33285a\" stroke-width=\"2\"/><path d=\"M60 41 l6 5 -2.5 8 h-7 l-2.5 -8 z\" fill=\"#33285a\"/><path d=\"M48.5 48 l6 1 M71.5 48 l-6 1 M56 66 l1 -7 M64 66 l-1 -7\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"30\" cy=\"14\" r=\"4\" fill=\"#f9820b\"/><circle cx=\"102\" cy=\"56\" r=\"3\" fill=\"#12b886\"/></svg>","intro":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><rect x=\"8\" y=\"8\" width=\"104\" height=\"56\" rx=\"12\" fill=\"#e9f0ff\"/><g stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M40 66 V50 a20 20 0 0 1 40 0 V66Z\" fill=\"#4c6ef5\"/><circle cx=\"60\" cy=\"26\" r=\"14\" fill=\"#ffd43b\"/><path d=\"M46 22 a14 14 0 0 1 28 0 v-3 a14 14 0 0 0 -28 0Z\" fill=\"#9b5de5\"/><circle cx=\"54\" cy=\"27\" r=\"2\" fill=\"#33285a\"/><circle cx=\"66\" cy=\"27\" r=\"2\" fill=\"#33285a\"/><path d=\"M55 33 q5 4 10 0\" fill=\"none\"/><rect x=\"46\" y=\"50\" width=\"20\" height=\"14\" rx=\"3\" fill=\"#fff7ef\"/><rect x=\"53\" y=\"47\" width=\"6\" height=\"6\" rx=\"2\" fill=\"#ff5d8f\"/><path d=\"M50 55 h12 M50 59 h9\" stroke=\"#9b5de5\"/><path d=\"M80 52 l16 8\" fill=\"none\"/><circle cx=\"98\" cy=\"61\" r=\"4\" fill=\"#ffd43b\"/></g></svg>","outabout":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><rect x=\"24\" y=\"30\" width=\"60\" height=\"30\" rx=\"4\" fill=\"#ffd43b\"/><rect x=\"24\" y=\"56\" width=\"60\" height=\"4\" fill=\"#33285a\"/><rect x=\"27\" y=\"33\" width=\"6\" height=\"24\" fill=\"#f9820b\"/><rect x=\"75\" y=\"33\" width=\"6\" height=\"24\" fill=\"#f9820b\"/><path d=\"M20 30h68l-6-10H26z\" fill=\"#4c6ef5\"/><path d=\"M20 30h68l-6-10H26z\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M26 20l-3 10h10l2-10zm12 0l-1 10h10l1-10zm12 0l1 10h10l-1-10zm12 0l2 10h10l-3-10z\" fill=\"#ff5d8f\"/><circle cx=\"36\" cy=\"46\" r=\"5\" fill=\"#ff5d8f\"/><circle cx=\"47\" cy=\"46\" r=\"5\" fill=\"#12b886\"/><circle cx=\"58\" cy=\"46\" r=\"5\" fill=\"#f9820b\"/><circle cx=\"69\" cy=\"46\" r=\"5\" fill=\"#9b5de5\"/><g><path d=\"M92 40h20l-3 22H95z\" fill=\"#12b886\"/><path d=\"M92 40h20l-3 22H95z\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M97 40a5 5 0 0110 0\" fill=\"none\" stroke=\"#33285a\" stroke-width=\"2\"/><circle cx=\"102\" cy=\"51\" r=\"4\" fill=\"#ffd43b\"/></g><circle cx=\"60\" cy=\"12\" r=\"4\" fill=\"#ffd43b\"/></svg>","smalltalk":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 72\"><rect width=\"120\" height=\"72\" rx=\"14\" fill=\"#fff7ef\"/><g stroke=\"#33285a\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><path d=\"M22 16h50a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10H40l-12 10 2-10h-8a10 10 0 0 1-10-10V26a10 10 0 0 1 10-10z\" fill=\"#4c6ef5\"/><circle cx=\"34\" cy=\"33\" r=\"3.5\" fill=\"#fff7ef\" stroke=\"none\"/><circle cx=\"47\" cy=\"33\" r=\"3.5\" fill=\"#fff7ef\" stroke=\"none\"/><circle cx=\"60\" cy=\"33\" r=\"3.5\" fill=\"#fff7ef\" stroke=\"none\"/><path d=\"M98 32h-42a9 9 0 0 0-9 9v12a9 9 0 0 0 9 9h26l11 9-2-9h7a9 9 0 0 0 9-9V41a9 9 0 0 0-9-9z\" fill=\"#ff5d8f\"/><circle cx=\"68\" cy=\"47\" r=\"3.2\" fill=\"#fff7ef\" stroke=\"none\"/><circle cx=\"80\" cy=\"47\" r=\"3.2\" fill=\"#fff7ef\" stroke=\"none\"/><circle cx=\"92\" cy=\"47\" r=\"3.2\" fill=\"#fff7ef\" stroke=\"none\"/></g></svg>"};
function topicArt(id){return TOPIC_ART[id]?'<div class="topicart">'+TOPIC_ART[id]+'</div>':"";}
function topicEmoji(id){return TOPIC_EMOJI[id]||'📚';}
var DE = {"Peace be upon you (hello)":"Friede sei mit dir (Hallo)","And upon you peace (reply)":"Und auch mit dir sei Friede","Good morning":"Guten Morgen","Good night":"Gute Nacht","Welcome":"Willkommen","Thank you":"Danke","Many thanks":"Vielen Dank","Please":"Bitte","Sorry / excuse me":"Entschuldigung","Yes":"Ja","No":"Nein","Goodbye":"Auf Wiedersehen","How are you?":"Wie geht es dir?","I am well":"Mir geht es gut","See you again":"Bis bald","Congratulations":"Herzlichen Glückwunsch","mother":"die Mutter","father":"der Vater","parents":"die Eltern","brother":"der Bruder","sister":"die Schwester","son":"der Sohn","daughter":"die Tochter","husband":"der Ehemann","wife":"die Ehefrau","friend":"der Freund","child":"das Kind","man":"der Mann","woman":"die Frau","family":"die Familie","grandfather":"der Großvater","grandmother":"die Großmutter","teacher":"der Lehrer","neighbour":"der Nachbar","one":"eins","two":"zwei","three":"drei","four":"vier","five":"fünf","six":"sechs","seven":"sieben","eight":"acht","nine":"neun","ten":"zehn","eleven":"elf","twelve":"zwölf","thirteen":"dreizehn","fourteen":"vierzehn","fifteen":"fünfzehn","sixteen":"sechzehn","seventeen":"siebzehn","eighteen":"achtzehn","nineteen":"neunzehn","twenty":"zwanzig","hundred":"hundert","thousand":"tausend","how many / how much":"wie viele / wie viel","Monday":"der Montag","Tuesday":"der Dienstag","Wednesday":"der Mittwoch","Thursday":"der Donnerstag","Friday":"der Freitag","Saturday":"der Samstag","Sunday":"der Sonntag","today":"heute","tomorrow":"morgen","yesterday":"gestern","now":"jetzt","day":"der Tag","night":"die Nacht","morning":"der Morgen","evening":"der Abend","month":"der Monat","year":"das Jahr","hour":"die Stunde","minute":"die Minute","time":"die Zeit","water":"das Wasser","bread (flatbread)":"das Fladenbrot","rice":"der Reis","meat":"das Fleisch","chicken":"das Hähnchen","fish":"der Fisch","egg":"das Ei","milk":"die Milch","tea":"der Tee","vegetable":"das Gemüse","fruit":"das Obst","apple":"der Apfel","mango":"die Mango","salt":"das Salz","sugar":"der Zucker","oil":"das Öl","food / meal":"das Essen / die Mahlzeit","hungry":"hungrig","thirsty":"durstig","delicious":"lecker","colour":"die Farbe","red":"rot","blue":"blau","green":"grün","yellow":"gelb","black":"schwarz","white":"weiß","brown":"braun","orange":"orange","pink":"rosa","grey":"grau","purple":"lila","head":"der Kopf","hair":"das Haar","eye":"das Auge","ear":"das Ohr","nose":"die Nase","mouth":"der Mund","tooth":"der Zahn","hand / arm":"die Hand / der Arm","foot / leg":"der Fuß / das Bein","heart":"das Herz","stomach":"der Bauch","back":"der Rücken","finger":"der Finger","face":"das Gesicht","body":"der Körper","house / home":"das Haus / das Zuhause","door":"die Tür","window":"das Fenster","room":"das Zimmer","kitchen":"die Küche","table":"der Tisch","chair":"der Stuhl","bed":"das Bett","key":"der Schlüssel","book":"das Buch","pen":"der Stift","phone":"das Telefon","money":"das Geld","clothes":"die Kleidung","shoes":"die Schuhe","light":"das Licht","city":"die Stadt","village":"das Dorf","road / street":"die Straße / die Straße","station":"der Bahnhof","airport":"der Flughafen","train":"der Zug","bus":"der Bus","car":"das Auto","ticket":"die Fahrkarte","left":"links","right":"rechts","straight ahead":"geradeaus","near":"nah","far":"weit","here":"hier","there":"dort","market":"der Markt","hotel":"das Hotel","to go":"gehen","to come":"kommen","to eat":"essen","to drink":"trinken","to do / to make":"tun / machen","to see / to look":"sehen / schauen","to say":"sagen","to listen / to hear":"zuhören / hören","to read / to study":"lesen / lernen","to write":"schreiben","to sleep":"schlafen","to sit":"sitzen","to buy":"kaufen","to give":"geben","to take":"nehmen","to understand":"verstehen","to work":"arbeiten","to learn":"lernen","to speak":"sprechen","to want / to need":"wollen / brauchen","big":"groß","small":"klein","good":"gut","bad":"schlecht","new":"neu","old":"alt","hot":"heiß","cold":"kalt","easy":"einfach","difficult":"schwierig","beautiful":"schön","expensive":"teuer","cheap":"billig","fast":"schnell","slow":"langsam","a lot / very":"viel / sehr","a little":"ein bisschen","true":"wahr","sun":"die Sonne","moon":"der Mond","star":"der Stern","sky":"der Himmel","rain":"der Regen","wind / air":"der Wind / die Luft","cloud":"die Wolke","tree":"der Baum","flower":"die Blume","river":"der Fluss","mountain":"der Berg","sea":"das Meer","ground / land":"der Boden / das Land","fire":"das Feuer","snow / ice":"der Schnee / das Eis","weather / season":"das Wetter / die Jahreszeit","dog":"der Hund","cat":"die Katze","cow":"die Kuh","horse":"das Pferd","goat":"die Ziege","sheep":"das Schaf","donkey":"der Esel","hen":"das Huhn","bird":"der Vogel","lion":"der Löwe","elephant":"der Elefant","monkey":"der Affe","rabbit":"das Kaninchen","mouse":"die Maus","snake":"die Schlange","school":"die Schule","student":"der Schüler","notebook":"das Heft","pencil":"der Bleistift","paper":"das Papier","school bag":"die Schultasche","lesson":"die Lektion","question":"die Frage","answer":"die Antwort","word":"das Wort","language":"die Sprache","happy":"glücklich","sad":"traurig","angry / upset":"wütend / verärgert","afraid":"ängstlich","tired":"müde","surprised":"überrascht","bored":"gelangweilt","love":"die Liebe","to laugh":"lachen","to cry":"weinen","to play":"spielen","game":"das Spiel","toy":"das Spielzeug","ball":"der Ball","kite":"der Drachen","cricket":"das Cricket","football":"der Fußball","swimming":"das Schwimmen","park":"der Park","to run":"rennen","to jump":"springen","to win":"gewinnen","to lose":"verlieren","My name is …":"Ich heiße …","What is your name?":"Wie heißt du?","I am from Germany":"Ich komme aus Deutschland","Where are you from?":"Woher kommst du?","Pleased to meet you":"Schön, dich kennenzulernen","I am learning Urdu":"Ich lerne Urdu","I do not speak Urdu well":"Ich spreche nicht gut Urdu","Do you speak English?":"Sprichst du Englisch?","I do not understand":"Ich verstehe nicht","Please say that again":"Sag das bitte noch einmal","Please speak slowly":"Sprich bitte langsam","What does this mean?":"Was bedeutet das?","How much is this?":"Was kostet das?","That is too expensive":"Das ist zu teuer","I would like this":"Das möchte ich","Where is the bathroom?":"Wo ist die Toilette?","Where is the station?":"Wo ist der Bahnhof?","Please help me":"Bitte hilf mir","I am lost":"Ich habe mich verlaufen","Water, please":"Wasser, bitte","The bill, please":"Die Rechnung, bitte","What time is it?":"Wie spät ist es?","Is it far?":"Ist es weit?","Take me here, please":"Bring mich bitte hierhin","What do you do?":"Was machst du beruflich?","I work at a company":"Ich arbeite in einer Firma","The weather is lovely today":"Das Wetter ist heute schön","I like this very much":"Das gefällt mir sehr","No problem":"Kein Problem","Really?":"Wirklich?","Of course":"Natürlich","Let’s go":"Los geht's","One moment":"Einen Moment","I am tired":"Ich bin müde","Best wishes":"Alles Gute","Take care":"Pass auf dich auf"};
function gloss(w){return (S.lang==="de"&&DE[w.en])?DE[w.en]:w.en;}
var UI = {"Home":"Start","Learn":"Lernen","Cards":"Karten","Quiz":"Quiz","Script":"Schrift","Today":"Heute","Goal met":"Ziel erreicht","Keep going":"Weiter so","Ready when you are":"Bereit, wenn du es bist","Words known":"Bekannte Wörter","Overall mastery":"Gesamtfortschritt","Word of the day":"Wort des Tages","Your topics":"Deine Themen","Play a game":"Spiel ein Spiel","🎮 Memory Match — match the words":"🎮 Memory — finde die Paare","Pronunciation":"Aussprache","Start a session":"Sitzung starten","Nothing is due — new words are queued up.":"Nichts fällig — neue Wörter stehen bereit.","Progress is saved on this device only.":"Der Fortschritt wird nur auf diesem Gerät gespeichert.","Ready — built-in offline audio ✓ Works on every device, including iPhone & iPad. No internet needed.":"Bereit — eingebautes Offline-Audio ✓ Funktioniert auf jedem Gerät, auch iPhone & iPad. Kein Internet nötig.","Slow speed":"Langsam","Slow speed · on":"Langsam · an","Voice (optional)":"Stimme (optional)","Built-in audio (recommended)":"Eingebautes Audio (empfohlen)","Every word has built-in audio that plays offline on any device. If your device has its own Urdu voice you can pick it above.":"Jedes Wort hat eingebautes Audio, das offline auf jedem Gerät abspielt. Hat dein Gerät eine eigene Urdu-Stimme, kannst du sie oben wählen.","Vocabulary":"Wortschatz","Phrases":"Sätze","Grammar":"Grammatik","Practise these":"Üben","Quiz me":"Quiz starten","← All topics":"← Alle Themen","Mastery":"Fortschritt","Word order, gender, postpositions, politeness":"Satzstellung, Geschlecht, Nachwörter, Höflichkeit","Flashcards":"Karteikarten","Or drill one topic":"Oder ein Thema üben","tap to reveal":"zum Umdrehen tippen","Reveal":"Umdrehen","Again":"Nochmal","Good":"Gut","Easy":"Leicht","Another session":"Noch eine Runde","Back to home":"Zurück zum Start","End":"Ende","Hear it":"Anhören","Cards you find hard come back sooner; cards you know drift out to 35 days.":"Schwere Karten kommen schneller zurück; bekannte Karten erst nach bis zu 35 Tagen.","Ten multiple‑choice questions, mixed in both directions.":"Zehn Multiple-Choice-Fragen, in beide Richtungen gemischt.","Mixed quiz — everything":"Gemischtes Quiz — alles","By topic":"Nach Thema","not attempted":"noch nicht versucht","Which is the Urdu?":"Welches ist Urdu?","What does this mean?":"Was bedeutet das?","Result":"Ergebnis","correct":"richtig","no":"nein","Try again":"Nochmal versuchen","Pick another topic":"Anderes Thema wählen","Next":"Weiter","Correct! 🎉":"Richtig! 🎉","Shabash! 🌟 شاباش":"Bravo! 🌟 شاباش","Well done! 👏":"Gut gemacht! 👏","Yes! ✅":"Ja! ✅","Great job! 🙌":"Super! 🙌","Perfect! ✨":"Perfekt! ✨","Almost! 💪 The answer is:":"Fast! 💪 Die Antwort ist:","Good try! 🙂 It is:":"Guter Versuch! 🙂 Es ist:","Not quite 🤔 The word is:":"Nicht ganz 🤔 Das Wort ist:","Keep going! 🌱 It is:":"Weiter so! 🌱 Es ist:","Perfect! 🎉":"Perfekt! 🎉","Great job! 🌟":"Super! 🌟","Well done! 👍":"Gut gemacht! 👍","Keep practising! 💪":"Weiter üben! 💪","You matched them all! 🎉":"Alle Paare gefunden! 🎉","The alphabet":"Das Alphabet","How it joins":"Wie es verbindet","Note":"Hinweis","Words using it":"Wörter damit","← Previous":"← Zurück","Next →":"Weiter →","Reading tip":"Lesetipp","🔊 Hear the letter":"🔊 Buchstabe anhören","← The alphabet":"← Das Alphabet","sounds like":"klingt wie","Memory Match":"Memory","Mixed — random words":"Gemischt — zufällige Wörter","Or pick a topic":"Oder ein Thema wählen","Play again":"Nochmal spielen","Flip two cards and match each Urdu word to its English meaning. Tap a card to hear it!":"Dreh zwei Karten um und finde zu jedem Urdu-Wort die Bedeutung. Tippe eine Karte an, um sie zu hören!","Greetings & Courtesy":"Begrüßung & Höflichkeit","People & Family":"Menschen & Familie","Numbers":"Zahlen","Numbers 1–100":"Zahlen 1–100","Days & Time":"Tage & Zeit","Food & Drink":"Essen & Trinken","Colours":"Farben","The Body":"Der Körper","Home & Things":"Zuhause & Dinge","Travel & Directions":"Reisen & Wege","Everyday Verbs":"Alltagsverben","Describing Things":"Dinge beschreiben","Weather & Nature":"Wetter & Natur","Animals":"Tiere","At School":"In der Schule","Feelings":"Gefühle","Play & Sports":"Spiel & Sport","Introducing Yourself":"Sich vorstellen","Out & About":"Unterwegs","Small Talk":"Smalltalk","The first fifteen minutes of any conversation.":"Die ersten fünfzehn Minuten eines jeden Gesprächs.","Who everyone is at the dinner table.":"Wer alle am Esstisch sind.","One to twenty, plus hundred and thousand.":"Eins bis zwanzig, dazu hundert und tausend.","Every number from one to a hundred. Each has its own name — there is no shortcut, so practise a few at a time.":"Jede Zahl von eins bis hundert. Jede hat ihren eigenen Namen — es gibt keine Abkürzung, also übe immer nur ein paar auf einmal.","The week runs Monday to Sunday — and کل means both yesterday and tomorrow.":"Die Woche geht von Montag bis Sonntag — und کل bedeutet sowohl gestern als auch morgen.","Enough to order, refuse and compliment a meal.":"Genug, um ein Essen zu bestellen, abzulehnen und zu loben.","Several are borrowed straight from Persian.":"Einige sind direkt aus dem Persischen entlehnt.","Head to foot — useful at the doctor and in idioms.":"Von Kopf bis Fuß — nützlich beim Arzt und in Redewendungen.","The objects within arm’s reach.":"Die Dinge in Reichweite.","Getting from the airport to the right street.":"Vom Flughafen bis zur richtigen Straße finden.","Dictionary forms all end in -نا -na.":"Die Grundformen enden alle auf -نا -na.","Mostly opposites, mostly in pairs.":"Meist Gegensätze, meist in Paaren.","The vocabulary of Urdu poetry, as it happens.":"Der Wortschatz der Urdu-Poesie, ganz nebenbei.","Pets, farm animals and a few from the jungle.":"Haustiere, Bauernhoftiere und ein paar aus dem Dschungel.","Everything in the classroom and the school bag.":"Alles im Klassenzimmer und in der Schultasche.","How you feel today — good for talking about the day.":"Wie du dich heute fühlst — gut, um über den Tag zu sprechen.","Games, toys and things to do outside.":"Spiele, Spielzeug und Dinge, die man draußen machen kann.","Name, origin, and admitting you are still learning.":"Name, Herkunft und zugeben, dass du noch lernst.","Shops, taxis, and finding the bathroom.":"Geschäfte, Taxis und die Toilette finden.","The filler that keeps a conversation alive.":"Das Füllwort, das ein Gespräch am Leben hält.","The verb comes last":"Das Verb kommt zuletzt","Pronouns and three levels of “you”":"Pronomen und drei Stufen von „du“","“To be” — hona in the present":"„Sein“ — hona in der Gegenwart","Every noun has a gender":"Jedes Substantiv hat ein Geschlecht","Postpositions, not prepositions":"Postpositionen, keine Präpositionen","The verb agrees with you":"Das Verb passt sich dir an","Saying no":"Nein sagen","Asking a question":"Eine Frage stellen","Polite requests":"Höfliche Bitten","Reading the script":"Die Schrift lesen","Urdu builds a sentence subject → object → verb. English “I eat bread” is literally “I bread eat-am”. Once you expect the verb at the end, long sentences stop being frightening.":"Urdu bildet einen Satz Subjekt → Objekt → Verb. Das englische „I eat bread“ heißt wörtlich „I bread eat-am“. Sobald du das Verb am Ende erwartest, sind lange Sätze nicht mehr beängstigend.","میں main (I), ہم ham (we), تُو too (intimate, rare), تم tum (familiar), آپ aap (polite), یہ yeh (this / he / she near), وہ woh (that / he / she away). As a learner, use آپ with everyone until someone invites you to do otherwise.":"میں main (ich), ہم ham (wir), تُو too (vertraut, selten), تم tum (familiär), آپ aap (höflich), یہ yeh (dies / er / sie nah), وہ woh (jenes / er / sie fern). Als Lernender benutze آپ bei allen, bis dich jemand einlädt, es anders zu machen.","میں … ہوں hoon · تم … ہو ho · یہ / وہ … ہے hai · ہم / آپ / وہ (plural) … ہیں hain. This little verb closes most beginner sentences.":"میں … ہوں hoon · تم … ہو ho · یہ / وہ … ہے hai · ہم / آپ / وہ (Plural) … ہیں hain. Dieses kleine Verb schließt die meisten Anfängersätze ab.","Nouns are masculine or feminine, and adjectives ending in -ا -a shift to -ی -i for feminine nouns. Adjectives that do not end in -a (خوبصورت, مشکل) never change.":"Substantive sind männlich oder weiblich, und Adjektive, die auf -ا -a enden, wechseln bei weiblichen Substantiven zu -ی -i. Adjektive, die nicht auf -a enden (خوبصورت, مشکل), ändern sich nie.","Urdu puts its little words after the noun: میں men (in), پر par (on), سے se (from / with), کو ko (to), کے ساتھ ke saath (together with), کے لیے ke liye (for).":"Urdu setzt seine kleinen Wörter hinter das Substantiv: میں men (in), پر par (auf), سے se (von / mit), کو ko (zu), کے ساتھ ke saath (zusammen mit), کے لیے ke liye (für).","In the present habitual the verb stem takes -تا -ta for a masculine speaker and -تی -ti for a feminine one, then ہوں / ہے / ہیں follows. So the same sentence differs depending on who says it.":"Im Präsens (Gewohnheitsform) nimmt der Verbstamm -تا -ta bei einem männlichen Sprecher und -تی -ti bei einer weiblichen an, dann folgt ہوں / ہے / ہیں. So unterscheidet sich derselbe Satz je nachdem, wer ihn sagt.","نہیں naheen goes directly before the verb, and in the present tense the ہے / ہیں is often dropped after it.":"نہیں naheen steht direkt vor dem Verb, und im Präsens wird das ہے / ہیں danach oft weggelassen.","For yes/no questions put کیا kya at the front — it is a spoken question mark. Otherwise use a question word in the middle: کون kaun (who), کیا kya (what), کہاں kahaan (where), کب kab (when), کیوں kyon (why), کیسے kaise (how), کتنا kitna (how much).":"Für Ja/Nein-Fragen setze کیا kya an den Anfang — es ist ein gesprochenes Fragezeichen. Sonst benutze ein Fragewort in der Mitte: کون kaun (wer), کیا kya (was), کہاں kahaan (wo), کب kab (wann), کیوں kyon (warum), کیسے kaise (wie), کتنا kitna (wie viel).","The -یے -iye ending turns a verb into a courteous request: کہنا → کہیے, بولنا → بولیے, دینا → دیجیے. With friends the familiar form ends in -و -o: کرو karo, بولو bolo.":"Die Endung -یے -iye macht aus einem Verb eine höfliche Bitte: کہنا → کہیے, بولنا → بولیے, دینا → دیجیے. Bei Freunden endet die familiäre Form auf -و -o: کرو karo, بولو bolo.","Urdu runs right to left in the flowing nastaliq style, where each word slopes down toward the left. Short vowels are usually not written — you supply them from knowing the word, exactly as you do with an abbreviation in English. Letters change shape depending on whether they start, sit inside, or end a word; the Script tab shows all four forms of each letter.":"Urdu verläuft von rechts nach links im fließenden Nastaliq-Stil, bei dem jedes Wort nach links unten abfällt. Kurze Vokale werden meist nicht geschrieben — du ergänzt sie aus deinem Wissen über das Wort, genau wie bei einer Abkürzung im Deutschen. Buchstaben ändern ihre Form, je nachdem, ob sie am Anfang, in der Mitte oder am Ende eines Wortes stehen; der Reiter „Schrift“ zeigt alle vier Formen jedes Buchstabens.","I eat bread":"Ich esse Brot","She learns Urdu":"Sie lernt Urdu","Where are you going?":"Wohin gehst du?","We are going home":"Wir gehen nach Hause","I am a teacher":"Ich bin Lehrer","This is my book":"Das ist mein Buch","a good boy":"ein braver Junge","a good girl":"ein braves Mädchen","in the house":"im Haus","with a friend":"mit einem Freund","I work (man speaking)":"Ich arbeite (männlich gesprochen)","I work (woman speaking)":"Ich arbeite (weiblich gesprochen)","I do not go":"Ich gehe nicht","This is not difficult":"Das ist nicht schwer","Are you well?":"Geht es dir gut?","What is this?":"Was ist das?","Listen a moment, please":"Hör bitte einen Moment zu","Please come in":"Komm bitte herein","Urdu":"Urdu","light":"Licht","The standard greeting.":"Die übliche Begrüßung.","The set reply to the greeting.":"Die feste Antwort auf die Begrüßung.","ji adds politeness; haan alone is casual.":"ji macht es höflicher; haan allein ist lässig.","Literally “God be your protector”.":"Wörtlich „Gott sei dein Beschützer“.","The same word also means “week”.":"Dasselbe Wort bedeutet auch „Woche“.","Context decides: kal is tomorrow *and* yesterday.":"Der Zusammenhang entscheidet: kal ist morgen *und* gestern.","Same word as tomorrow — the verb tense tells you which.":"Dasselbe Wort wie morgen — die Zeitform des Verbs verrät dir, welches gemeint ist.","The same word means “Chinese”.":"Dasselbe Wort bedeutet „Chinesisch“.","Also the verb “to eat”.":"Auch das Verb „essen“.","From گلاب gulaab, “rose”.":"Von گلاب gulaab, „Rose“.","Carries the sense of “mind, feeling” too.":"Trägt auch die Bedeutung „Geist, Gefühl“.","A bright, poetic word.":"Ein helles, poetisches Wort.","Literally “air stand”.":"Wörtlich „Luftstand“.","The same word is used for “tiger” in everyday speech.":"Dasselbe Wort wird in der Alltagssprache für „Tiger“ verwendet.","Also means “tongue”.":"Bedeutet auch „Zunge“.","A girl says ڈری ہوئی dari hui.":"Ein Mädchen sagt ڈری ہوئی dari hui.","A woman says سیکھ رہی ہوں seekh rahi hoon.":"Eine Frau sagt سیکھ رہی ہوں seekh rahi hoon.","Carries a long a; آ with madda starts words.":"Trägt ein langes a; آ mit madda steht am Wortanfang.","Added for Indic sounds Arabic lacks.":"Hinzugefügt für indische Laute, die es im Arabischen nicht gibt.","Soft, dental — tongue on the teeth.":"Weich, dental — Zunge an den Zähnen.","Retroflex — tongue curled back. The small ط above marks it.":"Retroflex — Zunge nach hinten gebogen. Das kleine ط darüber kennzeichnet ihn.","Like the ch in German “Bach”.":"Wie das ch in „Bach“.","Never joins to the left.":"Verbindet sich nie nach links.","Retroflex d.":"Retroflexes d.","A flapped retroflex — no English equivalent.":"Ein geschlagener Retroflex — kein englisches Äquivalent.","Rare; the s in “measure”.":"Selten; wie das s in „measure“.","In Urdu it mostly carries the vowel beside it.":"Im Urdu trägt es meist den Vokal daneben.","A throaty, French-style r.":"Ein kehliges r wie im Französischen.","A k made far back in the throat.":"Ein k, das weit hinten im Rachen gebildet wird.","Nasalises the vowel before it; only at word end.":"Nasaliert den Vokal davor; nur am Wortende.","Also spells the final -a of words like کمرہ kamra.":"Schreibt auch das End-a von Wörtern wie کمرہ kamra.","Pairs with another letter: ک + ھ = کھ kh.":"Verbindet sich mit einem anderen Buchstaben: ک + ھ = کھ kh.","Separates two vowels, as in کوئی koi.":"Trennt zwei Vokale, wie in کوئی koi.","Word-final only, as in ہے hai.":"Nur am Wortende, wie in ہے hai.","Grammar notes":"Grammatik-Notizen","Father's father; mother's father is نانا naana.":"Der Vater des Vaters; der Vater der Mutter ist نانا naana.","Father's mother; mother's mother is نانی naani.":"Die Mutter des Vaters; die Mutter der Mutter ist نانی naani.","Voice":"Stimme","Use my device’s voice":"Stimme meines Geräts","Using your device’s own voice ✓":"Stimme deines Geräts wird verwendet ✓","Every word has built-in audio that plays offline on any device. You can also choose your device’s own voice above (uses its text-to-speech).":"Jedes Wort hat eingebautes Audio, das offline auf jedem Gerät funktioniert. Du kannst oben auch die Stimme deines Geräts wählen (nutzt dessen Text-to-Speech)."};
function t(s){return (S.lang==="de"&&UI[s])?UI[s]:s;}
function translateDom(root){try{var wk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false),n,a=[];while(n=wk.nextNode())a.push(n);a.forEach(function(n){var v=n.nodeValue,k=v.trim();if(k&&UI[k])n.nodeValue=v.replace(k,UI[k]);else if(k.indexOf('Urdu numeral:')===0)n.nodeValue=v.replace('Urdu numeral:','Urdu-Ziffer:');});}catch(e){}}
function topicRow(t,attr){
  var m=mastery(t.id);
  return '<button class="row" '+(attr||'data-topic')+'="'+t.id+'">'+
    '<span class="temoji" aria-hidden="true">'+topicEmoji(t.id)+'</span>'+
    '<div class="grow"><div class="name">'+esc(t.name)+'</div>'+
    '<div class="sub">'+t.items.length+' '+(S.lang==='de'?(t.kind==='phrase'?'Sätze':'Wörter'):(t.kind==='phrase'?'phrases':'words'))+'</div>'+
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
     '<button class="row card" data-grammar="1"><div class="grow"><div class="name">'+GRAMMAR.length+' '+(S.lang==='de'?'kurze Notizen':'short notes')+'</div>'+
     '<div class="sub">Word order, gender, postpositions, politeness</div></div><span class="arrow">→</span></button>';
  return h+'</div>';
}
function viewTopic(id){
  var t=topicById(id);if(!t)return viewLearn();
  var m=mastery(id);
  var h='<div class="stack"><button class="back-link" data-go="learn">← All topics</button>';
  h+=topicArt(id);
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
       '<div class="en">'+esc(gloss(w))+'</div>'+
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
       '<div><div class="eyebrow">'+(S.lang==='de'?'Hinweis ':'Note ')+(i+1)+'</div><h3 style="font-size:1.05rem;margin-top:3px">'+esc(g.title)+'</h3></div>'+
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
      '<p class="muted" style="margin:0 2px">'+
      (S.lang==='de'
        ? 'Schwere Karten kommen schneller zurück; bekannte Karten erst nach bis zu 35 Tagen. '+(d>0?('<b>'+d+'</b> '+(d===1?'ist':'sind')+' jetzt fällig.'):'Nichts fällig — eine Sitzung bringt neue Wörter.')
        : 'Cards you find hard come back sooner; cards you know drift out to 35 days. '+(d>0?'<b>'+d+'</b> are due right now.':'Nothing is due — a session will bring in new words.'))+'</p>'+
      '<button class="btn" data-start="all">'+(S.lang==='de'?('Sitzung mit '+GOAL+' starten'):('Start a session of '+GOAL))+'</button>'+
      '<div class="sec"><h2>Or drill one topic</h2></div><div class="card rowlist">'+
      TOPICS.map(function(t){return topicRow(t,'data-start');}).join('')+'</div></div>';
  }
  if(session.i>=session.q.length){
    var n=session.done;
    return '<div class="stack" style="text-align:center;padding-top:20px">'+
      '<div class="ur" style="font-size:2.4rem;color:var(--gold)">شاباش</div>'+
      '<h2 style="font-size:1.5rem">'+(S.lang==='de'?(n+' '+(n===1?'Karte':'Karten')+' gelernt'):(n+' card'+(n===1?'':'s')+' reviewed'))+'</h2>'+
      '<p class="muted" style="margin:0">'+(S.lang==='de'?('Heute: '+S.todayCount+' von '+GOAL+' · Serie: '+shownStreak()+' Tag'+(shownStreak()===1?'':'e')):('Today: '+S.todayCount+' of '+GOAL+' · Streak: '+shownStreak()+' day'+(shownStreak()===1?'':'s')))+'</p>'+
      '<button class="btn" data-start="'+(session.topic||'all')+'">Another session</button>'+
      '<button class="btn ghost" data-go="home">Back to home</button></div>';
  }
  var w=session.q[session.i];
  var r=S.srs[w.id];
  var reverse=r?(r.box%2===1):false;
  var front=reverse?('<div class="ur">'+esc(w.ur)+'</div>'):('<div class="prompt">'+esc(gloss(w))+'</div>');
  var back=reverse
    ?('<div class="prompt">'+esc(gloss(w))+'</div><div class="tl">'+esc(w.tl)+'</div>')
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
      '<p class="muted" style="margin:0 2px">'+(S.lang==='de'?'Zehn Multiple-Choice-Fragen, in beide Richtungen gemischt.':'Ten multiple-choice questions, mixed in both directions.')+'</p>'+
      '<button class="btn" data-quiz="all">Mixed quiz — everything</button>'+
      '<div class="sec"><h2>By topic</h2></div><div class="card rowlist">';
    TOPICS.forEach(function(t){
      var best=S.quiz[t.id];
      h+='<button class="row" data-quiz="'+t.id+'"><div class="grow"><div class="name">'+esc(t.name)+'</div>'+
         '<div class="sub">'+(best!=null?(S.lang==='de'?'beste ':'best ')+best+'%':(S.lang==='de'?'noch nicht versucht':'not attempted'))+'</div></div><span class="arrow">→</span></button>';
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
      '<p class="muted" style="margin:0">'+quiz.score+(S.lang==='de'?' von ':' of ')+quiz.qs.length+(S.lang==='de'?' richtig':' correct')+
        (quiz.topic?' · '+esc(topicById(quiz.topic).name):' · mixed')+'</p>'+
      '<button class="btn" data-quiz="'+(quiz.topic||'all')+'">Try again</button>'+
      '<button class="btn ghost" data-quizmenu="1">Pick another topic</button></div>';
  }
  var q=quiz.qs[quiz.i],w=q.w;
  var prompt=q.dir==='en2ur'
    ? '<div class="prompt" style="font-family:Newsreader,Georgia,serif;font-size:1.6rem">'+esc(gloss(w))+'</div>'
    : '<div class="ur" style="font-size:2rem">'+esc(w.ur)+'</div>';
  var h='<div class="stack">'+
    '<div class="qhead"><span>'+(quiz.i+1)+' / '+quiz.qs.length+'</span>'+
      '<div class="progressbar" style="flex:1"><i style="width:'+(quiz.i/quiz.qs.length*100).toFixed(0)+'%"></i></div>'+
      '<span>'+quiz.score+' '+(S.lang==='de'?'richtig':'right')+'</span><button class="back-link" data-quizmenu="1">End</button></div>'+
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
      : '<div><div style="font-weight:600">'+esc(gloss(o))+'</div></div>';
    var mark=quiz.picked?(o.id===w.id?'<span class="mark" style="color:var(--jade)">correct</span>':(o.id===quiz.picked?'<span class="mark" style="color:var(--gulnar)">no</span>':'')):'';
    h+='<button class="'+cls+'" data-opt="'+o.id+'"'+(quiz.picked?' disabled':'')+'>'+body+mark+'</button>';
  });
  h+='</div>';
  if(quiz.picked){
    var right=quiz.picked===w.id;
    h+='<div class="fb '+(right?'fb-ok':'fb-no')+'">'+(right?praise():tryAgainMsg())+'</div>';
    h+='<div class="card pad" style="text-align:center"><div class="ur" style="font-size:1.6rem">'+esc(w.ur)+'</div>'+
       '<div class="tl">'+esc(w.tl)+'</div><div class="muted">'+esc(gloss(w))+'</div>'+
       '<div style="margin-top:10px" class="split"><button class="btn ghost slim" data-speak="'+esc(w.ur)+'">Hear it</button>'+
       '<button class="btn slim" data-next="1">Next</button></div></div>';
  }
  return h+'</div>';
}
/* Encouraging feedback lines (varied so it stays fun). */
var PRAISE=['Correct! 🎉','Shabash! 🌟 شاباش','Well done! 👏','Yes! ✅','Great job! 🙌','Perfect! ✨'];
var TRYAGAIN=['Almost! 💪 The answer is:','Good try! 🙂 It is:','Not quite 🤔 The word is:','Keep going! 🌱 It is:'];
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function praise(){return pick(PRAISE);}
function tryAgainMsg(){return pick(TRYAGAIN);}

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
      '<div class="tl" style="font-size:.95rem">sounds like <b>'+esc(L[2])+'</b></div>'+
      '<button class="btn slim" data-speak="'+esc(ch)+'" style="margin-top:12px;width:auto">🔊 Hear the letter</button></div>';
    h+='<div class="sec"><h2>How it joins</h2></div><div class="forms">';
    forms.forEach(function(f){h+='<div class="form"><div class="ur">'+esc(f[1])+'</div><small>'+f[0]+'</small></div>';});
    h+='</div>';
    if(L[3])h+='<div class="card pad"><div class="eyebrow">Note</div><p class="muted" style="margin:6px 0 0">'+esc(L[3])+'</p></div>';
    var ex=WORDS.filter(function(w){return w.ur.indexOf(ch)>=0;}).slice(0,6);
    if(ex.length){
      h+='<div class="sec"><h2>Words using it</h2></div><div class="card">';
      ex.forEach(function(w){
        h+='<div class="entry">'+spkBtn(w.ur)+'<div class="grow"><div class="ur">'+esc(w.ur)+'</div><div class="tl">'+esc(w.tl)+' · '+esc(gloss(w))+'</div></div></div>';
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
    '<p class="muted" style="margin:0 2px">'+(S.lang==='de'
      ? ALPHABET.length+' Buchstaben, von rechts nach links im schrägen Nastaliq-Stil geschrieben. Tippe einen Buchstaben an, um zu sehen, wie er am Anfang, in der Mitte und am Ende eines Wortes seine Form ändert.'
      : ALPHABET.length+' letters, written right to left in the sloping nastaliq hand. Tap any letter to see how it changes shape at the start, middle and end of a word.')+'</p>'+
    '<div class="glyphgrid">';
  ALPHABET.forEach(function(L,i){
    h+='<div class="glyph"><button class="glyphbtn" data-letter="'+i+'"><span class="ur">'+esc(L[0])+'</span><small>'+esc(L[1])+'</small></button>'+
       '<button class="spk spk-sm" data-speak="'+esc(L[0])+'" aria-label="Hear '+esc(L[1])+'"><svg viewBox="0 0 24 24"><path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/></svg></button></div>';
  });
  h+='</div>';
  h+='<div class="card pad"><div class="eyebrow">Reading tip</div><p class="muted" style="margin:6px 0 0">'+
     (S.lang==='de'
       ? 'Kurze Vokale werden meist weggelassen. کتاب wird k-t-a-b geschrieben und als <i>kitaab</i> gelesen — du ergänzt die Vokale aus deinem Wissen über das Wort, so wie du „Dr“ als „Doktor“ liest.'
       : 'Short vowels are normally left out. کتاب is written k-t-a-b and read <i>kitaab</i> — you supply the vowels from knowing the word, the way you read “Dr” as “doctor”.')+
     '</p></div>';
  return h+'</div>';
}

/* ---- Memory Match game ---- */
var game=null, gameLock=false;
function startGame(topicId){
  var pool=topicId?topicWords(topicId):WORDS.filter(function(w){return w.kind==='word';});
  var neat=pool.filter(function(w){return w.en.length<=14;});   /* keep cards tidy */
  if(neat.length>=4)pool=neat;
  var picks=shuffle(pool.slice()).slice(0,Math.min(6,pool.length));
  var cards=[];
  picks.forEach(function(w,i){
    cards.push({pair:i,type:'ur',w:w});
    cards.push({pair:i,type:'en',w:w});
  });
  shuffle(cards);
  game={cards:cards,up:[],matched:{},moves:0,done:0,total:picks.length,topic:topicId||null};
  gameLock=false;
  go('game');
}
function viewGame(){
  if(!game){
    var h='<div class="stack"><div class="sec"><h2 style="font-size:1.35rem">Memory Match</h2><span class="ur">جوڑ ملاؤ</span></div>'+
      '<p class="muted" style="margin:0 2px">Flip two cards and match each Urdu word to its English meaning. Tap a card to hear it!</p>'+
      '<button class="btn" data-play="all">Mixed — random words</button>'+
      '<div class="sec"><h2>Or pick a topic</h2></div><div class="card rowlist">'+
      TOPICS.filter(function(t){return t.kind==='word';}).map(function(t){return topicRow(t,'data-play');}).join('')+'</div></div>';
    return h;
  }
  if(game.done>=game.total){
    var moves=game.moves;
    return '<div class="stack" style="text-align:center;padding-top:20px">'+
      '<div class="ur" style="font-size:2.4rem;color:var(--gold)">شاباش</div>'+
      '<h2 style="font-size:1.5rem">You matched them all! 🎉</h2>'+
      '<p class="muted" style="margin:0">'+(S.lang==='de'?(game.total+' Paare in '+moves+' Zügen'):(game.total+' pairs in '+moves+' moves'))+'</p>'+
      '<button class="btn" data-play="'+(game.topic||'all')+'">Play again</button>'+
      '<button class="btn ghost" data-go="home">Back to home</button></div>';
  }
  var h='<div class="stack">'+
    '<div class="qhead"><span>'+game.done+' / '+game.total+' '+(S.lang==='de'?'Paare':'pairs')+'</span>'+
      '<div class="progressbar grow" style="flex:1"><i style="width:'+(game.done/game.total*100).toFixed(0)+'%"></i></div>'+
      '<span>'+game.moves+' moves</span><button class="back-link" data-gamemenu="1">End</button></div>'+
    '<div class="mgrid">';
  game.cards.forEach(function(c,i){
    var isUp=game.up.indexOf(i)>=0, isDone=game.matched[i];
    var cls='mcard'+(isUp?' up':'')+(isDone?' done':'');
    var face=isDone||isUp
      ? (c.type==='ur'?'<span class="ur">'+esc(c.w.ur)+'</span>':'<span class="men">'+esc(gloss(c.w))+'</span>')
      : '<span class="mback">؟</span>';
    h+='<button class="'+cls+'" data-mcard="'+i+'"'+(isDone?' disabled':'')+'>'+face+'</button>';
  });
  h+='</div></div>';
  return h;
}
function flipCard(i){
  if(!game||gameLock)return;
  if(game.matched[i]||game.up.indexOf(i)>=0)return;
  game.up.push(i);
  if(game.cards[i].type==='ur')speak(game.cards[i].w.ur);   /* hear the word */
  if(game.up.length===2){
    game.moves++;
    var a=game.up[0],b=game.up[1];
    if(game.cards[a].pair===game.cards[b].pair){
      game.matched[a]=game.matched[b]=true;
      game.up=[];game.done++;
      render();
      if(game.done>=game.total)celebrate();
      return;
    }
    gameLock=true;render();                 /* show both, then flip back */
    setTimeout(function(){game.up=[];gameLock=false;render();},900);
    return;
  }
  render();
}

/* ============================ events ============================ */
function onClick(e){
  var t=e.target;
  var el;
  if((el=t.closest('[data-speak]'))){speak(el.dataset.speak);return;}
  if((el=t.closest('[data-slow]'))){S.slow=!S.slow;save();render();if(S.slow)speak('شکریہ');return;}
  if((el=t.closest('[data-lang]'))){S.lang=(S.lang==='de')?'en':'de';save();render();return;}
  if((el=t.closest('[data-go]'))){go(el.dataset.go);return;}
  if((el=t.closest('[data-topic]'))){go('learn','topic',el.dataset.topic);return;}
  if((el=t.closest('[data-grammar]'))){go('learn','grammar');return;}
  if((el=t.closest('[data-letter]'))){go('script','letter',parseInt(el.dataset.letter,10));return;}
  if((el=t.closest('[data-drill]'))){startSession(el.dataset.drill);return;}
  if((el=t.closest('[data-start]'))){startSession(el.dataset.start==='all'?null:el.dataset.start);return;}
  if((el=t.closest('[data-endsession]'))){session=null;render();return;}
  if((el=t.closest('[data-play]'))){startGame(el.dataset.play==='all'?null:el.dataset.play);return;}
  if((el=t.closest('[data-mcard]'))){flipCard(parseInt(el.dataset.mcard,10));return;}
  if((el=t.closest('[data-gamemenu]'))){game=null;render();return;}
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
    render();
    speak(q.w.ur);           /* hear the correct word as feedback */
    return;
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
  var lb=document.getElementById('langBtn');   /* header sits outside #view */
  if(lb)lb.addEventListener('click',function(){S.lang=(S.lang==='de')?'en':'de';save();render();});
  paintTabs();render();
  installPwa();
}
/* Register the service worker in AUTO-UPDATE mode: a new deploy activates
   immediately (skipWaiting + clients.claim), and the page reloads once when
   the new worker takes control — so a normal refresh always shows the latest
   version. The one-time reload is skipped on the very first install. */
function installPwa(){
  if(!('serviceWorker' in navigator))return;
  try{
    var hadController=!!navigator.serviceWorker.controller;
    var reloaded=false;
    navigator.serviceWorker.addEventListener('controllerchange',function(){
      if(reloaded||!hadController)return;   /* don't reload on first-ever install */
      reloaded=true; location.reload();
    });
    navigator.serviceWorker.register('sw.js',{scope:'./'}).then(function(reg){
      try{reg.update();}catch(e){}          /* check for a new version now… */
      document.addEventListener('visibilitychange',function(){
        if(document.visibilityState==='visible'){ try{reg.update();}catch(e){} }  /* …and on refocus */
      });
    }).catch(function(){});
  }catch(e){}
}
if(window.claude&&window.claude.hot&&window.claude.hot.ready)window.claude.hot.ready(boot);
else boot();

