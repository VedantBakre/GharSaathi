export type ScamScenario = {
  id: string;
  type: 'sms' | 'email' | 'whatsapp';
  sender: string;
  message: string;
  isScam: boolean;
  explanation: string;
  redFlags: string[];
};

export type SafetyGuideline = {
  title: string;
  desc: string;
};

export type SafetyData = {
  scenarios: ScamScenario[];
  guidelines: SafetyGuideline[];
  guidelinesTitle: string;
};

export const safetyData: Record<'en' | 'hi' | 'mr', SafetyData> = {
  en: {
    scenarios: [
      {
        id: 'scam1',
        type: 'sms',
        sender: 'VK-REWARD',
        message: 'Congratulations! You have won ₹25,000 in lucky draw. Click here to claim your reward: http://bit.ly/free-money-29',
        isScam: true,
        explanation: 'This is a phishing scam designed to steal your bank details.',
        redFlags: ['Unexpected prize', 'Suspicious short link (bit.ly)', 'Urgency/Excitement']
      },
      {
        id: 'safe1',
        type: 'sms',
        sender: 'VK-HDFCBK',
        message: 'Your a/c XX1234 is credited with ₹5,000 on 22/09/26. Total Bal: ₹12,450.',
        isScam: false,
        explanation: 'This is a standard informational SMS from a bank. It does not ask you to click any links or share information.',
        redFlags: []
      },
      {
        id: 'scam2',
        type: 'whatsapp',
        sender: '+92 345 6789123',
        message: 'Dear Sir, Your electricity power will be disconnected tonight at 9:30 PM because your previous month bill was not updated. Please call our electricity officer immediately.',
        isScam: true,
        explanation: 'This is a common electricity disconnection scam. The scammer wants you to call them so they can trick you into installing a remote access app and stealing your money.',
        redFlags: ['Threat of disconnection', 'Unknown mobile number instead of official sender ID', 'Poor grammar']
      },
      {
        id: 'scam3',
        type: 'sms',
        sender: 'TM-KYCUPD',
        message: 'URGENT: Your SBI account has been blocked due to incomplete KYC. Update your KYC immediately by clicking: http://sbi-kyc-update.xyz/verify',
        isScam: true,
        explanation: 'Banks never send KYC update links via SMS. The domain "sbi-kyc-update.xyz" is not an official SBI website (.xyz is a suspicious domain). Always visit your bank branch or use the official app.',
        redFlags: ['Urgency/panic language ("URGENT", "blocked")', 'Suspicious domain (.xyz)', 'Banks never send KYC links via SMS']
      },
      {
        id: 'scam4',
        type: 'whatsapp',
        sender: '+91 98765 43210',
        message: 'Hello, this is Amazon Customer Support. Your order #AZ-7891 is stuck. To release your parcel, please share the OTP sent to your phone. Ref: AMZ/SUPPORT/2026',
        isScam: true,
        explanation: 'Amazon never contacts customers on WhatsApp asking for OTPs. The reference number is fake. Sharing your OTP gives scammers access to your accounts.',
        redFlags: ['Asking for OTP', 'WhatsApp contact from "Amazon" (not an official channel)', 'Personal phone number instead of verified business account']
      },
      {
        id: 'safe2',
        type: 'sms',
        sender: 'AX-IRCTCW',
        message: 'PNR: 4521876543. Your train 12051 departs from Mumbai CST at 16:30 on 25/09. Coach S4, Berth 32. Have a safe journey! - IRCTC',
        isScam: false,
        explanation: 'This is a genuine IRCTC train booking confirmation. It contains specific booking details, uses official sender ID, and does not ask for any action or personal information.',
        redFlags: []
      },
      {
        id: 'scam5',
        type: 'whatsapp',
        sender: '+91 70001 23456',
        message: 'Dear citizen, Government of India is giving ₹1,500 to every family under PM Digital Yojana. Fill this form to receive money directly in your bank: http://pm-yojana-apply.com/form',
        isScam: true,
        explanation: 'The government never distributes money through WhatsApp links. Official schemes are announced through official portals like mygov.in or pmjdy.gov.in. These fake forms steal your Aadhaar and bank details.',
        redFlags: ['Government scheme via WhatsApp', 'Suspicious domain (not .gov.in)', 'Too good to be true', 'Asking for bank details via form']
      },
      {
        id: 'scam6',
        type: 'sms',
        sender: '+91 88776 55443',
        message: 'Hi, I accidentally sent ₹5,000 to your number via Google Pay. Can you please return it? I really need the money. My UPI: scammer@ybl',
        isScam: true,
        explanation: 'This is a social engineering scam. The person did NOT send you any money. They want you to feel guilty and send them money. Always check your bank/UPI app to verify if any amount was actually received.',
        redFlags: ['No actual transaction in your UPI app', 'Unknown number', 'Emotional pressure ("I really need the money")', 'Asking you to send money to a UPI ID']
      },
      {
        id: 'scam7',
        type: 'whatsapp',
        sender: '+91 99887 76655',
        message: 'Earn ₹5,000-₹10,000 daily by doing simple tasks from home! No investment needed. Join our team now: https://easy-income-daily.com. Limited slots available!',
        isScam: true,
        explanation: 'Work-from-home scams promise easy money but eventually ask for "registration fees" or "security deposits." No legitimate job guarantees daily income of ₹5,000-₹10,000 for "simple tasks."',
        redFlags: ['Unrealistic income promise', 'Urgency ("Limited slots")', 'Suspicious website', '"No investment" claims often lead to asking for money later']
      },
      {
        id: 'safe3',
        type: 'sms',
        sender: 'BP-JIOREL',
        message: 'Dear Customer, your Jio prepaid plan of ₹299 will expire on 28/09/26. Recharge now to enjoy uninterrupted services. Visit jio.com or use MyJio app.',
        isScam: false,
        explanation: 'This is a genuine recharge reminder from Jio. It uses an official sender ID (BP-JIOREL), mentions specific plan details, and directs you to official channels (jio.com, MyJio app).',
        redFlags: []
      }
    ],
    guidelinesTitle: 'Essential Safety Guidelines',
    guidelines: [
      { title: 'Never share OTPs', desc: 'No bank or legitimate service will ever ask for your OTP over a call or message.' },
      { title: 'UPI PIN is for SENDING', desc: 'You never need to enter your UPI PIN to receive money. If asked, it is a scam.' },
      { title: 'Verify unknown callers', desc: 'If someone claims to be from the police or bank and asks for money, hang up and verify independently.' },
      { title: 'Avoid suspicious links', desc: 'Do not click on links promising free gifts, lottery wins, or urgent account blocks.' },
      { title: 'Check website domains', desc: 'Government sites end in .gov.in, bank sites use their official domain. Beware of .xyz, .top, .click domains.' },
      { title: 'No remote access apps', desc: 'Never install AnyDesk, TeamViewer, or QuickSupport when asked by strangers — they can control your phone.' },
    ]
  },
  hi: {
    scenarios: [
      {
        id: 'scam1',
        type: 'sms',
        sender: 'VK-REWARD',
        message: 'बधाई हो! आपने लकी ड्रॉ में ₹25,000 जीते हैं। अपना इनाम पाने के लिए यहाँ क्लिक करें: http://bit.ly/free-money-29',
        isScam: true,
        explanation: 'यह एक फ़िशिंग स्कैम है जिसे आपके बैंक विवरण चुराने के लिए डिज़ाइन किया गया है।',
        redFlags: ['अप्रत्याशित इनाम', 'संदिग्ध छोटा लिंक', 'जल्दबाजी']
      },
      {
        id: 'safe1',
        type: 'sms',
        sender: 'VK-HDFCBK',
        message: 'आपके खाते XX1234 में 22/09/26 को ₹5,000 जमा किए गए हैं। कुल शेष: ₹12,450.',
        isScam: false,
        explanation: 'यह बैंक का एक सामान्य सूचनात्मक SMS है। यह आपसे कोई लिंक क्लिक करने या जानकारी साझा करने के लिए नहीं कहता है।',
        redFlags: []
      },
      {
        id: 'scam2',
        type: 'whatsapp',
        sender: '+92 345 6789123',
        message: 'प्रिय महोदय, आपका बिजली कनेक्शन आज रात 9:30 बजे काट दिया जाएगा क्योंकि आपका पिछला बिल अपडेट नहीं हुआ है। कृपया तुरंत हमारे बिजली अधिकारी को कॉल करें।',
        isScam: true,
        explanation: 'यह एक आम बिजली कटौती घोटाला है। वे चाहते हैं कि आप उन्हें कॉल करें ताकि वे आपको ऐप इंस्टॉल करने और पैसे चुराने का झांसा दे सकें।',
        redFlags: ['बिजली काटने की धमकी', 'आधिकारिक आईडी के बजाय अज्ञात मोबाइल नंबर']
      },
      {
        id: 'scam3',
        type: 'sms',
        sender: 'TM-KYCUPD',
        message: 'तत्काल: अधूरे KYC के कारण आपका SBI खाता ब्लॉक कर दिया गया है। तुरंत अपना KYC अपडेट करें: http://sbi-kyc-update.xyz/verify',
        isScam: true,
        explanation: 'बैंक कभी भी SMS के माध्यम से KYC अपडेट लिंक नहीं भेजते। "sbi-kyc-update.xyz" एक आधिकारिक SBI वेबसाइट नहीं है। हमेशा अपनी बैंक शाखा पर जाएं या आधिकारिक ऐप का उपयोग करें।',
        redFlags: ['तत्काल/घबराहट की भाषा ("तत्काल", "ब्लॉक")', 'संदिग्ध डोमेन (.xyz)', 'बैंक कभी SMS से KYC लिंक नहीं भेजते']
      },
      {
        id: 'scam4',
        type: 'whatsapp',
        sender: '+91 98765 43210',
        message: 'नमस्ते, यह Amazon कस्टमर सपोर्ट है। आपका ऑर्डर #AZ-7891 अटका हुआ है। अपना पार्सल प्राप्त करने के लिए कृपया अपने फोन पर आया OTP शेयर करें।',
        isScam: true,
        explanation: 'Amazon कभी भी WhatsApp पर ग्राहकों से OTP नहीं मांगता। OTP शेयर करने से स्कैमर्स को आपके खातों तक पहुंच मिल जाती है।',
        redFlags: ['OTP मांगना', '"Amazon" से WhatsApp संपर्क (आधिकारिक चैनल नहीं)', 'व्यक्तिगत फोन नंबर']
      },
      {
        id: 'safe2',
        type: 'sms',
        sender: 'AX-IRCTCW',
        message: 'PNR: 4521876543. आपकी ट्रेन 12051 25/09 को मुंबई CST से 16:30 बजे रवाना होगी। कोच S4, बर्थ 32। शुभ यात्रा! - IRCTC',
        isScam: false,
        explanation: 'यह IRCTC से एक वास्तविक ट्रेन बुकिंग पुष्टि है। इसमें विशिष्ट बुकिंग विवरण हैं, आधिकारिक सेंडर ID है, और कोई कार्रवाई नहीं मांगता।',
        redFlags: []
      },
      {
        id: 'scam5',
        type: 'whatsapp',
        sender: '+91 70001 23456',
        message: 'प्रिय नागरिक, भारत सरकार PM डिजिटल योजना के तहत हर परिवार को ₹1,500 दे रही है। अपने बैंक में सीधे पैसे पाने के लिए यह फॉर्म भरें: http://pm-yojana-apply.com/form',
        isScam: true,
        explanation: 'सरकार कभी WhatsApp लिंक के माध्यम से पैसे नहीं बांटती। आधिकारिक योजनाएं mygov.in जैसे आधिकारिक पोर्टल पर होती हैं। ये नकली फॉर्म आपके आधार और बैंक विवरण चुराते हैं।',
        redFlags: ['WhatsApp के माध्यम से सरकारी योजना', 'संदिग्ध डोमेन (.gov.in नहीं)', 'बहुत अच्छा लग रहा है', 'फॉर्म से बैंक विवरण मांगना']
      },
      {
        id: 'scam6',
        type: 'sms',
        sender: '+91 88776 55443',
        message: 'हाय, मैंने गलती से Google Pay से आपके नंबर पर ₹5,000 भेज दिए। क्या आप कृपया वापस कर सकते हैं? मुझे सच में पैसों की जरूरत है। मेरा UPI: scammer@ybl',
        isScam: true,
        explanation: 'यह एक सोशल इंजीनियरिंग स्कैम है। उस व्यक्ति ने आपको कोई पैसे नहीं भेजे। वे चाहते हैं कि आप दोषी महसूस करें और पैसे भेजें। हमेशा अपने बैंक/UPI ऐप में जांचें कि कोई राशि वास्तव में प्राप्त हुई या नहीं।',
        redFlags: ['आपके UPI ऐप में कोई वास्तविक लेनदेन नहीं', 'अज्ञात नंबर', 'भावनात्मक दबाव', 'UPI ID पर पैसे भेजने को कहना']
      },
      {
        id: 'scam7',
        type: 'whatsapp',
        sender: '+91 99887 76655',
        message: 'घर बैठे सरल काम करके रोजाना ₹5,000-₹10,000 कमाएं! कोई निवेश नहीं। अभी हमारी टीम से जुड़ें: https://easy-income-daily.com. सीमित स्लॉट उपलब्ध!',
        isScam: true,
        explanation: 'वर्क-फ्रॉम-होम स्कैम आसान पैसे का वादा करते हैं लेकिन बाद में "रजिस्ट्रेशन फीस" मांगते हैं। कोई भी वैध नौकरी "सरल कार्यों" के लिए ₹5,000-₹10,000 दैनिक आय की गारंटी नहीं देती।',
        redFlags: ['अवास्तविक आय का वादा', 'जल्दबाजी ("सीमित स्लॉट")', 'संदिग्ध वेबसाइट', '"कोई निवेश नहीं" दावे बाद में पैसे मांगने लगते हैं']
      },
      {
        id: 'safe3',
        type: 'sms',
        sender: 'BP-JIOREL',
        message: 'प्रिय ग्राहक, आपका Jio प्रीपेड प्लान ₹299 28/09/26 को समाप्त हो जाएगा। निर्बाध सेवाओं का आनंद लेने के लिए अभी रिचार्ज करें। jio.com या MyJio ऐप पर जाएं।',
        isScam: false,
        explanation: 'यह Jio से एक वास्तविक रिचार्ज रिमाइंडर है। यह आधिकारिक सेंडर ID (BP-JIOREL) का उपयोग करता है और आपको आधिकारिक चैनलों (jio.com, MyJio ऐप) पर भेजता है।',
        redFlags: []
      }
    ],
    guidelinesTitle: 'आवश्यक सुरक्षा दिशानिर्देश',
    guidelines: [
      { title: 'OTP कभी साझा न करें', desc: 'कोई भी बैंक या वैध सेवा कभी भी कॉल या मैसेज पर आपका OTP नहीं मांगेगी।' },
      { title: 'UPI पिन पैसे भेजने के लिए है', desc: 'आपको पैसे प्राप्त करने के लिए कभी भी अपना UPI पिन डालने की आवश्यकता नहीं है। यदि पूछा जाए, तो यह एक घोटाला है।' },
      { title: 'अज्ञात कॉलर्स की पुष्टि करें', desc: 'यदि कोई पुलिस या बैंक से होने का दावा करता है और पैसे मांगता है, तो कॉल काट दें और स्वतंत्र रूप से पुष्टि करें।' },
      { title: 'संदिग्ध लिंक से बचें', desc: 'मुफ्त उपहार, लॉटरी जीतने या तत्काल खाता ब्लॉक होने का वादा करने वाले लिंक पर क्लिक न करें।' },
      { title: 'वेबसाइट डोमेन जांचें', desc: 'सरकारी साइटें .gov.in पर समाप्त होती हैं, बैंक साइटें अपने आधिकारिक डोमेन का उपयोग करती हैं। .xyz, .top, .click डोमेन से सावधान रहें।' },
      { title: 'रिमोट एक्सेस ऐप्स नहीं', desc: 'अजनबियों के कहने पर कभी भी AnyDesk, TeamViewer, या QuickSupport इंस्टॉल न करें — वे आपके फोन को नियंत्रित कर सकते हैं।' },
    ]
  },
  mr: {
    scenarios: [
      {
        id: 'scam1',
        type: 'sms',
        sender: 'VK-REWARD',
        message: 'अभिनंदन! तुम्ही लकी ड्रॉ मध्ये ₹25,000 जिंकले आहेत. तुमचे बक्षीस मिळवण्यासाठी येथे क्लिक करा: http://bit.ly/free-money-29',
        isScam: true,
        explanation: 'तुमचे बँक तपशील चोरण्यासाठी डिझाइन केलेला हा फिशिंग घोटाळा आहे.',
        redFlags: ['अपेक्षित नसलेले बक्षीस', 'संशयास्पद लिंक', 'घाई']
      },
      {
        id: 'safe1',
        type: 'sms',
        sender: 'VK-HDFCBK',
        message: 'तुमच्या खात्यात XX1234 मध्ये 22/09/26 रोजी ₹5,000 जमा झाले आहेत. एकूण शिल्लक: ₹12,450.',
        isScam: false,
        explanation: 'हा बँकेचा एक सामान्य माहितीपर SMS आहे. हे तुम्हाला कोणतीही लिंक क्लिक करण्यास सांगत नाही.',
        redFlags: []
      },
      {
        id: 'scam2',
        type: 'whatsapp',
        sender: '+92 345 6789123',
        message: 'प्रिय महोदय, तुमचे मागील महिन्याचे बिल अपडेट न झाल्यामुळे आज रात्री 9:30 वाजता तुमची वीज कापली जाईल. कृपया त्वरित आमच्या वीज अधिकाऱ्याला कॉल करा.',
        isScam: true,
        explanation: 'हा एक सामान्य वीज कपात घोटाळा आहे. ते तुम्हाला कॉल करायला लावतात जेणेकरून ते तुमचे पैसे चोरू शकतील.',
        redFlags: ['वीज कापण्याची धमकी', 'अज्ञात मोबाईल नंबर']
      },
      {
        id: 'scam3',
        type: 'sms',
        sender: 'TM-KYCUPD',
        message: 'तातडी: अपूर्ण KYC मुळे तुमचे SBI खाते ब्लॉक करण्यात आले आहे. लगेच तुमचे KYC अपडेट करा: http://sbi-kyc-update.xyz/verify',
        isScam: true,
        explanation: 'बँका कधीही SMS द्वारे KYC अपडेट लिंक पाठवत नाहीत. "sbi-kyc-update.xyz" हा अधिकृत SBI वेबसाइट नाही. नेहमी तुमच्या बँक शाखेला भेट द्या किंवा अधिकृत ॲप वापरा.',
        redFlags: ['तातडी/घाबरवणारी भाषा', 'संशयास्पद डोमेन (.xyz)', 'बँका कधीही SMS ने KYC लिंक पाठवत नाहीत']
      },
      {
        id: 'scam4',
        type: 'whatsapp',
        sender: '+91 98765 43210',
        message: 'नमस्कार, हा Amazon कस्टमर सपोर्ट आहे. तुमचा ऑर्डर #AZ-7891 अडकला आहे. तुमचे पार्सल सोडवण्यासाठी कृपया तुमच्या फोनवर आलेला OTP शेअर करा.',
        isScam: true,
        explanation: 'Amazon कधीही WhatsApp वर ग्राहकांकडून OTP मागत नाही. OTP शेअर केल्यास स्कॅमर्सना तुमच्या खात्यांमध्ये प्रवेश मिळतो.',
        redFlags: ['OTP मागणे', '"Amazon" कडून WhatsApp संपर्क (अधिकृत चॅनल नाही)', 'वैयक्तिक फोन नंबर']
      },
      {
        id: 'safe2',
        type: 'sms',
        sender: 'AX-IRCTCW',
        message: 'PNR: 4521876543. तुमची ट्रेन 12051 25/09 रोजी मुंबई CST वरून 16:30 वाजता सुटेल. कोच S4, बर्थ 32. शुभ प्रवास! - IRCTC',
        isScam: false,
        explanation: 'ही IRCTC कडून खरी ट्रेन बुकिंग पुष्टी आहे. यात विशिष्ट बुकिंग तपशील आहेत, अधिकृत सेंडर ID आहे, आणि कोणतीही कृती मागत नाही.',
        redFlags: []
      },
      {
        id: 'scam5',
        type: 'whatsapp',
        sender: '+91 70001 23456',
        message: 'प्रिय नागरिक, भारत सरकार PM डिजिटल योजने अंतर्गत प्रत्येक कुटुंबाला ₹1,500 देत आहे. तुमच्या बँकेत थेट पैसे मिळवण्यासाठी हा फॉर्म भरा: http://pm-yojana-apply.com/form',
        isScam: true,
        explanation: 'सरकार कधीही WhatsApp लिंकद्वारे पैसे वाटत नाही. अधिकृत योजना mygov.in सारख्या अधिकृत पोर्टलवर असतात. हे नकली फॉर्म तुमचे आधार आणि बँक तपशील चोरतात.',
        redFlags: ['WhatsApp द्वारे सरकारी योजना', 'संशयास्पद डोमेन (.gov.in नाही)', 'खूपच चांगले वाटते', 'फॉर्मद्वारे बँक तपशील मागणे']
      },
      {
        id: 'scam6',
        type: 'sms',
        sender: '+91 88776 55443',
        message: 'हाय, मी चुकून Google Pay ने तुमच्या नंबरवर ₹5,000 पाठवले. कृपया परत करू शकता का? मला खरोखर पैशांची गरज आहे. माझा UPI: scammer@ybl',
        isScam: true,
        explanation: 'हा एक सोशल इंजिनीअरिंग घोटाळा आहे. त्या व्यक्तीने तुम्हाला कोणतेही पैसे पाठवलेले नाहीत. ते तुम्हाला दोषी वाटायला लावून पैसे पाठवायला लावतात. नेहमी तुमच्या बँक/UPI ॲपमध्ये तपासा.',
        redFlags: ['तुमच्या UPI ॲपमध्ये कोणताही वास्तविक व्यवहार नाही', 'अज्ञात नंबर', 'भावनिक दबाव', 'UPI ID वर पैसे पाठवायला सांगणे']
      },
      {
        id: 'scam7',
        type: 'whatsapp',
        sender: '+91 99887 76655',
        message: 'घरबसल्या सोपी कामे करून रोज ₹5,000-₹10,000 कमवा! कोणतीही गुंतवणूक नाही. आत्ताच आमच्या टीममध्ये सामील व्हा: https://easy-income-daily.com. मर्यादित जागा उपलब्ध!',
        isScam: true,
        explanation: 'वर्क-फ्रॉम-होम घोटाळे सोप्या पैशांचे आमिष दाखवतात पण नंतर "नोंदणी शुल्क" मागतात. कोणतीही कायदेशीर नोकरी "सोप्या कामांसाठी" ₹5,000-₹10,000 दैनिक उत्पन्नाची हमी देत नाही.',
        redFlags: ['अवास्तव उत्पन्नाचे आमिष', 'घाई ("मर्यादित जागा")', 'संशयास्पद वेबसाइट', '"कोणतीही गुंतवणूक नाही" दावे नंतर पैसे मागतात']
      },
      {
        id: 'safe3',
        type: 'sms',
        sender: 'BP-JIOREL',
        message: 'प्रिय ग्राहक, तुमचा Jio प्रीपेड प्लॅन ₹299 28/09/26 रोजी संपेल. अखंडित सेवांचा आनंद घेण्यासाठी आता रिचार्ज करा. jio.com किंवा MyJio ॲप वर जा.',
        isScam: false,
        explanation: 'ही Jio कडून खरी रिचार्ज आठवण आहे. यात अधिकृत सेंडर ID (BP-JIOREL) आहे आणि तुम्हाला अधिकृत चॅनलवर (jio.com, MyJio ॲप) पाठवते.',
        redFlags: []
      }
    ],
    guidelinesTitle: 'अत्यावश्यक सुरक्षा मार्गदर्शक तत्त्वे',
    guidelines: [
      { title: 'OTP कधीही शेअर करू नका', desc: 'कोणतीही बँक किंवा कायदेशीर सेवा कधीही कॉल किंवा मेसेजवर तुमचा OTP मागणार नाही.' },
      { title: 'UPI पिन पैसे पाठवण्यासाठी आहे', desc: 'पैसे मिळवण्यासाठी तुम्हाला कधीही तुमचा UPI पिन टाकण्याची गरज नाही. जर विचारले तर ती फसवणूक आहे.' },
      { title: 'अज्ञात कॉलर्सची पडताळणी करा', desc: 'जर कोणी पोलीस किंवा बँकेतून असल्याचे सांगून पैसे मागत असेल, तर कॉल कट करा आणि स्वतंत्रपणे खात्री करा.' },
      { title: 'संशयास्पद लिंक टाळा', desc: 'मोफत भेटवस्तू, लॉटरी जिंकण्याचे किंवा तत्काळ खाते ब्लॉक होण्याचे आमिष दाखवणाऱ्या लिंकवर क्लिक करू नका.' },
      { title: 'वेबसाइट डोमेन तपासा', desc: 'सरकारी साइट .gov.in वर संपतात, बँक साइट त्यांच्या अधिकृत डोमेनवर असतात. .xyz, .top, .click डोमेनपासून सावध रहा.' },
      { title: 'रिमोट ॲक्सेस ॲप्स नको', desc: 'अनोळखी व्यक्तींच्या सांगण्यावरून कधीही AnyDesk, TeamViewer किंवा QuickSupport इन्स्टॉल करू नका — ते तुमचा फोन नियंत्रित करू शकतात.' },
    ]
  }
};
