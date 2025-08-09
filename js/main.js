(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// Keyboard Shortcuts functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add shortcuts modal HTML
    const shortcutsModal = `
    <div id="shortcutsModal" class="modal fade shortcuts-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content shortcuts-content text-white border-0 rounded-4 overflow-hidden">
                <div class="modal-header border-0 bg-gradient position-relative">
                    <h5 class="modal-title fw-bold d-flex align-items-center">
                        <i class="fas fa-keyboard me-2 text-warning"></i>
                        Keyboard Shortcuts
                    </h5>
                    <button type="button" class="btn-close btn-close-white position-absolute end-0 top-50 translate-middle-y me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="row g-3">
                        <div class="col-12 col-md-6">
                            <h6 class="text-warning mb-3 fw-semibold">
                                <i class="fas fa-navigation me-2"></i>Navigation
                            </h6>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-home me-2 text-primary"></i>Go to Home</span>
                                    <span class="shortcut-key">Alt + H</span>
                                </div>
                            </div>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-user me-2 text-info"></i>About Page</span>
                                    <span class="shortcut-key">Alt + A</span>
                                </div>
                            </div>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-cogs me-2 text-success"></i>Services</span>
                                    <span class="shortcut-key">Alt + S</span>
                                </div>
                            </div>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-briefcase me-2 text-warning"></i>Projects</span>
                                    <span class="shortcut-key">Alt + P</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6 class="text-warning mb-3 fw-semibold">
                                <i class="fas fa-tools me-2"></i>Actions
                            </h6>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-phone me-2 text-danger"></i>Contact</span>
                                    <span class="shortcut-key">Alt + C</span>
                                </div>
                            </div>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-blog me-2 text-secondary"></i>Blog</span>
                                    <span class="shortcut-key">Alt + B</span>
                                </div>
                            </div>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-search me-2 text-primary"></i>Search</span>
                                    <span class="shortcut-key">Ctrl + K</span>
                                </div>
                            </div>
                            <div class="shortcut-item p-3 mb-3 rounded-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span><i class="fas fa-question-circle me-2 text-info"></i>Show Shortcuts</span>
                                    <span class="shortcut-key">?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-4 pt-3 border-top border-secondary">
                        <small class="text-muted d-block">
                            <i class="fas fa-lightbulb me-1 text-warning"></i>
                            Tip: Use these shortcuts to navigate quickly around the website
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', shortcutsModal);
    
    // Add shortcut indicator
    const indicator = document.createElement('div');
    indicator.className = 'shortcut-indicator';
    indicator.innerHTML = '<i class="fas fa-keyboard me-1"></i><span>Press ? for shortcuts</span>';
    indicator.onclick = function() {
        const modal = new bootstrap.Modal(document.getElementById('shortcutsModal'));
        modal.show();
    };
    document.body.appendChild(indicator);
    
    // Keyboard event listeners
    document.addEventListener('keydown', function(e) {
        // Show shortcuts modal
        if (e.key === '?' && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('shortcutsModal'));
            modal.show();
            return;
        }
        
        // Navigation shortcuts (Alt + key)
        if (e.altKey && !e.ctrlKey) {
            e.preventDefault();
            switch(e.key.toLowerCase()) {
                case 'h':
                    window.location.href = 'index.html';
                    break;
                case 'a':
                    window.location.href = 'about.html';
                    break;
                case 's':
                    window.location.href = 'service.html';
                    break;
                case 'p':
                    window.location.href = 'project.html';
                    break;
                case 'c':
                    window.location.href = 'contact.html';
                    break;
                case 'b':
                    window.location.href = 'blog.html';
                    break;
            }
        }
        
        // Search functionality (Ctrl + K)
        if (e.ctrlKey && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            // Focus on search input if exists, or show search modal
            const searchInput = document.querySelector('input[type="search"], input[placeholder*="search"]');
            if (searchInput) {
                searchInput.focus();
            } else {
                // Create quick search modal
                showQuickSearch();
            }
        }
        
        // ESC to close modals
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal.show');
            openModals.forEach(modal => {
                const bsModal = bootstrap.Modal.getInstance(modal);
                if (bsModal) bsModal.hide();
            });
        }
    });
    
    // Quick search function
    function showQuickSearch() {
        const searchModal = `
        <div id="quickSearchModal" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-search me-2"></i>Quick Search</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" class="form-control" id="quickSearchInput" placeholder="Search pages, services, or content...">
                        <div id="searchResults" class="mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        if (!document.getElementById('quickSearchModal')) {
            document.body.insertAdjacentHTML('beforeend', searchModal);
            
            // Add search functionality
            const searchInput = document.getElementById('quickSearchInput');
            const resultsDiv = document.getElementById('searchResults');
            
            const pages = [
                { name: 'Home', url: 'index.html', desc: 'Main landing page' },
                { name: 'About', url: 'about.html', desc: 'Learn about Suman Solution' },
                { name: 'Services', url: 'service.html', desc: 'Our data analytics services' },
                { name: 'Projects', url: 'project.html', desc: 'Portfolio and case studies' },
                { name: 'Contact', url: 'contact.html', desc: 'Get in touch with us' },
                { name: 'Blog', url: 'blog.html', desc: 'Latest insights and articles' },
                { name: 'Team', url: 'team.html', desc: 'Meet our experts' },
                { name: 'Features', url: 'feature.html', desc: 'Why choose us' }
            ];
            
            searchInput.addEventListener('input', function() {
                const query = this.value.toLowerCase();
                const filtered = pages.filter(page => 
                    page.name.toLowerCase().includes(query) || 
                    page.desc.toLowerCase().includes(query)
                );
                
                resultsDiv.innerHTML = filtered.map(page => 
                    `<div class="list-group-item list-group-item-action" onclick="window.location.href='${page.url}'">
                        <strong>${page.name}</strong><br>
                        <small class="text-muted">${page.desc}</small>
                    </div>`
                ).join('');
            });
        }
        
        const modal = new bootstrap.Modal(document.getElementById('quickSearchModal'));
        modal.show();
        setTimeout(() => document.getElementById('quickSearchInput').focus(), 300);
    }
    
    // Add accessibility improvements
    document.querySelectorAll('a, button').forEach(element => {
        if (!element.getAttribute('aria-label') && element.innerHTML.includes('fa-')) {
            element.setAttribute('aria-label', 'Interactive element');
        }
    });
});

// Newsletter Subscription Function
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate newsletter subscription
    alert(`Thank you! You've successfully subscribed to our newsletter with ${email}`);
    emailInput.value = '';
}

// Quick Navigation Toggle Function
function toggleQuickNav() {
    const menu = document.getElementById('quickNavMenu');
    const icon = document.getElementById('quickNavIcon');
    
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        menu.classList.add('show');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
}

// Close quick nav when clicking outside
document.addEventListener('click', function(event) {
    const quickNav = document.getElementById('quick-nav');
    const menu = document.getElementById('quickNavMenu');
    
    if (quickNav && !quickNav.contains(event.target) && menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        const icon = document.getElementById('quickNavIcon');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

