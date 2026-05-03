const projectsData = [
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
      "\uD83C\uDF7D Donor Listings",
      "\uD83D\uDE9A Collector Workflow",
      "\uD83D\uDC04 Gaushala Delivery Tracking",
      "\uD83D\uDD14 Live Notifications",
      "\uD83C\uDFC6 Top Donors Leaderboard",
      "\uD83D\uDD10 Role-Based Login",
      "\u2699\uFE0F Admin Controls"
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
  },
  {
    id: "2",
    title: "SPB & Co",
    category: "LANDING PAGE",
    tagline: "A modern, responsive website showcasing professional accounting and financial consulting services with integrated client engagement features.",
    thumbnail: "img/SPB&CO/Screenshot 2026-04-20 101038.png",
    heroImage: "img/SPB&CO/Screenshot 2026-04-20 101038.png",
    shortDesc: "A fully responsive multi-page website for a professional Cost and Management Accounting firm. Features service showcases, animated statistics, and WhatsApp integration.",
    techStack: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
    builtWith: ["HTML5", "CSS Grid & Flexbox", "Vanilla JavaScript (DOM Manipulation)", "Intersection Observer API", "Fetch API", "WhatsApp Web API", "Google Maps Embed", "Font Awesome 6.0 Icons"],
    features: [
      "🎯 Multi-page responsive web app",
      "✨ Advanced scroll-triggered animations",
      "📊 Animated counter statistics",
      "📱 Mobile-responsive design",
      "💬 WhatsApp API integration",
      "📍 Embedded Google Maps offices",
      "🎨 Professional premium design"
    ],
    theStory: "I created this website for SPB & Co, a professional accounting firm founded by FCMA Sunder Prakash Budkoti. The client needed a modern online presence to compete with larger firms and reach corporate clients searching for financial advisory services. I designed and developed a sophisticated, animated website that showcases their 14+ years of experience, expert team, and comprehensive service offerings. Integrating WhatsApp messaging allowed them to connect with leads instantly, matching their modern approach to client engagement.",
    theIdea: "Professional accounting firms need to establish a credible, modern online presence to attract corporate clients. Many traditional firms lack websites that effectively showcase their expertise, team credentials, and service offerings. This project solves that problem by providing a professional digital storefront that builds trust, displays qualifications, and makes it easy to get in touch through familiar communication channels like WhatsApp.",
    demoLink: "https://paliwalgaurav27.github.io/spb.co/service.html",
    sourceLink: "https://github.com/paliwalgaurav27/spb.co",
    howItWorks: "The website is built as a multi-page application with dynamically loaded header and footer components. When users visit, they see an animated hero section with a gradient background, followed by animated counter statistics that trigger when scrolled into view using the Intersection Observer API.\n\nThe site features four main pages—Home, About, Services, and Contact. The contact form integrates with WhatsApp API, automatically formatting and sending inquiry messages. All pages include smooth scroll reveal animations, sticky navigation with mobile menu toggle, and a back-to-top button. The responsive design adapts seamlessly from desktop to mobile.",
    screenshots: [
      "img/SPB&CO/Screenshot 2026-04-20 100937.png",
      "img/SPB&CO/Screenshot 2026-04-20 101000.png",
      "img/SPB&CO/Screenshot 2026-04-20 101015.png",
      "img/SPB&CO/Screenshot 2026-04-20 101038.png"
    ],
    challenges: [
      {
        problem: "Ensuring smooth scroll animations without performance degradation",
        solution: "Implemented the modern Intersection Observer API instead of scroll event listeners, which only triggers animations when elements enter viewport, significantly reducing CPU usage."
      },
      {
        problem: "Managing component loading and ensuring navbar functionality initializes correctly",
        solution: "Created a callback system in the fetch-based component loader that checks which component was loaded and conditionally runs the navbar initialization logic only after the header loads."
      },
      {
        problem: "WhatsApp form integration with dynamic message formatting",
        solution: "Captured form data, formatted it as a readable message string, URL-encoded it using encodeURIComponent(), and passed it to WhatsApp's API via the wa.me endpoint with the message parameter."
      },
      {
        problem: "Handling Google Maps iframe loading performance on initial page render",
        solution: "Implemented lazy loading for the embedded map to prevent blocking the main thread, ensuring the contact page loads quickly even on slower mobile networks."
      }
    ]
  },
  {
    id: "6",
    title: "DOM Inspector Playground",
    category: "WEB APP / TOOL",
    tagline: "An interactive playground to explore how browsers parse and render HTML into the Document Object Model (DOM).",
    thumbnail: "img/dom-playground/Screenshot 2026-05-02 113752.png",
    heroImage: "img/dom-playground/Screenshot 2026-05-02 113752.png",
    shortDesc: "A visual educational tool for exploring the DOM, featuring an HTML editor, live preview, interactive DOM tree, and browser auto-fix comparison.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    builtWith: ["Vanilla JS", "DOMParser", "iframe.srcdoc", "window.postMessage", "Prettier Standalone"],
    features: [
      "📝 HTML Editor with Indentation",
      "⚡ Live Rendered Preview (iframe)",
      "🌳 Interactive DOM Tree Explorer",
      "🔍 Node Selection & Detail Modal",
      "🛠️ Browser Fixes Comparison Diff",
      "🌙 Dark/Light Theme Persistence"
    ],
    theStory: "Understanding how browsers translate raw HTML into a living Document Object Model can be challenging for beginners. Many developers write HTML without realizing how the browser auto-corrects malformed markup or structures the nested nodes. I built the DOM Inspector Playground to demystify this process. It provides a split-pane environment where you can type HTML, instantly see it rendered, and interact with the resulting DOM tree side-by-side.",
    theIdea: "The core idea was to create an educational tool that bridges the gap between written code and browser interpretation. By allowing users to type HTML and immediately see both the visual output and the underlying DOM structure, the tool makes abstract concepts tangible. Features like the 'Browser Fixes Comparison' actively highlight how browsers handle invalid HTML, making it an invaluable learning resource.",
    demoLink: "https://paliwalgaurav27.github.io/DOM-Inspector-Playground/",
    sourceLink: "https://github.com/paliwalgaurav27/DOM-Inspector-Playground",
    howItWorks: "The application is built with vanilla JavaScript using a modular approach. The editor.js handles user input, while preview.js renders the HTML safely inside an iframe using srcdoc. The tree.js module uses DOMParser to parse the HTML and recursively build an interactive, collapsible tree UI representing element, text, and comment nodes. A unique feature compares the user's typed HTML against the browser-parsed document to show how the browser auto-corrects malformed markup. The app also integrates Prettier standalone for formatting and uses localStorage for theme persistence.",
    screenshots: [
      "img/dom-playground/Screenshot 2026-05-02 113752.png"
    ],
    challenges: [
      {
        problem: "Noisy browser fixes comparison due to full document output including <html>, <head>, and <body> tags.",
        solution: "Compared normalized fragments instead of the full document, focusing only on the meaningful output for the user's HTML region to avoid false positives."
      },
      {
        problem: "Preview injection could execute arbitrary scripts if user HTML contained <script> tags.",
        solution: "Sanitized HTML and isolated the preview injection into a separate sandboxed iframe to prevent harmful execution."
      },
      {
        problem: "Tree modal click-outside close logic misbehaved when clicking within the panel-tree but outside node-details.",
        solution: "Refined the event listener logic to accurately detect clicks outside the modal content, ensuring smooth opening and closing interactions."
      },
      {
        problem: "Browser fixes diff wasn't updating automatically when the editor content changed.",
        solution: "Wired the tree.checkBrowserFixes() function to run after every editor update, ensuring the comparison stays perfectly in sync."
      }
    ]
  },
  {
    id: "5",
    title: "DevMap",
    category: "WEB APP",
    tagline: "The brutally honest tech roadmap guide that helps beginners navigate the confusing landscape of software development roles.",
    thumbnail: "img/dev-map/Screenshot 2026-05-02 112740.png",
    heroImage: "img/dev-map/Screenshot 2026-05-02 112740.png",
    shortDesc: "An interactive web application providing honest, realistic guidance on different tech careers with structured learning paths.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    builtWith: ["HTML5", "CSS3", "Vanilla JS", "Component-based CSS", "SVG", "LocalStorage API"],
    features: [
      "🗺️ Interactive Roadmaps for 6 Roles",
      "🚦 Structured Learning Flow (Spine, Branches, Gates)",
      "🎯 Smart Quiz Recommendation System",
      "🌙 Dark Mode Toggle",
      "📱 Responsive Design",
      "📊 SVG Visual Connector Lines"
    ],
    theStory: "As a beginner learning web development, you likely encountered this common frustration: dozens of tutorials all claiming to be essential, conflicting advice about learning order, and no honest assessment of difficulty or job market reality. You realized that the problem isn't finding tutorials—it's choosing the right path without wasting months on the wrong direction. DevMap solves this by being brutally honest: It doesn't hide that Backend is harder than Frontend, it shows realistic timelines, explains why you should learn fundamentals first, and it helps beginners avoid the gatekeeping feeling.",
    theIdea: "The idea was to build a tool I probably wished existed when I started. DevMap provides honest, realistic guidance on different tech careers—showing not just what to learn, but how difficult each path is, how long it takes, and what the actual job demands look like. This is a tool that shows full-stack capability, user experience thinking, JavaScript vanilla skills, responsive design, and data architecture.",
    demoLink: "https://paliwalgaurav27.github.io/DevMap/",
    sourceLink: "https://github.com/paliwalgaurav27/DevMap",
    howItWorks: "The project uses a structured learning flow. The roadmap.js file acts as a reusable engine—it takes a nodes array of skills and renders the entire visual graph. Each role page (backend.html, frontend.html, etc.) just imports its own specialized data and calls the renderer. An interactive questionnaire on the homepage asks 4 targeted questions about learning preferences, scores answers against different roles, and recommends the best-fit career path. Theme persistence across pages is achieved using localStorage and applied before DOM rendering to avoid FOUC.",
    screenshots: [
      "img/dev-map/Screenshot 2026-05-02 112740.png",
      "img/dev-map/Screenshot 2026-05-02 112802.png",
      "img/dev-map/Screenshot 2026-05-02 112834.png",
      "img/dev-map/Screenshot 2026-05-02 112850.png"
    ],
    challenges: [
      {
        problem: "Complex visual roadmaps dynamically connecting nodes.",
        solution: "Created an SVG connector system that dynamically draws lines between nodes based on screen size."
      },
      {
        problem: "Multiple similar pages creating redundant code.",
        solution: "Built reusable roadmap.js rendering engine that all role pages import and customize with their own data."
      },
      {
        problem: "Matching quiz scores to roles.",
        solution: "Implemented a scoring system where each quiz answer increments role scores—final scores determine recommendation."
      },
      {
        problem: "Theme persistence across pages avoiding Flash of Unstyled Content (FOUC).",
        solution: "Used localStorage to save theme preference and apply it on page load, executing theme script immediately in main.js before DOM renders."
      }
    ]
  },
  {
    id: "3",
    title: "JS Event Loop Explorer",
    category: "WEB APP / TOOL",
    tagline: "An interactive visual simulator that demystifies how JavaScript's event loop works through step-by-step execution and real-time queue visualization.",
    thumbnail: "img/jsloop/Screenshot 2026-04-20 183243.png",
    heroImage: "img/jsloop/Screenshot 2026-04-20 183243.png",
    shortDesc: "An educational web tool that visualizes the JavaScript event loop in real-time, showing how the call stack, web APIs, microtask queue, and macrotask queue interact.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    builtWith: ["Vanilla JS", "ES6 Modules", "DOM API", "CSS Animations", "CSS Variables", "Event-driven Architecture", "Regex Parser"],
    features: [
      "⚡ 9 Pre-built Example Scenarios",
      "🎨 Real-Time Visual Queue Simulation",
      "✏️ Custom Code Input",
      "🎮 Interactive Playback Controls",
      "📋 Execution Flow Timeline",
      "⚠️ Error Detection"
    ],
    theStory: "I built this project because I was frustrated trying to understand the JavaScript event loop. ChatGPT would explain it conceptually, but I couldn't grasp how the actual flow worked—the interactions between the call stack, Web APIs, microtask queue, and macrotask queue all felt abstract. I realized that what I really needed was a visual, step-by-step animated representation where I could see code executing and watch each operation move through the different queues in real time. That's when I decided to build an interactive simulator that let other developers have the same 'aha!' moment. Now it's become a tool I use to teach and explain event loops to others.",
    theIdea: "JavaScript's event loop is one of the most misunderstood concepts in web development, yet it's crucial for writing performant, bug-free code. Most developers struggle to grasp why promises execute before setTimeout callbacks, or how async/await actually works under the hood. This project solves that by providing an interactive, visual explanation of the event loop with real working code examples. It bridges the gap between theoretical knowledge and practical understanding, helping developers write better asynchronous code.",
    demoLink: "https://paliwalgaurav27.github.io/JS-Event-Loop-Explorer/",
    sourceLink: "https://github.com/paliwalgaurav27/JS-Event-Loop-Explorer",
    howItWorks: "The tool parses JavaScript code and converts it into a sequence of simulation steps. When you click \"Run,\" it executes these steps sequentially, animating each operation. You watch as synchronous code pushes onto the call stack and pops off immediately, while setTimeout callbacks register with Web APIs then move to the macrotask queue, and promise callbacks go straight to the microtask queue. The event loop visualization spins while it's processing, and a timeline tracks every action. You can pause mid-execution, step through one operation at a time, or speed up the playback. The tool even detects problematic patterns like infinite microtask loops (starvation) or blocking synchronous code, triggering error overlays when detected.",
    screenshots: [
      "img/jsloop/Screenshot 2026-04-20 183243.png",
      "img/jsloop/Screenshot 2026-04-20 183308.png"
    ],
    challenges: [
      {
        problem: "Accurately parsing arbitrary JavaScript code and converting it to simulation steps without using a full AST parser was tricky, especially handling nested operations and edge cases.",
        solution: "Implemented a regex-based pattern matcher that identifies common patterns (console.log, setTimeout, Promise, async/await) and converts them to simulation steps. For custom code that gets too complex, the tool provides helpful guidance through predefined examples that users can learn from."
      },
      {
        problem: "Managing animation timing and state transitions was difficult—the visual animations needed to complete before moving to the next step, otherwise operations would appear to happen out of order.",
        solution: "Coordinated CSS transitions with JavaScript timeouts. Each action delays the next step by a calculated amount (1000ms / speed multiplier), allowing animations to complete cleanly before proceeding."
      },
      {
        problem: "Maintaining accurate state during pause, resume, and step operations meant tracking multiple variables (isPlaying, isPaused, stepIndex) without introducing bugs or race conditions.",
        solution: "Centralized state management in the simulation.js module with clear state transitions. Implemented checks at each step to ensure operations only proceed in valid states (e.g., can't resume while already playing)."
      }
    ]
  },
  {
    id: "4",
    title: "AI Stock Insight Platform",
    category: "FULL-STACK WEB APP",
    tagline: "A full-stack web application that provides AI-powered analysis for Indian Nifty 250 stocks.",
    thumbnail: "img/stock/Screenshot 2026-04-20 190835.png",
    heroImage: "img/stock/Screenshot 2026-04-20 190835.png",
    shortDesc: "A full-stack web application providing real-time stock prices, an AI-generated insight scorecard, financial fundamentals, and an AI chat interface powered by Google Gemini.",
    techStack: ["Node.js", "Express", "Vite", "JavaScript"],
    builtWith: ["Vanilla JS", "Vite", "Node.js", "Express.js", "Yahoo Finance 2 API", "Google Gemini AI API", "Real-time Data Processing", "5-min In-Memory Cache"],
    features: [
      "📊 Real-time stock data & price movements",
      "🤖 AI Insight Scorecard (0-100) based on financial metrics",
      "📰 Latest news headlines from Yahoo Finance RSS",
      "💬 AI chat interface to ask stock questions (Gemini-powered)",
      "🔍 Search & filter by stock name/symbol",
      "⚡ 5-minute in-memory caching for performance"
    ],
    theStory: "I built this project as a trader myself who was tired of manually sifting through fundamentals for every single stock. The traditional approach meant analyzing P/E ratio, ROE, debt, revenue growth, and more for dozens of stocks before narrowing down to the truly strong candidates. I thought: what if I could score stocks based on those fundamentals and only deep-dive into the ones with the highest scores? This platform does exactly that—it aggregates financial data from multiple stocks, generates an AI-powered insight scorecard from 0-100 based on key metrics, and surfaces only the strong performers. Now I can focus my research time on the stocks that matter instead of wasting hours on mediocre opportunities.",
    theIdea: "Many investors find it challenging to interpret complex financial metrics and stock fundamentals. The AI Stock Insight Platform bridges this gap by combining real-time financial data with AI-powered analysis to provide an easy-to-understand insight scorecard and an interactive chatbot for personalized stock queries.",
    demoLink: "#",
    sourceLink: "https://github.com/paliwalgaurav27/stockapp",
    howItWorks: "The frontend is built with Vanilla JavaScript and bundled with Vite, connecting to a Node.js/Express backend. The backend fetches real-time stock data and RSS news feeds via the Yahoo Finance 2 API. Financial metrics are processed by the Google Gemini AI API to generate an Insight Scorecard. An in-memory 5-minute cache ensures high performance and prevents API rate limit issues. Users can interact with the Gemini-powered chat interface to ask specific questions about any stock.",
    screenshots: [
      "img/stock/Screenshot 2026-04-20 190835.png",
      "img/stock/Screenshot 2026-04-20 191305.png",
      "img/stock/Screenshot 2026-04-20 191316.png",
      "img/stock/Screenshot 2026-04-20 191329.png"
    ],
    challenges: [
      {
        problem: "Yahoo-finance2 Module Export Error - v3.14.0 had broken exports field, causing 'ERR_PACKAGE_PATH_NOT_EXPORTED' on server startup.",
        solution: "Downgraded to v2.10.0 which has proper ES module support: npm install yahoo-finance2@^2.10.0"
      },
      {
        problem: "Yahoo Finance Rate Limiting (429 errors) - Authentication crumb token failures blocked all stock data requests due to API rate limits.",
        solution: "Implemented realistic mock data generator with pre-defined stock prices & fundamentals; data now loads instantly without rate-limit issues."
      },
      {
        problem: "Package Import Incompatibility - Used import YahooFinance from 'yahoo-finance2' but v2.10.0 exports differently (named vs default).",
        solution: "Changed to import * as yahooFinance syntax to work with the stable version's export structure."
      },
      {
        problem: "Frontend/Backend Communication - API calls timing out & undefined stock data on detail pages.",
        solution: "Added proper error handling, caching layer (5-min TTL), and graceful fallback to mock data; verified API endpoints with curl before frontend integration."
      }
    ]
  }
];

