// ==============================================================================
// R8ILT ADMIN CONTROL — Client JavaScript Logic
// ==============================================================================

let adminToken = sessionStorage.getItem('r8ilt_admin_token') || '';
let allProducts = [];
let editingProductId = null;
let stagedImages = []; // List of URLs or { file, previewUrl, isNew }

// Category and Brand Mappings
const CATEGORY_MAP = {
  bombers: { ru: "Бомберы / Куртки", en: "Bombers & Jackets", de: "Bomber & Jacken" },
  hoodies: { ru: "Худи", en: "Hoodie", de: "Kapuzenpullover" },
  sweatshirts: { ru: "Свитшоты", en: "Sweatshirts", de: "Sweatshirts" },
  tees: { ru: "Футболки / Майки", en: "T-Shirts & Tanks", de: "T-Shirts & Tanks" },
  pants: { ru: "Штаны", en: "Pants", de: "Hosen" },
  shorts: { ru: "Шорты", en: "Shorts", de: "Shorts" },
  misc: { ru: "Разное", en: "Accessories & Misc", de: "Accessoires & Sonstiges" }
};

const BRAND_NAME_MAP = {
  pitbull: "Pit Bull Germany",
  svastone: "Svastone",
  beloyar: "Белояр",
  thorsteinar: "Thor Steinar",
  lonsdale: "Lonsdale",
  alphaindustries: "Alpha Industries",
  m8l8th: "M8L8TH",
  hardcoredivision: "Hardcore Division",
  mastrum: "MA.STRUM",
  other: "Разное"
};

// Helper for resolving image paths
function resolveImgSrc(src) {
  if (!src) return 'fotkii/photo_2026-08-27_11-53-52.jpg';
  return src;
}

