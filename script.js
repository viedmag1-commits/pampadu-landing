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
    bank: "ВТБ",
    name: "Дебетовая весёлая карта МИР",
    type: "debit",
    rating: 4.7,
    offerId: "07ba6577-2df0-4e99-a7a3-65748ee52e8a",
    gradient: "linear-gradient(135deg,#0a2896,#1e50d6)",
    specs: [
      { k: "Кэшбэк", v: "до 30%" },
      { k: "Категории", v: "на выбор" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Бесплатная", "Кэшбэк рублями", "Карта МИР"],
    link: "https://trk.ppdu.ru/click/dqMrRH4p?erid=2SDnjbxUxwk&siteId=23657"
  },
  {
    bank: "Т-Банк",
    name: "ALL Airlines Debit",
    type: "debit",
    rating: 4.8,
    offerId: "1092c2b6-d9b0-46b3-8fcc-3b75fb5e097d",
    gradient: "linear-gradient(135deg,#1c1c1e,#3a3a3c)",
    specs: [
      { k: "Мили за покупки", v: "до 10%" },
      { k: "Перелёты", v: "любых авиакомпаний" },
      { k: "Обслуживание", v: "0 ₽*" }
    ],
    tags: ["Мили на билеты", "Для путешествий"],
    link: "https://trk.ppdu.ru/click/gbMIK1C8?erid=2SDnjcoWEz6"
  },
  {
    bank: "Т-Банк",
    name: "Молодёжная карта Black",
    type: "debit",
    rating: 4.7,
    offerId: "a79e1902-6953-4129-82cc-cbb412d32872",
    gradient: "linear-gradient(135deg,#26262b,#46464f)",
    specs: [
      { k: "Кэшбэк", v: "до 30%" },
      { k: "Для возраста", v: "14–25 лет" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Для молодёжи", "Высокий кэшбэк"],
    link: "https://trk.ppdu.ru/click/OWnGrhrD?erid=2SDnjeivmyt"
  },
  {
    bank: "Альфа-Банк",
    name: "Альфа-Карта для молодёжи",
    type: "debit",
    rating: 4.7,
    offerId: "e276690e-11f1-4b52-9f88-0919899de7ad",
    gradient: "linear-gradient(135deg,#e30613,#b00510)",
    specs: [
      { k: "Кэшбэк", v: "до 20%" },
      { k: "Для возраста", v: "14–25 лет" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Для молодёжи", "Бесплатная"],
    link: "https://trk.ppdu.ru/click/wRbeMS68?erid=2SDnjcyvkUv"
  },
  {
    bank: "Альфа-Банк",
    name: "Альфа-Карта «Пенсия»",
    type: "debit",
    rating: 4.7,
    offerId: "6338c90f-82b4-40ed-ae24-f1ab1c4c9eed",
    gradient: "linear-gradient(135deg,#e30613,#b00510)",
    specs: [
      { k: "Кэшбэк", v: "до 10%" },
      { k: "Для пенсионеров", v: "повышенный % на остаток" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Для пенсионеров", "Бесплатная"],
    link: "https://trk.ppdu.ru/click/D0ea0fZJ?erid=2SDnjefNrLJ"
  },
  {
    bank: "Альфа-Банк",
    name: "Альфа-Карта для самозанятых",
    type: "debit",
    rating: 4.6,
    offerId: "20825cac-a9f8-48c7-8f24-3924eec354b7",
    gradient: "linear-gradient(135deg,#e30613,#b00510)",
    specs: [
      { k: "Приём платежей", v: "без расчётного счёта" },
      { k: "Кэшбэк", v: "до 10%" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Для самозанятых", "Бесплатная"],
    link: "https://trk.ppdu.ru/click/VVeEb61B?erid=2SDnjcYZxoE"
  },
  {
    bank: "Альфа-Банк",
    name: "Детская Альфа-Карта",
    type: "debit",
    rating: 4.6,
    offerId: "ac7b4fb4-768e-471a-a4c1-08c98bd0b99f",
    gradient: "linear-gradient(135deg,#e30613,#b00510)",
    specs: [
      { k: "Для возраста", v: "6–13 лет" },
      { k: "Родительский контроль", v: "в приложении" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Детская карта", "Бесплатная"],
    link: "https://trk.ppdu.ru/click/RrraykdH?erid=2SDnjdQzYpk"
  },
  {
    bank: "Т-Банк",
    name: "Дебетовая Black МИР",
    type: "debit",
    rating: 4.8,
    offerId: "73a2d8df-95f3-4b0a-92d1-a8590d66451f",
    gradient: "linear-gradient(135deg,#101012,#2c2c34)",
    specs: [
      { k: "Кэшбэк за топливо", v: "100%" },
      { k: "Кэшбэк в категориях", v: "до 30%" },
      { k: "Обслуживание", v: "0 ₽*" }
    ],
    tags: ["100% за топливо", "Карта МИР"],
    link: "https://trk.ppdu.ru/click/jjBBBPPC?erid=2SDnjemFSoC"
  },
  {
    bank: "Уралсиб",
    name: "Дебетовая карта «Прибыль»",
    type: "debit",
    rating: 4.6,
    gradient: "linear-gradient(135deg,#3f2b96,#5a4fcf)",
    specs: [
      { k: "Условия", v: "уточняйте при оформлении" },
      { k: "Заявка", v: "онлайн" },
      { k: "Оформление", v: "бесплатно" }
    ],
    tags: ["Заявка онлайн", "Бесплатно"],
    link: "https://trk.ppdu.ru/click/wsyN2nUV?erid=2SDnjcAcyAz"
  },
  {
    bank: "Фора-Банк",
    name: "Дебетовая карта",
    type: "debit",
    rating: 4.5,
    gradient: "linear-gradient(135deg,#b01116,#7d0c10)",
    specs: [
      { k: "Условия", v: "уточняйте при оформлении" },
      { k: "Заявка", v: "онлайн" },
      { k: "Оформление", v: "бесплатно" }
    ],
    tags: ["Заявка онлайн", "Бесплатно"],
    link: "https://trk.ppdu.ru/click/xkO4Mfzr?erid=2SDnjeLQiFt"
  },
  {
    bank: "Россельхозбанк",
    name: "Дебетовая карта",
    type: "debit",
    rating: 4.5,
    gradient: "linear-gradient(135deg,#005f27,#00843a)",
    specs: [
      { k: "Условия", v: "уточняйте при оформлении" },
      { k: "Заявка", v: "онлайн" },
      { k: "Оформление", v: "бесплатно" }
    ],
    tags: ["Заявка онлайн", "Бесплатно"],
    link: "https://trk.ppdu.ru/click/mBMTeKOC?erid=2SDnjf3YxGr"
  },
  /* ---------- КРЕДИТНЫЕ ---------- */
  {
    bank: "ВТБ",
    name: "Кредитная карта",
    type: "credit",
    rating: 4.7,
    offerId: "5180a4f1-be1b-4879-88c3-263c6e29766a",
    gradient: "linear-gradient(135deg,#0a2896,#1e50d6)",
    specs: [
      { k: "Без процентов", v: "до 200 дней" },
      { k: "Кредитный лимит", v: "до 1 000 000 ₽" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["До 200 дней без %", "Большой лимит"],
    link: "https://trk.ppdu.ru/click/i6UKWbNq?erid=2SDnjeGCc2T"
  },
  {
    bank: "Ренессанс Банк",
    name: "Кредитная «115 дней без %»",
    type: "credit",
    rating: 4.6,
    offerId: "41cea413-391a-438b-8a8c-a546b892feb0",
    gradient: "linear-gradient(135deg,#ff5a1f,#e23c00)",
    specs: [
      { k: "Без процентов", v: "до 115 дней" },
      { k: "Кредитный лимит", v: "до 700 000 ₽" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["115 дней без %", "Высокий лимит"],
    link: "https://trk.ppdu.ru/click/VNoCPAwa?erid=2SDnjdFo9iJ"
  },
  {
    bank: "Яндекс Пэй",
    name: "Кредитная «Супер Сплит»",
    type: "credit",
    rating: 4.6,
    offerId: "f76870eb-a262-4aaa-836f-0a3e0460f5d5",
    gradient: "linear-gradient(135deg,#ff3d00,#ffce00)",
    specs: [
      { k: "Оплата частями", v: "сплит без %" },
      { k: "Переплат", v: "нет" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Оплата частями", "Сплит без процентов"],
    link: "https://trk.ppdu.ru/click/z9uGkkvi?erid=2SDnjdJuo9L"
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
    link: "https://trk.ppdu.ru/click/j1ISERcg?erid=2SDnjeUybaz"
  },
  {
    bank: "Ozon Банк",
    name: "Кредитная карта",
    type: "credit",
    rating: 4.6,
    gradient: "linear-gradient(135deg,#005bff,#00277a)",
    specs: [
      { k: "Без процентов", v: "до 60 дней" },
      { k: "Кэшбэк на Ozon", v: "до 10%" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Кэшбэк на Ozon", "Без скрытых платежей"],
    link: "https://trk.ppdu.ru/click/sdKfuq9q?erid=2SDnjcGXYYi"
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
    link: "https://trk.ppdu.ru/click/Be6epAq2?erid=2SDnjdLFXE2"
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
    bank: "Банк ПСБ",
    name: "Дебетовая «Твой Кешбэк»",
    type: "debit",
    rating: 4.9,
    offerId: "47f04eab-74f8-443d-ae09-9f97df45e0f5",
    gradient: "linear-gradient(135deg,#0a4ea8,#1666c8)",
    specs: [
      { k: "Приветственный кэшбэк", v: "25% (3 мес.)" },
      { k: "Кэшбэк в категориях", v: "до 5%" },
      { k: "Обслуживание", v: "0 ₽ навсегда" }
    ],
    tags: ["Бесплатно навсегда", "Кэшбэк на всё", "Карта МИР"],
    link: "https://trk.ppdu.ru/click/Ik2W7bFJ?erid=2SDnjehD1C8&siteId=23657"
  },
  {
    bank: "Банк ПСБ",
    name: "«Твой Кешбэк» + Пятёрочка",
    type: "debit",
    rating: 4.7,
    offerId: "2286e697-c5d5-49f9-ac2d-064ec206ea2a",
    gradient: "linear-gradient(135deg,#0a4ea8,#0f57bf)",
    specs: [
      { k: "Подарок", v: "сертификат Пятёрочки" },
      { k: "Кэшбэк в категориях", v: "до 5%" },
      { k: "Обслуживание", v: "0 ₽" }
    ],
    tags: ["Подарок Пятёрочка", "Бесплатная"],
    link: "https://trk.ppdu.ru/click/8qXkyaAR?erid=2SDnjeh5bv2&siteId=23656"
  },
  {
    bank: "Альфа-Банк",
    name: "Регистрация бизнеса + РКО",
    type: "business",
    rating: 4.7,
    offerId: "a2a06289-081c-402f-9cd7-dbd38ac11be7",
    gradient: "linear-gradient(135deg,#e30613,#b00510)",
    specs: [
      { k: "Регистрация бизнеса", v: "бесплатно" },
      { k: "Открытие счёта", v: "бесплатно" },
      { k: "Для бизнеса", v: "ИП и ООО" }
    ],
    tags: ["Регистрация бизнеса", "РКО"],
    link: "https://trk.ppdu.ru/click/jXyEiaoK?erid=2SDnjeEA46e"
  },
  {
    bank: "ВТБ",
    name: "Регистрация бизнеса + РКО",
    type: "business",
    rating: 4.7,
    gradient: "linear-gradient(135deg,#0a2896,#1e50d6)",
    specs: [
      { k: "Регистрация бизнеса", v: "бесплатно" },
      { k: "Открытие счёта", v: "бесплатно" },
      { k: "Для бизнеса", v: "ИП и ООО" }
    ],
    tags: ["Регистрация бизнеса", "РКО"],
    link: "https://trk.ppdu.ru/click/cNVX7lv7?erid=Kra23bNL5"
  },
  {
    bank: "ОТП Банк",
    name: "РКО",
    type: "business",
    rating: 4.5,
    gradient: "linear-gradient(135deg,#00a05a,#00713f)",
    specs: [
      { k: "Открытие счёта", v: "бесплатно" },
      { k: "Обслуживание", v: "от 0 ₽" },
      { k: "Для бизнеса", v: "ИП и ООО" }
    ],
    tags: ["РКО", "Для бизнеса"],
    link: "https://trk.ppdu.ru/click/9m7Vav3s?erid=2SDnjcWwygv"
  },
  {
    bank: "Банк ПСБ",
    name: "РКО",
    type: "business",
    rating: 4.6,
    gradient: "linear-gradient(135deg,#0a4ea8,#1666c8)",
    specs: [
      { k: "Открытие счёта", v: "бесплатно" },
      { k: "Обслуживание", v: "от 0 ₽" },
      { k: "Для бизнеса", v: "ИП и ООО" }
    ],
    tags: ["РКО", "Для бизнеса"],
    link: "https://trk.ppdu.ru/click/hGElrPIc?erid=Kra23mn2h"
  },
  {
    bank: "Точка Банк",
    name: "РКО",
    type: "business",
    rating: 4.8,
    gradient: "linear-gradient(135deg,#ffd400,#f7b500)",
    specs: [
      { k: "Открытие счёта", v: "бесплатно" },
      { k: "Обслуживание", v: "от 0 ₽" },
      { k: "Для бизнеса", v: "ИП и ООО" }
    ],
    tags: ["РКО", "Для бизнеса"],
    link: "https://trk.ppdu.ru/click/1pMUYSxL?erid=2SDnjduYB12"
  },
  {
    bank: "БСПБ",
    name: "РКО",
    type: "business",
    rating: 4.5,
    gradient: "linear-gradient(135deg,#003876,#0058b0)",
    specs: [
      { k: "Открытие счёта", v: "бесплатно" },
      { k: "Обслуживание", v: "от 0 ₽" },
      { k: "Для бизнеса", v: "ИП и ООО" }
    ],
    tags: ["РКО", "Для бизнеса"],
    link: "https://trk.ppdu.ru/click/ltN2QAqq?erid=2SDnjeLA2cx"
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
