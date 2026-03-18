🚀 Developer Portal (Next.js)

A modern developer portal prototype built with Next.js, React, and TypeScript, designed to demonstrate scalable frontend architecture, role-based UI, and component-driven development.

This project simulates a platform where developers can access dashboards, tools, and administrative features in a structured and extensible way.

✨ Features

Authentication structure using JWT (jose)

Role-based UI

Dashboard and admin-style interfaces

Reusable component-based architecture

Built with Next.js App Router

Testing setup with Vitest and React Testing Library

🏗️ Tech Stack

Next.js 16

React 19

TypeScript

Tailwind CSS v4

ShadCN UI

Radix UI

jose

Vitest

React Testing Library

🧠 Architecture & Approach

This project focuses on structuring a scalable frontend application rather than only building isolated pages.

Key principles:

Component-driven design

Separation of layout, UI, and logic

Role-based rendering patterns

Reusable UI components

Scalable folder structure

Example structure:

/app
/dashboard
/login
/admin
/components
/ui
/layout
/lib
/auth
🔐 Authentication

Authentication is implemented as a lightweight JWT-based approach using cookies.

This setup is intended as a foundation and can be extended to support:

Auth.js / NextAuth

Azure AD / Auth0

External identity providers

🧪 Testing

Basic test setup using:

Vitest

React Testing Library

Focus:

component rendering

UI behavior

🚀 Getting Started
npm install
npm run dev

Build and run production:

npm run build
npm run start

Run tests:

npm run test

📌 Current Status

This project is currently focused on architecture, structure, and frontend patterns.

Areas planned for further improvement include:

mobile responsiveness

visual polish

accessibility

more complete authentication flows

🔮 Future Improvements

Full mobile responsiveness

Improved UI/UX and design consistency

Real authentication and authorization flows

Backend/API integration

Accessibility improvements

End-to-end testing with Playwright

Expanded dashboard functionality

👩‍💻 Author

Neda Jahadi
Frontend-heavy Fullstack Developer
React • TypeScript • Next.js

# Developer Portal (Next.js)

🔗 Live Demo: https://developer-portal-oy5qsfkwv-neda-jahadis-projects.vercel.app/
