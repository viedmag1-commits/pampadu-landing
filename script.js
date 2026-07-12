/* ============================================================
   КАТАЛОГ КАРТ — реальные предложения Пампаду (кабинет 293285)
   На странице дебетовые, кредитные карты и РКО для бизнеса.
   Полный автообновляемый каталог — на витрине:
   https://ppdu.ru/1f4d0ced-f2ae-4307-a3e2-3a1308aa8939
   type: "debit" | "credit" | "business"
   ============================================================ */
const CARDS = [
  /* ---------- ДЕБЕТОВЫЕ ---------- */
  {
    bank: "ОТП Банк",
    name: "ОТП Premium",
    type: "debit",
    rating: 4.8,
    gradient: "linear-gradient(135deg,#00a05a,#00713f)",
    specs: [
      { k: "Кэшбэк", v: "уточняйте при оформлении" },
      { k: "Обслуживание", v: "уточняйте при оформлении" },
      { k: "Снятие наличных", v: "без комиссии" }
    ],
    tags: ["Премиальная", "Заявка онлайн", "Бесплатно"],
    link: "https://trk.ppdu.ru/click/kuKoZlzL?erid=2SDnjcSVLt2"
  },
  /* ---------- КРЕДИТНЫЕ ---------- */
  {
    bank: "ОТП Банк",
    name: "КК 120 дней без %",
    type: "credit",
    rating: 4.6,
    gradient: "linear-gradient(135deg,#00a05a,#00713f)",
    specs: [
      { k: "Без процентов", v: "до 120 дней" },
      { k: "Заявка", v: "онлайн" },
      { k: "Оформление", v: "бесплатно" }
    ],
    tags: ["120 дней без %", "Заявка онлайн"],
    link: "https://trk.ppdu.ru/click/DF37bDI8?erid=2SDnjee1d3Q"
  },
  {
    bank: "Зенит Банк",
    name: "Кредитная карта",
    type: "credit",
    rating: 4.5,
    gradient: "linear-gradient(135deg,#0072bc,#00a3e0)",
    specs: [
      { k: "Условия", v: "уточняйте при оформлении" },
      { k: "Заявка", v: "онлайн" },
      { k: "Оформление", v: "бесплатно" }
    ],
    tags: ["Заявка онлайн", "Бесплатно"],
    link: "https://trk.ppdu.ru/click/OnRQ3iJA?erid=2SDnjdGKRVJ"
  },
  {
    bank: "Кредит Европа Банк",
    name: "Кредитная карта",
    type: "credit",
    rating: 4.5,
    gradient: "linear-gradient(135deg,#003a70,#0a5aa8)",
    specs: [
      { k: "Условия", v: "уточняйте при оформлении" },
      { k: "Заявка", v: "онлайн" },
      { k: "Оформление", v: "бесплатно" }
    ],
    tags: ["Заявка онлайн", "Бесплатно"],
    link: "https://trk.ppdu.ru/click/NEco9uA9?erid=2SDnjezh5oY"
  },
  {
    bank: "Т-Банк",
    name: "Кредитная карта",
    type: "credit",
    rating: 4.7,
    gradient: "linear-gradient(135deg,#1c1c1e,#3a3a3c)",
    specs: [
      { k: "Без процентов", v: "до 55 дней" },
      { k: "Кредитный лимит", v: "до 1 000 000 ₽" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Без скрытых платежей", "Высокий лимит"],
    link: "https://trk.ppdu.ru/click/6lvmSsPd?erid=2SDnjdSdfv2"
  },
  {
    bank: "Яндекс Пэй",
    name: "Кредитная «Супер Сплит»",
    type: "credit",
    rating: 4.6,
    gradient: "linear-gradient(135deg,#ff3d00,#ffce00)",
    specs: [
      { k: "Оплата частями", v: "сплит без %" },
      { k: "Переплат", v: "нет" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Оплата частями", "Сплит без процентов"],
    link: "https://trk.ppdu.ru/click/z9uGkkvi?erid=2SDnjdJuo9L&siteId=23594"
  }
];

/* ---------- Рендер карточек ---------- */
const grid = document.getElementById("cardsGrid");
const noResults = document.getElementById("noResults");
let currentFilter = "all";
let currentQuery = "";

function stars(rating) {
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

function cardHTML(c) {
  const typeLabel =
    c.type === "credit" ? "Кредитная" :
    c.type === "business" ? "РКО" :
    "Дебетовая";
  const ctaText = "Оформить карту →";
  const specs = c.specs
    .map((s) => `<div class="ccard-spec"><span>${s.k}</span><b>${s.v}</b></div>`)
    .join("");
  const tags = c.tags.map((t) => `<span class="ccard-tag">${t}</span>`).join("");
  return `
    <article class="ccard" data-type="${c.type}" data-search="${(c.bank + " " + c.name).toLowerCase()}">
      <div class="ccard-visual" style="background:${c.gradient}">
        <span class="ccard-chip"></span>
        <span class="ccard-bank">${c.bank}</span>
        <span class="ccard-type">${typeLabel}</span>
      </div>
      <div class="ccard-body">
        <h3 class="ccard-name">${c.name}</h3>
        <div class="ccard-rating"><span class="stars">${stars(c.rating)}</span> ${c.rating.toFixed(1)}</div>
        <div class="ccard-specs">${specs}</div>
        <div class="ccard-tags">${tags}</div>
        <div class="ccard-cta">
          <a class="btn btn-primary btn-block" href="${c.link}" target="_blank" rel="noopener nofollow">${ctaText}</a>
          <p class="ccard-note">Заявка онлайн • Бесплатно</p>
        </div>
      </div>
    </article>`;
}

function render() {
  const items = CARDS.filter((c) => {
    const okType = currentFilter === "all" || c.type === currentFilter;
    const okSearch =
      !currentQuery ||
      (c.bank + " " + c.name).toLowerCase().includes(currentQuery);
    return okType && okSearch;
  });

  grid.innerHTML = items.map(cardHTML).join("");
  noResults.hidden = items.length !== 0;
}

/* ---------- Фильтры ---------- */
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  render();
});

/* ---------- Поиск ---------- */
document.getElementById("search").addEventListener("input", (e) => {
  currentQuery = e.target.value.trim().toLowerCase();
  render();
});

/* ---------- Быстрый переход из футера к фильтру ---------- */
document.querySelectorAll("[data-jump]").forEach((a) => {
  a.addEventListener("click", () => {
    const f = a.dataset.jump;
    const btn = document.querySelector(`.filter[data-filter="${f}"]`);
    if (btn) btn.click();
  });
});

/* ---------- Логотипы банков в trust-баре ---------- */
const banks = [...new Set(CARDS.map((c) => c.bank))];
document.getElementById("trustLogos").innerHTML = banks
  .map((b) => `<span class="tlogo">${b}</span>`)
  .join("");

/* ---------- Карта дня (топовый оффер) ---------- */
(function () {
  const box = document.getElementById("featuredCard");
  if (!box) return;
  const c = CARDS[0]; // топовая карта каталога
  const typeLabel = c.type === "credit" ? "Кредитная карта" : "Дебетовая карта";
  const perks = c.specs
    .map((s) => `<div class="perk"><b>${s.v}</b><span>${s.k}</span></div>`)
    .join("");
  box.innerHTML = `
    <span class="featured-badge">🔥 Карта дня</span>
    <div class="featured-visual" style="background:${c.gradient}">
      <span class="ccard-chip"></span>
      <span class="ccard-bank">${c.bank}</span>
      <span class="ccard-type">${typeLabel}</span>
    </div>
    <div class="featured-info">
      <div class="f-bank">${c.bank}</div>
      <h3>${c.name}</h3>
      <div class="featured-perks">${perks}</div>
      <div class="featured-cta">
        <a class="btn btn-primary btn-lg" href="${c.link}" target="_blank" rel="noopener nofollow">Оформить бесплатно →</a>
        <span class="f-note">Заявка онлайн за 5 минут</span>
      </div>
    </div>`;
})();

/* ---------- FAQ-аккордеон ---------- */
document.getElementById("faqList").addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.parentElement;
  const a = item.querySelector(".faq-a");
  const open = item.classList.toggle("open");
  a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
});

/* ---------- Мобильное меню ---------- */
document.getElementById("burger").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});
document.querySelectorAll(".nav a").forEach((a) =>
  a.addEventListener("click", () =>
    document.querySelector(".nav").classList.remove("open")
  )
);

/* ---------- Переключатель темы (с запоминанием) ---------- */
(function () {
  // Тёмная тема — по умолчанию. Светлая включается только если её явно выбрали.
  const saved = localStorage.getItem("theme-pref");
  if (saved === "light") document.body.classList.add("light");
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light");
      localStorage.setItem("theme-pref", isLight ? "light" : "dark");
    });
  }
})();

/* ---------- Старт ---------- */
render();
