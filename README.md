# 🌟 Gaurav Paliwal | Portfolio Website

![Built With HTML CSS JavaScript](https://img.shields.io/badge/Built%20With-HTML%20CSS%20JavaScript-yellow?style=flat-square)
![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=flat-square)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status Active](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

A modern, fully responsive portfolio website built with 100% vanilla web technologies. No frameworks. No libraries (except Google Fonts and Devicon). Just pure HTML5, CSS3, and JavaScript.

**Live Demo:** [https://paliwalgaurav27.github.io/portfolio/](https://paliwalgaurav27.github.io/portfolio/)

---

## 📸 Live Demo

Visit the live site: **[https://paliwalgaurav27.github.io/portfolio/](https://paliwalgaurav27.github.io/portfolio/)**

*[Screenshot placeholder: Add a screenshot of your portfolio hero section here]*

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Theme System](#theme-system)
- [JavaScript Architecture](#javascript-architecture)
- [CSS Architecture](#css-architecture)
- [Pages Breakdown](#pages-breakdown)
- [Project Data Structure](#project-data-structure)
- [Animations Reference](#animations-reference)
- [Responsive Design](#responsive-design)
- [Performance & Best Practices](#performance--best-practices)
- [How to Run Locally](#how-to-run-locally)
- [How to Deploy](#how-to-deploy)
- [How to Customize](#how-to-customize)
- [Projects Showcased](#projects-showcased)
- [Known Limitations & Future Improvements](#known-limitations--future-improvements)
- [Developer Notes](#developer-notes)
- [License](#license)
- [Connect With Me](#connect-with-me)

---

## 🎯 Overview

### What is this project?

This is a **production-ready portfolio website** built from scratch using only vanilla web technologies. It showcases 4 major projects, 12 honorable mentions, technical skills, and a complete personal journey timeline. Every design decision prioritizes performance, accessibility, and user experience.

### Who is it for?

- **Developers** who want to understand how to build professional portfolios without frameworks
- **Self-taught programmers** learning to structure large projects with vanilla tech
- **Anyone forking this** to create their own personalized portfolio
- **Tech leads or hiring managers** evaluating frontend fundamentals

### Why was it built?

This portfolio demonstrates:
- **Deep understanding of web fundamentals** — HTML semantics, CSS layout systems, JavaScript DOM manipulation
- **Real-world best practices** — responsive design, accessibility, performance optimization, state management
- **Ability to build without frameworks** — proving you can work at the platform level
- **Design and interaction polish** — smooth animations, thoughtful transitions, professional aesthetics

### What makes it different from a typical portfolio?

✅ **Zero dependencies** — No npm packages, no build tools, no bloat
✅ **Theme system** — Light/dark mode toggle with localStorage persistence
✅ **Dynamic project rendering** — Add projects by editing one data array; pages auto-populate
✅ **Scroll-triggered animations** — Smooth reveals and transitions using IntersectionObserver
✅ **Fully accessible** — Semantic HTML, proper ARIA labels, keyboard navigation
✅ **Sticky navbar** — With scroll shadow and active link underlines
✅ **Mobile hamburger menu** — Fully animated, responsive collapse behavior
✅ **Skill progress bars** — Animate on scroll with smooth transitions
✅ **Timeline section** — Alternating left/right cards on desktop, vertical on mobile
✅ **CSS variables everywhere** — Change all colors by editing just 2 CSS variable blocks
✅ **Offline ready** — Can be converted to PWA with minimal changes

### 🌙 The 2-Theme System

The portfolio features a complete light/dark mode switcher:
- **Light Theme** — Clean whites, dark text, professional grayscale
- **Dark Theme** — Deep blacks with neon green accent (#00FFB2), perfect for code-related portfolios
- Theme preference persists across page navigation using localStorage
- Zero flash/flicker on page reload (applied before page renders)
- All UI components respond to theme changes instantly

### 💯 100% Vanilla Approach

This website proves you can build professional, complex web experiences without frameworks:
- **No React** — No JSX, no state hooks, no component library
- **No Vue** — No template syntax, no computed properties
- **No Bootstrap** — No CSS framework, pure CSS Grid and Flexbox
- **No jQuery** — No DOM shorthand library, just native DOM API
- **Only external resources** — Google Fonts (Inter) for typography + Devicon CDN for skill icons
- **Result** — Lightning-fast load times, tiny total bundle size, 100% control

### 🤖 AI-Assisted Development

This entire website was built using a collaborative AI workflow:
- **Claude** — For architecture decisions and complex logic
- **ChatGPT** — For learning and explaining concepts
- **Cursor** — AI-powered IDE for real-time coding assistance
- **Antigravity** — For rapid project scaffolding and deployment
- GitHub Copilot — For intelligent code completions

This demonstrates practical AI usage in production development, not as a shortcut, but as a **collaborative development partner** to accelerate learning and ship faster.

---

## ✨ Features

### 🌍 Global Features (across all pages)

#### Theme System
- ✅ Light/Dark theme toggle via 2 dots in navbar
- ✅ Theme persisted in `localStorage` across page navigation
- ✅ Themes applied via `data-theme` attribute on `<html>` element
- ✅ Zero flicker on page reload (IIFE runs before page renders)
- ✅ All colors use CSS custom properties, enabling instant theme switching
- ✅ Active theme indicator shows visual ring/glow around active dot

#### Navigation
- ✅ Sticky navbar with `position: sticky` and backdrop blur effect
- ✅ Navbar shadow appears on scroll (JS adds `.scrolled` class)
- ✅ Active nav link highlighted with smooth bottom underline
- ✅ Mobile hamburger menu with smooth open/close animation
- ✅ Menu toggle animates to X when open
- ✅ Clicking nav link closes menu automatically on mobile
- ✅ ARIA labels for accessibility (`aria-label`, `aria-expanded`)

#### Animations & Interactions
- ✅ Smooth scroll behavior (`scroll-behavior: smooth` on html)
- ✅ Fade-in on scroll via IntersectionObserver API
- ✅ Staggered animations on card grids (cascade effect)
- ✅ No hardcoded animation delays — all calculated with CSS `transition-delay`
- ✅ `observer.unobserve()` called after element becomes visible (cleanup)

#### Accessibility & Responsiveness
- ✅ Fully responsive (mobile 320px → tablet 768px → desktop 1440px+)
- ✅ Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- ✅ Alt text on all images
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support (Tab through all controls)

#### Typography
- ✅ Google Fonts: Inter (400, 500, 600, 700 weights)
- ✅ Responsive font sizes using `clamp()` for smooth scaling
- ✅ Proper line-height for readability (1.6 base, 2.0 for body text)
- ✅ Letter-spacing for headings (negative for compactness, positive for muted text)

#### Design System
- ✅ All colors defined as CSS custom properties (variables)
- ✅ Centralized in `:root` selector for easy modification
- ✅ No hardcoded hex/rgb values in component styles
- ✅ Consistent spacing scale (0.5rem → 6rem)
- ✅ Consistent border-radius (0.4rem → 999px for pills)
- ✅ Consistent shadow and blur values

---

### 🏠 Home Page Features (`index.html`)

#### Hero Section
- ✅ Full viewport hero (min-height: 100vh)
- ✅ Floating geometric shapes (CSS-only, no images)
  - Top-right rotated square
  - Bottom-left circle
  - Top-left rectangle
  - All animated with smooth float animation
- ✅ Circular profile image with accent border
- ✅ Dashed outer ring with slow CSS rotation animation (`spinRing` 20s)
- ✅ Gradient text on name using `background-clip: text` technique
- ✅ Typing animation cycling through 4 roles:
  - "Frontend Developer"
  - "UI Enthusiast"
  - "Problem Solver"
  - "Open Source Contributor"
- ✅ Blinking cursor on typing animation with CSS `blinkCursor` keyframe
- ✅ Two pill-shaped CTA buttons (Primary + Secondary styles)

#### About Preview Section
- ✅ Short intro paragraph with "Read More" link
- ✅ Eyebrow label, gradient heading, description
- ✅ Accent-colored left border on card

#### Skills Snapshot
- ✅ 10 skills displayed in 2-column grid
- ✅ Animated progress bars that animate on scroll
- ✅ Skill icon, label, progress track, and percentage shown
- ✅ Staggered reveal animation with delay classes
- ✅ Devicon icons loaded from CDN (colored SVG masks)
- ✅ Progress bars animate using `data-progress` attribute

#### Featured Projects
- ✅ First 2 projects from the main `projectsData` array displayed
- ✅ Project card shows:
  - Thumbnail image
  - Project title
  - Short description
  - Tech stack tags (first 3)
  - "View Project →" link
- ✅ Staggered fade-in on scroll
- ✅ Hover scale + accent glow box-shadow
- ✅ Links to project detail page with `?id=` query param

#### Footer
- ✅ Social links (GitHub, LinkedIn, Twitter, Email)
- ✅ SVG social icons with hover fill animations
- ✅ Copyright notice
- ✅ Background color changes with theme

---

### 👤 About Page Features (`about.html`)

#### Profile Header
- ✅ Circular profile image with rotating dashed ring
- ✅ Name, role, and tagline
- ✅ Centered layout with grid alignment
- ✅ Different background color per section (alternating light/dark)

#### About Me Section
- ✅ Bio paragraph in a styled card with accent left border
- ✅ "The Story Behind The Screen" heading
- ✅ Multi-paragraph bio with proper spacing
- ✅ Semantic `<article>` wrapper

#### Technical Skills Section
- ✅ 12 skills displayed in responsive grid:
  - 2 columns on mobile
  - 3 columns on tablet (640px+)
  - 4 columns on desktop (900px+)
- ✅ Per-skill card includes:
  - Devicon CDN icon (colored SVG)
  - Skill name
  - Animated progress bar
  - Percentage display
- ✅ Card hover effect:
  - Scale transform
  - Accent glow box-shadow
- ✅ Staggered fade-in animation
- ✅ Progress bars animate on scroll with IntersectionObserver
- ✅ Border-top colored stripe on each card

#### AI & Agentic Tools Section
- ✅ 8 AI tools displayed in grid layout
- ✅ Per-tool card includes:
  - Custom inline SVG icon
  - Tool name
  - Use case tag (colored badge)
  - Description
- ✅ Tools covered:
  1. **ChatGPT** — My First AI Tutor
  2. **Claude** — Daily AI Assistant
  3. **Cursor** — AI-Powered IDE
  4. **Antigravity** — Agentic Builder
  5. **Continue** — VS Code AI Extension
  6. **Ollama** — Local LLM Host
  7. **GitHub Copilot** — AI Code Partner
  8. **Codex** — Code Generation Model
- ✅ Cards hover with slight lift and glow
- ✅ Use case tags styled with distinct colors

#### My Journey Timeline
- ✅ 7 timeline items (2022 → 2026)
- ✅ Alternating left/right layout on desktop (50% width each side)
- ✅ Center vertical line with accent dots
- ✅ Dots have pulse/ripple animation (`aboutPulse` keyframe)
- ✅ Per-item includes:
  - Year badge (accent-colored)
  - Title
  - Paragraph description
- ✅ Slide-in animation from left/right on scroll (`reveal-left`, `reveal-right`)
- ✅ Mobile collapses to single column, all aligned left with timeline on left side
- ✅ Sections covered:
  - 2022: The Switch (BCom → BCA)
  - 2022: YouTube Classroom (self-taught fundamentals)
  - 2022–2023: The Great Confusion (frontend vs backend choice)
  - 2023: ChatGPT Tutor (AI-assisted learning)
  - (And continues...)

#### Hobbies Section
- ✅ 4 hobbies displayed in grid
- ✅ Per-hobby card:
  - Large emoji icon
  - Hobby title
  - Description
- ✅ Hobbies: Music 🎵, Cycling 🚴, Trading 📈, Cooking 🍳
- ✅ Card hover with scale + glow

---

### 📁 Projects Page Features (`projects.html`)

#### Page Header
- ✅ Eyebrow label ("Portfolio")
- ✅ Gradient heading ("My Projects")
- ✅ Descriptive subheading
- ✅ Gradient divider line below heading
- ✅ Highlight pills showing:
  - "5 Selected Builds"
  - "Case Study Ready"
  - "Web Apps + Tools"

#### Projects Grid
- ✅ All projects from `projectsData` displayed in responsive grid
- ✅ 1 column on mobile
- ✅ 2 columns on tablet (640px+)
- ✅ Per-card includes:
  - Numbered category label (`01 — WEB APP`)
  - Project thumbnail image
  - Project title
  - Short description
  - Tech stack tags
  - "Know About It →" button
- ✅ Card hover effect:
  - Scale transform (1.025)
  - Accent glow box-shadow
  - Border color brightens
  - Thumbnail image saturates and zooms slightly
- ✅ Staggered fade-in on scroll
- ✅ Links to individual project detail page

#### Honorable Mentions Section
- ✅ 12 mini projects displayed in 3-column grid
- ✅ 1 column on mobile, auto-fill on larger screens
- ✅ Per-card includes:
  - Emoji icon in colored badge
  - Title
  - Description
  - 3 tech tags
- ✅ Card hover with lift + glow
- ✅ Example projects:
  - Portfolio Website
  - E-Commerce Website
  - Quiz Application
  - Todo List App
  - Student Management System
  - Weather Application
  - (And more...)

---

### 📖 Project Detail Page Features (`project-detail.html`)

#### Dynamic Rendering
- ✅ Single HTML file powered by JavaScript
- ✅ Reads `?id=` query parameter from URL
- ✅ Finds matching project in `projectsData` array
- ✅ Renders all sections dynamically
- ✅ Shows "Project not found" if ID invalid
- ✅ Updates `document.title` to project name

#### Back Navigation
- ✅ Back button at top (`← Back to Projects`)
- ✅ Back button at bottom for context switching
- ✅ Both link to `projects.html`

#### Sections Rendered

**1. Project Title**
- Large gradient heading
- Fade-in animation

**2. Hero Image**
- Full-width project screenshot
- Border, rounded corners, shadow
- Fade-in animation

**3. Case Study Header**
- Eyebrow label ("Case Study")
- Project title
- Tagline
- Tech stack tags (all technologies used)
- Two CTA buttons:
  - Primary: "Live Demo →" (opens in new tab)
  - Secondary: "Source Code →" (opens GitHub in new tab)
- Fade-in animation

**4. The Story Section**
- Multi-paragraph narrative
- "The Idea" highlight block:
  - Lightbulb emoji
  - Accent-colored left border
  - Key insight about project concept
- Fade-in animation

**5. How It Works Section**
- Multi-paragraph technical explanation
- Describes architecture, flow, and key interactions
- Fade-in animation

**6. Built With Section**
- Chip grid showing all technologies
- Technologies auto-colored based on type:
  - HTML = orange
  - CSS = blue
  - JavaScript = yellow
  - Firebase = orange
  - Other tech = accent color
- Fade-in animation

**7. Screenshots Section**
- Grid of 2-column screenshots
- 1 column on mobile
- Each screenshot:
  - Rounded border
  - Subtle shadow
  - Hover zoom + glow effect
- Fade-in animation

**8. Features Section**
- Feature chips in flex layout
- Each feature includes emoji + description
- Hover effect with border/background change
- Fade-in animation

**9. Challenges & Solutions Section**
- 2-column grid on desktop, 1 on mobile
- Per-challenge includes:
  - Problem statement (gray label)
  - Solution statement (accent-colored label)
  - Accent-colored left border
  - Light accent background
- No hardcoded red/green — uses accent color
- Fade-in animation

#### Animations
- ✅ Sequential fade-in with staggered delays (0ms, 120ms, 240ms...)
- ✅ All sections fade up from below

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Purpose | Why This Choice |
|:-----------|:--------|:----------------|
| **HTML5** | Semantic structure, forms, accessibility | Provides proper accessibility tree, SEO benefits, and semantic meaning to content |
| **CSS3** | Styling, layout, animations, responsive design | CSS Grid & Flexbox for modern layouts; custom properties for theming; animations for micro-interactions |
| **Vanilla JavaScript** | DOM manipulation, interactivity, state management | Demonstrates web platform mastery; no framework overhead; full control over behavior |
| **Google Fonts** | Typography (Inter font) | Professional, clean typeface with multiple weights for hierarchy |
| **Devicon CDN** | Colored tech skill icons | Pre-made icon library; SVG-based; loads dynamically |
| **GitHub Pages** | Static hosting | Free, reliable, integrates with Git workflow, perfect for static portfolios |

### Advanced JavaScript Features Used

- **IntersectionObserver API** — For scroll-triggered animations without expensive scroll listeners
- **localStorage API** — For persisting theme preference
- **URLSearchParams** — For reading query parameters (`?id=`)
- **Template Literals** — For dynamic HTML string rendering
- **Array Methods** — `.map()`, `.filter()`, `.find()` for data transformation
- **ES6 Modules** — Organized code structure (though all in single file for simplicity)
- **DOM Methods** — `.querySelector()`, `.addEventListener()`, `.classList`, etc.

### CSS3 Advanced Features

- **CSS Custom Properties** — Root-level variables for theming
- **CSS Grid** — Multi-column layouts
- **Flexbox** — Component-level layouts
- **CSS Animations & Keyframes** — Smooth transitions and micro-interactions
- **backdrop-filter** — Frosted glass navbar effect
- **background-clip: text** — Gradient text effect on headings
- **color-mix()** — Dynamic color calculations for theme consistency
- **clamp()** — Responsive font sizing without breakpoints
- **CSS Transitions** — Smooth property changes on state

### Performance Optimizations

✅ **No render-blocking resources** — CSS inline in head, JS deferred  
✅ **IntersectionObserver** — Animations only run when visible  
✅ **Efficient selectors** — Avoid expensive pseudo-selectors  
✅ **GPU acceleration** — Using `transform` for animations (not `left`/`top`)  
✅ **Minimal repaints** — Using `will-change` for animated elements  

---

## 📂 File Structure

```
portfolio/
├── index.html                  → Home page: hero, skills, featured projects
├── about.html                  → About page: bio, skills, journey, hobbies, AI tools
├── projects.html               → Projects listing: all 4 projects + honorable mentions
├── project-detail.html         → Dynamic project detail: single page, JS-driven
│
├── css/
│   └── style.css               → All styles: 2,600+ lines
│                                 • CSS variables (light/dark themes)
│                                 • Component styles (navbar, hero, cards, buttons, etc.)
│                                 • Animation keyframes
│                                 • Responsive breakpoints (@media queries)
│                                 • Accessibility styles
│
├── js/
│   └── main.js                 → All JavaScript: 900+ lines
│                                 • projectsData array (4 projects + 12 honorable mentions)
│                                 • Theme switcher logic
│                                 • Navbar scroll behavior
│                                 • Typing animation
│                                 • Reveal animations (IntersectionObserver)
│                                 • Skill bar animation
│                                 • Project grid rendering
│                                 • Dynamic project detail rendering
│
└── img/                        → Project images and screenshots
    ├── annnadaan/              → AnnaDaan project screenshots
    ├── jsloop/                 → JS Event Loop Explorer screenshots
    ├── SPB&CO/                 → SPB & Co website screenshots
    └── stock/                  → AI Stock Insight Platform screenshots
```

### What Each File Does

#### `index.html` — Home Page
- **Hero section** with typing animation and geometric shapes
- **About preview** card with link to full about page
- **Skills snapshot** with 10 skills and progress bars
- **Featured projects** (first 2 from projectsData)
- **Footer** with social links
- **Metadata** for SEO (description, title)

#### `about.html` — About Me Page
- **Profile header** with photo, name, role, tagline
- **Story section** with bio in styled card
- **Technical skills** grid (12 skills)
- **AI tools section** (8 tools with descriptions)
- **Journey timeline** (7 items covering 2022–2026)
- **Hobbies section** (4 hobbies)
- **Footer** with social links

#### `projects.html` — Projects Listing
- **Page header** with gradient title and description
- **Main projects grid** (all 4 projects from projectsData)
- **Honorable mentions** (12 mini projects)
- **Footer** with social links

#### `project-detail.html` — Dynamic Project Detail
- **Minimal HTML** — Just a single `<div id="project-detail-page"></div>`
- **JavaScript populates** everything based on `?id=` parameter
- **Back navigation** at top and bottom
- **Footer** with social links

#### `css/style.css` — Complete Styling
**Sections included:**

1. **CSS Variables** (32 custom properties)
   - Light theme: `--bg`, `--accent`, `--text`, etc.
   - Dark theme: Same variables, different values
   - Gradients for titles and dividers
   - Colors for skill tracks, tags, borders

2. **Reset & Base Styles**
   - Universal box-sizing
   - Smooth scroll behavior
   - Default font, line-height
   - Button and input resets

3. **Typography**
   - Google Fonts import
   - Font sizes using `clamp()` for responsiveness
   - Letter-spacing for hierarchy
   - Line-height for readability

4. **Layout System**
   - `.container` class for max-width + padding
   - `.section` for vertical spacing
   - CSS Grid and Flexbox patterns

5. **Component Styles**
   - Navbar (sticky, responsive, hamburger)
   - Hero section (geometry, animations)
   - Cards (projects, skills, timeline, etc.)
   - Buttons (primary, secondary, hover states)
   - Badges and tags
   - Footer
   - Theme switcher dots

6. **Animation Keyframes** (8 total)
   - `floatGeo` — Geometric shapes float up/down
   - `blinkCursor` — Cursor blinks in typing animation
   - `spinRing` — Profile photo ring rotates
   - `pulseDot` — Timeline dots ripple outward
   - `heroFadeUp` — Elements fade in from below
   - `aboutPulse` — Timeline dot pulses
   - `driftShape` — Decorative shape drifts
   - `pulseGlow` — Glow effect pulses

7. **Responsive Breakpoints**
   - `@media (max-width: 767px)` — Mobile (< 768px)
   - `@media (min-width: 640px)` — Small tablet (≥ 640px)
   - `@media (min-width: 768px)` — Large tablet (≥ 768px)
   - `@media (min-width: 900px)` — Desktop (≥ 900px)

8. **Page-Specific Styles**
   - `.about-page` styles
   - `.projects-page-shell` styles
   - `.case-page` styles for project detail

#### `js/main.js` — Complete JavaScript
**Sections included:**

1. **Project Data Array** (`projectsData`)
   - 4 projects with all metadata
   - Each project has 15+ fields

2. **Honorable Mentions Data** (`honorableMentionsData`)
   - 12 mini projects with titles, descriptions, tags

3. **Theme System** (`initTheme()`)
   - Reads from localStorage
   - Applies theme to document root
   - Listens to theme dot clicks
   - Updates active state

4. **Navbar** (`initNavbar()`)
   - Scroll listener adds shadow on scroll
   - Mobile hamburger toggle
   - Close menu on link click
   - ARIA updates

5. **Hero Section** (`initHero()`)
   - Typing animation logic
   - Cycles through 4 roles
   - Blinking cursor
   - Realistic typing delays

6. **Animations** (`initRevealAnimations()`)
   - IntersectionObserver setup
   - Adds `.is-visible` class when elements enter viewport
   - Unobserves after becoming visible

7. **Skill Bars** (`initSkillBars()`)
   - Observes `[data-progress]` elements
   - Sets width on scroll trigger
   - IntersectionObserver with 0.3 threshold

8. **Project Rendering** (`renderFeaturedProjects()`)
   - Selects first 2 projects from data
   - Maps to template literals
   - Injects into `#featured-projects`

9. **Projects Page** (`renderProjectsPage()`)
   - All projects rendered to grid
   - Numbered category labels
   - Staggered animations

10. **Project Detail** (`renderProjectDetail()`)
    - Reads `?id=` query parameter
    - Finds project in data array
    - Renders all sections
    - Error handling for bad ID

11. **Honorable Mentions** (`renderHonorableMentions()`)
    - Maps data to mini cards
    - Grid layout with emojis

12. **Helper Functions**
    - `renderTechTag(tag, className)` — Creates colored tech tags
    - `renderParagraphs(text, className)` — Splits paragraphs by double newlines

---

## 🎨 Theme System

### How It Works (Deep Dive)

The theme system is the centerpiece of customization. Here's exactly how it functions:

#### 1. CSS Variables Structure

**In `style.css` `:root` selector (Light Theme Default):**
```css
:root,
html[data-theme="light"] {
  --bg: #ffffff;
  --bg-secondary: #fafafa;
  --bg-card: #ffffff;
  --surface: #f3f4f6;
  --accent: #111111;
  --accent-glow: rgba(0, 0, 0, 0.15);
  --text: #111111;
  --text-muted: #666666;
  --border: #e5e7eb;
  --tag-bg: #f3f4f6;
  --tag-text: #444444;
  --nav-bg: rgba(255, 255, 255, 0.95);
  --skill-track: #f3f4f6;
  --skill-fill: #111111;
  --geo-color: #111111;
  --name-gradient: linear-gradient(90deg, #111111, #444444);
  --projects-title-gradient: linear-gradient(90deg, #111111 30%, #444444);
  --projects-divider-gradient: linear-gradient(90deg, #111111, transparent);
  --project-thumb-bg: linear-gradient(135deg, #f0f0f0, #e8e8e8);
  --light-dot-fill: #ffffff;
  --light-dot-border: #111111;
  --dark-dot-fill: #1c1c1c;
}
```

**In Dark Theme Override (`html[data-theme="dark"]`):**
```css
html[data-theme="dark"] {
  --bg: #1c1c1c;
  --bg-secondary: #242424;
  --bg-card: #242424;
  --surface: #2d2d2d;
  --accent: #00ffb2;
  --accent-glow: rgba(0, 255, 178, 0.25);
  --text: #ffffff;
  --text-muted: #888888;
  --border: #333333;
  --tag-bg: #1a3330;
  --tag-text: #00ffb2;
  --nav-bg: rgba(28, 28, 28, 0.95);
  --skill-track: #2d2d2d;
  --skill-fill: #00ffb2;
  --geo-color: #00ffb2;
  --name-gradient: linear-gradient(90deg, #ffffff, #00ffb2);
  --projects-title-gradient: linear-gradient(90deg, #f8f8f8 30%, #00ffb2);
  --projects-divider-gradient: linear-gradient(90deg, #00ffb2, transparent);
  --project-thumb-bg: linear-gradient(135deg, #1e2a28, #181818);
}
```

#### 2. JavaScript Theme Switcher

**In `main.js`:**

```javascript
function initTheme() {
  const root = document.documentElement;
  const dots = document.querySelectorAll(".theme-dot");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const activeTheme = storedTheme === "dark" ? "dark" : "light";

  // Apply saved theme on page load
  applyTheme(activeTheme);

  // Listen to theme dot clicks
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const nextTheme = dot.dataset.setTheme;
      applyTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  });

  function applyTheme(theme) {
    // Set data-theme attribute on root
    root.setAttribute("data-theme", theme);
    
    // Update dot active states
    dots.forEach((dot) => {
      const isActive = dot.dataset.setTheme === theme;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  }
}
```

**Key Points:**
- `data-theme` attribute on `<html>` element controls which CSS variable set is active
- All component styles use `var(--variable-name)` and automatically respond to attribute change
- `localStorage.getItem('portfolio-theme')` persists choice across sessions
- IIFE in `<script>` tag (before page load) reads localStorage and applies theme before page renders (zero flicker)

#### 3. How Components Respond to Theme

**Example: Button Styles**

```css
.btn-primary {
  background: var(--accent);      /* Changes from #111111 → #00ffb2 */
  color: var(--bg);               /* Changes from #ffffff → #1c1c1c */
}

.btn:hover {
  box-shadow: 0 18px 30px var(--accent-glow);  /* Different glow in each theme */
}
```

When `data-theme="dark"` is set on `<html>`, the CSS engine automatically uses the dark theme values for all `var()` expressions.

#### 4. Theme Dot Indicator

**HTML in navbar:**
```html
<button class="theme-dot" type="button" data-set-theme="light" aria-label="Switch to light theme">
  <svg><!-- sun icon --></svg>
</button>
<button class="theme-dot" type="button" data-set-theme="dark" aria-label="Switch to dark theme">
  <svg><!-- moon icon --></svg>
</button>
```

**CSS:**
```css
.theme-dot {
  border: 1px solid transparent;
  border-radius: 50%;
  height: 0.95rem;
  width: 0.95rem;
}

.theme-dot[data-set-theme="light"] {
  background: var(--light-dot-fill);      /* #ffffff in light */
  border-color: var(--light-dot-border);  /* #111111 in light */
}

.theme-dot[data-set-theme="dark"] {
  background: var(--dark-dot-fill);       /* #1c1c1c in light, #2d2d2d in dark */
  color: #ffa500;                         /* Orange tint */
}

.theme-dot.active {
  box-shadow: 0 0 0 4px var(--accent-glow);  /* Glowing ring around active dot */
  transform: scale(1.08);
}
```

#### 5. Complete Light Theme Variables

```css
--bg: #ffffff                                    /* Main background */
--bg-secondary: #fafafa                         /* Secondary sections (alternating) */
--bg-card: #ffffff                              /* Card backgrounds */
--surface: #f3f4f6                              /* Elevated surfaces */
--accent: #111111                               /* Accent color (dark gray) */
--accent-glow: rgba(0, 0, 0, 0.15)             /* Glow/shadow effect */
--text: #111111                                 /* Primary text */
--text-muted: #666666                           /* Secondary text (descriptions) */
--border: #e5e7eb                               /* Border color */
--tag-bg: #f3f4f6                               /* Tag backgrounds */
--tag-text: #444444                             /* Tag text */
--nav-bg: rgba(255, 255, 255, 0.95)            /* Navbar with transparency */
--skill-track: #f3f4f6                          /* Progress bar background */
--skill-fill: #111111                           /* Progress bar fill */
--geo-color: #111111                            /* Geometric shape color */
--name-gradient: linear-gradient(90deg, #111111, #444444)
--projects-title-gradient: linear-gradient(90deg, #111111 30%, #444444)
```

#### 6. Complete Dark Theme Variables

```css
--bg: #1c1c1c                                   /* Very dark background */
--bg-secondary: #242424                         /* Slightly lighter sections */
--bg-card: #242424                              /* Card backgrounds */
--surface: #2d2d2d                              /* Elevated surfaces */
--accent: #00ffb2                               /* Neon green accent */
--accent-glow: rgba(0, 255, 178, 0.25)         /* Green glow effect */
--text: #ffffff                                 /* Bright white text */
--text-muted: #888888                           /* Muted gray text */
--border: #333333                               /* Subtle borders */
--tag-bg: #1a3330                               /* Dark teal tag backgrounds */
--tag-text: #00ffb2                             /* Green tag text */
--nav-bg: rgba(28, 28, 28, 0.95)               /* Dark navbar with transparency */
--skill-track: #2d2d2d                          /* Dark progress bar background */
--skill-fill: #00ffb2                           /* Green progress bar fill */
--geo-color: #00ffb2                            /* Neon geometric shapes */
--name-gradient: linear-gradient(90deg, #ffffff, #00ffb2)
--projects-title-gradient: linear-gradient(90deg, #f8f8f8 30%, #00ffb2)
```

#### 7. Why This Approach Works

✅ **Centralized** — Change colors in one place (CSS variables block)  
✅ **Instant** — All components respond immediately to `data-theme` change  
✅ **No Flicker** — IIFE applies theme before page renders  
✅ **Persistent** — localStorage remembers user preference  
✅ **Zero Overhead** — Native browser feature, no JavaScript computation  
✅ **Accessible** — Proper ARIA labels on theme buttons  
✅ **Maintainable** — Easy to add new themes or tweak colors  

---

## ⚙️ JavaScript Architecture

### Complete Deep Dive

The entire JavaScript is organized in `js/main.js`. Here's how it works section by section:

### 1. Project Data Array

**Purpose:** Single source of truth for all project information. Add/edit projects here and everything updates automatically.

```javascript
const projectsData = [
  {
    id: "1",
    title: "AnnaDaan",
    category: "WEB APP",
    tagline: "A food donation platform...",
    thumbnail: "img/annnadaan/Screenshot.png",
    heroImage: "img/annnadaan/Screenshot.png",
    shortDesc: "Multi-role app for food donation...",
    
    // What's displayed in project cards
    techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
    
    // Detailed project detail page
    builtWith: ["HTML5", "CSS3", "Vanilla JS", "ES6 Modules", "Firebase Firestore"],
    features: [
      "🍽️ Donor Listings",
      "🚚 Collector Workflow",
      "🐄 Gaushala Delivery Tracking",
      // ... more features
    ],
    
    // Case study narrative
    theStory: "AnnaDaan came from a very practical observation...",
    theIdea: "The core question was simple: why does useful food...",
    
    // External links
    demoLink: "https://paliwalgaurav27.github.io/AnnaDaan/index.html",
    sourceLink: "https://github.com/paliwalgaurav27/AnnaDaan",
    
    // How it works explanation
    howItWorks: "The app starts with role-based registration...",
    
    // Screenshots shown in grid
    screenshots: [
      "img/annnadaan/Screenshot 2026-04-19 195149.png",
      "img/annnadaan/Screenshot 2026-04-19 195209.png",
      // ... more screenshots
    ],
    
    // Challenges and solutions
    challenges: [
      {
        problem: "The same phone number could register multiple times...",
        solution: "I added a uniqueness check before saving user data..."
      },
      // ... more challenges
    ]
  },
  // ... 3 more projects
];
```

**Every field explained:**

| Field | Type | Purpose | Where Used |
|:------|:-----|:--------|:-----------|
| `id` | string | Unique identifier | URL query param `?id=` |
| `title` | string | Project name | Cards, detail page title |
| `category` | string | Project type | Project card label |
| `tagline` | string | One-liner pitch | Project detail header |
| `thumbnail` | string | Card image | Home page, projects page |
| `heroImage` | string | Large image | Project detail page hero |
| `shortDesc` | string | 1-2 sentence description | Project card body |
| `techStack` | array | Tech labels | Cards show first 3 |
| `builtWith` | array | Detailed tech list | Project detail chips |
| `features` | array | Feature emojis + text | Project detail features section |
| `theStory` | string | Narrative backstory | Project detail story |
| `theIdea` | string | The core insight | Project detail idea block |
| `demoLink` | string | Live demo URL | CTA button in detail page |
| `sourceLink` | string | GitHub repo URL | CTA button in detail page |
| `howItWorks` | string | Technical explanation | Project detail how-it-works |
| `screenshots` | array | Image paths | Screenshot grid |
| `challenges` | array | Problem/solution pairs | Challenges section |

### 2. Theme System (`initTheme()`)

```javascript
function initTheme() {
  const root = document.documentElement;              // <html> element
  const dots = document.querySelectorAll(".theme-dot");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const activeTheme = storedTheme === "dark" ? "dark" : "light";

  applyTheme(activeTheme);  // Apply saved theme on load

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const nextTheme = dot.dataset.setTheme;
      applyTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  });

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    dots.forEach((dot) => {
      const isActive = dot.dataset.setTheme === theme;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  }
}
```

**Logic flow:**
1. Get stored theme from localStorage
2. Apply it to the page
3. Add click listeners to theme dots
4. When clicked, apply new theme + save to localStorage
5. Update active dot styling

### 3. Navbar (`initNavbar()`)

```javascript
function initNavbar() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navPanel = document.querySelector(".nav-panel");

  // Add scroll shadow on scroll past 50px
  const syncHeaderShadow = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  };

  syncHeaderShadow();
  window.addEventListener("scroll", syncHeaderShadow);

  // Hamburger menu toggle
  if (!menuToggle || !navPanel) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  // Close menu when clicking a link
  navPanel.querySelectorAll("a, .theme-dot").forEach((element) => {
    element.addEventListener("click", () => {
      navPanel.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}
```

**What it does:**
- **Scroll shadow** — Adds box-shadow to navbar when scrolled past 50px
- **Hamburger toggle** — Opens/closes mobile nav menu
- **Menu closing** — Automatically closes menu when user clicks a link
- **Body class** — `body.menu-open` prevents background scroll on mobile

### 4. Typing Animation (`initHero()`)

```javascript
function initHero() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Trigger fade-in animations
  requestAnimationFrame(() => {
    hero.classList.add("hero-ready");
  });

  const typingTarget = document.querySelector("[data-typing]");
  if (!typingTarget) return;

  const roles = [
    "Frontend Developer",
    "UI Enthusiast",
    "Problem Solver",
    "Open Source Contributor"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const currentRole = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    typingTarget.textContent = currentRole.slice(0, charIndex);

    let delay = deleting ? 70 : 120;  // Typing vs deleting speed

    if (!deleting && charIndex === currentRole.length) {
      deleting = true;
      delay = 1500;  // Pause before deleting
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 450;   // Pause before typing next role
    }

    window.setTimeout(tick, delay);
  };

  window.setTimeout(tick, 600);  // Initial delay before starting
}
```

**Logic:**
1. Cycle through 4 roles in array
2. Type out one character at a time (120ms per char)
3. Pause for 1.5 seconds when done typing
4. Delete one character at a time (70ms per char)
5. Move to next role and repeat

**Timings:**
- `600ms` — Initial delay
- `120ms` — Per character typing
- `70ms` — Per character deleting
- `1500ms` — Pause between typing and deleting
- `450ms` — Pause between roles

### 5. Scroll Reveal Animations (`initRevealAnimations()`)

```javascript
let revealObserver;  // Reuse observer across page
let revealObserverInitialized = false;

function initRevealAnimations() {
  if (!revealObserverInitialized) {
    revealObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          
          // Add visible class when element enters viewport
          entry.target.classList.add("is-visible");
          
          // Stop observing this element (cleanup)
          currentObserver.unobserve(entry.target);
        });
      },
      { 
        threshold: 0.14,                    // Trigger when 14% visible
        rootMargin: "0px 0px -40px 0px"    // Start 40px before bottom
      }
    );
    revealObserverInitialized = true;
  }

  // Observe all elements with .reveal class that aren't visible yet
  const revealElements = document.querySelectorAll(
    ".reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)"
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}
```

**How it works:**
- Uses IntersectionObserver (efficient, no scroll listener)
- Triggers when element is 14% visible in viewport
- Adds `.is-visible` class (CSS handles the animation)
- Unobserves immediately (one-time animation)
- CSS handles: fade-in + up/left/right translate

**CSS (from style.css):**
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 6. Skill Bar Animation (`initSkillBars()`)

```javascript
function initSkillBars() {
  const progressBars = document.querySelectorAll("[data-progress]");
  if (!progressBars.length) return;

  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        
        // Set width to trigger CSS transition
        entry.target.style.width = `${entry.target.dataset.progress || "0"}%`;
        
        // Stop observing
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));
}
```

**Logic:**
- Finds all elements with `[data-progress]` attribute
- When element enters viewport (30% visible), sets its `width` CSS property
- CSS transition animates the width change smoothly over 1.1s

**HTML example:**
```html
<div class="skill-track">
  <div class="skill-fill" data-progress="95"></div>
</div>
```

**CSS:**
```css
.skill-fill {
  height: 100%;
  transition: width 1.1s ease;  /* Width animates over 1.1 seconds */
  width: 0;  /* Starts at 0 */
}
```

### 7. Featured Projects Rendering (`renderFeaturedProjects()`)

```javascript
function renderFeaturedProjects() {
  const target = document.getElementById("featured-projects");
  if (!target) return;

  // Take first 2 projects from projectsData
  target.innerHTML = projectsData
    .slice(0, 2)
    .map((project, index) => {
      const tags = project.techStack
        .slice(0, 3)  // First 3 tech tags
        .map((tag) => renderTechTag(tag, "tag"))
        .join("");

      return `
        <article class="project-card reveal" style="transition-delay:${index * 120}ms;">
          <img class="project-thumbnail" src="${project.thumbnail}" alt="${project.title} thumbnail">
          <div class="project-body">
            <div>
              <h3>${project.title}</h3>
              <p>${project.shortDesc}</p>
            </div>
            <div class="tag-list">${tags}</div>
            <a class="text-link" href="project-detail.html?id=${project.id}">View Project &rarr;</a>
          </div>
        </article>
      `;
    })
    .join("");

  initRevealAnimations();  // Animate these new elements
}
```

**Key points:**
- Uses template literals for HTML
- Staggered animation delay (0ms, 120ms)
- Links to detail page with `?id=` parameter
- Re-initializes reveal animations for new elements

### 8. All Projects Grid (`renderProjectsPage()`)

```javascript
function renderProjectsPage() {
  const target = document.getElementById("projects-grid");
  if (!target) return;

  target.innerHTML = projectsData
    .map((project, index) => {
      const num = String(index + 1).padStart(2, "0");  // "01", "02", etc.
      const tags = project.techStack
        .map((tag) => renderTechTag(tag, "project-tag"))
        .join("");
      
      // Show image or placeholder if missing
      const thumb = project.thumbnail
        ? `<img src="${project.thumbnail}" alt="${project.title} thumbnail">`
        : `<span class="project-thumb-placeholder" aria-hidden="true">
             <svg width="22" height="22" viewBox="0 0 24 24"><!-- image icon --></svg>
           </span>`;

      return `
        <article class="project-card reveal" style="transition-delay:${index * 120}ms;">
          <div class="project-thumb">${thumb}</div>
          <div class="project-body">
            <div class="project-category">${num} &mdash; ${project.category}</div>
            <h2 class="project-name">${project.title}</h2>
            <p class="project-description">${project.shortDesc}</p>
            <div class="project-tag-list">${tags}</div>
            <a class="project-link" href="project-detail.html?id=${project.id}">Know About It &rarr;</a>
          </div>
        </article>
      `;
    })
    .join("");

  initRevealAnimations();
}
```

### 9. Dynamic Project Detail (`renderProjectDetail()`)

**This is the most complex function. Here's how it works:**

```javascript
function renderProjectDetail() {
  const target = document.getElementById("project-detail-page");
  if (!target) return;

  // Read ?id= from URL
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  
  // Find matching project
  const project = projectsData.find((item) => item.id === projectId);

  // Show error if not found
  if (!project) {
    target.innerHTML = `
      <div class="case-page">
        <div class="case-back-bar">
          <a class="case-back-link" href="projects.html">&larr; Back to Projects</a>
        </div>
        <section class="case-section reveal is-visible">
          <h1 class="case-title">Project not found</h1>
        </section>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${project.title} | Gaurav Paliwal`;

  // Prepare data for rendering
  const tags = project.techStack.map((item) => renderTechTag(item, "case-tag")).join("");
  const builtWith = project.builtWith.map((item) => renderTechTag(item, "case-chip")).join("");
  const features = project.features
    .map((item) => `<span class="case-feature-chip">${item}</span>`)
    .join("");
  
  // Format multi-paragraph text
  const story = renderParagraphs(project.theStory, "case-text");
  const howItWorks = renderParagraphs(project.howItWorks, "case-text");
  
  // Format screenshots
  const screenshots = project.screenshots
    .map((item, index) => 
      `<img class="case-screenshot" src="${item}" alt="${project.title} screenshot ${index + 1}">`
    )
    .join("");
  
  // Format challenges & solutions
  const challenges = project.challenges
    .map((item) => `
      <article class="challenge-entry">
        <p class="challenge-text problem-line">
          <span class="challenge-label">Problem &mdash;</span>
          ${item.problem}
        </p>
        <p class="challenge-text solution-line">
          <span class="challenge-label">Solution &mdash;</span>
          ${item.solution}
        </p>
      </article>
    `)
    .join("");

  // Render complete page
  target.innerHTML = `
    <div class="case-page">
      <!-- Back link -->
      <div class="case-back-bar">
        <a class="case-back-link" href="projects.html">&larr; Back to Projects</a>
      </div>

      <!-- Title section -->
      <section class="case-section reveal" style="transition-delay:0ms;">
        <h1 class="project-title">${project.title}</h1>
      </section>

      <!-- Hero image -->
      <section class="case-section reveal" style="transition-delay:120ms;">
        <img class="case-hero-image" src="${project.heroImage}" alt="${project.title} hero">
      </section>

      <!-- Case study header with CTA -->
      <section class="case-section reveal" style="transition-delay:240ms;">
        <span class="case-eyebrow">Case Study</span>
        <h1 class="case-title">${project.title}</h1>
        <p class="case-tagline">${project.tagline}</p>
        <div class="case-tag-row">${tags}</div>
        <div class="case-actions">
          <a class="btn case-btn case-btn-primary" href="${project.demoLink}" target="_blank">
            Live Demo &rarr;
          </a>
          <a class="btn case-btn case-btn-secondary" href="${project.sourceLink}" target="_blank">
            Source Code &rarr;
          </a>
        </div>
      </section>

      <!-- The story -->
      <section class="case-section reveal" style="transition-delay:360ms;">
        <span class="case-eyebrow small">The Story</span>
        <div class="case-copy">${story}</div>
        <div class="idea-block">
          <span class="idea-label">💡 The Idea</span>
          <p class="idea-text">${project.theIdea}</p>
        </div>
      </section>

      <!-- How it works -->
      <section class="case-section reveal" style="transition-delay:480ms;">
        <span class="case-eyebrow small">How It Works</span>
        <div class="case-copy">${howItWorks}</div>
      </section>

      <!-- Built with -->
      <section class="case-section reveal" style="transition-delay:600ms;">
        <span class="case-eyebrow small">Built With</span>
        <div class="case-chip-row">${builtWith}</div>
      </section>

      <!-- Screenshots -->
      <section class="case-section reveal" style="transition-delay:720ms;">
        <span class="case-eyebrow small">Screenshots</span>
        <div class="case-screenshots-grid">${screenshots}</div>
      </section>

      <!-- Features -->
      <section class="case-section reveal" style="transition-delay:840ms;">
        <span class="case-eyebrow small">Features</span>
        <div class="case-feature-row">${features}</div>
      </section>

      <!-- Challenges -->
      <section class="case-section reveal" style="transition-delay:960ms;">
        <span class="case-eyebrow small">Challenges &amp; Solutions</span>
        <div class="case-challenges-grid">${challenges}</div>
      </section>

      <!-- Bottom back link -->
      <div class="case-bottom-back">
        <a class="case-bottom-back-link" href="projects.html">&larr; Back to Projects</a>
      </div>
    </div>
  `;

  initRevealAnimations();
}
```

**Key features:**
- Reads query parameter from URL using `URLSearchParams`
- Searches for project in data array using `.find()`
- Error handling for non-existent projects
- Sequential section animations with staggered delays
- All content populated from single data object
- `document.title` updated for SEO/browser tab

### 10. Honorable Mentions Rendering (`renderHonorableMentions()`)

```javascript
function renderHonorableMentions() {
  const target = document.getElementById("honorable-mentions");
  if (!target) return;

  target.innerHTML = honorableMentionsData
    .map((project, index) => {
      const tagsList = project.tags
        .map((tag) => `<span class="mini-tag">${tag}</span>`)
        .join("");
      
      return `
        <div class="mini-project-card reveal" style="transition-delay:${(index % 3) * 80}ms;">
          <div class="mini-project-header">
            <div class="mini-project-icon">${project.icon}</div>
            <h4>${project.title}</h4>
          </div>
          <p class="mini-project-desc">${project.description}</p>
          <div class="mini-tags">${tagsList}</div>
        </div>
      `;
    })
    .join("");

  initRevealAnimations();
}
```

### 11. Helper Functions

```javascript
// Split text by double newlines and wrap in paragraphs
function renderParagraphs(text, className) {
  return text
    .split("\n\n")
    .map((paragraph) => `<p class="${className}">${paragraph}</p>`)
    .join("");
}

// Create colored tech tags based on technology type
function renderTechTag(tag, baseClass) {
  const techClass = `tech-${tag
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
  }`;
  return `<span class="${baseClass} ${techClass}">${tag}</span>`;
}
```

### 12. DOMContentLoaded Entry Point

```javascript
document.addEventListener("DOMContentLoaded", () => {
  initTheme();                    // Apply saved theme
  initNavbar();                   // Setup navbar behavior
  initHero();                     // Start typing animation
  initRevealAnimations();         // Setup scroll animations
  initSkillBars();                // Setup skill bar animations
  renderFeaturedProjects();       // Render home page projects
  renderProjectsPage();           // Render projects listing
  renderHonorableMentions();      // Render honorable mentions
  renderProjectDetail();          // Render project detail page
});
```

All functions run on page load. Each function checks if its target element exists before running, so it doesn't break on pages that don't have that element.

---

## 🎨 CSS Architecture

### Comprehensive Breakdown

`style.css` is 2,600+ lines organized into logical sections. Here's the complete architecture:

### 1. CSS Variables & Reset

**Lines 1–60:**
- Google Fonts import
- CSS variables for light theme (32 variables)
- CSS variables for dark theme (same variables, different values)
- Universal reset (`*` selector)
- HTML smooth scroll
- Body defaults

**Variables include:**
- Colors: `--bg`, `--text`, `--accent`
- Spacing: Used through the site
- Shadows: `--accent-glow` for effects
- Gradients: `--name-gradient`, `--projects-title-gradient`

### 2. Base Styles (Lines 61–150)

```css
body {
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  transition: background-color 0s, color 0s;
}

.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 1rem;
  width: 100%;
}

.section {
  padding: 4.5rem 0;
}
```

**Purpose:** Foundation for all layouts and typography

### 3. Typography System (Lines 151–200)

```css
.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  margin-bottom: 0.8rem;
}

.eyebrow {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

**Key technique:** `clamp(min, preferred, max)` for responsive sizing without breakpoints

### 4. Component Styles

#### Buttons (Lines 250–330)
```css
.btn {
  border: 1px solid var(--accent);
  border-radius: 999px;
  display: inline-flex;
  font-weight: 600;
  padding: 0.8rem 1.35rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.btn:hover {
  box-shadow: 0 18px 30px var(--accent-glow);
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--accent);
  color: var(--bg);
}

.btn-secondary {
  background: transparent;
  color: var(--accent);
}
```

**Pattern:** Pill-shaped buttons with hover lift and glow

#### Navbar (Lines 331–450)
- Sticky positioning with backdrop blur
- Hamburger menu toggle animation
- Active nav link underline
- Theme switcher dots
- Mobile collapse behavior

**Key CSS:**
```css
.site-header {
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.site-header.scrolled {
  box-shadow: 0 14px 30px var(--accent-glow);
}

.nav-links a::after {
  background: var(--accent);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}
```

#### Hero Section (Lines 451–600)
- Full viewport section with geometric animations
- Gradient text effect
- Typing animation cursor
- Avatar with rotating ring
- Fade-in staggered animations

**Key CSS:**
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-name {
  background: var(--name-gradient);
  background-clip: text;
  color: transparent;
  font-size: clamp(3.4rem, 10vw, 6rem);
}

.avatar-ring {
  animation: spinRing 20s linear infinite;
  border: 2px dashed var(--accent);
}

.hero-fade {
  opacity: 0;
}

.hero-ready .hero-fade {
  animation: heroFadeUp 0.8s ease forwards;
}
```

**Gradient text technique:**
```css
background: linear-gradient(90deg, #111111, #444444);
background-clip: text;
color: transparent;
```

#### Cards & Projects (Lines 601–850)
- Project cards with hover effects
- Card shadows and borders
- Thumbnail overlays
- Tag styling
- Feature chips

**Key CSS:**
```css
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  transition: all 0.35s ease;
}

.project-card:hover {
  box-shadow: 0 8px 32px var(--accent-glow);
  transform: scale(1.025);
}

.project-thumb img {
  transition: transform 0.45s ease, filter 0.45s ease;
}

.project-card:hover .project-thumb img {
  filter: saturate(1.05);
  transform: scale(1.04);
}
```

#### Timeline Sections (Lines 851–950)
- Vertical center line
- Alternating left/right cards
- Pulse/ripple animations on dots
- Mobile collapse to left alignment

**Key CSS:**
```css
.timeline-shell::before {
  background: var(--border);
  content: "";
  height: 100%;
  left: 50%;
  position: absolute;
  width: 2px;
}

.timeline-dot {
  animation: pulseDot 2.4s ease-out infinite;
  background: var(--accent);
  border-radius: 50%;
}

.timeline-dot::after {
  animation: pulseDot 2s infinite;
  border: 1px solid var(--accent);
}
```

#### Skills Section (Lines 951–1050)
- Skill rows with icon, label, track, percentage
- Responsive grid layout
- Progress bar styling
- Animated fill on scroll

**Key CSS:**
```css
.skill-row {
  display: grid;
  grid-template-columns: auto minmax(0, 130px) minmax(0, 1fr) auto;
  gap: 0.95rem;
}

.skill-track {
  background: var(--skill-track);
  border-radius: 999px;
  overflow: hidden;
  height: 0.72rem;
}

.skill-fill {
  background: var(--skill-fill);
  transition: width 1.1s ease;
  width: 0;
}
```

#### Footer (Lines 1051–1150)
- Social icon links
- Hover fill animations
- Responsive layout
- Copyright text

**Key CSS:**
```css
.social-link {
  background: var(--bg-card);
  border-radius: 50%;
  transition: all 0.25s ease;
}

.social-link:hover {
  background: var(--accent);
  color: var(--bg);
  transform: translateY(-3px);
}
```

#### Reveal Animations (Lines 1151–1200)
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  transform: translate(-28px, 24px);
}

.reveal-left.is-visible {
  transform: translate(0, 0);
}
```

### 5. Animation Keyframes (Lines 1201–1350)

All animations defined with `@keyframes`:

```css
@keyframes floatGeo {
  0%, 100% {
    transform: translateY(0) rotate(var(--rotate, 0deg));
  }
  50% {
    transform: translateY(-10px) rotate(var(--rotate, 0deg));
  }
}

@keyframes spinRing {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulseDot {
  0% {
    opacity: 0.7;
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(1.75);
  }
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blinkCursor {
  50% {
    opacity: 0;
  }
}

@keyframes aboutPulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}

@keyframes driftShape {
  0%, 100% {
    transform: rotate(25deg) translateY(0);
  }
  50% {
    transform: rotate(31deg) translateY(-8px);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.18);
  }
}
```

### 6. Responsive Breakpoints (Lines 1351–1650)

**Mobile First Approach:**
```css
/* Default styles for mobile */
.skills-grid {
  grid-template-columns: 1fr;  /* Single column */
}

/* At 640px+ (tablet) */
@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* At 768px+ (large tablet) */
@media (min-width: 768px) {
  .section {
    padding: 5.5rem 0;  /* More spacing */
  }
}

/* At 900px+ (desktop) */
@media (min-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile-only changes */
@media (max-width: 767px) {
  .nav-panel {
    position: absolute;
    opacity: 0;
    transform: translateY(-10px);
  }

  .nav-panel.open {
    opacity: 1;
    transform: translateY(0);
  }

  .menu-toggle {
    display: inline-flex;
  }

  .timeline-shell::before {
    left: 0.5rem;  /* Move line to left on mobile */
  }
}
```

**Breakpoint Summary:**
- **320px–639px** — Mobile (no explicit breakpoint, base styles)
- **640px–767px** — Tablet (2-column grids)
- **768px–899px** — Large tablet (2–3 columns)
- **900px+** — Desktop (3–4 columns)

### 7. Technology-Specific Coloring (Lines 1651–1750)

```css
.tech-html {
  background: rgba(227, 79, 38, 0.12);
  border-color: rgba(227, 79, 38, 0.28);
  color: #e34f26;
}

.tech-css {
  background: rgba(21, 114, 182, 0.12);
  border-color: rgba(21, 114, 182, 0.28);
  color: #1572b6;
}

.tech-javascript {
  background: rgba(247, 223, 30, 0.18);
  border-color: rgba(247, 223, 30, 0.34);
  color: #8a6a00;
}

.tech-firebase {
  background: rgba(255, 167, 38, 0.16);
  border-color: rgba(255, 167, 38, 0.34);
  color: #d97900;
}

/* All other tech uses accent color */
.tech-vanilla-js,
.tech-react,
.tech-node-js {
  background: color-mix(in srgb, var(--accent) 10%, var(--bg-card));
  border-color: color-mix(in srgb, var(--accent) 28%, transparent);
  color: var(--accent);
}
```

### 8. About Page Styles (Lines 1751–2000)

- Profile header styling
- Alternating background sections
- Tool cards grid
- Timeline styling
- Hobby cards with emoji icons
- AI tools section

### 9. Special Effects (Lines 2001–2100)

- Hobbies section with gradient backgrounds
- AI tools section styling
- Honorable mentions mini cards
- Mini tags and icons

### 10. Icon Masks (Lines 2101–2200)

```css
.icon-html {
  color: #e34f26;
  mask-image: url("https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg");
  -webkit-mask-image: url("https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg");
}

.icon-css {
  color: #1572b6;
  mask-image: url("https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css.svg");
}

/* All tech icons follow same pattern */
```

**Why masks?** SVG icons are loaded as mask images, then colored with `color` property. This allows recoloring without loading multiple icon files.

---

## 📄 Pages Breakdown

### Home Page (`index.html`)

**Purpose:** Landing page showcasing Gaurav as a developer with skills, featured projects, and clear CTAs.

**Sections (in order):**
1. **Sticky Navbar** — Global navigation
2. **Hero Section** — Large headline, typing animation, avatar, CTAs
3. **About Preview** — Short bio with link to full about page
4. **Skills Snapshot** — 10 skills with progress bars (first 6 shown on mobile)
5. **Featured Projects** — First 2 projects from projectsData
6. **Footer** — Social links, copyright

**Page-Specific JavaScript:**
- `initHero()` — Starts typing animation on page load
- `renderFeaturedProjects()` — Populates featured projects grid

**Unique CSS:**
- `.hero` section with geometric shapes
- `clamp()` for responsive hero font sizing
- Gradient text on name
- Typing animation cursor

---

### About Page (`about.html`)

**Purpose:** Deep dive into Gaurav's background, skills, journey, and interests.

**Sections (in order):**
1. **Sticky Navbar** — Global navigation
2. **Profile Header** — Photo, name, role, tagline
3. **About Me Story** — Multi-paragraph bio in styled card
4. **Technical Skills** — 12 skills grid with progress bars, devicon icons
5. **AI & Agentic Tools** — 8 AI tools with descriptions and use cases
6. **My Journey Timeline** — 7 timeline items (2022–2026)
7. **Hobbies Section** — 4 hobbies with emojis and descriptions
8. **Footer** — Social links, copyright

**Page-Specific JavaScript:**
- None (all content static in HTML)

**Unique CSS:**
- `.about-page` class with alternating background sections
- Timeline vertical line with alternating left/right cards
- Grid layouts that adapt: 2 cols → 3 cols → 4 cols (600px → 900px)
- Hobby and AI tool cards with hover effects
- Pulse animations on timeline dots

---

### Projects Page (`projects.html`)

**Purpose:** Showcase all projects and side projects with cards leading to detail pages.

**Sections (in order):**
1. **Sticky Navbar** — Global navigation
2. **Page Header** — Eyebrow, gradient title, description, divider, highlight pills
3. **Main Projects Grid** — All 4 projects from projectsData
4. **Honorable Mentions Section** — 12 mini projects with emoji icons
5. **Footer** — Social links, copyright

**Page-Specific JavaScript:**
- `renderProjectsPage()` — Populates main projects grid
- `renderHonorableMentions()` — Populates honorable mentions grid

**Unique CSS:**
- Floating orb animations in page background
- Projects grid: 1 col → 2 cols (responsive)
- Project cards with numbered labels, thumbnails, staggered animations
- Mini project cards grid: auto-fill responsive layout
- Honorable mentions section background color

---

### Project Detail Page (`project-detail.html`)

**Purpose:** Dynamic single-page for detailed project case studies with story, technical info, screenshots, and challenges.

**Sections (dynamically rendered):**
1. **Sticky Navbar** — Global navigation
2. **Back Navigation** — Link to projects page
3. **Project Title** — Gradient heading
4. **Hero Image** — Full-width project screenshot
5. **Case Study Header** — Title, tagline, tech tags, CTA buttons (Demo, Source)
6. **The Story** — Multi-paragraph narrative + idea highlight block
7. **How It Works** — Technical explanation of architecture and flow
8. **Built With** — Technology chips showing all tech used
9. **Screenshots** — Grid of project screenshots (2 columns on desktop)
10. **Features** — Feature chips with emoji labels
11. **Challenges & Solutions** — 2-column grid (1 col on mobile)
12. **Back Navigation (Bottom)** — Link to projects page
13. **Footer** — Social links, copyright

**Page-Specific JavaScript:**
- `renderProjectDetail()` — Entire page dynamically rendered based on `?id=` parameter

**Unique CSS:**
- Case study layout with centered max-widths
- Challenge/solution entries with alternating colors
- Screenshot grid with hover zoom/glow
- Feature chips with box shadows
- Idea block with accent left border
- Sequential fade-in animations with staggered delays

---

## 📊 Project Data Structure

### Complete projectsData Array Format

Every project in the `projectsData` array follows this structure:

```javascript
{
  // Unique identifier — used for ?id= query parameter
  id: "1",

  // Project name — displayed in cards, title page
  title: "AnnaDaan",

  // Category label — shown in card as "01 — WEB APP"
  category: "WEB APP",

  // One-liner pitch — shown in project detail header
  tagline: "A food donation platform that connects apartment donors, collectors, and gaushalas to reduce waste in real time.",

  // Card thumbnail image — path to image in /img folder
  thumbnail: "img/annnadaan/Screenshot 2026-04-19 195149.png",

  // Large hero image — shown at top of project detail page
  heroImage: "img/annnadaan/Screenshot 2026-04-19 195149.png",

  // 1-2 sentence description — displayed in project card body
  shortDesc: "A multi-role web app built to turn leftover vegetarian food into timely gaushala deliveries instead of daily waste.",

  // Main tech stack — first 3 shown in cards, all shown on detail page
  techStack: ["HTML", "CSS", "JavaScript", "Firebase"],

  // Detailed tech list — shown as chips on project detail page
  builtWith: ["HTML5", "CSS3", "Vanilla JS", "ES6 Modules", "Firebase Firestore"],

  // Feature list with emojis — shown in features section
  features: [
    "🍽️ Donor Listings",
    "🚚 Collector Workflow",
    "🐄 Gaushala Delivery Tracking",
    "🔔 Live Notifications",
    "🏆 Top Donors Leaderboard",
    "🔐 Role-Based Login",
    "⚙️ Admin Controls"
  ],

  // Multi-paragraph backstory — shown in "The Story" section
  theStory: "AnnaDaan came from a very practical observation: apartments generate food waste every day, while gaushalas still struggle to get fresh supplies for cows. Instead of treating leftover food as trash, the platform creates a digital bridge between people who have usable vegetarian food and the collectors who can route it where it is actually needed.",

  // Core insight/value proposition — highlighted in idea block
  theIdea: "The core question was simple: why does useful food still end up in wet bins when the need already exists nearby? AnnaDaan answers that by giving donors, collectors, gaushalas, and admins a shared real-time system for listing, pickup, delivery, and confirmation.",

  // Live demo URL — used in "Live Demo →" button
  demoLink: "https://paliwalgaurav27.github.io/AnnaDaan/index.html",

  // Source code repository — used in "Source Code →" button
  sourceLink: "https://github.com/paliwalgaurav27/AnnaDaan",

  // Multi-paragraph technical explanation — shown in "How It Works"
  howItWorks: "The app starts with role-based registration and login for donors, collectors, gaushalas, and admins. Input is validated on the frontend, then saved through modular JavaScript utilities into Firebase Firestore so user, listing, and delivery records stay synced across sessions...",

  // Array of screenshot paths — shown in screenshot grid
  screenshots: [
    "img/annnadaan/Screenshot 2026-04-19 195149.png",
    "img/annnadaan/Screenshot 2026-04-19 195209.png",
    "img/annnadaan/Screenshot 2026-04-19 195308.png",
    "img/annnadaan/Screenshot 2026-04-19 195428.png"
  ],

  // Array of problem/solution pairs — shown in challenges section
  challenges: [
    {
      problem: "The same phone number could register multiple times, which created duplicate user records and broken role flows.",
      solution: "I added a uniqueness check before saving user data so registration validates existing phone numbers first."
    },
    {
      problem: "Collectors, donors, and gaushalas needed different dashboards, and wrong-role navigation caused confusion.",
      solution: "I implemented role-based redirects and context-aware path handling so users land on the correct dashboard consistently."
    },
    // ... more challenges
  ]
}
```

### Example: Complete AnnaDaan Project Object

```javascript
{
  id: "1",
  title: "AnnaDaan",
  category: "WEB APP",
  tagline: "A food donation platform that connects apartment donors, collectors, and gaushalas to reduce waste in real time.",
  thumbnail: "img/annnadaan/Screenshot 2026-04-19 195149.png",
  heroImage: "img/annnadaan/Screenshot 2026-04-19 195149.png",
  shortDesc: "A multi-role web app built to turn leftover vegetarian food into timely gaushala deliveries instead of daily waste.",
  techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
  builtWith: ["HTML5", "CSS3", "Vanilla JS", "ES6 Modules", "Firebase Firestore"],
  features: [
    "🍽️ Donor Listings",
    "🚚 Collector Workflow",
    "🐄 Gaushala Delivery Tracking",
    "🔔 Live Notifications",
    "🏆 Top Donors Leaderboard",
    "🔐 Role-Based Login",
    "⚙️ Admin Controls"
  ],
  theStory: "AnnaDaan came from a very practical observation: apartments generate food waste every day, while gaushalas still struggle to get fresh supplies for cows. Instead of treating leftover food as trash, the platform creates a digital bridge between people who have usable vegetarian food and the collectors who can route it where it is actually needed.",
  theIdea: "The core question was simple: why does useful food still end up in wet bins when the need already exists nearby? AnnaDaan answers that by giving donors, collectors, gaushalas, and admins a shared real-time system for listing, pickup, delivery, and confirmation.",
  demoLink: "https://paliwalgaurav27.github.io/AnnaDaan/index.html",
  sourceLink: "https://github.com/paliwalgaurav27/AnnaDaan",
  howItWorks: "The app starts with role-based registration and login for donors, collectors, gaushalas, and admins. Input is validated on the frontend, then saved through modular JavaScript utilities into Firebase Firestore so user, listing, and delivery records stay synced across sessions.\n\nOnce a donor creates a listing, it becomes available to collectors in real time. Collectors can review pending donations, mark them as picked up, group deliveries, and complete the delivery cycle for a gaushala without needing a separate backend server.\n\nGaushalas then confirm incoming deliveries, while the admin dashboard provides visibility into users, listings, and delivery records. Shared modules like `auth.js`, `storage.js`, and `notification.js` keep the flow consistent, support duplicate-user checks, and power the floating live updates shown on the landing page.",
  screenshots: [
    "img/annnadaan/Screenshot 2026-04-19 195149.png",
    "img/annnadaan/Screenshot 2026-04-19 195209.png",
    "img/annnadaan/Screenshot 2026-04-19 195308.png",
    "img/annnadaan/Screenshot 2026-04-19 195428.png"
  ],
  challenges: [
    {
      problem: "The same phone number could register multiple times, which created duplicate user records and broken role flows.",
      solution: "I added a uniqueness check before saving user data so registration validates existing phone numbers first."
    },
    {
      problem: "Collectors, donors, and gaushalas needed different dashboards, and wrong-role navigation caused confusion.",
      solution: "I implemented role-based redirects and context-aware path handling so users land on the correct dashboard consistently."
    },
    {
      problem: "Different pages lived at different folder depths, which caused path and navigation conflicts during development.",
      solution: "I added dynamic path detection so shared navigation logic can understand its current context and build the right links."
    },
    {
      problem: "Authentication state could be lost too easily when users changed tabs or reopened the app.",
      solution: "I used browser storage with a remember-me option so sessions can persist more reliably for returning users."
    }
  ]
}
```

### How Data Flows Through the Site

1. **Home page** → Shows first 2 projects via `renderFeaturedProjects()`
2. **Projects page** → Shows all projects via `renderProjectsPage()`
3. **Project detail page** → Takes `?id=` param, finds project, renders via `renderProjectDetail()`
4. **Add new project** → Just add object to array; all pages auto-update

---

## 🎬 Animations Reference

| Animation Name | Triggers | Duration | Where Used | Effect |
|:---------------|:---------|:---------|:-----------|:--------|
| **floatGeo** | On load (infinite) | 6–9s | Geometric shapes in hero | Up/down floating motion |
| **blinkCursor** | On typing animation | 0.8s | Typing line cursor | Blink on/off |
| **spinRing** | On load (infinite) | 20s | Profile photo ring | Continuous 360° rotation |
| **pulseDot** | On load (infinite) | 2.4s | Timeline dots | Expanding ripple outward |
| **heroFadeUp** | On page load | 0.8s | Hero section elements | Fade up from below (staggered) |
| **aboutPulse** | On load (infinite) | 2s | About page timeline dot halo | Pulse expansion |
| **driftShape** | On load (infinite) | 8s | Project thumbnail decorative shape | Subtle drift + rotation |
| **pulseGlow** | On load (infinite) | 5s | Project thumbnail glow orb | Scale pulse |
| **reveal** | On scroll (CSS) | 0.6s | All `.reveal` elements | Fade up + opacity transition |
| **hover scale** | On hover (CSS) | 0.35s | Cards, buttons | Small scale up + shadow |
| **project hover** | On hover (CSS) | 0.45s | Project thumbnails | Zoom + saturate |

### Scroll-Triggered Animations

All `.reveal`, `.reveal-left`, `.reveal-right` classes trigger via IntersectionObserver when element enters viewport (14% visible). JavaScript adds `.is-visible` class, which CSS transitions:

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```

### Animation Implementation Patterns

**Pattern 1: CSS-Only Infinite Animations**
```css
@keyframes spinRing {
  to { transform: rotate(360deg); }
}

.avatar-ring {
  animation: spinRing 20s linear infinite;
}
```

**Pattern 2: JavaScript-Triggered CSS Animations**
```javascript
// JavaScript adds class on page load
hero.classList.add("hero-ready");

// CSS applies animations when class is present
.hero.hero-ready .hero-fade {
  animation: heroFadeUp 0.8s ease forwards;
}
```

**Pattern 3: Intersection Observer Triggers**
```javascript
// Observe elements, add class when visible
observer.observe(element);
// When visible: element.classList.add("is-visible");

// CSS transitions on class change
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease;
}
```

**Pattern 4: Hover State Animations**
```css
.project-card {
  transition: all 0.35s ease;
}

.project-card:hover {
  transform: scale(1.025);
  box-shadow: 0 8px 32px var(--accent-glow);
}
```

---

## 📱 Responsive Design

### Breakpoints & Strategy

**Strategy:** Mobile-first. Base styles target mobile (320px+), then add complexity at larger breakpoints.

### Breakpoint Details

#### Mobile (< 640px)
- Single column layouts
- Full-width containers
- Hamburger menu visible
- Smaller font sizes
- Reduced padding/spacing
- Hero section auto height (not min-height 100vh)
- Timeline collapsed to left alignment

**Key classes added:**
- `.menu-toggle` shown (display: inline-flex)
- `.nav-panel` collapses into dropdown menu
- One-column grids (`.skills-grid: 1fr`)

#### Tablet (640px – 767px)
- 2-column grids begin
- Menu still hamburger
- Larger padding
- Medium font sizes

**Key breakpoint:**
```css
@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-page .about-tools-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  }
}
```

#### Large Tablet (768px – 899px)
- 2–3 column grids
- Desktop nav (no hamburger)
- Better spacing
- Larger typography

**Key breakpoint:**
```css
@media (min-width: 768px) {
  .section {
    padding: 5.5rem 0;  /* More vertical space */
  }
  .menu-toggle {
    display: none;  /* Hide hamburger */
  }
}
```

#### Desktop (900px+)
- 3–4 column grids
- Maximum width container
- Generous spacing
- Largest fonts
- All animations visible

**Key breakpoint:**
```css
@media (min-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  }
  .about-page .about-tools-grid {
    grid-template-columns: repeat(4, 1fr);  /* 4 columns */
  }
}
```

### Component Responsiveness

#### Navbar
- Mobile: Hamburger menu (visible below 768px)
- Desktop: Full horizontal nav

#### Hero
- Mobile: `min-height: auto`
- Desktop: `min-height: 100vh`

#### Hero Typography
```css
.hero-name {
  font-size: clamp(3.4rem, 10vw, 6rem);  /* Scales between 3.4rem–6rem based on viewport */
}
```

#### Skills Grid
- Mobile: 1 column
- 640px+: 2 columns
- 900px+: 3 columns

#### Projects Grid
- Mobile: 1 column
- 640px+: 2 columns

#### Timeline
- Mobile: Left-aligned (vertical line on left)
- Desktop: Alternating left/right

```css
@media (max-width: 767px) {
  .timeline-shell::before {
    left: 0.5rem;  /* Move line to left */
  }

  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    justify-content: flex-start;  /* All items left-aligned */
  }
}
```

#### Screenshot Grid
- Mobile: 1 column
- 640px+: 2 columns

#### About Tools
- Mobile: 2 columns
- 640px+: 3 columns
- 900px+: 4 columns

### Font Scaling with `clamp()`

Instead of multiple breakpoints for fonts, use `clamp()`:

```css
.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
}
```

**Meaning:**
- Minimum: `2rem`
- Preferred: `4vw` (4% of viewport width)
- Maximum: `3rem`

This fluid sizing scales smoothly without breakpoints.

---

## ⚡ Performance & Best Practices

### 1. No Dependencies = No Overhead

✅ **Zero npm packages** — No bundle size, no install time
✅ **No build step** — Open HTML directly in browser
✅ **No runtime overhead** — Plain JavaScript, no framework parsing
✅ **Instant loading** — All files are text (HTML/CSS/JS)

### 2. Optimized Resource Loading

✅ **CSS loaded synchronously** — Render-blocking but essential for styling
✅ **JavaScript deferred** — Script tags with `defer` (below</body>)
✅ **Google Fonts** — Only 1 import, 4 weights (Inter 400, 500, 600, 700)
✅ **Devicon CDN** — SVG icons lazy-loaded on demand
✅ **Images optimized** — Use placehold.co for placeholders

### 3. Animation Performance

✅ **IntersectionObserver** — Only compute animations when elements enter viewport
✅ **GPU acceleration** — Use `transform` & `opacity` (not `left`/`top`/`width`)
✅ **Will-change wisely** — Applied only to animated elements
✅ **CSS animations** — Delegated to browser, not JavaScript
✅ **Debounced scroll** — Only one scroll listener (on navbar)

**Example - Good:**
```css
.project-card:hover {
  transform: scale(1.025);  /* GPU accelerated */
}
```

**Example - Bad:**
```css
.project-card:hover {
  left: 5px;  /* Causes repaints */
}
```

### 4. DOM Efficiency

✅ **Template literals** — Build HTML strings once, inject once
✅ **Event delegation** — Use `addEventListener` on parent, not individual items
✅ **querySelector caching** — Store selectors in variables
✅ **Minimal reflows** — Batch DOM changes

**Example:**
```javascript
// Good - Batch DOM read/writes
const cards = document.querySelectorAll(".project-card");  // Read
cards.forEach(card => card.classList.add("visible"));     // Write

// Bad - Alternating reads/writes
document.querySelectorAll(".card").forEach(card => {
  card.style.width = card.offsetWidth + "px";  // Reflow trigger
});
```

### 5. Semantic HTML

✅ **Proper heading hierarchy** — h1 > h2 > h3
✅ **Semantic elements** — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
✅ **ARIA labels** — `aria-label`, `aria-pressed`, `aria-expanded` on interactive elements
✅ **Alt text** — All images have descriptive alt text
✅ **Form labels** — Linked to form fields (even if hidden)

### 6. Accessibility

✅ **Keyboard navigation** — Tab through all interactive elements
✅ **Focus states** — Visible outline/highlight on focus
✅ **Color contrast** — WCAG AA compliant
✅ **Screen reader friendly** — Semantic markup + ARIA
✅ **Reduced motion** — Respects prefers-reduced-motion (optional)

### 7. CSS Optimization

✅ **CSS variables** — Reuse values, easier maintenance
✅ **Minimal specificity** — Avoid deep nesting
✅ **No unused CSS** — Every rule has a purpose
✅ **Efficient selectors** — Avoid `*` and expensive pseudo-selectors
✅ **Grouping** — Related rules together for readability

### 8. JavaScript Optimization

✅ **Single entry point** — DOMContentLoaded listener
✅ **Reusable observer** — IntersectionObserver instance reused
✅ **Early returns** — Exit functions if elements don't exist
✅ **Arrow functions** — Modern, concise syntax
✅ **Destructuring** — Clean variable extraction

### 9. Image & Asset Strategy

✅ **Placehold.co** — Generate placeholder images dynamically (no files)
✅ **SVG social icons** — Inline in HTML, scalable
✅ **Devicon CDN** — Reuse existing CDN instead of local files
✅ **Lazy loading** — Images load on viewport visibility
✅ **Responsive images** — Use `srcset` if needed

### 10. Caching & Storage

✅ **localStorage** — Persist theme choice across sessions
✅ **No service worker yet** — Could add PWA support later
✅ **Browser cache headers** — Served by GitHub Pages with good defaults
✅ **CSS-in-HTML** — Single file per page (no separate CSS requests)

---

## 🚀 How to Run Locally

### Option 1: Direct File Open (Fastest)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/paliwalgaurav27/portfolio.git
   ```

2. **Navigate to folder:**
   ```bash
   cd portfolio
   ```

3. **Open index.html:**
   - Double-click `index.html` in file explorer
   - Or right-click → "Open with" → browser
   - Or drag file into browser tab

**Pros:** No setup required, instant preview
**Cons:** Some older browsers may have CORS issues with localStorage

### Option 2: VS Code Live Server (Recommended)

1. **Clone & open in VS Code:**
   ```bash
   git clone https://github.com/paliwalgaurav27/portfolio.git
   code portfolio
   ```

2. **Install Live Server extension:**
   - Open Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Click Install (by Ritwick Dey)

3. **Start Live Server:**
   - Right-click `index.html` → "Open with Live Server"
   - Or click "Go Live" button (bottom right)
   - Browser opens at `http://localhost:5500`

4. **Automatic reload:**
   - Edit any file and save
   - Browser auto-refreshes

**Pros:** Hot reload, no CORS issues, professional setup
**Cons:** Requires VS Code + extension

### Option 3: Python Simple Server

```bash
# If you have Python 3.x installed
cd portfolio
python -m http.server 8000
```

Then open `http://localhost:8000` in browser.

### Option 4: Node.js http-server

```bash
# Install globally (first time only)
npm install -g http-server

# Run
cd portfolio
http-server

# Opens at http://localhost:8080
```

### Verifying It Works

After opening locally:
1. Check theme toggle (sun/moon dots in navbar)
2. Scroll to see animations trigger
3. Click project cards to navigate
4. Open DevTools (F12) to check console for errors

---

## 📤 How to Deploy

### Current Setup: GitHub Pages

This portfolio is already hosted on GitHub Pages at:
**https://paliwalgaurav27.github.io/portfolio/**

### How GitHub Pages Deployment Works

1. **Repository structure:**
   ```
   paliwalgaurav27/portfolio/
   ├── index.html
   ├── about.html
   ├── projects.html
   ├── project-detail.html
   ├── css/
   ├── js/
   ├── img/
   └── README.md (this file)
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click Save

3. **Automatic deployment:**
   - Push changes to GitHub
   - GitHub Pages auto-rebuilds
   - Changes live in 1–2 minutes

### Custom Domain (Optional)

To use your own domain (e.g., `gaurav.dev`):

1. **Buy domain** from GoDaddy, Namecheap, etc.
2. **Go to domain registrar settings**
3. **Add DNS records:**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153  (GitHub's IP)
   
   Type: CNAME
   Name: www
   Value: paliwalgaurav27.github.io
   ```
4. **In GitHub repository Settings → Pages:**
   - Custom domain: `yourdomain.com`
   - Enforce HTTPS: ✓
5. **Wait 24 hours** for DNS propagation

### Alternative Hosting Options

**Netlify** (Free, auto-deploy from GitHub):
```bash
# Connect GitHub repo → auto-deploy on push
# Features: Free SSL, CDN, preview deployments
```

**Vercel** (Free, optimized for static sites):
```bash
# Similar to Netlify
# Features: Zero-config deployment
```

**Firebase Hosting** (Free tier available):
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## 🎨 How to Customize

### 1. Change Your Name

**Search for "Gaurav Paliwal" and replace with your name:**

- [index.html](index.html#L5) — Meta description, page title
- [about.html](about.html#L5) — Profile name, page title
- [projects.html](projects.html#L5) — Page title
- [project-detail.html](project-detail.html#L5) — Page title
- [main.js](js/main.js#L1) — In demo links/comments (optional)
- [README.md](README.md) — Throughout docs (optional)

---

### 2. Change Your Profile Image

**Replace placehold.co URLs with your actual image:**

In [index.html](index.html#L56):
```html
<!-- Before -->
<img class="avatar-photo" src="https://placehold.co/320x320/F3F4F6/111111?text=Gaurav" alt="Portrait of Gaurav Paliwal">

<!-- After -->
<img class="avatar-photo" src="img/your-photo.jpg" alt="Portrait of Your Name">
```

In [about.html](about.html#L48):
```html
<img class="avatar-photo" src="img/your-photo.jpg" alt="Portrait of Your Name">
```

**Tips:**
- Image should be square (320x320px or larger)
- Use JPG for smaller file size
- Place in `/img` folder
- Use descriptive alt text for accessibility

---

### 3. Update Your Bio

In [about.html](about.html#L74–77), replace the story paragraphs:

```html
<!-- Before -->
<p>I'm Gaurav, a self-taught frontend developer who switched from a commerce background to BCA...</p>

<!-- After -->
<p>Your custom bio here. Write 2–3 paragraphs about your journey...</p>
```

You can use **multiple `<p>` tags** for multiple paragraphs.

---

### 4. Update Skills & Percentages

In [js/main.js](js/main.js#L320–340), edit the skills section:

```html
<!-- In index.html, within .skill-row divs -->
<span class="skill-label">HTML5</span>
<div class="skill-track"><div class="skill-fill" data-progress="95"></div></div>
<span class="skill-percentage">95%</span>
```

Change the `data-progress` value (0–100) to update percentage.

---

### 5. Add/Edit Projects

**In [js/main.js](js/main.js#L1–200), edit the `projectsData` array:**

```javascript
// Add a new project object
{
  id: "5",
  title: "Your Project Name",
  category: "WEB APP",
  tagline: "Short description",
  thumbnail: "img/yourproject/screenshot.png",
  heroImage: "img/yourproject/screenshot.png",
  shortDesc: "1-2 sentence description for card",
  techStack: ["HTML", "CSS", "JavaScript"],
  builtWith: ["HTML5", "CSS3", "Vanilla JS"],
  features: ["Feature 1", "Feature 2", "Feature 3"],
  theStory: "Paragraph about why you built it...",
  theIdea: "What's the core insight...",
  demoLink: "https://your-demo-url.com",
  sourceLink: "https://github.com/yourname/project",
  howItWorks: "Technical explanation...",
  screenshots: ["img/yourproject/shot1.png", "img/yourproject/shot2.png"],
  challenges: [
    {
      problem: "A problem you faced",
      solution: "How you solved it"
    }
  ]
}
```

**Then everything auto-updates:**
- ✅ Home page featured projects
- ✅ Projects page grid
- ✅ Project detail page
- ✅ Animations & styling

---

### 6. Change Accent Color (Dark Theme)

In [css/style.css](css/style.css#L21–35), find the dark theme section:

```css
html[data-theme="dark"] {
  --accent: #00ffb2;          /* Change this line */
  --accent-glow: rgba(0, 255, 178, 0.25);  /* And this */
  /* ... rest stays the same ... */
}
```

Example new colors:
- **Purple:** `--accent: #a78bfa;` `--accent-glow: rgba(167, 139, 250, 0.25);`
- **Blue:** `--accent: #60a5fa;` `--accent-glow: rgba(96, 165, 250, 0.25);`
- **Pink:** `--accent: #ec4899;` `--accent-glow: rgba(236, 72, 153, 0.25);`
- **Red:** `--accent: #ef4444;` `--accent-glow: rgba(239, 68, 68, 0.25);`

**Every component using `var(--accent)` updates automatically!**

---

### 7. Change Fonts

In [css/style.css](css/style.css#L1), change the Google Fonts import:

```css
/* Before */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* After - Example: Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
```

Then update the font-family:
```css
body {
  font-family: "Poppins", sans-serif;  /* Changed from "Inter" */
}
```

**Popular alternatives:**
- **Poppins** — Modern, geometric, popular
- **Geist** — Sleek, minimalist (Vercel's font)
- **Outfit** — Contemporary, clean
- **Space Mono** — Monospace, code-like
- **DM Sans** — Professional, friendly

---

### 8. Add Social Links

In [index.html](index.html#L218–242), [about.html](about.html#L300), and [projects.html](projects.html#L182) footers:

```html
<!-- Before -->
<a class="social-link" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">

<!-- After - Your actual links -->
<a class="social-link" href="https://github.com/yourname" target="_blank" rel="noreferrer" aria-label="GitHub">
<a class="social-link" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
<a class="social-link" href="mailto:your.email@gmail.com" aria-label="Email">
```

**Social link format:**
- **GitHub:** `https://github.com/yourname`
- **LinkedIn:** `https://linkedin.com/in/yourprofile`
- **Twitter:** `https://twitter.com/yourhandle`
- **Email:** `mailto:your.email@example.com`
- **Portfolio:** `https://yoursite.com`

---

### 9. Update Page Descriptions (Meta Tags)

In each HTML file's `<head>`:

```html
<!-- index.html -->
<meta name="description" content="Your custom description for SEO (155 chars max)">

<!-- about.html -->
<meta name="description" content="Your about page description">

<!-- projects.html -->
<meta name="description" content="Your projects page description">
```

These appear in search results and social media previews.

---

### 10. Add More About Page Sections

In [about.html](about.html), add new sections by following the pattern:

```html
<section class="section about-section-name">
  <div class="container">
    <div class="about-section-head reveal">
      <span class="about-eyebrow">Category</span>
      <h2 class="about-section-title">Section Title</h2>
    </div>
    <!-- Your content here -->
  </div>
</section>
```

Examples:
- Certifications/Courses taken
- Publications or blog posts
- Speaking engagements
- Open source contributions
- Awards & recognition

---

## 🎯 Projects Showcased

### 1. AnnaDaan

**Category:** WEB APP
**What it does:** Food donation platform connecting donors, collectors, and gaushalas to reduce waste.
**Tech Stack:** HTML, CSS, JavaScript, Firebase
**Live:** https://paliwalgaurav27.github.io/AnnaDaan/index.html
**GitHub:** https://github.com/paliwalgaurav27/AnnaDaan

**Key Features:**
- Role-based login (Donor, Collector, Gaushala, Admin)
- Real-time donation listings
- Pickup workflow with delivery tracking
- Top donors leaderboard
- Admin dashboard

---

### 2. SPB & Co

**Category:** LANDING PAGE
**What it does:** Professional website for an accounting & financial consulting firm.
**Tech Stack:** HTML5, CSS3, JavaScript, Google Maps, WhatsApp API
**Live:** https://paliwalgaurav27.github.io/spb.co/service.html
**GitHub:** https://github.com/paliwalgaurav27/spb.co

**Key Features:**
- Multi-page responsive website
- Animated counter statistics
- WhatsApp integration for inquiries
- Embedded Google Maps
- Smooth scroll animations

---

### 3. JS Event Loop Explorer

**Category:** WEB APP / TOOL
**What it does:** Interactive visual simulator demystifying JavaScript's event loop.
**Tech Stack:** Vanilla JavaScript, HTML5, CSS3
**Live:** https://paliwalgaurav27.github.io/JS-Event-Loop-Explorer/
**GitHub:** https://github.com/paliwalgaurav27/JS-Event-Loop-Explorer

**Key Features:**
- 9 pre-built example scenarios
- Real-time queue visualization
- Step-by-step execution playback
- Custom code input
- Error detection for infinite loops

---

### 4. AI Stock Insight Platform

**Category:** FULL-STACK WEB APP
**What it does:** AI-powered analysis for Indian Nifty 250 stocks.
**Tech Stack:** Node.js, Express, Vite, Google Gemini API, Yahoo Finance API
**Live:** (Local only)
**GitHub:** https://github.com/paliwalgaurav27/stockapp

**Key Features:**
- Real-time stock prices
- AI-generated insight scorecard (0–100)
- Financial fundamentals display
- AI chat for stock questions
- Latest news from RSS feeds

---

### 5. DevMap

**Category:** WEB APP
**What it does:** Interactive web application providing honest, realistic guidance on different tech careers with structured learning paths.
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, SVG, LocalStorage API
**Live:** https://paliwalgaurav27.github.io/DevMap/
**GitHub:** https://github.com/paliwalgaurav27/DevMap

**Key Features:**
- Interactive roadmaps for 6 roles
- Structured learning flow (Spine, Branches, Gates)
- Smart quiz recommendation system
- Dark mode toggle
- SVG visual connector lines

---

### 6. DOM Inspector Playground

**Category:** WEB APP / TOOL
**What it does:** Visual educational tool for exploring the DOM, featuring an HTML editor, live preview, interactive DOM tree, and browser auto-fix comparison.
**Tech Stack:** Vanilla JavaScript, DOMParser, iframe.srcdoc, window.postMessage, Prettier Standalone
**Live:** https://paliwalgaurav27.github.io/DOM-Inspector-Playground/
**GitHub:** https://github.com/paliwalgaurav27/DOM-Inspector-Playground

**Key Features:**
- HTML editor with indentation
- Live rendered preview (iframe)
- Interactive DOM tree explorer
- Node selection & detail modal
- Browser fixes comparison diff

---

## ⚠️ Known Limitations & Future Improvements

### Known Limitations

❌ **Profile image is placeholder** — Using placehold.co, needs real photo
❌ **No contact form** — Could add EmailJS or Formspree integration
❌ **No blog section** — Could add markdown blog posts
❌ **Screenshots are placeholder** — Need real project screenshots
❌ **No search/filter on projects** — Could add by tech stack
❌ **No dark mode system preference** — Always defaults to user's choice in localStorage
❌ **No mobile app** — Web-only (could add PWA support)
❌ **No offline support** — Could add service worker for offline viewing
❌ **No comment system** — Could add Disqus or similar

### Future Improvements

✅ **Add PWA support** — Offline access, installable app
✅ **Add blog section** — Markdown posts, RSS feed
✅ **Add contact form** — EmailJS integration
✅ **Add project filters** — Filter by tech stack or category
✅ **Add dark mode auto-detect** — Respect `prefers-color-scheme` media query
✅ **Add analytics** — Google Analytics or Plausible
✅ **Add sitemap** — `sitemap.xml` for better SEO
✅ **Add search** — Client-side project search
✅ **Add download CV** — PDF resume download
✅ **Add comments** — On project detail pages
✅ **Add testimonials** — From clients or colleagues
✅ **Add email newsletter** — ConvertKit, Substack integration
✅ **Add video showcase** — Demo videos for projects
✅ **Add interactive resume** — Timeline visualization

---

## 👨‍💻 Developer Notes

### Development Philosophy

This portfolio embodies several core principles:

1. **Learn by Building** — No frameworks needed to build professional websites. Master the fundamentals first.
2. **AI as Collaborator** — Used AI tools (Claude, ChatGPT, Cursor) not as shortcuts but as learning partners and productivity multipliers.
3. **Simplicity Over Complexity** — Vanilla tech can achieve what frameworks do. Simpler code is more maintainable.
4. **User Experience First** — Smooth animations, responsive design, accessibility matter.
5. **Code as Communication** — Well-organized, documented code is as important as functionality.

### Tech Choices Explained

**Why Vanilla JavaScript?**
- Demonstrates web platform mastery
- No framework lock-in
- Smaller bundle size
- Faster load times
- Easier to debug

**Why CSS Variables?**
- Centralized theming
- Easy color customization
- Zero runtime overhead
- Browser-native solution

**Why IntersectionObserver?**
- Modern, efficient API
- No scroll listeners (bad for performance)
- Perfect for scroll-triggered animations

**Why localStorage?**
- No backend needed
- Persists user preferences
- Zero flicker on page load

### Build Process

There is NO build process. This is intentional.

- Open `index.html` directly in browser
- Edit any file and refresh
- No compilation step
- No tooling required
- Deploy by pushing to GitHub

### Code Organization

**File structure rationale:**
- **Single `main.js`** — All logic in one file (easier to understand, under 1000 lines)
- **Single `style.css`** — All styles in one file (easier to manage 2600 lines than 10+ files)
- **Semantic HTML** — Structure reflects purpose, not styling
- **CSS variables** — Centralized, easy to customize

---

## 📜 License

This project is licensed under the **MIT License**.

You are free to:
- ✅ Use this code for any purpose (personal, commercial)
- ✅ Modify and adapt the code
- ✅ Distribute the code
- ✅ Include in larger projects

The only requirement:
- ⚠️ Include a copy of the LICENSE file or license text

**Full license text:**
```
MIT License

Copyright (c) 2026 Gaurav Paliwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🤝 Connect With Me

### Links
- **GitHub:** [github.com/paliwalgaurav27](https://github.com/paliwalgaurav27)
- **Portfolio:** [paliwalgaurav27.github.io/portfolio/](https://paliwalgaurav27.github.io/portfolio/)
- **LinkedIn:** [linkedin.com/in/paliwalgaurav](https://linkedin.com/in/paliwalgaurav)
- **Email:** [gaurav@example.com](mailto:gaurav@example.com)
- **Twitter:** [@paliwalgaurav](https://twitter.com/paliwalgaurav)

### How This Website Demonstrates My Skills

✅ **HTML Mastery** — Semantic markup, accessibility, SEO best practices
✅ **CSS Expertise** — Complex layouts, animations, responsive design, theming
✅ **JavaScript Skills** — DOM manipulation, event handling, data-driven rendering, performance
✅ **Design Sense** — Visual hierarchy, color theory, user experience
✅ **Problem Solving** — Dynamic project rendering, scroll animations, theme system
✅ **Attention to Detail** — Micro-interactions, smooth transitions, edge cases
✅ **Ability to Ship** — Complete, deployed, professional product
✅ **Self-Learning** — Built using YouTube, online courses, and AI assistance

### For Hiring Managers

This portfolio demonstrates:
- **Production-ready code** — Professional structure, no dependencies
- **Performance focus** — Zero framework overhead, optimized animations
- **Accessibility commitment** — WCAG compliant, keyboard navigation, ARIA labels
- **Responsiveness** — Works on all devices (320px – 4K)
- **Communication** — Clean code, proper documentation, comprehensive README
- **Self-motivation** — Self-taught, built without frameworks, continuous learning

---

## 🙏 Acknowledgments

- **YouTube creators** — For foundational web development tutorials
- **Claude, ChatGPT, Cursor** — AI partners in building and learning
- **GitHub Pages** — Free hosting platform
- **Google Fonts & Devicon** — Quality design resources
- **Open source community** — For inspiration and best practices

---

**Last Updated:** April 21, 2026  
**Status:** Active & Maintained  
**Version:** 1.0.0

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
