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
        }
        else {
            entry.target.classList.remove('show-titles');
        }
    })
})

const hiddenElements = document.querySelectorAll('.introduction-title, .menu-list, .about-us-title, .story-description, .about-us-image, .quote-about-us, .our-service-title, .quote-services, .services-image, .services-description, .our-products-title, .our-products-description, .our-products-image, .quote-shop, .more-products-button');
hiddenElements.forEach((el) => observer.observe(el));