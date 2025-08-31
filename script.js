// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Shopping Cart Functionality
let cart = [];
let cartTotal = 0;

// Initialize cart from localStorage if available
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartDisplay();
}

// Add to cart functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', '').replace('/lb', ''));
        
        addToCart(productName, productPrice);
    }
});

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    
    // Show success message
    showNotification(`${productName} added to cart!`);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (!cartItems) return;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    // Update cart items display
    cartItems.innerHTML = '';
    cartTotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}/lb × ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <span class="cart-item-total">$${itemTotal.toFixed(2)}</span>
                <button class="remove-item" onclick="removeFromCart('${item.name}')">×</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Update total
    if (cartTotalElement) cartTotalElement.textContent = cartTotal.toFixed(2);
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
    saveCartToStorage();
    showNotification(`${productName} removed from cart!`);
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cart toggle functionality
function toggleCart() {
    const cartPreview = document.getElementById('cart-preview');
    if (cartPreview) {
        cartPreview.classList.toggle('active');
    }
}

// Product filtering functionality
function applyFilters() {
    const meatType = document.getElementById('meat-type').value;
    const cutType = document.getElementById('cut-type').value;
    const priceRange = document.getElementById('price-range').value;
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardMeatType = card.dataset.type;
        const cardCutType = card.dataset.cut;
        const cardPrice = card.dataset.price;
        
        let showCard = true;
        
        // Filter by meat type
        if (meatType !== 'all' && cardMeatType !== meatType) {
            showCard = false;
        }
        
        // Filter by cut type
        if (cutType !== 'all' && cardCutType !== cutType) {
            showCard = false;
        }
        
        // Filter by price range
        if (priceRange !== 'all' && cardPrice !== priceRange) {
            showCard = false;
        }
        
        // Show/hide card
        card.style.display = showCard ? 'block' : 'none';
    });
    
    // Show results count
    const visibleCards = document.querySelectorAll('.product-card[style="display: block"], .product-card:not([style*="display"])');
    showNotification(`${visibleCards.length} products found`);
}

function clearFilters() {
    // Reset filter selects
    document.getElementById('meat-type').value = 'all';
    document.getElementById('cut-type').value = 'all';
    document.getElementById('price-range').value = 'all';
    
    // Show all products
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.display = 'block';
    });
    
    showNotification('Filters cleared');
}

// Notification system
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--sage-green);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-hover);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form submission
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            showNotification('Thank you for subscribing!');
            this.reset();
        }
    });
});

// Checkout functionality (placeholder for Square integration)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn')) {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        
        // This would integrate with Square API
        showNotification('Redirecting to Square checkout...');
        
        // For demo purposes, clear cart after "checkout"
        setTimeout(() => {
            cart = [];
            updateCartDisplay();
            saveCartToStorage();
            toggleCart();
            showNotification('Order placed successfully! (Demo)');
        }, 2000);
    }
});

// Add hover effects for product cards
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Lazy loading for images (placeholder for future implementation)
function lazyLoadImages() {
    const imagePlaceholders = document.querySelectorAll('.ai-image-placeholder');
    
    // This would be replaced with actual image loading when AI images are available
    imagePlaceholders.forEach(placeholder => {
        // Simulate loading effect
        placeholder.style.opacity = '0.8';
        setTimeout(() => {
            placeholder.style.opacity = '1';
        }, 500);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add quantity controls to cart items (future enhancement)
function addQuantityControls() {
    const cartItems = document.querySelectorAll('.cart-item');
    
    cartItems.forEach(item => {
        const quantityControls = document.createElement('div');
        quantityControls.className = 'quantity-controls';
        quantityControls.innerHTML = `
            <button class="qty-btn minus">-</button>
            <span class="qty-display">1</span>
            <button class="qty-btn plus">+</button>
        `;
        
        // This would be implemented for quantity adjustment
    });
}

// Export functions for global access
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.toggleCart = toggleCart;
window.removeFromCart = removeFromCart;
