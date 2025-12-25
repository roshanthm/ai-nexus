// Initialize Vanta.js animated background
document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00f0ff,
        backgroundColor: 0x0a0a20,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00
    });
    
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.float');
    floatingElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Tool card hover effects
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bounce');
                setTimeout(() => {
                    icon.classList.remove('fa-bounce');
                }, 1000);
            }
        });
    });
    
    // Typewriter effect
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        setTimeout(() => {
            typewriter.style.borderRight = 'none';
        }, 3500);
    }
    
    // Scroll animations
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const vantaBg = document.getElementById('vanta-bg');
        
        if (vantaBg) {
            vantaBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
        
        // Parallax effect for sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition > sectionTop - window.innerHeight + sectionHeight * 0.5) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize sections with fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Trigger first section animation
    if (sections.length > 0) {
        setTimeout(() => {
            sections[0].style.opacity = '1';
            sections[0].style.transform = 'translateY(0)';
        }, 300);
    }
});