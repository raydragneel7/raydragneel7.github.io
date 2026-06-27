const profile = {
  siteName: "Raydragneel",
  name: "Raydragneel",
  headline: "Full Stack Programmer Website & Mobile App Developer",
  profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=420&q=90&fm=webp",
  isAvailable: true,
  bio: "I design and ship web applications with clean architecture, sharp interfaces, and maintainable systems. This portfolio highlights selected projects, tutorial notes, and video learning playlists.",
  location: "Indonesia",
  email: "hello@example.com",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/example", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/example", icon: "linkedin" },
  ],
  skills: ["Laravel", "React", "Inertia", "MySQL", "Tailwind", "PHP", "JavaScript", "Automation"],
  aboutTitle: "About Me",
  introTitle: "Hi, I am Raydragneel",
  collaborationTitle: "Flexible collaboration",
  collaborationText: "I work with teams and founders to turn ideas into polished, maintainable software.",
  whyCodeTitle: "Why I code?",
  whyCodeText: "I enjoy solving problems and building tools that make work simpler, faster, and easier to trust.",
  techStackTitle: "My Tech Stack",
  techStackDescription: "Tools and frameworks I use to build robust Laravel, Inertia, and React applications.",
  projectsTitle: "Projects",
  projectsDescription: "Projects that combine design, backend systems, and frontend experience.",
  tutorialsTitle: "Latest Tutorials",
  contactTitle: "Let us talk",
  contactDescription: "Whether you need a new website, a CMS, or a cleaner Laravel platform, reach me through email or social media.",
  footerDescription: "Laravel, Inertia, and React portfolio CMS built for projects, tutorials, and clean developer presentation.",
};

const techGroups = [
  { name: "Languages", icon: "code-2", items: ["JavaScript", "PHP", "SQL", "HTML5", "CSS3"] },
  { name: "Frontend", icon: "layers", items: ["React", "Inertia.js", "Tailwind", "Vite"] },
  { name: "Backend", icon: "rocket", items: ["Laravel", "Queues", "REST API", "Auth"] },
  { name: "Database", icon: "database", items: ["MySQL", "SQLite", "Schema Design"] },
  { name: "Tooling", icon: "wrench", items: ["Git", "GitHub", "Vercel", "Laragon"] },
];

