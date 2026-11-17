# 🚰 Flowtastic Plumbing — Official Web Application

> **Fast, Reliable Plumbing Solutions in Morrisville & Beyond.**  
> A high-performance, mobile-responsive, multi-page React application engineered for **Flowtastic Plumbing** (Morrisville, NC).

---

## 🌟 Key Features

1. **Multi-Page Architecture (React Router v6)**:
   - **Homepage (`/`)**: Hero section, Live emergency dispatch indicator, Core value propositions, Services highlights, **Infinite Running Google Reviews marquee**, Interactive Instant Cost Estimator, Interactive Zip Code Service Area lookup, FAQ accordion, and dual CTAs.
   - **About Us (`/about`)**: Story & Mission, Morrisville roots, The Mobile Service Fleet advantage (no retail storefront overhead, direct to driveway), and our 4 core craftsmanship standards.
   - **Services (`/services`)**: In-depth breakdown of all 6 plumbing specializations (Residential Repair, Drain Cleaning & Hydro-Jetting, Water Heater Repair & Installation, Leak Detection, Fixture Upgrades, 24/7 Emergency Response) with symptom diagnostics and pricing estimates.
   - **Service Area (`/service-area`)**: Comprehensive breakdown of Morrisville (Core Hub), Cary, Raleigh, Durham, and Research Triangle Park (RTP) with an interactive zip code checker.
   - **Contact Us (`/contact`)**: Direct contact details (`+1 914-255-7684`, Morrisville, NC base, Mon-Fri 8:00 AM – 6:00 PM + 24/7 emergency availability) with an interactive booking & quote form.

2. **Running Google Reviews Stream**:
   - Continuous infinite-scroll marquee featuring authentic 5-star customer reviews across Morrisville, Cary, Raleigh, Durham, and RTP.
   - Filterable by service category (Emergency, Water Heater, Drain, Leak Detection).
   - Pauses smoothly on hover for reading.

3. **Interactive Technology**:
   - **Instant Cost Estimator & Diagnostic Calculator**: Lets homeowners choose their issue, property type, and urgency to see real-time price ranges and book in one click.
   - **Zip Code Coverage Checker**: Real-time validation for Morrisville (27560), Cary (27519, 27513), Raleigh (27617, 27607), RTP (27709), and Durham (27713) with average arrival times.
   - **Global Free Estimate Modal**: Accessible from any CTA button across all pages.
   - **Mobile Sticky Emergency Call Bar**: Fixed quick-dial and instant estimate drawer for smartphone visitors.

4. **Custom Brand Logo & Identity**:
   - Vector logo and favicon (`public/logo.svg`, `public/icon.svg`, `public/favicon.svg`) showcasing an interlocking hydro-droplet and pipe union emblem with electric cyan and sky blue gradients.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler**: Vite 6
- **Routing**: React Router DOM v6 (Client-side SPA with Vercel rewrites)
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: Vercel Ready (`vercel.json` included)

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📦 How to Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `flowtastic-plumbing`).
2. Run the following commands in this directory:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```

---

## ⚡ How to Deploy on Vercel

### Option A: Via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New"** → **"Project"**.
3. Import your GitHub repository (`flowtastic-plumbing`).
4. Vercel will automatically detect:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**. The site will be live on your custom `.vercel.app` domain in seconds!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

*Note: The included `vercel.json` handles Single Page Application (SPA) routing rewrites so all page routes (`/about`, `/services`, `/service-area`, `/contact`) work flawlessly on reload.*
