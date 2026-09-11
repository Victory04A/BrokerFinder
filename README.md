# BrokerFinder

A React application for finding and connecting with trusted brokers in real estate, insurance, and finance.

## Features

- **Broker Search** – Find brokers by specialty, location, or name
- **Top Rated Brokers** – Browse a grid of vetted, verified professionals
- **Responsive Layout** – Header, footer, and Tailwind design system
- **Reusable Components** – Button, Input, BrokerCard, Layout, and more

## Tech Stack

- [React 19](https://react.dev) with [Vite 8](https://vite.dev)
- [React Router 7](https://reactrouter.com)
- [Tailwind CSS 3](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)
- [Axios](https://axios-http.com) (for future API integration)
- [React Query](https://tanstack.com/query)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

| Script    | Description                     |
| --------- | ------------------------------- |
| `npm run dev`     | Start the Vite dev server     |
| `npm run build`   | Build for production          |
| `npm run preview` | Preview the production build  |
| `npm run lint`    | Run ESLint                    |

## Project Structure

```
src/
├── components/
│   ├── common/        # Shared UI (Button, Input)
│   ├── brokers/       # BrokerCard
│   └── layout/        # Header, Footer, Layout
├── pages/
│   ├── Home.jsx       # Main landing page
│   └── ...            # Additional pages
├── layouts/           # Admin/Broker/Client layout shells
├── data/              # Sample data
├── App.jsx            # App entry with routing
└── main.jsx           # React bootstrap
```

## Status

Active development. Historical pages and layouts exist under `pages/` and `layouts/` but are not yet wired into the router.