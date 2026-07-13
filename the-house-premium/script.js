const menuItems = [
  {
    "name": "Espresso",
    "ar": "إسبريسو",
    "category": "coffee",
    "price": "1.50"
  },
  {
    "name": "Americano",
    "ar": "أمريكانو",
    "category": "coffee",
    "price": "2.00"
  },
  {
    "name": "Black",
    "ar": "بلاك",
    "category": "coffee",
    "price": "2.00"
  },
  {
    "name": "V60",
    "ar": "V60",
    "category": "coffee",
    "price": "3.50"
  },
  {
    "name": "V60 - Hula",
    "ar": "V60 - هولا",
    "category": "coffee",
    "price": "4.00"
  },
  {
    "name": "V60 - Raspberry",
    "ar": "V60 - راسبيري",
    "category": "coffee",
    "price": "5.00"
  },
  {
    "name": "Cortado",
    "ar": "كورتادو",
    "category": "coffee",
    "price": "2.00"
  },
  {
    "name": "Flat White",
    "ar": "فلات وايت",
    "category": "coffee",
    "price": "2.00"
  },
  {
    "name": "Cold Brew",
    "ar": "كولد برو",
    "category": "coffee",
    "price": "3.00"
  },
  {
    "name": "Latte",
    "ar": "لاتيه",
    "category": "coffee",
    "price": "3.00"
  },
  {
    "name": "Cappucino",
    "ar": "كابتشينو",
    "category": "coffee",
    "price": "3.00"
  },
  {
    "name": "House Latte",
    "ar": "هاوس لاتيه",
    "category": "signature",
    "price": "3.50"
  },
  {
    "name": "Berries Latte",
    "ar": "بيريز لاتيه",
    "category": "signature",
    "price": "3.50"
  },
  {
    "name": "Sal-Scot Latte",
    "ar": "سال-سكوت لاتيه",
    "category": "signature",
    "price": "3.50"
  },
  {
    "name": "Baked Latte",
    "ar": "بيكد لاتيه",
    "category": "signature",
    "price": "3.50"
  },
  {
    "name": "Arabian Latte",
    "ar": "أرابيان لاتيه",
    "category": "signature",
    "price": "4.00"
  },
  {
    "name": "Arabian Night",
    "ar": "أرابيان نايت",
    "category": "frappe",
    "price": "3.50"
  },
  {
    "name": "Toxic",
    "ar": "توكسيك",
    "category": "frappe",
    "price": "3.50"
  },
  {
    "name": "Choco Blosom",
    "ar": "شوكو بلوسوم",
    "category": "frappe",
    "price": "3.50"
  },
  {
    "name": "Silk Road",
    "ar": "سيلك رود",
    "category": "frappe",
    "price": "3.50"
  },
  {
    "name": "Nutz",
    "ar": "نتز",
    "category": "frappe",
    "price": "3.50"
  },
  {
    "name": "Mad",
    "ar": "ماد",
    "category": "matcha",
    "price": "4.00"
  },
  {
    "name": "Glad",
    "ar": "غلاد",
    "category": "matcha",
    "price": "4.00"
  },
  {
    "name": "Meeeh",
    "ar": "مييه",
    "category": "matcha",
    "price": "4.00"
  },
  {
    "name": "Cozy",
    "ar": "كوزي",
    "category": "matcha",
    "price": "4.00"
  },
  {
    "name": "Frozy",
    "ar": "فروزي",
    "category": "matcha",
    "price": "4.00"
  },
  {
    "name": "Wall-Nuts",
    "ar": "وول-نتس",
    "category": "shake",
    "price": "5.00"
  },
  {
    "name": "Zesty",
    "ar": "زيستي",
    "category": "shake",
    "price": "5.00"
  },
  {
    "name": "Mera-Mieh",
    "ar": "ميرا-ميه",
    "category": "shake",
    "price": "5.00"
  },
  {
    "name": "Player",
    "ar": "بلاير",
    "category": "shake",
    "price": "5.00"
  },
  {
    "name": "Surpise Me",
    "ar": "فاجئني",
    "category": "shake",
    "price": "5.00"
  },
  {
    "name": "Extra Shot",
    "ar": "شوت إضافي",
    "category": "extras",
    "price": "0.50"
  },
  {
    "name": "Syrup",
    "ar": "سيرب",
    "category": "extras",
    "price": "0.50"
  },
  {
    "name": "Whipped Cream",
    "ar": "كريمة مخفوقة",
    "category": "extras",
    "price": "0.50"
  },
  {
    "name": "Still Water",
    "ar": "مياه عادية",
    "category": "extras",
    "price": "0.50"
  },
  {
    "name": "Sparkling Water",
    "ar": "مياه غازية",
    "category": "extras",
    "price": "0.50"
  },
  {
    "name": "Coconut Milk",
    "ar": "حليب جوز الهند",
    "category": "extras",
    "price": "0.75"
  },
  {
    "name": "Almond Milk",
    "ar": "حليب اللوز",
    "category": "extras",
    "price": "0.75"
  },
  {
    "name": "Lactose Free",
    "ar": "خالي من اللاكتوز",
    "category": "extras",
    "price": "0.50"
  }
];

