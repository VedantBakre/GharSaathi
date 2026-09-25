export type LessonCategory = 'digital' | 'household';

export interface LessonContent {
  id: string;
  category: LessonCategory;
  title: string;
  description: string;
  icon: string;
  sections: {
    title: string;
    content: string[];
    type?: 'info' | 'warning' | 'success';
  }[];
  interactive?: {
    type: 'quiz' | 'flow';
    question?: string;
    options?: { id: string; text: string; isCorrect: boolean }[];
    explanation?: string;
    flowSteps?: string[];
  };
}

export const lessonsData: Record<'en' | 'hi' | 'mr', LessonContent[]> = {
  en: [
    // ── DIGITAL LESSONS ──────────────────────────────────────
    {
      id: 'smartphone-basics',
      category: 'digital',
      title: 'Smartphone Basics',
      description: 'Learn the essentials of using your smartphone.',
      icon: 'smartphone',
      sections: [
        {
          title: 'What are Apps?',
          content: ['Apps (Applications) are like digital tools on your phone. Just like you have a calculator, calendar, or camera in real life, you have apps for them on your phone.']
        },
        {
          title: 'Connecting to Internet',
          content: [
            'Wi-Fi: Connects to a local router (usually at home or office). It is generally faster and free.',
            'Mobile Data: Uses your SIM card to connect to the internet. It uses your data plan.'
          ]
        },
        {
          title: 'Sharing and Storage',
          content: [
            'You can take a screenshot (usually by pressing Power + Volume Down) to save what is on your screen.',
            'Your phone has limited storage. Delete old videos and photos to keep it running smoothly.'
          ]
        }
      ]
    },
    {
      id: 'upi-payments',
      category: 'digital',
      title: 'UPI & Digital Payments',
      description: 'Understand how to send and receive money safely.',
      icon: 'zap',
      sections: [
        {
          title: 'What is UPI?',
          content: ['UPI (Unified Payments Interface) lets you transfer money instantly from your bank account to another person using their phone number or scanning a QR code. Popular apps include Google Pay, PhonePe, and Paytm.']
        },
        {
          title: 'How to Set Up UPI',
          content: [
            'Step 1: Download a UPI app (Google Pay, PhonePe, etc.) from the Play Store.',
            'Step 2: Register your mobile number (the same one linked to your bank account).',
            'Step 3: Select your bank and verify your account.',
            'Step 4: Create a 4 or 6 digit UPI PIN. Remember this PIN — never share it with anyone.'
          ],
          type: 'info'
        },
        {
          title: 'Golden Rule of UPI Safety',
          type: 'warning',
          content: [
            'NEVER share your UPI PIN with anyone. You ONLY need to enter your PIN when YOU are sending money. You NEVER need to enter a PIN to receive money.',
            'If someone asks you to enter your PIN to "receive" money, it is 100% a scam.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'Someone calls and says: "Enter your UPI PIN to receive ₹500 prize." Is this safe?',
        options: [
          { id: 'safe', text: 'Safe', isCorrect: false },
          { id: 'scam', text: 'Scam', isCorrect: true }
        ],
        explanation: 'Scam! You never need to enter your UPI PIN to receive money. They are trying to steal from you.'
      }
    },
    {
      id: 'whatsapp-basics',
      category: 'digital',
      title: 'WhatsApp Basics',
      description: 'Learn to use WhatsApp for messaging, calls, and staying connected.',
      icon: 'message-circle',
      sections: [
        {
          title: 'Getting Started with WhatsApp',
          content: [
            'WhatsApp is a free messaging app that uses your internet connection to send messages, photos, videos, and make voice/video calls.',
            'Download WhatsApp from the Play Store or App Store. Register with your phone number, and you are ready to go!'
          ]
        },
        {
          title: 'Sending Messages & Media',
          content: [
            'Text Messages: Type your message and tap the send button (green arrow).',
            'Photos & Videos: Tap the attachment icon (📎) to send photos, videos, or documents.',
            'Voice Messages: Press and hold the microphone icon to record a voice message.',
            'Voice/Video Calls: Tap the phone or video icon at the top of a chat to call someone for free.'
          ]
        },
        {
          title: 'Groups and Status',
          content: [
            'Groups: You can create groups with family or friends to share messages with everyone at once.',
            'Status: Share photos or text that disappear after 24 hours, similar to a story.'
          ]
        },
        {
          title: 'Privacy and Safety Settings',
          type: 'warning',
          content: [
            'Go to Settings → Privacy to control who can see your profile photo, status, and "last seen".',
            'Enable Two-Step Verification (Settings → Account → Two-step verification) for extra security.',
            'Never share OTPs or verification codes received on WhatsApp with anyone.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'Someone on WhatsApp asks you to share the 6-digit code you just received via SMS. Should you share it?',
        options: [
          { id: 'yes', text: 'Yes, they might need it', isCorrect: false },
          { id: 'no', text: 'No, never share verification codes', isCorrect: true }
        ],
        explanation: 'Never share verification codes! That code is used to log into YOUR WhatsApp account. Sharing it lets someone else take over your account.'
      }
    },
    {
      id: 'google-maps-search',
      category: 'digital',
      title: 'Google Search & Maps',
      description: 'Find information, places, and directions using Google.',
      icon: 'map',
      sections: [
        {
          title: 'Using Google Search',
          content: [
            'Google Search is a tool to find any information on the internet. Open your browser and go to google.com, or use the Google app.',
            'Simply type what you want to know — like "weather today", "nearest hospital", or "how to make dal" — and tap Search.',
            'Tip: You can also use voice search by tapping the microphone icon and speaking your question in any language.'
          ]
        },
        {
          title: 'Getting Started with Google Maps',
          content: [
            'Google Maps helps you find places and get directions. Open the Google Maps app on your phone.',
            'The blue dot shows your current location. You can search for any place — shops, hospitals, bus stops, etc.',
            'Tap "Directions" to get step-by-step navigation to any destination by car, bus, walking, or auto.'
          ]
        },
        {
          title: 'Useful Maps Features',
          type: 'success',
          content: [
            'Save your home and work addresses for quick navigation.',
            'Check live traffic conditions before travelling to avoid jams.',
            'Use "Nearby" to find ATMs, petrol pumps, pharmacies, and restaurants around you.',
            'Download offline maps for areas with poor internet — go to your profile → Offline maps.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'What is the safest way to search for a nearby hospital on your phone?',
        options: [
          { id: 'google', text: 'Search "nearest hospital" on Google Maps', isCorrect: true },
          { id: 'random', text: 'Click on a link from an unknown SMS', isCorrect: false },
          { id: 'forward', text: 'Ask in a random WhatsApp group', isCorrect: false }
        ],
        explanation: 'Google Maps is the safest and most reliable way to find nearby services. Avoid clicking unknown links as they could be scams.'
      }
    },
    {
      id: 'email-basics',
      category: 'digital',
      title: 'Email Basics',
      description: 'Learn how to create and use an email account.',
      icon: 'mail',
      sections: [
        {
          title: 'What is Email?',
          content: [
            'Email (Electronic Mail) is a way to send and receive letters digitally. It is used for official communication, receiving bills, and creating accounts on apps.',
            'Gmail is the most popular email service. You can create a free account at gmail.com.'
          ]
        },
        {
          title: 'Creating a Gmail Account',
          content: [
            'Go to gmail.com and tap "Create account".',
            'Enter your name and choose a username (this becomes your email address, like yourname@gmail.com).',
            'Create a strong password — use a mix of letters, numbers, and symbols. Write it down and keep it safe.',
            'Add your phone number for account recovery in case you forget your password.'
          ],
          type: 'info'
        },
        {
          title: 'Sending and Reading Emails',
          content: [
            'To send an email: Tap "Compose" (pencil icon), enter the recipient\'s email address, write your message, and tap "Send".',
            'To read emails: Open the Gmail app. New emails appear in your "Inbox". Tap on any email to read it.',
            'Attachments: You can attach files (photos, PDFs, documents) by tapping the attachment icon while composing.'
          ]
        },
        {
          title: 'Avoiding Spam and Scams',
          type: 'warning',
          content: [
            'Never open emails from unknown senders that promise prizes, lottery wins, or urgent action.',
            'Do not click links in suspicious emails. Banks and the government will never ask for your password via email.',
            'Mark unwanted emails as "Spam" to keep your inbox clean.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'You receive an email saying "Your bank account will be blocked. Click here to verify." What should you do?',
        options: [
          { id: 'click', text: 'Click the link immediately', isCorrect: false },
          { id: 'delete', text: 'Delete it — banks never send such emails', isCorrect: true },
          { id: 'reply', text: 'Reply with your account details', isCorrect: false }
        ],
        explanation: 'This is a phishing scam! Banks never ask you to click links or share details via email. Delete such emails or mark them as spam.'
      }
    },
    {
      id: 'app-management',
      category: 'digital',
      title: 'App Management',
      description: 'Learn to install, update, and manage apps on your phone.',
      icon: 'layout-grid',
      sections: [
        {
          title: 'Installing Apps from Play Store',
          content: [
            'The Play Store (Android) or App Store (iPhone) is the official place to download apps.',
            'Open the Play Store, search for the app you need (like "WhatsApp" or "Google Pay"), and tap "Install".',
            'Always download apps from the official store — never install apps from unknown links sent via SMS or WhatsApp.'
          ]
        },
        {
          title: 'Updating Apps',
          content: [
            'App updates fix bugs and add new features. It is important to keep your apps updated.',
            'Open Play Store → tap your profile icon → "Manage apps & device" → "Update all".',
            'You can turn on automatic updates so apps update themselves when connected to Wi-Fi.'
          ],
          type: 'info'
        },
        {
          title: 'Understanding App Permissions',
          type: 'warning',
          content: [
            'When you install an app, it may ask for permissions like Camera, Microphone, Location, or Contacts.',
            'Only grant permissions that make sense. For example, a camera app needs camera access, but a calculator app does NOT need your contacts.',
            'You can review and change permissions anytime: Settings → Apps → Select app → Permissions.'
          ]
        },
        {
          title: 'Managing Phone Storage',
          content: [
            'If your phone is running slow, it might be low on storage.',
            'Delete apps you no longer use. Go to Settings → Apps → select the app → Uninstall.',
            'Clear app cache: Settings → Apps → select app → Storage → Clear Cache.',
            'Move photos and videos to Google Photos (free backup up to a limit) to free up space.'
          ],
          type: 'success'
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'A friend sends you an APK file on WhatsApp and asks you to install it. What should you do?',
        options: [
          { id: 'install', text: 'Install it immediately', isCorrect: false },
          { id: 'search', text: 'Search for the app on Play Store instead', isCorrect: true },
          { id: 'ignore', text: 'Install but deny all permissions', isCorrect: false }
        ],
        explanation: 'Always install apps from the official Play Store or App Store. APK files from unknown sources can contain viruses or malware that steal your data.'
      }
    },

    // ── HOUSEHOLD LESSONS ─────────────────────────────────────
    {
      id: 'electricity-saving',
      category: 'household',
      title: 'Electricity Management',
      description: 'Simple tips to reduce your electricity bill.',
      icon: 'zap',
      sections: [
        {
          title: 'Daily Habits',
          content: [
            'Switch off fans and lights when leaving a room.',
            'Use natural sunlight during the day instead of bulbs.',
            'Unplug appliances like chargers and TVs when not in use — they consume power even on standby.'
          ]
        },
        {
          title: 'Smart Choices',
          type: 'success',
          content: [
            'Use LED bulbs instead of regular bulbs. They use 80% less electricity and last much longer.',
            'Set your AC temperature to 24°C — every degree lower increases power consumption by 6%.',
            'Use a 5-star rated appliance when buying new fans, ACs, or refrigerators.'
          ]
        },
        {
          title: 'Reading Your Electricity Bill',
          content: [
            'Your electricity bill shows the number of "units" (kWh) consumed.',
            'Track your monthly consumption. If it suddenly increases, check for faulty wiring or appliances.',
            'Pay your bill on time to avoid late fees. You can pay using UPI apps like Google Pay or PhonePe.'
          ],
          type: 'info'
        }
      ]
    },
    {
      id: 'waste-management',
      category: 'household',
      title: 'Waste Management',
      description: 'Learn how to separate your daily waste correctly.',
      icon: 'home',
      sections: [
        {
          title: 'Wet Waste (Biodegradable)',
          content: [
            'Food scraps, vegetable peels, fruit skins, and leftover food.',
            'This can be used for composting — turning kitchen waste into natural fertilizer for plants.'
          ]
        },
        {
          title: 'Dry Waste (Recyclable)',
          content: [
            'Paper, plastic bottles, cardboard, and clean packaging.',
            'Keep this separate so it can be recycled. Rinse containers before throwing them in the dry waste bin.'
          ]
        },
        {
          title: 'Hazardous Waste',
          type: 'warning',
          content: [
            'Batteries, medicines, broken glass, and e-waste (old phones, chargers).',
            'Never mix these with regular garbage. Take them to designated collection centres.',
            'Old medicines should be returned to a pharmacy or disposed of properly — never flush them.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'Where does a Banana Peel belong?',
        options: [
          { id: 'wet', text: 'Wet Waste', isCorrect: true },
          { id: 'dry', text: 'Dry Waste', isCorrect: false },
          { id: 'hazardous', text: 'Hazardous Waste', isCorrect: false }
        ],
        explanation: 'Correct! Banana peels are organic and biodegradable, so they go in wet waste and can be composted.'
      }
    },
    {
      id: 'water-conservation',
      category: 'household',
      title: 'Water Conservation',
      description: 'Practical tips to save water and reduce your water bill.',
      icon: 'droplet',
      sections: [
        {
          title: 'Daily Water-Saving Habits',
          content: [
            'Turn off the tap while brushing your teeth or soaping your hands — this saves up to 10 litres each time.',
            'Use a bucket instead of a shower for bathing — a 5-minute shower uses 45 litres, while a bucket uses only 15-20 litres.',
            'Fix leaky taps immediately — a single dripping tap can waste over 10,000 litres per year!',
            'Wash vegetables and fruits in a bowl instead of under running water.'
          ]
        },
        {
          title: 'Smart Water Usage at Home',
          content: [
            'Run the washing machine only with a full load to avoid wasting water.',
            'Reuse water from washing vegetables to water your plants.',
            'Use a broom instead of a hose to clean driveways and sidewalks.',
            'Store drinking water in clay pots (matka) — they keep water cool naturally without electricity.'
          ],
          type: 'success'
        },
        {
          title: 'Rainwater Harvesting',
          content: [
            'Rainwater harvesting is collecting and storing rainwater for later use.',
            'Simple method: Place a clean barrel or tank under your roof\'s drainage pipe to collect rainwater during monsoon.',
            'This water can be used for gardening, washing, and cleaning — reducing your dependence on municipal supply.',
            'Many cities offer property tax discounts for homes with rainwater harvesting systems.'
          ],
          type: 'info'
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'Which of these saves the most water?',
        options: [
          { id: 'bucket', text: 'Using a bucket instead of a shower', isCorrect: true },
          { id: 'shorter', text: 'Taking a slightly shorter shower', isCorrect: false },
          { id: 'cold', text: 'Using cold water instead of hot', isCorrect: false }
        ],
        explanation: 'Correct! Using a bucket saves about 25 litres per bath compared to a shower. A shorter shower still uses much more water than a bucket.'
      }
    },
    {
      id: 'budget-planning',
      category: 'household',
      title: 'Budget Planning',
      description: 'Learn to plan your monthly household budget effectively.',
      icon: 'wallet',
      sections: [
        {
          title: 'Why Budget?',
          content: [
            'A budget is a plan for your money. It helps you know where your money goes and avoid running out before the month ends.',
            'Without a budget, small unplanned expenses (chai, snacks, auto rides) can add up to a large amount.'
          ]
        },
        {
          title: 'The 50-30-20 Rule',
          content: [
            '50% for Needs: Rent, food, electricity, water, school fees — things you must pay.',
            '30% for Wants: Eating out, entertainment, new clothes — things you enjoy but can live without.',
            '20% for Savings: Emergency fund, fixed deposits, or recurring deposits — money for your future.',
            'Example: If your income is ₹30,000 → ₹15,000 for needs, ₹9,000 for wants, ₹6,000 for savings.'
          ],
          type: 'info'
        },
        {
          title: 'Tracking Your Expenses',
          content: [
            'Write down every expense at the end of the day, or use the GharSaathi Expense Tracker!',
            'Categorize your expenses — Food, Transport, Bills, Entertainment, etc.',
            'At the end of the month, review where your money went. You might be surprised how much small expenses add up!'
          ],
          type: 'success'
        },
        {
          title: 'Saving Tips',
          content: [
            'Start saving even small amounts — ₹10 per day = ₹3,650 per year.',
            'Use auto-debit to transfer a fixed amount to your savings account on salary day.',
            'Build an emergency fund equal to 3 months of expenses before spending on wants.',
            'Compare prices before buying — check multiple shops or use online price comparison.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'According to the 50-30-20 rule, if your income is ₹40,000, how much should you save?',
        options: [
          { id: '4000', text: '₹4,000', isCorrect: false },
          { id: '8000', text: '₹8,000', isCorrect: true },
          { id: '12000', text: '₹12,000', isCorrect: false },
          { id: '20000', text: '₹20,000', isCorrect: false }
        ],
        explanation: 'Correct! 20% of ₹40,000 = ₹8,000 should go towards savings. The remaining ₹20,000 is for needs and ₹12,000 for wants.'
      }
    }
  ],

  // ════════════════════════════════════════════════════════════
  //  HINDI TRANSLATIONS
  // ════════════════════════════════════════════════════════════
  hi: [
    {
      id: 'smartphone-basics',
      category: 'digital',
      title: 'स्मार्टफोन बेसिक्स',
      description: 'अपने स्मार्टफोन का उपयोग करने की आवश्यक बातें सीखें।',
      icon: 'smartphone',
      sections: [
        {
          title: 'ऐप्स क्या हैं?',
          content: ['ऐप्स (एप्लिकेशन) आपके फोन पर डिजिटल टूल की तरह हैं। जैसे आपके पास कैलकुलेटर या कैमरा होता है, वैसे ही फोन पर इनके लिए ऐप्स होते हैं।']
        },
        {
          title: 'इंटरनेट से जुड़ना',
          content: [
            'Wi-Fi: लोकल राउटर से जुड़ता है (आमतौर पर घर या ऑफिस में)। यह आमतौर पर तेज और मुफ्त होता है।',
            'मोबाइल डेटा: इंटरनेट से जुड़ने के लिए आपके सिम कार्ड का उपयोग करता है। यह आपके डेटा प्लान का उपयोग करता है।'
          ]
        },
        {
          title: 'शेयरिंग और स्टोरेज',
          content: [
            'आप स्क्रीनशॉट ले सकते हैं (आमतौर पर Power + Volume Down दबाकर) अपनी स्क्रीन पर जो है उसे सेव करने के लिए।',
            'आपके फोन में सीमित स्टोरेज है। पुरानी वीडियो और फोटो डिलीट करें ताकि फोन स्मूथ चले।'
          ]
        }
      ]
    },
    {
      id: 'upi-payments',
      category: 'digital',
      title: 'UPI और डिजिटल भुगतान',
      description: 'सुरक्षित रूप से पैसे भेजना और प्राप्त करना समझें।',
      icon: 'zap',
      sections: [
        {
          title: 'UPI क्या है?',
          content: ['UPI (यूनिफाइड पेमेंट्स इंटरफ़ेस) आपको फोन नंबर या QR कोड स्कैन करके अपने बैंक खाते से दूसरे व्यक्ति को तुरंत पैसे ट्रांसफर करने की सुविधा देता है। Google Pay, PhonePe और Paytm लोकप्रिय ऐप्स हैं।']
        },
        {
          title: 'UPI कैसे सेट करें',
          content: [
            'चरण 1: Play Store से एक UPI ऐप (Google Pay, PhonePe, आदि) डाउनलोड करें।',
            'चरण 2: अपना मोबाइल नंबर रजिस्टर करें (वही जो आपके बैंक खाते से जुड़ा है)।',
            'चरण 3: अपना बैंक चुनें और खाता सत्यापित करें।',
            'चरण 4: 4 या 6 अंकों का UPI पिन बनाएं। इस पिन को याद रखें — कभी किसी के साथ साझा न करें।'
          ],
          type: 'info'
        },
        {
          title: 'UPI सुरक्षा का सुनहरा नियम',
          type: 'warning',
          content: [
            'अपना UPI पिन कभी किसी के साथ साझा न करें। आपको पिन तभी डालना होता है जब आप पैसे भेज रहे हों। पैसे प्राप्त करने के लिए कभी पिन नहीं डालना होता।',
            'अगर कोई आपसे पैसे "प्राप्त करने" के लिए पिन डालने को कहे, तो यह 100% धोखाधड़ी है।'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'कोई व्यक्ति कॉल करके कहता है: "₹500 का इनाम प्राप्त करने के लिए अपना UPI पिन डालें।" क्या यह सुरक्षित है?',
        options: [
          { id: 'safe', text: 'सुरक्षित', isCorrect: false },
          { id: 'scam', text: 'धोखाधड़ी (Scam)', isCorrect: true }
        ],
        explanation: 'यह धोखाधड़ी है! पैसे प्राप्त करने के लिए कभी पिन नहीं डालना होता है।'
      }
    },
    {
      id: 'whatsapp-basics',
      category: 'digital',
      title: 'WhatsApp बेसिक्स',
      description: 'मैसेजिंग, कॉल्स और जुड़े रहने के लिए WhatsApp का उपयोग करना सीखें।',
      icon: 'message-circle',
      sections: [
        {
          title: 'WhatsApp शुरू करना',
          content: [
            'WhatsApp एक मुफ्त मैसेजिंग ऐप है जो मैसेज, फोटो, वीडियो भेजने और वॉइस/वीडियो कॉल करने के लिए इंटरनेट का उपयोग करता है।',
            'Play Store या App Store से WhatsApp डाउनलोड करें। अपने फोन नंबर से रजिस्टर करें, और आप तैयार हैं!'
          ]
        },
        {
          title: 'मैसेज और मीडिया भेजना',
          content: [
            'टेक्स्ट मैसेज: अपना मैसेज टाइप करें और सेंड बटन (हरा तीर) दबाएं।',
            'फोटो और वीडियो: फोटो, वीडियो या दस्तावेज भेजने के लिए अटैचमेंट आइकन (📎) दबाएं।',
            'वॉइस मैसेज: वॉइस मैसेज रिकॉर्ड करने के लिए माइक्रोफोन आइकन को दबाए रखें।',
            'वॉइस/वीडियो कॉल: किसी को मुफ्त कॉल करने के लिए चैट के ऊपर फोन या वीडियो आइकन दबाएं।'
          ]
        },
        {
          title: 'ग्रुप्स और स्टेटस',
          content: [
            'ग्रुप्स: आप परिवार या दोस्तों के साथ ग्रुप बना सकते हैं ताकि सभी को एक साथ मैसेज भेज सकें।',
            'स्टेटस: फोटो या टेक्स्ट शेयर करें जो 24 घंटे बाद गायब हो जाते हैं, कहानी की तरह।'
          ]
        },
        {
          title: 'प्राइवेसी और सुरक्षा सेटिंग्स',
          type: 'warning',
          content: [
            'Settings → Privacy पर जाएं और नियंत्रित करें कि कौन आपकी प्रोफाइल फोटो, स्टेटस और "last seen" देख सकता है।',
            'अतिरिक्त सुरक्षा के लिए टू-स्टेप वेरिफिकेशन ऑन करें (Settings → Account → Two-step verification)।',
            'WhatsApp पर प्राप्त OTP या वेरिफिकेशन कोड कभी किसी के साथ साझा न करें।'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'WhatsApp पर कोई आपसे वह 6-अंकीय कोड मांगता है जो आपको SMS से मिला। क्या आपको शेयर करना चाहिए?',
        options: [
          { id: 'yes', text: 'हां, उन्हें जरूरत हो सकती है', isCorrect: false },
          { id: 'no', text: 'नहीं, वेरिफिकेशन कोड कभी शेयर न करें', isCorrect: true }
        ],
        explanation: 'वेरिफिकेशन कोड कभी शेयर न करें! वह कोड आपके WhatsApp अकाउंट में लॉगिन करने के लिए उपयोग होता है। शेयर करने से कोई और आपका अकाउंट ले सकता है।'
      }
    },
    {
      id: 'google-maps-search',
      category: 'digital',
      title: 'Google सर्च और मैप्स',
      description: 'Google का उपयोग करके जानकारी, स्थान और दिशाएं खोजें।',
      icon: 'map',
      sections: [
        {
          title: 'Google सर्च का उपयोग',
          content: [
            'Google सर्च इंटरनेट पर कोई भी जानकारी खोजने का टूल है। अपना ब्राउज़र खोलें और google.com पर जाएं, या Google ऐप का उपयोग करें।',
            'बस टाइप करें जो आप जानना चाहते हैं — जैसे "आज का मौसम", "नजदीकी अस्पताल", या "दाल कैसे बनाएं" — और सर्च दबाएं।',
            'सुझाव: आप माइक्रोफोन आइकन दबाकर किसी भी भाषा में बोलकर वॉइस सर्च भी कर सकते हैं।'
          ]
        },
        {
          title: 'Google Maps शुरू करना',
          content: [
            'Google Maps आपको स्थान खोजने और दिशा-निर्देश प्राप्त करने में मदद करता है। अपने फोन पर Google Maps ऐप खोलें।',
            'नीला बिंदु आपकी वर्तमान स्थिति दिखाता है। आप कोई भी स्थान खोज सकते हैं — दुकानें, अस्पताल, बस स्टॉप, आदि।',
            'कार, बस, पैदल या ऑटो से किसी भी गंतव्य तक कदम-दर-कदम नेविगेशन प्राप्त करने के लिए "Directions" दबाएं।'
          ]
        },
        {
          title: 'उपयोगी Maps सुविधाएं',
          type: 'success',
          content: [
            'त्वरित नेविगेशन के लिए अपने घर और काम के पते सेव करें।',
            'जाम से बचने के लिए यात्रा करने से पहले लाइव ट्रैफिक स्थिति जांचें।',
            'अपने आसपास ATM, पेट्रोल पंप, फार्मेसी और रेस्तरां खोजने के लिए "Nearby" का उपयोग करें।',
            'खराब इंटरनेट वाले क्षेत्रों के लिए ऑफलाइन नक्शे डाउनलोड करें — प्रोफाइल → Offline maps पर जाएं।'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'अपने फोन पर नजदीकी अस्पताल खोजने का सबसे सुरक्षित तरीका क्या है?',
        options: [
          { id: 'google', text: 'Google Maps पर "नजदीकी अस्पताल" खोजें', isCorrect: true },
          { id: 'random', text: 'किसी अज्ञात SMS के लिंक पर क्लिक करें', isCorrect: false },
          { id: 'forward', text: 'किसी रैंडम WhatsApp ग्रुप में पूछें', isCorrect: false }
        ],
        explanation: 'Google Maps नजदीकी सेवाएं खोजने का सबसे सुरक्षित और विश्वसनीय तरीका है। अज्ञात लिंक पर क्लिक करने से बचें क्योंकि वे घोटाले हो सकते हैं।'
      }
    },
    {
      id: 'email-basics',
      category: 'digital',
      title: 'ईमेल बेसिक्स',
      description: 'ईमेल अकाउंट बनाना और उपयोग करना सीखें।',
      icon: 'mail',
      sections: [
        {
          title: 'ईमेल क्या है?',
          content: [
            'ईमेल (इलेक्ट्रॉनिक मेल) डिजिटल रूप से पत्र भेजने और प्राप्त करने का तरीका है। इसका उपयोग आधिकारिक संचार, बिल प्राप्त करने और ऐप्स पर अकाउंट बनाने के लिए होता है।',
            'Gmail सबसे लोकप्रिय ईमेल सेवा है। आप gmail.com पर मुफ्त अकाउंट बना सकते हैं।'
          ]
        },
        {
          title: 'Gmail अकाउंट बनाना',
          content: [
            'gmail.com पर जाएं और "Create account" पर टैप करें।',
            'अपना नाम दर्ज करें और एक यूज़रनेम चुनें (यह आपका ईमेल पता बन जाएगा, जैसे yourname@gmail.com)।',
            'एक मजबूत पासवर्ड बनाएं — अक्षर, संख्या और प्रतीकों का मिश्रण। इसे लिखकर सुरक्षित रखें।',
            'अपना फोन नंबर जोड़ें ताकि पासवर्ड भूलने पर अकाउंट रिकवर कर सकें।'
          ],
          type: 'info'
        },
        {
          title: 'ईमेल भेजना और पढ़ना',
          content: [
            'ईमेल भेजने के लिए: "Compose" (पेंसिल आइकन) दबाएं, प्राप्तकर्ता का ईमेल पता दर्ज करें, अपना मैसेज लिखें, और "Send" दबाएं।',
            'ईमेल पढ़ने के लिए: Gmail ऐप खोलें। नए ईमेल आपके "Inbox" में दिखाई देते हैं। किसी भी ईमेल को पढ़ने के लिए उस पर टैप करें।',
            'अटैचमेंट: कंपोज़ करते समय अटैचमेंट आइकन दबाकर आप फाइलें (फोटो, PDF, दस्तावेज) अटैच कर सकते हैं।'
          ]
        },
        {
          title: 'स्पैम और घोटालों से बचें',
          type: 'warning',
          content: [
            'अज्ञात प्रेषकों के ऐसे ईमेल कभी न खोलें जो पुरस्कार, लॉटरी या तत्काल कार्रवाई का वादा करते हैं।',
            'संदिग्ध ईमेल में लिंक पर क्लिक न करें। बैंक और सरकार कभी ईमेल के माध्यम से आपका पासवर्ड नहीं मांगेंगे।',
            'अवांछित ईमेल को "Spam" के रूप में चिह्नित करें ताकि आपका इनबॉक्स साफ रहे।'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'आपको एक ईमेल मिलता है जिसमें लिखा है "आपका बैंक अकाउंट ब्लॉक हो जाएगा। सत्यापित करने के लिए यहां क्लिक करें।" आपको क्या करना चाहिए?',
        options: [
          { id: 'click', text: 'तुरंत लिंक पर क्लिक करें', isCorrect: false },
          { id: 'delete', text: 'इसे डिलीट करें — बैंक ऐसे ईमेल कभी नहीं भेजते', isCorrect: true },
          { id: 'reply', text: 'अपने अकाउंट विवरण के साथ जवाब दें', isCorrect: false }
        ],
        explanation: 'यह फ़िशिंग घोटाला है! बैंक कभी ईमेल के माध्यम से लिंक क्लिक करने या विवरण साझा करने को नहीं कहते। ऐसे ईमेल डिलीट करें या स्पैम मार्क करें।'
      }
    },
    {
      id: 'app-management',
      category: 'digital',
      title: 'ऐप मैनेजमेंट',
      description: 'अपने फोन पर ऐप्स इंस्टॉल, अपडेट और मैनेज करना सीखें।',
      icon: 'layout-grid',
      sections: [
        {
          title: 'Play Store से ऐप्स इंस्टॉल करना',
          content: [
            'Play Store (Android) या App Store (iPhone) ऐप्स डाउनलोड करने की आधिकारिक जगह है।',
            'Play Store खोलें, जिस ऐप की जरूरत है उसे खोजें (जैसे "WhatsApp" या "Google Pay"), और "Install" दबाएं।',
            'हमेशा आधिकारिक स्टोर से ऐप्स डाउनलोड करें — SMS या WhatsApp से भेजे गए अज्ञात लिंक से कभी ऐप्स इंस्टॉल न करें।'
          ]
        },
        {
          title: 'ऐप्स अपडेट करना',
          content: [
            'ऐप अपडेट बग्स को ठीक करते हैं और नई सुविधाएं जोड़ते हैं। अपने ऐप्स को अपडेट रखना महत्वपूर्ण है।',
            'Play Store खोलें → अपना प्रोफाइल आइकन दबाएं → "Manage apps & device" → "Update all"।',
            'आप ऑटोमैटिक अपडेट चालू कर सकते हैं ताकि Wi-Fi से कनेक्ट होने पर ऐप्स खुद अपडेट हो जाएं।'
          ],
          type: 'info'
        },
        {
          title: 'ऐप अनुमतियां (Permissions) समझना',
          type: 'warning',
          content: [
            'जब आप कोई ऐप इंस्टॉल करते हैं, तो यह कैमरा, माइक्रोफोन, लोकेशन, या कॉन्टैक्ट्स जैसी अनुमतियां मांग सकता है।',
            'केवल वही अनुमतियां दें जो सही लगती हैं। उदाहरण: कैमरा ऐप को कैमरा एक्सेस चाहिए, लेकिन कैलकुलेटर ऐप को आपके कॉन्टैक्ट्स की जरूरत नहीं।',
            'आप कभी भी अनुमतियां बदल सकते हैं: Settings → Apps → ऐप चुनें → Permissions।'
          ]
        },
        {
          title: 'फोन स्टोरेज मैनेज करना',
          content: [
            'अगर आपका फोन धीरे चल रहा है, तो स्टोरेज कम हो सकता है।',
            'जो ऐप्स उपयोग नहीं करते उन्हें डिलीट करें। Settings → Apps → ऐप चुनें → Uninstall पर जाएं।',
            'ऐप कैशे साफ करें: Settings → Apps → ऐप चुनें → Storage → Clear Cache।',
            'जगह खाली करने के लिए फोटो और वीडियो को Google Photos में मूव करें (एक सीमा तक मुफ्त बैकअप)।'
          ],
          type: 'success'
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'एक दोस्त आपको WhatsApp पर एक APK फाइल भेजता है और इंस्टॉल करने को कहता है। आपको क्या करना चाहिए?',
        options: [
          { id: 'install', text: 'तुरंत इंस्टॉल करें', isCorrect: false },
          { id: 'search', text: 'इसके बजाय Play Store पर ऐप खोजें', isCorrect: true },
          { id: 'ignore', text: 'इंस्टॉल करें लेकिन सभी अनुमतियां अस्वीकार करें', isCorrect: false }
        ],
        explanation: 'हमेशा आधिकारिक Play Store या App Store से ऐप्स इंस्टॉल करें। अज्ञात स्रोतों से APK फाइलों में वायरस या मैलवेयर हो सकता है जो आपका डेटा चुरा सकता है।'
      }
    },
    {
      id: 'electricity-saving',
      category: 'household',
      title: 'बिजली प्रबंधन',
      description: 'बिजली बिल कम करने के सरल उपाय।',
      icon: 'zap',
      sections: [
        {
          title: 'दैनिक आदतें',
          content: [
            'कमरा छोड़ते समय पंखे और लाइट बंद कर दें।',
            'दिन के दौरान बल्ब के बजाय प्राकृतिक धूप का उपयोग करें।',
            'उपयोग में न होने पर चार्जर और टीवी जैसे उपकरणों के प्लग निकाल दें — वे स्टैंडबाय में भी बिजली खाते हैं।'
          ]
        },
        {
          title: 'स्मार्ट विकल्प',
          type: 'success',
          content: [
            'LED बल्ब का उपयोग करें — ये 80% कम बिजली खाते हैं और बहुत लंबे समय तक चलते हैं।',
            'अपने AC का तापमान 24°C पर रखें — हर डिग्री कम करने से बिजली खपत 6% बढ़ जाती है।',
            'नए पंखे, AC या फ्रिज खरीदते समय 5-स्टार रेटेड उपकरण खरीदें।'
          ]
        },
        {
          title: 'बिजली बिल पढ़ना',
          content: [
            'आपका बिजली बिल "यूनिट" (kWh) में खपत दिखाता है।',
            'अपनी मासिक खपत ट्रैक करें। अगर अचानक बढ़ जाए तो खराब वायरिंग या उपकरणों की जांच करें।',
            'देर से भुगतान शुल्क से बचने के लिए अपना बिल समय पर भरें। आप Google Pay या PhonePe जैसे UPI ऐप्स से भुगतान कर सकते हैं।'
          ],
          type: 'info'
        }
      ]
    },
    {
      id: 'waste-management',
      category: 'household',
      title: 'कचरा प्रबंधन',
      description: 'दैनिक कचरे को सही तरीके से अलग करना सीखें।',
      icon: 'home',
      sections: [
        {
          title: 'गीला कचरा (Biodegradable)',
          content: [
            'भोजन के टुकड़े, सब्जियों के छिलके, फलों की त्वचा और बचा हुआ खाना।',
            'इसका उपयोग खाद बनाने के लिए किया जा सकता है — रसोई के कचरे को पौधों के लिए प्राकृतिक उर्वरक में बदलना।'
          ]
        },
        {
          title: 'सूखा कचरा (Recyclable)',
          content: [
            'कागज, प्लास्टिक की बोतलें, गत्ता और साफ पैकेजिंग।',
            'इसे अलग रखें ताकि इसे रिसाइकिल किया जा सके। सूखे कचरे के डिब्बे में डालने से पहले कंटेनरों को धो लें।'
          ]
        },
        {
          title: 'खतरनाक कचरा',
          type: 'warning',
          content: [
            'बैटरी, दवाइयां, टूटा हुआ कांच, और ई-कचरा (पुराने फोन, चार्जर)।',
            'इन्हें कभी सामान्य कचरे में न मिलाएं। इन्हें निर्धारित संग्रह केंद्रों में ले जाएं।',
            'पुरानी दवाइयां फार्मेसी में वापस करें या सही तरीके से निपटाएं — कभी फ्लश न करें।'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'केले का छिलका कहाँ डालना चाहिए?',
        options: [
          { id: 'wet', text: 'गीला कचरा', isCorrect: true },
          { id: 'dry', text: 'सूखा कचरा', isCorrect: false },
          { id: 'hazardous', text: 'खतरनाक कचरा', isCorrect: false }
        ],
        explanation: 'सही! केले के छिलके जैविक और बायोडिग्रेडेबल हैं, इसलिए ये गीले कचरे में जाते हैं और खाद बनाई जा सकती है।'
      }
    },
    {
      id: 'water-conservation',
      category: 'household',
      title: 'जल संरक्षण',
      description: 'पानी बचाने और पानी का बिल कम करने के व्यावहारिक सुझाव।',
      icon: 'droplet',
      sections: [
        {
          title: 'दैनिक जल बचत की आदतें',
          content: [
            'ब्रश करते या हाथ धोते समय नल बंद रखें — इससे हर बार 10 लीटर तक पानी बचता है।',
            'नहाने के लिए शॉवर के बजाय बाल्टी का उपयोग करें — 5 मिनट के शॉवर में 45 लीटर पानी लगता है, जबकि बाल्टी में केवल 15-20 लीटर।',
            'टपकते नलों को तुरंत ठीक करें — एक टपकता नल साल में 10,000 लीटर से अधिक पानी बर्बाद कर सकता है!',
            'सब्जियों और फलों को बहते पानी के बजाय एक कटोरे में धोएं।'
          ]
        },
        {
          title: 'घर पर स्मार्ट जल उपयोग',
          content: [
            'वॉशिंग मशीन को पूरा भरकर ही चलाएं ताकि पानी बर्बाद न हो।',
            'सब्जियां धोने के बाद बचा पानी पौधों को पानी देने के लिए उपयोग करें।',
            'ड्राइववे और फुटपाथ साफ करने के लिए पाइप के बजाय झाड़ू का उपयोग करें।',
            'पीने का पानी मिट्टी के बर्तन (मटका) में रखें — यह बिना बिजली के पानी को प्राकृतिक रूप से ठंडा रखता है।'
          ],
          type: 'success'
        },
        {
          title: 'वर्षा जल संचयन',
          content: [
            'वर्षा जल संचयन बारिश के पानी को इकट्ठा करके बाद में उपयोग के लिए रखना है।',
            'सरल तरीका: मानसून के दौरान बारिश का पानी इकट्ठा करने के लिए छत की ड्रेनेज पाइप के नीचे एक साफ बैरल या टंकी रखें।',
            'इस पानी का उपयोग बागवानी, धुलाई और सफाई के लिए किया जा सकता है — जिससे म्यूनिसिपल सप्लाई पर निर्भरता कम होती है।',
            'कई शहर वर्षा जल संचयन प्रणाली वाले घरों को संपत्ति कर में छूट देते हैं।'
          ],
          type: 'info'
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'इनमें से कौन सबसे ज्यादा पानी बचाता है?',
        options: [
          { id: 'bucket', text: 'शॉवर के बजाय बाल्टी का उपयोग', isCorrect: true },
          { id: 'shorter', text: 'थोड़ा कम समय शॉवर लेना', isCorrect: false },
          { id: 'cold', text: 'गर्म के बजाय ठंडा पानी उपयोग करना', isCorrect: false }
        ],
        explanation: 'सही! बाल्टी उपयोग करने से शॉवर की तुलना में प्रति स्नान लगभग 25 लीटर पानी बचता है।'
      }
    },
    {
      id: 'budget-planning',
      category: 'household',
      title: 'बजट प्लानिंग',
      description: 'अपने मासिक घरेलू बजट की प्रभावी योजना बनाना सीखें।',
      icon: 'wallet',
      sections: [
        {
          title: 'बजट क्यों बनाएं?',
          content: [
            'बजट आपके पैसे की योजना है। यह आपको जानने में मदद करता है कि आपका पैसा कहाँ जा रहा है और महीने के अंत से पहले खत्म होने से बचाता है।',
            'बजट के बिना, छोटे अनियोजित खर्च (चाय, नाश्ता, ऑटो की सवारी) बड़ी रकम बन सकते हैं।'
          ]
        },
        {
          title: '50-30-20 नियम',
          content: [
            '50% जरूरतों के लिए: किराया, भोजन, बिजली, पानी, स्कूल फीस — वो चीजें जो आपको देनी ही हैं।',
            '30% चाहतों के लिए: बाहर खाना, मनोरंजन, नए कपड़े — वो चीजें जो आपको अच्छी लगती हैं लेकिन जिनके बिना जी सकते हैं।',
            '20% बचत के लिए: आपातकालीन फंड, FD, या RD — आपके भविष्य के लिए पैसे।',
            'उदाहरण: अगर आपकी आय ₹30,000 है → ₹15,000 जरूरतों के लिए, ₹9,000 चाहतों के लिए, ₹6,000 बचत के लिए।'
          ],
          type: 'info'
        },
        {
          title: 'अपने खर्चों को ट्रैक करना',
          content: [
            'दिन के अंत में हर खर्च लिखें, या GharSaathi Expense Tracker का उपयोग करें!',
            'अपने खर्चों को श्रेणीबद्ध करें — भोजन, परिवहन, बिल, मनोरंजन, आदि।',
            'महीने के अंत में समीक्षा करें कि आपका पैसा कहाँ गया। आप हैरान हो सकते हैं कि छोटे खर्च कितने बड़े हो जाते हैं!'
          ],
          type: 'success'
        },
        {
          title: 'बचत के सुझाव',
          content: [
            'छोटी रकम से भी बचत शुरू करें — ₹10 प्रतिदिन = ₹3,650 प्रति वर्ष।',
            'वेतन के दिन ऑटो-डेबिट से एक निश्चित राशि बचत खाते में ट्रांसफर करें।',
            'चाहतों पर खर्च करने से पहले 3 महीने के खर्च के बराबर आपातकालीन फंड बनाएं।',
            'खरीदने से पहले कीमतें तुलना करें — कई दुकानों में जांचें या ऑनलाइन मूल्य तुलना करें।'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: '50-30-20 नियम के अनुसार, अगर आपकी आय ₹40,000 है, तो आपको कितना बचाना चाहिए?',
        options: [
          { id: '4000', text: '₹4,000', isCorrect: false },
          { id: '8000', text: '₹8,000', isCorrect: true },
          { id: '12000', text: '₹12,000', isCorrect: false },
          { id: '20000', text: '₹20,000', isCorrect: false }
        ],
        explanation: 'सही! ₹40,000 का 20% = ₹8,000 बचत में जाना चाहिए। बाकी ₹20,000 जरूरतों के लिए और ₹12,000 चाहतों के लिए।'
      }
    }
  ],

  // ════════════════════════════════════════════════════════════
  //  MARATHI TRANSLATIONS
  // ════════════════════════════════════════════════════════════
  mr: [
    {
      id: 'smartphone-basics',
      category: 'digital',
      title: 'स्मार्टफोन बेसिक्स',
      description: 'स्मार्टफोन वापरण्याच्या आवश्यक गोष्टी शिका.',
      icon: 'smartphone',
      sections: [
        {
          title: 'ॲप्स म्हणजे काय?',
          content: ['ॲप्स (ॲप्लिकेशन्स) तुमच्या फोनवरील डिजिटल साधनांसारखे आहेत. जसे तुमच्याकडे कॅल्क्युलेटर किंवा कॅमेरा असतो, तसेच फोनवर त्यांच्यासाठी ॲप्स असतात.']
        },
        {
          title: 'इंटरनेटशी जोडणे',
          content: [
            'Wi-Fi: लोकल राउटरशी जोडते (सामान्यतः घरी किंवा ऑफिसमध्ये). हे सामान्यतः वेगवान आणि मोफत असते.',
            'मोबाइल डेटा: इंटरनेटशी जोडण्यासाठी तुमचे सिम कार्ड वापरते. यासाठी तुमचा डेटा प्लॅन वापरला जातो.'
          ]
        },
        {
          title: 'शेअरिंग आणि स्टोरेज',
          content: [
            'तुम्ही स्क्रीनशॉट घेऊ शकता (सामान्यतः Power + Volume Down दाबून) तुमच्या स्क्रीनवर जे आहे ते सेव्ह करण्यासाठी.',
            'तुमच्या फोनमध्ये मर्यादित स्टोरेज आहे. फोन सुरळीत चालू ठेवण्यासाठी जुने व्हिडिओ आणि फोटो डिलीट करा.'
          ]
        }
      ]
    },
    {
      id: 'upi-payments',
      category: 'digital',
      title: 'UPI आणि डिजिटल पेमेंट्स',
      description: 'सुरक्षितपणे पैसे कसे पाठवायचे आणि प्राप्त करायचे ते समजून घ्या.',
      icon: 'zap',
      sections: [
        {
          title: 'UPI म्हणजे काय?',
          content: ['UPI (युनिफाइड पेमेंट्स इंटरफेस) तुम्हाला फोन नंबर किंवा QR कोड स्कॅन करून तुमच्या बँक खात्यातून दुसऱ्या व्यक्तीला तात्काळ पैसे ट्रान्सफर करू देते. Google Pay, PhonePe आणि Paytm लोकप्रिय ॲप्स आहेत.']
        },
        {
          title: 'UPI कसे सेट करावे',
          content: [
            'चरण 1: Play Store वरून UPI ॲप (Google Pay, PhonePe, इ.) डाउनलोड करा.',
            'चरण 2: तुमचा मोबाईल नंबर नोंदणी करा (तोच जो तुमच्या बँक खात्याशी जोडलेला आहे).',
            'चरण 3: तुमची बँक निवडा आणि खाते सत्यापित करा.',
            'चरण 4: 4 किंवा 6 अंकी UPI पिन तयार करा. हा पिन लक्षात ठेवा — कधीही कोणाशी शेअर करू नका.'
          ],
          type: 'info'
        },
        {
          title: 'UPI सुरक्षेचा सुवर्ण नियम',
          type: 'warning',
          content: [
            'तुमचा UPI पिन कधीही कोणाशी शेअर करू नका. तुम्ही पैसे पाठवत असताना फक्त तेव्हाच पिन टाकावा लागतो. पैसे प्राप्त करण्यासाठी कधीही पिन टाकावा लागत नाही.',
            'कोणी तुम्हाला पैसे "प्राप्त करण्यासाठी" पिन टाकायला सांगत असेल, तर ती 100% फसवणूक आहे.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'कोणीतरी फोन करून सांगते: "₹500 चे बक्षीस मिळवण्यासाठी तुमचा UPI पिन टाका." हे सुरक्षित आहे का?',
        options: [
          { id: 'safe', text: 'सुरक्षित', isCorrect: false },
          { id: 'scam', text: 'फसवणूक (Scam)', isCorrect: true }
        ],
        explanation: 'ही फसवणूक आहे! पैसे मिळवण्यासाठी कधीही पिन टाकण्याची गरज नसते.'
      }
    },
    {
      id: 'whatsapp-basics',
      category: 'digital',
      title: 'WhatsApp बेसिक्स',
      description: 'मेसेजिंग, कॉल्स आणि कनेक्टेड राहण्यासाठी WhatsApp वापरणे शिका.',
      icon: 'message-circle',
      sections: [
        {
          title: 'WhatsApp सुरू करणे',
          content: [
            'WhatsApp हे एक मोफत मेसेजिंग ॲप आहे जे मेसेज, फोटो, व्हिडिओ पाठवण्यासाठी आणि व्हॉइस/व्हिडिओ कॉल करण्यासाठी इंटरनेट वापरते.',
            'Play Store किंवा App Store वरून WhatsApp डाउनलोड करा. तुमच्या फोन नंबरने नोंदणी करा, आणि तुम्ही तयार आहात!'
          ]
        },
        {
          title: 'मेसेज आणि मीडिया पाठवणे',
          content: [
            'टेक्स्ट मेसेज: तुमचा मेसेज टाइप करा आणि सेंड बटन (हिरवा बाण) दाबा.',
            'फोटो आणि व्हिडिओ: फोटो, व्हिडिओ किंवा डॉक्युमेंट पाठवण्यासाठी अटॅचमेंट आयकॉन (📎) दाबा.',
            'व्हॉइस मेसेज: व्हॉइस मेसेज रेकॉर्ड करण्यासाठी मायक्रोफोन आयकॉन दाबून ठेवा.',
            'व्हॉइस/व्हिडिओ कॉल: कोणालाही मोफत कॉल करण्यासाठी चॅटच्या वर फोन किंवा व्हिडिओ आयकॉन दाबा.'
          ]
        },
        {
          title: 'ग्रुप्स आणि स्टेटस',
          content: [
            'ग्रुप्स: तुम्ही कुटुंब किंवा मित्रांसोबत ग्रुप तयार करू शकता जेणेकरून सर्वांना एकाच वेळी मेसेज पाठवता येतील.',
            'स्टेटस: फोटो किंवा टेक्स्ट शेअर करा जे 24 तासांनंतर गायब होतात, कथेसारखे.'
          ]
        },
        {
          title: 'गोपनीयता आणि सुरक्षा सेटिंग्ज',
          type: 'warning',
          content: [
            'Settings → Privacy वर जा आणि कोण तुमचा प्रोफाइल फोटो, स्टेटस आणि "last seen" पाहू शकते ते नियंत्रित करा.',
            'अतिरिक्त सुरक्षिततेसाठी टू-स्टेप व्हेरिफिकेशन ऑन करा (Settings → Account → Two-step verification).',
            'WhatsApp वर प्राप्त OTP किंवा व्हेरिफिकेशन कोड कधीही कोणाशी शेअर करू नका.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'WhatsApp वर कोणी तुम्हाला SMS ने आलेला 6 अंकी कोड मागतो. तुम्ही शेअर करावे का?',
        options: [
          { id: 'yes', text: 'हो, त्यांना गरज असेल', isCorrect: false },
          { id: 'no', text: 'नाही, व्हेरिफिकेशन कोड कधीही शेअर करू नका', isCorrect: true }
        ],
        explanation: 'व्हेरिफिकेशन कोड कधीही शेअर करू नका! तो कोड तुमच्या WhatsApp अकाउंटमध्ये लॉगिन करण्यासाठी वापरला जातो. शेअर केल्यास कोणी तरी तुमचे अकाउंट ताब्यात घेऊ शकतो.'
      }
    },
    {
      id: 'google-maps-search',
      category: 'digital',
      title: 'Google सर्च आणि नकाशे',
      description: 'Google वापरून माहिती, ठिकाणे आणि दिशा शोधा.',
      icon: 'map',
      sections: [
        {
          title: 'Google सर्च वापरणे',
          content: [
            'Google सर्च हे इंटरनेटवर कोणतीही माहिती शोधण्याचे साधन आहे. तुमचा ब्राउझर उघडा आणि google.com वर जा, किंवा Google ॲप वापरा.',
            'तुम्हाला काय जाणून घ्यायचे आहे ते फक्त टाइप करा — जसे "आजचे हवामान", "जवळचे हॉस्पिटल", किंवा "डाळ कशी बनवायची" — आणि Search दाबा.',
            'सूचना: तुम्ही मायक्रोफोन आयकॉन दाबून कोणत्याही भाषेत बोलून व्हॉइस सर्च देखील करू शकता.'
          ]
        },
        {
          title: 'Google Maps सुरू करणे',
          content: [
            'Google Maps तुम्हाला ठिकाणे शोधण्यात आणि दिशा मिळवण्यात मदत करते. तुमच्या फोनवर Google Maps ॲप उघडा.',
            'निळा ठिपका तुमचे सध्याचे ठिकाण दर्शवतो. तुम्ही कोणतेही ठिकाण शोधू शकता — दुकाने, हॉस्पिटल, बस स्टॉप, इ.',
            'कार, बस, पायी किंवा ऑटोने कोणत्याही गंतव्यस्थानापर्यंत पावला-पावलाने नेव्हिगेशन मिळवण्यासाठी "Directions" दाबा.'
          ]
        },
        {
          title: 'उपयुक्त Maps वैशिष्ट्ये',
          type: 'success',
          content: [
            'जलद नेव्हिगेशनसाठी तुमचे घर आणि कामाचे पत्ते सेव्ह करा.',
            'जॅम टाळण्यासाठी प्रवास करण्यापूर्वी लाइव्ह ट्रॅफिक स्थिती तपासा.',
            'तुमच्या आजूबाजूला ATM, पेट्रोल पंप, फार्मसी आणि रेस्टॉरंट शोधण्यासाठी "Nearby" वापरा.',
            'खराब इंटरनेट असलेल्या भागांसाठी ऑफलाइन नकाशे डाउनलोड करा — प्रोफाइल → Offline maps वर जा.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'तुमच्या फोनवर जवळचे हॉस्पिटल शोधण्याचा सर्वात सुरक्षित मार्ग कोणता आहे?',
        options: [
          { id: 'google', text: 'Google Maps वर "जवळचे हॉस्पिटल" शोधा', isCorrect: true },
          { id: 'random', text: 'अज्ञात SMS मधील लिंकवर क्लिक करा', isCorrect: false },
          { id: 'forward', text: 'कोणत्याही WhatsApp ग्रुपमध्ये विचारा', isCorrect: false }
        ],
        explanation: 'Google Maps हा जवळच्या सेवा शोधण्याचा सर्वात सुरक्षित आणि विश्वासार्ह मार्ग आहे. अज्ञात लिंकवर क्लिक करणे टाळा कारण ते घोटाळे असू शकतात.'
      }
    },
    {
      id: 'email-basics',
      category: 'digital',
      title: 'ईमेल बेसिक्स',
      description: 'ईमेल अकाउंट कसे तयार करावे आणि वापरावे ते शिका.',
      icon: 'mail',
      sections: [
        {
          title: 'ईमेल म्हणजे काय?',
          content: [
            'ईमेल (इलेक्ट्रॉनिक मेल) हा डिजिटली पत्रे पाठवण्याचा आणि प्राप्त करण्याचा मार्ग आहे. अधिकृत संवाद, बिले प्राप्त करणे आणि ॲप्सवर अकाउंट तयार करण्यासाठी याचा वापर होतो.',
            'Gmail ही सर्वात लोकप्रिय ईमेल सेवा आहे. तुम्ही gmail.com वर मोफत अकाउंट तयार करू शकता.'
          ]
        },
        {
          title: 'Gmail अकाउंट तयार करणे',
          content: [
            'gmail.com वर जा आणि "Create account" वर टॅप करा.',
            'तुमचे नाव टाका आणि युझरनेम निवडा (हा तुमचा ईमेल पत्ता होईल, जसे yourname@gmail.com).',
            'एक मजबूत पासवर्ड तयार करा — अक्षरे, अंक आणि चिन्हांचे मिश्रण वापरा. लिहून ठेवा आणि सुरक्षित ठिकाणी ठेवा.',
            'पासवर्ड विसरल्यास अकाउंट रिकव्हर करण्यासाठी तुमचा फोन नंबर जोडा.'
          ],
          type: 'info'
        },
        {
          title: 'ईमेल पाठवणे आणि वाचणे',
          content: [
            'ईमेल पाठवण्यासाठी: "Compose" (पेन्सिल आयकॉन) दाबा, प्राप्तकर्त्याचा ईमेल पत्ता टाका, तुमचा मेसेज लिहा, आणि "Send" दाबा.',
            'ईमेल वाचण्यासाठी: Gmail ॲप उघडा. नवीन ईमेल तुमच्या "Inbox" मध्ये दिसतात. कोणताही ईमेल वाचण्यासाठी त्यावर टॅप करा.',
            'अटॅचमेंट: कम्पोझ करताना अटॅचमेंट आयकॉन दाबून तुम्ही फायली (फोटो, PDF, डॉक्युमेंट) अटॅच करू शकता.'
          ]
        },
        {
          title: 'स्पॅम आणि घोटाळ्यांपासून बचाव',
          type: 'warning',
          content: [
            'बक्षिसे, लॉटरी किंवा तातडीची कृती यांचे वचन देणारे अज्ञात पाठवणाऱ्यांचे ईमेल कधीही उघडू नका.',
            'संशयास्पद ईमेलमधील लिंकवर क्लिक करू नका. बँका आणि सरकार कधीही ईमेलद्वारे तुमचा पासवर्ड मागणार नाहीत.',
            'नको असलेले ईमेल "Spam" म्हणून चिन्हांकित करा जेणेकरून तुमचा इनबॉक्स स्वच्छ राहील.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'तुम्हाला ईमेल येतो: "तुमचे बँक अकाउंट ब्लॉक होईल. सत्यापित करण्यासाठी येथे क्लिक करा." तुम्ही काय करावे?',
        options: [
          { id: 'click', text: 'लगेच लिंकवर क्लिक करा', isCorrect: false },
          { id: 'delete', text: 'डिलीट करा — बँका असे ईमेल कधीही पाठवत नाहीत', isCorrect: true },
          { id: 'reply', text: 'तुमच्या अकाउंट तपशीलांसह उत्तर द्या', isCorrect: false }
        ],
        explanation: 'हा फिशिंग घोटाळा आहे! बँका कधीही ईमेलद्वारे लिंक क्लिक करायला किंवा तपशील शेअर करायला सांगत नाहीत. असे ईमेल डिलीट करा किंवा स्पॅम म्हणून चिन्हांकित करा.'
      }
    },
    {
      id: 'app-management',
      category: 'digital',
      title: 'ॲप मॅनेजमेंट',
      description: 'तुमच्या फोनवर ॲप्स इन्स्टॉल, अपडेट आणि मॅनेज करणे शिका.',
      icon: 'layout-grid',
      sections: [
        {
          title: 'Play Store वरून ॲप्स इन्स्टॉल करणे',
          content: [
            'Play Store (Android) किंवा App Store (iPhone) हे ॲप्स डाउनलोड करण्याचे अधिकृत ठिकाण आहे.',
            'Play Store उघडा, तुम्हाला हवे असलेले ॲप शोधा (जसे "WhatsApp" किंवा "Google Pay"), आणि "Install" दाबा.',
            'नेहमी अधिकृत स्टोअरमधून ॲप्स डाउनलोड करा — SMS किंवा WhatsApp वरून पाठवलेल्या अज्ञात लिंकवरून कधीही ॲप्स इन्स्टॉल करू नका.'
          ]
        },
        {
          title: 'ॲप्स अपडेट करणे',
          content: [
            'ॲप अपडेट बग्स दुरुस्त करतात आणि नवीन वैशिष्ट्ये जोडतात. तुमचे ॲप्स अपडेट ठेवणे महत्त्वाचे आहे.',
            'Play Store उघडा → तुमचा प्रोफाइल आयकॉन दाबा → "Manage apps & device" → "Update all".',
            'तुम्ही ऑटोमॅटिक अपडेट चालू करू शकता जेणेकरून Wi-Fi ला कनेक्ट झाल्यावर ॲप्स स्वतः अपडेट होतील.'
          ],
          type: 'info'
        },
        {
          title: 'ॲप परवानग्या (Permissions) समजून घेणे',
          type: 'warning',
          content: [
            'तुम्ही ॲप इन्स्टॉल करता तेव्हा ते कॅमेरा, मायक्रोफोन, लोकेशन, किंवा कॉन्टॅक्ट्स सारख्या परवानग्या मागू शकते.',
            'फक्त योग्य वाटणाऱ्या परवानग्या द्या. उदाहरण: कॅमेरा ॲपला कॅमेरा एक्सेस हवा, पण कॅल्क्युलेटर ॲपला तुमच्या कॉन्टॅक्ट्सची गरज नाही.',
            'तुम्ही कधीही परवानग्या बदलू शकता: Settings → Apps → ॲप निवडा → Permissions.'
          ]
        },
        {
          title: 'फोन स्टोरेज मॅनेज करणे',
          content: [
            'तुमचा फोन हळू चालत असेल, तर स्टोरेज कमी असू शकते.',
            'वापरात नसलेले ॲप्स डिलीट करा. Settings → Apps → ॲप निवडा → Uninstall वर जा.',
            'ॲप कॅशे साफ करा: Settings → Apps → ॲप निवडा → Storage → Clear Cache.',
            'जागा मोकळी करण्यासाठी फोटो आणि व्हिडिओ Google Photos मध्ये हलवा (मर्यादेपर्यंत मोफत बॅकअप).'
          ],
          type: 'success'
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'एक मित्र तुम्हाला WhatsApp वर APK फाइल पाठवतो आणि इन्स्टॉल करायला सांगतो. तुम्ही काय करावे?',
        options: [
          { id: 'install', text: 'लगेच इन्स्टॉल करा', isCorrect: false },
          { id: 'search', text: 'त्याऐवजी Play Store वर ॲप शोधा', isCorrect: true },
          { id: 'ignore', text: 'इन्स्टॉल करा पण सर्व परवानग्या नाकारा', isCorrect: false }
        ],
        explanation: 'नेहमी अधिकृत Play Store किंवा App Store वरून ॲप्स इन्स्टॉल करा. अज्ञात स्रोतांकडून APK फायलींमध्ये व्हायरस किंवा मालवेअर असू शकतो जो तुमचा डेटा चोरू शकतो.'
      }
    },
    {
      id: 'electricity-saving',
      category: 'household',
      title: 'वीज व्यवस्थापन',
      description: 'वीज बिल कमी करण्यासाठी सोप्या टिप्स.',
      icon: 'zap',
      sections: [
        {
          title: 'दैनंदिन सवयी',
          content: [
            'खोलीतून बाहेर पडताना पंखे आणि दिवे बंद करा.',
            'दिवसा बल्ब ऐवजी नैसर्गिक सूर्यप्रकाशाचा वापर करा.',
            'वापरात नसताना चार्जर आणि टीव्ही सारख्या उपकरणांचे प्लग काढा — ते स्टँडबायमध्ये देखील वीज वापरतात.'
          ]
        },
        {
          title: 'स्मार्ट निवडी',
          type: 'success',
          content: [
            'LED बल्ब वापरा — ते 80% कमी वीज वापरतात आणि खूप जास्त काळ टिकतात.',
            'तुमच्या AC चे तापमान 24°C वर ठेवा — प्रत्येक अंश कमी केल्यास वीज वापर 6% ने वाढतो.',
            'नवीन पंखे, AC किंवा फ्रिज घेताना 5-स्टार रेटेड उपकरण घ्या.'
          ]
        },
        {
          title: 'वीज बिल वाचणे',
          content: [
            'तुमचे वीज बिल "युनिट" (kWh) मध्ये वापर दर्शवते.',
            'तुमचा मासिक वापर ट्रॅक करा. अचानक वाढला तर सदोष वायरिंग किंवा उपकरणे तपासा.',
            'उशिरा भरणा शुल्क टाळण्यासाठी बिल वेळेत भरा. तुम्ही Google Pay किंवा PhonePe सारख्या UPI ॲप्सने पेमेंट करू शकता.'
          ],
          type: 'info'
        }
      ]
    },
    {
      id: 'waste-management',
      category: 'household',
      title: 'कचरा व्यवस्थापन',
      description: 'दैनंदिन कचरा योग्यरित्या कसा वेगळा करायचा ते शिका.',
      icon: 'home',
      sections: [
        {
          title: 'ओला कचरा (Biodegradable)',
          content: [
            'अन्नाचे तुकडे, भाज्यांची साले, फळांची साल आणि उरलेले अन्न.',
            'याचा उपयोग खत तयार करण्यासाठी होऊ शकतो — स्वयंपाकघरातील कचऱ्याचे रोपांसाठी नैसर्गिक खतामध्ये रूपांतर.'
          ]
        },
        {
          title: 'सुका कचरा (Recyclable)',
          content: [
            'कागद, प्लास्टिकच्या बाटल्या, गत्ता आणि स्वच्छ पॅकेजिंग.',
            'हा वेगळा ठेवा जेणेकरून रिसायकल करता येईल. सुक्या कचऱ्याच्या डब्यात टाकण्यापूर्वी कंटेनर्स धुवा.'
          ]
        },
        {
          title: 'धोकादायक कचरा',
          type: 'warning',
          content: [
            'बॅटऱ्या, औषधे, तुटलेली काच, आणि ई-कचरा (जुने फोन, चार्जर).',
            'हे कधीही सामान्य कचऱ्यात मिसळू नका. नियुक्त संकलन केंद्रांवर न्या.',
            'जुनी औषधे फार्मसीमध्ये परत करा किंवा योग्यरित्या विल्हेवाट लावा — कधीही फ्लश करू नका.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'केळ्याचे साल कुठे टाकावे?',
        options: [
          { id: 'wet', text: 'ओला कचरा', isCorrect: true },
          { id: 'dry', text: 'सुका कचरा', isCorrect: false },
          { id: 'hazardous', text: 'धोकादायक कचरा', isCorrect: false }
        ],
        explanation: 'बरोबर! केळ्याचे साल सेंद्रिय आणि बायोडिग्रेडेबल असते, त्यामुळे ते ओल्या कचऱ्यात जाते आणि खत तयार करता येते.'
      }
    },
    {
      id: 'water-conservation',
      category: 'household',
      title: 'जल संवर्धन',
      description: 'पाणी वाचवण्यासाठी आणि पाण्याचे बिल कमी करण्यासाठी व्यावहारिक टिप्स.',
      icon: 'droplet',
      sections: [
        {
          title: 'दैनंदिन पाणी बचत सवयी',
          content: [
            'ब्रश करताना किंवा हात साबणाने धुताना नळ बंद ठेवा — यामुळे प्रत्येक वेळी 10 लिटरपर्यंत पाणी वाचते.',
            'आंघोळीसाठी शॉवरऐवजी बादली वापरा — 5 मिनिटांच्या शॉवरमध्ये 45 लिटर पाणी लागते, तर बादलीत फक्त 15-20 लिटर.',
            'गळणारे नळ लगेच दुरुस्त करा — एक गळणारा नळ वर्षाला 10,000 लिटरपेक्षा जास्त पाणी वाया घालवू शकतो!',
            'भाज्या आणि फळे वाहत्या पाण्याखाली ऐवजी एका भांड्यात धुवा.'
          ]
        },
        {
          title: 'घरी स्मार्ट पाणी वापर',
          content: [
            'वॉशिंग मशीन पूर्ण भरल्यावरच चालवा जेणेकरून पाणी वाया जाणार नाही.',
            'भाज्या धुतल्यानंतरचे पाणी रोपांना पाणी देण्यासाठी वापरा.',
            'ड्राइव्हवे आणि फुटपाथ स्वच्छ करण्यासाठी पाइपऐवजी झाडू वापरा.',
            'पिण्याचे पाणी मातीच्या भांड्यात (मटका) ठेवा — ते विजेशिवाय पाणी नैसर्गिकरित्या थंड ठेवते.'
          ],
          type: 'success'
        },
        {
          title: 'पावसाचे पाणी साठवणे',
          content: [
            'पावसाचे पाणी साठवणे म्हणजे पावसाचे पाणी गोळा करून नंतर वापरण्यासाठी ठेवणे.',
            'सोपा मार्ग: पावसाळ्यात पावसाचे पाणी गोळा करण्यासाठी छताच्या ड्रेनेज पाइपखाली एक स्वच्छ बॅरल किंवा टाकी ठेवा.',
            'हे पाणी बागकाम, धुलाई आणि स्वच्छतेसाठी वापरता येते — ज्यामुळे म्हणिसिपल पुरवठ्यावरील अवलंबित्व कमी होते.',
            'अनेक शहरे पावसाचे पाणी साठवण्याची प्रणाली असलेल्या घरांना मालमत्ता करात सूट देतात.'
          ],
          type: 'info'
        }
      ],
      interactive: {
        type: 'quiz',
        question: 'यापैकी कोणते सर्वात जास्त पाणी वाचवते?',
        options: [
          { id: 'bucket', text: 'शॉवरऐवजी बादली वापरणे', isCorrect: true },
          { id: 'shorter', text: 'थोडा कमी वेळ शॉवर घेणे', isCorrect: false },
          { id: 'cold', text: 'गरम ऐवजी थंड पाणी वापरणे', isCorrect: false }
        ],
        explanation: 'बरोबर! बादली वापरल्याने शॉवरच्या तुलनेत प्रत्येक आंघोळीत अंदाजे 25 लिटर पाणी वाचते.'
      }
    },
    {
      id: 'budget-planning',
      category: 'household',
      title: 'बजेट प्लॅनिंग',
      description: 'तुमच्या मासिक घरगुती बजेटचे प्रभावी नियोजन करणे शिका.',
      icon: 'wallet',
      sections: [
        {
          title: 'बजेट का बनवावे?',
          content: [
            'बजेट म्हणजे तुमच्या पैशांची योजना. हे तुम्हाला तुमचे पैसे कुठे जात आहेत हे जाणून घेण्यास आणि महिन्याच्या शेवटी संपण्यापासून टाळण्यास मदत करते.',
            'बजेटशिवाय, लहान अनियोजित खर्च (चहा, नाश्ता, ऑटो भाडे) मिळून मोठी रक्कम होऊ शकते.'
          ]
        },
        {
          title: '50-30-20 नियम',
          content: [
            '50% गरजांसाठी: भाडे, अन्न, वीज, पाणी, शाळेची फी — ज्या गोष्टी भरणे आवश्यक आहे.',
            '30% इच्छांसाठी: बाहेर खाणे, मनोरंजन, नवीन कपडे — ज्या गोष्टी आवडतात पण त्यांशिवाय जगता येते.',
            '20% बचतीसाठी: आणीबाणी निधी, FD, किंवा RD — भविष्यासाठी पैसे.',
            'उदाहरण: तुमचे उत्पन्न ₹30,000 असेल तर → ₹15,000 गरजांसाठी, ₹9,000 इच्छांसाठी, ₹6,000 बचतीसाठी.'
          ],
          type: 'info'
        },
        {
          title: 'तुमच्या खर्चांचा मागोवा',
          content: [
            'दिवसाच्या शेवटी प्रत्येक खर्च लिहून ठेवा, किंवा GharSaathi Expense Tracker वापरा!',
            'तुमचे खर्च श्रेणीनुसार वर्गीकृत करा — अन्न, वाहतूक, बिले, मनोरंजन, इ.',
            'महिन्याच्या शेवटी तुमचे पैसे कुठे गेले ते पुनरावलोकन करा. लहान खर्च किती मोठे होतात हे पाहून तुम्ही आश्चर्यचकित व्हाल!'
          ],
          type: 'success'
        },
        {
          title: 'बचत टिप्स',
          content: [
            'लहान रकमेपासूनही बचत सुरू करा — ₹10 प्रतिदिन = ₹3,650 प्रति वर्ष.',
            'पगाराच्या दिवशी ऑटो-डेबिटने ठराविक रक्कम बचत खात्यात ट्रान्सफर करा.',
            'इच्छांवर खर्च करण्यापूर्वी 3 महिन्यांच्या खर्चाइतका आणीबाणी निधी तयार करा.',
            'खरेदी करण्यापूर्वी किमती तुलना करा — अनेक दुकानांमध्ये तपासा किंवा ऑनलाइन किंमत तुलना करा.'
          ]
        }
      ],
      interactive: {
        type: 'quiz',
        question: '50-30-20 नियमानुसार, तुमचे उत्पन्न ₹40,000 असेल तर तुम्ही किती बचत करावी?',
        options: [
          { id: '4000', text: '₹4,000', isCorrect: false },
          { id: '8000', text: '₹8,000', isCorrect: true },
          { id: '12000', text: '₹12,000', isCorrect: false },
          { id: '20000', text: '₹20,000', isCorrect: false }
        ],
        explanation: 'बरोबर! ₹40,000 चे 20% = ₹8,000 बचतीत जावे. उरलेले ₹20,000 गरजांसाठी आणि ₹12,000 इच्छांसाठी.'
      }
    }
  ]
};
