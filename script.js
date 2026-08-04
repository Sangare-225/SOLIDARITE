// ==================== BASE DE DONNÉES DES PRODUITS ====================

const products = [

    // ==================== MONTRES ====================

    {
        id: 1,
        name: "Montre Dorée Élégance",
        category: "montres",
        price: 3500,
        image: "IMG/IMG-20260616-WA0020.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée Élégance"
    },

    {
        id: 2,
        name: "Montre Dorée",
        category: "montres",
        price: 3000,
        image: "IMG/IMG-20260616-WA0021.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée"
    },

    {
        id: 3,
        name: "Montre Dorée Massif",
        category: "montres",
        price: 2000,
        image: "IMG/IMG-20260616-WA0022.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée Massif"
    },

    {
        id: 4,
        name: "Montre Zircon Dorée",
        category: "montres",
        price: 1500,
        image: "IMG/IMG-20260616-WA0023.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Zircon Dorée"
    },

    {
        id: 5,
        name: "Montre Dorée",
        category: "montres",
        price: 3500,
        image: "IMG/IMG-20260616-WA0024.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée"
    },

    {
        id: 6,
        name: "Montre Dorée",
        category: "montres",
        price: 2000,
        image: "IMG/IMG-20260616-WA0025.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée"
    },

    {
        id: 7,
        name: "Montre Dorée & Perles Noires",
        category: "montres",
        price: 3000,
        image: "IMG/IMG-20260616-WA0026.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée & Perles Noires"
    },

    {
        id: 8,
        name: "Montre Diamantée",
        category: "montres",
        price: 2000,
        image: "IMG/IMG-20260616-WA0027.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Diamantée"
    },


    // ==================== BAGUES ====================

    {
        id: 9,
        name: "Bague avec Perles Rose & Violette",
        category: "bagues",
        price: 1500,
        image: "IMG/IMG-20260616-WA0028.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague avec Perles Rose & Violette"
    },

    {
        id: 10,
        name: "Bague en Acier & Perle",
        category: "bagues",
        price: 3500,
        image: "IMG/IMG-20260616-WA0029.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague en Acier & Perle"
    },

    {
        id: 11,
        name: "Bague en Acier & Perles",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0030.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague en Acier & Perles"
    },


    // ==================== MONTRES ====================

    {
        id: 12,
        name: "Montre Dorée",
        category: "montres",
        price: 3000,
        image: "IMG/IMG-20260616-WA0031.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre Dorée"
    },

    {
        id: 13,
        name: "Montre",
        category: "montres",
        price: 2000,
        image: "IMG/IMG-20260616-WA0032.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Montre"
    },


    // ==================== CHAÎNES ====================

    {
        id: 14,
        name: "Chaîne Dorée & Diamantée",
        category: "chaines",
        price: 1500,
        image: "IMG/IMG-20260616-WA0033.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée & Diamantée"
    },

    {
        id: 15,
        name: "Chaîne Dorée",
        category: "chaines",
        price: 3500,
        image: "IMG/IMG-20260616-WA0034.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée"
    },


    // ==================== BAGUES ====================

    {
        id: 16,
        name: "Bague Dorée",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0035.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 17,
        name: "Bague en Acier & Perle",
        category: "bagues",
        price: 3000,
        image: "IMG/IMG-20260616-WA0036.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague en Acier & Perle"
    },


    // ==================== CHAÎNES ====================

    {
        id: 18,
        name: "Chaîne Diamantée",
        category: "chaines",
        price: 3500,
        image: "IMG/IMG-20260616-WA0037.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Diamantée"
    },

    {
        id: 19,
        name: "Chaîne Dorée",
        category: "chaines",
        price: 2000,
        image: "IMG/IMG-20260616-WA0038.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée"
    },

    {
        id: 20,
        name: "Chaîne en Argent",
        category: "chaines",
        price: 1500,
        image: "IMG/IMG-20260616-WA0039.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne en Argent"
    },

    {
        id: 21,
        name: "Chaîne Dorée & Diamantée",
        category: "chaines",
        price: 3500,
        image: "IMG/IMG-20260616-WA0040.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée & Diamantée"
    },

    {
        id: 22,
        name: "Chaîne Dorée",
        category: "chaines",
        price: 2000,
        image: "IMG/IMG-20260616-WA0041.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée"
    },


    // ==================== BAGUES ====================

    {
        id: 23,
        name: "Bague en Perle Dorée & Diamants",
        category: "bagues",
        price: 1500,
        image: "IMG/IMG-20260616-WA0042.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague en Perle Dorée & Diamants"
    },

    {
        id: 24,
        name: "Chaîne Dorée",
        category: "chaines",
        price: 3500,
        image: "IMG/IMG-20260616-WA0043.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée"
    },

    {
        id: 25,
        name: "Bague Dorée & Perle Noire",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0044.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée & Perle Noire"
    },


    // ==================== CHAÎNES ====================

    {
        id: 26,
        name: "Chaîne Dorée",
        category: "chaines",
        price: 1500,
        image: "IMG/IMG-20260616-WA0045.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée"
    },


    // ==================== BAGUES ====================

    {
        id: 27,
        name: "Bague en Acier Dorée & Perle Rose",
        category: "bagues",
        price: 3500,
        image: "IMG/IMG-20260616-WA0046.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague en Acier Dorée & Perle Rose"
    },

    {
        id: 28,
        name: "Bague Dorée",
        category: "bagues",
        price: 3000,
        image: "IMG/IMG-20260616-WA0047.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 29,
        name: "Bague Dorée & Perle Blanche",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0048.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée & Perle Blanche"
    },

    {
        id: 30,
        name: "Bague Dorée",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0049.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 31,
        name: "Bague Dorée & Détail Diamanté",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0050.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée & Détail Diamanté"
    },

    {
        id: 32,
        name: "Bague Dorée",
        category: "bagues",
        price: 3000,
        image: "IMG/IMG-20260616-WA0051.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 33,
        name: "Bague Dorée",
        category: "bagues",
        price: 3500,
        image: "IMG/IMG-20260616-WA0052.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 34,
        name: "Bague Dorée",
        category: "bagues",
        price: 1500,
        image: "IMG/IMG-20260616-WA0053.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 35,
        name: "Bague Dorée Détail Diamanté",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0054.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée Détail Diamanté"
    },

    {
        id: 36,
        name: "Bague Dorée",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0055.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 37,
        name: "Bague Triple Rangs Perles",
        category: "bagues",
        price: 3000,
        image: "IMG/IMG-20260616-WA0056.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Triple Rangs Perles"
    },

    {
        id: 38,
        name: "Bague Dorée avec Zircon",
        category: "bagues",
        price: 3500,
        image: "IMG/IMG-20260616-WA0057.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée avec Zircon"
    },

    {
        id: 39,
        name: "Bague Cocktail Perles",
        category: "bagues",
        price: 1500,
        image: "IMG/IMG-20260616-WA0058.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Cocktail Perles"
    },

    {
        id: 40,
        name: "Bague Gourmette Dorée",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0059.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Gourmette Dorée"
    },

    {
        id: 41,
        name: "Bague Dorée",
        category: "bagues",
        price: 2000,
        image: "IMG/IMG-20260616-WA0060.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    },

    {
        id: 42,
        name: "Bague Dorée",
        category: "bagues",
        price: 3000,
        image: "IMG/IMG-20260616-WA0061.jpg",
        whatsappText: "Bonjour, je suis intéressé par la Bague Dorée"
    }
];


// ==================== PANIER ====================

let cart = JSON.parse(localStorage.getItem("yunouss_cart")) || [];

function saveCart() {
    localStorage.setItem("yunouss_cart", JSON.stringify(cart));
    updateCartUI();
}


function updateCartUI() {

    const count = document.getElementById("cart-count");
    count.textContent = cart.length;

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

        let total = 0;

        cartItems.innerHTML = cart.map(item => {

            total += item.price;

            return `
                <div class="cart-item">

                    <img 
                        src="${item.image}" 
                        alt="${item.name}"
                    >

                    <div class="cart-item-info">

                        <h4>${item.name}</h4>

                        <p>
                            ${item.price.toLocaleString("fr-FR")} FCFA
                        </p>

                    </div>

                    <button 
                        class="btn btn-outline"
                        onclick="removeFromCart(${item.id})"
                        style="padding: 8px 15px; font-size: 0.8rem;"
                    >
                        <i class="fas fa-trash"></i>
                    </button>

                </div>
            `;

        }).join("");


        document.getElementById("total-amount").textContent =
            total.toLocaleString("fr-FR") + " FCFA";

        cartTotal.style.display = "block";
        cartActions.style.display = "flex";


        const whatsappText = cart
            .map(item => item.whatsappText)
            .join("\n");


        document.getElementById("whatsapp-order").href =
            `https://wa.me/2250717194578?text=${encodeURIComponent(whatsappText)}`;
    }


    document.querySelectorAll(".commande-box input").forEach(cb => {

        const productId = parseInt(cb.dataset.id);

        cb.checked = cart.some(
            item => item.id === productId
        );

        const box = cb.closest(".commande-box");

        if (cb.checked) {

            box.classList.add("checked");

        } else {

            box.classList.remove("checked");

        }

    });
}