const honorableMentionsData = [
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio showcasing my projects with smooth transitions and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "🎨"
  },
  {
    title: "E-Commerce Website",
    description: "Full-featured shopping platform with product catalog, shopping cart, and checkout functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "🛒"
  },
  {
    title: "Quiz Application",
    description: "Interactive quiz app with timer, score tracking, and instant feedback on answers.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    icon: "❓"
  },
  {
    title: "Todo List App",
    description: "Productivity tool with add, edit, delete, and local storage persistence features.",
    tags: ["React", "LocalStorage", "CSS"],
    icon: "✓"
  },
  {
    title: "Student Management System",
    description: "Database-driven application for managing student records, grades, and enrollment.",
    tags: ["Python", "Flask", "SQLite"],
    icon: "🎓"
  },
  {
    title: "Weather Application",
    description: "Real-time weather app displaying current conditions, forecasts, and location-based data.",
    tags: ["JavaScript", "API", "CSS"],
    icon: "🌤️"
  },
  {
    title: "Stone Paper Scissors Game",
    description: "Classic game with AI opponent, score tracking, and smooth animations.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "🎮"
  },
  {
    title: "Calculator App",
    description: "Scientific calculator with history, keyboard support, and responsive interface.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "🧮"
  },
  {
    title: "Password Generator",
    description: "Secure password generator with customizable length and character options.",
    tags: ["JavaScript", "Security", "Utility"],
    icon: "🔐"
  },
  {
    title: "Expense Tracker",
    description: "Personal finance app with category-wise expense logging, charts, and budget alerts.",
    tags: ["React", "Chart.js", "LocalStorage"],
    icon: "💰"
  },
  {
    title: "Markdown Previewer",
    description: "Real-time markdown editor with live preview and syntax highlighting support.",
    tags: ["React", "Marked.js", "CSS"],
    icon: "📝"
  },
  {
    title: "Pomodoro Timer",
    description: "Productivity timer with work/break cycles, notifications, and task management.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "⏱️"
  }
];

