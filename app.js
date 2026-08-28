/**
 * R8ILT STORE - Main Application Logic
 * Multibrand Streetwear, Combat & Darkwear Store
 * Supports 3 Languages: Russian (RU), English (EN), German (DE)
 */

// I18N Translations Dictionary
const translations = {
  ru: {
    nav_catalog: "Каталог",
    nav_brands: "Бренды",
    nav_drops: "Новые поставки",
    nav_about: "О магазине",
    hero_tag: "Pit Bull Germany • Svastone • Белояр • Thor Steinar",
    hero_title: "R8ILT SHOP",
    hero_subtitle: "Магазин оригинальной брендовой одежды. Здесь собраны вещи от известных брендов - Pit Bull Germany, Svastone, Белояр и Thor Steinar. Привозим оригинальную одежду напрямую и подбираем вещи.",
    btn_catalog: "В каталог товаров",
    btn_all_brands: "Все бренды",
    brands_title: "Бренды в наличии",
    brands_subtitle: "Официальная оригинальная продукция от культовых производителей",
    view_items: "Смотреть вещи →",
    brand_beloyar_title: "Белояр",
    catalog_title: "Каталог Товаров",
    catalog_subtitle: "Оригинальные позиции от мировых производителей",
    filter_brand_label: "Бренд:",
    filter_category_label: "Тип вещи:",
    filter_all_brands: "Все бренды",
    filter_brand_beloyar: "Белояр",
    filter_brand_other: "Разное",
    filter_all_types: "Все типы",
    filter_bombers: "Бомберы / Куртки",
    filter_hoodies: "Худи",
    filter_sweatshirts: "Свитшоты",
    filter_tees: "Футболки / Майки",
    filter_pants: "Штаны",
    filter_shorts: "Шорты",
    filter_misc: "Разное",
    no_products_found: "По выбранным критериям вещей не найдено",
    nav_reviews: "Отзывы",
    reviews_title: "ФОТО & ОТЗЫВЫ КЛИЕНТОВ",
    reviews_subtitle: "Реальные кадры и отзывы наших покупателей",
    reviews_cta_title: "Хотите увидеть больше отзывов?",
    reviews_cta_sub: "Десятки реальных фото-отчетов и отзывов покупателей в нашем Telegram-канале",
    reviews_cta_btn: "Перейти в канал",
    perk1_title: "100% Оригинал",
    perk1_desc: "Работаем только с официальными дистрибьюторами и фабриками брендов без подделок.",
    perk2_title: "Топ Бренды",
    perk2_desc: "Собрали в одном месте культовые марки: Pit Bull Germany, Svastone, Белояр, Thor Steinar.",
    perk3_title: "Быстрая доставка",
    perk3_desc: "Отправка в день заказа. Надежная упаковка и возможность примерки при получении.",
    perk4_title: "Гарантия & Обмен",
    perk4_desc: "Быстрый обмен размера и возврат без лишних вопросов в течение 14 дней.",
    footer_desc: "R8ILT SHOP — магазин оригинальной уличной, околофутбольной и субкультурной одежды. Бренды Pit Bull Germany, Svastone, Белояр, Thor Steinar с гарантией подлинности.",
    footer_nav_title: "Навигация",
    footer_info_title: "Информация",
    footer_size_guide: "Таблица размеров",
    footer_shipping: "Оплата и доставка",
    footer_returns: "Возврат и обмен",
    footer_certs: "Сертификаты подлинности",
    footer_club_title: "Клуб R8ILT",
    footer_club_desc: "Подпишись, чтобы первыми узнавать о новых поступлениях и скидках.",
    footer_copyright: "© 2026 R8ILT SHOP. Магазин брендовой одежды.",
    footer_tagline: "AUTHENTIC STREETWEAR & COMBAT APPAREL",
    cart_title: "Корзина",
    cart_empty_title: "Ваша корзина пуста",
    cart_empty_sub: "Выберите вещи из каталога брендов",
    cart_total: "Итого:",
    cart_checkout: "Оформить заказ",
    add_to_cart: "В корзину",
    quick_view: "Быстрый просмотр",
    to_wishlist: "В избранное",
    original_label: "100% ОРИГИНАЛ",
    available_sizes: "Доступные размеры:",
    alert_checkout_empty: "Корзина пуста. Добавьте товары перед оформлением!",
    alert_checkout_success: "Заказ успешно оформлен! В демо-режиме заявка сохранена.",
    alert_notify_success: "♰ Вы добавлены в список уведомлений о новой поставке брендов!",
    toast_added: "добавлен в корзину!",
    toast_removed: "Товар удален из корзины",
    breadcrumb_home: "Главная",
    back_to_catalog: "Вернуться в каталог",
    size_in_stock: "Размер в наличии:",
    feature_original: "100% Оригинал",
    feature_shipping: "Быстрая отправка",
    feature_returns: "Обмен и возврат",
    toast_unique_item: "Товар в единственном экземпляре и уже добавлен в корзину!",
    unique_badge: "1 шт. (Эксклюзив)",
    unique_in_stock: "В единственном экземпляре",
    checkout_modal_title: "Оформление заказа",
    checkout_order_items: "Товары в заказе:",
    checkout_label_country: "Страна назначения *",
    checkout_label_region: "Штат / Регион / Область *",
    checkout_label_zip: "Почтовый индекс *",
    checkout_label_city: "Город / Населенный пункт *",
    checkout_label_phone: "Мобильный номер телефона *",
    checkout_label_name: "ФИО получателя (латиницей) *",
    checkout_label_email: "Email (на Gmail) *",
    checkout_label_post_office: "Адрес и номер отделения почты *",
    checkout_label_address: "Адрес фактического проживания *",
    checkout_security_note: "Гарантия подлинности и быстрая отправка в день заказа.",
    checkout_btn_submit: "Перейти к оплате",
    checkout_summary_items: "Стоимость товаров:",
    checkout_summary_shipping: "Доставка в выбранную страну:",
    checkout_summary_total_to_pay: "Итого к оплате:",
    payment_mono_title: "Монобанк (UAH / EUR)",
    payment_mono_recipient: "Пацула Вадим Анатолиевич / Patsula Vadim",
    payment_revolut_title: "Revolut (IBAN / SEPA / EUR)",
    payment_revolut_recipient: "Savelii Shkurko",
    payment_copy_btn: "Копировать",
    payment_copied_toast: "Реквизиты скопированы в буфер обмена!",
    receipt_upload_title: "Квитанция / скриншот оплаты *",
    receipt_drop_text: "Нажмите или перетащите скриншот оплаты сюда",
    receipt_drop_hint: "JPG, PNG, WEBP или PDF (макс. 15 МБ)",
    receipt_btn_browse: "Прикрепить скриншот",
    receipt_attached: "Скриншот прикреплен",
    receipt_error_required: "Пожалуйста, прикрепите скриншот или квитанцию об оплате!",
    receipt_sending: "Отправка заказа и чека...",
    btn_i_paid_confirm: "Оформить заказ и отправить чек",
    order_success_title: "Заказ успешно оформлен!",
    order_success_desc_payment: "Пожалуйста, переведите сумму заказа по указанным реквизитам и отправьте чек в Telegram для моментальной отправки посылки:",
    order_success_final_desc: "Данные для отправки и оплата приняты! Мы забронировали товар за вами. В ближайшее время менеджер свяжется с вами и предоставит трек-номер посылки.",
    order_success_tg: "Связаться в Telegram",
    order_success_tg_receipt: "Связаться с менеджером в Telegram",
    order_success_close: "Вернуться в магазин",
    validation_error_all_fields: "Пожалуйста, заполните все обязательные поля!",
    validation_error_gmail: "Пожалуйста, укажите корректный адрес Gmail (например, yourname@gmail.com)!",
    validation_error_phone: "Пожалуйста, укажите корректный номер телефона!"
  },
  en: {
    nav_catalog: "Catalog",
    nav_brands: "Brands",
    nav_reviews: "Reviews",
    nav_about: "About Store",
    hero_tag: "Pit Bull Germany • Svastone • Beloyar • Thor Steinar",
    hero_title: "R8ILT SHOP",
    hero_subtitle: "Original branded apparel store. Featuring curated items from iconic labels - Pit Bull Germany, Svastone, Beloyar, and Thor Steinar. We bring authentic clothes directly and pick the best pieces.",
    btn_catalog: "Explore Catalog",
    btn_all_brands: "All Brands",
    brands_title: "Brands in Stock",
    brands_subtitle: "Authentic original merchandise from cult manufacturers",
    view_items: "View Collection →",
    brand_beloyar_title: "Beloyar",
    catalog_title: "Product Catalog",
    catalog_subtitle: "Original pieces from world-class street & combat brands",
    filter_brand_label: "Brand:",
    filter_category_label: "Apparel:",
    filter_all_brands: "All Brands",
    filter_brand_beloyar: "Beloyar",
    filter_brand_other: "Other Brands",
    filter_all_types: "All Types",
    filter_bombers: "Bombers & Jackets",
    filter_hoodies: "Hoodies",
    filter_sweatshirts: "Sweatshirts",
    filter_tees: "T-Shirts & Tanks",
    filter_pants: "Pants",
    filter_shorts: "Shorts",
    filter_misc: "Miscellaneous",
    no_products_found: "No products found matching selected filters",
    reviews_title: "CUSTOMER PHOTOS & REVIEWS",
    reviews_subtitle: "Real shots and genuine reviews from our buyers",
    reviews_cta_title: "Want to see more customer reviews?",
    reviews_cta_sub: "Dozens of real customer photos and feedback in our Telegram channel",
    reviews_cta_btn: "Open Telegram Channel",
    perk1_title: "100% Authentic",
    perk1_desc: "Direct partnerships with official brand distributors and factories. Zero fakes.",
    perk2_title: "Cult Brands",
    perk2_desc: "Carefully curated underground labels: Pit Bull Germany, Svastone, Beloyar, Thor Steinar.",
    perk3_title: "Fast Worldwide Delivery",
    perk3_desc: "Dispatched on the day of purchase. Secure stealth packaging and tracking.",
    perk4_title: "Warranty & Return",
    perk4_desc: "Hassle-free 14-day exchange and return policy on all unworn items.",
    footer_desc: "R8ILT SHOP — Authentic destination for dark streetwear, combat gear & subcultural lifestyle apparel. Brands: Pit Bull Germany, Svastone, Beloyar, Thor Steinar with authenticity guarantee.",
    footer_nav_title: "Navigation",
    footer_info_title: "Information",
    footer_size_guide: "Size Chart",
    footer_shipping: "Payment & Delivery",
    footer_returns: "Returns & Exchanges",
    footer_certs: "Authenticity Certificates",
    footer_club_title: "R8ILT Club",
    footer_club_desc: "Subscribe to get exclusive early access to drops and member discounts.",
    footer_copyright: "© 2026 R8ILT SHOP. Authentic Apparel Retailer.",
    footer_tagline: "AUTHENTIC STREETWEAR & COMBAT APPAREL",
    cart_title: "Shopping Bag",
    cart_empty_title: "Your cart is empty",
    cart_empty_sub: "Discover authentic gear from the brand catalog",
    cart_total: "Total:",
    cart_checkout: "Checkout Now",
    add_to_cart: "Add to Bag",
    quick_view: "Quick View",
    to_wishlist: "Wishlist",
    original_label: "100% AUTHENTIC",
    available_sizes: "Available Sizes:",
    alert_checkout_empty: "Your cart is empty. Add items before checking out!",
    alert_checkout_success: "Order confirmed! Demo order has been registered.",
    alert_notify_success: "♰ You have been subscribed to brand arrival alerts!",
    toast_added: "added to cart!",
    toast_removed: "Item removed from cart",
    breadcrumb_home: "Home",
    back_to_catalog: "Back to Catalog",
    size_in_stock: "Size in stock:",
    feature_original: "100% Authentic",
    feature_shipping: "Fast Shipping",
    feature_returns: "Exchange & Return",
    toast_unique_item: "This item is unique (only 1 in stock) and already in your cart!",
    unique_badge: "1 pc. (Unique)",
    unique_in_stock: "Unique Piece (1 in stock)",
    checkout_modal_title: "Checkout Order",
    checkout_order_items: "Order items:",
    checkout_label_country: "Destination Country *",
    checkout_label_region: "State / Region / Province *",
    checkout_label_zip: "Postal / ZIP Code *",
    checkout_label_city: "City / Town / Settlement *",
    checkout_label_phone: "Local Mobile Phone Number *",
    checkout_label_name: "Full Name (Latin characters) *",
    checkout_label_email: "Email (Gmail) *",
    checkout_label_post_office: "Post Office Address & Branch Number *",
    checkout_label_address: "Residential Address *",
    checkout_security_note: "Authenticity guaranteed. Dispatch on order day.",
    checkout_btn_submit: "Proceed to Payment",
    checkout_summary_items: "Items Subtotal:",
    checkout_summary_shipping: "Shipping to destination:",
    checkout_summary_total_to_pay: "Total to Pay:",
    payment_modal_title: "Order Payment",
    payment_step_label: "Step 2 of 2: Payment",
    payment_instruction: "Please transfer the exact order amount to any of the payment details below:",
    payment_mono_title: "Monobank (UAH / EUR)",
    payment_mono_recipient: "Patsula Vadim / Пацула Вадим Анатолиевич",
    payment_revolut_title: "Revolut (IBAN / SEPA / EUR)",
    payment_revolut_recipient: "Savelii Shkurko",
    payment_copy_btn: "Copy",
    payment_copied_toast: "Payment details copied to clipboard!",
    receipt_upload_title: "Payment Receipt / Screenshot *",
    receipt_drop_text: "Click or drag & drop payment screenshot here",
    receipt_drop_hint: "JPG, PNG, WEBP or PDF (max 15 MB)",
    receipt_btn_browse: "Attach Screenshot",
    receipt_attached: "Screenshot attached",
    receipt_error_required: "Please attach your payment screenshot or receipt!",
    receipt_sending: "Submitting order and receipt...",
    btn_i_paid_confirm: "Place Order & Submit Receipt",
    order_success_title: "Order Placed Successfully!",
    order_success_desc_payment: "Please transfer the order total using the details below and send your payment confirmation receipt to our Telegram manager:",
    order_success_final_desc: "Shipping details and order have been received! We reserved the item for you. Our manager will provide your parcel tracking number shortly.",
    order_success_tg: "Contact on Telegram",
    order_success_tg_receipt: "Contact Manager on Telegram",
    order_success_close: "Back to Store",
    validation_error_all_fields: "Please fill in all required fields!",
    validation_error_gmail: "Please enter a valid Gmail address (e.g. yourname@gmail.com)!",
    validation_error_phone: "Please enter a valid phone number!"
  },
  de: {
    nav_catalog: "Katalog",
    nav_brands: "Marken",
    nav_reviews: "Bewertungen",
    nav_about: "Über Uns",
    hero_tag: "Pit Bull Germany • Svastone • Beloyar • Thor Steinar",
    hero_title: "R8ILT SHOP",
    hero_subtitle: "Originaler Marken-Store. Hier gibt es Kleidung von bekannten Marken - Pit Bull Germany, Svastone, Beloyar und Thor Steinar. Wir importieren echte Originalware direkt und wählen die besten Stücke aus.",
    btn_catalog: "Zum Warenkatalog",
    btn_all_brands: "Alle Marken",
    brands_title: "Verfügbare Marken",
    brands_subtitle: "Offizielle Originalware von erstklassigen Herstellern",
    view_items: "Artikel ansehen →",
    brand_beloyar_title: "Beloyar",
    catalog_title: "Warenkatalog",
    catalog_subtitle: "Kultige Street- & Kampfsportkleidung",
    filter_brand_label: "Marke:",
    filter_category_label: "Kategorie:",
    filter_all_brands: "Alle Marken",
    filter_brand_beloyar: "Beloyar",
    filter_brand_other: "Andere Marken",
    filter_all_types: "Alle Typen",
    filter_bombers: "Bomber & Jacken",
    filter_hoodies: "Hoodies",
    filter_sweatshirts: "Sweatshirts",
    filter_tees: "T-Shirts & Tanks",
    filter_pants: "Hosen",
    filter_shorts: "Shorts",
    filter_misc: "Verschiedenes",
    no_products_found: "Keine Artikel für die ausgewählten Filter gefunden",
    reviews_title: "KUNDENFOTOS & BEWERTUNGEN",
    reviews_subtitle: "Echte Aufnahmen und Feedback unserer Käufer",
    reviews_cta_title: "Möchten Sie mehr Kundenbewertungen sehen?",
    reviews_cta_sub: "Dutzende echte Kundenfotos und Erfahrungsberichte in unserem Telegram-Kanal",
    reviews_cta_btn: "Zum Telegram-Kanal",
    perk1_title: "100% Original",
    perk1_desc: "Wir arbeiten ausschließlich mit lizenzierten Händlern und Herstellern ohne Fälschungen.",
    perk2_title: "Kultmarken",
    perk2_desc: "Die besten Marken an einem Ort: Pit Bull Germany, Svastone, Beloyar, Thor Steinar.",
    perk3_title: "Schneller Versand",
    perk3_desc: "Versand am Tag der Bestellung. Sichere Verpackung und zuverlässige Zustellung.",
    perk4_title: "Garantie & Umtausch",
    perk4_desc: "Schneller Größenumtausch und 14 Tage Rückgaberecht ohne Komplikationen.",
    footer_desc: "R8ILT STORE — Ihr autorisierter Multibrand-Store für Streetwear, Kampfsport & Subkultur-Mode.",
    footer_nav_title: "Navigation",
    footer_info_title: "Informationen",
    footer_size_guide: "Größentabelle",
    footer_shipping: "Zahlung & Versand",
    footer_returns: "Rückgabe & Umtausch",
    footer_certs: "Echtheitszertifikate",
    footer_club_title: "R8ILT Club",
    footer_club_desc: "Abonnieren Sie unseren Newsletter für exklusive Drops und Rabatte.",
    footer_copyright: "© 2026 R8ILT STORE. Multibrand-Bekleidungsgeschäft.",
    footer_tagline: "AUTHENTIC STREETWEAR & COMBAT APPAREL",
    cart_title: "Warenkorb",
    cart_empty_title: "Ihr Warenkorb ist leer",
    cart_empty_sub: "Entdecken Sie Artikel im Katalog",
    cart_total: "Gesamt:",
    cart_checkout: "Zur Kasse",
    add_to_cart: "In den Warenkorb",
    quick_view: "Schnellansicht",
    to_wishlist: "Wunschliste",
    original_label: "100% ORIGINAL",
    available_sizes: "Verfügbare Größen:",
    alert_checkout_empty: "Warenkorb ist leer!",
    alert_checkout_success: "Bestellung erfolgreich aufgegeben!",
    alert_notify_success: "♰ Benachrichtigung aktiviert!",
    toast_added: "wurde hinzugefügt!",
    toast_removed: "Artikel entfernt",
    breadcrumb_home: "Startseite",
    back_to_catalog: "Zurück zum Katalog",
    size_in_stock: "Größe auf Lager:",
    feature_original: "100% Original",
    feature_shipping: "Schneller Versand",
    feature_returns: "Umtausch & Rückgabe",
    toast_unique_item: "Dieser Artikel ist ein Einzelstück und bereits im Warenkorb!",
    unique_badge: "1 Stk. (Einzelstück)",
    unique_in_stock: "Einzelstück (1 Stk. auf Lager)",
    checkout_modal_title: "Bestellung aufgeben",
    checkout_order_items: "Artikel in der Bestellung:",
    checkout_label_country: "Zielland *",
    checkout_label_region: "Bundesland / Region / Kanton *",
    checkout_label_zip: "Postleitzahl (PLZ) *",
    checkout_label_city: "Ort / Stadt *",
    checkout_label_phone: "Mobilfunknummer (lokaler Anbieter) *",
    checkout_label_name: "Vollständiger Name (lateinische Schrift) *",
    checkout_label_email: "E-Mail (Gmail) *",
    checkout_label_post_office: "Adresse und Nummer der Postfiliale / Packstation *",
    checkout_label_address: "Tatsächliche Wohnadresse *",
    checkout_security_note: "Echtheitsgarantie und schneller Versand am Bestelltag.",
    checkout_btn_submit: "Weiter zur Bezahlung",
    checkout_summary_items: "Warenwert:",
    checkout_summary_shipping: "Versand in das Zielland:",
    checkout_summary_total_to_pay: "Gesamtsumme zur Zahlung:",
    payment_modal_title: "Bestellung bezahlen",
    payment_step_label: "Schritt 2 von 2: Bezahlung",
    payment_instruction: "Bitte überweisen Sie den genauen Rechnungsbetrag an eine der folgenden Bankverbindungen:",
    payment_mono_title: "Monobank (UAH / EUR)",
    payment_mono_recipient: "Patsula Vadim",
    payment_revolut_title: "Revolut (IBAN / SEPA / EUR)",
    payment_revolut_recipient: "Savelii Shkurko",
    payment_copy_btn: "Kopieren",
    payment_copied_toast: "Zahlungsdaten in die Zwischenablage kopiert!",
    receipt_upload_title: "Zahlungsbeleg / Screenshot *",
    receipt_drop_text: "Klicken oder Zahlungsbeleg hierher ziehen",
    receipt_drop_hint: "JPG, PNG, WEBP oder PDF (max. 15 MB)",
    receipt_btn_browse: "Screenshot anhängen",
    receipt_attached: "Screenshot angehängt",
    receipt_error_required: "Bitte laden Sie Ihren Zahlungsbeleg oder Screenshot hoch!",
    receipt_sending: "Bestellung und Beleg werden gesendet...",
    btn_i_paid_confirm: "Bestellung aufgeben & Beleg senden",
    order_success_title: "Bestellung erfolgreich aufgegeben!",
    order_success_desc_payment: "Bitte überweisen Sie den Gesamtbetrag an die unten angegebenen Daten und senden Sie den Beleg an unseren Telegram-Manager:",
    order_success_final_desc: "Ihre Versanddaten und die Bestellung wurden erfasst! Der Artikel ist für Sie reserviert. Unser Manager wird Ihnen in Kürze die Sendungsnummer mitteilen.",
    order_success_tg: "Auf Telegram kontaktieren",
    order_success_tg_receipt: "Manager auf Telegram kontaktieren",
    order_success_close: "Zurück zum Store",
    validation_error_all_fields: "Bitte füllen Sie alle Pflichtfelder aus!",
    validation_error_gmail: "Bitte geben Sie eine gültige Gmail-Adresse an (z. B. yourname@gmail.com)!",
    validation_error_phone: "Bitte geben Sie eine gültige Telefonnummer ein!"
  }
};

