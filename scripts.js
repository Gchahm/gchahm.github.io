/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling for navigation links
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
  
    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        z-index: 1000;
        padding: 1rem;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    `;
  
    document.body.appendChild(scrollToTopBtn);
  
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'translateY(20px)';
        }
    });
  
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
  
    // Responsive menu handling
    const menuToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (menuToggle && navbarCollapse) {
        menuToggle.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
  
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target) && !menuToggle.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }
  
    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
  
    // Animate elements when they come into view
    document.querySelectorAll('.card, .section-title, .btn-primary').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
  
    // Add animation class
    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
  
    // Form validation and floating labels
    const formInputs = document.querySelectorAll('.form-control');
  
    formInputs.forEach(input => {
        const label = input.previousElementSibling;
        if (label && label.classList.contains('form-label')) {
            // Add floating label class
            label.classList.add('floating-label');
            
            // Check initial value
            if (input.value) {
                label.classList.add('active');
            }
  
            // Handle input events
            input.addEventListener('focus', () => {
                label.classList.add('active');
            });
  
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('active');
                }
            });
        }
    });
  
    // Add CSS for floating labels
    const style = document.createElement('style');
    style.textContent = `
        .floating-label {
            position: absolute;
            top: 0;
            left: 0;
            padding: 0.5rem;
            pointer-events: none;
            transition: all 0.2s ease;
            color: #6b7280;
        }
  
        .floating-label.active {
            transform: translateY(-1.5rem) scale(0.85);
            color: var(--primary-color);
        }
  
        .form-control {
            padding-top: 1.5rem;
        }
  
        .dark-mode .floating-label {
            color: #9ca3af;
        }
  
        .dark-mode .floating-label.active {
            color: var(--text-dark);
        }
    `;
    document.head.appendChild(style);
  
  })(jQuery); // End of use strict
  