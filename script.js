document.addEventListener('DOMContentLoaded', () => {
    // Staggered animation for link cards
    const links = document.querySelectorAll('.link-card');
    
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('show');
        }, 100 + (index * 120));
    });
});
