<div align="center">
  <h1>🏠 GharSaathi</h1>
  <p><b>Learn. Manage. Live Better.</b></p>
  <p><i>A comprehensive multilingual digital companion designed to improve digital literacy and household management.</i></p>
  
  <p>
    <a href="https://vedantbakre.github.io/gharsaathi"><img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-blue?style=for-the-badge" alt="Live Demo" /></a>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS v4" />
  </p>
</div>

---

## 🎯 About The Project

**GharSaathi** is a multilingual web application built as a college project for **CEFP (Community Engagement and Field Project)**. Its core theme is combating digital illiteracy and promoting better household management through a **"Learn → Understand → Practice → Apply"** philosophy.

The platform is designed to be accessible, intuitive, and welcoming for users of all technical skill levels—especially parents, elder family members, and those new to smartphones and digital services.

🌐 **Live Demo:** [https://vedantbakre.github.io/gharsaathi](https://vedantbakre.github.io/gharsaathi)

## ✨ Features

### 📚 10 Interactive Lessons (Digital & Household)

**Digital Life:**
- 📱 Smartphone Basics — Apps, internet, screenshots, storage
- 💸 UPI & Digital Payments — Setup, usage, and safety
- 💬 WhatsApp Basics — Messaging, calls, groups, privacy
- 🗺️ Google Search & Maps — Finding info, navigation, offline maps
- 📧 Email Basics — Creating Gmail, sending emails, avoiding spam
- 📲 App Management — Installing, updating, permissions, storage

**Home Life:**
- ⚡ Electricity Management — Daily habits, LED vs bulb, bill reading
- 🗑️ Waste Management — Wet, dry, hazardous waste segregation
- 💧 Water Conservation — Daily savings, rainwater harvesting
- 💰 Budget Planning — 50-30-20 rule, expense tracking, saving tips

### 🛡️ Interactive Scam Simulator
- **10 real-world scam/safe scenarios** — KYC fraud, fake UPI requests, WhatsApp OTP scams, government scheme fraud, work-from-home scams
- Identify SMS, WhatsApp, and Email threats in a safe learning environment
- Red flags highlighted with detailed explanations

### 🛠️ Household Management Dashboard
- **Expense Tracker:** Log categorized expenses and view spending
- **Grocery List:** Add items and cross them off as you shop
- **Task Manager:** Prioritize household chores (High, Normal, Low)
- **Persistent Storage:** All data saved in `localStorage` (no account needed!)

### 🌍 Accessibility & UX
- **Multilingual Support:** English, Hindi, and Marathi (full translation parity)
- **Dark & Light Mode:** System theme detection + manual toggle
- **Font Size Controls:** A-/A/A+/A++ for elder users and accessibility
- **Responsive Design:** Mobile, tablet, and desktop optimized
- **Dynamic Page Titles:** Each page updates the browser tab
- **Scroll-to-Top:** Automatic on navigation
- **Progress Tracking:** Visual progress bar on Learn page
- **Animations:** Smooth micro-interactions via Framer Motion

### 🔗 12 Curated Resources
- Emergency numbers (112, Women Helpline 181, Child Helpline 1098)
- Government portals (DigiLocker, UMANG, MyGov, UIDAI, Cyber Crime)
- Digital tools (IRCTC, Google Maps, BHIM UPI)

## 💻 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite 8** | Build Tool |
| **Tailwind CSS v4** | Styling |
| **React Router v7** | Routing (HashRouter) |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **localStorage** | Client-side persistence |

## 📁 Project Structure

```
src/
├── assets/              # Static assets
├── components/
│   ├── manage/          # Extracted dashboard sub-components
│   │   ├── DashboardTab.tsx
│   │   ├── ExpensesTab.tsx
│   │   ├── GroceriesTab.tsx
│   │   └── TasksTab.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx       # Nav + theme toggle + language + font size
│   └── ScrollToTop.tsx  # Auto-scroll on route change
├── contexts/
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── hooks/
│   └── useDocumentTitle.ts  # Dynamic page titles
├── i18n/
│   ├── lessons.ts       # 10 lessons × 3 languages
│   ├── resources.ts     # 12 resources × 3 languages
│   ├── safety.ts        # 10 scenarios × 3 languages
│   └── translations.ts  # UI strings × 3 languages
├── pages/
│   ├── Home.tsx
│   ├── Learn.tsx        # Progress visualization
│   ├── LessonDetail.tsx
│   ├── Manage.tsx
│   ├── NotFound.tsx     # 404 page
│   ├── Resources.tsx
│   └── Safety.tsx
├── utils/
│   └── storage.ts       # localStorage abstraction
├── App.tsx
├── index.css
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VedantBakre/gharsaathi.git
   cd gharsaathi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 🌐 Deployment

GharSaathi is a static site deployed on **GitHub Pages** via GitHub Actions.

To build manually:
```bash
npm run build
```
Output in `dist/`.

## 📄 License

MIT License — free for educational and personal use.

## 👨‍💻 Creator

**Created by Vedant Bakre**  
Email: [vedantbakre@gmail.com](mailto:vedantbakre@gmail.com)

*Made as a CEFP Community Engagement & Field Project.*