const categoryOrder = ["coffee", "signature", "frappe", "matcha", "shake", "extras"];
const categoryMeta = {
  en: {
    coffee: { title: "Coffee Classics", note: "Espresso, pour-over and milk-based staples." },
    signature: { title: "Latte Signatures", note: "The House latte collection." },
    frappe: { title: "FRAAAAAAAAPE", note: "Cold blended House creations." },
    matcha: { title: "MAAAAAATCHA", note: "Five distinct matcha moods." },
    shake: { title: "MILKSHAAAAAAKE", note: "Rich, playful blended shakes." },
    extras: { title: "EXTRAAAAAAAAS", note: "Shots, syrups, water and milk alternatives." }
  },
  ar: {
    coffee: { title: "كلاسيكيات القهوة", note: "إسبريسو، قهوة مقطرة ومشروبات الحليب." },
    signature: { title: "لاتيه مميز", note: "مجموعة لاتيه ذا هاوس." },
    frappe: { title: "فرابيه", note: "خلطات ذا هاوس الباردة." },
    matcha: { title: "ماتشا", note: "خمس نكهات ماتشا مختلفة." },
    shake: { title: "ميلك شيك", note: "ميلك شيك غني ومميز." },
    extras: { title: "إضافات", note: "شوتات، سيرب، مياه وبدائل الحليب." }
  }
};

const body = document.body;
const root = document.documentElement;
const header = document.getElementById("site-header");
const menuList = document.getElementById("menu-list");
const tabs = [...document.querySelectorAll(".menu-tab")];
const menuSearch = document.getElementById("menu-search-input");
const menuResultCount = document.getElementById("menu-result-count");
const menuClear = document.getElementById("menu-clear");
const langButton = document.querySelector(".lang-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const videoShell = document.querySelector(".video-shell");
const video = document.querySelector(".experience-video");
const videoButton = document.querySelector(".video-toggle");
const progressBar = document.querySelector(".scroll-progress span");
const glow = document.querySelector(".cursor-glow");
const coarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)");
const mobileViewport = window.matchMedia("(max-width: 720px)");

function getStoredLanguage() {
  try { return localStorage.getItem("house-language") === "ar" ? "ar" : "en"; }
  catch { return "en"; }
}

let language = getStoredLanguage();
let activeCategory = "all";
let searchTerm = "";
let scrollTicking = false;

const escapeHtml = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function itemMatches(item, query) {
  if (!query) return true;
  const searchable = `${item.name} ${item.ar}`.toLocaleLowerCase();
  return searchable.includes(query.toLocaleLowerCase());
}

function renderMenuItem(item, index) {
  const itemName = language === "ar" ? item.ar : item.name;
  return `
    <article class="menu-item-card" style="--item-index:${index}" aria-label="${escapeHtml(itemName)} — ${item.price} JD">
      <span class="menu-item-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <h4>${escapeHtml(itemName)}</h4>
      <span class="menu-item-leader" aria-hidden="true"></span>
      <strong class="menu-price"><span>${item.price}</span><small>JD</small></strong>
    </article>
  `;
}

function renderMenu() {
  const categories = activeCategory === "all" ? categoryOrder : [activeCategory];
  let totalVisible = 0;

  const sections = categories.map((category, categoryIndex) => {
    const items = menuItems.filter(item => item.category === category && itemMatches(item, searchTerm));
    if (!items.length) return "";
    totalVisible += items.length;
    const meta = categoryMeta[language][category];
    return `
      <section class="menu-category-block" data-category="${category}" style="--category-index:${categoryIndex}">
        <header class="menu-category-header">
          <div class="menu-category-kicker">
            <span>${String(categoryOrder.indexOf(category) + 1).padStart(2, "0")}</span>
            <small>${items.length} ${language === "ar" ? "عناصر" : items.length === 1 ? "ITEM" : "ITEMS"}</small>
          </div>
          <div>
            <h3>${escapeHtml(meta.title)}</h3>
            <p>${escapeHtml(meta.note)}</p>
          </div>
        </header>
        <div class="menu-category-items">
          ${items.map(renderMenuItem).join("")}
        </div>
      </section>
    `;
  }).join("");

  menuList.classList.toggle("is-single", activeCategory !== "all");
  menuList.classList.toggle("is-searching", Boolean(searchTerm));

  menuList.innerHTML = sections || `
    <div class="menu-empty-state">
      <span>0</span>
      <h3>${language === "ar" ? "لا توجد نتائج" : "No menu matches"}</h3>
      <p>${language === "ar" ? "جرّب كتابة اسم آخر أو امسح البحث." : "Try another name or clear the search."}</p>
    </div>
  `;

  const countLabel = language === "ar"
    ? `${totalVisible} ${totalVisible === 1 ? "عنصر" : "عنصراً"}`
    : `${totalVisible} ${totalVisible === 1 ? "item" : "items"}`;
  menuResultCount.textContent = countLabel;
  menuClear.hidden = !searchTerm;
}

