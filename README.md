# Meet UI Proto

> A polished meeting-operations interface prototype covering event campaigns, meetings, reports, calendars, contacts, documents, and AI-notes workflows.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)](https://motion.dev/)

## Live Demo

🚀 [Open the production deployment](https://meet-ui-proto-m3v9bsj7k-ravels-projects-13eaae80.vercel.app)

## Overview

Meet UI Proto is a front-end product prototype for an end-to-end meeting workflow.

The application is organized around three high-level stages:

**Invite → Conduct → Distribute**

That workflow is reflected in the navigation and the sample product surfaces, from campaign registration through meetings and finally to reports, documents, and AI-assisted notes.

## Product Areas

### Home

The dashboard acts as the operational overview for the meeting pipeline and surfaces sample metrics such as:

- active campaigns
- confirmed registrants
- no-show rate
- generated reports

It also exposes the main Invite / Conduct / Distribute workflow.

### Campaigns

The Campaigns view models event and meeting registration flows with sample data for:

- connected forms
- registration counts
- confirmations
- attendance
- email activity
- call activity
- campaign status

### Meet

The meeting view is the central live-session surface of the prototype.

It is designed around the idea of a meeting workspace where live activity can feed later reporting and documentation.

### Reports

The Reports area models post-meeting documentation with:

- meeting summaries
- decisions
- action items
- keywords
- export formats such as PDF, HTML, and DOCX

### Calendar

A weekly calendar layout presents meetings and attendees across a working-day schedule.

### Contacts

The Contacts view contains sample participants with:

- role
- email
- availability/status
- favorites

### Documents

The document center supports multiple document types in the prototype, including:

- documents
- spreadsheets
- slides
- PDFs
- recordings

### AI Notes

The AI Notes experience models a meeting intelligence workflow around:

- meeting metadata
- summary
- highlights
- action items
- ownership
- completion state

## UI Architecture

The application switches between product surfaces from a shared shell:

\`\`\`text
TopBar
└── Sidebar
    └── Active product view
        ├── Home
        ├── Campaigns
        ├── Meet
        ├── Reports
        ├── Calendar
        ├── Contacts
        ├── Documents
        └── AI Notes
\`\`\`

The shell stays mounted while the active product view changes.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Data Model

The prototype intentionally keeps the product content in typed front-end data structures.

The data layer currently models entities such as:

- calendar events
- contacts
- documents
- campaigns
- registrants
- meeting reports
- AI-note highlights
- action items
- dashboard statistics

This makes the UI easy to prototype without coupling it to a backend service.

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install dependencies

\`\`\`bash
npm install
\`\`\`

### Start development

\`\`\`bash
npm run dev
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

### Lint

\`\`\`bash
npm run lint
\`\`\`

## Important Note

This repository is a **product/UI prototype**.

The screens model workflows and interactions using front-end state and sample data. The repository does not currently implement the complete backend infrastructure that a production meeting platform would require (authentication, persistence, real media transport, email/voice providers, document storage, or production AI pipelines).

That distinction is intentional: the goal here is to explore the product surface and interaction model.

## Project Structure

\`\`\`text
src/
├── components/
├── pages/
├── data/
├── hooks/
└── App.tsx
\`\`\`

## License

No explicit open-source license is currently defined in the repository.

---

A front-end exploration of what a modern meeting-operations workspace could feel like.