// Multilingual Products Catalog
const products = [
  {
    id: 1,
    brand: "mastrum",
    brandName: "MA.STRUM",
    category: "hoodies",
    price: 40,
    oldPrice: 50,
    currency: "€",
    badge: "sale",
    rune: "☩",
    images: [
      "tovari/photo_1_2026-08-28_11-45-48.jpg",
      "tovari/photo_2_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Худи MA.STRUM White",
      en: "MA.STRUM White Hoodie",
      de: "MA.STRUM Weißer Kapuzenpullover"
    },
    categoryNames: {
      ru: "Худи",
      en: "Hoodie",
      de: "Kapuzenpullover"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Белое оригинальное худи от британского бренда MA.STRUM с фирменным патчем-компасом на плече. Плотный качественный хлопок, удобный капюшон со шнурками и карман-кенгуру. Состояние 9/10, вещь чистая и без нюансов.",
      en: "Original white hoodie by British brand MA.STRUM with signature compass shoulder patch. Heavyweight cotton, adjustable drawstring hood and kangaroo pocket. Condition 9/10, clean and without flaws.",
      de: "Originaler weißer Kapuzenpullover von MA.STRUM mit ikonischem Kompass-Patch an der Schulter. Hochwertige Baumwolle und Kängurutasche. Zustand 9/10, ohne Mängel."
    },
    size: "XL"
  },
  {
    id: 2,
    brand: "beloyar",
    brandName: "Белояр",
    category: "tees",
    price: 25,
    oldPrice: 35,
    currency: "€",
    badge: "sale",
    rune: "ᛟ",
    images: [
      "tovari/photo_3_2026-08-28_11-45-48.jpg",
      "tovari/photo_4_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Майка Белояр Black",
      en: "Beloyar Tank Top Black",
      de: "Beloyar Tanktop Schwarz"
    },
    categoryNames: {
      ru: "Футболки / Майки",
      en: "T-Shirts & Tanks",
      de: "T-Shirts & Tanks"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Черная оригинальная майка от бренда Белояр с контрастным славянским орнаментом и фирменным логотипом. Плотный дышащий хлопок высшего качества, надежный принт и фирменная жаккардовая бирка внизу. Состояние 9/10, отличный вид без нюансов.",
      en: "Original black tank top by Beloyar with contrasting Slavic ornament and brand lettering. Breathable premium cotton, durable screen print and woven hem tag. Condition 9/10, clean and without flaws.",
      de: "Originales schwarzes Tanktop von Beloyar mit kontrastierendem slawischem Ornament und Markenlogo. Hochwertige Baumwolle und langlebiger Druck. Zustand 9/10, makellos."
    },
    size: "XL"
  },
  {
    id: 3,
    brand: "beloyar",
    brandName: "Белояр",
    category: "tees",
    price: 25,
    oldPrice: 35,
    currency: "€",
    badge: "sale",
    rune: "ᛉ",
    images: [
      "tovari/photo_5_2026-08-28_11-45-48.jpg",
      "tovari/photo_6_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Футболка Белояр «Set Sail and Conquer the World» Black",
      en: "Beloyar T-Shirt «Set Sail and Conquer the World» Black",
      de: "Beloyar T-Shirt «Set Sail and Conquer the World» Schwarz"
    },
    categoryNames: {
      ru: "Футболки / Майки",
      en: "T-Shirts & Tanks",
      de: "T-Shirts & Tanks"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Культовая черная футболка от бренда Белояр с принтом драккара и легендарным слоганом Set Sail and Conquer the World. Насыщенный черный цвет, плотный премиальный хлопок, фирменный принт на рукаве и бирка Сделано на Руси. Состояние 9/10, вещь без нюансов.",
      en: "Iconic black t-shirt by Beloyar featuring the drakkar graphic and Set Sail and Conquer the World motto. Heavyweight premium cotton, durable screen print and sleeve branding. Condition 9/10, clean and flaw-free.",
      de: "Kultiges schwarzes T-Shirt von Beloyar mit Drakkar-Motiv und dem Motto Set Sail and Conquer the World. Hochwertige Baumwolle und langlebiger Druck. Zustand 9/10, makellos."
    },
    size: "XL"
  },
  {
    id: 4,
    brand: "beloyar",
    brandName: "Белояр",
    category: "tees",
    price: 25,
    oldPrice: 35,
    currency: "€",
    badge: "sale",
    rune: "ᚱ",
    images: [
      "tovari/photo_7_2026-08-28_11-45-48.jpg",
      "tovari/photo_8_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Футболка Белояр «Classic Yellow Logo» Black",
      en: "Beloyar T-Shirt «Classic Yellow Logo» Black",
      de: "Beloyar T-Shirt «Classic Yellow Logo» Schwarz"
    },
    categoryNames: {
      ru: "Футболки / Майки",
      en: "T-Shirts & Tanks",
      de: "T-Shirts & Tanks"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Оригинальная черная футболка от бренда Белояр с контрастным желтым руническим логотипом на груди. Плотный качественный хлопок, бирка Сделано на Руси и фирменный принт на рукаве. Состояние 9/10, чистая и без нюансов.",
      en: "Original black t-shirt by Beloyar featuring a bold yellow runic logo across the chest. Heavyweight cotton, sleeve branding and authentic neck tag. Condition 9/10, clean and in great shape.",
      de: "Originales schwarzes T-Shirt von Beloyar mit gelbem Runenlogo auf der Brust. Hochwertige Baumwolle und Ärmelbranding. Zustand 9/10, makellos."
    },
    size: "L"
  },
  {
    id: 5,
    brand: "svastone",
    brandName: "Svastone",
    category: "tees",
    price: 25,
    oldPrice: 35,
    currency: "€",
    badge: "sale",
    rune: "🜵",
    images: [
      "tovari/photo_9_2026-08-28_11-45-48.jpg",
      "tovari/photo_10_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Футболка Svastone «Іду на Ви» Ringer Black",
      en: "Svastone T-Shirt «Idu Na Vy» Ringer Black",
      de: "Svastone T-Shirt «Idu Na Vy» Ringer Schwarz"
    },
    categoryNames: {
      ru: "Футболки / Майки",
      en: "T-Shirts & Tanks",
      de: "T-Shirts & Tanks"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Культовая футболка от украинского бренда Svastone с принтом Іду на Ви и контрастными светлыми манжетами ringer tee. Состояние 7/10, винтажный характер: есть естественные трещинки на принте и легкая растянутость ткани от носки, дырок и пятен нет.",
      en: "Iconic combat ringer t-shirt by Svastone featuring the legendary Idu Na Vy print and contrasting trims. Condition 7/10 with honest vintage character: cracking on the print and slight relaxed stretch from wear, no holes or stains.",
      de: "Kultiges Ringer T-Shirt von Svastone mit dem Motiv Idu Na Vy und kontrastierenden Bündchen. Zustand 7/10 mit authentischem Vintage-Charakter: leichte Risse im Druck und gewollte Dehnung, ohne Löcher."
    },
    size: "XL"
  },
  {
    id: 6,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "sweatshirts",
    price: 75,
    oldPrice: 85,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_11_2026-08-28_11-45-48.jpg",
      "tovari/photo_12_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Свитшот Pit Bull Germany «Germania 01» Black",
      en: "Pit Bull Germany Sweatshirt «Germania 01» Black",
      de: "Pit Bull Germany Sweatshirt «Germania 01» Schwarz"
    },
    categoryNames: {
      ru: "Свитшоты",
      en: "Sweatshirts",
      de: "Sweatshirts"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Тяжелый оригинальный свитшот от немецкого бренда Pit Bull Germany с массивными принтами Germania 01 на груди, спине и рукавах. Плотный качественный хлопок с начесом, фирменный патч с бульдогом на манжете. Состояние 8/10, есть естественные трещинки на принте от носки, сама кофта плотная и без дефектов.",
      en: "Heavyweight authentic sweatshirt by Pit Bull Germany featuring massive Germania 01 graphics across chest, back and sleeve. Heavy fleece cotton, signature dog patch on sleeve cuff. Condition 8/10 with honest print cracking from wear, fabric is solid and clean.",
      de: "Schweres originales Sweatshirt von Pit Bull Germany mit markanten Germania 01 Prints auf Brust, Rücken und Ärmeln. Robuste Fleece-Baumwolle und Pitbull-Patch am Ärmel. Zustand 8/10, leichte Risse im Druck, Stoff top."
    },
    size: "XL"
  },
  {
    id: 7,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "bombers",
    price: 50,
    oldPrice: 60,
    currency: "€",
    badge: "sale",
    rune: "🜏",
    images: [
      "tovari/photo_13_2026-08-28_11-45-48.jpg",
      "tovari/photo_14_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Куртка Pit Bull Germany «Softshell Tactical» Black",
      en: "Pit Bull Germany Jacket «Softshell Tactical» Black",
      de: "Pit Bull Germany Jacke «Softshell Tactical» Schwarz"
    },
    categoryNames: {
      ru: "Бомберы / Куртки",
      en: "Bombers & Jackets",
      de: "Bomber & Jacken"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Тактическая черная ветрозащитная куртка softshell от немецкого бренда Pit Bull Germany. Плотный влагоотталкивающий материал, теплая флисовая подкладка, регулируемые манжеты на липучках и карманы на молниях. Состояние 8/10, есть нюанс: снизу отходит язычок молнии (легко поправить в ателье), поэтому цена приятно снижена.",
      en: "Tactical black windproof softshell jacket by German label Pit Bull Germany. Water-resistant outer shell, warm fleece lining, Velcro adjustable cuffs and secure zipper pockets. Condition 8/10, minor flaw: lower zipper tab needs a simple stitch in a repair shop, priced down accordingly.",
      de: "Taktische schwarze Softshelljacke von Pit Bull Germany. Wind- und wasserabweisendes Material, warmes Fleecefutter und Reißverschlusstaschen. Zustand 8/10 mit kleinem Reißverschluss-Detail, stark reduzierter Preis."
    },
    size: "L"
  },
  {
    id: 8,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "tees",
    price: 65,
    oldPrice: 75,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_15_2026-08-28_11-45-48.jpg",
      "tovari/photo_16_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Футболка Pit Bull Germany «Frankfurt Knuckles» Black",
      en: "Pit Bull Germany T-Shirt «Frankfurt Knuckles» Black",
      de: "Pit Bull Germany T-Shirt «Frankfurt Knuckles» Schwarz"
    },
    categoryNames: {
      ru: "Футболки / Майки",
      en: "T-Shirts & Tanks",
      de: "T-Shirts & Tanks"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Редкая винтажная футболка от культового немецкого бренда Pit Bull Germany. Готический логотип Frankfurt на груди и массивный принт с кастетом на спине. Плотный хлопок старой школы, бирка Deutsches Produkt. Состояние 8/10, есть легкие трещинки на принте от времени, вещь без дыр и дефектов.",
      en: "Rare vintage t-shirt by legendary German label Pit Bull Germany. Gothic Frankfurt chest logo and large brass knuckles print across the back. Heavyweight old-school cotton, authentic Deutsches Produkt tag. Condition 8/10 with subtle vintage print cracking, no holes or flaws.",
      de: "Seltenes Vintage T-Shirt von Pit Bull Germany. Gotisches Frankfurt-Logo auf der Brust und massiver Schlagring-Print auf dem Rücken. Robuste Baumwolle im Oldschool-Schnitt. Zustand 8/10, leichte Risse im Druck, Stoff top."
    },
    size: "XL"
  },
  {
    id: 9,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "sweatshirts",
    price: 60,
    oldPrice: 70,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_17_2026-08-28_11-45-48.jpg",
      "tovari/photo_18_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Свитшот Pit Bull Germany «Red Stripe Embroidered» Black",
      en: "Pit Bull Germany Sweatshirt «Red Stripe Embroidered» Black",
      de: "Pit Bull Germany Sweatshirt «Red Stripe Embroidered» Schwarz"
    },
    categoryNames: {
      ru: "Свитшоты",
      en: "Sweatshirts",
      de: "Sweatshirts"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Культовый винтажный свитшот от немецкого бренда Pit Bull Germany с массивной рельефной вышивкой на груди и красно-белыми полосатыми манжетами. Плотный хлопок высшего качества, бирка Deutsches Produkt. Состояние 8/10, есть нюанс: на рукаве аккуратно зашитая маленькая дырочка и следы пасты (показано на 2 фото), в остальном вещь в отличном сохране.",
      en: "Classic vintage sweatshirt by Pit Bull Germany featuring heavy embroidered chest lettering and red/white striped ribbings. Heavyweight premium cotton, authentic Deutsches Produkt tag. Condition 8/10 with minor flaw: neatly stitched small spot on the sleeve and light mark (shown in photo 2), otherwise solid.",
      de: "Klassisches Vintage Sweatshirt von Pit Bull Germany mit massiver Bruststickerei und rot-weiß gestreiften Bündchen. Hochwertige Baumwolle mit Deutschem Produkt Etikett. Zustand 8/10 mit kleiner genähter Stelle am Ärmel."
    },
    size: "XL"
  },
  {
    id: 10,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "sweatshirts",
    price: 70,
    oldPrice: 80,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_19_2026-08-28_11-45-48.jpg",
      "tovari/photo_20_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Свитшот Pit Bull Germany «V-Neck Knitted Stripe» Navy",
      en: "Pit Bull Germany Sweatshirt «V-Neck Knitted Stripe» Navy",
      de: "Pit Bull Germany Sweatshirt «V-Neck Knitted Stripe» Navy"
    },
    categoryNames: {
      ru: "Свитшоты",
      en: "Sweatshirts",
      de: "Sweatshirts"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Редкий винтажный пуловер-свитшот от немецкого бренда Pit Bull Germany с фактурной вертикальной вязкой и V-образным воротником с бордово-кремовой окантовкой. Аккуратная вышивка логотипа на груди, плотные манжеты и оригинальная бирка Deutsches Produkt. Состояние 8/10, отличный винтаж без нюансов.",
      en: "Rare vintage textured knit pullover sweatshirt by Pit Bull Germany featuring a V-neck collar with burgundy and cream striped trim. Detailed chest embroidery, heavy ribbed cuffs and authentic Deutsches Produkt tag. Condition 8/10, clean vintage piece with zero flaws.",
      de: "Seltener Vintage Strickpullover von Pit Bull Germany mit V-Ausschnitt und weinrot-cremefarbenen Streifen. Feine Logostickerei auf der Brust und Deutsches Produkt Etikett. Zustand 8/10, makellos."
    },
    size: "L-XL"
  },
  {
    id: 11,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "bombers",
    price: 60,
    oldPrice: 70,
    currency: "€",
    badge: "sale",
    rune: "🜏",
    images: [
      "tovari/photo_21_2026-08-28_11-45-48.jpg",
      "tovari/photo_22_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Варсити Куртка Pit Bull Germany «Punishgirl» Pink/Cream",
      en: "Pit Bull Germany Varsity Jacket «Punishgirl» Pink/Cream",
      de: "Pit Bull Germany Collegejacke «Punishgirl» Pink/Creme"
    },
    categoryNames: {
      ru: "Бомберы / Куртки",
      en: "Bombers & Jackets",
      de: "Bomber & Jacken"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Коллекционная варсити-куртка бомбер от Pit Bull Germany в ярком малиново-розовом и кремовом оттенках. Кнопки спереди, плотные полосатые манжеты, принты Good Girl - Bad Girl на рукавах и массивная графика Punishgirl на спине. Состояние 8/10, есть нюанс: срезана верхняя бирка на шее, сама вещь в отличной форме.",
      en: "Collector's varsity bomber jacket by Pit Bull Germany in bold magenta pink and cream colorway. Snap-button front, striped ribbing, Good Girl - Bad Girl sleeve prints and large Punishgirl back graphic. Condition 8/10, minor flaw: missing neck brand tag, jacket itself is in great condition.",
      de: "Auffällige Collegejacke von Pit Bull Germany in Magenta-Pink und Creme. Druckknopfleiste, gestreifte Rippbündchen und markanter Punishgirl-Rückenprint. Zustand 8/10, ohne Nackenetikett."
    },
    size: "M-L"
  },
  {
    id: 12,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "sweatshirts",
    price: 130,
    oldPrice: 140,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_23_2026-08-28_11-45-48.jpg",
      "tovari/photo_24_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Свитшот Pit Bull Germany «Final Attack» Grey",
      en: "Pit Bull Germany Sweatshirt «Final Attack» Grey",
      de: "Pit Bull Germany Sweatshirt «Final Attack» Grau"
    },
    categoryNames: {
      ru: "Свитшоты",
      en: "Sweatshirts",
      de: "Sweatshirts"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Легендарный коллекционный свитшот от немецкого бренда Pit Bull Germany с культовым принтом Final Attack на спине и вышитым логотипом на груди. Плотный хлопок с начесом, оригинальная бирка Deutsches Produkt. Состояние 10/10, идеальный музейный сохран без единого нюанса и без трещин на принте.",
      en: "Legendary collector's crewneck sweatshirt by Pit Bull Germany featuring the iconic Final Attack back graphic and embroidered chest logo. Premium heavy fleece cotton, authentic Deutsches Produkt tag. Condition 10/10, flawless pristine condition without any wear or cracking.",
      de: "Legendäres Sammler-Sweatshirt von Pit Bull Germany mit dem ikonischen Final Attack Rückenprint und gesticktem Brustlogo. Schwere Fleece-Baumwolle. Zustand 10/10, absoluter Traumzustand ohne Mängel."
    },
    size: "L-XL"
  },
  {
    id: 13,
    brand: "pitbull",
    brandName: "Pit Bull Germany x Zippo",
    category: "misc",
    price: 75,
    oldPrice: 85,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_25_2026-08-28_11-45-48.jpg",
      "tovari/photo_26_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Зажигалка Zippo x Pit Bull Germany «Frankfurt Dog»",
      en: "Zippo x Pit Bull Germany Lighter «Frankfurt Dog»",
      de: "Zippo x Pit Bull Germany Feuerzeug «Frankfurt Dog»"
    },
    categoryNames: {
      ru: "Разное / Аксессуары",
      en: "Accessories & Misc",
      de: "Accessoires & Diverses"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Оригинальная ветрозащитная бензиновая зажигалка Zippo Made in USA в редкой коллаборации с брендом Pit Bull Germany. Глянцевый черный корпус, рельефная металлическая эмблема питбуля и готическая гравировка Frankfurt. Полный оригинальный комплект с кейсом и инструкцией. Состояние 10/10, идеальный сохран без нюансов.",
      en: "Original windproof lighter by Zippo Made in USA in rare collaboration with Pit Bull Germany. High polish black and chrome finish, raised metal bulldog emblem and gothic Frankfurt engraving. Complete set with original case and documentation. Condition 10/10, pristine collectors condition.",
      de: "Originales Zippo Sturmfeuerzeug Made in USA in Kooperation mit Pit Bull Germany. Schwarzes Hochglanz-Design mit erhabenem Pitbull-Emblem und Frankfurt-Gravur. Komplettset mit Originalbox. Zustand 10/10, makellos."
    },
    size: "ONE SIZE"
  },
  {
    id: 14,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "misc",
    price: 25,
    oldPrice: 35,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_27_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Колода карт Pit Bull Germany «Gelinkt Wird Nicht»",
      en: "Pit Bull Germany Playing Cards «Gelinkt Wird Nicht»",
      de: "Pit Bull Germany Spielkarten «Gelinkt Wird Nicht»"
    },
    categoryNames: {
      ru: "Разное / Аксессуары",
      en: "Accessories & Misc",
      de: "Accessoires & Diverses"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Редкая винтажная колода игральных карт от немецкого бренда Pit Bull Germany с фирменным девизом «...gelinkt wird nicht!» и символикой бульдога. Прочный прозрачный пластиковый бокс. Состояние 10/10, сами карты в идеале, нюанс: в комплекте одна колода из двух (показано на фото).",
      en: "Rare vintage playing card deck by Pit Bull Germany featuring the brand motto «...gelinkt wird nicht!» and signature bulldog graphics. Hard transparent case. Condition 10/10 in pristine state, note: includes one deck out of the original double set.",
      de: "Seltenes Vintage Kartenspiel von Pit Bull Germany mit dem Aufdruck «...gelinkt wird nicht!» in transparenter Box. Zustand 10/10, makellos. Hinweis: Ein Kartendeck im Set."
    },
    size: "ONE SIZE"
  },
  {
    id: 15,
    brand: "pitbull",
    brandName: "Pit Bull Germany",
    category: "misc",
    price: 55,
    oldPrice: 65,
    currency: "€",
    badge: "sale",
    rune: "🝊",
    images: [
      "tovari/photo_28_2026-08-28_11-45-48.jpg"
    ],
    names: {
      ru: "Набор игральных карт Pit Bull Germany «Gelinkt Wird Nicht» (2 колоды)",
      en: "Pit Bull Germany Playing Cards Double Set «Gelinkt Wird Nicht»",
      de: "Pit Bull Germany Kartenspiel Doppelset «Gelinkt Wird Nicht»"
    },
    categoryNames: {
      ru: "Разное / Аксессуары",
      en: "Accessories & Misc",
      de: "Accessoires & Diverses"
    },
    badgeTexts: {
      ru: "SALE",
      en: "SALE",
      de: "SALE"
    },
    descriptions: {
      ru: "Коллекционный полный комплект винтажных игральных карт от немецкого бренда Pit Bull Germany в оригинальном прозрачном боксе. Включает сразу 2 запечатанные колоды с культовым девизом «...gelinkt wird nicht!» и фирменной символикой. Состояние 10/10, идеальный коллекционный экземпляр без нюансов.",
      en: "Collector's full double deck set of vintage playing cards by Pit Bull Germany in original clear hard case. Includes both decks with signature «...gelinkt wird nicht!» graphics and bulldog artwork. Condition 10/10, pristine untouched condition with zero flaws.",
      de: "Vollständiges Sammler-Doppelset von Vintage-Spielkarten der Marke Pit Bull Germany in transparenter Box. Enthält beide Decks mit dem Motiv «...gelinkt wird nicht!». Zustand 10/10, makellos."
    },
    size: "ONE SIZE"
  }
];

