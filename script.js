const projects = {
  bingebuddy: {
    title: "BingeBuddy",
    meta: "NUS Orbital Summer Programme · Full-stack recommendation product · 2026",
    lead: "A personal movie-discovery workspace that reduces decision fatigue through guided onboarding, controllable recommendations, extensive filtering, and evolving taste insights.",
    brief: "BingeBuddy helps people move from endless catalogue browsing to a confident choice. Instead of producing another generic list, it creates a focused discovery journey: capture an initial taste profile, refine it through ratings and saved titles, then let users search, filter, sort, shuffle, and understand why a title was recommended. That combination improves first-session relevance, gives users more control over discovery, and creates useful reasons to return as their profile develops.",
    built: [
      "Genre onboarding and this-or-that movie swiping capture preference signals before a user has built a rating history, reducing cold-start friction and accelerating time-to-value",
      "A focused recommendation workspace with rating- or genre-based personalisation, clear recommendation explanations, genre filters, search, Best match / Highest rated / Newest sorting, Surprise me, and Shuffle",
      "Ratings and watchlist insights turn activity into a taste profile—including rating patterns, top-rated titles, saved-title count, favourite genre, and most common decade—rewarding continued input and encouraging repeat use",
      "Content-based recommendations use weighted metadata, TF-IDF, and cosine similarity, supported by secure accounts, caching, fallbacks, and complete loading, empty, and error states"
    ],
    tech: "React, TypeScript, Node.js, Express, Python, pandas, scikit-learn, Supabase Auth and PostgreSQL, Prisma ORM, TMDB API.",
    context: "Co-developed for the NUS Orbital Summer Programme. The product’s key business advantage is a feedback loop: onboarding improves activation, deep controls help users reach a decision, transparent recommendation logic builds trust, and taste insights make every rating or saved title feel valuable. The architecture separates the interface, application logic, storage, external catalogue, and recommendation service so each layer can evolve independently.",
    links: [{ label: "View repository ↗", href: "https://github.com/B3nji11/BingeBuddy" }],
    gallery: [
      { src: "assets/bingebuddy-onboarding.png", alt: "BingeBuddy genre preference onboarding", caption: "Genre onboarding creates a useful taste signal from the first session", wide: true },
      { src: "assets/bingebuddy-recommendations.png", alt: "BingeBuddy recommendation workspace with basis, search, sorting, and genre filters", caption: "Transparent recommendation basis plus extensive controls for finding the right title", wide: true },
      { src: "assets/bingebuddy-dashboard.png", alt: "BingeBuddy ratings dashboard and taste snapshot", caption: "Ratings become visible progress and a developing taste profile", wide: true },
      { src: "assets/bingebuddy-watchlist-insights.png", alt: "BingeBuddy watchlist insights showing saved titles, top genre, and most common decade", caption: "Saved titles become useful statistics instead of a passive list", wide: true }
    ]
  },
  pawductivity: {
    title: "Pawductivity",
    meta: "Ngee Ann Polytechnic · Mobile application project · Top 10%",
    lead: "A gamified productivity app that turns completing tasks into caring for a virtual pet.",
    brief: "Pawductivity addresses the intention-action gap: conventional task managers organise work but often do little to sustain motivation. By tying completed tasks to caring for and customising a virtual pet, the app turns progress into an immediate emotional and visual reward. The differentiator is not gamification added beside productivity; it is a connected loop designed to make planning, focus, and returning tomorrow feel worthwhile.",
    built: [
      "Task creation, priority, filtering, due dates, editing, and time tracking provide the functional core students expect",
      "Completed work earns currency for pet care and customisation, connecting real-world effort to visible in-app progress",
      "Daily challenges, login streaks, reminders, progress analytics, and motivational content create multiple retention loops around consistent habits",
      "Profiles, friend features, dark mode, and persistent cloud data support personalisation, social accountability, and continuity across sessions"
    ],
    tech: "Android Studio, Firebase, Android notifications and alarms, ZenQuotes API, MPAndroidChart.",
    context: "A student-led team project placed in the top 10% and was later supported by Ngee Ann Polytechnic for deployment, with a version released on Google Play. Its product value lies in stronger engagement than a utility-only checklist: each productivity action advances the pet experience, giving users an immediate payoff while reinforcing longer-term habits.",
    links: [],
    gallery: [
      { src: "assets/pawductivity-game.png", alt: "Pawductivity virtual pet room", caption: "The pet and reward loop at the centre of the experience", contain: true },
      { src: "assets/pawductivity-tasks.png", alt: "Pawductivity task dashboard", caption: "Prioritised work and time tracking", contain: true },
      { src: "assets/pawductivity-shop.png", alt: "Pawductivity reward shop", caption: "Currency earned through completed tasks", contain: true }
    ]
  },
  ecolume: {
    title: "Ecolume",
    meta: "Ngee Ann Polytechnic · Final year capstone · Top 10%",
    lead: "A full-stack React platform that connects live compost data, field workflows, predictive analytics, and AI-assisted decision support.",
    brief: "Built for TinkerThings, Ecolume connects compost operations through a React application, REST APIs, Firebase-backed workflows, live sensor data, and deployed analytics tools. Technicians can monitor current conditions, record nutrient activity, compare images, investigate anomalies, review forecasts, and ask questions of their data. Bringing these capabilities into one system reduces manual record chasing and helps teams act earlier on changing tank conditions.",
    built: [
      "A full-stack React application with responsive interfaces, Firebase authentication and data storage, and REST APIs connecting operational workflows and analytical services",
      "Automated ingestion and cleaning pipelines pull live sensor data from Google Sheets, Google Drive, and PostgreSQL, while scheduled GitHub workflows refresh model outputs and deployed applications",
      "Multi-output Random Forest regression predicts NPK ratios; model development also covered Decision Trees, regularised regression, XGBoost, AdaBoost, LightGBM, grid search, cross-validation, and model evaluation",
      "ARIMA and SARIMAX time-series forecasting, seasonal decomposition, and Prophet-based anomaly detection help technicians anticipate nutrient changes and identify unusual readings",
      "Tank-specific nutrient logging and an image gallery preserve structured and visual field evidence, while Streamlit, Power BI, Pygwalker, and Chart.js make live and historical patterns easier to explore",
      "A multimodal generative-AI chatbot supports text, voice, image, and video questions; an exploratory-data-analysis chatbot and document querier help users investigate uploaded data and technical resources"
    ],
    tech: "React, JavaScript, HTML, CSS, Bootstrap, REST APIs, Firebase Authentication and Realtime Database, Python, pandas, NumPy, scikit-learn, statsmodels, Prophet, XGBoost, LightGBM, Streamlit, Power BI, Pygwalker, Chart.js, PostgreSQL, Google Sheets and Drive APIs, GitHub Actions, and OpenAI, Gemini, and Claude APIs.",
    context: "The final year project placed in the top 10%. I focused on the composting workflows and worked with live data from multiple locations. Ecolume stands out by joining monitoring, prediction, documentation, visual evidence, and conversational analysis in one workflow—making advanced data capabilities usable for day-to-day operations. We also documented limitations around sensor quality, short time series, and model generalisation rather than overstating performance.",
    links: [],
    gallery: [
      { src: "assets/ecolume-live-dashboard.png", alt: "Ecolume live compost dashboard", caption: "Live sensor values and trends by tank" },
      { src: "assets/ecolume-npk-app.png", alt: "NPK prediction application", caption: "Predicting nutrient ratios from compost conditions" },
      { src: "assets/ecolume-anomaly.png", alt: "Compost anomaly detection dashboard", caption: "Operational monitoring for unusual readings" }
    ]
  },
  analytics: {
    title: "Applied AI & Analytics",
    meta: "Prediction · Data mining · Time series · NLP · Computer vision · Explainable AI",
    lead: "A cross-domain body of work covering the machine-learning and data-science lifecycle across structured data, language, recommendations, images, and time-dependent problems.",
    brief: "These projects cover the full analytical workflow: preparing data with pandas and NumPy, engineering useful features, selecting statistical and machine-learning methods, tuning models, evaluating trade-offs, and explaining their behaviour. The work spans supervised and unsupervised learning, classification, regression, clustering, association-rule mining, time-series forecasting, anomaly detection, NLP, recommendation systems, and computer vision. Each method is chosen for the decision it needs to support rather than for novelty alone.",
    built: [
      "Statistical and predictive modelling across classification, regression, regularisation, tree-based ensembles, and systematic model evaluation",
      "Data mining and unsupervised learning through K-means, hierarchical clustering, behavioural segmentation, and association-rule analysis",
      "Time-series forecasting, seasonal analysis, and anomaly-detection workflows for operational and temporal data",
      "NLP, recommendation-system, and computer-vision projects turn unstructured text, behavioural signals, and images into searchable, rankable, personalised, or classifiable outputs",
      "Feature engineering, hyperparameter tuning, cross-validation, and local and global explanations using SHAP and feature-effect analysis"
    ],
    tech: "Python, pandas, NumPy, scikit-learn, data mining, statistical modelling, supervised and unsupervised learning, classification, regression, clustering, ensemble methods, time-series forecasting, anomaly detection, NLP, recommendation systems, computer vision, feature engineering, hyperparameter tuning, model evaluation, LightGBM, SHAP, Matplotlib, Seaborn, Plotly, Streamlit, and Jupyter notebooks.",
    context: "The business value is versatility across the model lifecycle: frame the decision, prepare imperfect data, choose an appropriate baseline, compare and tune models, evaluate trade-offs, explain behaviour, and translate the result into usable decision support. The selected visuals highlight interpretable structure and instance-level reasoning rather than only final scores.",
    links: [],
    gallery: [
      { src: "assets/analytics-clustering.png", alt: "Three-dimensional clustering visualisation", caption: "Exploring customer structure through unsupervised learning" },
      { src: "assets/analytics-shap.png", alt: "SHAP waterfall plot", caption: "Explaining the features behind an individual prediction" }
    ]
  },
  noahsark: {
    title: "Noah’s Ark",
    meta: "#HACK2024 · Community technology",
    lead: "A full-stack React and Firebase app designed to bring youth events, Bible study materials, and community resources into one accessible experience.",
    brief: "Noah’s Ark responds to a practical engagement challenge: young people, leaders, event information, and study resources can become scattered across channels. Bringing them into one product creates a clearer path from first contact to ongoing participation, while giving community partners a shared digital touchpoint for content and engagement.",
    built: [
      "A full-stack React application backed by Firebase for event participation, Bible study content, and shared youth resources",
      "A lower-friction journey from discovering an activity to accessing follow-up material and staying connected",
      "Rapid framing and prototyping at #HACK2024, followed by weekly product development and stakeholder review",
      "Direct feedback from Singapore Youth For Christ—including its director, Richard—and Digital Wesley"
    ],
    tech: "React, Firebase, full-stack web development, product discovery, and stakeholder communication.",
    context: "After #HACK2024, we developed the project as far as we could over the following year through weekly meetings with Singapore Youth For Christ and Digital Wesley. Because of our team’s time constraints, the partners later outsourced the remaining development. That year-long continuation helped move the idea beyond a prototype and kept product decisions anchored to operational and community needs.",
    links: [],
    gallery: [
      { src: "assets/noahs-ark-team.jpg", alt: "Noah's Ark team at HACK 2024", caption: "The team at #HACK2024" },
      { src: "assets/noahs-ark-work.jpg", alt: "Noah's Ark team working during the hackathon", caption: "Working through the product challenge on site" }
    ]
  }
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const dialog = document.querySelector("[data-dialog]");
const closeButton = document.querySelector("[data-close]");

const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

const fillList = (node, values) => {
  node.replaceChildren(...values.map((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    return item;
  }));
};

const fillLinks = (node, values) => {
  node.replaceChildren(...values.map(({ label, href }) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    return link;
  }));
};