// ==================== AJOUTER AU PANIER ====================

function addToCart(productId) {

    const product = products.find(
        product => product.id === productId
    );

    if (
        product &&
        !cart.some(item => item.id === productId)
    ) {

        cart.push(product);

        saveCart();
    }
}


// ==================== SUPPRIMER DU PANIER ====================

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();
}


// ==================== VIDER LE PANIER ====================

function clearCart() {

    cart = [];

    saveCart();
}


// ==================== AFFICHAGE DES PRODUITS ====================

function displayProducts(filter = "all") {

    const grid = document.getElementById("products-grid");

    if (!grid) return;

    grid.innerHTML = "";


    const filtered =
        filter === "all"
            ? products
            : products.filter(
                product => product.category === filter
            );


    if (filtered.length === 0) {

        grid.innerHTML = `
            <p style="
                text-align:center;
                grid-column:1/-1;
                color:#999;
            ">
                Aucun article dans cette catégorie pour le moment.
            </p>
        `;

        return;
    }


    filtered.forEach((product, index) => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.style.animationDelay =
            `${index * 0.05}s`;


        const isInCart =
            cart.some(item => item.id === product.id);


        card.innerHTML = `

            <div class="img-container">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-img"
                >

                <div class="img-overlay">

                    <i class="fas fa-search-plus"></i>

                </div>

            </div>


            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                    ${product.price.toLocaleString("fr-FR")} FCFA
                </p>


                <div
                    class="commande-box ${isInCart ? "checked" : ""}"
                    onclick="toggleCommande(this, ${product.id})"
                >

                    <input
                        type="checkbox"
                        data-id="${product.id}"
                        ${isInCart ? "checked" : ""}
                        onclick="event.stopPropagation()"
                    >

                    <label>Commandé</label>

                </div>

            </div>

        `;


        const img =
            card.querySelector(".product-img");


        img.addEventListener("click", () => {

            const lightbox =
                document.getElementById("lightbox");

            const lightboxImg =
                lightbox.querySelector("img");


            lightboxImg.src =
                product.image;


            lightbox.classList.add("active");

        });


        grid.appendChild(card);

    });
}


