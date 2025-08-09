
const fs = require('fs');

const pages = [
    'index.html',
    'about.html',
    'service.html',
    'contact.html',
    'project.html',
    'feature.html',
    'team.html',
    'testimonial.html',
    'blog.html',
    'join-us.html',
    'terms-conditions.html',
    'privacy-policy.html'
];

const improvedLogoHTML = `            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <div class="logo-container">
                    <div class="logo-icon"></div>
                    <div class="logo-text">
                        <div class="logo-title">SATYAM SUMAN</div>
                        <div class="logo-subtitle">Tech Solutions</div>
                    </div>
                </div>
            </a>`;

pages.forEach(page => {
    if (fs.existsSync(page)) {
        console.log(`Updating ${page}...`);
        let content = fs.readFileSync(page, 'utf8');
        
        // Update logo - find existing navbar-brand and replace
        content = content.replace(
            /<a href="index\.html" class="navbar-brand[^>]*>[\s\S]*?<\/a>/g,
            improvedLogoHTML
        );
        
        fs.writeFileSync(page, content, 'utf8');
        console.log(`✓ Updated ${page}`);
    } else {
        console.log(`⚠ File ${page} not found`);
    }
});

console.log('\n🎉 All pages updated with improved logo design!');
console.log('\nLogo improvements include:');
console.log('- Enhanced gradient background with animated rocket emoji');
console.log('- Smooth hover effects with scaling and rotation');
console.log('- Shine animation on hover');
console.log('- Floating animation for the rocket');
console.log('- Gradient text effect for the title');
console.log('- Better responsive design');
console.log('- Dark mode support');
