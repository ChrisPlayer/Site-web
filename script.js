document.addEventListener("DOMContentLoaded", function() {
    const pageTransitionElement = document.createElement('div');
    pageTransitionElement.classList.add('page-transition');
    document.body.appendChild(pageTransitionElement);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Page transition effect
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const target = link.getAttribute('href');
            if (target && !target.includes('#')) {
                event.preventDefault();
                pageTransitionElement.classList.add('fade-out');
                document.body.classList.remove('fade-in-visible');
                setTimeout(() => {
                    window.location.href = target;
                }, 500); // Corresponds to the animation duration in CSS
            }
        });
    });

    // Handle page load transition
    window.addEventListener('pageshow', function(event) {
        if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
            pageTransitionElement.classList.remove('fade-out');
        }
        pageTransitionElement.classList.add('fade-in');
        document.body.classList.add('fade-in');
        setTimeout(() => {
            document.body.classList.add('fade-in-visible');
        }, 50); // Ensure the class is added after a slight delay
    });
});
