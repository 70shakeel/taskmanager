# Task Manager App

A mobile-responsive Task Manager App built with Next.js 14 to demonstrate drag-and-drop functionality and responsive design.

This project is a showcase for a Frontend Developer's portfolio, demonstrating skills in React, Next.js 14, Tailwind CSS, and modern JavaScript.

## Features

- A Kanban board with three columns: "To Do", "In Progress", "Done".
- A form to add new tasks (title, description).
- Drag-and-drop tasks between columns.
- Tasks are persisted in the browser's localStorage.
- A button to clear all tasks.
- Mobile-first, responsive design that works on mobile, tablet, and desktop.
- Uses Server Components for the main page and Client Components for interactive features.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- `@hello-pangea/dnd` (for drag-and-drop)
- `use-local-storage-state` (for localStorage management)

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Run the development server**:

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mobile Responsiveness Notes

- On mobile devices, the Kanban board columns collapse into a single scrollable list with tabs to switch between "To Do", "In Progress", and "Done".
- Drag-and-drop is touch-friendly with larger tap targets for task cards.
- The layout is built with responsive Tailwind CSS classes (e.g., `sm:`, `md:`, `lg:`) to adapt from a stacked mobile view to a grid-based desktop view.
- Form inputs and buttons are designed to be large enough for easy use on mobile, with a minimum touch target size of 48px.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
