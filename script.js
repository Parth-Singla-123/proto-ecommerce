// Cart storage
let cart = [];

// Function to add item to cart
function addToCart(productName, price, quantity) {
    const product = { productName, price, quantity };
    cart.push(product);
    updateCart();
}

// Function to update the cart in UI
function updateCart() {
    const cartButton = document.querySelector('.cart-button');
    const cartTotal = document.getElementById('cartTotal');
    const cartItems = document.getElementById('cartItems');
    
    // Update cart button
    cartButton.textContent = `Cart (${cart.length})`;

    // Update total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotal.textContent = totalPrice.toFixed(2);

    // Update cart items in modal
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
    });
}

// Function to view cart
function viewCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'flex';
}

// Function to close cart modal
function closeCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}

// Function to checkout
function checkout() {
    alert("Proceeding to checkout...");
}

// Function to filter products based on search input
function filterProducts() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