// App State
let currentLang = localStorage.getItem('r8ilt_lang') || 'ru';
let cart = JSON.parse(localStorage.getItem('r8ilt_cart')) || [];
let activeBrandFilter = 'all';
let activeCategoryFilter = 'all';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const floatingCartBtn = document.getElementById('floatingCartBtn');
const floatingCartCount = document.getElementById('floatingCartCount');
const cartClose = document.getElementById('cartClose');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountBadge = document.getElementById('cartCount');
const cartDrawerCount = document.getElementById('cartDrawerCount');
const cartTotalSum = document.getElementById('cartTotalSum');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');
const checkoutBtn = document.getElementById('checkoutBtn');
const dropNotifyBtn = document.getElementById('dropNotifyBtn');

// Checkout Countries List (EU + USA + Canada)
const checkoutCountries = [
  { code: "DE", ru: "Германия (Deutschland)", en: "Germany", de: "Deutschland" },
  { code: "AT", ru: "Австрия (Österreich)", en: "Austria", de: "Österreich" },
  { code: "CH", ru: "Швейцария (Schweiz)", en: "Switzerland", de: "Schweiz" },
  { code: "PL", ru: "Польша (Polska)", en: "Poland", de: "Polen" },
  { code: "UA", ru: "Украина (Україна)", en: "Ukraine", de: "Ukraine" },
  { code: "US", ru: "США (USA)", en: "United States (USA)", de: "Vereinigte Staaten (USA)" },
  { code: "CA", ru: "Канада (Canada)", en: "Canada", de: "Kanada" },
  { code: "FR", ru: "Франция (France)", en: "France", de: "Frankreich" },
  { code: "IT", ru: "Италия (Italia)", en: "Italy", de: "Italien" },
  { code: "ES", ru: "Испания (España)", en: "Spain", de: "Spanien" },
  { code: "NL", ru: "Нидерланды (Nederland)", en: "Netherlands", de: "Niederlande" },
  { code: "BE", ru: "Бельгия (België)", en: "Belgium", de: "Belgien" },
  { code: "CZ", ru: "Чехия (Česko)", en: "Czech Republic", de: "Tschechien" },
  { code: "SK", ru: "Словакия (Slovensko)", en: "Slovakia", de: "Slowakei" },
  { code: "PT", ru: "Португалия (Portugal)", en: "Portugal", de: "Portugal" },
  { code: "SE", ru: "Швеция (Sverige)", en: "Sweden", de: "Schweden" },
  { code: "NO", ru: "Норвегия (Norge)", en: "Norway", de: "Norwegen" },
  { code: "DK", ru: "Дания (Danmark)", en: "Denmark", de: "Dänemark" },
  { code: "FI", ru: "Финляндия (Suomi)", en: "Finland", de: "Finnland" },
  { code: "GR", ru: "Греция (Ελλάδα)", en: "Greece", de: "Griechenland" },
  { code: "IE", ru: "Ирландия (Ireland)", en: "Ireland", de: "Irland" },
  { code: "HU", ru: "Венгрия (Magyarország)", en: "Hungary", de: "Ungarn" },
  { code: "RO", ru: "Румыния (România)", en: "Romania", de: "Rumänien" },
  { code: "BG", ru: "Болгария (България)", en: "Bulgaria", de: "Bulgarien" },
  { code: "HR", ru: "Хорватия (Hrvatska)", en: "Croatia", de: "Kroatien" },
  { code: "LT", ru: "Литва (Lietuva)", en: "Lithuania", de: "Litauen" },
  { code: "LV", ru: "Латвия (Latvija)", en: "Latvia", de: "Lettland" },
  { code: "EE", ru: "Эстония (Eesti)", en: "Estonia", de: "Estland" },
  { code: "SI", ru: "Словения (Slovenija)", en: "Slovenia", de: "Slowenien" },
  { code: "CY", ru: "Кипр (Cyprus)", en: "Cyprus", de: "Zypern" },
  { code: "LU", ru: "Люксембург (Luxembourg)", en: "Luxembourg", de: "Luxemburg" }
];

