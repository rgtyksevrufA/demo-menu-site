
/* ================================================
   MAISON — RESTAURANT MENU DATA
   ================================================ */

const dishes = [

    // STARTERS

    {
        id: 1,
        name: "Burrata & Peaches",
        category: "starters",
        ingredients: "Fresh burrata, ripe peaches, basil, olive oil, sourdough.",
        price: 12,
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 2,
        name: "Beef Tartare",
        category: "starters",
        ingredients: "Hand-cut beef, capers, shallots, Dijon mustard, egg yolk, toasted bread.",
        price: 15,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 3,
        name: "Roasted Tomato Soup",
        category: "starters",
        ingredients: "Roasted tomatoes, garlic, vegetable stock, basil, cream.",
        price: 9,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 4,
        name: "Garlic Prawns",
        category: "starters",
        ingredients: "King prawns, garlic, parsley, lemon, butter, toasted bread.",
        price: 14,
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1000&q=85"
    },

    // MAIN COURSES

    {
        id: 5,
        name: "Wild Mushroom Pappardelle",
        category: "mains",
        ingredients: "Fresh pappardelle, wild mushrooms, parmesan, thyme, cream.",
        price: 19,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1100&q=85"
    },

    {
        id: 6,
        name: "Maison Beef Burger",
        category: "mains",
        ingredients: "Beef patty, cheddar, brioche bun, caramelised onion, lettuce, house sauce.",
        price: 18,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 7,
        name: "Grilled Sea Bass",
        category: "mains",
        ingredients: "Sea bass fillet, lemon potatoes, fennel, parsley, olive oil.",
        price: 24,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 8,
        name: "Roasted Chicken",
        category: "mains",
        ingredients: "Chicken breast, mashed potatoes, seasonal vegetables, butter sauce.",
        price: 20,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 9,
        name: "Margherita Pizza",
        category: "mains",
        ingredients: "Tomato sauce, mozzarella, fresh basil, extra virgin olive oil.",
        price: 14,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85"
    },

    // DESSERTS

    {
        id: 10,
        name: "Chocolate Mousse",
        category: "desserts",
        ingredients: "Dark chocolate, cream, eggs, cocoa powder, sea salt.",
        price: 9,
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 11,
        name: "Lemon Tart",
        category: "desserts",
        ingredients: "Lemon curd, butter pastry, eggs, fresh cream, lemon zest.",
        price: 8,
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 12,
        name: "Vanilla Panna Cotta",
        category: "desserts",
        ingredients: "Vanilla, cream, milk, sugar, seasonal berries.",
        price: 8,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85"
    },

    // DRINKS

    {
        id: 13,
        name: "Fresh Lemonade",
        category: "drinks",
        ingredients: "Fresh lemons, mint, sparkling water, cane sugar.",
        price: 5,
        image: "https://images.unsplash.com/photo-1656936637945-571e3f0893f9?auto=format&fit=crop&fm=jpg&q=85&w=1000"
    },

    {
        id: 14,
        name: "Iced Coffee",
        category: "drinks",
        ingredients: "Double espresso, milk, ice.",
        price: 5,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 15,
        name: "Blood Orange Soda",
        category: "drinks",
        ingredients: "Blood orange, fresh lemon, sparkling water.",
        price: 6,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=85"
    }
];


/* ================================================
   CATEGORIES
   ================================================ */

const categories = [
    { id: "all", name: "Full Menu" },
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" }
];

const categoryTitles = {
    starters: "Starters",
    mains: "Main Courses",
    desserts: "Desserts",
    drinks: "Drinks"
};

const themeTitles = {
    atelier: "Seasonal Selection",
    market: "From Our Kitchen",
    midnight: "Dinner Menu",
    trattoria: "La Nostra Cucina"
};


/* ================================================
   WEBSITE STATE
   ================================================ */

let activeTheme = "atelier";
let activeCategory = "all";
let searchTerm = "";


/* ================================================
   HTML ELEMENTS
   ================================================ */