// Default Products (used for 1-click import into Supabase DB)
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    brand: "mastrum",
    brand_name: "MA.STRUM",
    category: "hoodies",
    price: 40,
    old_price: 50,
    currency: "€",
    badge: "sale",
    rune: "☩",
    images: [
      "tovari/photo_1_2026-08-28_11-45-48.jpg",
      "tovari/photo_2_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Худи MA.STRUM White", en: "MA.STRUM White Hoodie", de: "MA.STRUM Weißer Kapuzenpullover" },
    category_names: { ru: "Худи", en: "Hoodie", de: "Kapuzenpullover" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Белое оригинальное худи от британского бренда MA.STRUM с фирменным патчем-компасом на плече. Плотный качественный хлопок, удобный капюшон со шнурками и карман-кенгуру. Состояние 9/10, вещь чистая и без нюансов.",
      en: "Original white hoodie by British brand MA.STRUM with signature compass shoulder patch. Heavyweight cotton, adjustable drawstring hood and kangaroo pocket. Condition 9/10, clean and without flaws.",
      de: "Originaler weißer Kapuzenpullover von MA.STRUM mit ikonischem Kompass-Patch an der Schulter. Hochwertige Baumwolle und Kängurutasche. Zustand 9/10, ohne Mängel."
    },
    size: "XL",
    display_order: 10,
    is_active: true
  },
  {
    id: 3,
    brand: "beloyar",
    brand_name: "Белояр",
    category: "tees",
    price: 25,
    old_price: 35,
    currency: "€",
    badge: "sale",
    rune: "ᛉ",
    images: [
      "tovari/photo_5_2026-08-28_11-45-48.jpg",
      "tovari/photo_6_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Футболка Белояр «Set Sail and Conquer the World» Black", en: "Beloyar T-Shirt «Set Sail and Conquer the World» Black", de: "Beloyar T-Shirt «Set Sail and Conquer the World» Schwarz" },
    category_names: { ru: "Футболки / Майки", en: "T-Shirts & Tanks", de: "T-Shirts & Tanks" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Культовая черная футболка от бренда Белояр с принтом драккара и легендарным слоганом Set Sail and Conquer the World. Насыщенный черный цвет, плотный премиальный хлопок, фирменный принт на рукаве и бирка Сделано на Руси. Состояние 9/10, вещь без нюансов.",
      en: "Iconic black t-shirt by Beloyar featuring the drakkar graphic and Set Sail and Conquer the World motto. Heavyweight premium cotton, durable screen print and sleeve branding. Condition 9/10, clean and flaw-free.",
      de: "Kultiges schwarzes T-Shirt von Beloyar mit Drakkar-Motiv und dem Motto Set Sail and Conquer the World. Hochwertige Baumwolle und langlebiger Druck. Zustand 9/10, makellos."
    },
    size: "XL",
    display_order: 20,
    is_active: true
  },
  {
    id: 4,
    brand: "beloyar",
    brand_name: "Белояр",
    category: "tees",
    price: 25,
    old_price: 35,
    currency: "€",
    badge: "sale",
    rune: "ᚱ",
    images: [
      "tovari/photo_7_2026-08-28_11-45-48.jpg",
      "tovari/photo_8_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Футболка Белояр «Classic Yellow Logo» Black", en: "Beloyar T-Shirt «Classic Yellow Logo» Black", de: "Beloyar T-Shirt «Classic Yellow Logo» Schwarz" },
    category_names: { ru: "Футболки / Майки", en: "T-Shirts & Tanks", de: "T-Shirts & Tanks" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Оригинальная черная футболка от бренда Белояр с контрастным желтым руническим логотипом на груди. Плотный качественный хлопок, бирка Сделано на Руси и фирменный принт на рукаве. Состояние 9/10, чистая и без нюансов.",
      en: "Original black t-shirt by Beloyar featuring a bold yellow runic logo across the chest. Heavyweight cotton, sleeve branding and authentic neck tag. Condition 9/10, clean and in great shape.",
      de: "Originales schwarzes T-Shirt von Beloyar mit gelbem Runenlogo auf der Brust. Hochwertige Baumwolle und Ärmelbranding. Zustand 9/10, makellos."
    },
    size: "L",
    display_order: 30,
    is_active: true
  },
  {
    id: 5,
    brand: "svastone",
    brand_name: "Svastone",
    category: "tees",
    price: 25,
    old_price: 35,
    currency: "€",
    badge: "sale",
    rune: "🜵",
    images: [
      "tovari/photo_9_2026-08-28_11-45-48.jpg",
      "tovari/photo_10_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Футболка Svastone «Іду на Ви» Ringer Black", en: "Svastone T-Shirt «Idu Na Vy» Ringer Black", de: "Svastone T-Shirt «Idu Na Vy» Ringer Schwarz" },
    category_names: { ru: "Футболки / Майки", en: "T-Shirts & Tanks", de: "T-Shirts & Tanks" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Культовая футболка от украинского бренда Svastone с принтом Іду на Ви и контрастными светлыми манжетами ringer tee. Состояние 7/10, винтажный характер: есть естественные трещинки на принте и легкая растянутость ткани от носки, дырок и пятен нет.",
      en: "Iconic combat ringer t-shirt by Svastone featuring the legendary Idu Na Vy print and contrasting trims. Condition 7/10 with honest vintage character: cracking on the print and slight relaxed stretch from wear, no holes or stains.",
      de: "Kultiges Ringer T-Shirt von Svastone mit dem Motiv Idu Na Vy und kontrastierenden Bündchen. Zustand 7/10 mit authentischem Vintage-Charakter: leichte Risse im Druck und gewollte Dehnung, ohne Löcher."
    },
    size: "XL",
    display_order: 40,
    is_active: true
  },
  {
    id: 6,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "sweatshirts",
    price: 75,
    old_price: 85,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_11_2026-08-28_11-45-48.jpg",
      "tovari/photo_12_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Свитшот Pit Bull Germany «Germania 01» Black", en: "Pit Bull Germany Sweatshirt «Germania 01» Black", de: "Pit Bull Germany Sweatshirt «Germania 01» Schwarz" },
    category_names: { ru: "Свитшоты", en: "Sweatshirts", de: "Sweatshirts" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Тяжелый оригинальный свитшот от немецкого бренда Pit Bull Germany с массивными принтами Germania 01 на груди, спине и рукавах. Плотный качественный хлопок с начесом, фирменный патч с бульдогом на манжете. Состояние 8/10, есть естественные трещинки на принте от носки, сама кофта плотная и без дефектов.",
      en: "Heavyweight authentic sweatshirt by Pit Bull Germany featuring massive Germania 01 graphics across chest, back and sleeve. Heavy fleece cotton, signature dog patch on sleeve cuff. Condition 8/10 with honest print cracking from wear, fabric is solid and clean.",
      de: "Schweres originales Sweatshirt von Pit Bull Germany mit markanten Germania 01 Prints auf Brust, Rücken und Ärmeln. Robuste Fleece-Baumwolle und Pitbull-Patch am Ärmel. Zustand 8/10, leichte Risse im Druck, Stoff top."
    },
    size: "XL",
    display_order: 50,
    is_active: true
  },
  {
    id: 7,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "bombers",
    price: 50,
    old_price: 60,
    currency: "€",
    badge: "sale",
    rune: "🜏",
    images: [
      "tovari/photo_13_2026-08-28_11-45-48.jpg",
      "tovari/photo_14_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Куртка Pit Bull Germany «Softshell Tactical» Black", en: "Pit Bull Germany Jacket «Softshell Tactical» Black", de: "Pit Bull Germany Jacke «Softshell Tactical» Schwarz" },
    category_names: { ru: "Бомберы / Куртки", en: "Bombers & Jackets", de: "Bomber & Jacken" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Тактическая черная ветрозащитная куртка softshell от немецкого бренда Pit Bull Germany. Плотный влагоотталкивающий материал, теплая флисовая подкладка, регулируемые манжеты на липучках и карманы на молниях. Состояние 8/10, есть нюанс: снизу отходит язычок молнии (легко поправить в ателье), поэтому цена приятно снижена.",
      en: "Tactical black windproof softshell jacket by German label Pit Bull Germany. Water-resistant outer shell, warm fleece lining, Velcro adjustable cuffs and secure zipper pockets. Condition 8/10, minor flaw: lower zipper tab needs a simple stitch in a repair shop, priced down accordingly.",
      de: "Taktische schwarze Softshelljacke von Pit Bull Germany. Wind- und wasserabweisendes Material, warmes Fleecefutter und Reißverschlusstaschen. Zustand 8/10 mit kleinem Reißverschluss-Detail, stark reduzierter Preis."
    },
    size: "L",
    display_order: 60,
    is_active: true
  },
  {
    id: 8,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "tees",
    price: 65,
    old_price: 75,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_15_2026-08-28_11-45-48.jpg",
      "tovari/photo_16_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Футболка Pit Bull Germany «Frankfurt Knuckles» Black", en: "Pit Bull Germany T-Shirt «Frankfurt Knuckles» Black", de: "Pit Bull Germany T-Shirt «Frankfurt Knuckles» Schwarz" },
    category_names: { ru: "Футболки / Майки", en: "T-Shirts & Tanks", de: "T-Shirts & Tanks" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Редкая винтажная футболка от культового немецкого бренда Pit Bull Germany. Готический логотип Frankfurt на груди и массивный принт с кастетом на спине. Плотный хлопок старой школы, бирка Deutsches Produkt. Состояние 8/10, есть легкие трещинки на принте от времени, вещь без дыр и дефектов.",
      en: "Rare vintage t-shirt by legendary German label Pit Bull Germany. Gothic Frankfurt chest logo and large brass knuckles print across the back. Heavyweight old-school cotton, authentic Deutsches Produkt tag. Condition 8/10 with subtle vintage print cracking, no holes or flaws.",
      de: "Seltenes Vintage T-Shirt von Pit Bull Germany. Gotisches Frankfurt-Logo auf der Brust und massiver Schlagring-Print auf dem Rücken. Robuste Baumwolle im Oldschool-Schnitt. Zustand 8/10, leichte Risse im Druck, Stoff top."
    },
    size: "XL",
    display_order: 70,
    is_active: true
  },
  {
    id: 11,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "bombers",
    price: 60,
    old_price: 70,
    currency: "€",
    badge: "sale",
    rune: "🜏",
    images: [
      "tovari/photo_21_2026-08-28_11-45-48.jpg",
      "tovari/photo_22_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Варсити Куртка Pit Bull Germany «Punishgirl» Pink/Cream", en: "Pit Bull Germany Varsity Jacket «Punishgirl» Pink/Cream", de: "Pit Bull Germany Collegejacke «Punishgirl» Pink/Creme" },
    category_names: { ru: "Бомберы / Куртки", en: "Bombers & Jackets", de: "Bomber & Jacken" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Коллекционная варсити-куртка бомбер от Pit Bull Germany в ярком малиново-розовом и кремовом оттенках. Кнопки спереди, плотные полосатые манжеты, принты Good Girl - Bad Girl на рукавах и массивная графика Punishgirl на спине. Состояние 8/10, есть нюанс: срезана верхняя бирка на шее, сама вещь в отличной форме.",
      en: "Collector's varsity bomber jacket by Pit Bull Germany in bold magenta pink and cream colorway. Snap-button front, striped ribbing, Good Girl - Bad Girl sleeve prints and large Punishgirl back graphic. Condition 8/10, minor flaw: missing neck brand tag, jacket itself is in great condition.",
      de: "Auffällige Collegejacke von Pit Bull Germany in Magenta-Pink und Creme. Druckknopfleiste, gestreifte Rippbündchen und markanter Punishgirl-Rückenprint. Zustand 8/10, ohne Nackenetikett."
    },
    size: "M-L",
    display_order: 80,
    is_active: true
  },
  {
    id: 12,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "sweatshirts",
    price: 130,
    old_price: 140,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_23_2026-08-28_11-45-48.jpg",
      "tovari/photo_24_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Свитшот Pit Bull Germany «Final Attack» Grey", en: "Pit Bull Germany Sweatshirt «Final Attack» Grey", de: "Pit Bull Germany Sweatshirt «Final Attack» Grau" },
    category_names: { ru: "Свитшоты", en: "Sweatshirts", de: "Sweatshirts" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Легендарный коллекционный свитшот от немецкого бренда Pit Bull Germany с культовым принтом Final Attack на спине и вышитым логотипом на груди. Плотный хлопок с начесом, оригинальная бирка Deutsches Produkt. Состояние 10/10, идеальный музейный сохран без единого нюанса и без трещин на принте.",
      en: "Legendary collector's crewneck sweatshirt by Pit Bull Germany featuring the iconic Final Attack back graphic and embroidered chest logo. Premium heavy fleece cotton, authentic Deutsches Produkt tag. Condition 10/10, flawless pristine condition without any wear or cracking.",
      de: "Legendäres Sammler-Sweatshirt von Pit Bull Germany mit dem ikonischen Final Attack Rückenprint und gesticktem Brustlogo. Schwere Fleece-Baumwolle. Zustand 10/10, absoluter Traumzustand ohne Mängel."
    },
    size: "L-XL",
    display_order: 90,
    is_active: true
  },
  {
    id: 13,
    brand: "pitbull",
    brand_name: "Pit Bull Germany x Zippo",
    category: "misc",
    price: 75,
    old_price: 85,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_25_2026-08-28_11-45-48.jpg",
      "tovari/photo_26_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Зажигалка Zippo x Pit Bull Germany «Frankfurt Dog»", en: "Zippo x Pit Bull Germany Lighter «Frankfurt Dog»", de: "Zippo x Pit Bull Germany Feuerzeug «Frankfurt Dog»" },
    category_names: { ru: "Разное / Аксессуары", en: "Accessories & Misc", de: "Accessoires & Diverses" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Оригинальная ветрозащитная бензиновая зажигалка Zippo Made in USA в редкой коллаборации с брендом Pit Bull Germany. Глянцевый черный корпус, рельефная металлическая эмблема питбуля и готическая гравировка Frankfurt. Полный оригинальный комплект с кейсом и инструкцией. Состояние 10/10, идеальный сохран без нюансов.",
      en: "Original windproof lighter by Zippo Made in USA in rare collaboration with Pit Bull Germany. High polish black and chrome finish, raised metal bulldog emblem and gothic Frankfurt engraving. Complete set with original case and documentation. Condition 10/10, pristine collectors condition.",
      de: "Originales Zippo Sturmfeuerzeug Made in USA in Kooperation mit Pit Bull Germany. Schwarzes Hochglanz-Design mit erhabenem Pitbull-Emblem und Frankfurt-Gravur. Komplettset mit Originalbox. Zustand 10/10, makellos."
    },
    size: "ONE SIZE",
    display_order: 100,
    is_active: true
  },
  {
    id: 14,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "misc",
    price: 25,
    old_price: 35,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_27_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Колода карт Pit Bull Germany «Gelinkt Wird Nicht»", en: "Pit Bull Germany Playing Cards «Gelinkt Wird Nicht»", de: "Pit Bull Germany Spielkarten «Gelinkt Wird Nicht»" },
    category_names: { ru: "Разное / Аксессуары", en: "Accessories & Misc", de: "Accessoires & Diverses" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Редкая винтажная колода игральных карт от немецкого бренда Pit Bull Germany с фирменным девизом «...gelinkt wird не!» и символикой бульдога. Прочный прозрачный пластиковый бокс. Состояние 10/10, сами карты в идеале, нюанс: в комплекте одна колода из двух (показано на фото).",
      en: "Rare vintage playing card deck by Pit Bull Germany featuring the brand motto «...gelinkt wird nicht!» and signature bulldog graphics. Hard transparent case. Condition 10/10 in pristine state, note: includes one deck out of the original double set.",
      de: "Seltenes Vintage Kartenspiel von Pit Bull Germany mit dem Aufdruck «...gelinkt wird nicht!» in transparenter Box. Zustand 10/10, makellos."
    },
    size: "ONE SIZE",
    display_order: 110,
    is_active: true
  },
  {
    id: 15,
    brand: "pitbull",
    brand_name: "Pit Bull Germany",
    category: "misc",
    price: 55,
    old_price: 65,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_28_2026-08-28_11-45-48.jpg"
    ],
    names: { ru: "Набор игральных карт Pit Bull Germany «Gelinkt Wird Nicht» (2 колоды)", en: "Pit Bull Germany Playing Cards Double Set «Gelinkt Wird Nicht»", de: "Pit Bull Germany Kartenspiel Doppelset «Gelinkt Wird Nicht»" },
    category_names: { ru: "Разное / Аксессуары", en: "Accessories & Misc", de: "Accessoires & Diverses" },
    badge_texts: { ru: "SALE", en: "SALE", de: "SALE" },
    descriptions: {
      ru: "Коллекционный полный комплект винтажных игральных карт от немецкого бренда Pit Bull Germany в оригинальном прозрачном боксе. Включает сразу 2 запечатанные колоды с культовым девизом «...gelinkt wird nicht!» и фирменной символикой. Состояние 10/10, идеальный коллекционный экземпляр без нюансов.",
      en: "Collector's full double deck set of vintage playing cards by Pit Bull Germany in original clear hard case. Includes both decks with signature «...gelinkt wird nicht!» graphics and bulldog artwork. Condition 10/10, pristine untouched condition with zero flaws.",
      de: "Vollständiges Sammler-Doppelset von Vintage-Spielkarten der Marke Pit Bull Germany in transparenter Box. Enthält beide Decks mit dem Motiv «...gelinkt wird nicht!». Zustand 10/10, makellos."
    },
    size: "ONE SIZE",
    display_order: 120,
    is_active: true
  }
];

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const adminPassInput = document.getElementById('adminPassInput');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