function selectCategory(category, focusTab = false) {
  activeCategory = category;
  tabs.forEach(tab => {
    const selected = tab.dataset.category === category;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });
  renderMenu();
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => selectCategory(tab.dataset.category));
  tab.addEventListener("keydown", event => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const currentIndex = tabs.indexOf(tab);
    const direction = root.dir === "rtl" ? -1 : 1;
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - direction + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    selectCategory(tabs[nextIndex].dataset.category, true);
  });
});

menuSearch?.addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderMenu();
});

menuClear?.addEventListener("click", () => {
  searchTerm = "";
  menuSearch.value = "";
  renderMenu();
  menuSearch.focus();
});

function updateLanguage() {
  const isArabic = language === "ar";
  root.lang = language;
  root.dir = isArabic ? "rtl" : "ltr";
  body.classList.toggle("is-arabic", isArabic);
  langButton.textContent = isArabic ? "EN" : "AR";
  langButton.setAttribute("aria-label", isArabic ? "Switch to English" : "التبديل إلى العربية");

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    element.textContent = element.dataset[language];
  });

  if (menuSearch) {
    menuSearch.placeholder = isArabic ? menuSearch.dataset.placeholderAr : menuSearch.dataset.placeholderEn;
    menuSearch.setAttribute("aria-label", menuSearch.placeholder);
  }

  try { localStorage.setItem("house-language", language); } catch { /* Storage may be unavailable in local previews. */ }
  renderMenu();
}

langButton?.addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  updateLanguage();
});

function setNavigation(open) {
  menuToggle.classList.toggle("active", open);
  nav.classList.toggle("open", open);
  body.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

menuToggle?.addEventListener("click", () => setNavigation(!menuToggle.classList.contains("active")));
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setNavigation(false)));

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && body.classList.contains("nav-open")) {
    setNavigation(false);
    menuToggle.focus();
  }
});

function updateScrollUI() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 24);
  const max = root.scrollHeight - root.clientHeight;
  progressBar.style.width = `${max > 0 ? Math.min((y / max) * 100, 100) : 0}%`;
  scrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateScrollUI);
    scrollTicking = true;
  }
}, { passive: true });
updateScrollUI();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: mobileViewport.matches ? .07 : .12,
  rootMargin: mobileViewport.matches ? "0px 0px -6% 0px" : "0px"
});
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

if (video && videoButton && videoShell) {
  const markVideoReady = () => videoShell.classList.add("video-ready");
  if (video.readyState >= 2) markVideoReady();
  video.addEventListener("loadeddata", markVideoReady, { once: true });
  video.addEventListener("canplay", markVideoReady, { once: true });

  videoButton.addEventListener("click", async () => {
    try {
      if (video.paused) {
        video.muted = false;
        await video.play();
        videoShell.classList.add("playing");
      }
    } catch {
      video.setAttribute("controls", "controls");
    }
  });

  video.addEventListener("pause", () => videoShell.classList.remove("playing"));
  video.addEventListener("ended", () => videoShell.classList.remove("playing"));
  video.addEventListener("click", () => { if (!video.paused) video.pause(); });
  const markVideoUnavailable = () => videoShell.classList.add("video-unavailable");
  video.addEventListener("error", markVideoUnavailable);
  video.querySelector("source")?.addEventListener("error", markVideoUnavailable);
}

if (!coarsePointer.matches && glow) {
  window.addEventListener("pointermove", event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  }, { passive: true });
}

function setViewportHeight() {
  const height = window.visualViewport?.height || window.innerHeight;
  root.style.setProperty("--app-height", `${height}px`);
}
setViewportHeight();
window.addEventListener("resize", setViewportHeight, { passive: true });
window.visualViewport?.addEventListener("resize", setViewportHeight, { passive: true });

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector(".preloader")?.classList.add("hide"), 360);
});

document.getElementById("year").textContent = new Date().getFullYear();
updateLanguage();
selectCategory("all");