// Checkout & Payment Modal Elements
const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutCountry = document.getElementById('checkoutCountry');
const checkoutItemsCount = document.getElementById('checkoutItemsCount');
const checkoutItemsSubtotal = document.getElementById('checkoutItemsSubtotal');
const checkoutShippingCost = document.getElementById('checkoutShippingCost');
const checkoutSummaryTotal = document.getElementById('checkoutSummaryTotal');
const checkoutItemsPreview = document.getElementById('checkoutItemsPreview');

const paymentOverlay = document.getElementById('paymentOverlay');
const paymentClose = document.getElementById('paymentClose');
const paymentOrderNumber = document.getElementById('paymentOrderNumber');
const paymentItemsTotal = document.getElementById('paymentItemsTotal');
const paymentShippingCost = document.getElementById('paymentShippingCost');
const paymentTotalToPay = document.getElementById('paymentTotalToPay');
const paymentConfirmPaidBtn = document.getElementById('paymentConfirmPaidBtn');

// Receipt Upload Elements
const receiptDropzone = document.getElementById('receiptDropzone');
const receiptFileInput = document.getElementById('receiptFileInput');
const dropzoneEmpty = document.getElementById('dropzoneEmpty');
const dropzonePreview = document.getElementById('dropzonePreview');
const receiptImageThumb = document.getElementById('receiptImageThumb');
const receiptPdfIcon = document.getElementById('receiptPdfIcon');
const previewFileName = document.getElementById('previewFileName');
const previewFileSize = document.getElementById('previewFileSize');
const btnBrowseReceipt = document.getElementById('btnBrowseReceipt');
const btnRemoveReceipt = document.getElementById('btnRemoveReceipt');

