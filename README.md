# Tatra Banka x Kickresume Career Match Prototype

A high-fidelity prototype simulating a collaboration between Tatra Banka and Kickresume for career matching. This is a "Smoke & Mirrors" demo with hardcoded dummy data that simulates complex backend logic through frontend animations and state management.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)

## Getting Started

```bash
cd tatra-banka-prototype
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

✅ **Job Listing Page** - Two-column layout (70/30) with job cards
✅ **Career Coach Card** - Sticky card on the right with "Analyze my Match" CTA
✅ **CV Upload Modal** - Supports file upload or LinkedIn URL input
✅ **10-Second Loading Animation** - Cycles through analysis states with progress bar
✅ **Results View** - Jobs re-ordered by match score after analysis
✅ **Match Score Badges** - Color-coded (Green/Yellow/Gray) for each job
✅ **Accordion Expansion** - Click jobs to see AI insights and skills gap analysis
✅ **Skills Recommendations** - Shows matched skills, missing skills, and upskilling advice

## Project Structure

```
tatra-banka-prototype/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main job listing page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── CareerCoachCard.tsx # Sticky career coach card
│   ├── JobCard.tsx         # Individual job card with accordion
│   └── AnalyzeModal.tsx    # CV upload modal with loading animation
├── data/
│   └── jobs.ts             # Dummy job data with match scores
└── ...
```

## Design Notes

- **Color Palette**: Tatra Banka Black (#000000), Gray (#333333), Blue (#0056b3), Kickresume Teal (#00CED1)
- **Typography**: Inter/Roboto (clean sans-serif)
- **Vibe**: Premium, clean, minimalist, corporate but human
- **Match Scores**: Green (≥80%), Yellow (60-79%), Gray (<60%)

## How It Works

1. User clicks "Analyze my Match" on the Career Coach card
2. Modal opens asking for CV upload or LinkedIn URL
3. After submission, a 10-second loading animation plays
4. Jobs are automatically re-ordered by match score (Data Analyst moves to top)
5. Match scores appear on all job cards
6. Users can expand jobs to see detailed AI insights and recommendations