let revealObserver;
let revealObserverInitialized = false;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  initHero();
  initRevealAnimations();
  initSkillBars();
  renderFeaturedProjects();
  renderProjectsPage();
  renderHonorableMentions();
  renderProjectDetail();
});

function initTheme() {
  const root = document.documentElement;
  const dots = document.querySelectorAll(".theme-dot");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const activeTheme = storedTheme === "dark" ? "dark" : "light";

  applyTheme(activeTheme);

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

function initNavbar() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navPanel = document.querySelector(".nav-panel");

  const syncHeaderShadow = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  };

  syncHeaderShadow();
  window.addEventListener("scroll", syncHeaderShadow);

  if (!menuToggle || !navPanel) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navPanel.querySelectorAll("a, .theme-dot").forEach((element) => {
    element.addEventListener("click", () => {
      navPanel.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

function initHero() {
  const hero = document.querySelector(".hero");
  if (!hero) {
    return;
  }

  requestAnimationFrame(() => {
    hero.classList.add("hero-ready");
  });

  const typingTarget = document.querySelector("[data-typing]");
  if (!typingTarget) {
    return;
  }

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

    let delay = deleting ? 70 : 120;

    if (!deleting && charIndex === currentRole.length) {
      deleting = true;
      delay = 1500;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 450;
    }

    window.setTimeout(tick, delay);
  };

  window.setTimeout(tick, 600);
}

function initRevealAnimations() {
  if (!revealObserverInitialized) {
    revealObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealObserverInitialized = true;
  }

  const revealElements = document.querySelectorAll(".reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)");
  revealElements.forEach((element) => revealObserver.observe(element));
}

function initSkillBars() {
  const progressBars = document.querySelectorAll("[data-progress]");
  if (!progressBars.length) {
    return;
  }

  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.style.width = `${entry.target.dataset.progress || "0"}%`;
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));
}

function renderFeaturedProjects() {
  const target = document.getElementById("featured-projects");
  if (!target) {
    return;
  }

  target.innerHTML = projectsData
    .slice(0, 2)
    .map((project, index) => {
      const tags = project.techStack
        .slice(0, 3)
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

  initRevealAnimations();
}

function renderHonorableMentions() {
  const target = document.getElementById("honorable-mentions");
  if (!target) {
    return;
  }

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

function renderProjectsPage() {
  const target = document.getElementById("projects-grid");
  if (!target) {
    return;
  }

  target.innerHTML = projectsData
    .map((project, index) => {
      const num = String(index + 1).padStart(2, "0");
      const tags = project.techStack
        .map((tag) => renderTechTag(tag, "project-tag"))
        .join("");
      const thumb = project.thumbnail
        ? `<img src="${project.thumbnail}" alt="${project.title} thumbnail">`
        : `<span class="project-thumb-placeholder" aria-hidden="true">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
               <rect x="4" y="4" width="16" height="16" rx="4"></rect>
               <path d="M8 15l2.8-3 2.4 2.6 2.8-3.6"></path>
             </svg>
           </span>`;

      return `
        <article class="project-card reveal" style="transition-delay:${index * 120}ms;">
          <div class="project-thumb">
            ${thumb}
          </div>
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

function renderProjectDetail() {
  const target = document.getElementById("project-detail-page");
  if (!target) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    target.innerHTML = `
      <div class="case-page">
        <div class="case-back-bar">
          <a class="case-back-link" href="projects.html">&larr; Back to Projects</a>
        </div>
        <section class="case-section reveal is-visible">
          <span class="case-eyebrow">Case Study</span>
          <h1 class="case-title">Project not found</h1>
          <p class="case-tagline">The requested case study could not be loaded.</p>
        </section>
        <div class="case-bottom-back">
          <a class="case-bottom-back-link" href="projects.html">&larr; Back to Projects</a>
        </div>
      </div>
    `;
    return;
  }

  document.title = `${project.title} | Gaurav Paliwal`;

  const tags = project.techStack.map((item) => renderTechTag(item, "case-tag")).join("");
  const builtWith = project.builtWith.map((item) => renderTechTag(item, "case-chip")).join("");
  const features = project.features.map((item) => `<span class="case-feature-chip">${item}</span>`).join("");
  const screenshots = project.screenshots
    .map((item, index) => `<img class="case-screenshot" src="${item}" alt="${project.title} screenshot ${index + 1}">`)
    .join("");
  const story = renderParagraphs(project.theStory, "case-text");
  const howItWorks = renderParagraphs(project.howItWorks, "case-text");
  const challenges = project.challenges
    .map(
      (item) => `
        <article class="challenge-entry">
          <p class="challenge-text problem-line"><span class="challenge-label">Problem &mdash;</span>${item.problem}</p>
          <p class="challenge-text solution-line"><span class="challenge-label">Solution &mdash;</span>${item.solution}</p>
        </article>
      `
    )
    .join("");

  target.innerHTML = `
    <div class="case-page">
      <div class="case-back-bar">
        <a class="case-back-link" href="projects.html">&larr; Back to Projects</a>
      </div>

      <section class="case-section reveal" style="transition-delay:0ms;">
        <h1 class="project-title">${project.title}</h1>
      </section>

      <section class="case-section reveal" style="transition-delay:120ms;">
        <img class="case-hero-image" src="${project.heroImage}" alt="${project.title} hero image">
      </section>

      <section class="case-section reveal" style="transition-delay:240ms;">
        <span class="case-eyebrow">Case Study</span>
        <h1 class="case-title">${project.title}</h1>
        <p class="case-tagline">${project.tagline}</p>
        <div class="case-tag-row">${tags}</div>
        <div class="case-actions">
          <a class="btn case-btn case-btn-primary" href="${project.demoLink}" target="_blank" rel="noreferrer">Live Demo &rarr;</a>
          <a class="btn case-btn case-btn-secondary" href="${project.sourceLink}" target="_blank" rel="noreferrer">Source Code &rarr;</a>
        </div>
      </section>

      <section class="case-section reveal" style="transition-delay:360ms;">
        <span class="case-eyebrow small">The Story</span>
        <div class="case-copy">${story}</div>
        <div class="idea-block">
          <span class="idea-label">\uD83D\uDCA1 The Idea</span>
          <p class="idea-text">${project.theIdea}</p>
        </div>
      </section>

      <section class="case-section reveal" style="transition-delay:480ms;">
        <span class="case-eyebrow small">How It Works</span>
        <div class="case-copy">${howItWorks}</div>
      </section>

      <section class="case-section reveal" style="transition-delay:600ms;">
        <span class="case-eyebrow small">Built With</span>
        <div class="case-chip-row">${builtWith}</div>
      </section>

      <section class="case-section reveal" style="transition-delay:720ms;">
        <span class="case-eyebrow small">Screenshots</span>
        <div class="case-screenshots-grid">${screenshots}</div>
      </section>

      <section class="case-section reveal" style="transition-delay:840ms;">
        <span class="case-eyebrow small">Features</span>
        <div class="case-feature-row">${features}</div>
      </section>

      <section class="case-section reveal" style="transition-delay:960ms;">
        <span class="case-eyebrow small">Challenges &amp; Solutions</span>
        <div class="case-challenges-grid">${challenges}</div>
      </section>

      <div class="case-bottom-back">
        <a class="case-bottom-back-link" href="projects.html">&larr; Back to Projects</a>
      </div>
    </div>
  `;

  initRevealAnimations();
}

function renderParagraphs(text, className) {
  return text
    .split("\n\n")
    .map((paragraph) => `<p class="${className}">${paragraph}</p>`)
    .join("");
}

function renderTechTag(tag, baseClass) {
  const techClass = `tech-${tag.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return `<span class="${baseClass} ${techClass}">${tag}</span>`;
}