let attachedReceiptFile = null;

const orderSuccessOverlay = document.getElementById('orderSuccessOverlay');
const successOrderNumber = document.getElementById('successOrderNumber');
const successCloseBtn = document.getElementById('successCloseBtn');

let pendingOrderData = null;

// Language Selector Elements
const langSelector = document.getElementById('langSelector');
const langCurrentBtn = document.getElementById('langCurrentBtn');
const currentFlagIcon = document.getElementById('currentFlagIcon');
const currentLangCode = document.getElementById('currentLangCode');
const langOptions = document.querySelectorAll('.lang-option');

// Quick View Modal
const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewClose = document.getElementById('quickViewClose');
const quickViewBody = document.getElementById('quickViewBody');

// Brand cards
const brandCards = document.querySelectorAll('.category-card');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Validate and clamp unique item quantities (1 max per unique product)
  if (Array.isArray(cart)) {
    cart.forEach(item => {
      const prod = products.find(p => p.id === item.id);
      const maxStock = (prod && typeof prod.maxStock === 'number') ? prod.maxStock : 1;
      if (item.qty > maxStock) item.qty = maxStock;
    });
    saveCart();
  }

  setLanguage(currentLang);
  initLangSelector();
  initMobileMenu();
  updateCartUI();
  initFilters();
  initCartEvents();
  initCheckoutEvents();
  populateCheckoutCountries();
  initReviewsCarousel();
  initLightboxEvents();
  initQuickViewEvents();
  initScrollSpy();
  initSingleProductPage();
});

// Dynamic Navigation ScrollSpy (Active Underline Highlight on Scroll - rAF Throttled)
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = [];

  navLinks.forEach(link => {
    const hash = link.getAttribute('href');
    if (hash && hash !== '#') {
      const el = document.querySelector(hash);
      if (el) {
        sections.push({ hash, el, link });
      }
    }
  });

  function updateActiveLink() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if user scrolled down to the very end of the page (Footer #about)
    const isAtBottom = (windowHeight + scrollY) >= (documentHeight - 25);

    let activeLink = null;

    if (isAtBottom && sections.length > 0) {
      activeLink = sections[sections.length - 1].link; // Last link (About)
    } else {
      // 35% from the top of the viewport checkpoint
      const checkY = windowHeight * 0.35;

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const rect = sec.el.getBoundingClientRect();

        // Section is in active viewing range
        if (rect.top <= checkY && rect.bottom > 90) {
          activeLink = sec.link;
        }
      }
    }

    // Default to first section link (Brands) when at the top
    if (!activeLink && scrollY < 250 && sections.length > 0) {
      activeLink = sections[0].link;
    }

    if (activeLink) {
      navLinks.forEach(l => l.classList.remove('active'));
      activeLink.classList.add('active');
    }
  }

  let ticking = false;
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  updateActiveLink();
}

// Mobile Navigation Toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      if (nav.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    }
  });

  // Close mobile nav when clicking any navigation link
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    }
  });
}

// Switch & Apply Language
function setLanguage(lang) {
  if (!translations[lang]) lang = 'ru';
  currentLang = lang;
  localStorage.setItem('r8ilt_lang', lang);
  document.documentElement.lang = lang;

  // Update Selector Button UI with Vector Flag and Code
  if (currentFlagIcon) {
    currentFlagIcon.className = `flag-icon flag-${lang}`;
  }
  if (currentLangCode) {
    currentLangCode.textContent = lang.toUpperCase();
  }

  // Update active state in dropdown
  langOptions.forEach(opt => {
    if (opt.dataset.lang === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Re-render product grid, single product and cart
  renderProducts();
  updateCartUI();
  populateCheckoutCountries();
  initSingleProductPage();
}

// Initialize Language Switcher Dropdown
function initLangSelector() {
  if (!langCurrentBtn || !langSelector) return;

  langCurrentBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove('open');
    }
  });

  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedLang = option.dataset.lang;
      setLanguage(selectedLang);
      langSelector.classList.remove('open');
    });
  });
}

// Render Products Grid with Dual Brand + Category Filtering
function renderProducts() {
  if (!productGrid) return;
  const t = translations[currentLang];

  const filtered = products.filter(p => {
    const mainBrands = ['pitbull', 'svastone', 'beloyar', 'thorsteinar'];
    const matchBrand = (activeBrandFilter === 'all')
      ? true
      : (activeBrandFilter === 'other' || activeBrandFilter === 'misc'
          ? !mainBrands.includes(p.brand)
          : p.brand === activeBrandFilter);
    const matchCategory = activeCategoryFilter === 'all' || p.category === activeCategoryFilter;
    return matchBrand && matchCategory;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="no-products-msg">
        <i class="fa-solid fa-box-open" style="font-size: 2.5rem; color: rgba(217, 4, 41, 0.5); margin-bottom: 14px;"></i>
        <p style="color: var(--text-secondary); font-size: 1rem; font-family: var(--font-body);">${t.no_products_found || 'По выбранным критериям вещей не найдено'}</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const pName = product.names[currentLang] || product.names['en'];
    const pCategory = product.categoryNames[currentLang] || product.categoryNames['en'];
    const pBadgeText = product.badgeTexts[currentLang] || product.badgeTexts['en'];
    const displaySize = product.size ? (Array.isArray(product.size) ? product.size.join(' / ') : product.size) : (product.sizes ? (Array.isArray(product.sizes) ? product.sizes.join(' / ') : product.sizes) : null);
    const brandDisplayName = (product.brand === 'beloyar') ? (currentLang === 'ru' ? 'Белояр' : 'Beloyar') : product.brandName;

    const productImages = (Array.isArray(product.images) && product.images.length > 0)
      ? product.images
      : (product.image ? [product.image] : []);
    const hasMultipleImages = productImages.length > 1;

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-wrap ${hasMultipleImages ? 'has-hover-img' : ''}">
          ${product.badge ? `<span class="badge-tag badge-${product.badge}">${pBadgeText}</span>` : ''}
          ${displaySize ? `<span class="product-size-badge">${displaySize}</span>` : ''}
          ${productImages.length > 0 ? `
            <img src="${productImages[0]}" alt="${pName}" class="product-img ${hasMultipleImages ? 'product-img-primary' : ''}" loading="lazy" decoding="async">
            ${hasMultipleImages ? `
              <img src="${productImages[1]}" alt="${pName} (Вид сзади)" class="product-img product-img-secondary" loading="lazy" decoding="async">
            ` : ''}
          ` : `
            <div class="product-mock-art">
              <span class="mock-rune">${product.rune}</span>
              <span class="mock-label">${brandDisplayName}</span>
            </div>
          `}
        </div>

        <div class="product-details">
          <h3 class="product-title">${pName}</h3>
          
          <div class="product-bottom">
            <div class="product-price-box">
              <span class="product-price">${product.price.toLocaleString()} ${product.currency}</span>
              ${product.oldPrice ? `<span class="product-price-old">${product.oldPrice.toLocaleString()} ${product.currency}</span>` : ''}
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}">
              <i class="fa-solid fa-plus"></i> ${t.add_to_cart}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  attachProductEvents();
}

// Attach event listeners to product cards and action buttons
function attachProductEvents() {
  // Click anywhere on product card to open dedicated product page
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      window.location.href = `product.html?id=${id}`;
    });
  });

  // Click "Add to Cart" adds item without triggering modal
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

