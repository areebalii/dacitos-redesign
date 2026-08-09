
```markdown
# Dacitos Technologies — Corporate Web Platform

A high-performance, modern web application built for **Dacitos Technologies Pvt Ltd**, showcasing core engineering services, dynamic service detail views, an interactive project showcase, and a client-facing AI support assistant.

![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Tailwind%20%7C%20Framer%20Motion-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Key Features

- **Dynamic Service Architecture**: Comprehensive overview of core services (`/services`) with deep-linking support (`#web-development`, `#mobile-apps`, etc.) and dedicated service detail routes (`/services/:serviceId`).
- **Interactive AI Support Assistant**: A frontend-driven interactive chatbot widget with intent pattern matching, fast suggestion chips, and quick action toolbars.
- **Enhanced UX Navigation**: Automatic scroll restoration on route changes via `ScrollToTop` component, plus full deep-link hash scrolling support.
- **Fluid Layout & Animations**: Built using Framer Motion for scroll progress indicators, interactive cards, drawer menus, and smooth transitions.
- **Fully Responsive**: Crafted with Tailwind CSS using a dark tech aesthetic (`#07080E`) optimized across desktop, tablet, and mobile views.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 (via Vite)
- **Routing**: React Router v6 / v7
- **Styling & UI**: Tailwind CSS, Lucide React Icons
- **Animations**: Framer Motion
- **Language**: JavaScript (ES6+)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx           # Main navigation bar with desktop dropdowns & mobile drawer
│   │   └── Footer.jsx           # Site footer with deep links & contact info
│   ├── Chatbot.jsx              # Interactive floating AI assistant widget
│   └── ScrollToTop.jsx          # Route change scroll reset & anchor hash handler
├── layouts/
│   └── MainLayout.jsx           # Master wrapper with scroll progress indicator & grid background
├── pages/
│   ├── HomePage.jsx             # Landing page hero & key sections
│   ├── ServicesPage.jsx         # Core services overview with hash anchors
│   ├── ServiceDetailPage.jsx    # Dynamic single service detail renderer (/services/:serviceId)
│   ├── WorkPage.jsx             # Portfolio and case studies showcase
│   ├── AboutPage.jsx            # Company mission & team overview
│   └── ContactPage.jsx          # Inquiry and consultation contact form
├── router/
│   └── index.jsx                # Browser router configuration
└── main.jsx                     # Application entry point

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** / **yarn** installed on your machine.

### Installation

1. **Clone the repository**:
```bash
git clone [[https://github.com/your-username/dacitos-redesign.git](https://github.com/your-username/dacitos-redesign.git)](https://github.com/areebalii/dacitos-redesign.git)
cd dacitos-redesign

```


2. **Install dependencies**:
```bash
npm install

```


3. **Start the local development server**:
```bash
npm run dev

```


Open `http://localhost:5173` in your browser to view the application.

---

## 📦 Build & Deployment

To create an optimized production build:

```bash
npm run build

```

Preview the build locally:

```bash
npm run preview

```

### Deploying to Vercel / Railway

This project is ready for deployment on platforms like **Vercel**, **Netlify**, or **Railway**.

When deploying single-page applications (SPAs) with React Router on Vercel, ensure you have a `vercel.json` file in the project root to route all requests to `index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

```

```