const projects = [
  {
    title: "Laravel Commerce Dashboard",
    slug: "laravel-commerce-dashboard",
    summary: "An operational dashboard for orders, catalog management, and revenue analytics.",
    stack: ["Laravel", "React", "MySQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80&fm=webp",
    repoUrl: "https://github.com/example/laravel-commerce-dashboard",
    demoUrl: "https://example.com",
  },
  {
    title: "YouTube Learning Hub",
    slug: "youtube-learning-hub",
    summary: "A playlist-based learning interface for structured programming video content.",
    stack: ["Laravel", "Inertia", "React"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80&fm=webp",
    repoUrl: "https://github.com/example/youtube-learning-hub",
    demoUrl: "https://example.com",
  },
  {
    title: "SaaS Billing Portal",
    slug: "saas-billing-portal",
    summary: "A subscription management portal with invoices, plan changes, and admin reporting.",
    stack: ["Laravel", "MySQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80&fm=webp",
    repoUrl: "https://github.com/example/saas-billing-portal",
    demoUrl: "https://example.com",
  },
  {
    title: "Realtime Support Desk",
    slug: "realtime-support-desk",
    summary: "A customer support dashboard with ticket queues, internal notes, and status tracking.",
    stack: ["Laravel", "React", "Inertia"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80&fm=webp",
    repoUrl: "https://github.com/example/realtime-support-desk",
    demoUrl: "https://example.com",
  },
  {
    title: "Inventory Control System",
    slug: "inventory-control-system",
    summary: "A stock control application for purchasing, warehouse movement, and audit logs.",
    stack: ["Laravel", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80&fm=webp",
    repoUrl: "https://github.com/example/inventory-control-system",
    demoUrl: "https://example.com",
  },
  {
    title: "Agency Portfolio CMS",
    slug: "agency-portfolio-cms",
    summary: "A content-managed portfolio system for publishing case studies and service pages.",
    stack: ["Laravel", "Inertia", "React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80&fm=webp",
    repoUrl: "https://github.com/example/agency-portfolio-cms",
    demoUrl: "https://example.com",
  },
];

const tutorials = [
  {
    title: "Clean Laravel Controller Pattern",
    category: "Laravel",
    excerpt: "A short guide to keeping Laravel controllers readable while business rules grow.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80&fm=webp",
    type: "Article",
  },
  {
    title: "Build Inertia Pages With React",
    category: "Inertia",
    excerpt: "How to structure Inertia React pages, shared props, and layouts.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80&fm=webp",
    type: "Article",
  },
  {
    title: "YouTube Playlist Player UI",
    category: "Video",
    excerpt: "Build a playlist-style YouTube player with a selectable active video.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80&fm=webp",
    type: "Video",
  },
];

const navItems = [
  { href: "#home", label: "Home", icon: "home" },
  { href: "#about", label: "About", icon: "code-2" },
  { href: "#skills", label: "Tech Stack", icon: "layers" },
  { href: "#projects", label: "Projects", icon: "folder-git-2" },
  { href: "#tutorials", label: "Tutorials", icon: "book-open" },
];

const brandIconNames = new Set(["github", "linkedin"]);

const techIconMap = {
  JavaScript: "brands/javascript.svg",
  PHP: "brands/php.svg",
  SQL: "lucide/database.svg",
  HTML5: "brands/html5.svg",
  CSS3: "brands/css.svg",
  React: "brands/react.svg",
  "Inertia.js": "brands/inertia.svg",
  Inertia: "brands/inertia.svg",
  Tailwind: "brands/tailwindcss.svg",
  Vite: "brands/vite.svg",
  Laravel: "brands/laravel.svg",
  MySQL: "brands/mysql.svg",
  SQLite: "brands/sqlite.svg",
  Git: "brands/git.svg",
  GitHub: "brands/github.svg",
  Vercel: "brands/vercel.svg",
  Laragon: "lucide/box.svg",
  Queues: "lucide/workflow.svg",
  "REST API": "lucide/network.svg",
  Auth: "lucide/key-round.svg",
  "Schema Design": "lucide/server.svg",
  Automation: "lucide/cpu.svg",
};

let activeProject = 0;
let carouselTimer;

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return [...document.querySelectorAll(selector)];
}

function icon(name) {
  const folder = brandIconNames.has(name) ? "brands" : "lucide";
  return `<img class="site-icon" src="./assets/icons/${folder}/${name}.svg" alt="" aria-hidden="true" loading="lazy" />`;
}

function techIcon(name) {
  const iconPath = techIconMap[name];

  if (!iconPath) {
    return `<span class="tech-icon tech-icon-text" aria-hidden="true">&lt;/&gt;</span>`;
  }

  return `<img class="tech-icon" src="./assets/icons/${iconPath}" alt="" aria-hidden="true" loading="lazy" />`;
}

function setText(selector, value) {
  const element = qs(selector);
  if (element) element.textContent = value || "";
}

function setLink(element, href, label) {
  if (!element) return;
  element.href = href;
  element.textContent = label;
}

function renderNav() {
  const html = navItems.map((item) => `
    <a href="${item.href}">
      ${icon(item.icon)}
      <span>${item.label}</span>
    </a>
  `).join("");

  qs("[data-nav-links]").innerHTML = html;
  qs("[data-footer-nav]").innerHTML = html;
}

function renderProfile() {
  document.title = `${profile.name} - Programmer Portfolio`;
  setText("[data-site-name]", profile.siteName);
  setText("[data-footer-site-name]", profile.siteName);
  setText("[data-profile-name]", profile.name);
  setText("[data-profile-headline]", profile.headline);
  setText("[data-profile-bio]", profile.bio);
  setText("[data-about-title]", profile.aboutTitle);
  setText("[data-intro-title]", profile.introTitle);
  setText("[data-collab-title]", profile.collaborationTitle);
  setText("[data-collab-text]", profile.collaborationText);
  setText("[data-why-title]", profile.whyCodeTitle);
  setText("[data-why-text]", profile.whyCodeText);
  setText("[data-tech-title]", profile.techStackTitle);
  setText("[data-tech-description]", profile.techStackDescription);
  setText("[data-projects-title]", profile.projectsTitle);
  setText("[data-projects-description]", profile.projectsDescription);
  setText("[data-tutorials-title]", profile.tutorialsTitle);
  setText("[data-contact-title]", profile.contactTitle);
  setText("[data-contact-description]", profile.contactDescription);
  setText("[data-footer-description]", profile.footerDescription);
  setText("[data-year]", new Date().getFullYear());

  qsa("[data-profile-image], [data-profile-image-clone]").forEach((image) => {
    image.src = profile.profileImage;
  });

  qs("[data-availability]").innerHTML = `
    <span></span>
    ${icon("badge-check")}
    ${profile.isAvailable ? "Available" : "Unavailable"}
  `;

  qs("[data-skills]").innerHTML = profile.skills.map((skill) => `
    <span class="pill">${techIcon(skill)}<span>${skill}</span></span>
  `).join("");

  const mailto = `mailto:${profile.email}`;
  qsa("[data-email-link], [data-email-link-clone], [data-footer-email]").forEach((element) => {
    setLink(element, mailto, profile.email);
  });
}

function renderTechGroups() {
  qs("[data-tech-groups]").innerHTML = techGroups.map((group) => `
    <article class="tech-group">
      <h3>${icon(group.icon)} ${group.name}</h3>
      <div class="tech-items">
        ${group.items.map((item) => `
          <span class="tech-tile">
            ${techIcon(item)}
            <span>${item}</span>
          </span>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderProject() {
  const project = projects[activeProject];
  qs("[data-project-slider]").innerHTML = `
    <div class="project-card">
      <a class="project-image" href="${project.demoUrl}" target="_blank" rel="noreferrer">
        <img src="${project.image}" alt="${project.title}" />
      </a>
      <div class="project-content">
        <span class="project-index">${icon("folder-git-2")} Project ${activeProject + 1} of ${projects.length}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-stack">
          ${project.stack.map((item) => `<span class="tech-badge">${techIcon(item)} ${item}</span>`).join("")}
        </div>
        <a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">${icon("external-link")} View case study</a>
      </div>
    </div>
    <div class="slider-controls">
      <div class="arrow-buttons">
        <button class="round-button" type="button" data-prev-project aria-label="Previous project">${icon("chevron-left")}</button>
        <button class="round-button" type="button" data-next-project aria-label="Next project">${icon("chevron-right")}</button>
      </div>
      <div class="dots">
        ${projects.map((projectItem, index) => `
          <button class="dot ${index === activeProject ? "is-active" : ""}" type="button" data-project-dot="${index}" aria-label="Show ${projectItem.title}"></button>
        `).join("")}
      </div>
    </div>
  `;

  qs("[data-prev-project]").addEventListener("click", previousProject);
  qs("[data-next-project]").addEventListener("click", nextProject);
  qsa("[data-project-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProject = Number(button.dataset.projectDot);
      renderProject();
      refreshIcons();
      restartCarousel();
    });
  });
}

function nextProject() {
  activeProject = (activeProject + 1) % projects.length;
  renderProject();
  refreshIcons();
  restartCarousel();
}

function previousProject() {
  activeProject = (activeProject - 1 + projects.length) % projects.length;
  renderProject();
  refreshIcons();
  restartCarousel();
}

function restartCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => {
    activeProject = (activeProject + 1) % projects.length;
    renderProject();
    refreshIcons();
  }, 4500);
}

function renderTutorials() {
  qs("[data-tutorials]").innerHTML = tutorials.map((tutorial) => `
    <article class="tutorial-card">
      <img src="${tutorial.thumbnail}" alt="${tutorial.title}" />
      <div>
        <span class="category">${icon(tutorial.type === "Video" ? "play-square" : "book-open")} ${tutorial.category}</span>
        <h3>${tutorial.title}</h3>
        <p>${tutorial.excerpt}</p>
      </div>
    </article>
  `).join("");
}

function renderSocials() {
  const socialHtml = profile.socialLinks.map((social) => `
    <a class="social-button" href="${social.url}" target="_blank" rel="noreferrer" aria-label="${social.label}">
      ${icon(social.icon || "globe-2")}
      <span>${social.label}</span>
    </a>
  `).join("");

  qs("[data-social-links]").innerHTML = socialHtml;
  qs("[data-footer-social]").innerHTML = profile.socialLinks.map((social) => `
    <a href="${social.url}" target="_blank" rel="noreferrer" aria-label="${social.label}">
      ${icon(social.icon || "globe-2")}
    </a>
  `).join("");
}

function setupMenu() {
  const toggle = qs(".mobile-toggle");
  const nav = qs("[data-nav-links]");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    toggle.innerHTML = icon(isOpen ? "x" : "menu");
    refreshIcons();
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.innerHTML = icon("menu");
    refreshIcons();
  });
}

