// ==================== CONFIGURATION ====================
const WHATSAPP_NUMBER = "2250586554087";   // Un seul numéro pour tout le site
const CART_KEY = "solidarite_cart";        // Clé propre à ce site

// ==================== TARIFS (À MODIFIER ICI) ====================
// Les prix se changent uniquement dans ce bloc, ils s'appliquent à toute la catégorie.
//   price        = prix de base
//   coffretPrice = prix avec coffret (si la catégorie propose un coffret)
//   duoPrice     = prix de 2 articles achetés ensemble (offre duo)
const PRICES = {
    bagues:    { price: 1000 },
    bracelets: { price: 3000, duoPrice: 5000 },     // 1 bracelet = 3 000 F, 2 bracelets = 5 000 F
    montres:   { price: 3500, coffretPrice: 5000 }, // sans coffret 3 500 F, avec coffret 5 000 F
    chaines:   { price: 2000, coffretPrice: 3000 }  // sans coffret 2 000 F, avec coffret 3 000 F
};

// ==================== AJOUTER UN PRODUIT ====================
// 1. Mets la photo dans le dossier img/
// 2. Ajoute UNE ligne à la fin de la liste ci-dessous :
//        p("Nom du produit", "catégorie", "nom-du-fichier.jpg"),
//    Catégories : "montres", "chaines", "bagues", "bracelets"
//
// ARTICLE INDISPONIBLE : ajoute  , false  à la fin de la ligne :
//        p("Nom du produit", "catégorie", "nom-du-fichier.jpg", false),
//    Il reste visible avec la mention "Indisponible" et ne peut plus être commandé.
//    Quand il revient en stock, retire simplement  , false
//
// Le nom du fichier sert d'identifiant : chaque photo doit avoir un nom unique.
const p = (name, category, file, available = true) => ({
    id: file,
    name,
    category,
    image: `img/${file}`,
    available
});

const products = [
    // MONTRES
    p("Montre Dorée Élégance", "montres", "IMG-20260616-WA0020.jpg"),
    p("Montre Dorée", "montres", "IMG-20260616-WA0021.jpg"),
    p("Montre Dorée Massif", "montres", "IMG-20260616-WA0022.jpg"),
    p("Montre Zircon Dorée", "montres", "IMG-20260616-WA0023.jpg"),
    p("Montre Dorée", "montres", "IMG-20260616-WA0024.jpg"),
    p("Montre Dorée", "montres", "IMG-20260616-WA0025.jpg"),
    p("Montre Dorée & Perles Noires", "montres", "IMG-20260616-WA0026.jpg"),
    p("Montre Diamantée", "montres", "IMG-20260616-WA0027.jpg"),
    // BAGUES
    p("Bague avec Perles Rose & Violette", "bagues", "IMG-20260616-WA0028.jpg"),
    p("Bague en Acier & Perle", "bagues", "IMG-20260616-WA0029.jpg"),
    p("Bague en Acier & Perles", "bagues", "IMG-20260616-WA0030.jpg"),
    // MONTRES
    p("Montre Dorée", "montres", "IMG-20260616-WA0031.jpg"),
    p("Montre", "montres", "IMG-20260616-WA0032.jpg"),
    // CHAÎNES
    p("Chaîne Dorée & Diamantée", "chaines", "IMG-20260616-WA0033.jpg"),
    p("Chaîne Dorée", "chaines", "IMG-20260616-WA0034.jpg"),
    // BAGUES
    p("Bague Dorée", "bagues", "IMG-20260616-WA0035.jpg"),
    p("Bague en Acier & Perle", "bagues", "IMG-20260616-WA0036.jpg"),
    // CHAÎNES
    p("Chaîne Diamantée", "chaines", "IMG-20260616-WA0037.jpg"),
    p("Chaîne Dorée", "chaines", "IMG-20260616-WA0038.jpg"),
    p("Chaîne en Argent", "chaines", "IMG-20260616-WA0039.jpg"),
    p("Chaîne Dorée & Diamantée", "chaines", "IMG-20260616-WA0040.jpg"),
    p("Chaîne Dorée", "chaines", "IMG-20260616-WA0041.jpg"),
    // BAGUES
    p("Bague en Perle Dorée & Diamants", "bagues", "IMG-20260616-WA0042.jpg"),
    p("Chaîne Dorée", "chaines", "IMG-20260616-WA0043.jpg"),
    p("Bague Dorée & Perle Noire", "bagues", "IMG-20260616-WA0044.jpg"),
    // CHAÎNES
    p("Chaîne Dorée", "chaines", "IMG-20260616-WA0045.jpg"),
    // BAGUES
    p("Bague en Acier Dorée & Perle Rose", "bagues", "IMG-20260616-WA0046.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0047.jpg"),
    p("Bague Dorée & Perle Blanche", "bagues", "IMG-20260616-WA0048.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0049.jpg"),
    p("Bague Dorée & Détail Diamanté", "bagues", "IMG-20260616-WA0050.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0051.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0052.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0053.jpg"),
    p("Bague Dorée Détail Diamanté", "bagues", "IMG-20260616-WA0054.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0055.jpg"),
    p("Bague Triple Rangs Perles", "bagues", "IMG-20260616-WA0056.jpg"),
    p("Bague Dorée avec Zircon", "bagues", "IMG-20260616-WA0057.jpg"),
    p("Bague Cocktail Perles", "bagues", "IMG-20260616-WA0058.jpg"),
    p("Bague Gourmette Dorée", "bagues", "IMG-20260616-WA0059.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0060.jpg"),
    p("Bague Dorée", "bagues", "IMG-20260616-WA0061.jpg")
    // ➜ AJOUTE TES NOUVEAUX PRODUITS ICI (n'oublie pas la virgule à la fin de la ligne précédente)
];

