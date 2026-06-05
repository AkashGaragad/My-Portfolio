# 🌟 Akash Garagad — Interactive Developer Portfolio

A premium, interactive developer portfolio showcasing my journey as a BCA Graduate, Python Developer, and Web Developer. Designed with modern dark-mode aesthetics, custom cursor tracking, custom glow layouts, smooth transitions, and seamless integrations.

## 🚀 Live Demo & Repository

- **GitHub Repository**: [https://github.com/AkashGaragad/My-Portfolio](https://github.com/AkashGaragad/My-Portfolio)
- **LIVE**: [https://akashgaragadportfolio.vercel.app/](https://akashgaragadportfolio.vercel.app/)

---

## ✨ Key Features

- **Modern Dark-Themed Aesthetic**: Tailored with premium gradients, deep zinc tones, and glassmorphism.
- **Custom Cursor & Smooth Animations**: Custom cursor element tracking mouse coordinates with interactive scaling and bespoke enter/exit states.
- **Interactive About Area**: Highlights hackathon achievements, graduation details, and academic CGPA metrics.
- **Dynamic Skills Marquee**: Custom looping marquee showing core tech capabilities and skillsets.
- **Projects Showcase**: Interactive 3D hover cards with perspective tilt and clean zoom effects.
- **Hackathons & Events Gallery**: Custom Masonry-style photo columns displaying certificates, degree milestones, and awards.
- **Certificates Viewer**: Connects professional certifications directly to Coursera/Google credentials with custom link tracking.
- **Fully Working Contact Form**: Integrated with **Web3Forms** to route client messages straight to your email.

---

## 🛠️ Technical Stack

- **Framework**: React.js (v18)
- **Styling**: Tailwind CSS (v3) & Vanilla CSS for high-performance animations
- **Build Tool**: Vite (v5)
- **Forms API**: Web3Forms

---

## ⚙️ Local Development Setup

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Clone the Repository

```bash
git clone https://github.com/AkashGaragad/My-Portfolio.git
cd My-Portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the root directory and add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key-here
```

> Get your access key for free at [Web3Forms](https://web3forms.com/).

### 5. Run Dev Server

Launch Vite's hot-reloading development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 6. Production Build

To build the application for deployment:

```bash
npm run build
```

This command compiles and minifies the assets into the `dist/` folder.

---

## 📁 Project Structure

```text
├── assets/                  # Raw assets (Resume PDF, local images)
├── src/
│   ├── components/
│   │   ├── About.jsx        # Bio, metrics & profile image section
│   │   ├── Contact.jsx      # Web3Forms-integrated contact section
│   │   ├── Footer.jsx       # Footer copyright notice
│   │   ├── Gallery.jsx      # Event & Hackathon masonry photo gallery
│   │   ├── Hero.jsx         # Landing page and title animation
│   │   ├── Icons.jsx        # SVG Icon library
│   │   ├── Navigation.jsx   # Sticky navbar with avatar logo
│   │   ├── Projects.jsx     # Card component for featured work
│   │   ├── Resume.jsx       # Interactive journey timeline & certifications
│   │   └── Reveal.jsx       # Component wrappers for slide/fade animations
│   ├── App.jsx              # Main React container, background noise & cursor states
│   ├── index.css            # Custom CSS animations & Tailwind layers
│   └── main.jsx             # DOM mounting entrypoint
├── index.html               # Entry HTML structure
├── package.json             # Scripts & dependencies configuration
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind theme parameters
```

---

## 📬 Contact & Connect

- **Email**: akashgaragad2005@gmail.com
- **LinkedIn**: [Akash Garagad](https://www.linkedin.com/in/akash-garagad)
- **GitHub**: [@AkashGaragad](https://github.com/AkashGaragad)
- **Twitter/X**: [@AkashGaragad](https://x.com/AkashGaragad)
