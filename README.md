# ViRosh Wedding Invitation

A luxurious, custom wedding invitation website for **Vijay Deverakonda** & **Rashmika Mandanna**.  
Built with **Vite + React**, polished with **GSAP** animations, a 3‑D curtain reveal, sparkles, background music, and a scratch‑to‑reveal card.

---

## ✨ Features

- **Welcome Gate** – 3‑D curtain opening with a custom "ViRosh" monogram.
- **Hero Section** – Dynamic typography, floating sparkles, and smooth scroll prompt.
- **Scratch Reveal** – Canvas‑based scratch‑off card that triggers gold confetti after 35% scratched.
- **Photo Gallery** – Responsive CSS Grid with lazy‑loaded images (explicit width/height to prevent CLS).
- **Program Timeline, Dress Code, Gifts** – Elegant sections with glass‑morphism styling.
- **Background Music** – Romantic instrumental `dear_comrade.mp3` with a floating mute/unmute toggle.
- **Mobile‑Responsive** – Media queries for all sections, ensuring a flawless experience on phones and tablets.
- **Performance Optimized** – Fonts preconnected via `<link>`, lazy loading, React `Suspense`, and CLS‑free images for top Lighthouse scores.

---

## 📦 Getting Started

```bash
# Clone the repository (replace <repo-url> with your GitHub repo URL)
git clone <repo-url>
cd wedding-template01/client

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open http://localhost:5173 in your browser to see the site.

---

## 🚀 Build & Deploy

```bash
npm run build   # Creates an optimized static bundle in `dist/`
```
Deploy the contents of the `dist/` folder to any static‑host (Vercel, Netlify, GitHub Pages, etc.).

---

## 🛠️ Configuration

- **Fonts** – Loaded via `<link rel="preconnect">` in `client/index.html` for optimal performance.
- **Background Music** – Place `dear_comrade.mp3` inside `client/public/music/`.
- **Environment** – The app uses a local MongoDB for RSVP handling (see `server/` folder). Ensure MongoDB is running or update the connection string in `server/index.js`.

---

## 📂 Project Structure

```
client/
├─ public/                # static assets (images, music)
├─ src/
│  ├─ components/        # React components (HeroHeader, WelcomeGate, etc.)
│  ├─ App.tsx            # Main app with GSAP & Lenis setup
│  ├─ index.css          # Global styles and media queries
│  └─ index.html         # HTML entry point (fonts, meta tags)
server/
├─ index.js               # Express server with Mongoose connection
└─ ...
```

---

## 📜 License

This project is for personal use and demonstration purposes. Feel free to adapt it for your own wedding invitation.

---

**Enjoy the celebration!**