const productsById = Object.fromEntries(products.map(item => [item.id, item]));

// Alerte dans la console si deux produits ont le même nom de fichier
if (Object.keys(productsById).length !== products.length) {
    console.warn("SOLIDARITE : deux produits utilisent le même nom de fichier image.");
}

// ==================== OUTILS PRIX ====================
function formatPrice(value) {
    return value.toLocaleString("fr-FR") + " FCFA";
}

function shortPrice(value) {
    return value.toLocaleString("fr-FR") + " F";
}

function hasCoffret(product) {
    return Boolean(PRICES[product.category] && PRICES[product.category].coffretPrice);
}

function unitPrice(product, coffret) {
    const tarif = PRICES[product.category];
    return coffret && tarif.coffretPrice ? tarif.coffretPrice : tarif.price;
}

// ==================== PANIER ====================
// Chaque entrée : { product, coffret }. On ne stocke que l'identifiant et le choix du coffret :
// les noms et prix viennent toujours de la liste ci-dessus.
let cart = loadCart();

function loadCart() {
    try {
        const raw = JSON.parse(localStorage.getItem(CART_KEY)) || [];
        return raw
            .map(entry => {
                const id = typeof entry === "string" ? entry : entry && entry.id;
                const product = productsById[id];
                if (!product || !product.available) return null;
                return {
                    product,
                    coffret: Boolean(entry && entry.coffret) && hasCoffret(product)
                };
            })
            .filter(Boolean);
    } catch (e) {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem(
            CART_KEY,
            JSON.stringify(cart.map(e => ({ id: e.product.id, coffret: e.coffret })))
        );
    } catch (e) {
        // Stockage indisponible : le panier fonctionne quand même pendant la session
    }
    updateCartUI();
}

function computeTotals() {
    let subtotal = 0;
    let bracelets = 0;

    cart.forEach(e => {
        subtotal += unitPrice(e.product, e.coffret);
        if (e.product.category === "bracelets") bracelets++;
    });

    // Offre duo : chaque paire de bracelets est facturée au prix duo
    const tarif = PRICES.bracelets;
    const pairs = tarif && tarif.duoPrice ? Math.floor(bracelets / 2) : 0;
    const discount = tarif && tarif.duoPrice ? pairs * (2 * tarif.price - tarif.duoPrice) : 0;

    return { subtotal, discount, total: subtotal - discount, pairs };
}

function optionLabel(entry) {
    if (!hasCoffret(entry.product)) return "";
    return entry.coffret ? "avec coffret" : "sans coffret";
}

