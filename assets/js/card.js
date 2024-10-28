const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const closeButton = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Show popup and overlay
cartIcon.addEventListener('click', function () {
    cartPopup.classList.add('open');
    overlay.classList.add('show');
});

// Close popup and overlay when "x" is clicked
closeButton.addEventListener('click', function () {
    cartPopup.classList.remove('open');
    overlay.classList.remove('show');
});

// Optional: Close popup when the overlay is clicked
overlay.addEventListener('click', function () {
    cartPopup.classList.remove('open');
    overlay.classList.remove('show');
});