// ==================== BASE DE DONNÉES DES PRODUITS ====================
        const products = [
            {
                id: 1,
                name: "Montre Dorée Élégance",
                category: "montres",
                price: 145000,
                image: "image/IMG-20260616-WA0020.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Dorée Élégance"
            },
            {
                id: 2,
                name: "Bracelet en Perles & Or",
                category: "bracelets",
                price: 85000,
                image: "image/IMG-20260616-WA0021.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet en Perles & Or"
            },
            {
                id: 3,
                name: "Chaîne en Or Massif",
                category: "chaines",
                price: 320000,
                image: "image/IMG-20260616-WA0022.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Chaîne Dorée Massif"
            },
            {
                id: 4,
                name: "Bague Zircon Dorée",
                category: "bagues",
                price: 65000,
                image: "image/IMG-20260616-WA0023.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Zircon Dorée"
            },
            {
                id: 5,
                name: "Montre Noire Minimaliste",
                category: "montres",
                price: 195000,
                image: "image/IMG-20260616-WA0024.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Noire Minimaliste"
            },
            {
                id: 6,
                name: "Collier Pendentif Cœur",
                category: "colliers",
                price: 120000,
                image: "image/IMG-20260616-WA0025.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Pendentif Cœur"
            },
            {
                id: 7,
                name: "Bracelet Cuir & Acier",
                category: "bracelets",
                price: 95000,
                image: "image/IMG-20260616-WA0026.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet Cuir & Acier"
            },
            {
                id: 8,
                name: "Ensemble Chaîne + Bracelet",
                category: "chaines",
                price: 280000,
                image: "image/IMG-20260616-WA0027.jpg",
                whatsappText: "Bonjour, je suis intéressé par l'ensemble Chaîne + Bracelet"
            },
            {
                id: 9,
                name: "Bague en Argent & Onyx",
                category: "bagues",
                price: 75000,
                image: "image/IMG-20260616-WA0028.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague en Argent & Onyx"
            },
            {
                id: 10,
                name: "Montre Classique en Acier",
                category: "montres",
                price: 155000,
                image: "image/IMG-20260616-WA0029.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Classique en Acier"
            },
            {
                id: 11,
                name: "Collier Ras du Cou en Perles",
                category: "colliers",
                price: 130000,
                image: "image/IMG-20260616-WA0030.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Ras du Cou en Perles"
            },
            {
                id: 12,
                name: "Bracelet en Or Rose & Diamants",
                category: "bracelets",
                price: 210000,
                image: "image/IMG-20260616-WA0031.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet en Or Rose"
            },
            {
                id: 13,
                name: "Chaîne en Argent Massif",
                category: "chaines",
                price: 250000,
                image: "image/IMG-20260616-WA0032.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Chaîne en Argent Massif"
            },
            {
                id: 14,
                name: "Bague en Or Jaune & Saphir",
                category: "bagues",
                price: 180000,
                image: "image/IMG-20260616-WA0033.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Saphir"
            },
            {
                id: 15,
                name: "Montre Sportive en Silicone",
                category: "montres",
                price: 120000,
                image: "image/IMG-20260616-WA0034.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Sportive en Silicone"
            },
            {
                id: 16,
                name: "Collier Long en Perles & Or",
                category: "colliers",
                price: 140000,
                image: "image/IMG-20260616-WA0035.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Long en Perles"
            },
            {
                id: 17,
                name: "Bracelet en Acier & Cuir Tressé",
                category: "bracelets",
                price: 100000,
                image: "image/IMG-20260616-WA0036.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet en Acier & Cuir Tressé"
            },
            {
                id: 18,
                name: "Montre Électrochrome en Titanium",
                category: "montres",
                price: 200000,
                image: "image/IMG-20260616-WA0037.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Électrochrome en Titanium"
            },
            {
                id: 19,
                name: "Collier Pendentif Lune & Étoiles",
                category: "colliers",
                price: 160000,
                image: "image/IMG-20260616-WA0038.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Pendentif Lune & Étoiles"
            },
            {
                id: 20,
                name: "Bague en Or Blanc & Rubis",
                category: "bagues",
                price: 190000,
                image: "image/IMG-20260616-WA0039.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Rubis"
            },
            {
                id: 21,
                name: "Montre Automatique en Acier",
                category: "montres",
                price: 180000,
                image: "image/IMG-20260616-WA0040.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Automatique en Acier"
            },
            {
                id: 22,
                name: "Collier Ras du Cou en Cuir & Argent",
                category: "colliers",
                price: 150000,
                image: "image/IMG-20260616-WA0041.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Ras du Cou en Cuir & Argent"
            },
            {
                id: 23,
                name: "Bague en Or Rose & Diamants",
                category: "bagues",
                price: 210000,
                image: "image/IMG-20260616-WA0042.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Rose"
            },
            {
                id: 24,
                name: "Montre à Quartz en Acier",
                category: "montres",
                price: 160000,
                image: "image/IMG-20260616-WA0043.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre à Quartz en Acier"
            },
            {
                id: 25,
                name: "Collier Pendentif Fleur en Or",
                category: "colliers",
                price: 170000,
                image: "image/IMG-20260616-WA0044.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Pendentif Fleur"
            },
            {
                id: 26,
                name: "Bague Cocktail en Or Blanc",
                category: "bagues",
                price: 230000,
                image: "image/IMG-20260616-WA0045.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Cocktail"
            },
            {
                id: 27,
                name: "Montre Chronographe en Acier",
                category: "montres",
                price: 175000,
                image: "image/IMG-20260616-WA0046.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Chronographe en Acier"
            },
            {
                id: 28,
                name: "Bracelet Manchette en Cuir",
                category: "bracelets",
                price: 90000,
                image: "image/IMG-20260616-WA0047.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet Manchette en Cuir"
            },
            {
                id: 29,
                name: "Collier Choker en Argent",
                category: "colliers",
                price: 145000,
                image: "image/IMG-20260616-WA0048.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Choker en Argent"
            },
            {
                id: 30,
                name: "Chaîne Fine en Or Jaune",
                category: "chaines",
                price: 260000,
                image: "image/IMG-20260616-WA0049.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Chaîne Fine "
            },
            {
                id: 31,
                name: "Collier Triple Chaîne en Or",
                category: "colliers",
                price: 175000,
                image: "image/IMG-20260616-WA0050.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Triple Chaîne"
            },
            {
                id: 32,
                name: "Bracelet Jonc en Argent",
                category: "bracelets",
                price: 85000,
                image: "image/IMG-20260616-WA0051.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet Jonc en Argent"
            },
            {
                id: 33,
                name: "Montre Classique en Cuir",
                category: "montres",
                price: 165000,
                image: "image/IMG-20260616-WA0052.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Classique en Cuir"
            },
            {
                id: 34,
                name: "Bague Empreinte en Or",
                category: "bagues",
                price: 145000,
                image: "image/IMG-20260616-WA0053.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Empreinte"
            },
            {
                id: 35,
                name: "Chaîne Sautoir en Argent",
                category: "chaines",
                price: 210000,
                image: "image/IMG-20260616-WA0054.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Chaîne Sautoir en Argent"
            },
            {
                id: 36,
                name: "Collier Médaille en Or Rose",
                category: "colliers",
                price: 155000,
                image: "image/IMG-20260616-WA0055.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Médaille "
            },
            {
                id: 37,
                name: "Bracelet Triple Rangs Perles",
                category: "bracelets",
                price: 115000,
                image: "image/IMG-20260616-WA0056.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet Triple Rangs Perles"
            },
            {
                id: 38,
                name: "Montre Luxe Chrono",
                category: "montres",
                price: 225000,
                image: "image/IMG-20260616-WA0057.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Montre Luxe Chrono"
            },
            {
                id: 39,
                name: "Bague Cocktail Perles",
                category: "bagues",
                price: 195000,
                image: "image/IMG-20260616-WA0058.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Bague Cocktail Perles"
            },
            {
                id: 40,
                name: "Chaîne Gourmette en Or",
                category: "chaines",
                price: 240000,
                image: "image/IMG-20260616-WA0059.jpg",
                whatsappText: "Bonjour, je suis intéressé par la Chaîne Gourmette"
            },
            {
                id: 41,
                name: "Collier Ras du Cou en Or",
                category: "colliers",
                price: 165000,
                image: "image/IMG-20260616-WA0060.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Collier Ras du Cou"
            },
            {
                id: 42,
                name: "Bracelet Cuir & Or",
                category: "bracelets",
                price: 135000,
                image: "image/IMG-20260616-WA0061.jpg",
                whatsappText: "Bonjour, je suis intéressé par le Bracelet en Cuir"
            },
        ];

        // ==================== PANIER ====================
        let cart = JSON.parse(localStorage.getItem('yunouss_cart')) || [];

        function saveCart() {
            localStorage.setItem('yunouss_cart', JSON.stringify(cart));
            updateCartUI();
        }

        function updateCartUI() {
            const count = document.getElementById('cart-count');
            count.textContent = cart.length;

            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            const cartActions = document.getElementById('cart-actions');

            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Aucun article sélectionné</p>
                    </div>
                `;
                cartTotal.style.display = 'none';
                cartActions.style.display = 'none';
            } else {
                let total = 0;
                cartItems.innerHTML = cart.map(item => {
                    total += item.price;
                    return `
                        <div class="cart-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-item-info">
                                <h4>${item.name}</h4>
                                <p>${item.price.toLocaleString('fr-FR')} FCFA</p>
                            </div>
                            <button class="btn btn-outline" onclick="removeFromCart(${item.id})" style="padding: 8px 15px; font-size: 0.8rem;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                }).join('');

                document.getElementById('total-amount').textContent = total.toLocaleString('fr-FR') + ' FCFA';
                cartTotal.style.display = 'block';
                cartActions.style.display = 'flex';

                // Mettre à jour le lien WhatsApp avec tous les articles
                const whatsappText = cart.map(item => item.whatsappText).join('\n');
                document.getElementById('whatsapp-order').href = 
                    `https://wa.me/2250717194578?text=${encodeURIComponent(whatsappText)}`;
            }

            // Mettre à jour les cases cochées
            document.querySelectorAll('.commande-box input').forEach(cb => {
                const productId = parseInt(cb.dataset.id);
                cb.checked = cart.some(item => item.id === productId);
                const box = cb.closest('.commande-box');
                if (cb.checked) {
                    box.classList.add('checked');
                } else {
                    box.classList.remove('checked');
                }
            });
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product && !cart.some(item => item.id === productId)) {
                cart.push(product);
                saveCart();
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
        }

        function clearCart() {
            cart = [];
            saveCart();
        }

        // ==================== AFFICHAGE DES PRODUITS ====================
        function displayProducts(filter = 'all') {
            const grid = document.getElementById('products-grid');
            if (!grid) return;

            grid.innerHTML = '';

            const filtered = filter === 'all' 
                ? products 
                : products.filter(p => p.category === filter);

            filtered.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.style.animationDelay = `${index * 0.05}s`;

                const isInCart = cart.some(item => item.id === product.id);

                card.innerHTML = `
                    <div class="img-container">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        <div class="img-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price.toLocaleString('fr-FR')} FCFA</p>
                        <div class="commande-box ${isInCart ? 'checked' : ''}" onclick="toggleCommande(this, ${product.id})">
                            <input type="checkbox" data-id="${product.id}" ${isInCart ? 'checked' : ''} onclick="event.stopPropagation()">
                            <label>Commandé</label>
                        </div>
                    </div>
                `;

                // Clic sur l'image pour agrandir
                const img = card.querySelector('.product-img');
                img.addEventListener('click', () => {
                    const lightbox = document.getElementById('lightbox');
                    const lightboxImg = lightbox.querySelector('img');
                    lightboxImg.src = product.image;
                    lightbox.classList.add('active');
                });

                grid.appendChild(card);
            });
        }

        function toggleCommande(box, productId) {
            const checkbox = box.querySelector('input');
            checkbox.checked = !checkbox.checked;

            if (checkbox.checked) {
                box.classList.add('checked');
                addToCart(productId);
            } else {
                box.classList.remove('checked');
                removeFromCart(productId);
            }
        }

        // ==================== FILTRES ====================
        function setupFilters() {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    displayProducts(btn.dataset.filter);
                });
            });

            // Filtres depuis les catégories
            document.querySelectorAll('.cat-card').forEach(card => {
                card.addEventListener('click', () => {
                    const category = card.dataset.category;
                    buttons.forEach(b => b.classList.remove('active'));
                    const targetBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
                    if (targetBtn) {
                        targetBtn.classList.add('active');
                        displayProducts(category);
                        document.getElementById('produits').scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        // ==================== MENU MOBILE ====================
        function setupMenu() {
            const toggle = document.getElementById('menu-toggle');
            const menu = document.getElementById('nav-menu');

            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });

            // Fermer le menu au clic sur un lien
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                });
            });
        }

        // ==================== LIGHTBOX ====================
        function setupLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }

        // ==================== PANIER MODAL ====================
        function setupCart() {
            const cartFloat = document.getElementById('cart-float');
            const cartModal = document.getElementById('cart-modal');
            const cartClose = document.getElementById('cart-close');
            const clearBtn = document.getElementById('clear-cart');

            cartFloat.addEventListener('click', () => {
                cartModal.classList.add('active');
            });

            cartClose.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });

            cartModal.addEventListener('click', (e) => {
                if (e.target === cartModal) {
                    cartModal.classList.remove('active');
                }
            });

            clearBtn.addEventListener('click', () => {
                clearCart();
            });
        }

        // ==================== ANIMATIONS SCROLL ====================
        function setupScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // ==================== HEADER SCROLL ====================
        function setupHeaderScroll() {
            const header = document.querySelector('header');
            let lastScroll = 0;

            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 100) {
                    header.style.padding = '0';
                } else {
                    header.style.padding = '';
                }

                lastScroll = currentScroll;
            });
        }

        // ==================== INITIALISATION ====================
        document.addEventListener('DOMContentLoaded', () => {
            displayProducts();
            setupFilters();
            setupMenu();
            setupLightbox();
            setupCart();
            setupScrollAnimations();
            setupHeaderScroll();
            updateCartUI();
        });
