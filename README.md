# KeelWorks Website

The official website for KeelWorks, a nonprofit organization. Built with React + Vite + Tailwind CSS.

---

## Tech Stack

- **React 18** + **React Router v6**
- **Vite 5** (build tool)
- **Tailwind CSS**
- **Google Analytics 4** (react-ga4)

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
git clone https://github.com/keelworks/keelworks-website.git
cd keelworks-website
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production (images auto-compressed) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run compress-images` | Manually compress images in `src/assets/images/` |

---

## Contributing

### Quick Start Workflow

#### 1. Ensure you are on the `main` branch and up to date

```bash
git checkout main
git pull origin main
```

#### 2. Create a new feature branch

```bash
git checkout -b feature/<your-feature-name>
```

#### 3. Make your changes, then push

```bash
git push -u origin feature/<your-feature-name>
```

#### 4. Open a Pull Request against `main` on GitHub

---

### Adding Images

Images placed in `src/assets/images/` are automatically compressed at build time via `vite-plugin-imagemin`. If you want to compress images without building, run:

```bash
npm run compress-images
```

Target sizes: JPEG and PNG under 300KB where possible.
