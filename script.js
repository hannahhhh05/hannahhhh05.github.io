const projects = {
  bingebuddy: {
    title: "BingeBuddy",
    meta: "NUS Orbital Summer Programme · Full-stack recommendation product · 2026",
    lead: "A movie discovery platform designed to reduce decision fatigue with transparent, preference-driven recommendations.",
    brief: "Streaming catalogues create a paradox of choice. BingeBuddy narrows the field by collecting lightweight signals from genre preferences and ratings, then returning a focused set of relevant titles. The product acts as a discovery and organisation layer rather than a streaming service.",
    built: [
      "Content-based recommendations using weighted metadata, TF-IDF, and cosine similarity",
      "Cold-start onboarding through favourite genres, followed by rating-based personalisation",
      "Secure accounts, trending discovery, search, ratings, watchlists, and a personal dashboard",
      "Protected API routes, recommendation caching, fallbacks, and complete loading and error states"
    ],
    tech: "React, TypeScript, Node.js, Express, Python, pandas, scikit-learn, Supabase Auth and PostgreSQL, Prisma ORM, TMDB API.",
    context: "Co-developed for the NUS Orbital Summer Programme. The team separated the interface, application logic, storage, external catalogue, and recommendation service so each layer could be tested and improved independently.",
    links: [{ label: "View repository ↗", href: "https://github.com/B3nji11/BingeBuddy" }],
    gallery: [
      { src: "assets/bingebuddy-landing.png", alt: "BingeBuddy landing page", caption: "A clear product entry point before authentication" },
      { src: "assets/bingebuddy-dashboard.png", alt: "BingeBuddy personal dashboard", caption: "Ratings and taste signals brought into one view" },
      { src: "assets/bingebuddy-details.png", alt: "BingeBuddy movie details interface", caption: "Shared detail view with ratings and watchlist actions" }
    ]
  },
  pawductivity: {
    title: "Pawductivity",
    meta: "Ngee Ann Polytechnic · Mobile application project · Top 10%",
    lead: "A gamified productivity app that turns completing tasks into caring for a virtual pet.",
    brief: "Pawductivity was designed around a familiar student problem: task tools can feel functional but easy to abandon. The team paired task management with a simple reward loop so progress in the real world creates visible progress in the app.",
    built: [
      "Task creation, priority, filtering, due dates, editing, and time tracking",
      "A virtual pet, in-app currency, shop inventory, and daily challenges",
      "Progress analytics, login streaks, motivational content, reminders, and dark mode",
      "Profiles and friend features backed by persistent cloud data"
    ],
    tech: "Android Studio, Firebase, Android notifications and alarms, ZenQuotes API, MPAndroidChart.",
    context: "A student-led team project placed in the top 10% and was later supported by Ngee Ann Polytechnic for deployment. A version of the app was released on Google Play.",
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
    lead: "A web-based compost monitoring platform that turns live sensor data into practical decisions for compost technicians.",
    brief: "Built for TinkerThings, the capstone explored how live IoT data, predictive analytics, and automation could improve compost operations. The product focused on helping technicians monitor conditions, manage nutrient records, detect anomalies, and act on changing compost quality.",
    built: [
      "Live and historical monitoring for nutrient and environmental conditions",
      "NPK prediction, forecasting, anomaly detection, and model comparison workflows",
      "Tank-specific nutrient logging, image comparison, interactive visual exploration, and dashboards",
      "Generative AI and exploratory data analysis assistants for field questions and uploaded data"
    ],
    tech: "Python, pandas, scikit-learn, Streamlit, Power BI, HTML, CSS, JavaScript, Bootstrap, Chart.js, Firebase, Google Sheets and PostgreSQL integrations.",
    context: "The final year project placed in the top 10%. Hannah focused on composting features and worked with live data from multiple locations. The team documented limitations around sensor quality, short time series, and model generalisation rather than overstating performance.",
    links: [],
    gallery: [
      { src: "assets/ecolume-live-dashboard.png", alt: "Ecolume live compost dashboard", caption: "Live sensor values and trends by tank" },
      { src: "assets/ecolume-npk-app.png", alt: "NPK prediction application", caption: "Predicting nutrient ratios from compost conditions" },
      { src: "assets/ecolume-anomaly.png", alt: "Compost anomaly detection dashboard", caption: "Operational monitoring for unusual readings" }
    ]
  },
  analytics: {
    title: "Applied Analytics",
    meta: "Data mining · Machine learning · NLP · Explainable AI",
    lead: "A portfolio of analytical work that moves from discovering structure in data to explaining model behaviour.",
    brief: "These projects developed a practical understanding of how to frame analytical questions, prepare imperfect data, compare models, and communicate the result. The emphasis was not only predictive performance, but also whether the method and explanation matched the problem.",
    built: [
      "Customer and behavioural segmentation with K-means and hierarchical clustering",
      "Association-rule mining to surface relationships in categorical data",
      "Classification workflows with tree-based models and systematic evaluation",
      "Local and global model explanations using SHAP and feature-effect analysis, alongside NLP work"
    ],
    tech: "Python, pandas, NumPy, scikit-learn, LightGBM, SHAP, Matplotlib, Seaborn, Plotly and Jupyter notebooks.",
    context: "Applied Analytics coursework completed during the Diploma in Data Science. The selected visuals show clustering decisions, model structure, and instance-level explanations rather than only final scores.",
    links: [],
    gallery: [
      { src: "assets/analytics-clustering.png", alt: "Three-dimensional clustering visualisation", caption: "Exploring customer structure through unsupervised learning" },
      { src: "assets/analytics-shap.png", alt: "SHAP waterfall plot", caption: "Explaining the features behind an individual prediction" }
    ]
  },
  noahsark: {
    title: "Noah’s Ark",
    meta: "#HACK2024 · Community technology",
    lead: "A youth engagement and Bible study app developed with stakeholders who work directly with young people.",
    brief: "At #HACK2024, the team worked on a product concept that could support events, study materials, and community resources in one place. The project was grounded in conversations with Singapore Youth For Christ and Digital Wesley rather than built as an isolated hackathon demo.",
    built: [
      "A product concept for event participation, study content, and shared youth resources",
      "Rapid framing and prototyping within the constraints of a hackathon",
      "Stakeholder feedback with the Singapore Youth For Christ team, including its director Richard",
      "A foundation for continued support and discussion after the event"
    ],
    tech: "Rapid product discovery, collaborative prototyping, stakeholder communication, and team delivery.",
    context: "Singapore Youth For Christ and Digital Wesley were key stakeholders and continued supporting the idea after the hackathon. The project shows Hannah’s interest in building with communities, not only for them.",
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
  node.replaceChildren(...images.map(({ src, alt, caption, contain }) => {
    const figure = document.createElement("figure");
    if (contain) figure.dataset.contain = "true";
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