// Dual Row Filter Tabs Logic (Simultaneous Brand + Clothing Type)
function initFilters() {
  const allFilterBtns = document.querySelectorAll('.filter-btn');
  
  allFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.filterType; // 'brand' or 'category'
      const filter = btn.dataset.filter;

      if (type === 'brand') {
        activeBrandFilter = filter;
        document.querySelectorAll('.filter-tabs-brands .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else if (type === 'category') {
        activeCategoryFilter = filter;
        document.querySelectorAll('.filter-tabs-categories .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }

      renderProducts();
    });
  });

  // Click on brand cards
  brandCards.forEach(card => {
    card.addEventListener('click', () => {
      const brand = card.dataset.brand;
      activeBrandFilter = brand;
      activeCategoryFilter = 'all';

      // Update active states on both filter rows
      document.querySelectorAll('.filter-tabs-brands .filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === brand);
      });
      document.querySelectorAll('.filter-tabs-categories .filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
      });

      renderProducts();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const maxStock = (typeof product.maxStock === 'number') ? product.maxStock : 1;
  const pName = product.names[currentLang] || product.names['en'];
  const t = translations[currentLang];

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.qty >= maxStock) {
      showToast(t.toast_unique_item || `Товар «${pName}» в единственном экземпляре!`);
      return;
    }
    existingItem.qty += 1;
  } else {
    const productImg = (Array.isArray(product.images) && product.images.length > 0) ? product.images[0] : (product.image || null);
    cart.push({
      id: product.id,
      brandName: product.brandName,
      price: product.price,
      currency: product.currency,
      rune: product.rune,
      image: productImg,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`«${pName}» ${t.toast_added}`);
}

// Update Cart Quantity
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  const product = products.find(p => p.id === productId);
  const maxStock = (product && typeof product.maxStock === 'number') ? product.maxStock : 1;
  const t = translations[currentLang];

  if (delta > 0 && item.qty >= maxStock) {
    showToast(t.toast_unique_item || 'Товар в единственном экземпляре!');
    return;
  }

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast(translations[currentLang].toast_removed);
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('r8ilt_cart', JSON.stringify(cart));
}

// Update Cart UI Drawer
function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const t = translations[currentLang];

  if (cartCountBadge) cartCountBadge.textContent = totalCount;
  if (cartDrawerCount) cartDrawerCount.textContent = `(${totalCount})`;
  if (floatingCartCount) floatingCartCount.textContent = totalCount;
  if (cartTotalSum) cartTotalSum.textContent = `${totalPrice.toLocaleString()} €`;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fa-solid fa-skull empty-icon"></i>
        <p>${t.cart_empty_title}</p>
        <small style="color: var(--text-muted); margin-top: 4px;">${t.cart_empty_sub}</small>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    const itemName = product ? (product.names[currentLang] || product.names['en']) : item.brandName;
    const itemImg = (product && Array.isArray(product.images) && product.images.length > 0) ? product.images[0] : ((product && product.image) || item.image);
    const maxStock = (product && typeof product.maxStock === 'number') ? product.maxStock : 1;
    const isMaxReached = item.qty >= maxStock;

    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${itemImg ? `<img src="${itemImg}" alt="${itemName}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">` : `<span>${item.rune}</span>`}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${itemName}</div>
          <div class="cart-item-price">${(item.price * item.qty).toLocaleString()} ${item.currency}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn ${isMaxReached ? 'disabled' : ''}" ${isMaxReached ? 'disabled title="' + (t.unique_badge || '1 шт.') + '"' : ''} onclick="changeQty(${item.id}, 1)">+</button>
            ${maxStock === 1 ? `<span class="cart-unique-tag">${t.unique_badge || '1 шт. (Эксклюзив)'}</span>` : ''}
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');
}

// Cart Drawer open / close
function openCart() {
  if (cartDrawer) cartDrawer.classList.add('active');
  if (cartOverlay) cartOverlay.classList.add('active');
  document.body.classList.add('cart-open');
}

function closeCart() {
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  document.body.classList.remove('cart-open');
}

function initCartEvents() {
  if (cartToggle) {
    cartToggle.addEventListener('click', openCart);
  }

  if (floatingCartBtn) {
    floatingCartBtn.addEventListener('click', openCart);
  }

  if (cartClose) {
    cartClose.addEventListener('click', closeCart);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('cart-open')) {
      closeCart();
    }
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckoutModal();
    });
  }

  if (dropNotifyBtn) {
    dropNotifyBtn.addEventListener('click', () => {
      const t = translations[currentLang];
      alert(t.alert_notify_success);
    });
  }
}

// Calculate Shipping Cost: 1-2 items = 30€, +5€ every 3 items (3-5: 35€, 6-8: 40€, 9-11: 45€...)
function getShippingCost(itemCount) {
  if (itemCount <= 0) return 0;
  if (itemCount <= 2) return 30;
  const additionalTiers = Math.floor((itemCount - 3) / 3) + 1;
  return 30 + (additionalTiers * 5);
}

// Copy payment requisites to clipboard
function copyRequisite(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      const msg = (translations[currentLang] && translations[currentLang].payment_copied_toast) || "Реквизиты скопированы в буфер обмена!";
      showToast(msg);
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    const msg = (translations[currentLang] && translations[currentLang].payment_copied_toast) || "Реквизиты скопированы в буфер обмена!";
    showToast(msg);
  } catch (err) {
    showToast(text);
  }
  document.body.removeChild(textArea);
}

// Save shipping form inputs to localStorage
function saveCheckoutFormData() {
  const formData = {
    country: document.getElementById('checkoutCountry')?.value || '',
    region: document.getElementById('checkoutRegion')?.value || '',
    zip: document.getElementById('checkoutZip')?.value || '',
    city: document.getElementById('checkoutCity')?.value || '',
    phone: document.getElementById('checkoutPhone')?.value || '',
    name: document.getElementById('checkoutName')?.value || '',
    email: document.getElementById('checkoutEmail')?.value || '',
    postOffice: document.getElementById('checkoutPostOffice')?.value || '',
    address: document.getElementById('checkoutAddress')?.value || ''
  };
  localStorage.setItem('r8ilt_checkout_data', JSON.stringify(formData));
}

// Restore shipping form inputs from localStorage
function restoreCheckoutFormData() {
  const raw = localStorage.getItem('r8ilt_checkout_data');
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (!data) return;

    const countryEl = document.getElementById('checkoutCountry');
    const regionEl = document.getElementById('checkoutRegion');
    const zipEl = document.getElementById('checkoutZip');
    const cityEl = document.getElementById('checkoutCity');
    const phoneEl = document.getElementById('checkoutPhone');
    const nameEl = document.getElementById('checkoutName');
    const emailEl = document.getElementById('checkoutEmail');
    const postOfficeEl = document.getElementById('checkoutPostOffice');
    const addressEl = document.getElementById('checkoutAddress');

    if (countryEl && data.country) countryEl.value = data.country;
    if (regionEl && data.region) regionEl.value = data.region;
    if (zipEl && data.zip) zipEl.value = data.zip;
    if (cityEl && data.city) cityEl.value = data.city;
    if (phoneEl && data.phone) phoneEl.value = data.phone;
    if (nameEl && data.name) nameEl.value = data.name;
    if (emailEl && data.email) emailEl.value = data.email;
    if (postOfficeEl && data.postOffice) postOfficeEl.value = data.postOffice;
    if (addressEl && data.address) addressEl.value = data.address;
  } catch (e) {
    console.error("Could not restore checkout profile from localStorage", e);
  }
}

// Populate Country Options in Select Dropdown
function populateCheckoutCountries() {
  if (!checkoutCountry) return;
  const currentVal = checkoutCountry.value;
  checkoutCountry.innerHTML = checkoutCountries.map(c => {
    const label = c[currentLang] || c.en;
    return `<option value="${c.code}" ${c.code === (currentVal || 'DE') ? 'selected' : ''}>${label}</option>`;
  }).join('');
}

