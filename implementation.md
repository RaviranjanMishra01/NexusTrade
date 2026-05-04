# 📌 NexusTrade - Implementation Details

## 🧠 Overview
NexusTrade is a trading dashboard built using Next.js (App Router) with modular component architecture and real-time UI updates.

---

## ⚙️ Tech Stack
- Frontend: Next.js 14 (App Router)
- Styling: CSS / Tailwind (if used)
- State Management: React Hooks
- Animations: Custom hooks (useCountUp)
- Assets: Static images (public folder)

---

## 📁 Folder Structure
```js
nexus-trade/
│
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── ui/
│   │   ├── ButtonUI.jsx
│   │   ├── FeatureCard.jsx
│   │   └── States.jsx
│   │
│   ├── Banner.jsx
│   ├── Features.jsx
│   ├── HeroPage.jsx
│   ├── MarketTable.jsx
│   ├── Navbar.jsx
│   └── Stats.jsx   
│
├── hook/   
│   └── useCountUp.js
│
├── hooks/  
│   └── useCountUp.js
│
├── public/
│   ├── images/      
│   │   └── placeholder-user.jpg
│
├── styles/          
│
├── docs/            
│   ├── implementation.md
│   └── update.md
│
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
```
---

## 🔧 Core Features Implementation

### 1. Hero Section
- File: `HeroPage.jsx`
- Dynamic UI with highlighted text (Fast, Grow, Win)
- CTA button with gradient styling

---

### 2. Navbar
- File: `Navbar.jsx`
- Sticky navigation
- Includes Login & Get Started buttons

---

### 3. Market Table
- File: `MarketTable.jsx`
- Displays crypto/stock data
- Simulated live updates (UI-based)

---

### 4. Animated Stats
- File: `useCountUp.js`
- Custom hook for increment animation

```js
const current = Math.min((progress / duration) * end, end);