function setupLoader() {
  const loader = qs(".site-loader");
  const bar = qs("#loader-progress");
  const percent = qs("#loader-percent");
  let progress = 8;

  const progressTimer = window.setInterval(() => {
    progress = Math.min(90, progress + Math.max(1, Math.round((90 - progress) * 0.16)));
    bar.style.width = `${progress}%`;
    percent.textContent = `${progress}%`;
  }, 180);

  window.setTimeout(() => {
    window.clearInterval(progressTimer);
    bar.style.width = "100%";
    percent.textContent = "100%";
    window.setTimeout(() => loader.classList.remove("site-loader--show"), 260);
  }, 850);
}

function refreshIcons() {
  qsa("i[data-lucide]").forEach((element) => {
    const name = element.dataset.lucide;
    const folder = brandIconNames.has(name) ? "brands" : "lucide";
    const replacement = document.createElement("img");

    replacement.className = "site-icon";
    replacement.src = `./assets/icons/${folder}/${name}.svg`;
    replacement.alt = "";
    replacement.loading = "lazy";
    replacement.setAttribute("aria-hidden", "true");
    element.replaceWith(replacement);
  });
}

function init() {
  renderNav();
  renderProfile();
  renderTechGroups();
  renderProject();
  renderTutorials();
  renderSocials();
  setupMenu();
  setupLoader();
  restartCarousel();
  refreshIcons();
}

document.addEventListener("DOMContentLoaded", init);