// Open Checkout Modal
function openCheckoutModal() {
  if (!checkoutOverlay) return;
  const t = translations[currentLang];
  if (cart.length === 0) {
    showToast(t.alert_checkout_empty);
    return;
  }

  closeCart();
  populateCheckoutCountries();
  restoreCheckoutFormData();

  // Count items and calculate shipping + total
  const totalItemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const itemsSubtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shippingCost = getShippingCost(totalItemCount);
  const finalTotal = itemsSubtotal + shippingCost;

  if (checkoutItemsCount) {
    checkoutItemsCount.textContent = `${totalItemCount} ${currentLang === 'ru' ? 'шт.' : currentLang === 'de' ? 'Stk.' : 'pcs'}`;
  }
  if (checkoutItemsSubtotal) {
    checkoutItemsSubtotal.textContent = `${itemsSubtotal.toLocaleString()} €`;
  }
  if (checkoutShippingCost) {
    checkoutShippingCost.textContent = `${shippingCost.toLocaleString()} €`;
  }
  if (checkoutSummaryTotal) {
    checkoutSummaryTotal.textContent = `${finalTotal.toLocaleString()} €`;
  }

  if (checkoutItemsPreview) {
    checkoutItemsPreview.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      const itemName = product ? (product.names[currentLang] || product.names['en']) : item.brandName;
      const itemImg = (product && Array.isArray(product.images) && product.images.length > 0) ? product.images[0] : ((product && product.image) || item.image);
      const displaySize = product ? (product.size ? (Array.isArray(product.size) ? product.size.join('/') : product.size) : '') : '';

      return `
        <div class="checkout-mini-item">
          ${itemImg ? `<img src="${itemImg}" alt="${itemName}" class="checkout-mini-img">` : ''}
          <div class="checkout-mini-info">
            <span class="checkout-mini-name" title="${itemName}">${itemName}</span>
            <span class="checkout-mini-price">${item.price} € ${displaySize ? `(${displaySize})` : ''}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  checkoutOverlay.classList.add('active');
  document.body.classList.add('modal-open');
}

// Close Checkout Modal
function closeCheckoutModal() {
  if (checkoutOverlay) checkoutOverlay.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// HTML Escaper for Telegram HTML parse_mode
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Generate Order Number: 3 digits and 3 letters (e.g. "742-XAB")
function generateOrderNumber() {
  const digits = Math.floor(100 + Math.random() * 900); // 3 digits: 100-999
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let letters = '';
  for (let i = 0; i < 3; i++) {
    letters += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${digits}-${letters}`;
}

// Build formatted message for Telegram Bot
function buildTelegramOrderCaption(order) {
  const itemsList = order.items.map(item => {
    const p = products.find(prod => prod.id === item.id);
    const name = escapeHtml((p && p.names && (p.names['ru'] || p.names['en'])) || item.brandName);
    const size = escapeHtml(item.selectedSize || (p && p.size ? (Array.isArray(p.size) ? p.size.join('/') : p.size) : ''));
    return `• <b>${name}</b> ${size ? `(${size})` : ''} — ${item.qty} шт. × ${item.price} €`;
  }).join('\n');

  const country = escapeHtml(order.shipping.country);
  const region = escapeHtml(order.shipping.region);
  const zip = escapeHtml(order.shipping.zip);
  const city = escapeHtml(order.shipping.city);
  const postOffice = escapeHtml(order.shipping.postOffice);
  const address = escapeHtml(order.shipping.address);
  const name = escapeHtml(order.shipping.name);
  const phone = escapeHtml(order.shipping.phone);
  const email = escapeHtml(order.shipping.email);

  return `⚔️ <b>НОВЫЙ ЗАКАЗ: № ${order.orderId}</b>\n` +
         `━━━━━━━━━━━━━━━━━━━━━\n` +
         `📦 <b>СОСТАВ ЗАКАЗА:</b>\n` +
         `${itemsList}\n\n` +
         `💰 <b>ФИНАНСЫ:</b>\n` +
         `• Товары: <b>${order.subtotal} €</b>\n` +
         `• Доставка: <b>${order.shippingCost} €</b>\n` +
         `• <b>ИТОГО К ОПЛАТЕ: ${order.total} €</b>\n\n` +
         `📍 <b>ДАННЫЕ ДЛЯ ДОСТАВКИ:</b>\n` +
         `• Страна: <b>${country}</b>\n` +
         `• Регион/Штат: <b>${region}</b>\n` +
         `• Индекс: <b>${zip}</b>\n` +
         `• Город: <b>${city}</b>\n` +
         `• Отделение почты: <b>${postOffice}</b>\n` +
         `• Адрес: <b>${address}</b>\n` +
         `• Получатель: <b>${name}</b>\n` +
         `• Телефон: <b>${phone}</b>\n` +
         `• Email: <b>${email}</b>\n\n` +
         `🕒 <i>${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Kyiv' })}</i>\n` +
         `📎 <i>Квитанция об оплате прикреплена к сообщению.</i>`;
}

// Send Order + Receipt Photo to Telegram
async function sendOrderToTelegram(orderData, receiptFile) {
  const caption = buildTelegramOrderCaption(orderData);
  const formData = new FormData();
  formData.append('caption', caption);
  formData.append('parse_mode', 'HTML');

  if (receiptFile) {
    formData.append('photo', receiptFile, receiptFile.name);
  }

  // 1. Attempt Vercel Serverless Function /api/send-order
  try {
    const response = await fetch('/api/send-order', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log('[Telegram API Response]:', data);

    if (response.ok && data && (data.ok || data.success)) {
      return { success: true, data };
    } else {
      console.error('[Telegram API Error]:', data);
      if (data && data.description) {
        console.warn(`Telegram API Description: ${data.description}`);
      }
    }
  } catch (err) {
    console.warn('Vercel API /api/send-order unreachable, checking direct fallback:', err);
  }

  // 2. Direct client fallback (if window.TELEGRAM_BOT_TOKEN / window.TELEGRAM_CHAT_ID are provided)
  const clientToken = window.TELEGRAM_BOT_TOKEN || '';
  const clientChatId = window.TELEGRAM_CHAT_ID || '';

  if (clientToken && clientChatId) {
    try {
      const directFormData = new FormData();
      directFormData.append('chat_id', clientChatId.trim());
      directFormData.append('caption', caption);
      directFormData.append('parse_mode', 'HTML');
      if (receiptFile) {
        directFormData.append('photo', receiptFile, receiptFile.name);
      }

      const directRes = await fetch(`https://api.telegram.org/bot${clientToken.trim()}/sendPhoto`, {
        method: 'POST',
        body: directFormData
      });
      const directData = await directRes.json();
      console.log('[Direct Telegram Response]:', directData);
      if (directData && directData.ok) {
        return { success: true, data: directData };
      } else if (directData && directData.description) {
        console.warn(`Telegram Direct Description: ${directData.description}`);
      }
    } catch (e) {
      console.error('Direct Telegram API error:', e);
    }
  }

  return { success: false, localOnly: true };
}

// Receipt Upload Drag & Drop and Preview Handlers
function initReceiptUploadEvents() {
  if (!receiptDropzone || !receiptFileInput) return;

  receiptDropzone.addEventListener('click', (e) => {
    if (e.target.closest('#btnRemoveReceipt')) return;
    receiptFileInput.click();
  });

  if (btnBrowseReceipt) {
    btnBrowseReceipt.addEventListener('click', (e) => {
      e.stopPropagation();
      receiptFileInput.click();
    });
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    receiptDropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      receiptDropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    receiptDropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      receiptDropzone.classList.remove('dragover');
    });
  });

  receiptDropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleReceiptFile(files[0]);
    }
  });

  receiptFileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleReceiptFile(e.target.files[0]);
    }
  });

  if (btnRemoveReceipt) {
    btnRemoveReceipt.addEventListener('click', (e) => {
      e.stopPropagation();
      resetReceiptUpload();
    });
  }
}

function handleReceiptFile(file) {
  if (!file) return;
  attachedReceiptFile = file;

  if (receiptDropzone) {
    receiptDropzone.classList.remove('error-highlight');
    receiptDropzone.classList.add('has-file');
  }

  if (dropzoneEmpty) dropzoneEmpty.style.display = 'none';
  if (dropzonePreview) dropzonePreview.style.display = 'flex';

  if (previewFileName) previewFileName.textContent = file.name;
  if (previewFileSize) {
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    previewFileSize.textContent = `${sizeMb} MB`;
  }

  if (file.type.startsWith('image/')) {
    if (receiptImageThumb) {
      receiptImageThumb.src = URL.createObjectURL(file);
      receiptImageThumb.style.display = 'block';
    }
    if (receiptPdfIcon) receiptPdfIcon.style.display = 'none';
  } else {
    if (receiptImageThumb) receiptImageThumb.style.display = 'none';
    if (receiptPdfIcon) receiptPdfIcon.style.display = 'block';
  }
}

function resetReceiptUpload() {
  attachedReceiptFile = null;
  if (receiptFileInput) receiptFileInput.value = '';
  if (receiptDropzone) {
    receiptDropzone.classList.remove('has-file');
    receiptDropzone.classList.remove('error-highlight');
  }
  if (dropzoneEmpty) dropzoneEmpty.style.display = 'flex';
  if (dropzonePreview) dropzonePreview.style.display = 'none';
  if (receiptImageThumb) receiptImageThumb.src = '';
}