const siteHeader = document.getElementById("siteHeader");
const categoryNav = document.getElementById("categoryNav");
const menuContent = document.getElementById("menuContent");
const menuSearch = document.getElementById("menuSearch");
const clearSearch = document.getElementById("clearSearch");


/* ================================================
   FILTER THE MENU
   ================================================ */

function getVisibleDishes() {

    return dishes.filter(dish => {

        const matchesCategory =
            activeCategory === "all" ||
            dish.category === activeCategory;

        const searchableText = [
            dish.name,
            dish.ingredients,
            dish.category
        ].join(" ").toLowerCase();

        const matchesSearch =
            searchableText.includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;

    });

}


/* ================================================
   HEADER LAYOUTS
   ================================================ */

function renderHeader() {

    const headerLayouts = {

        atelier: `
            <div class="header-inner">

                <div class="brand-row">
                    <div class="brand">MAISON<span>.</span></div>
                    <div class="header-note">RESTAURANT & WINE BAR</div>
                </div>

                <div class="atelier-hero">

                    <div>
                        <div class="hero-kicker">
                            A TABLE WORTH GATHERING AROUND
                        </div>

                        <h1 class="hero-title">
                            Good things<br>take <em>time.</em>
                        </h1>

                        <p class="hero-description">
                            Thoughtfully prepared dishes using seasonal
                            ingredients and produce from local suppliers.
                        </p>

                        <div class="atelier-note">
                            FRESH INGREDIENTS · MADE WITH CARE
                        </div>
                    </div>

                    <div class="atelier-photo">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                            alt="Restaurant interior"
                        >
                        <span class="atelier-photo-caption">
                            Welcome to Maison
                        </span>
                    </div>

                </div>
            </div>
        `,

        market: `
            <div class="header-inner">

                <div class="brand-row">
                    <div class="brand">MAISON<span>.</span></div>
                    <div class="header-note">RESTAURANT & WINE BAR</div>
                </div>

                <div class="market-hero">

                    <div class="market-hero-copy">
                        <div class="hero-kicker">COOKED FRESH EVERY DAY</div>

                        <h1 class="hero-title">
                            From our<br>kitchen.
                        </h1>

                        <p class="hero-description">
                            Simple ingredients, honest cooking and
                            a menu made for everyone at the table.
                        </p>
                    </div>

                    <div class="market-photo">
                        <img
                            class="hero-image"
                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                            alt="Restaurant dining table"
                        >
                    </div>

                </div>
            </div>
        `,

        midnight: `
            <div class="header-inner">

                <div class="brand-row">
                    <div class="brand">MAISON<span>.</span></div>
                    <div class="header-note">RESTAURANT & WINE BAR</div>
                </div>

                <div class="midnight-hero">

                    <img
    src="https://images.unsplash.com/photo-1777270695079-2ee60686f60e?auto=format&fit=crop&fm=jpg&q=85&w=1800"
    alt="Elegant restaurant interior"
>

                    <div class="midnight-hero-copy">

                        <div class="hero-kicker">
                            THE EVENING MENU
                        </div>

                        <h1 class="hero-title">
                            Stay for<br><em>dinner.</em>
                        </h1>

                        <p class="hero-description">
                            A selection of carefully prepared dishes
                            and fresh seasonal ingredients.
                        </p>

                    </div>

                </div>
            </div>
        `,

        trattoria: `
            <div class="header-inner">

                <div class="trattoria-brand">

                    <div class="brand">MAISON<span>.</span></div>

                    <span class="header-note">
                        CUCINA · VINO · OSPITALITÀ
                    </span>

                </div>

                <div class="trattoria-hero">

                    <img
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85"
                        alt="Italian restaurant interior"
                    >

                    <div class="trattoria-hero-label">
                        Benvenuti a tavola
                    </div>

                </div>

            </div>
        `
    };

    siteHeader.innerHTML = headerLayouts[activeTheme];

}


/* ================================================
   CATEGORY NAVIGATION
   ================================================ */