const fillGallery = (node, images) => {
  node.replaceChildren(...images.map(({ src, alt, caption, contain, wide }) => {
    const figure = document.createElement("figure");
    if (contain) figure.dataset.contain = "true";
    if (wide) figure.dataset.wide = "true";
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    const description = document.createElement("figcaption");
    description.textContent = caption;
    figure.append(image, description);
    return figure;
  }));
};

const openProject = (projectKey) => {
  const project = projects[projectKey];
  if (!project) return;
  dialog.querySelector("[data-case-title]").textContent = project.title;
  dialog.querySelector("[data-case-meta]").textContent = project.meta;
  dialog.querySelector("[data-case-lead]").textContent = project.lead;
  dialog.querySelector("[data-case-brief]").textContent = project.brief;
  dialog.querySelector("[data-case-tech]").textContent = project.tech;
  dialog.querySelector("[data-case-context]").textContent = project.context;
  fillList(dialog.querySelector("[data-case-built]"), project.built);
  fillLinks(dialog.querySelector("[data-case-links]"), project.links);
  fillGallery(dialog.querySelector("[data-case-gallery]"), project.gallery);
  dialog.dataset.project = projectKey;
  dialog.scrollTop = 0;
  dialog.showModal();
  document.body.classList.add("dialog-open");
};

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

const closeDialog = () => {
  dialog.close();
  document.body.classList.remove("dialog-open");
};

closeButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