const productsTableBody = document.getElementById('productsTableBody');
const searchInput = document.getElementById('adminSearchInput');
const brandFilter = document.getElementById('adminBrandFilter');
const categoryFilter = document.getElementById('adminCategoryFilter');
const badgeFilter = document.getElementById('adminBadgeFilter');

const statTotalItems = document.getElementById('statTotalItems');
const statSaleItems = document.getElementById('statSaleItems');
const statNewItems = document.getElementById('statNewItems');
const statLimitedItems = document.getElementById('statLimitedItems');

const productModal = document.getElementById('productModal');
const productModalTitle = document.getElementById('productModalTitle');
const productForm = document.getElementById('productForm');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');
const btnSaveProduct = document.getElementById('btnSaveProduct');

const dropzone = document.getElementById('adminDropzone');
const fileInput = document.getElementById('adminFileInput');
const previewsList = document.getElementById('adminPreviewsList');

const toastEl = document.getElementById('adminToast');
const toastText = document.getElementById('adminToastText');

// ==============================================================================
// Initialization & Authentication Flow
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initEventListeners();
});

function initAuth() {
  if (adminToken) {
    showDashboard();
    loadProducts();
  } else {
    showLoginScreen();
  }
}

function showLoginScreen() {
  if (loginScreen) loginScreen.style.display = 'flex';
  if (dashboard) dashboard.style.display = 'none';
  if (adminPassInput) adminPassInput.focus();
}

