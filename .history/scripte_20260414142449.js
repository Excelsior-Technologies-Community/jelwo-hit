// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
    });
}

// Product data for New jewelrys
const newJewelryProducts = [
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-6.jpg?v=1742445682',
        badge: '25%',
        title: 'Simple Pear earrings',
        price: 'Rs.15.00',
        oldPrice: 'Rs.20.00',
        tags: ['18k-75', 'earring', 'best-seller'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-56.jpg?v=1742445682',
        badge: '45%',
        title: 'Chic diamond ring',
        price: 'From Rs.22.00',
        oldPrice: 'Rs.40.00',
        tags: ['22k-917', 'diamond', 'best-seller'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-51.jpg?v=1742445682',
        badge: '64%',
        title: 'Gemstone jhumkas',
        price: 'Rs.18.00',
        oldPrice: 'Rs.50.00',
        tags: ['24k-999', 'earring', 'diamond'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-46.jpg?v=1742445682',
        badge: '68%',
        title: 'Drop gold earrings',
        price: 'From Rs.14.00',
        oldPrice: 'Rs.44.00',
        tags: ['18k-75', 'gold', 'earring', 'best-seller'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-41.jpg?v=1742445682',
        badge: '56%',
        title: 'Gemstone chain bracelet',
        price: 'From Rs.17.00',
        oldPrice: 'Rs.39.00',
        tags: ['22k-917', 'chain', 'bracelets', 'diamond'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-36.jpg?v=1742445682',
        badge: null,
        title: 'Cluster diamond ring',
        price: 'From Rs.12.00',
        oldPrice: null,
        tags: ['24k-999', 'diamond'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-31.jpg?v=1742445682',
        badge: null,
        title: 'Flora diamond bangle',
        price: 'Rs.28.00',
        oldPrice: null,
        tags: ['18k-75', 'bangles', 'diamond'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-26.jpg?v=1742445682',
        badge: null,
        title: 'Glitter diamond ring',
        price: 'From Rs.10.00',
        oldPrice: null,
        tags: ['22k-917', 'diamond'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-1.jpg?v=1742445682',
        badge: '13%',
        title: 'Cluster diamond ring',
        price: 'Rs.26.00',
        oldPrice: 'Rs.30.00',
        tags: ['24k-999', 'diamond', 'best-seller'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-21.jpg?v=1742445682',
        badge: null,
        title: 'Gold nose pin',
        price: 'Rs.12.00',
        oldPrice: null,
        tags: ['18k-75', 'gold', 'brooch'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-16.jpg?v=1742445682',
        badge: '20%',
        title: 'Blossom diamond bangle',
        price: 'Rs.28.00',
        oldPrice: 'Rs.35.00',
        tags: ['22k-917', 'bangles', 'diamond'],
    },
    {
        img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-46.jpg?v=1742445682',
        badge: null,
        title: 'Framed gold pendant',
        price: 'Rs.22.00',
        oldPrice: null,
        tags: ['24k-999', 'gold', 'chain'],
    },
];

// Product data for Trending
const trendingProducts = [
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-6.jpg?v=1742445682', badge: '25%', title: 'Simple Pear earrings', price: 'Rs.15.00', oldPrice: 'Rs.20.00' },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-56.jpg?v=1742445682', badge: '45%', title: 'Chic diamond ring', price: 'From Rs.22.00', oldPrice: 'Rs.40.00' },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-51.jpg?v=1742445682', badge: '64%', title: 'Gemstone jhumkas', price: 'Rs.18.00', oldPrice: 'Rs.50.00' },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-46.jpg?v=1742445682', badge: '68%', title: 'Drop gold earrings', price: 'From Rs.14.00', oldPrice: 'Rs.44.00' },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-41.jpg?v=1742445682', badge: '56%', title: 'Gemstone chain bracelet', price: 'From Rs.17.00', oldPrice: 'Rs.39.00' },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-36.jpg?v=1742445682', badge: null, title: 'Cluster diamond ring', price: 'From Rs.12.00', oldPrice: null },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-31.jpg?v=1742445682', badge: null, title: 'Flora diamond bangle', price: 'Rs.28.00', oldPrice: null },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-26.jpg?v=1742445682', badge: null, title: 'Glitter diamond ring', price: 'From Rs.10.00', oldPrice: null },
    { img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-1.jpg?v=1742445682', badge: '13%', title: 'Cluster diamond ring', price: 'Rs.26.00', oldPrice: 'Rs.30.00' }
];

// Reels data
const reelsData = [
    { video: 'videos/Jelwo password1.mp4', img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-56.jpg?v=1742445682&width=165', title: 'Chic diamond ring', price: 'Rs. 22.00' },
    { video: 'videos/Jelwo password 2.mp4', img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-51.jpg?v=1742445540&width=165', title: 'Flower jhumka', price: 'Rs. 18.00' },
    { video: 'videos/Jelwo password 3.mp4', img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-1.jpg?v=1742443985&width=165', title: 'Sherbi ring', price: 'Rs. 26.00' },
    { video: 'videos/Jelwo password 4.mp4', img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-46.jpg?v=1742445430&width=165', title: 'Drop gold earrings', price: 'Rs. 14.00' },
    { video: 'videos/Jelwo password 5.mp4', img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-11.jpg?v=1742443330&width=165', title: 'Flower pandant', price: 'Rs. 22.00' },
    { video: 'videos/Jelwo password 6.mp4', img: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-1.jpg?v=1742443985&width=165', title: 'Sherbi ring', price: 'Rs. 26.00' }
];



function createProductCardInner(product) {
    const badgeHtml = product.badge ? `<div class="product-card-badge">${product.badge}</div>` : '';
    const oldPriceHtml = product.oldPrice ? `<span class="old">${product.oldPrice}</span>` : '';
    return `
    <div class="product-card">
      <div class="product-card-image">
        <a href="#"><img src="${product.img}" alt=""></a>
        <div class="product-card-timer">
          <span class="product-timer-item"><span class="strong days">00</span><em>DAYS</em></span>
          <span class="timer-sep"></span>
          <span class="product-timer-item"><span class="strong hours">00</span><em>HRS</em></span>
          <span class="timer-sep"></span>
          <span class="product-timer-item"><span class="strong minutes">00</span><em>MIN</em></span>
          <span class="timer-sep"></span>
          <span class="product-timer-item"><span class="strong seconds">00</span><em>SEC</em></span>
        </div>
        ${badgeHtml}
      </div>
      <div class="product-card-image2">   
        <img src="${product.img}" alt=""> 
        <div class="overlay">
        <!-- ✅ Wishlist -->
        <button onclick="toggleWishlist(this)" class="icon">
            <i class="fa fa-heart"></i>
            </button>
            <!-- ✅ Quick view / cart -->
            <button onclick="toggleQuickView(this)" class="icon">
            <i class="fa fa-eye"></i>
            </button>
        </div>
        ${badgeHtml}
      </div>

      <div class="product-card-info">
        <h1>JEWELRY</h1>
        <h2>${product.title}</h2>
        <p class="price"><span class="current">${product.price}</span>${oldPriceHtml}</p>
      </div>
      <div class="product-card-info2">
        <div class="product-controls">
          <div class="select-wrapper">
            <select id="size-select">
              <option value="28">28</option>
              <option value="30">30</option>
              <option value="32">32</option>
            </select>
          </div>
          <div class="quantity-wrapper">
            <button onclick="changeQty(this, -1)">-</button>
            <span class="qty">1</span>
            <button onclick="changeQty(this, 1)">+</button>
          </div>
        </div>
        <div class="cart-action">
          <button onclick="counter2.value++" class="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
  `;
}

function createProductCardSlide(product) {
    return `<div class="swiper-slide">${createProductCardInner(product)}</div>`;
}

const targetDate = new Date("December 31, 2026 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) return;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.querySelector(".days").innerText = days;
        card.querySelector(".hours").innerText = String(hours).padStart(2, '0');
        card.querySelector(".minutes").innerText = String(minutes).padStart(2, '0');
        card.querySelector(".seconds").innerText = String(seconds).padStart(2, '0');

    });
}
setInterval(updateCountdown, 1000);
updateCountdown();

function createCounter(elementId) {
    return {
        _value: 0,

        get value() {
            return this._value;
        },

        set value(newValue) {
            this._value = newValue;

            // Prevent negative values
            if (this._value < 0) this._value = 0;

            document.getElementById(elementId).innerText = this._value;
        },

        // ✅ Add function (wishlist/cart)
        add() {
            this.value = this._value + 1;
        },

        // ✅ Remove function (wishlist/cart)
        remove() {
            this.value = this._value - 1;
        }
    };
}
const counter1 = createCounter("count");        // wishlist
const counter2 = createCounter("cart-count");  // cart

// const counter1 = {
//   _value: 0, // private variable

//   // Getter → get current value
//   get value() {
//     return this._value;
//   },
//   // Setter → update value + UI
//   set value(newValue) {
//     this._value = newValue;
//     document.getElementById("count").innerText = this._value;
//   }
// };
// const counter2 = {
//   _value: 0, // private variable

//   // Getter → get current value
//   get value() {
//     return this._value;
//   },

//   // Setter → update value + UI
//   set value(newValue) {
//     this._value = newValue;
//     document.getElementById("cart-count").innerText = this._value;
//   }
// };

// Add to wishlist
function addToWishlist() {
    counter1.add();
}

// Remove from wishlist
function removeFromWishlist() {
    counter1.remove();
}

// Add to cart
function addToCart() {
    counter2.add();
}

// Remove from cart
function removeFromCart() {
    counter2.remove();
}

function toggleWishlist(btn) {
    // check if already added
    if (btn.classList.contains("active")) {
        counter1.remove(); // remove from wishlist
        btn.classList.remove("active");
    } else {
        counter1.add(); // add to wishlist
        btn.classList.add("active");
    }
}


function toggleEye(btn) {
    const icon = btn.querySelector("i");

    if (btn.classList.contains("active")) {
        btn.classList.remove("active");

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    } else {
        btn.classList.add("active");

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

function changeQty(btn, amount) {
    // find current product wrapper
    const wrapper = btn.parentElement;

    // find qty inside THIS product only
    const qtyElement = wrapper.querySelector(".qty");

    let currentQty = parseInt(qtyElement.innerText);

    currentQty += amount;

    if (currentQty < 1) {
        currentQty = 1;
    }

    qtyElement.innerText = currentQty;
}
function createReelCard(reel) {
    return `
    <div class="swiper-slide">
    <div class="reel-card">
        <video autoplay muted loop playsinline>
        <source src="${reel.video}" type="video/mp4">
        </video>
        <div class="reel-card-overlay">
        <div class="reel-product">
            <a href="#"><img src="${reel.img}" alt=""></a>
            <div>
            <a href="#">${reel.title}</a>
            <h2>${reel.price}</h2>
            </div>
            </div>
            <div class="reel-cta">
            <button onclick="counter2.value++">ADD TO CARD</button>
            </div>
        </div>
        </div>
    </div>
    `;
}

// Populate product slides
const newJewelrySlides = document.getElementById('newJewelrySlides');
if (newJewelrySlides) newJewelrySlides.innerHTML = newJewelryProducts.map(createProductCardSlide).join('');

const trendingSlides = document.getElementById('trendingSlides');
if (trendingSlides) trendingSlides.innerHTML = trendingProducts.map(createProductCardSlide).join('');

const reelsSlides = document.getElementById('reelsSlides');
if (reelsSlides) reelsSlides.innerHTML = reelsData.map(createReelCard).join('');

// *
// Populate product.html cards (no repeated HTML)
const productPageCards = document.getElementById('productPageCards');
if (productPageCards) {
    const renderProducts = products => {
        // Use the same product card template used elsewhere in this file
        productPageCards.innerHTML = products.map(createProductCardInner).join('');

        const countEl = document.querySelector('.product-count');
        if (countEl) countEl.textContent = `${products.length} products`;
    };

    const categoryFiltersEl = document.getElementById('categoryFilters');

    const applyCategoryFilters = () => {
        if (!categoryFiltersEl) {
            renderProducts(newJewelryProducts);
            return;
        }

        const selectedKeys = Array.from(
            categoryFiltersEl.querySelectorAll('input[type="checkbox"]:checked')
        ).map(input => input.value);

        const filtered =
            selectedKeys.length === 0
                ? newJewelryProducts
                : newJewelryProducts.filter(product =>
                    (product.tags || []).some(tag => selectedKeys.includes(tag))
                );

        renderProducts(filtered);
    };

    // Initial render (no category selected)
    renderProducts(newJewelryProducts);

    if (categoryFiltersEl) {
        // When user checks/unchecks a category, re-render the products.
        categoryFiltersEl.addEventListener('change', e => {
            if (e.target && e.target.matches('input[type="checkbox"]')) {
                applyCategoryFilters();
            }
        });

        // Prevent "#" navigation from the category anchor.
        categoryFiltersEl.addEventListener('click', e => {
            const anchor = e.target.closest('a[data-category-key]');
            if (!anchor) return;

            e.preventDefault();
            // Checkbox state is toggled by the <label> click; just refresh UI after it updates.
            setTimeout(applyCategoryFilters, 0);

        });
    }
}
// *

// Initialize Swiper instances (bundle includes Navigation & Autoplay)
document.addEventListener('DOMContentLoaded', function () {
    // Hero slider
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },
            loop: false
        });
    }

    // Category slider
    if (document.querySelector('.category-swiper')) {
        new Swiper('.category-swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            speed: 1500,
            autoplay: { delay: 3500, disableOnInteraction: false },
            breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    }

    // New jewelrys
    if (document.querySelector('#newJewelrySwiper')) {
        new Swiper('#newJewelrySwiper', {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: false,
            breakpoints: { 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }
        });
    }

    // Trending products
    if (document.querySelector('#trendingSwiper')) {
        new Swiper('#trendingSwiper', {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: false,
            breakpoints: { 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }
        });
    }

    // Testimonials
    if (document.querySelector('.testimonials-swiper')) {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: false,
            speed: 1500,
            autoplay: { delay: 3500, disableOnInteraction: false },
            breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }
        });
    }

    // News
    if (document.querySelector('.news-swiper')) {
        new Swiper('.news-swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            speed: 1500,
            autoplay: { delay: 3500, disableOnInteraction: false },
            breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    }

    // Reels
    if (document.querySelector('.reels-swiper')) {
        new Swiper('.reels-swiper', {
            slidesPerView: 5,
            spaceBetween: 15,
            loop: false,
            speed: 2000,
            autoplay: { delay: 4500, disableOnInteraction: false },
            breakpoints: { 320: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }
        });
    }
});
