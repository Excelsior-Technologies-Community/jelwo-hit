
        (function () {
            // DOM elements
            const quantitySpan = document.getElementById('quantityValue');
            const decrementBtn = document.getElementById('decrementQty');
            const incrementBtn = document.getElementById('incrementQty');
            const addToCartBtn = document.getElementById('addToCartBtn');
            const buyNowBtn = document.getElementById('buyNowBtn');

            // product info
            const productName = "Simple Pearl earrings";
            const maxStock = 16;      // "16 in stock"
            let currentQty = 1;       // default quantity = 1

            // Helper: update UI (quantity display + button states)
            function updateQuantityUI() {
                // update displayed number
                quantitySpan.innerText = currentQty;

                // manage disabled states for decrement / increment based on bounds
                if (decrementBtn) {
                    decrementBtn.disabled = (currentQty <= 1);
                }
                if (incrementBtn) {
                    incrementBtn.disabled = (currentQty >= maxStock);
                }
            }

            // increment function
            function incrementQuantity() {
                if (currentQty < maxStock) {
                    currentQty++;
                    updateQuantityUI();
                } else {
                    // optional subtle visual feedback
                    if (incrementBtn) {
                        incrementBtn.style.transform = "scale(0.97)";
                        setTimeout(() => { if (incrementBtn) incrementBtn.style.transform = ""; }, 150);
                    }
                    // gentle alert? Not intrusive but shows limit
                    showTemporaryMessage(`Only ${maxStock} pieces available in stock.`, "info");
                }
            }

            // decrement function
            function decrementQuantity() {
                if (currentQty > 1) {
                    currentQty--;
                    updateQuantityUI();
                } else {
                    if (decrementBtn) {
                        decrementBtn.style.transform = "scale(0.97)";
                        setTimeout(() => { if (decrementBtn) decrementBtn.style.transform = ""; }, 150);
                    }
                    showTemporaryMessage("Quantity cannot be less than 1", "info");
                }
            }

            // small non-blocking toast-style alert (avoids spamming popups but informative)
            let toastTimeout = null;
            function showTemporaryMessage(msg, type = "info") {
                // check if we have an existing toast and remove it
                const existingToast = document.querySelector('.dynamic-toast-msg');
                if (existingToast) existingToast.remove();
                if (toastTimeout) clearTimeout(toastTimeout);

                const toast = document.createElement('div');
                toast.className = 'dynamic-toast-msg';
                toast.style.position = 'fixed';
                toast.style.bottom = '24px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.backgroundColor = type === 'error' ? '#e63946' : '#1e293b';
                toast.style.color = '#fff';
                toast.style.padding = '10px 20px';
                toast.style.borderRadius = '60px';
                toast.style.fontSize = '0.85rem';
                toast.style.fontWeight = '500';
                toast.style.zIndex = '999';
                toast.style.boxShadow = '0 8px 18px rgba(0,0,0,0.1)';
                toast.style.backdropFilter = 'blur(4px)';
                toast.style.fontFamily = "'Inter', sans-serif";
                toast.style.whiteSpace = 'nowrap';
                toast.style.maxWidth = '90%';
                toast.style.whiteSpace = 'normal';
                toast.style.textAlign = 'center';
                toast.style.pointerEvents = 'none';
                toast.innerText = msg;
                document.body.appendChild(toast);

                toastTimeout = setTimeout(() => {
                    if (toast && toast.remove) toast.remove();
                }, 2200);
            }

            // add to cart action (using current quantity)
            function addToCart() {
                if (currentQty <= maxStock && currentQty >= 1) {
                    showTemporaryMessage(`🛍️ Added ${currentQty} × "${productName}" to your cart.`, "success");
                    // optional: simulate console log
                    console.log(`[CART] ${currentQty} pcs of ${productName} added. Stock left: ${maxStock - currentQty}`);
                    // (no actual backend - just user feedback)
                } else {
                    showTemporaryMessage(`Invalid quantity (${currentQty})`, "error");
                }
            }

            // buy it now action
            function buyNow() {
                if (currentQty <= maxStock && currentQty > 0) {
                    showTemporaryMessage(`⚡ Proceeding to checkout with ${currentQty} item(s) — ${productName}.`, "success");
                    // in a real store you'd redirect, here just demonstration
                } else {
                    showTemporaryMessage(`Please adjust quantity (max ${maxStock})`, "error");
                }
            }

            // attach listeners
            if (incrementBtn) incrementBtn.addEventListener('click', incrementQuantity);
            if (decrementBtn) decrementBtn.addEventListener('click', decrementQuantity);
            if (addToCartBtn) addToCartBtn.addEventListener('click', addToCart);
            if (buyNowBtn) buyNowBtn.addEventListener('click', buyNow);

            // initial sync UI (disable decrement at start because qty = 1)
            updateQuantityUI();

            // also set an additional safeguard: on page load ensure stock & quantity align
            // no direct conflict, but we also check if stock info container can be dynamically updated if needed
            // (optional extra: show stock text with dynamic remaining but not mandatory)
            const stockSpan = document.querySelector('.stock-info span');
            if (stockSpan) {
                // just to reflect max stock (already correct)
                stockSpan.innerText = `${maxStock} in stock`;
            }

            // Hover effect improvement: Photo area provides proper placeholder and aspect ratio
            // but nothing else needed. Ensure that the photo container is always ready for user image.
            // The user said "i have the photo so don't put the photo and leave photo section empty" 
            // Exactly no product image, just reserved space. Perfect.
        })();