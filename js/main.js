// ==========================================
// MOBILE MENU FUNCTIONALITY
// This makes the hamburger menu work on mobile devices
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get the hamburger button and menu elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // When hamburger is clicked, toggle the menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle 'active' class on hamburger (for animation)
            hamburger.classList.toggle('active');
            // Toggle 'active' class on menu (to show/hide)
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT (Optional)
// Makes navbar slightly transparent when at top
// ==========================================

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// Makes internal page links scroll smoothly
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply smooth scroll to actual anchor links, not just "#"
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// FORM HANDLING EXAMPLE (Optional)
// Add this to your contact page if needed
// ==========================================

// Uncomment this section if you want to handle form submissions
/*
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Here you would normally send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
    });
}
*/