function renderCategories() {

    categoryNav.innerHTML = categories.map(category => `

        <button
            class="category-button ${
                activeCategory === category.id ? "is-active" : ""
            }"
            data-category="${category.id}"
            aria-pressed="${activeCategory === category.id}"
        >
            ${category.name}
        </button>

    `).join("");

}


/* ================================================
   MENU HEADING
   ================================================ */

function renderHeading(count) {

    const categoryName =
        activeCategory === "all"
            ? "Full Menu"
            : categoryTitles[activeCategory];

    return `

        <div class="menu-heading">

            <div class="menu-eyebrow">
                ${themeTitles[activeTheme]}
            </div>

            <h2>${categoryName}</h2>

            <p>
                ${count} ${count === 1 ? "item" : "items"}
                · Prices in EUR
            </p>

        </div>

    `;

}


/* ================================================
   ATELIER DISH CARD
   ================================================ */

function atelierCard(dish, feature = false) {

    return `

        <article class="dish-card ${feature ? "dish-card--feature" : ""}">

            <div class="dish-photo">

                <img
                    src="${dish.image}"
                    alt="${dish.name}"
                    loading="lazy"
                >

            </div>

            <div class="dish-info">

                <div class="dish-topline">
                    <h3 class="dish-name">${dish.name}</h3>
                    <span class="dish-price">€${dish.price.toFixed(2)}</span>
                </div>

                <p class="dish-ingredients">
                    ${dish.ingredients}
                </p>

            </div>

        </article>

    `;

}


/* ================================================
   MARKET DISH ROW
   ================================================ */

function marketRow(dish) {

    return `

        <article class="market-row">

            <img
                src="${dish.image}"
                alt="${dish.name}"
                loading="lazy"
            >

            <div class="dish-info">

                <h3 class="dish-name">${dish.name}</h3>

                <p class="dish-ingredients">
                    ${dish.ingredients}
                </p>

            </div>

            <span class="dish-price">
                €${dish.price.toFixed(2)}
            </span>

        </article>

    `;

}


/* ================================================
   MIDNIGHT DISH CARD
   ================================================ */

function midnightCard(dish) {

    return `

        <article class="dish-card">

            <div class="dish-photo">
                <img
                    src="${dish.image}"
                    alt="${dish.name}"
                    loading="lazy"
                >
            </div>

            <div class="dish-info">

                <div class="dish-topline">
                    <h3 class="dish-name">${dish.name}</h3>
                    <span class="dish-price">
                        €${dish.price.toFixed(2)}
                    </span>
                </div>

                <p class="dish-ingredients">
                    ${dish.ingredients}
                </p>

            </div>

        </article>

    `;

}


/* ================================================
   TRATTORIA DISH ROW
   ================================================ */

function trattoriaRow(dish) {

    return `

        <article class="trattoria-row">

            <div class="trattoria-dish-line">

                <h3 class="trattoria-dish-name">
                    ${dish.name}
                </h3>

                <span class="trattoria-dish-price">
                    €${dish.price.toFixed(2)}
                </span>

            </div>

            <p class="trattoria-ingredients">
                ${dish.ingredients}
            </p>

        </article>

    `;

}


/* ================================================
   ATELIER LAYOUT
   ================================================ */

function renderAtelier(visible) {

    const [featured, ...remaining] = visible;

    return `

        <div class="layout-atelier">

            ${renderHeading(visible.length)}

            <div class="dish-grid">

                ${atelierCard(featured, true)}

                ${remaining.map(dish =>
                    atelierCard(dish)
                ).join("")}

            </div>

        </div>

    `;

}


/* ================================================
   MARKET LAYOUT
   Group dishes by category
   ================================================ */