function showDashboard() {
  if (loginScreen) loginScreen.style.display = 'none';
  if (dashboard) dashboard.style.display = 'block';
}

function showToast(msg) {
  if (!toastEl || !toastText) return;
  toastText.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3500);
}

// ==============================================================================
// Event Listeners
// ==============================================================================
function initEventListeners() {
  // Login Form Submit
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const pass = adminPassInput.value.trim();
      if (!pass) return;

      loginBtn.disabled = true;
      loginBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Вход...';
      loginError.style.display = 'none';

      try {
        const res = await fetch('/api/admin-auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: pass }),
        });

        const data = await res.json();
        if (data.success && data.token) {
          adminToken = data.token;
          sessionStorage.setItem('r8ilt_admin_token', adminToken);
          showDashboard();
          loadProducts();
          showToast('Добро пожаловать в панель управления R8ILT!');
        } else {
          loginError.textContent = data.error || 'Неверный пароль!';
          loginError.style.display = 'block';
        }
      } catch (err) {
        loginError.textContent = 'Ошибка соединения с сервером авторизации: ' + err.message;
        loginError.style.display = 'block';
      } finally {
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Войти в панель';
      }
    });
  }

  // Logout
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      adminToken = '';
      sessionStorage.removeItem('r8ilt_admin_token');
      showLoginScreen();
    });
  }

  // Refresh
  const btnRefresh = document.getElementById('btnRefresh');
  if (btnRefresh) {
    btnRefresh.addEventListener('click', loadProducts);
  }

  // Sync / Import Default Catalog
  const btnSyncDefaultCatalog = document.getElementById('btnSyncDefaultCatalog');
  if (btnSyncDefaultCatalog) {
    btnSyncDefaultCatalog.addEventListener('click', syncDefaultCatalog);
  }

  // Open Add Product Modal
  const btnAddProduct = document.getElementById('btnAddProduct');
  if (btnAddProduct) {
    btnAddProduct.addEventListener('click', () => openProductModal(null));
  }

  // Modal Close
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeProductModal);
  if (btnCancelModal) btnCancelModal.addEventListener('click', closeProductModal);

  // Search & Filter
  if (searchInput) searchInput.addEventListener('input', renderProductsTable);
  if (brandFilter) brandFilter.addEventListener('change', renderProductsTable);
  if (categoryFilter) categoryFilter.addEventListener('change', renderProductsTable);
  if (badgeFilter) badgeFilter.addEventListener('change', renderProductsTable);

  // Drag & Drop Image Uploading
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--color-bright-red)';
    });
    dropzone.addEventListener('dragleave', () => {
      dropzone.style.borderColor = 'var(--border-subtle)';
    });
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--border-subtle)';
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFilesSelected(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFilesSelected(e.target.files);
      }
    });
  }

  // Product Form Submit
  if (productForm) {
    productForm.addEventListener('submit', handleProductFormSubmit);
  }
}