// Initialize Checkout & Payment Form Events
function initCheckoutEvents() {
  restoreCheckoutFormData();
  initReceiptUploadEvents();

  if (checkoutForm) {
    checkoutForm.querySelectorAll('input, select').forEach(field => {
      field.addEventListener('input', saveCheckoutFormData);
      field.addEventListener('change', saveCheckoutFormData);
    });
  }
  if (checkoutClose) {
    checkoutClose.addEventListener('click', closeCheckoutModal);
  }

  if (checkoutOverlay) {
    checkoutOverlay.addEventListener('click', (e) => {
      if (e.target === checkoutOverlay) {
        closeCheckoutModal();
      }
    });
  }

  // Payment Modal Close Handlers
  if (paymentClose) {
    paymentClose.addEventListener('click', () => {
      if (paymentOverlay) paymentOverlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  if (paymentOverlay) {
    paymentOverlay.addEventListener('click', (e) => {
      if (e.target === paymentOverlay) {
        paymentOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  }

  // Success Modal Close Handlers
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      if (orderSuccessOverlay) orderSuccessOverlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  if (orderSuccessOverlay) {
    orderSuccessOverlay.addEventListener('click', (e) => {
      if (e.target === orderSuccessOverlay) {
        orderSuccessOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (checkoutOverlay && checkoutOverlay.classList.contains('active')) {
        closeCheckoutModal();
      }
      if (paymentOverlay && paymentOverlay.classList.contains('active')) {
        paymentOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
      if (orderSuccessOverlay && orderSuccessOverlay.classList.contains('active')) {
        orderSuccessOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    }
  });

  // Step 1: Submit Details -> Open Step 2: Payment Requisites Screen
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const t = translations[currentLang];

      const country = document.getElementById('checkoutCountry')?.value?.trim();
      const region = document.getElementById('checkoutRegion')?.value?.trim();
      const zip = document.getElementById('checkoutZip')?.value?.trim();
      const city = document.getElementById('checkoutCity')?.value?.trim();
      const phone = document.getElementById('checkoutPhone')?.value?.trim();
      const name = document.getElementById('checkoutName')?.value?.trim();
      const email = document.getElementById('checkoutEmail')?.value?.trim();
      const postOffice = document.getElementById('checkoutPostOffice')?.value?.trim();
      const address = document.getElementById('checkoutAddress')?.value?.trim();

      if (!country || !region || !zip || !city || !phone || !name || !email || !postOffice || !address) {
        showToast(t.validation_error_all_fields);
        return;
      }

      // Basic Gmail validation check
      if (!email.includes('@') || !email.toLowerCase().endsWith('gmail.com')) {
        showToast(t.validation_error_gmail);
        return;
      }

      // Generate Order ID (3 digits + 3 letters: e.g. "742-XAB")
      const orderId = generateOrderNumber();

      const totalItemCount = cart.reduce((acc, item) => acc + item.qty, 0);
      const itemsSubtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
      const shippingCost = getShippingCost(totalItemCount);
      const finalTotal = itemsSubtotal + shippingCost;

      pendingOrderData = {
        orderId,
        date: new Date().toISOString(),
        items: [...cart],
        itemsCount: totalItemCount,
        subtotal: itemsSubtotal,
        shippingCost: shippingCost,
        total: finalTotal,
        shipping: {
          country,
          region,
          zip,
          city,
          phone,
          name,
          email,
          postOffice,
          address
        }
      };

      // Reset receipt upload state
      resetReceiptUpload();

      // Populate Payment Modal with exact sums & order ID
      if (paymentOrderNumber) paymentOrderNumber.textContent = `№ ${orderId}`;
      if (paymentItemsTotal) paymentItemsTotal.textContent = `${itemsSubtotal.toLocaleString()} €`;
      if (paymentShippingCost) paymentShippingCost.textContent = `${shippingCost.toLocaleString()} €`;
      if (paymentTotalToPay) paymentTotalToPay.textContent = `${finalTotal.toLocaleString()} €`;

      // Close checkout form and transition smoothly to payment requisites screen
      closeCheckoutModal();

      if (paymentOverlay) {
        paymentOverlay.classList.add('active');
        document.body.classList.add('modal-open');
      }
    });
  }

  // Step 2: Confirm Payment -> Send to Telegram -> Record Order & Open Step 3: Success Screen
  if (paymentConfirmPaidBtn) {
    paymentConfirmPaidBtn.addEventListener('click', async () => {
      const t = translations[currentLang];

      if (!attachedReceiptFile) {
        if (receiptDropzone) {
          receiptDropzone.classList.add('error-highlight');
          receiptDropzone.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showToast(t.receipt_error_required || "Пожалуйста, прикрепите скриншот или квитанцию об оплате!");
        return;
      }

      if (!pendingOrderData) return;

      // Button loading indicator
      const origBtnHtml = paymentConfirmPaidBtn.innerHTML;
      paymentConfirmPaidBtn.disabled = true;
      paymentConfirmPaidBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${t.receipt_sending || "Отправка заказа..."}</span>`;

      try {
        await sendOrderToTelegram(pendingOrderData, attachedReceiptFile);
      } catch (err) {
        console.warn('Telegram send notice:', err);
      }

      // Save order to LocalStorage
      const pastOrders = JSON.parse(localStorage.getItem('r8ilt_orders')) || [];
      pastOrders.unshift(pendingOrderData);
      localStorage.setItem('r8ilt_orders', JSON.stringify(pastOrders));

      if (successOrderNumber) {
        successOrderNumber.textContent = `№ ${pendingOrderData.orderId}`;
      }

      // Clear cart
      cart = [];
      saveCart();
      updateCartUI();

      // Reset button state & receipt
      paymentConfirmPaidBtn.disabled = false;
      paymentConfirmPaidBtn.innerHTML = origBtnHtml;
      resetReceiptUpload();

      // Close payment modal & open final success screen
      if (paymentOverlay) paymentOverlay.classList.remove('active');

      if (orderSuccessOverlay) {
        orderSuccessOverlay.classList.add('active');
        document.body.classList.add('modal-open');
      }

      if (checkoutForm) checkoutForm.reset();
      pendingOrderData = null;
    });
  }
}


// Toast Feedback
let toastTimeout;
function showToast(message) {
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Quick View Modal Logic
function initQuickViewEvents() {
  if (quickViewClose) {
    quickViewClose.addEventListener('click', closeQuickView);
  }
  if (quickViewOverlay) {
    quickViewOverlay.addEventListener('click', (e) => {
      if (e.target === quickViewOverlay) closeQuickView();
    });
  }
}

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !quickViewBody) return;

  const t = translations[currentLang];
  const pName = product.names[currentLang] || product.names['en'];
  const pCategory = product.categoryNames[currentLang] || product.categoryNames['en'];
  const pDesc = product.descriptions[currentLang] || product.descriptions['en'];

  const displaySize = product.size ? (Array.isArray(product.size) ? product.size.join(', ') : product.size) : (product.sizes ? (Array.isArray(product.sizes) ? product.sizes.join(', ') : product.sizes) : null);

  quickViewBody.innerHTML = `
    <div class="modal-product-layout">
      ${product.image ? `
        <div class="hero-image-frame" style="height: 320px; width: 100%; overflow: hidden; padding: 0; background: #070204; border-radius: 8px;">
          <img src="${product.image}" alt="${pName}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
        </div>
      ` : `
        <div class="hero-image-frame" style="height: 320px; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <span class="cross-accent" style="font-size: 3.5rem; color: var(--color-crimson);">${product.rune}</span>
          <span class="mockup-gothic gothic-title" style="font-size: 1.5rem; text-align: center; color: #fff;">${product.brandName}</span>
          <span style="color: var(--color-bright-red); font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.2em; margin-top: 6px;">${t.original_label}</span>
        </div>
      `}

      <div class="modal-info">
        <h2 class="gothic-text" style="font-size: 1.35rem; color: #fff; margin-bottom: 8px;">${pName}</h2>
        <p style="color: var(--color-bright-red); font-size: 1.4rem; font-weight: 700; margin-bottom: 16px;">
          ${product.price.toLocaleString()} ${product.currency}
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px;">
          ${pDesc}
        </p>

        ${displaySize ? `
        <div style="margin-bottom: 20px;">
          <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">${t.size_in_stock || 'Размер в наличии:'}</div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="quickview-size-badge">${displaySize}</span>
          </div>
        </div>
        ` : ''}

        <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeQuickView();">
          <i class="fa-solid fa-bag-shopping"></i> ${t.add_to_cart}
        </button>
      </div>
    </div>
  `;

  if (quickViewOverlay) {
    quickViewOverlay.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeQuickView() {
  if (quickViewOverlay) {
    quickViewOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

// Customer Reviews Infinite Carousel Logic
function initReviewsCarousel() {
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewsPrev');
  const nextBtn = document.getElementById('reviewsNext');
  if (!track || !prevBtn || !nextBtn) return;

  const originalCards = Array.from(track.querySelectorAll('.client-photo-card'));
  if (originalCards.length === 0) return;

  // Duplicate cards before and after in EXACT sequence
  const firstCard = track.firstElementChild;
  originalCards.forEach(card => {
    const cloneBefore = card.cloneNode(true);
    cloneBefore.classList.add('clone-card');
    track.insertBefore(cloneBefore, firstCard);

    const cloneAfter = card.cloneNode(true);
    cloneAfter.classList.add('clone-card');
    track.appendChild(cloneAfter);
  });

  const getCardWidthWithGap = () => {
    const card = track.querySelector('.client-photo-card');
    if (!card) return 320;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 20;
    return card.offsetWidth + gap;
  };

  const getSingleSetWidth = () => originalCards.length * getCardWidthWithGap();

  // Position at the start of the middle (original) set
  const initPosition = () => {
    const setW = getSingleSetWidth();
    if (setW > 0) {
      track.scrollLeft = setW;
    }
  };

  // Run on load and whenever images finish rendering
  requestAnimationFrame(initPosition);
  setTimeout(initPosition, 100);
  window.addEventListener('resize', initPosition);

  // Seamless infinite loop wrap check on scroll
  let isWrapping = false;
  track.addEventListener('scroll', () => {
    if (isWrapping) return;
    const setW = getSingleSetWidth();
    if (setW <= 0) return;

    if (track.scrollLeft >= setW * 2) {
      isWrapping = true;
      track.scrollLeft -= setW;
      isWrapping = false;
    } else if (track.scrollLeft <= 10) {
      isWrapping = true;
      track.scrollLeft += setW;
      isWrapping = false;
    }
  });

  const getScrollStep = () => {
    const cardW = getCardWidthWithGap();
    const count = window.innerWidth < 768 ? 1 : 3;
    return cardW * count;
  };

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  });

  // Mouse drag-to-scroll support for PC
  let isDown = false;
  let startX;
  let scrollLeft;
  let dragMoved = false;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    dragMoved = false;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 6) {
      dragMoved = true;
      e.preventDefault();
      track.scrollLeft = scrollLeft - walk;
    }
  });
}

// Fullscreen Image Lightbox Functions
function openLightbox(src) {
  const photoLightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (!photoLightbox || !lightboxImg) return;
  lightboxImg.src = src;
  photoLightbox.classList.add('active');
  document.body.classList.add('lightbox-open');
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  const photoLightbox = document.getElementById('photoLightbox');
  if (!photoLightbox) return;
  photoLightbox.classList.remove('active');
  document.body.classList.remove('lightbox-open');
  document.body.classList.remove('modal-open');
}

// Customer Review & Product Photo Fullscreen Lightbox Modal
function initLightboxEvents() {
  const photoLightbox = document.getElementById('photoLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const track = document.getElementById('reviewsTrack');
  if (!photoLightbox) return;

  if (track) {
    track.addEventListener('click', (e) => {
      const card = e.target.closest('.client-photo-card');
      if (card) {
        const img = card.querySelector('img');
        if (img && img.src) {
          openLightbox(img.src);
        }
      }
    });
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoLightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Render & Initialize Single Product Page (product.html)
function initSingleProductPage() {
  const singleProductContainer = document.getElementById('singleProductContainer');
  if (!singleProductContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id')) || 1;
  const product = products.find(p => p.id === productId) || products[0];

  const t = translations[currentLang] || translations['ru'];
  const pName = product.names[currentLang] || product.names['en'];
  const pDesc = product.descriptions[currentLang] || product.descriptions['en'];
  const pBadgeText = product.badgeTexts[currentLang] || product.badgeTexts['en'];
  const displaySize = product.size ? (Array.isArray(product.size) ? product.size.join(', ') : product.size) : (product.sizes ? (Array.isArray(product.sizes) ? product.sizes.join(', ') : product.sizes) : null);
  const brandDisplayName = (product.brand === 'beloyar') ? (currentLang === 'ru' ? 'Белояр' : 'Beloyar') : product.brandName;

  // Update page title and breadcrumb
  document.title = `${pName} | R8ILT SHOP`;
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  if (breadcrumbTitle) breadcrumbTitle.textContent = pName;

  const productImages = (Array.isArray(product.images) && product.images.length > 0)
    ? product.images
    : (product.image ? [product.image] : []);

  singleProductContainer.innerHTML = `
    <div class="single-product-layout">
      <!-- Media Frame -->
      <div class="single-product-media">
        <div class="single-product-media-main">
          ${productImages.length > 0 ? `
            <img src="${productImages[0]}" alt="${pName}" id="singleMainImg" class="single-product-img">
          ` : `
            <div class="product-mock-art">
              <span class="mock-rune" style="font-size: 5.5rem;">${product.rune}</span>
              <span class="mock-label" style="font-size: 1.25rem; margin-top: 14px;">${brandDisplayName}</span>
            </div>
          `}
        </div>

        ${productImages.length > 1 ? `
          <div class="single-product-thumbs" id="singleThumbs">
            ${productImages.slice(0, 4).map((imgUrl, index) => `
              <button type="button" class="product-thumb-item ${index === 0 ? 'active' : ''}" data-src="${imgUrl}" aria-label="Фото ${index + 1}">
                <img src="${imgUrl}" alt="${pName} - Фото ${index + 1}">
              </button>
            `).join('')}
          </div>
        ` : (productImages.length === 0 ? `
          <div class="single-product-thumbs" id="singleThumbs">
            ${[0, 1, 2, 3].map((idx) => `
              <div class="product-thumb-item thumb-empty">
                <span class="thumb-slot-number">${idx + 1}</span>
                <i class="fa-solid fa-camera thumb-empty-icon"></i>
              </div>
            `).join('')}
          </div>
        ` : '')}
      </div>

      <!-- Info Column -->
      <div class="single-product-info">
        <h1 class="single-product-title">${pName}</h1>

        <div class="single-product-price-box">
          <span class="single-product-price">${product.price.toLocaleString()} ${product.currency}</span>
          ${product.oldPrice ? `<span class="single-product-price-old">${product.oldPrice.toLocaleString()} ${product.currency}</span>` : ''}
        </div>

        ${displaySize ? `
        <div class="single-product-size-section">
          <div class="single-size-label">${t.size_in_stock || 'Размер в наличии:'}</div>
          <span class="single-size-badge">${displaySize}</span>
        </div>
        ` : ''}

        <div class="single-product-actions">
          <button class="btn btn-primary" id="singleAddToCartBtn">
            <i class="fa-solid fa-bag-shopping"></i> ${t.add_to_cart || 'В корзину'}
          </button>
        </div>

        <div class="single-product-desc">
          <p>${pDesc}</p>
        </div>

        <div class="single-product-features">
          <div class="feature-item">
            <i class="fa-solid fa-shield-halved"></i>
            <span>${t.feature_original || '100% Оригинал'}</span>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-truck-fast"></i>
            <span>${t.feature_shipping || 'Быстрая отправка'}</span>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-rotate-left"></i>
            <span>${t.feature_returns || 'Обмен и возврат'}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Click on main photo to open in fullscreen lightbox
  const singleMainImg = document.getElementById('singleMainImg');
  if (singleMainImg) {
    singleMainImg.style.cursor = 'zoom-in';
    singleMainImg.addEventListener('click', () => {
      openLightbox(singleMainImg.src);
    });
  }

  // Attach gallery thumbnail click handlers
  const thumbBtns = singleProductContainer.querySelectorAll('.product-thumb-item');
  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (singleMainImg) {
        singleMainImg.style.opacity = '0.3';
        setTimeout(() => {
          singleMainImg.src = btn.dataset.src;
          singleMainImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // Attach Add-to-Cart event
  const singleAddToCartBtn = document.getElementById('singleAddToCartBtn');
  if (singleAddToCartBtn) {
    singleAddToCartBtn.addEventListener('click', () => {
      addToCart(product.id);
    });
  }
}