function buildWhatsappLink() {
    if (cart.length === 0) {
        return `https://wa.me/${WHATSAPP_NUMBER}`;
    }

    const { discount, total } = computeTotals();

    const lines = cart.map((e, index) => {
        const option = optionLabel(e);
        return `${index + 1}. ${e.product.name}${option ? " (" + option + ")" : ""} - ${formatPrice(unitPrice(e.product, e.coffret))}`;
    });

    let message =
        "Bonjour SOLIDARITE, je souhaite commander :\n\n" +
        lines.join("\n");

    if (discount > 0) {
        message += `\n\nOffre 2 bracelets : -${formatPrice(discount)}`;
    }

    message +=
        `\n\nTotal : ${formatPrice(total)}` +
        "\n\nMerci de me confirmer la disponibilité et la livraison.";

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateCartUI() {
    document.getElementById("cart-count").textContent = cart.length;

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartActions = document.getElementById("cart-actions");

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Aucun article sélectionné</p>
            </div>
        `;
        cartTotal.style.display = "none";
        cartActions.style.display = "none";
    } else {
        const { discount, total } = computeTotals();

        cartItems.innerHTML = cart.map(e => {
            const option = optionLabel(e);
            return `
                <div class="cart-item">
                    <img src="${e.product.image}" alt="${e.product.name}">
                    <div class="cart-item-info">
                        <h4>${e.product.name}</h4>
                        ${option ? `<span class="cart-item-option">${option}</span>` : ""}
                        <p>${formatPrice(unitPrice(e.product, e.coffret))}</p>
                    </div>
                    <button
                        class="btn btn-outline cart-remove"
                        data-id="${e.product.id}"
                        style="padding: 8px 15px; font-size: 0.8rem;"
                        aria-label="Retirer ${e.product.name}"
                    >
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join("") + (discount > 0
            ? `<div class="cart-discount"><span>Offre 2 bracelets</span><span>-${formatPrice(discount)}</span></div>`
            : "");

        document.getElementById("total-amount").textContent = formatPrice(total);

        cartTotal.style.display = "block";
        cartActions.style.display = "flex";
    }

    document.getElementById("whatsapp-order").href = buildWhatsappLink();

    // Synchronise toutes les cartes produits (prix, coffret, case cochée)
    document.querySelectorAll(".product-card").forEach(refreshCard);
}

