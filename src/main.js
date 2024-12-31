import './style.css'
import '@phosphor-icons/web/regular'

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animation to main content
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
      main.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    });
});
