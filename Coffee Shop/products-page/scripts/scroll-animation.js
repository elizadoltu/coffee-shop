let animationsTriggered = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!animationsTriggered) {
                    if (entry.target.id == 'landingImage') {
                    const introductionTitle = document.querySelector('.introduction-title');
                    introductionTitle.classList.add('show-titles');
                }
                
                animationsTriggered = true;
            }
            entry.target.classList.add('show-titles');
            entry.target.classList.add('show-subtitle')
        }
        else {
            entry.target.classList.remove('show-titles');
        }
    })
})

const hiddenElements = document.querySelectorAll('.product-name, .product-description, .product, .subtitle-products, .coffee-title, .coffee-icon');
hiddenElements.forEach((el) => observer.observe(el));