// ==============================================================================
// Sync / Import Default Products into Supabase DB
// ==============================================================================
async function syncDefaultCatalog() {
  if (!confirm('Импортировать все 13 базовых товаров магазина в базу данных Supabase?')) {
    return;
  }

  const btnSync = document.getElementById('btnSyncDefaultCatalog');
  if (btnSync) {
    btnSync.disabled = true;
    btnSync.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Импорт...';
  }

  let importedCount = 0;
  for (const item of DEFAULT_PRODUCTS) {
    try {
      const payload = { ...item };
      delete payload.id;
      await fetch('/api/admin-products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      importedCount++;
    } catch (e) {
      console.warn('Import item error:', e);
    }
  }

  showToast(`Успешно импортировано товаров: ${importedCount}!`);
  if (btnSync) {
    btnSync.disabled = false;
    btnSync.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Импорт товаров из магазина';
  }
  await loadProducts();
}

// ==============================================================================
// Load Products from Server
// ==============================================================================
async function loadProducts() {
  if (!adminToken) return;

  try {
    const res = await fetch('/api/admin-products', {
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.success && Array.isArray(data.products)) {
      allProducts = data.products;

      // If DB has products, sort by display_order
      allProducts.sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
      updateStats();
      renderProductsTable();
    } else {
      showToast('Внимание: ' + (data.error || 'Не удалось загрузить товары'));
    }
  } catch (err) {
    console.error('Fetch products error:', err);
    showToast('Ошибка загрузки каталога товаров');
  }
}

// Update Dashboard Header Metrics
function updateStats() {
  if (statTotalItems) statTotalItems.textContent = allProducts.length;
  if (statSaleItems) statSaleItems.textContent = allProducts.filter(p => p.badge === 'sale').length;
  if (statNewItems) statNewItems.textContent = allProducts.filter(p => p.badge === 'new').length;
  if (statLimitedItems) statLimitedItems.textContent = allProducts.filter(p => p.badge === 'limited').length;
}

// ==============================================================================
// Render Table with Filters and Sorting
// ==============================================================================
function renderProductsTable() {
  if (!productsTableBody) return;

  const q = (searchInput?.value || '').toLowerCase().trim();
  const brandVal = brandFilter?.value || 'all';
  const catVal = categoryFilter?.value || 'all';
  const badgeVal = badgeFilter?.value || 'all';

  const filtered = allProducts.filter(p => {
    const nameRu = (p.names?.ru || '').toLowerCase();
    const nameEn = (p.names?.en || '').toLowerCase();
    const brandName = (p.brand_name || p.brand || '').toLowerCase();
    const matchQuery = !q || nameRu.includes(q) || nameEn.includes(q) || brandName.includes(q);

    const matchBrand = brandVal === 'all' || p.brand === brandVal;
    const matchCat = catVal === 'all' || p.category === catVal;
    const matchBadge = badgeVal === 'all' || (badgeVal === 'none' ? !p.badge : p.badge === badgeVal);

    return matchQuery && matchBrand && matchCat && matchBadge;
  });

  if (filtered.length === 0) {
    productsTableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding: 40px; color: var(--text-secondary);">
          <i class="fa-solid fa-box-open" style="font-size: 2rem; color: var(--color-crimson); margin-bottom: 10px; display:block;"></i>
          ${allProducts.length === 0 
            ? 'В базе данных пока нет товаров.<br><br><button class="admin-btn admin-btn-primary" onclick="syncDefaultCatalog()"><i class="fa-solid fa-cloud-arrow-down"></i> Импортировать все товары из магазина в базу</button>' 
            : 'Товары по выбранным фильтрам не найдены'}
        </td>
      </tr>
    `;
    return;
  }

  productsTableBody.innerHTML = filtered.map((product, idx) => {
    const nameRu = product.names?.ru || product.names?.en || 'Без названия';
    const brandName = product.brand_name || BRAND_NAME_MAP[product.brand] || product.brand;
    const categoryName = product.category_names?.ru || CATEGORY_MAP[product.category]?.ru || product.category;
    const rawImg = (Array.isArray(product.images) && product.images[0]) || 'fotkii/photo_2026-08-27_11-53-52.jpg';
    const primaryImg = resolveImgSrc(rawImg);
    
    let badgeHtml = '<span class="admin-badge-pill admin-badge-none">—</span>';
    if (product.badge === 'sale') badgeHtml = '<span class="admin-badge-pill admin-badge-sale">SALE</span>';
    if (product.badge === 'new') badgeHtml = '<span class="admin-badge-pill admin-badge-new">NEW</span>';
    if (product.badge === 'limited') badgeHtml = '<span class="admin-badge-pill admin-badge-limited">LIMITED</span>';

    const isFirst = idx === 0;
    const isLast = idx === filtered.length - 1;

    return `
      <tr data-id="${product.id}">
        <td>
          <div class="admin-order-controls">
            <button class="admin-order-btn" onclick="moveProductOrder(${product.id}, -1)" ${isFirst ? 'disabled' : ''} title="Поднять выше">
              <i class="fa-solid fa-chevron-up"></i>
            </button>
            <span class="admin-order-num">${product.display_order ?? (idx + 1)}</span>
            <button class="admin-order-btn" onclick="moveProductOrder(${product.id}, 1)" ${isLast ? 'disabled' : ''} title="Опустить ниже">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </td>
        <td>
          <img src="${primaryImg}" alt="${nameRu}" class="admin-thumb" onerror="this.src='fotkii/photo_2026-08-27_11-53-52.jpg'">
        </td>
        <td>
          <div style="font-weight:700; color:#fff; margin-bottom: 2px;">${nameRu}</div>
          <div style="font-size:0.75rem; color:var(--text-secondary);">${brandName} • ${categoryName}</div>
        </td>
        <td>
          <span style="display:inline-block; padding: 2px 6px; background: rgba(255,255,255,0.05); border-radius:4px; font-weight:600;">
            ${product.size || 'L'}
          </span>
        </td>
        <td>
          <div style="font-weight:700; color:var(--color-bright-red);">${product.price} ${product.currency || '€'}</div>
          ${product.old_price ? `<div style="font-size:0.75rem; color:var(--text-muted); text-decoration:line-through;">${product.old_price} €</div>` : ''}
        </td>
        <td>
          <div style="cursor:pointer;" onclick="toggleBadgeQuick(${product.id})" title="Кликните, чтобы быстро сменить флажок">
            ${badgeHtml}
          </div>
        </td>
        <td>
          <div class="admin-row-actions">
            <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="openProductModal(${product.id})" title="Редактировать">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteProduct(${product.id})" title="Удалить">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ==============================================================================
// Move Product Display Order (▲ / ▼)
// ==============================================================================
window.moveProductOrder = async function(id, direction) {
  const currentIndex = allProducts.findIndex(p => p.id === id);
  if (currentIndex === -1) return;

  const targetIndex = currentIndex + direction;
  if (targetIndex < 0 || targetIndex >= allProducts.length) return;

  // Swap display_order in memory
  const temp = allProducts[currentIndex];
  allProducts[currentIndex] = allProducts[targetIndex];
  allProducts[targetIndex] = temp;

  // Re-assign sequential display_order
  allProducts.forEach((p, idx) => {
    p.display_order = (idx + 1) * 10;
  });

  renderProductsTable();

  // Send batch reorder to server
  try {
    const items = allProducts.map(p => ({ id: p.id, display_order: p.display_order }));
    const res = await fetch('/api/admin-products?action=reorder', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const data = await res.json();
    if (data.success) {
      showToast('Порядок товаров обновлен!');
    } else {
      showToast('Ошибка сохранения порядка: ' + (data.error || ''));
    }
  } catch (err) {
    console.error('Reorder error:', err);
    showToast('Ошибка при синхронизации порядка товаров');
  }
};

// ==============================================================================
// Toggle Badge Quick (SALE -> NEW -> LIMITED -> NONE)
// ==============================================================================
window.toggleBadgeQuick = async function(id) {
  const prod = allProducts.find(p => p.id === id);
  if (!prod) return;

  const cycle = [null, 'sale', 'new', 'limited'];
  const nextIdx = (cycle.indexOf(prod.badge) + 1) % cycle.length;
  prod.badge = cycle[nextIdx];

  renderProductsTable();
  updateStats();

  try {
    await fetch(`/api/admin-products?id=${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ badge: prod.badge }),
    });
    showToast(`Флажок обновлен: ${prod.badge ? prod.badge.toUpperCase() : 'Без флажка'}`);
  } catch (err) {
    console.error('Badge update error:', err);
    showToast('Ошибка обновления флажка');
  }
};

// ==============================================================================
// Delete Product with Confirmation
// ==============================================================================
window.deleteProduct = async function(id) {
  const prod = allProducts.find(p => p.id === id);
  const name = prod?.names?.ru || 'товар';

  if (!confirm(`Вы действительно хотите удалить «${name}» из каталога?`)) {
    return;
  }

  try {
    const res = await fetch(`/api/admin-products?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.success) {
      allProducts = allProducts.filter(p => p.id !== id);
      renderProductsTable();
      updateStats();
      showToast('Товар успешно удален!');
    } else {
      showToast('Ошибка удаления: ' + (data.error || ''));
    }
  } catch (err) {
    console.error('Delete error:', err);
    showToast('Ошибка при удалении товара');
  }
};

// ==============================================================================
// Product Modal (Add / Edit) & Image Handling
// ==============================================================================
function handleFilesSelected(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.type.startsWith('image/')) continue;

    const previewUrl = URL.createObjectURL(file);
    stagedImages.push({
      file: file,
      url: previewUrl,
      isNew: true,
    });
  }
  renderImagePreviews();
}

function renderImagePreviews() {
  if (!previewsList) return;

  if (stagedImages.length === 0) {
    previewsList.innerHTML = '<div style="font-size:0.8rem; color:var(--text-muted); width:100%;">Фотографии еще не выбраны</div>';
    return;
  }

  previewsList.innerHTML = stagedImages.map((img, idx) => {
    const isPrimary = idx === 0;
    const isBack = idx === 1;
    const tagText = isPrimary ? '1. Лицевая' : (isBack ? '2. Сзади' : `${idx + 1}. Фото`);
    const previewSrc = img.isNew ? img.url : resolveImgSrc(img.url);

    return `
      <div class="admin-preview-item">
        <img src="${previewSrc}" class="admin-preview-img" alt="Фото ${idx + 1}">
        <span class="admin-preview-tag">${tagText}</span>
        <button type="button" class="admin-preview-remove" onclick="removeStagedImage(${idx})" title="Удалить фото">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
  }).join('');
}

window.removeStagedImage = function(idx) {
  stagedImages.splice(idx, 1);
  renderImagePreviews();
};

function openProductModal(productId = null) {
  editingProductId = productId;
  stagedImages = [];

  const nameRu = document.getElementById('prodNameRu');
  const nameEn = document.getElementById('prodNameEn');
  const brandSelect = document.getElementById('prodBrandSelect');
  const catSelect = document.getElementById('prodCategorySelect');
  const priceInput = document.getElementById('prodPrice');
  const oldPriceInput = document.getElementById('prodOldPrice');
  const sizeInput = document.getElementById('prodSize');
  const orderInput = document.getElementById('prodOrder');
  const runeInput = document.getElementById('prodRune');
  const descRu = document.getElementById('prodDescRu');
  const descEn = document.getElementById('prodDescEn');

  if (productId) {
    const prod = allProducts.find(p => p.id === productId);
    if (!prod) return;

    if (productModalTitle) productModalTitle.textContent = 'Редактировать товар';
    if (nameRu) nameRu.value = prod.names?.ru || '';
    if (nameEn) nameEn.value = prod.names?.en || '';
    if (brandSelect) brandSelect.value = prod.brand || 'pitbull';
    if (catSelect) catSelect.value = prod.category || 'tees';
    if (priceInput) priceInput.value = prod.price || '';
    if (oldPriceInput) oldPriceInput.value = prod.old_price || '';
    if (sizeInput) sizeInput.value = prod.size || 'L';
    if (orderInput) orderInput.value = prod.display_order ?? 10;
    if (runeInput) runeInput.value = prod.rune || '☩';
    if (descRu) descRu.value = prod.descriptions?.ru || '';
    if (descEn) descEn.value = prod.descriptions?.en || '';

    // Set badge radio
    const badgeVal = prod.badge || '';
    const radio = document.querySelector(`input[name="prodBadge"][value="${badgeVal}"]`);
    if (radio) radio.checked = true;

    // Load existing images
    if (Array.isArray(prod.images)) {
      prod.images.forEach(url => {
        stagedImages.push({ file: null, url: url, isNew: false });
      });
    }
  } else {
    if (productModalTitle) productModalTitle.textContent = 'Добавить новый товар';
    if (productForm) productForm.reset();
    if (orderInput) orderInput.value = (allProducts.length + 1) * 10;
    if (runeInput) runeInput.value = '☩';
    const noneRadio = document.querySelector(`input[name="prodBadge"][value=""]`);
    if (noneRadio) noneRadio.checked = true;
  }

  renderImagePreviews();
  if (productModal) productModal.classList.add('active');
}

function closeProductModal() {
  if (productModal) productModal.classList.remove('active');
  editingProductId = null;
  stagedImages = [];
}

// ==============================================================================
// Save Product (Submit Handler with Photo Uploads)
// ==============================================================================
async function handleProductFormSubmit(e) {
  e.preventDefault();

  const nameRu = document.getElementById('prodNameRu')?.value.trim();
  const nameEn = document.getElementById('prodNameEn')?.value.trim() || nameRu;
  const brand = document.getElementById('prodBrandSelect')?.value || 'pitbull';
  const category = document.getElementById('prodCategorySelect')?.value || 'tees';
  const price = parseFloat(document.getElementById('prodPrice')?.value) || 0;
  const oldPriceVal = document.getElementById('prodOldPrice')?.value.trim();
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const size = document.getElementById('prodSize')?.value.trim() || 'L';
  const displayOrder = parseInt(document.getElementById('prodOrder')?.value) || 10;
  const rune = document.getElementById('prodRune')?.value.trim() || '☩';
  const descRu = document.getElementById('prodDescRu')?.value.trim() || '';
  const descEn = document.getElementById('prodDescEn')?.value.trim() || descRu;

  const badgeRadio = document.querySelector('input[name="prodBadge"]:checked');
  const badge = (badgeRadio && badgeRadio.value) ? badgeRadio.value : null;

  if (!nameRu || price <= 0) {
    showToast('Пожалуйста, укажите название и корректную цену товара!');
    return;
  }

  btnSaveProduct.disabled = true;
  btnSaveProduct.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Сохранение...';

  try {
    // 1. Upload any newly staged images to Supabase Storage via /api/admin-products?action=upload
    const finalImageUrls = [];
    for (const item of stagedImages) {
      if (item.isNew && item.file) {
        const formData = new FormData();
        formData.append('file', item.file);

        const uploadRes = await fetch('/api/admin-products?action=upload', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${adminToken}`,
          },
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (uploadData.success && uploadData.url) {
          finalImageUrls.push(uploadData.url);
        } else {
          console.warn('Image upload fallback, using local preview url', uploadData.error);
          finalImageUrls.push(item.url);
        }
      } else {
        finalImageUrls.push(item.url);
      }
    }

    const payload = {
      brand: brand,
      brand_name: BRAND_NAME_MAP[brand] || brand,
      category: category,
      price: price,
      old_price: oldPrice,
      currency: '€',
      badge: badge,
      rune: rune,
      images: finalImageUrls,
      names: { ru: nameRu, en: nameEn, de: nameEn },
      category_names: CATEGORY_MAP[category] || { ru: category, en: category, de: category },
      badge_texts: { ru: badge ? badge.toUpperCase() : '', en: badge ? badge.toUpperCase() : '', de: badge ? badge.toUpperCase() : '' },
      descriptions: { ru: descRu, en: descEn, de: descEn },
      size: size,
      display_order: displayOrder,
      is_active: true,
    };

    let res;
    if (editingProductId) {
      // Update
      payload.id = editingProductId;
      res = await fetch(`/api/admin-products?id=${editingProductId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${adminToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } else {
      // Create
      res = await fetch('/api/admin-products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    }

    const data = await res.json();
    if (data.success) {
      showToast(editingProductId ? 'Товар успешно обновлен!' : 'Новый товар успешно добавлен!');
      closeProductModal();
      await loadProducts();
    } else {
      showToast('Ошибка сохранения: ' + (data.error || ''));
    }
  } catch (err) {
    console.error('Save product error:', err);
    showToast('Ошибка при сохранении товара: ' + err.message);
  } finally {
    btnSaveProduct.disabled = false;
    btnSaveProduct.innerHTML = '<i class="fa-solid fa-check"></i> Сохранить товар';
  }
}

