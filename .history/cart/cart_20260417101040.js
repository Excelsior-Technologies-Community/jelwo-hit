let price = 999;
let qty = 1;

function addToCart() {

    document.getElementById("cart").classList.add("active");

    document.getElementById("cart-items").innerHTML = `
<div class="cart-box">
<img src="https://via.placeholder.com/80">
<div class="cart-info">
<h4>Running Shoes</h4>
<p>₹${price}</p>

<div class="qty">
<button onclick="minus()">-</button>
<span id="qty">${qty}</span>
<button onclick="plus()">+</button>
</div>

<div class="remove" onclick="removeItem()">Remove</div>

</div>
</div>
`;

    updateTotal();
}

function closeCart() {
    document.getElementById("cart").classList.remove("active");
}

function plus() {
    qty++;
    document.getElementById("qty").innerText = qty;
    updateTotal();
}

function minus() {
    if (qty > 1) {
        qty--;
        document.getElementById("qty").innerText = qty;
        updateTotal();
    }
}

function updateTotal() {
    document.getElementById("total").innerText = price * qty;
}

function removeItem() {
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total").innerText = 0;
}