// ==================== AJOUTER / SUPPRIMER / VIDER ====================
function addToCart(productId, coffret = false) {
    const product = productsById[productId];
    if (product && product.available && !cart.some(e => e.product.id === productId)) {
        cart.push({ product, coffret: coffret && hasCoffret(product) });
        saveCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(e => e.product.id !== productId);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

// ==================== AFFICHAGE DES PRODUITS ====================
// Met à jour une carte (prix affiché, choix du coffret, case cochée) selon l'état du panier
function refreshCard(card) {
    const product = productsById[card.dataset.id];
    if (!product) return;

    const entry = cart.find(e => e.product.id === product.id);
    const coffret = entry ? entry.coffret : card.dataset.coffret === "1";
    card.dataset.coffret = coffret ? "1" : "0";

    card.querySelector(".price").textContent = formatPrice(unitPrice(product, coffret));

    card.querySelectorAll(".coffret-btn").forEach(btn => {
        const isActive = (btn.dataset.coffret === "1") === coffret;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive);
    });

    if (product.available) {
        card.querySelector(".commande-box input").checked = Boolean(entry);
        card.querySelector(".commande-box").classList.toggle("checked", Boolean(entry));
    }
}

function displayProducts(filter = "all") {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered =
        filter === "all"
            ? products
            : products.filter(product => product.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <p style="text-align:center; grid-column:1/-1; color:#999;">
                Aucun article dans cette catégorie pour le moment.
            </p>
        `;
        return;
    }

    filtered.forEach((product, index) => {
        const tarif = PRICES[product.category];
        const card = document.createElement("div");
        card.className = "product-card" + (product.available ? "" : " indisponible");
        card.style.animationDelay = `${index * 0.05}s`;
        card.dataset.id = product.id;
        card.dataset.coffret = "0";

        card.innerHTML = `
            <div class="img-container">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-img"
                    loading="lazy"
                >
                ${product.available ? "" : '<span class="badge-indispo">Indisponible</span>'}
                <div class="img-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price"></p>
                ${hasCoffret(product) ? `
                <div class="coffret-choice" role="group" aria-label="Choix du coffret">
                    <button type="button" class="coffret-btn active" data-coffret="0" aria-pressed="true">
                        <span class="coffret-label"><i class="fas fa-box-open"></i> Sans coffret</span>
                        <span class="coffret-price">${shortPrice(unitPrice(product, false))}</span>
                    </button>
                    <button type="button" class="coffret-btn" data-coffret="1" aria-pressed="false">
                        <span class="coffret-label"><i class="fas fa-gift"></i> Avec coffret</span>
                        <span class="coffret-price">${shortPrice(unitPrice(product, true))}</span>
                    </button>
                </div>` : ""}
                ${product.category === "bracelets" && tarif.duoPrice
                    ? `<p class="promo-note">2 bracelets = ${formatPrice(tarif.duoPrice)}</p>`
                    : ""}
                ${product.available
                    ? `<div class="commande-box">
                           <input type="checkbox" data-id="${product.id}">
                           <label>Ajouter à ma commande</label>
                       </div>`
                    : `<div class="commande-box disabled">Indisponible</div>`}
            </div>
        `;

        // Agrandissement de la photo (le clic se fait sur le conteneur, car l'overlay recouvre l'image)
        card.querySelector(".img-container").addEventListener("click", () => {
            const lightbox = document.getElementById("lightbox");
            lightbox.querySelector("img").src = product.image;
            lightbox.classList.add("active");
        });

        // Choix avec / sans coffret
        card.querySelectorAll(".coffret-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const wantsCoffret = btn.dataset.coffret === "1";
                const entry = cart.find(e => e.product.id === product.id);

                if (entry) {
                    entry.coffret = wantsCoffret;
                    saveCart();
                } else {
                    card.dataset.coffret = wantsCoffret ? "1" : "0";
                    refreshCard(card);
                }
            });
        });

        // Case "Ajouter à ma commande"
        if (product.available) {
            const box = card.querySelector(".commande-box");
            const checkbox = box.querySelector("input");

            const applyToggle = () => {
                if (checkbox.checked) {
                    addToCart(product.id, card.dataset.coffret === "1");
                } else {
                    removeFromCart(product.id);
                }
            };

            box.addEventListener("click", () => {
                checkbox.checked = !checkbox.checked;
                applyToggle();
            });

            checkbox.addEventListener("click", (e) => {
                e.stopPropagation();
                applyToggle();
            });
        }

        refreshCard(card);
        grid.appendChild(card);
    });
}

// Masque automatiquement les catégories qui n'ont encore aucun produit
function hideEmptyCategories() {
    const used = new Set(products.map(item => item.category));

    document.querySelectorAll(".cat-card").forEach(el => {
        el.style.display = used.has(el.dataset.category) ? "" : "none";
    });

    document.querySelectorAll(".filter-btn").forEach(el => {
        if (el.dataset.filter !== "all") {
            el.style.display = used.has(el.dataset.filter) ? "" : "none";
        }
    });
}

// ==================== FILTRES ====================
function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(button => button.classList.remove("active"));
            btn.classList.add("active");
            displayProducts(btn.dataset.filter);
        });
    });

    document.querySelectorAll(".cat-card").forEach(card => {
        card.addEventListener("click", () => {
            const category = card.dataset.category;

            buttons.forEach(button => button.classList.remove("active"));

            const targetBtn = document.querySelector(
                `.filter-btn[data-filter="${category}"]`
            );

            if (targetBtn) {
                targetBtn.classList.add("active");
                displayProducts(category);
                document
                    .getElementById("produits")
                    .scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// ==================== MENU MOBILE ====================
function setupMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

// ==================== LIGHTBOX ====================
function setupLightbox() {
    const lightbox = document.getElementById("lightbox");

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
}

// ==================== PANIER MODAL ====================
function setupCart() {
    const cartFloat = document.getElementById("cart-float");
    const cartModal = document.getElementById("cart-modal");
    const cartClose = document.getElementById("cart-close");
    const clearBtn = document.getElementById("clear-cart");
    const cartItems = document.getElementById("cart-items");

    cartFloat.addEventListener("click", () => {
        cartModal.classList.add("active");
    });

    cartClose.addEventListener("click", () => {
        cartModal.classList.remove("active");
    });

    cartModal.addEventListener("click", (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove("active");
        }
    });

    clearBtn.addEventListener("click", () => {
        clearCart();
    });

    // Bouton corbeille de chaque article du panier
    cartItems.addEventListener("click", (e) => {
        const btn = e.target.closest(".cart-remove");
        if (btn) {
            removeFromCart(btn.dataset.id);
        }
    });
}

// ==================== ANIMATIONS SCROLL ====================
function setupScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach(el => {
        observer.observe(el);
    });
}

// ==================== HEADER SCROLL ====================
function setupHeaderScroll() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        header.style.padding = window.pageYOffset > 100 ? "0" : "";
    });
}

// ==================== INITIALISATION ====================
document.addEventListener("DOMContentLoaded", () => {
    hideEmptyCategories();
    displayProducts();
    setupFilters();
    setupMenu();
    setupLightbox();
    setupCart();
    setupScrollAnimations();
    setupHeaderScroll();
    updateCartUI();
});
