export type ResourceItem = {
  title: string;
  url: string;
  description: string;
  category: 'government' | 'emergency' | 'digital';
};

export const resourcesData: Record<'en' | 'hi' | 'mr', ResourceItem[]> = {
  en: [
    {
      title: 'National Emergency Number',
      url: 'tel:112',
      description: 'Dial 112 for Police, Fire, and Ambulance emergencies.',
      category: 'emergency',
    },
    {
      title: 'Women Helpline',
      url: 'tel:181',
      description: 'Dial 181 for the Women Helpline (domestic violence, abuse, harassment). Available 24/7.',
      category: 'emergency',
    },
    {
      title: 'Child Helpline',
      url: 'tel:1098',
      description: 'Dial 1098 for child protection, abuse, or emergencies. Free, 24/7.',
      category: 'emergency',
    },
    {
      title: 'Consumer Helpline',
      url: 'tel:1800114000',
      description: 'Toll-free helpline 1800-11-4000 for consumer complaints and grievances.',
      category: 'emergency',
    },
    {
      title: 'Cyber Crime Reporting',
      url: 'https://cybercrime.gov.in/',
      description: 'Official Government of India portal to report cyber crimes and online fraud.',
      category: 'government',
    },
    {
      title: 'DigiLocker',
      url: 'https://www.digilocker.gov.in/',
      description: 'Store and access authentic digital documents — Aadhaar, PAN, driving license, marksheets.',
      category: 'digital',
    },
    {
      title: 'UMANG App',
      url: 'https://web.umang.gov.in/',
      description: 'Access 1,200+ government services from one app — Aadhaar, PF, passport, PM-KISAN, and more.',
      category: 'government',
    },
    {
      title: 'MyGov',
      url: 'https://www.mygov.in/',
      description: 'Citizen engagement platform — participate in surveys, access government schemes and updates.',
      category: 'government',
    },
    {
      title: 'UIDAI (Aadhaar)',
      url: 'https://uidai.gov.in/',
      description: 'Download, update, or lock/unlock your Aadhaar. Check Aadhaar update status.',
      category: 'government',
    },
    {
      title: 'IRCTC (Railway Booking)',
      url: 'https://www.irctc.co.in/',
      description: 'Book train tickets, check PNR status, and plan your railway journeys.',
      category: 'digital',
    },
    {
      title: 'Google Maps',
      url: 'https://maps.google.com',
      description: 'Find places, directions, and public transport routes. Works offline too.',
      category: 'digital',
    },
    {
      title: 'BHIM UPI Help',
      url: 'https://www.bhimupi.org.in/',
      description: 'Official portal for UPI help — report transaction issues, learn about UPI safety.',
      category: 'digital',
    },
  ],
  hi: [
    {
      title: 'राष्ट्रीय आपातकालीन नंबर',
      url: 'tel:112',
      description: 'पुलिस, फायर और एम्बुलेंस आपातकाल के लिए 112 डायल करें।',
      category: 'emergency',
    },
    {
      title: 'महिला हेल्पलाइन',
      url: 'tel:181',
      description: 'महिला हेल्पलाइन 181 पर कॉल करें (घरेलू हिंसा, दुर्व्यवहार, उत्पीड़न)। 24/7 उपलब्ध।',
      category: 'emergency',
    },
    {
      title: 'चाइल्ड हेल्पलाइन',
      url: 'tel:1098',
      description: 'बच्चों की सुरक्षा, दुर्व्यवहार या आपातकाल के लिए 1098 डायल करें। मुफ्त, 24/7।',
      category: 'emergency',
    },
    {
      title: 'उपभोक्ता हेल्पलाइन',
      url: 'tel:1800114000',
      description: 'उपभोक्ता शिकायतों और समस्याओं के लिए टोल-फ्री हेल्पलाइन 1800-11-4000।',
      category: 'emergency',
    },
    {
      title: 'साइबर अपराध रिपोर्टिंग',
      url: 'https://cybercrime.gov.in/',
      description: 'साइबर अपराधों और ऑनलाइन धोखाधड़ी की रिपोर्ट करने के लिए भारत सरकार का आधिकारिक पोर्टल।',
      category: 'government',
    },
    {
      title: 'डिजीलॉकर (DigiLocker)',
      url: 'https://www.digilocker.gov.in/',
      description: 'प्रामाणिक डिजिटल दस्तावेज़ संग्रहीत करें और एक्सेस करें — आधार, PAN, ड्राइविंग लाइसेंस, मार्कशीट।',
      category: 'digital',
    },
    {
      title: 'UMANG ऐप',
      url: 'https://web.umang.gov.in/',
      description: 'एक ऐप से 1,200+ सरकारी सेवाएं एक्सेस करें — आधार, PF, पासपोर्ट, PM-KISAN, और बहुत कुछ।',
      category: 'government',
    },
    {
      title: 'MyGov (माई गवर्नमेंट)',
      url: 'https://www.mygov.in/',
      description: 'नागरिक सहभागिता मंच — सर्वेक्षणों में भाग लें, सरकारी योजनाओं और अपडेट तक पहुंचें।',
      category: 'government',
    },
    {
      title: 'UIDAI (आधार)',
      url: 'https://uidai.gov.in/',
      description: 'अपना आधार डाउनलोड, अपडेट या लॉक/अनलॉक करें। आधार अपडेट की स्थिति जांचें।',
      category: 'government',
    },
    {
      title: 'IRCTC (रेलवे बुकिंग)',
      url: 'https://www.irctc.co.in/',
      description: 'ट्रेन टिकट बुक करें, PNR स्थिति जांचें, और अपनी रेलवे यात्रा की योजना बनाएं।',
      category: 'digital',
    },
    {
      title: 'Google मैप्स',
      url: 'https://maps.google.com',
      description: 'स्थान, दिशा-निर्देश और सार्वजनिक परिवहन मार्ग खोजें। ऑफलाइन भी काम करता है।',
      category: 'digital',
    },
    {
      title: 'BHIM UPI सहायता',
      url: 'https://www.bhimupi.org.in/',
      description: 'UPI सहायता के लिए आधिकारिक पोर्टल — लेनदेन समस्याओं की रिपोर्ट करें, UPI सुरक्षा के बारे में जानें।',
      category: 'digital',
    },
  ],
  mr: [
    {
      title: 'राष्ट्रीय आणीबाणी क्रमांक',
      url: 'tel:112',
      description: 'पोलीस, अग्निशमन आणि रुग्णवाहिका आणीबाणीसाठी 112 डायल करा.',
      category: 'emergency',
    },
    {
      title: 'महिला हेल्पलाइन',
      url: 'tel:181',
      description: 'महिला हेल्पलाइन 181 वर कॉल करा (घरगुती हिंसा, अत्याचार, छळ). 24/7 उपलब्ध.',
      category: 'emergency',
    },
    {
      title: 'चाइल्ड हेल्पलाइन',
      url: 'tel:1098',
      description: 'मुलांचे संरक्षण, अत्याचार किंवा आणीबाणीसाठी 1098 डायल करा. मोफत, 24/7.',
      category: 'emergency',
    },
    {
      title: 'ग्राहक हेल्पलाइन',
      url: 'tel:1800114000',
      description: 'ग्राहक तक्रारी आणि समस्यांसाठी टोल-फ्री हेल्पलाइन 1800-11-4000.',
      category: 'emergency',
    },
    {
      title: 'सायबर क्राईम रिपोर्टिंग',
      url: 'https://cybercrime.gov.in/',
      description: 'सायबर गुन्हे आणि ऑनलाइन फसवणुकीची नोंद करण्यासाठी भारत सरकारचे अधिकृत पोर्टल.',
      category: 'government',
    },
    {
      title: 'डिजिलॉकर (DigiLocker)',
      url: 'https://www.digilocker.gov.in/',
      description: 'अधिकृत डिजिटल कागदपत्रे साठवा आणि ॲक्सेस करा — आधार, PAN, ड्रायव्हिंग लायसन्स, मार्कशीट.',
      category: 'digital',
    },
    {
      title: 'UMANG ॲप',
      url: 'https://web.umang.gov.in/',
      description: 'एका ॲपमधून 1,200+ सरकारी सेवा ॲक्सेस करा — आधार, PF, पासपोर्ट, PM-KISAN, आणि बरेच काही.',
      category: 'government',
    },
    {
      title: 'MyGov (माय गव्हर्नमेंट)',
      url: 'https://www.mygov.in/',
      description: 'नागरिक सहभाग व्यासपीठ — सर्वेक्षणांमध्ये भाग घ्या, सरकारी योजना आणि अपडेट्स ॲक्सेस करा.',
      category: 'government',
    },
    {
      title: 'UIDAI (आधार)',
      url: 'https://uidai.gov.in/',
      description: 'तुमचा आधार डाउनलोड, अपडेट किंवा लॉक/अनलॉक करा. आधार अपडेट स्थिती तपासा.',
      category: 'government',
    },
    {
      title: 'IRCTC (रेल्वे बुकिंग)',
      url: 'https://www.irctc.co.in/',
      description: 'ट्रेनचे तिकीट बुक करा, PNR स्थिती तपासा आणि तुमच्या रेल्वे प्रवासाचे नियोजन करा.',
      category: 'digital',
    },
    {
      title: 'Google नकाशे',
      url: 'https://maps.google.com',
      description: 'ठिकाणे, दिशा आणि सार्वजनिक वाहतूक मार्ग शोधा. ऑफलाइनही काम करते.',
      category: 'digital',
    },
    {
      title: 'BHIM UPI मदत',
      url: 'https://www.bhimupi.org.in/',
      description: 'UPI मदतीसाठी अधिकृत पोर्टल — व्यवहार समस्यांची नोंद करा, UPI सुरक्षिततेबद्दल जाणून घ्या.',
      category: 'digital',
    },
  ]
};
