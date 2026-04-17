
// ---------- STATE MANAGEMENT ----------
// Selected size (default 28)
let selectedSize = "28";
// Current quantity (min 1, max based on stock = 16)
let currentQty = 1;
const MAX_STOCK = 16;

// DOM elements
const sizeBtns = document.querySelectorAll('.size-btn');
const quantitySpan = document.getElementById('quantityValue');
const decreaseBtn = document.getElementById('decreaseQty');
const increaseBtn = document.getElementById('increaseQty');
const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const stockNoteSpan = document.getElementById('stockNote');

// Helper: update quantity display and button states / note
function updateQuantityUI() {
    quantitySpan.innerText = currentQty;
    // optional note about stock
    if (currentQty >= MAX_STOCK) {
        stockNoteSpan.innerText = `Maximum ${MAX_STOCK} items available`;
    } else {
        stockNoteSpan.innerText = `Only ${MAX_STOCK} available`;
    }
    // visually disable increase if at max (but button still prevents increment)
    if (currentQty >= MAX_STOCK) {
        increaseBtn.style.opacity = "0.5";
        increaseBtn.style.cursor = "not-allowed";
    } else {
        increaseBtn.style.opacity = "1";
        increaseBtn.style.cursor = "pointer";
    }
    if (currentQty <= 1) {
        decreaseBtn.style.opacity = "0.5";
        decreaseBtn.style.cursor = "not-allowed";
    } else {
        decreaseBtn.style.opacity = "1";
        decreaseBtn.style.cursor = "pointer";
    }
}

// Increase quantity (respect MAX_STOCK)
function increaseQuantity() {
    if (currentQty < MAX_STOCK) {
        currentQty++;
        updateQuantityUI();
    } else {
        // optional gentle feedback
        stockNoteSpan.innerText = `Only ${MAX_STOCK} in stock, cannot exceed`;
        setTimeout(() => {
            if (currentQty === MAX_STOCK) stockNoteSpan.innerText = `Maximum ${MAX_STOCK} items available`;
            else stockNoteSpan.innerText = `Only ${MAX_STOCK} available`;
        }, 1500);
    }
}

// Decrease quantity (min 1)
function decreaseQuantity() {
    if (currentQty > 1) {
        currentQty--;
        updateQuantityUI();
    } else {
        stockNoteSpan.innerText = `Minimum quantity is 1`;
        setTimeout(() => {
            if (currentQty === MAX_STOCK) stockNoteSpan.innerText = `Maximum ${MAX_STOCK} items available`;
            else stockNoteSpan.innerText = `Only ${MAX_STOCK} available`;
        }, 1200);
    }
}

// Size selection handler
function handleSizeSelection(sizeValue, clickedBtn) {
    selectedSize = sizeValue;
    // update active class on buttons
    sizeBtns.forEach(btn => {
        if (btn.getAttribute('data-size') === sizeValue) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Add to cart logic (show alert with details)
function addToCartAction() {
    const productName = "Glitter diamond ring";
    const color = "Beige";
    const totalPrice = (currentQty * 10.00).toFixed(2);
    alert(`🛒 Added to cart!\n\n${productName}\nSize: ${selectedSize}\nColor: ${color}\nQuantity: ${currentQty}\nTotal: Rs. ${totalPrice}\n\nTax included. Shipping calculated at checkout.`);
    // optional: simulate cart update (just UI feedback)
}

// Buy it now action (proceed to checkout simulation)
function buyNowAction() {
    const productName = "Glitter diamond ring";
    const color = "Beige";
    const totalPrice = (currentQty * 10.00).toFixed(2);
    alert(`💎 Proceed to checkout\n\n${productName}\nSize: ${selectedSize}\nColor: ${color}\nQuantity: ${currentQty}\nTotal: Rs. ${totalPrice}\n\nYou will be redirected to secure payment.`);
    // realistic product purchase simulation
}

// -------- EVENT LISTENERS ----------
// Size buttons
sizeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const sizeVal = btn.getAttribute('data-size');
        handleSizeSelection(sizeVal, btn);
    });
});

// Quantity controls
decreaseBtn.addEventListener('click', decreaseQuantity);
increaseBtn.addEventListener('click', increaseQuantity);

// Buttons actions
addToCartBtn.addEventListener('click', addToCartAction);
buyNowBtn.addEventListener('click', buyNowAction);

// Edge: ensure if user manually wants to set quantity via any external? not needed. But also check that when stock is 0? no, stock 16.
// Initialize UI with correct quantity note
updateQuantityUI();

// Also set initial size to 28 (already active in HTML, but double-check consistency)
// ensure selectedSize variable matches active button
const activeSizeBtn = document.querySelector('.size-btn.active');
if (activeSizeBtn) {
    selectedSize = activeSizeBtn.getAttribute('data-size');
} else {
    // fallback
    selectedSize = "28";
    document.querySelector('[data-size="28"]').classList.add('active');
}

// Add a micro-interaction: when clicking size, we also provide a small console-free experience
// For better readability, show that "size selected" subtle (just visual)
// Additionally, make sure maximum quantity cannot exceed stock even if multiple events fast
// Also ensures no negative quantity: perfect

// bonus: prevent invalid numeric override if any (but we only use buttons)
// reset any potential manual error
window.addEventListener('load', () => {
    // double-check that quantity is within range
    if (currentQty > MAX_STOCK) currentQty = MAX_STOCK;
    if (currentQty < 1) currentQty = 1;
    updateQuantityUI();
});