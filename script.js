// Script for Local Build Solutions

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Stats counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let count = 0;
            const increment = target / speed;
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count) + (target === 98 ? '%' : '+');
                    setTimeout(updateCount, 15);
                } else {
                    counter.textContent = target + (target === 98 ? '%' : '+');
                }
            };
            
            updateCount();
        });
    }
    
    // Trigger counters when stats section is visible
    const statsSection = document.getElementById('stats');
    let statsAnimated = false;
    
    function checkStatsVisibility() {
        if (statsAnimated) return;
        
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            animateCounters();
            statsAnimated = true;
        }
    }
    
    window.addEventListener('scroll', checkStatsVisibility);
    
    // Scroll reveal animations
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check for animations
    setTimeout(() => {
        handleScrollAnimations();
    }, 800);
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Lightbox functionality
    let currentProject = 0;
    const projects = [
        {
            img: 'https://picsum.photos/id/1015/1200/800',
            caption: 'Modern Housing Development - 50 luxury family homes completed in 2025'
        },
        {
            img: 'https://picsum.photos/id/201/1200/800',
            caption: 'Commercial Office Build - Innovative tech headquarters'
        },
        {
            img: 'https://picsum.photos/id/251/1200/800',
            caption: 'Luxury Home Renovation - Complete Victorian mansion transformation'
        },
        {
            img: 'https://picsum.photos/id/870/1200/800',
            caption: 'Industrial Facility - State-of-the-art manufacturing plant'
        }
    ];
    
    window.openLightbox = function(index) {
        currentProject = index;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        
        lightboxImg.src = projects[index].img;
        lightboxCaption.textContent = projects[index].caption;
        lightbox.style.display = 'flex';
    };
    
    // Close lightbox
    const closeLightbox = document.querySelector('.close-lightbox');
    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            document.getElementById('lightbox').style.display = 'none';
        });
    }
    
    // Close lightbox on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
    
    // Keyboard escape support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const lb = document.getElementById('lightbox');
            if (lb.style.display === 'flex') {
                lb.style.display = 'none';
            }
        }
    });
    
    // Contact form submission (demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been received. A member of our team will contact you shortly.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Bootstrap carousel auto-play (already handled by Bootstrap)
    console.log('%cLocal Build Solutions website loaded successfully!', 'color: #d4af37; font-weight: bold;');
});