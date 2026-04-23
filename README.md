# CivicConnect - Crowdsourced Civic Issue Reporting System

CivicConnect is a modern, production-ready platform where citizens can report civic issues and authorities can manage and resolve them efficiently.

## Project Structure

The project is structured as a monorepo with three core components:

### 1. `backend/` (Node.js + Express)
- Handles core business logic, user auth, and API routing.
- Uses MongoDB for persistence.
- Features a mock AI analyzer (`mockAI.js`) for smart routing and priority assignment based on NLP rules.

**To run:**
```bash
cd backend
npm install
npm run start # or node server.js
```

### 2. `admin-web/` (React + Vite + TailwindCSS)
- Premium dark-themed dashboard for authorities.
- Provides analytics, live issue feeds, and KPI tracking.
- Styled with TailwindCSS and Lucide-React icons.

**To run:**
```bash
cd admin-web
npm install
npm run dev
```

### 3. `mobile-app/` (React Native Expo)
- Cross-platform mobile app for citizens.
- Glassmorphism design elements and fluid navigation.
- Features Gamification, Issue Feeds, and a Reporting Flow.

**To run:**
```bash
cd mobile-app
npx expo start
```

## Setup Instructions

1. Ensure you have Node.js (v18+) installed.
2. In `backend/`, create a `.env` file containing:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/civicconnect
   JWT_SECRET=your_jwt_secret
   ```
3. Start the Backend server first.
4. Launch the Admin Web UI or the Mobile App simultaneously. 

## Features Integrated

- **Smart Routing**: Based on tags (e.g. "potholes", "streetlights") and urgency keywords ("danger", "leak"), the backend assigns issues to respective logic blocks.
- **Premium UI**: Admin uses dark mode + Recharts data visualization. Mobile adopts a sleek map-less UI with a clean timeline and feed.
- **Multi-Role Authentication**: Ready schema for "citizen", "admin", and "department_staff".