// ==================== COMMANDE ====================

function toggleCommande(box, productId) {

    const checkbox =
        box.querySelector("input");


    checkbox.checked =
        !checkbox.checked;


    if (checkbox.checked) {

        box.classList.add("checked");

        addToCart(productId);

    } else {

        box.classList.remove("checked");

        removeFromCart(productId);

    }
}


// ==================== FILTRES ====================

function setupFilters() {

    const buttons =
        document.querySelectorAll(".filter-btn");


    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            buttons.forEach(button =>
                button.classList.remove("active")
            );


            btn.classList.add("active");


            displayProducts(
                btn.dataset.filter
            );

        });

    });


    document
        .querySelectorAll(".cat-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const category =
                    card.dataset.category;


                buttons.forEach(button =>
                    button.classList.remove("active")
                );


                const targetBtn =
                    document.querySelector(
                        `.filter-btn[data-filter="${category}"]`
                    );


                if (targetBtn) {

                    targetBtn.classList.add("active");

                    displayProducts(category);


                    document
                        .getElementById("produits")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }

            });

        });

}


// ==================== MENU MOBILE ====================

function setupMenu() {

    const toggle =
        document.getElementById("menu-toggle");

    const menu =
        document.getElementById("nav-menu");


    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });


    menu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

            });

        });

}


// ==================== LIGHTBOX ====================

function setupLightbox() {

    const lightbox =
        document.getElementById("lightbox");


    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}


// ==================== PANIER MODAL ====================

function setupCart() {

    const cartFloat =
        document.getElementById("cart-float");

    const cartModal =
        document.getElementById("cart-modal");

    const cartClose =
        document.getElementById("cart-close");

    const clearBtn =
        document.getElementById("clear-cart");


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

}


// ==================== ANIMATIONS SCROLL ====================

function setupScrollAnimations() {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    document
        .querySelectorAll(".fade-in")
        .forEach(el => {

            observer.observe(el);

        });

}


// ==================== HEADER SCROLL ====================

function setupHeaderScroll() {

    const header =
        document.querySelector("header");


    let lastScroll = 0;


    window.addEventListener("scroll", () => {

        const currentScroll =
            window.pageYOffset;


        if (currentScroll > 100) {

            header.style.padding = "0";

        } else {

            header.style.padding = "";

        }


        lastScroll = currentScroll;

    });

}


// ==================== INITIALISATION ====================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        displayProducts();

        setupFilters();

        setupMenu();

        setupLightbox();

        setupCart();

        setupScrollAnimations();

        setupHeaderScroll();

        updateCartUI();

    }
);
