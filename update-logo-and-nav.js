
// Script to update all HTML pages with consistent logo and quick navigation
const fs = require('fs');
const path = require('path');

const pages = [
    'service.html',
    'project.html', 
    'testimonial.html',
    'blog.html',
    'contact.html',
    'join-us.html',
    'admin-login.html',
    'terms-conditions.html',
    'privacy-policy.html'
];

const logoHTML = `            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="display-5 m-0 text-primary fw-bold">
                    <div class="brand-icon">
                        <span class="flying-rocket">🚀</span>
                    </div>
                    SATYAM SUMAN
                </h1>
            </a>`;

const quickNavHTML = `    <!-- Quick Navigation Widget -->
    <div id="quick-nav" class="position-fixed" style="top: 50%; right: 20px; transform: translateY(-50%); z-index: 1050;">
        <div class="bg-white rounded-3 shadow-lg p-2" style="width: 60px;">
            <!-- Toggle Button -->
            <button class="quick-nav-toggle d-flex align-items-center justify-content-center mb-2" 
                    onclick="toggleQuickNav()" 
                    title="Quick Navigation" 
                    data-bs-toggle="tooltip">
                <i class="fas fa-bars" id="quickNavIcon"></i>
            </button>
            
            <!-- Navigation Menu -->
            <div class="quick-nav-menu" id="quickNavMenu">
                <div class="d-flex flex-column gap-2">
                    <a href="index.html" class="btn btn-sm btn-outline-primary rounded-circle p-2" title="Home" data-bs-toggle="tooltip">
                        <i class="fas fa-home"></i>
                    </a>
                    <a href="about.html" class="btn btn-sm btn-outline-primary rounded-circle p-2" title="About" data-bs-toggle="tooltip">
                        <i class="fas fa-user"></i>
                    </a>
                    <a href="service.html" class="btn btn-sm btn-outline-primary rounded-circle p-2" title="Services" data-bs-toggle="tooltip">
                        <i class="fas fa-cogs"></i>
                    </a>
                    <a href="project.html" class="btn btn-sm btn-outline-primary rounded-circle p-2" title="Projects" data-bs-toggle="tooltip">
                        <i class="fas fa-briefcase"></i>
                    </a>
                    <a href="feature.html" class="btn btn-sm btn-outline-warning rounded-circle p-2" title="Features" data-bs-toggle="tooltip">
                        <i class="fas fa-star"></i>
                    </a>
                    <a href="team.html" class="btn btn-sm btn-outline-info rounded-circle p-2" title="Team" data-bs-toggle="tooltip">
                        <i class="fas fa-users"></i>
                    </a>
                    <a href="testimonial.html" class="btn btn-sm btn-outline-success rounded-circle p-2" title="Testimonials" data-bs-toggle="tooltip">
                        <i class="fas fa-quote-left"></i>
                    </a>
                    <a href="blog.html" class="btn btn-sm btn-outline-secondary rounded-circle p-2" title="Blog" data-bs-toggle="tooltip">
                        <i class="fas fa-blog"></i>
                    </a>
                    <a href="contact.html" class="btn btn-sm btn-outline-danger rounded-circle p-2" title="Contact" data-bs-toggle="tooltip">
                        <i class="fas fa-phone"></i>
                    </a>
                    
                    <!-- Social Links -->
                    <hr class="my-2">
                    <a href="#" class="btn btn-sm btn-outline-success rounded-circle p-2" title="WhatsApp" data-bs-toggle="tooltip" onclick="window.open('https://wa.me/918227027353', '_blank')">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-outline-info rounded-circle p-2" title="Telegram" data-bs-toggle="tooltip" onclick="window.open('https://t.me/satyamsuman2003', '_blank')">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-outline-primary rounded-circle p-2" title="LinkedIn" data-bs-toggle="tooltip" onclick="window.open('https://www.linkedin.com/in/satyamsuman2003/', '_blank')">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-outline-dark rounded-circle p-2" title="GitHub" data-bs-toggle="tooltip" onclick="window.open('https://github.com/SATYAMSUMAN24', '_blank')">
                        <i class="fab fa-github"></i>
                    </a>
                    
                    <!-- Utility Actions -->
                    <hr class="my-2">
                    <a href="#" class="btn btn-sm btn-outline-secondary rounded-circle p-2" title="Back to Top" data-bs-toggle="tooltip" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                        <i class="fas fa-arrow-up"></i>
                    </a>
                    <a href="join-us.html" class="btn btn-sm btn-outline-warning rounded-circle p-2" title="Join Us" data-bs-toggle="tooltip">
                        <i class="fas fa-user-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>`;

const rocketAnimationCSS = `    <!-- Flying rocket animation -->
    <style>
        .flying-rocket {
            display: inline-block;
            animation: fly 3s ease-in-out infinite;
            font-size: 1.5em;
            margin-right: 10px;
        }

        .brand-icon {
            display: inline-flex;
            align-items: center;
        }

        @keyframes fly {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
            }
            25% {
                transform: translateY(-10px) rotate(-5deg);
            }
            50% {
                transform: translateY(-5px) rotate(5deg);
            }
            75% {
                transform: translateY(-15px) rotate(-3deg);
            }
        }

        .navbar-brand:hover .flying-rocket {
            animation: launch 0.8s ease-out;
        }

        @keyframes launch {
            0% {
                transform: translateY(0px) scale(1);
            }
            50% {
                transform: translateY(-30px) scale(1.2) rotate(10deg);
            }
            100% {
                transform: translateY(0px) scale(1);
            }
        }

        /* Responsive logo adjustments */
        @media (max-width: 768px) {
            .flying-rocket {
                font-size: 1.2em;
                margin-right: 8px;
            }
            .navbar-brand h1 {
                font-size: 1.8rem !important;
            }
        }

        @media (max-width: 576px) {
            .flying-rocket {
                font-size: 1em;
                margin-right: 6px;
            }
            .navbar-brand h1 {
                font-size: 1.5rem !important;
            }
        }
    </style>`;

const quickNavJS = `    <!-- Quick Navigation Functions -->
    <script>
        function toggleQuickNav() {
            const menu = document.getElementById('quickNavMenu');
            const icon = document.getElementById('quickNavIcon');
            
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                icon.className = 'fas fa-bars';
            } else {
                menu.classList.add('show');
                icon.className = 'fas fa-times';
            }
        }

        // Initialize tooltips
        document.addEventListener('DOMContentLoaded', function() {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        });
    </script>`;

pages.forEach(page => {
    if (fs.existsSync(page)) {
        console.log(`Updating ${page}...`);
        let content = fs.readFileSync(page, 'utf8');
        
        // Update logo
        content = content.replace(
            /<a href="index\.html" class="navbar-brand[^>]*>[\s\S]*?<\/a>/,
            logoHTML
        );
        
        // Add rocket animation CSS if not present
        if (!content.includes('flying-rocket')) {
            content = content.replace(
                /<\/head>/,
                `${rocketAnimationCSS}\n</head>`
            );
        }
        
        // Add quick navigation if not present
        if (!content.includes('quick-nav')) {
            content = content.replace(
                /<\/body>/,
                `${quickNavHTML}\n\n${quickNavJS}\n</body>`
            );
        }
        
        fs.writeFileSync(page, content, 'utf8');
        console.log(`✓ Updated ${page}`);
    }
});

console.log('All pages updated with consistent logo and quick navigation!');
