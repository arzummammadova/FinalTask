document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');
        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.textContent = '✕';
        } else {
            content.style.display = 'none';
            icon.textContent = '+';
        }
    });
});