function renderMarket(visible) {

    const groupNames = {
        starters: "Starters",
        mains: "Main Courses",
        desserts: "Desserts",
        drinks: "Drinks"
    };

    const groups = activeCategory === "all"
        ? ["starters", "mains", "desserts", "drinks"]
        : [activeCategory];

    const groupMarkup = groups.map(group => {

        const groupDishes = visible.filter(
            dish => dish.category === group
        );

        if (!groupDishes.length) return "";

        return `

            <section class="market-group">

                <h3 class="market-group-title">
                    ${groupNames[group]}
                </h3>

                ${groupDishes.map(marketRow).join("")}

            </section>

        `;

    }).join("");

    return `

        <div class="layout-market">

            ${renderHeading(visible.length)}

            <div class="market-board">
                ${groupMarkup}
            </div>

        </div>

    `;

}


/* ================================================
   MIDNIGHT LAYOUT
   ================================================ */

function renderMidnight(visible) {

    return `

        <div class="layout-midnight">

            ${renderHeading(visible.length)}

            <div class="dish-grid">

                ${visible.map(midnightCard).join("")}

            </div>

        </div>

    `;

}


/* ================================================
   TRATTORIA LAYOUT
   Traditional printed menu composition
   ================================================ */

function renderTrattoria(visible) {

    const groups = activeCategory === "all"
        ? ["starters", "mains", "desserts", "drinks"]
        : [activeCategory];

    const markup = groups.map(group => {

        const groupDishes = visible.filter(
            dish => dish.category === group
        );

        if (!groupDishes.length) return "";

        return `

            <section class="trattoria-section">

                <h3 class="trattoria-section-title">
                    ${categoryTitles[group]}
                </h3>

                ${groupDishes.map(trattoriaRow).join("")}

            </section>

        `;

    }).join("");

    return `

        <div class="layout-trattoria">

            ${renderHeading(visible.length)}

            <div class="trattoria-board">
                ${markup}
            </div>

        </div>

    `;

}


/* ================================================
   MAIN MENU RENDERER
   ================================================ */

function renderMenu() {

    const visible = getVisibleDishes();

    const layouts = {
        atelier: renderAtelier,
        market: renderMarket,
        midnight: renderMidnight,
        trattoria: renderTrattoria
    };

    if (visible.length === 0) {

        menuContent.innerHTML = `

            <div class="empty-state">
                No dishes found. Try another search.
            </div>

        `;

        return;
    }

    menuContent.innerHTML = layouts[activeTheme](visible);

}


/* ================================================
   THEME SWITCHING
   ================================================ */

function setTheme(theme) {

    activeTheme = theme;

    document.body.dataset.theme = theme;

    document.querySelectorAll(".theme-button").forEach(button => {

        const active = button.dataset.theme === theme;

        button.classList.toggle("is-active", active);

        button.setAttribute("aria-pressed", String(active));

    });

    renderHeader();
    renderMenu();

}


/* ================================================
   THEME BUTTON EVENTS
   ================================================ */

document.querySelectorAll(".theme-button").forEach(button => {

    button.addEventListener("click", () => {

        setTheme(button.dataset.theme);

    });

});


/* ================================================
   CATEGORY BUTTON EVENTS
   ================================================ */

categoryNav.addEventListener("click", event => {

    const button = event.target.closest("[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category;

    renderCategories();
    renderMenu();

});


/* ================================================
   SEARCH
   ================================================ */

menuSearch.addEventListener("input", event => {

    searchTerm = event.target.value.trim();

    clearSearch.style.display = searchTerm ? "block" : "none";

    renderMenu();

});


/* ================================================
   CLEAR SEARCH
   ================================================ */

clearSearch.addEventListener("click", () => {

    menuSearch.value = "";
    searchTerm = "";

    clearSearch.style.display = "none";

    renderMenu();
    menuSearch.focus();

});


/* ================================================
   KEYBOARD SHORTCUTS
   ================================================ */

document.addEventListener("keydown", event => {

    if (
        event.key === "/" &&
        document.activeElement !== menuSearch
    ) {

        event.preventDefault();
        menuSearch.focus();

    }

    if (event.key === "Escape") {

        menuSearch.value = "";
        searchTerm = "";

        clearSearch.style.display = "none";

        renderMenu();
        menuSearch.blur();

    }

});


/* ================================================
   INITIALIZE
   ================================================ */

renderHeader();
renderCategories();
renderMenu();
